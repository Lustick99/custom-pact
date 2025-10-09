"""
Django settings for Customs PACT project.
"""

import os
from pathlib import Path
from decouple import config

from django.utils.translation import gettext_lazy as _
import environ
from django.templatetags.static import static

# Chemin du projet
BASE_DIR = Path(__file__).resolve().parent.parent

# Charger le .env
env = environ.Env(DEBUG=(bool, False))
environ.Env.read_env(os.path.join(BASE_DIR, "core/.env"))

# Sécurité
SECRET_KEY = env("SECRET_KEY")

DEBUG = env("DEBUG")

ALLOWED_HOSTS = env.list("ALLOWED_HOSTS")


# Application definition

INSTALLED_APPS = [
    # custom admin app
    "unfold",
    "unfold.contrib.filters",
    "unfold.contrib.forms",
    "unfold.contrib.import_export",
    # base app
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # Third-party
    "parler",
    "import_export",
    "ckeditor",
    "ckeditor_uploader",
    # custom Local apps
    "landing",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.locale.LocaleMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "core.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "core.wsgi.application"


# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": config("DB_NAME", default="customs_pact_db"),
        "USER": config("DB_USER", default="postgres"),
        "PASSWORD": config("DB_PASSWORD", default=""),
        "HOST": config("DB_HOST", default="localhost"),
        "PORT": config("DB_PORT", default="5432"),
    }
}

# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.sqlite3",
#         "NAME": BASE_DIR / "db.sqlite3",
#     }
# }


# Password validation
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.2/topics/i18n/


# Langue par défaut
LANGUAGE_CODE = "en"

# Liste des langues supportées
LANGUAGES = [
    ("fr", _("Français")),
    ("en", _("English")),
]

PARLER_LANGUAGES = {
    None: (
        {"code": "fr"},
        {"code": "en"},
    ),
    "default": {
        "fallbacks": ["fr"],  # fallback si pas de traduction
        "hide_untranslated": False,  # si True, cacher les objets sans traduction
    },
}

# Chemin pour les fichiers de traduction
LOCALE_PATHS = [
    BASE_DIR / "locale",
]

# Activer internationalisation
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Time zone
TIME_ZONE = "Africa/Lagos"

# Localization settings
USE_THOUSAND_SEPARATOR = True
NUMBER_GROUPING = 3


# Configuration Unfold
UNFOLD = {
    "SITE_TITLE": "Customs PACT 2025",
    "SITE_HEADER": "Customs PACT Administration",
    "SITE_URL": "/",
    "SITE_ICON": {
        "light": lambda request: static("favicon.png"),
        "dark": lambda request: static("favicon.png"),
    },
    "SITE_LOGO": {
        "light": lambda request: static("logo-light.png"),
        "dark": lambda request: static("logo-dark.png"),
    },
    "SITE_SYMBOL": "event",
    "SHOW_HISTORY": True,
    "SHOW_VIEW_ON_SITE": True,
    "COLORS": {
        "primary": {
            "50": "239 246 255",
            "100": "219 234 254",
            "200": "191 219 254",
            "300": "147 197 253",
            "400": "96 165 250",
            "500": "59 130 246",
            "600": "37 99 235",
            "700": "29 78 216",
            "800": "30 64 175",
            "900": "30 58 138",
            "950": "23 37 84",
        },
    },
    "EXTENSIONS": {
        "modeltranslation": {
            "flags": {
                "en": "🇬🇧",
                "fr": "🇫🇷",
                "ar": "🇸🇦",
            },
        },
    },
    "SIDEBAR": {
        "show_search": True,
        "show_all_applications": True,
        "navigation": [
            {
                "title": "Dashboard",
                "items": [
                    {
                        "title": "Overview",
                        "icon": "dashboard",
                        "link": "/admin/",
                    },
                ],
            },
            {
                "title": "Event Management",
                "separator": True,
                "collapsible": True,
                "items": [
                    {
                        "title": "Event Configuration",
                        "icon": "settings",
                        "link": "/admin/event/eventconfiguration/",
                    },
                    {
                        "title": "About Section",
                        "icon": "info",
                        "link": "/admin/event/aboutsection/",
                    },
                ],
            },
            {
                "title": "Program",
                "separator": True,
                "collapsible": True,
                "items": [
                    {
                        "title": "Speakers",
                        "icon": "group",
                        "link": "/admin/event/speaker/",
                    },
                    {
                        "title": "Program Days",
                        "icon": "calendar_today",
                        "link": "/admin/event/programday/",
                    },
                    {
                        "title": "Sessions",
                        "icon": "event",
                        "link": "/admin/event/programsession/",
                    },
                ],
            },
            {
                "title": "Registrations",
                "separator": True,
                "collapsible": True,
                "items": [
                    {
                        "title": "All Registrations",
                        "icon": "how_to_reg",
                        "link": "/admin/event/registration/",
                        "badge": lambda request: Registration.objects.filter(
                            status="pending"
                        ).count(),
                    },
                    {
                        "title": "Contact Messages",
                        "icon": "mail",
                        "link": "/admin/event/contactmessage/",
                        "badge": lambda request: ContactMessage.objects.filter(
                            is_read=False
                        ).count(),
                    },
                ],
            },
            {
                "title": "Logistics",
                "separator": True,
                "collapsible": True,
                "items": [
                    {
                        "title": "Venues",
                        "icon": "place",
                        "link": "/admin/event/venue/",
                    },
                    {
                        "title": "Hotels",
                        "icon": "hotel",
                        "link": "/admin/event/hotel/",
                    },
                    {
                        "title": "Logistic Info",
                        "icon": "local_shipping",
                        "link": "/admin/event/logisticinfo/",
                    },
                ],
            },
            {
                "title": "Partners & Media",
                "separator": True,
                "collapsible": True,
                "items": [
                    {
                        "title": "Partners",
                        "icon": "handshake",
                        "link": "/admin/event/partner/",
                    },
                    {
                        "title": "Contacts",
                        "icon": "contact_phone",
                        "link": "/admin/event/contact/",
                    },
                ],
            },
        ],
    },
}


# ========== CKEDITOR CONFIGURATION ========== #
CKEDITOR_UPLOAD_PATH = "uploads/"
CKEDITOR_IMAGE_BACKEND = "pillow"
CKEDITOR_ALLOW_NONIMAGE_FILES = False

CKEDITOR_CONFIGS = {
    "default": {
        "toolbar": "full",
        "height": 300,
        "width": "100%",
        "toolbar_Custom": [
            ["Bold", "Italic", "Underline"],
            [
                "NumberedList",
                "BulletedList",
                "-",
                "Outdent",
                "Indent",
                "-",
                "JustifyLeft",
                "JustifyCenter",
                "JustifyRight",
                "JustifyBlock",
            ],
            ["Link", "Unlink"],
            ["RemoveFormat", "Source"],
        ],
    },
    "awesome_ckeditor": {
        "toolbar": "full",
        "height": 400,
        "extraPlugins": ",".join(["codesnippet", "widget", "dialog"]),
    },
}

# ========== EMAIL CONFIGURATION ==========
# Development (Console)
if DEBUG:
    EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
else:
    # Production (SendGrid example)
    EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
    EMAIL_HOST = config("EMAIL_HOST", default="smtp.sendgrid.net")
    EMAIL_PORT = config("EMAIL_PORT", default=587, cast=int)
    EMAIL_USE_TLS = True
    EMAIL_HOST_USER = config("EMAIL_HOST_USER", default="apikey")
    EMAIL_HOST_PASSWORD = config("EMAIL_HOST_PASSWORD", default="")

DEFAULT_FROM_EMAIL = config("DEFAULT_FROM_EMAIL", default="noreply@customspact.org")
ADMIN_EMAIL = config("ADMIN_EMAIL", default="admin@customspact.org")

# ========== IMPORT/EXPORT CONFIGURATION ==========
IMPORT_EXPORT_USE_TRANSACTIONS = True
IMPORT_EXPORT_SKIP_ADMIN_LOG = False

# ========== SECURITY SETTINGS (Production) ==========
if not DEBUG:
    SECURE_SSL_REDIRECT = True
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True
    SECURE_BROWSER_XSS_FILTER = True
    SECURE_CONTENT_TYPE_NOSNIFF = True
    X_FRAME_OPTIONS = "DENY"
    SECURE_HSTS_SECONDS = 31536000
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_HSTS_PRELOAD = True

# ========== LOGGING CONFIGURATION ==========
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "verbose": {
            "format": "{levelname} {asctime} {module} {message}",
            "style": "{",
        },
    },
    "handlers": {
        "file": {
            "level": "INFO",
            "class": "logging.handlers.RotatingFileHandler",
            "filename": BASE_DIR / "logs" / "django.log",
            "maxBytes": 1024 * 1024 * 5,  # 5MB
            "backupCount": 5,
            "formatter": "verbose",
        },
        "console": {
            "level": "INFO",
            "class": "logging.StreamHandler",
            "formatter": "verbose",
        },
    },
    "loggers": {
        "django": {
            "handlers": ["file", "console"],
            "level": "INFO",
            "propagate": True,
        },
        "events": {
            "handlers": ["file", "console"],
            "level": "INFO",
            "propagate": True,
        },
    },
}

# Create logs directory if it doesn't exist
LOGS_DIR = BASE_DIR / "logs"
if not LOGS_DIR.exists():
    LOGS_DIR.mkdir()

# ========== CACHE CONFIGURATION (Optional) ==========
CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.redis.RedisCache",
        "LOCATION": config("REDIS_URL", default="redis://127.0.0.1:6379/1"),
    }
}

# Alternative: File-based cache for development
# CACHES = {
#     'default': {
#         'BACKEND': 'django.core.cache.backends.filebased.FileBasedCache',
#         'LOCATION': BASE_DIR / 'cache',
#     }
# }

# ========== SESSION CONFIGURATION ==========
SESSION_ENGINE = "django.contrib.sessions.backends.db"
SESSION_COOKIE_AGE = 1209600  # 2 weeks
SESSION_SAVE_EVERY_REQUEST = False

# ========== MESSAGE TAGS (Bootstrap compatibility) ==========
from django.contrib.messages import constants as messages

MESSAGE_TAGS = {
    messages.DEBUG: "alert-info",
    messages.INFO: "alert-info",
    messages.SUCCESS: "alert-success",
    messages.WARNING: "alert-warning",
    messages.ERROR: "alert-danger",
}

# ========== PAGINATION ==========
PAGINATION_PER_PAGE = 20

# ========== FILE UPLOAD SETTINGS ==========
FILE_UPLOAD_MAX_MEMORY_SIZE = 5242880  # 5MB
DATA_UPLOAD_MAX_MEMORY_SIZE = 5242880  # 5MB

# Allowed file extensions for uploads
ALLOWED_IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "webp"]
ALLOWED_DOCUMENT_EXTENSIONS = ["pdf", "doc", "docx", "xls", "xlsx"]


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.2/howto/static-files/

STATIC_URL = "/static/"
STATICFILES_DIRS = [
    BASE_DIR / "assets",
    BASE_DIR / "css",
    BASE_DIR / "js",
]
STATICFILES_DIRS = [os.path.join(BASE_DIR, "static")]
MEDIA_URL = "media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# Whitenoise configuration for production
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"


# Default primary key field type
# https://docs.djangoproject.com/en/5.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

if os.environ.get("ENV") == "PRODUCTION":

    # Static files settings
    PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

    STATIC_ROOT = os.path.join(PROJECT_ROOT, "staticfiles")

    # Extra places for collectstatic to find static files.
    STATICFILES_DIRS = (os.path.join(PROJECT_ROOT, "static"),)

    # Simplified static file serving.
    # https://warehouse.python.org/project/whitenoise/
    STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

    # DATABASES = { 'default': dj_database_url.config(conn_max_age=500) }
