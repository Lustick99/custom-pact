import uuid
from django.db import models
from django.core.validators import RegexValidator
from django.utils.translation import gettext_lazy as _
from ckeditor.fields import RichTextField
from django.utils.text import slugify
from parler.models import TranslatableModel, TranslatedFields


class TimeStampedModel(models.Model):
    """Modèle abstrait pour ajouter id UUID, created_at et updated_at"""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class EventConfiguration(TimeStampedModel, TranslatableModel):
    """Configuration générale de l'événement - Bilingue"""

    translations = TranslatedFields(
        event_name=models.CharField(
            _("Event Name"), max_length=255, default="The Customs PACT 2025"
        ),
        tagline=models.CharField(
            _("Tagline"), max_length=255, default="Breaking Barriers, Building Bridges"
        ),
        subtitle=models.CharField(
            _("Subtitle"),
            max_length=255,
            default="Partnership for African Cooperation in Trade",
        ),
        meta_description=models.TextField(_("Meta Description"), max_length=160),
        meta_keywords=models.CharField(_("Meta Keywords"), max_length=255),
    )

    start_date = models.DateTimeField(_("Start Date"))
    end_date = models.DateTimeField(_("End Date"))
    location = models.CharField(_("Location"), max_length=255, default="Abuja, Nigeria")
    registration_deadline = models.DateTimeField(_("Registration Deadline"))

    # Assets
    logo = models.ImageField(_("Logo"), upload_to="event/logos/")
    favicon = models.ImageField(_("Favicon"), upload_to="event/favicons/")
    hero_video_url = models.URLField(_("Hero Video URL"), blank=True, null=True)

    # Status
    is_active = models.BooleanField(_("Is Active"), default=True)
    registration_open = models.BooleanField(_("Registration Open"), default=True)

    class Meta:
        verbose_name = _("Event Configuration")
        verbose_name_plural = _("Event Configuration")

    def __str__(self):
        return self.safe_translation_getter("event_name", any_language=True)


class AboutSection(TimeStampedModel, TranslatableModel):
    """Section À propos / Message du Comptroller - Bilingue"""

    translations = TranslatedFields(
        title=models.CharField(
            _("Title"), max_length=255, default="About the Customs PACT"
        ),
        comptroller_title=models.CharField(_("Comptroller Title"), max_length=255),
        message_paragraph_1=RichTextField(_("Message Paragraph 1")),
        message_paragraph_2=RichTextField(_("Message Paragraph 2")),
        message_paragraph_3=RichTextField(_("Message Paragraph 3")),
        message_paragraph_4=RichTextField(_("Message Paragraph 4")),
        closing_statement=models.CharField(_("Closing Statement"), max_length=255),
    )

    comptroller_name = models.CharField(_("Comptroller Name"), max_length=255)
    comptroller_organization = models.CharField(
        _("Comptroller Organization"), max_length=255
    )
    comptroller_photo = models.ImageField(
        _("Comptroller Photo"), upload_to="about/comptroller/"
    )
    is_active = models.BooleanField(_("Is Active"), default=True)

    class Meta:
        verbose_name = _("About Section")
        verbose_name_plural = _("About Section")

    def __str__(self):
        return f"{self.safe_translation_getter('title', any_language=True)} - {self.comptroller_name}"


class Speaker(TimeStampedModel, TranslatableModel):
    """Intervenants de l'événement - Bilingue"""

    SPEAKER_CATEGORIES = [
        ("keynote", _("Keynote Speaker")),
        ("panelist", _("Panelist")),
        ("moderator", _("Moderator")),
    ]

    translations = TranslatedFields(
        title=models.CharField(
            _("Title"), max_length=255, help_text=_("e.g., Secretary General")
        ),
        organization=models.CharField(_("Organization"), max_length=255),
        bio=models.TextField(_("Bio")),
    )

    full_name = models.CharField(_("Full Name"), max_length=255)
    category = models.CharField(
        _("Category"), max_length=20, choices=SPEAKER_CATEGORIES
    )
    photo = models.ImageField(_("Photo"), upload_to="speakers/", blank=True, null=True)

    # Social Links
    linkedin_url = models.URLField(_("LinkedIn URL"), blank=True, null=True)
    twitter_url = models.URLField(_("Twitter URL"), blank=True, null=True)

    # Display order
    order = models.IntegerField(_("Display Order"), default=0)
    is_active = models.BooleanField(_("Is Active"), default=True)

    class Meta:
        verbose_name = _("Speaker")
        verbose_name_plural = _("Speakers")
        ordering = ["order", "full_name"]

    def __str__(self):
        return f"{self.full_name} - {self.get_category_display()}"


class ProgramDay(TimeStampedModel, TranslatableModel):
    """Jours du programme - Bilingue"""

    translations = TranslatedFields(
        title=models.CharField(
            _("Title"), max_length=255, help_text=_("e.g., Day 1, Day 2")
        ),
        description=models.TextField(_("Description"), blank=True),
    )

    day_number = models.IntegerField(
        _("Day Number"), unique=True, help_text=_("0, 1, 2, 3")
    )
    date = models.DateField(_("Date"))
    is_active = models.BooleanField(_("Is Active"), default=True)

    class Meta:
        verbose_name = _("Program Day")
        verbose_name_plural = _("Program Days")
        ordering = ["day_number"]

    def __str__(self):
        return (
            f"{self.safe_translation_getter('title', any_language=True)} - {self.date}"
        )


class ProgramSession(TimeStampedModel, TranslatableModel):
    """Sessions du programme - Bilingue"""

    SESSION_TYPES = [
        ("plenary", _("Plenary Session")),
        ("panel", _("Panel Discussion")),
        ("workshop", _("Workshop")),
        ("networking", _("Networking")),
        ("break", _("Break")),
        ("meal", _("Meal")),
        ("ceremony", _("Ceremony")),
        ("other", _("Other")),
    ]

    translations = TranslatedFields(
        title=models.CharField(_("Title"), max_length=255),
        description=RichTextField(_("Description"), blank=True),
        venue=models.CharField(_("Venue"), max_length=255, blank=True),
    )

    program_day = models.ForeignKey(
        ProgramDay,
        on_delete=models.CASCADE,
        related_name="sessions",
        verbose_name=_("Program Day"),
    )
    session_type = models.CharField(
        _("Session Type"), max_length=20, choices=SESSION_TYPES
    )
    start_time = models.TimeField(_("Start Time"))
    end_time = models.TimeField(_("End Time"))

    # Moderator et Speakers
    moderator = models.ForeignKey(
        Speaker,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="moderated_sessions",
        verbose_name=_("Moderator"),
    )
    speakers = models.ManyToManyField(
        Speaker,
        blank=True,
        related_name="speaking_sessions",
        verbose_name=_("Speakers"),
    )

    # Additional details
    interpretation_languages = models.CharField(
        _("Interpretation Languages"),
        max_length=100,
        blank=True,
        help_text=_("e.g., EN, FR, AR"),
    )
    capacity = models.IntegerField(_("Capacity"), null=True, blank=True)

    order = models.IntegerField(_("Display Order"), default=0)
    is_active = models.BooleanField(_("Is Active"), default=True)

    class Meta:
        verbose_name = _("Program Session")
        verbose_name_plural = _("Program Sessions")
        ordering = ["program_day__day_number", "start_time", "order"]

    def __str__(self):
        return f"{self.program_day} - {self.start_time} - {self.safe_translation_getter('title', any_language=True)}"


class Venue(TimeStampedModel, TranslatableModel):
    """Lieux de l'événement - Bilingue"""

    translations = TranslatedFields(
        name=models.CharField(_("Name"), max_length=255),
        address=models.TextField(_("Address")),
        description=RichTextField(_("Description")),
        day_badge=models.CharField(
            _("Day Badge"), max_length=100, help_text=_("e.g., Day 1 - November 17")
        ),
        sessions_info=models.CharField(_("Sessions Info"), max_length=255),
        capacity=models.CharField(_("Capacity"), max_length=100),
        distance_from_airport=models.CharField(
            _("Distance from Airport"), max_length=100
        ),
        rating=models.CharField(_("Rating"), max_length=50, blank=True),
    )

    # Links
    google_maps_url = models.URLField(_("Google Maps URL"))
    website_url = models.URLField(_("Website URL"), blank=True, null=True)

    # Image
    image = models.ImageField(_("Image"), upload_to="venues/", blank=True, null=True)

    order = models.IntegerField(_("Display Order"), default=0)
    is_active = models.BooleanField(_("Is Active"), default=True)

    class Meta:
        verbose_name = _("Venue")
        verbose_name_plural = _("Venues")
        ordering = ["order"]

    def __str__(self):
        return self.safe_translation_getter("name", any_language=True)


class Partner(TimeStampedModel, TranslatableModel):
    """Partenaires de l'événement - Bilingue"""

    PARTNER_TYPES = [
        ("powered", _("Powered By")),
        ("collaboration", _("In Collaboration With")),
        ("supported", _("Supported By")),
        ("sponsor", _("Sponsor")),
    ]

    translations = TranslatedFields(
        description=models.TextField(_("Description"), blank=True),
    )

    name = models.CharField(_("Name"), max_length=255)
    partner_type = models.CharField(
        _("Partner Type"), max_length=20, choices=PARTNER_TYPES
    )
    logo = models.ImageField(_("Logo"), upload_to="partners/")
    website_url = models.URLField(_("Website URL"), blank=True, null=True)

    order = models.IntegerField(_("Display Order"), default=0)
    is_active = models.BooleanField(_("Is Active"), default=True)

    class Meta:
        verbose_name = _("Partner")
        verbose_name_plural = _("Partners")
        ordering = ["order"]

    def __str__(self):
        return f"{self.name} - {self.get_partner_type_display()}"


class Hotel(TimeStampedModel, TranslatableModel):
    """Hébergements recommandés - Bilingue"""

    translations = TranslatedFields(
        description=RichTextField(_("Description")),
        address=models.TextField(_("Address")),
    )

    name = models.CharField(_("Name"), max_length=255)
    website_url = models.URLField(_("Website URL"))
    stars = models.IntegerField(_("Stars"), choices=[(i, f"{i}★") for i in range(1, 6)])
    image = models.ImageField(_("Image"), upload_to="hotels/")

    # Features
    has_breakfast = models.BooleanField(_("Has Breakfast"), default=True)
    has_wifi = models.BooleanField(_("Has WiFi"), default=True)
    has_pool = models.BooleanField(_("Has Pool"), default=False)
    has_gym = models.BooleanField(_("Has Gym"), default=False)
    has_spa = models.BooleanField(_("Has Spa"), default=False)
    has_restaurant = models.BooleanField(_("Has Restaurant"), default=False)

    order = models.IntegerField(_("Display Order"), default=0)
    is_active = models.BooleanField(_("Is Active"), default=True)

    class Meta:
        verbose_name = _("Hotel")
        verbose_name_plural = _("Hotels")
        ordering = ["order"]

    def __str__(self):
        return self.name


class RoomType(TimeStampedModel, TranslatableModel):
    """Types de chambres d'hôtel - Bilingue"""

    translations = TranslatedFields(
        name=models.CharField(_("Name"), max_length=255),
    )

    hotel = models.ForeignKey(
        Hotel,
        on_delete=models.CASCADE,
        related_name="room_types",
        verbose_name=_("Hotel"),
    )
    icon_class = models.CharField(_("Icon Class"), max_length=50, default="fas fa-bed")
    price_ngn = models.DecimalField(_("Price (NGN)"), max_digits=10, decimal_places=2)

    order = models.IntegerField(_("Display Order"), default=0)
    is_active = models.BooleanField(_("Is Active"), default=True)

    class Meta:
        verbose_name = _("Room Type")
        verbose_name_plural = _("Room Types")
        ordering = ["hotel", "order"]

    def __str__(self):
        return f"{self.hotel.name} - {self.safe_translation_getter('name', any_language=True)}"


class LogisticInfo(TimeStampedModel, TranslatableModel):
    """Informations logistiques - Bilingue"""

    LOGISTIC_TYPES = [
        ("visa", _("Visa Information")),
        ("travel", _("Travel Information")),
        ("transport", _("On Ground Transport")),
        ("accommodation", _("Accommodation")),
        ("informations", _("Important Information")),
    ]

    translations = TranslatedFields(
        title=models.CharField(_("Title"), max_length=255),
        description=RichTextField(_("Description")),
        content=RichTextField(_("Content")),
    )

    logistic_type = models.CharField(
        _("Logistic Type"), max_length=20, choices=LOGISTIC_TYPES, unique=True
    )
    icon_class = models.CharField(_("Icon Class"), max_length=50)
    is_active = models.BooleanField(_("Is Active"), default=True)

    class Meta:
        verbose_name = _("Logistic Information")
        verbose_name_plural = _("Logistic Information")

    def __str__(self):
        return f"{self.get_logistic_type_display()}"


class Contact(TimeStampedModel, TranslatableModel):
    """Contacts de l'organisation - Bilingue"""

    CONTACT_TYPES = [
        ("ncs", _("Nigeria Customs Service")),
        ("afcfta", _("AfCFTA Secretariat")),
        ("afreximbank", _("Afreximbank")),
        ("wco", _("World Customs Organization")),
        ("other", _("Other")),
    ]

    translations = TranslatedFields(
        title=models.CharField(_("Title"), max_length=255),
        organization=models.CharField(_("Organization"), max_length=255, blank=True),
    )

    contact_type = models.CharField(
        _("Contact Type"), max_length=20, choices=CONTACT_TYPES
    )
    full_name = models.CharField(_("Full Name"), max_length=255)
    rank = models.CharField(_("Rank"), max_length=255, blank=True)
    email = models.EmailField(_("Email"))
    phone = models.CharField(_("Phone"), max_length=50)

    order = models.IntegerField(_("Display Order"), default=0)
    is_active = models.BooleanField(_("Is Active"), default=True)

    class Meta:
        verbose_name = _("Contact")
        verbose_name_plural = _("Contacts")
        ordering = ["contact_type", "order"]

    def __str__(self):
        return f"{self.full_name} - {self.get_contact_type_display()}"


class Registration(TimeStampedModel):
    """Inscriptions des participants"""

    # Personal Information
    fullname = models.CharField(_("Full Name"), max_length=255)
    organization = models.CharField(_("Organization"), max_length=255)
    position = models.CharField(_("Position"), max_length=255, blank=True)
    city = models.CharField(_("City"), max_length=255, blank=True)
    country = models.CharField(_("Country"), max_length=255)

    # Contact Details
    email = models.EmailField(_("Email"))
    phone_regex = RegexValidator(
        regex=r"^\+?1?\d{9,15}$", message=_("Format: '+999999999'. 9-15 digits.")
    )
    phone = models.CharField(_("Phone"), validators=[phone_regex], max_length=17)

    # Participation Details
    arrival_date = models.DateField(_("Arrival Date"), blank=True, null=True)
    departure_date = models.DateField(_("Departure Date"), blank=True, null=True)
    needs_visa_assistance = models.BooleanField(
        _("Needs Visa Assistance"), default=False
    )

    # Networking & Engagement
    interested_in_panels = models.BooleanField(_("Interested in Panels"), default=False)
    interested_in_capacity_building = models.BooleanField(
        _("Interested in Capacity Building"), default=False
    )
    interested_in_networking = models.BooleanField(
        _("Interested in Networking"), default=False
    )

    # Additional Information
    dietary_restrictions = models.TextField(_("Dietary Restrictions"), blank=True)
    receive_updates = models.BooleanField(_("Receive Updates"), default=True)

    # Status
    STATUS_CHOICES = [
        ("pending", _("Pending Review")),
        ("approved", _("Approved")),
        ("rejected", _("Rejected")),
        ("waitlist", _("Waitlist")),
    ]
    status = models.CharField(
        _("Status"), max_length=20, choices=STATUS_CHOICES, default="pending"
    )

    # Registration number
    registration_number = models.CharField(
        _("Registration Number"), max_length=50, unique=True, blank=True
    )

    # Admin notes
    admin_notes = models.TextField(_("Admin Notes"), blank=True)

    class Meta:
        verbose_name = _("Registration")
        verbose_name_plural = _("Registrations")
        ordering = ["-created_at"]

    def save(self, *args, **kwargs):
        if not self.registration_number:
            # Generate registration number: TCP2025-XXXX
            last_reg = Registration.objects.order_by("-created_at").first()
            if last_reg and last_reg.registration_number:
                try:
                    last_num = int(last_reg.registration_number.split("-")[-1])
                    new_num = last_num + 1
                except:
                    new_num = 1
            else:
                new_num = 1
            self.registration_number = f"TCP2025-{new_num:04d}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.registration_number} - {self.fullname}"


class ContactMessage(TimeStampedModel):
    """Messages de contact depuis le formulaire"""

    first_name = models.CharField(_("First Name"), max_length=255)
    last_name = models.CharField(_("Last Name"), max_length=255)
    email = models.EmailField(_("Email"))
    phone = models.CharField(_("Phone"), max_length=50, blank=True)
    organization = models.CharField(_("Organization"), max_length=255, blank=True)

    SUBJECT_CHOICES = [
        ("general", _("General Inquiry")),
        ("registration", _("Event Registration")),
        ("partnership", _("Partnership Opportunities")),
        ("sponsorship", _("Sponsorship")),
        ("media", _("Media & Press")),
        ("technical", _("Technical Support")),
        ("other", _("Other")),
    ]
    subject = models.CharField(_("Subject"), max_length=20, choices=SUBJECT_CHOICES)
    message = models.TextField(_("Message"))

    # Status
    is_read = models.BooleanField(_("Is Read"), default=False)
    is_replied = models.BooleanField(_("Is Replied"), default=False)
    admin_reply = models.TextField(_("Admin Reply"), blank=True)

    class Meta:
        verbose_name = _("Contact Message")
        verbose_name_plural = _("Contact Messages")
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.get_subject_display()}"


class FAQ(TimeStampedModel, TranslatableModel):
    """Questions fréquemment posées - Bilingue"""

    translations = TranslatedFields(
        question=models.CharField(_("Question"), max_length=500),
        answer=RichTextField(_("Answer")),
    )

    order = models.IntegerField(_("Display Order"), default=0)
    is_active = models.BooleanField(_("Is Active"), default=True)

    class Meta:
        verbose_name = _("FAQ")
        verbose_name_plural = _("FAQs")
        ordering = ["order"]

    def __str__(self):
        return self.safe_translation_getter("question", any_language=True)


class Newsletter(TimeStampedModel):
    """Abonnés à la newsletter"""

    email = models.EmailField(_("Email"), unique=True)
    is_active = models.BooleanField(_("Is Active"), default=True)

    class Meta:
        verbose_name = _("Newsletter Subscription")
        verbose_name_plural = _("Newsletter Subscriptions")

    def __str__(self):
        return self.email
