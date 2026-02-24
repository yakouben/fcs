# ============================================================================
# BUCKET - OVH Object Storage S3-compatible
# ============================================================================
# Creation du bucket, de l'utilisateur S3, et de la configuration website
# Le bucket sert a heberger les fichiers statiques du site Next.js
# ============================================================================

# --- Utilisateur S3 pour acces programmatique ---

resource "ovh_cloud_project_user" "s3_user" {
  service_name = var.ovh_cloud_project_id
  description  = "User S3 pour ${var.project_name}-${var.environment}"
  role_name    = "objectstore_operator"
}

# --- Credentials S3 ---

resource "ovh_cloud_project_user_s3_credential" "s3_cred" {
  service_name = var.ovh_cloud_project_id
  user_id      = ovh_cloud_project_user.s3_user.id
}

# --- Bucket S3 pour le site statique ---

resource "ovh_cloud_project_storage" "static_bucket" {
  service_name = var.ovh_cloud_project_id
  region_name  = var.region
  name         = "${var.project_name}-${var.environment}-static"
}

# --- Politique d'acces public pour hosting web ---
# Utilise le provider AWS car OVH ne supporte pas nativement les bucket policies

resource "aws_s3_bucket_policy" "public_read" {
  bucket = ovh_cloud_project_storage.static_bucket.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "arn:aws:s3:::${ovh_cloud_project_storage.static_bucket.name}/*"
      }
    ]
  })
}

# --- Configuration Website Hosting ---
# Active le mode "site statique" sur le bucket via le provider AWS

resource "aws_s3_bucket_website_configuration" "static_website" {
  bucket = ovh_cloud_project_storage.static_bucket.name

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404/index.html"
  }
}

# --- Configuration CORS ---
# Autorise les requetes cross-origin depuis le domaine principal

resource "aws_s3_bucket_cors_configuration" "website_cors" {
  bucket = ovh_cloud_project_storage.static_bucket.name

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = [
      "https://${var.domain_name}",
      "https://www.${var.domain_name}"
    ]
    max_age_seconds = 3600
  }
}
