from django.contrib import admin
from django.utils.html import format_html
from django.urls import reverse
from django.utils.safestring import mark_safe
from import_export.admin import ImportExportModelAdmin
from import_export import resources
from .models import (
    EventConfiguration,
    AboutSection,
    Speaker,
    ProgramDay,
    ProgramSession,
    Venue,
    Partner,
    Hotel,
    RoomType,
    LogisticInfo,
    Contact,
    Registration,
    ContactMessage,
    FAQ,
    Newsletter,
)


# ========== RESOURCES FOR IMPORT/EXPORT ==========


class RegistrationResource(resources.ModelResource):
    class Meta:
        model = Registration
        fields = (
            "registration_number",
            "fullname",
            "email",
            "phone",
            "organization",
            "country",
            "status",
            "created_at",
        )
        export_order = fields


class ContactMessageResource(resources.ModelResource):
    class Meta:
        model = ContactMessage
        fields = (
            "first_name",
            "last_name",
            "email",
            "phone",
            "subject",
            "message",
            "is_read",
            "created_at",
        )


# ========== INLINE ADMINS ==========


class RoomTypeInline(admin.TabularInline):
    model = RoomType
    extra = 1
    fields = ("name", "icon_class", "price_ngn", "order", "is_active")


class ProgramSessionInline(admin.TabularInline):
    model = ProgramSession
    extra = 0
    fields = ("title", "session_type", "start_time", "end_time", "venue", "order")
    show_change_link = True


# ========== ADMIN CLASSES ==========


@admin.register(EventConfiguration)
class EventConfigurationAdmin(admin.ModelAdmin):
    list_display = (
        "event_name",
        "start_date",
        "end_date",
        "location",
        "registration_open",
        "is_active",
    )
    list_filter = ("is_active", "registration_open", "start_date")
    search_fields = ("event_name", "location")

    fieldsets = (
        (
            "Event Information",
            {
                "fields": (
                    "event_name",
                    "tagline",
                    "subtitle",
                    "start_date",
                    "end_date",
                    "location",
                    "registration_deadline",
                )
            },
        ),
        ("Assets", {"fields": ("logo", "favicon", "hero_video_url")}),
        (
            "SEO",
            {"fields": ("meta_description", "meta_keywords"), "classes": ("collapse",)},
        ),
        ("Status", {"fields": ("is_active", "registration_open")}),
    )

    def has_add_permission(self, request):
        # Allow only one configuration
        if EventConfiguration.objects.exists():
            return False
        return super().has_add_permission(request)


@admin.register(AboutSection)
class AboutSectionAdmin(admin.ModelAdmin):
    list_display = ("title", "comptroller_name", "is_active")
    search_fields = ("comptroller_name", "title")

    fieldsets = (
        (
            "Comptroller Information",
            {
                "fields": (
                    "title",
                    "comptroller_name",
                    "comptroller_title",
                    "comptroller_organization",
                    "comptroller_photo",
                )
            },
        ),
        (
            "Message Content",
            {
                "fields": (
                    "message_paragraph_1",
                    "message_paragraph_2",
                    "message_paragraph_3",
                    "message_paragraph_4",
                    "closing_statement",
                )
            },
        ),
        ("Status", {"fields": ("is_active",)}),
    )

    def has_add_permission(self, request):
        if AboutSection.objects.exists():
            return False
        return super().has_add_permission(request)


@admin.register(Speaker)
class SpeakerAdmin(admin.ModelAdmin):
    list_display = (
        "photo_thumbnail",
        "full_name",
        "title",
        "organization",
        "category_badge",
        "order",
        "is_active",
    )
    list_filter = ("category", "is_active", "organization")
    search_fields = ("full_name", "organization", "title")
    list_editable = ("order", "is_active")
    ordering = ("order", "full_name")

    fieldsets = (
        (
            "Speaker Information",
            {"fields": ("full_name", "title", "organization", "category", "bio")},
        ),
        ("Photo", {"fields": ("photo",)}),
        (
            "Social Media",
            {"fields": ("linkedin_url", "twitter_url"), "classes": ("collapse",)},
        ),
        ("Display Settings", {"fields": ("order", "is_active")}),
    )

    def photo_thumbnail(self, obj):
        if obj.photo:
            return format_html(
                '<img src="{}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;" />',
                obj.photo.url,
            )
        return format_html(
            '<div style="width: 50px; height: 50px; background: #ddd; border-radius: 50%; display: flex; align-items: center; justify-content: center;"><i class="fas fa-user"></i></div>'
        )

    photo_thumbnail.short_description = "Photo"

    def category_badge(self, obj):
        colors = {
            "keynote": "#e74c3c",
            "panelist": "#3498db",
            "moderator": "#2ecc71",
        }
        color = colors.get(obj.category, "#95a5a6")
        return format_html(
            '<span style="background: {}; color: white; padding: 3px 10px; border-radius: 3px; font-size: 11px;">{}</span>',
            color,
            obj.get_category_display(),
        )

    category_badge.short_description = "Category"


@admin.register(ProgramDay)
class ProgramDayAdmin(admin.ModelAdmin):
    list_display = ("day_number", "title", "date", "sessions_count", "is_active")
    list_filter = ("is_active", "date")
    ordering = ("day_number",)
    inlines = [ProgramSessionInline]

    def sessions_count(self, obj):
        count = obj.sessions.count()
        url = (
            reverse("admin:events_programsession_changelist")
            + f"?program_day__id__exact={obj.id}"
        )
        return format_html('<a href="{}">{} sessions</a>', url, count)

    sessions_count.short_description = "Sessions"


@admin.register(ProgramSession)
class ProgramSessionAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "program_day",
        "session_type_badge",
        "time_range",
        "venue",
        "moderator",
        "speakers_count",
        "is_active",
    )
    list_filter = ("program_day", "session_type", "is_active", "venue")
    search_fields = ("title", "description", "venue")
    filter_horizontal = ("speakers",)

    fieldsets = (
        (
            "Session Details",
            {"fields": ("program_day", "title", "session_type", "description")},
        ),
        ("Schedule", {"fields": ("start_time", "end_time", "venue")}),
        ("Participants", {"fields": ("moderator", "speakers")}),
        (
            "Additional Information",
            {
                "fields": ("interpretation_languages", "capacity"),
                "classes": ("collapse",),
            },
        ),
        ("Display Settings", {"fields": ("order", "is_active")}),
    )

    def time_range(self, obj):
        return f"{obj.start_time.strftime('%H:%M')} - {obj.end_time.strftime('%H:%M')}"

    time_range.short_description = "Time"

    def session_type_badge(self, obj):
        colors = {
            "plenary": "#9b59b6",
            "panel": "#3498db",
            "workshop": "#e67e22",
            "networking": "#1abc9c",
            "break": "#95a5a6",
            "meal": "#f39c12",
            "ceremony": "#e74c3c",
        }
        color = colors.get(obj.session_type, "#34495e")
        return format_html(
            '<span style="background: {}; color: white; padding: 3px 10px; border-radius: 3px; font-size: 11px;">{}</span>',
            color,
            obj.get_session_type_display(),
        )

    session_type_badge.short_description = "Type"

    def speakers_count(self, obj):
        return obj.speakers.count()

    speakers_count.short_description = "Speakers"


@admin.register(Venue)
class VenueAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "day_badge",
        "capacity",
        "distance_from_airport",
        "order",
        "is_active",
    )
    list_filter = ("is_active",)
    search_fields = ("name", "address")
    list_editable = ("order", "is_active")

    fieldsets = (
        (
            "Venue Information",
            {"fields": ("name", "address", "description", "day_badge")},
        ),
        (
            "Details",
            {
                "fields": (
                    "sessions_info",
                    "capacity",
                    "distance_from_airport",
                    "rating",
                )
            },
        ),
        ("Links & Media", {"fields": ("google_maps_url", "website_url", "image")}),
        ("Display Settings", {"fields": ("order", "is_active")}),
    )


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = (
        "logo_thumbnail",
        "name",
        "partner_type_badge",
        "order",
        "is_active",
    )
    list_filter = ("partner_type", "is_active")
    search_fields = ("name", "description")
    list_editable = ("order", "is_active")

    def logo_thumbnail(self, obj):
        if obj.logo:
            return format_html(
                '<img src="{}" style="max-width: 100px; max-height: 50px; object-fit: contain;" />',
                obj.logo.url,
            )
        return "-"

    logo_thumbnail.short_description = "Logo"

    def partner_type_badge(self, obj):
        colors = {
            "powered": "#e74c3c",
            "collaboration": "#3498db",
            "supported": "#2ecc71",
            "sponsor": "#f39c12",
        }
        color = colors.get(obj.partner_type, "#95a5a6")
        return format_html(
            '<span style="background: {}; color: white; padding: 3px 10px; border-radius: 3px; font-size: 11px;">{}</span>',
            color,
            obj.get_partner_type_display(),
        )

    partner_type_badge.short_description = "Type"


@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    list_display = ("name", "stars_display", "features_summary", "order", "is_active")
    list_filter = ("stars", "is_active")
    search_fields = ("name", "address")
    list_editable = ("order", "is_active")
    inlines = [RoomTypeInline]

    def stars_display(self, obj):
        return "⭐" * obj.stars

    stars_display.short_description = "Rating"

    def features_summary(self, obj):
        features = []
        if obj.has_breakfast:
            features.append("🍳")
        if obj.has_wifi:
            features.append("📶")
        if obj.has_pool:
            features.append("🏊")
        if obj.has_gym:
            features.append("🏋️")
        if obj.has_spa:
            features.append("💆")
        if obj.has_restaurant:
            features.append("🍽️")
        return " ".join(features) if features else "-"

    features_summary.short_description = "Features"


@admin.register(LogisticInfo)
class LogisticInfoAdmin(admin.ModelAdmin):
    list_display = ("logistic_type_badge", "title", "is_active")
    list_filter = ("logistic_type", "is_active")
    search_fields = ("title", "description", "content")

    def logistic_type_badge(self, obj):
        colors = {
            "visa": "#3498db",
            "travel": "#9b59b6",
            "transport": "#e67e22",
            "accommodation": "#1abc9c",
            "informations": "#e74c3c",
        }
        color = colors.get(obj.logistic_type, "#95a5a6")
        return format_html(
            '<span style="background: {}; color: white; padding: 3px 10px; border-radius: 3px; font-size: 11px;">{}</span>',
            color,
            obj.get_logistic_type_display(),
        )

    logistic_type_badge.short_description = "Type"


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "title",
        "contact_type_badge",
        "email",
        "phone",
        "order",
        "is_active",
    )
    list_filter = ("contact_type", "is_active")
    search_fields = ("full_name", "title", "email", "phone", "organization")
    list_editable = ("order", "is_active")

    fieldsets = (
        (
            "Contact Information",
            {"fields": ("contact_type", "full_name", "title", "rank", "organization")},
        ),
        ("Contact Details", {"fields": ("email", "phone")}),
        ("Display Settings", {"fields": ("order", "is_active")}),
    )

    def contact_type_badge(self, obj):
        colors = {
            "ncs": "#e74c3c",
            "afcfta": "#3498db",
            "afreximbank": "#2ecc71",
            "wco": "#f39c12",
            "other": "#95a5a6",
        }
        color = colors.get(obj.contact_type, "#95a5a6")
        return format_html(
            '<span style="background: {}; color: white; padding: 3px 10px; border-radius: 3px; font-size: 11px;">{}</span>',
            color,
            obj.get_contact_type_display(),
        )

    contact_type_badge.short_description = "Organization"


@admin.register(Registration)
class RegistrationAdmin(ImportExportModelAdmin):
    resource_class = RegistrationResource
    list_display = (
        "registration_number",
        "fullname",
        "email",
        "country",
        "status_badge",
        "visa_badge",
        "created_at",
    )
    list_filter = (
        "status",
        "needs_visa_assistance",
        "country",
        "created_at",
        "interested_in_panels",
        "interested_in_capacity_building",
        "interested_in_networking",
    )
    search_fields = (
        "registration_number",
        "fullname",
        "email",
        "organization",
        "phone",
        "country",
    )
    readonly_fields = ("registration_number", "created_at", "updated_at")
    list_per_page = 50

    fieldsets = (
        (
            "Registration Info",
            {"fields": ("registration_number", "status", "created_at", "updated_at")},
        ),
        (
            "Personal Information",
            {"fields": ("fullname", "organization", "position", "city", "country")},
        ),
        ("Contact Details", {"fields": ("email", "phone")}),
        (
            "Participation Details",
            {"fields": ("arrival_date", "departure_date", "needs_visa_assistance")},
        ),
        (
            "Interests",
            {
                "fields": (
                    "interested_in_panels",
                    "interested_in_capacity_building",
                    "interested_in_networking",
                ),
                "classes": ("collapse",),
            },
        ),
        (
            "Additional Information",
            {
                "fields": ("dietary_restrictions", "receive_updates"),
                "classes": ("collapse",),
            },
        ),
        ("Admin Notes", {"fields": ("admin_notes",), "classes": ("collapse",)}),
    )

    actions = [
        "approve_registrations",
        "reject_registrations",
        "move_to_waitlist",
        "export_approved",
    ]

    def status_badge(self, obj):
        colors = {
            "pending": "#f39c12",
            "approved": "#2ecc71",
            "rejected": "#e74c3c",
            "waitlist": "#3498db",
        }
        color = colors.get(obj.status, "#95a5a6")
        return format_html(
            '<span style="background: {}; color: white; padding: 5px 12px; border-radius: 3px; font-weight: bold; font-size: 11px;">{}</span>',
            color,
            obj.get_status_display().upper(),
        )

    status_badge.short_description = "Status"

    def visa_badge(self, obj):
        if obj.needs_visa_assistance:
            return format_html(
                '<span style="background: #e74c3c; color: white; padding: 3px 8px; border-radius: 3px; font-size: 10px;">VISA NEEDED</span>'
            )
        return format_html(
            '<span style="color: #95a5a6; font-size: 10px;">No visa</span>'
        )

    visa_badge.short_description = "Visa"

    def approve_registrations(self, request, queryset):
        updated = queryset.update(status="approved")
        self.message_user(request, f"{updated} registration(s) approved successfully.")

    approve_registrations.short_description = "Approve selected registrations"

    def reject_registrations(self, request, queryset):
        updated = queryset.update(status="rejected")
        self.message_user(request, f"{updated} registration(s) rejected.")

    reject_registrations.short_description = "Reject selected registrations"

    def move_to_waitlist(self, request, queryset):
        updated = queryset.update(status="waitlist")
        self.message_user(request, f"{updated} registration(s) moved to waitlist.")

    move_to_waitlist.short_description = "Move to waitlist"

    def export_approved(self, request, queryset):
        # This will be handled by import_export
        pass

    export_approved.short_description = "Export approved registrations"


@admin.register(ContactMessage)
class ContactMessageAdmin(ImportExportModelAdmin):
    resource_class = ContactMessageResource
    list_display = (
        "full_name",
        "email",
        "subject_badge",
        "read_status",
        "reply_status",
        "created_at",
    )
    list_filter = ("subject", "is_read", "is_replied", "created_at")
    search_fields = ("first_name", "last_name", "email", "message")
    readonly_fields = ("created_at", "updated_at")
    list_per_page = 50

    fieldsets = (
        (
            "Message Information",
            {"fields": ("first_name", "last_name", "email", "phone", "organization")},
        ),
        ("Message Content", {"fields": ("subject", "message")}),
        ("Status", {"fields": ("is_read", "is_replied", "admin_reply")}),
        (
            "Timestamps",
            {"fields": ("created_at", "updated_at"), "classes": ("collapse",)},
        ),
    )

    actions = ["mark_as_read", "mark_as_unread", "mark_as_replied"]

    def full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"

    full_name.short_description = "Name"

    def subject_badge(self, obj):
        colors = {
            "general": "#95a5a6",
            "registration": "#3498db",
            "partnership": "#9b59b6",
            "sponsorship": "#f39c12",
            "media": "#e67e22",
            "technical": "#e74c3c",
            "other": "#34495e",
        }
        color = colors.get(obj.subject, "#95a5a6")
        return format_html(
            '<span style="background: {}; color: white; padding: 3px 10px; border-radius: 3px; font-size: 11px;">{}</span>',
            color,
            obj.get_subject_display(),
        )

    subject_badge.short_description = "Subject"

    def read_status(self, obj):
        if obj.is_read:
            return format_html('<span style="color: #2ecc71;">✓ Read</span>')
        return format_html(
            '<span style="color: #e74c3c; font-weight: bold;">● Unread</span>'
        )

    read_status.short_description = "Read"

    def reply_status(self, obj):
        if obj.is_replied:
            return format_html('<span style="color: #2ecc71;">✓ Replied</span>')
        return format_html('<span style="color: #95a5a6;">Pending</span>')

    reply_status.short_description = "Reply"

    def mark_as_read(self, request, queryset):
        updated = queryset.update(is_read=True)
        self.message_user(request, f"{updated} message(s) marked as read.")

    mark_as_read.short_description = "Mark as read"

    def mark_as_unread(self, request, queryset):
        updated = queryset.update(is_read=False)
        self.message_user(request, f"{updated} message(s) marked as unread.")

    mark_as_unread.short_description = "Mark as unread"

    def mark_as_replied(self, request, queryset):
        updated = queryset.update(is_replied=True)
        self.message_user(request, f"{updated} message(s) marked as replied.")

    mark_as_replied.short_description = "Mark as replied"


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ("question_preview", "order", "is_active")
    list_filter = ("is_active",)
    search_fields = ("question", "answer")
    list_editable = ("order", "is_active")

    def question_preview(self, obj):
        return obj.question[:100] + "..." if len(obj.question) > 100 else obj.question

    question_preview.short_description = "Question"


@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    list_display = ("email", "is_active", "created_at")
    list_filter = ("is_active", "created_at")
    search_fields = ("email",)
    readonly_fields = ("created_at", "updated_at")
    actions = ["activate_subscriptions", "deactivate_subscriptions"]

    def activate_subscriptions(self, request, queryset):
        updated = queryset.update(is_active=True)
        self.message_user(request, f"{updated} subscription(s) activated.")

    activate_subscriptions.short_description = "Activate subscriptions"

    def deactivate_subscriptions(self, request, queryset):
        updated = queryset.update(is_active=False)
        self.message_user(request, f"{updated} subscription(s) deactivated.")

    deactivate_subscriptions.short_description = "Deactivate subscriptions"


# ========== CUSTOMIZE ADMIN SITE ==========

admin.site.site_header = "Customs PACT 2025 Administration"
admin.site.site_title = "Customs PACT Admin"
admin.site.index_title = "Welcome to Customs PACT Administration Portal"


# ========== CUSTOM ADMIN DASHBOARD (Optional) ==========

from django.contrib.admin import AdminSite
from django.shortcuts import render
from django.db.models import Count, Q
from datetime import datetime, timedelta


class CustomPACTAdminSite(AdminSite):
    site_header = "Customs PACT 2025 Administration"
    site_title = "Customs PACT Admin"
    index_title = "Dashboard"

    def index(self, request, extra_context=None):
        extra_context = extra_context or {}

        # Statistics
        total_registrations = Registration.objects.count()
        pending_registrations = Registration.objects.filter(status="pending").count()
        approved_registrations = Registration.objects.filter(status="approved").count()

        # Recent registrations (last 7 days)
        seven_days_ago = datetime.now() - timedelta(days=7)
        recent_registrations = Registration.objects.filter(
            created_at__gte=seven_days_ago
        ).count()

        # Unread messages
        unread_messages = ContactMessage.objects.filter(is_read=False).count()

        # Countries represented
        countries_count = Registration.objects.values("country").distinct().count()

        # Visa assistance requests
        visa_requests = Registration.objects.filter(needs_visa_assistance=True).count()

        # Registrations by status
        registrations_by_status = Registration.objects.values("status").annotate(
            count=Count("id")
        )

        # Top 10 countries
        top_countries = (
            Registration.objects.values("country")
            .annotate(count=Count("id"))
            .order_by("-count")[:10]
        )

        extra_context.update(
            {
                "total_registrations": total_registrations,
                "pending_registrations": pending_registrations,
                "approved_registrations": approved_registrations,
                "recent_registrations": recent_registrations,
                "unread_messages": unread_messages,
                "countries_count": countries_count,
                "visa_requests": visa_requests,
                "registrations_by_status": registrations_by_status,
                "top_countries": top_countries,
            }
        )

        return super().index(request, extra_context)


# Uncomment to use custom admin site
# custom_admin_site = CustomPACTAdminSite(name='custom_admin')

# Register all models with custom admin site
# custom_admin_site.register(EventConfiguration, EventConfigurationAdmin)
# ... (repeat for all models)
