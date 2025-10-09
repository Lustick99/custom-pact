from django import forms
from django.core.exceptions import ValidationError
from .models import (
    Registration,
    ContactMessage,
    Newsletter,
    Speaker,
    ProgramSession,
    Hotel,
)
import re


class RegistrationForm(forms.ModelForm):
    """Formulaire d'inscription pour les participants"""

    # Additional fields with custom widgets
    terms_accepted = forms.BooleanField(
        required=True,
        label="I accept the terms and conditions",
        widget=forms.CheckboxInput(attrs={"class": "form-check-input"}),
    )

    class Meta:
        model = Registration
        fields = [
            "fullname",
            "organization",
            "position",
            "city",
            "country",
            "email",
            "phone",
            "arrival_date",
            "departure_date",
            "needs_visa_assistance",
            "interested_in_panels",
            "interested_in_capacity_building",
            "interested_in_networking",
            "dietary_restrictions",
            "receive_updates",
        ]

        widgets = {
            "fullname": forms.TextInput(
                attrs={
                    "class": "form-control",
                    "placeholder": "Full Name",
                    "required": True,
                }
            ),
            "organization": forms.TextInput(
                attrs={
                    "class": "form-control",
                    "placeholder": "Organization / Company",
                    "required": True,
                }
            ),
            "position": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "Position / Title"}
            ),
            "city": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "City / Location"}
            ),
            "country": forms.TextInput(
                attrs={
                    "class": "form-control",
                    "placeholder": "Country / Region",
                    "required": True,
                }
            ),
            "email": forms.EmailInput(
                attrs={
                    "class": "form-control",
                    "placeholder": "Email Address",
                    "required": True,
                }
            ),
            "phone": forms.TextInput(
                attrs={
                    "class": "form-control",
                    "placeholder": "+234 123 456 7890",
                    "required": True,
                }
            ),
            "arrival_date": forms.DateInput(
                attrs={"class": "form-control", "type": "date"}
            ),
            "departure_date": forms.DateInput(
                attrs={"class": "form-control", "type": "date"}
            ),
            "needs_visa_assistance": forms.Select(
                attrs={"class": "form-select"},
                choices=[
                    ("", "Need assistance with visa/travel?"),
                    (True, "Yes"),
                    (False, "No"),
                ],
            ),
            "dietary_restrictions": forms.Textarea(
                attrs={
                    "class": "form-control",
                    "rows": 3,
                    "placeholder": "Dietary Restrictions / Special Needs",
                }
            ),
            "receive_updates": forms.Select(
                attrs={"class": "form-select"},
                choices=[
                    ("", "Receive updates about future editions?"),
                    (True, "Yes"),
                    (False, "No"),
                ],
            ),
        }

        labels = {
            "fullname": "Full Name *",
            "organization": "Organization / Company *",
            "position": "Position / Title",
            "city": "City / Location",
            "country": "Country / Region *",
            "email": "Email Address *",
            "phone": "Phone Number *",
            "arrival_date": "Arrival Date",
            "departure_date": "Departure Date",
            "needs_visa_assistance": "Visa Assistance",
            "interested_in_panels": "Panel / Roundtable Discussions",
            "interested_in_capacity_building": "Capacity Building Sessions",
            "interested_in_networking": "Networking Sessions (B2B / B2G / B2Customs)",
            "dietary_restrictions": "Dietary Restrictions",
            "receive_updates": "Receive Updates",
        }

    def clean_email(self):
        email = self.cleaned_data.get("email")
        # Check if email is already registered
        if Registration.objects.filter(email=email).exists():
            raise ValidationError("This email address is already registered.")
        return email.lower()

    def clean_phone(self):
        phone = self.cleaned_data.get("phone")
        # Remove spaces and special characters for validation
        phone_digits = re.sub(r"[^\d+]", "", phone)
        if not re.match(r"^\+?1?\d{9,15}$", phone_digits):
            raise ValidationError("Please enter a valid phone number (9-15 digits).")
        return phone

    def clean(self):
        cleaned_data = super().clean()
        arrival_date = cleaned_data.get("arrival_date")
        departure_date = cleaned_data.get("departure_date")

        if arrival_date and departure_date:
            if departure_date <= arrival_date:
                raise ValidationError("Departure date must be after arrival date.")

        return cleaned_data


class ContactMessageForm(forms.ModelForm):
    """Formulaire de contact"""

    class Meta:
        model = ContactMessage
        fields = [
            "first_name",
            "last_name",
            "email",
            "phone",
            "organization",
            "subject",
            "message",
        ]

        widgets = {
            "first_name": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "John", "required": True}
            ),
            "last_name": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "Doe", "required": True}
            ),
            "email": forms.EmailInput(
                attrs={
                    "class": "form-control",
                    "placeholder": "john.doe@example.com",
                    "required": True,
                }
            ),
            "phone": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "+234 123 456 7890"}
            ),
            "organization": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "Your organization name"}
            ),
            "subject": forms.Select(attrs={"class": "form-select", "required": True}),
            "message": forms.Textarea(
                attrs={
                    "class": "form-control",
                    "rows": 5,
                    "placeholder": "Please share your questions or comments...",
                    "required": True,
                }
            ),
        }

        labels = {
            "first_name": "First Name *",
            "last_name": "Last Name *",
            "email": "Email Address *",
            "phone": "Phone Number",
            "organization": "Organization",
            "subject": "Subject *",
            "message": "Your Message *",
        }

    def clean_email(self):
        return self.cleaned_data.get("email").lower()


class NewsletterForm(forms.ModelForm):
    """Formulaire d'abonnement à la newsletter"""

    class Meta:
        model = Newsletter
        fields = ["email"]

        widgets = {
            "email": forms.EmailInput(
                attrs={
                    "class": "form-control",
                    "placeholder": "Enter your email address",
                    "required": True,
                }
            )
        }

    def clean_email(self):
        email = self.cleaned_data.get("email").lower()
        if Newsletter.objects.filter(email=email).exists():
            raise ValidationError("This email is already subscribed.")
        return email


class SpeakerForm(forms.ModelForm):
    """Formulaire pour devenir speaker"""

    class Meta:
        model = Speaker
        fields = [
            "full_name",
            "title",
            "organization",
            "category",
            "bio",
            "photo",
            "linkedin_url",
            "twitter_url",
        ]

        widgets = {
            "full_name": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "Full Name"}
            ),
            "title": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "Professional Title"}
            ),
            "organization": forms.TextInput(
                attrs={"class": "form-control", "placeholder": "Organization"}
            ),
            "category": forms.Select(attrs={"class": "form-select"}),
            "bio": forms.Textarea(
                attrs={
                    "class": "form-control",
                    "rows": 5,
                    "placeholder": "Brief biography (max 500 words)",
                }
            ),
            "photo": forms.FileInput(
                attrs={"class": "form-control", "accept": "image/*"}
            ),
            "linkedin_url": forms.URLInput(
                attrs={
                    "class": "form-control",
                    "placeholder": "https://linkedin.com/in/yourprofile",
                }
            ),
            "twitter_url": forms.URLInput(
                attrs={
                    "class": "form-control",
                    "placeholder": "https://twitter.com/yourhandle",
                }
            ),
        }

    def clean_photo(self):
        photo = self.cleaned_data.get("photo")
        if photo:
            if photo.size > 5 * 1024 * 1024:  # 5MB limit
                raise ValidationError("Image file too large (max 5MB).")
            if not photo.content_type.startswith("image/"):
                raise ValidationError("Only image files are allowed.")
        return photo


class PartnerApplicationForm(forms.Form):
    """Formulaire pour devenir partenaire"""

    PARTNER_TYPE_CHOICES = [
        ("", "Select Partnership Type"),
        ("sponsor", "Sponsorship"),
        ("collaboration", "Collaboration Partner"),
        ("media", "Media Partner"),
        ("exhibitor", "Exhibitor"),
        ("other", "Other"),
    ]

    company_name = forms.CharField(
        max_length=255,
        widget=forms.TextInput(
            attrs={"class": "form-control", "placeholder": "Company Name"}
        ),
    )

    contact_person = forms.CharField(
        max_length=255,
        widget=forms.TextInput(
            attrs={"class": "form-control", "placeholder": "Contact Person Name"}
        ),
    )

    email = forms.EmailField(
        widget=forms.EmailInput(
            attrs={"class": "form-control", "placeholder": "Email Address"}
        )
    )

    phone = forms.CharField(
        max_length=50,
        widget=forms.TextInput(
            attrs={"class": "form-control", "placeholder": "Phone Number"}
        ),
    )

    partnership_type = forms.ChoiceField(
        choices=PARTNER_TYPE_CHOICES,
        widget=forms.Select(attrs={"class": "form-select"}),
    )

    company_website = forms.URLField(
        required=False,
        widget=forms.URLInput(
            attrs={
                "class": "form-control",
                "placeholder": "https://www.yourcompany.com",
            }
        ),
    )

    company_logo = forms.ImageField(
        required=False,
        widget=forms.FileInput(attrs={"class": "form-control", "accept": "image/*"}),
    )

    message = forms.CharField(
        widget=forms.Textarea(
            attrs={
                "class": "form-control",
                "rows": 5,
                "placeholder": "Tell us about your interest in partnering...",
            }
        )
    )

    def clean_company_logo(self):
        logo = self.cleaned_data.get("company_logo")
        if logo:
            if logo.size > 2 * 1024 * 1024:  # 2MB limit
                raise ValidationError("Logo file too large (max 2MB).")
        return logo


class SearchForm(forms.Form):
    """Formulaire de recherche général"""

    query = forms.CharField(
        max_length=255,
        required=False,
        widget=forms.TextInput(
            attrs={"class": "form-control", "placeholder": "Search..."}
        ),
    )


class RegistrationFilterForm(forms.Form):
    """Formulaire de filtrage des inscriptions (Admin)"""

    STATUS_CHOICES = [
        ("", "All Statuses"),
        ("pending", "Pending Review"),
        ("approved", "Approved"),
        ("rejected", "Rejected"),
        ("waitlist", "Waitlist"),
    ]

    status = forms.ChoiceField(
        choices=STATUS_CHOICES,
        required=False,
        widget=forms.Select(attrs={"class": "form-select"}),
    )

    country = forms.CharField(
        max_length=255,
        required=False,
        widget=forms.TextInput(
            attrs={"class": "form-control", "placeholder": "Filter by country"}
        ),
    )

    date_from = forms.DateField(
        required=False,
        widget=forms.DateInput(attrs={"class": "form-control", "type": "date"}),
    )

    date_to = forms.DateField(
        required=False,
        widget=forms.DateInput(attrs={"class": "form-control", "type": "date"}),
    )

    needs_visa = forms.NullBooleanField(
        required=False,
        widget=forms.Select(
            attrs={"class": "form-select"},
            choices=[
                ("", "All"),
                ("true", "Needs Visa Assistance"),
                ("false", "No Visa Assistance"),
            ],
        ),
    )
