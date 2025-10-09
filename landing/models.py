import uuid
from django.db import models
from django.core.validators import RegexValidator
from django.utils.translation import gettext_lazy as _
from ckeditor.fields import RichTextField
from django.utils.text import slugify


class TimeStampedModel(models.Model):
    """Modèle abstrait pour ajouter created_at et updated_at"""

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class EventConfiguration(TimeStampedModel):
    """Configuration générale de l'événement"""

    event_name = models.CharField(max_length=255, default="The Customs PACT 2025")
    tagline = models.CharField(
        max_length=255, default="Breaking Barriers, Building Bridges"
    )
    subtitle = models.CharField(
        max_length=255, default="Partnership for African Cooperation in Trade"
    )
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    location = models.CharField(max_length=255, default="Abuja, Nigeria")
    registration_deadline = models.DateTimeField()

    # SEO
    meta_description = models.TextField(max_length=160)
    meta_keywords = models.CharField(max_length=255)

    # Assets
    logo = models.ImageField(upload_to="event/logos/")
    favicon = models.ImageField(upload_to="event/favicons/")
    hero_video_url = models.URLField(blank=True, null=True)

    # Status
    is_active = models.BooleanField(default=True)
    registration_open = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Event Configuration"
        verbose_name_plural = "Event Configuration"

    def __str__(self):
        return self.event_name


class AboutSection(TimeStampedModel):
    """Section À propos / Message du Comptroller"""

    title = models.CharField(max_length=255, default="About the Customs PACT")
    comptroller_name = models.CharField(max_length=255)
    comptroller_title = models.CharField(max_length=255)
    comptroller_organization = models.CharField(max_length=255)
    comptroller_photo = models.ImageField(upload_to="about/comptroller/")

    message_paragraph_1 = RichTextField()
    message_paragraph_2 = RichTextField()
    message_paragraph_3 = RichTextField()
    message_paragraph_4 = RichTextField()
    closing_statement = models.CharField(max_length=255)

    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "About Section"
        verbose_name_plural = "About Section"

    def __str__(self):
        return f"About - {self.comptroller_name}"


class Speaker(TimeStampedModel):
    """Intervenants de l'événement"""

    SPEAKER_CATEGORIES = [
        ("keynote", "Keynote Speaker"),
        ("panelist", "Panelist"),
        ("moderator", "Moderator"),
    ]

    full_name = models.CharField(max_length=255)
    title = models.CharField(max_length=255, help_text="e.g., Secretary General")
    organization = models.CharField(max_length=255)
    category = models.CharField(max_length=20, choices=SPEAKER_CATEGORIES)
    bio = models.TextField()
    photo = models.ImageField(upload_to="speakers/", blank=True, null=True)

    # Social Links
    linkedin_url = models.URLField(blank=True, null=True)
    twitter_url = models.URLField(blank=True, null=True)

    # Display order
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Speaker"
        verbose_name_plural = "Speakers"
        ordering = ["order", "full_name"]

    def __str__(self):
        return f"{self.full_name} - {self.get_category_display()}"


class ProgramDay(TimeStampedModel):
    """Jours du programme"""

    day_number = models.IntegerField(unique=True, help_text="0, 1, 2, 3")
    date = models.DateField()
    title = models.CharField(max_length=255, help_text="e.g., Day 1, Day 2")
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Program Day"
        verbose_name_plural = "Program Days"
        ordering = ["day_number"]

    def __str__(self):
        return f"{self.title} - {self.date}"


class ProgramSession(TimeStampedModel):
    """Sessions du programme"""

    SESSION_TYPES = [
        ("plenary", "Plenary Session"),
        ("panel", "Panel Discussion"),
        ("workshop", "Workshop"),
        ("networking", "Networking"),
        ("break", "Break"),
        ("meal", "Meal"),
        ("ceremony", "Ceremony"),
        ("other", "Other"),
    ]

    program_day = models.ForeignKey(
        ProgramDay, on_delete=models.CASCADE, related_name="sessions"
    )
    title = models.CharField(max_length=255)
    session_type = models.CharField(max_length=20, choices=SESSION_TYPES)
    start_time = models.TimeField()
    end_time = models.TimeField()
    description = RichTextField(blank=True)
    venue = models.CharField(max_length=255, blank=True)

    # Moderator et Speakers
    moderator = models.ForeignKey(
        Speaker,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="moderated_sessions",
    )
    speakers = models.ManyToManyField(
        Speaker, blank=True, related_name="speaking_sessions"
    )

    # Additional details
    interpretation_languages = models.CharField(
        max_length=100, blank=True, help_text="e.g., EN, FR, AR"
    )
    capacity = models.IntegerField(null=True, blank=True)

    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Program Session"
        verbose_name_plural = "Program Sessions"
        ordering = ["program_day__day_number", "start_time", "order"]

    def __str__(self):
        return f"{self.program_day.title} - {self.start_time} - {self.title}"


class Venue(TimeStampedModel):
    """Lieux de l'événement"""

    name = models.CharField(max_length=255)
    address = models.TextField()
    description = RichTextField()

    # Day badge
    day_badge = models.CharField(max_length=100, help_text="e.g., Day 1 - November 17")

    # Details
    sessions_info = models.CharField(max_length=255)
    capacity = models.CharField(max_length=100)
    distance_from_airport = models.CharField(max_length=100)

    # Rating (for hotels)
    rating = models.CharField(max_length=50, blank=True)

    # Links
    google_maps_url = models.URLField()
    website_url = models.URLField(blank=True, null=True)

    # Image
    image = models.ImageField(upload_to="venues/", blank=True, null=True)

    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Venue"
        verbose_name_plural = "Venues"
        ordering = ["order"]

    def __str__(self):
        return self.name


class Partner(TimeStampedModel):
    """Partenaires de l'événement"""

    PARTNER_TYPES = [
        ("powered", "Powered By"),
        ("collaboration", "In Collaboration With"),
        ("supported", "Supported By"),
        ("sponsor", "Sponsor"),
    ]

    name = models.CharField(max_length=255)
    partner_type = models.CharField(max_length=20, choices=PARTNER_TYPES)
    logo = models.ImageField(upload_to="partners/")
    website_url = models.URLField(blank=True, null=True)
    description = models.TextField(blank=True)

    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Partner"
        verbose_name_plural = "Partners"
        ordering = ["order"]

    def __str__(self):
        return f"{self.name} - {self.get_partner_type_display()}"


class Hotel(TimeStampedModel):
    """Hébergements recommandés"""

    name = models.CharField(max_length=255)
    description = RichTextField()
    address = models.TextField()
    website_url = models.URLField()

    # Rating
    stars = models.IntegerField(choices=[(i, f"{i}★") for i in range(1, 6)])

    # Image
    image = models.ImageField(upload_to="hotels/")

    # Features
    has_breakfast = models.BooleanField(default=True)
    has_wifi = models.BooleanField(default=True)
    has_pool = models.BooleanField(default=False)
    has_gym = models.BooleanField(default=False)
    has_spa = models.BooleanField(default=False)
    has_restaurant = models.BooleanField(default=False)

    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Hotel"
        verbose_name_plural = "Hotels"
        ordering = ["order"]

    def __str__(self):
        return self.name


class RoomType(TimeStampedModel):
    """Types de chambres d'hôtel"""

    hotel = models.ForeignKey(
        Hotel, on_delete=models.CASCADE, related_name="room_types"
    )
    name = models.CharField(max_length=255)
    icon_class = models.CharField(max_length=50, default="fas fa-bed")
    price_ngn = models.DecimalField(max_digits=10, decimal_places=2)

    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Room Type"
        verbose_name_plural = "Room Types"
        ordering = ["hotel", "order"]

    def __str__(self):
        return f"{self.hotel.name} - {self.name}"


class LogisticInfo(TimeStampedModel):
    """Informations logistiques"""

    LOGISTIC_TYPES = [
        ("visa", "Visa Information"),
        ("travel", "Travel Information"),
        ("transport", "On Ground Transport"),
        ("accommodation", "Accommodation"),
        ("informations", "Important Information"),
    ]

    logistic_type = models.CharField(max_length=20, choices=LOGISTIC_TYPES, unique=True)
    title = models.CharField(max_length=255)
    icon_class = models.CharField(max_length=50)
    description = RichTextField()
    content = RichTextField()

    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Logistic Information"
        verbose_name_plural = "Logistic Information"

    def __str__(self):
        return f"{self.get_logistic_type_display()}"


class Contact(TimeStampedModel):
    """Contacts de l'organisation"""

    CONTACT_TYPES = [
        ("ncs", "Nigeria Customs Service"),
        ("afcfta", "AfCFTA Secretariat"),
        ("afreximbank", "Afreximbank"),
        ("wco", "World Customs Organization"),
        ("other", "Other"),
    ]

    contact_type = models.CharField(max_length=20, choices=CONTACT_TYPES)
    full_name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    rank = models.CharField(max_length=255, blank=True)
    organization = models.CharField(max_length=255, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=50)

    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"
        ordering = ["contact_type", "order"]

    def __str__(self):
        return f"{self.full_name} - {self.get_contact_type_display()}"


class Registration(TimeStampedModel):
    """Inscriptions des participants"""

    # Personal Information
    fullname = models.CharField(max_length=255)
    organization = models.CharField(max_length=255)
    position = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=255, blank=True)
    country = models.CharField(max_length=255)

    # Contact Details
    email = models.EmailField()
    phone_regex = RegexValidator(
        regex=r"^\+?1?\d{9,15}$", message="Format: '+999999999'. 9-15 chiffres."
    )
    phone = models.CharField(validators=[phone_regex], max_length=17)

    # Participation Details
    arrival_date = models.DateField(blank=True, null=True)
    departure_date = models.DateField(blank=True, null=True)
    needs_visa_assistance = models.BooleanField(default=False)

    # Networking & Engagement
    interested_in_panels = models.BooleanField(default=False)
    interested_in_capacity_building = models.BooleanField(default=False)
    interested_in_networking = models.BooleanField(default=False)

    # Additional Information
    dietary_restrictions = models.TextField(blank=True)
    receive_updates = models.BooleanField(default=True)

    # Status
    STATUS_CHOICES = [
        ("pending", "Pending Review"),
        ("approved", "Approved"),
        ("rejected", "Rejected"),
        ("waitlist", "Waitlist"),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="pending")

    # Registration number
    registration_number = models.CharField(max_length=50, unique=True, blank=True)

    # Admin notes
    admin_notes = models.TextField(blank=True)

    class Meta:
        verbose_name = "Registration"
        verbose_name_plural = "Registrations"
        ordering = ["-created_at"]

    def save(self, *args, **kwargs):
        if not self.registration_number:
            # Generate registration number: TCP2025-XXXX
            last_reg = Registration.objects.order_by("-id").first()
            if last_reg and last_reg.registration_number:
                last_num = int(last_reg.registration_number.split("-")[-1])
                new_num = last_num + 1
            else:
                new_num = 1
            self.registration_number = f"TCP2025-{new_num:04d}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.registration_number} - {self.fullname}"


class ContactMessage(TimeStampedModel):
    """Messages de contact depuis le formulaire"""

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=50, blank=True)
    organization = models.CharField(max_length=255, blank=True)

    SUBJECT_CHOICES = [
        ("general", "General Inquiry"),
        ("registration", "Event Registration"),
        ("partnership", "Partnership Opportunities"),
        ("sponsorship", "Sponsorship"),
        ("media", "Media & Press"),
        ("technical", "Technical Support"),
        ("other", "Other"),
    ]
    subject = models.CharField(max_length=20, choices=SUBJECT_CHOICES)
    message = models.TextField()

    # Status
    is_read = models.BooleanField(default=False)
    is_replied = models.BooleanField(default=False)
    admin_reply = models.TextField(blank=True)

    class Meta:
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.get_subject_display()}"


class FAQ(TimeStampedModel):
    """Questions fréquemment posées"""

    question = models.CharField(max_length=500)
    answer = RichTextField()

    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"
        ordering = ["order"]

    def __str__(self):
        return self.question


class Newsletter(TimeStampedModel):
    """Abonnés à la newsletter"""

    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Newsletter Subscription"
        verbose_name_plural = "Newsletter Subscriptions"

    def __str__(self):
        return self.email
