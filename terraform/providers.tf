# ============================================================================
# PROVIDERS - Configuration des providers Terraform
# ============================================================================
# Provider OVH pour la gestion des ressources cloud (bucket, DNS, users)
# Provider AWS pour la configuration S3 website (compatible OVH Object Storage)
# ============================================================================

terraform {
  required_version = ">= 1.5"

  required_providers {
    ovh = {
      source  = "ovh/ovh"
      version = ">= 1.0.0"
    }
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.0.0"
    }
  }

  # Backend local pour simplifier
  # Pour production : utiliser remote backend (S3, Terraform Cloud)
  backend "local" {
    path = "terraform.tfstate"
  }
}

# Provider OVH - Gestion infrastructure cloud
provider "ovh" {
  endpoint           = "ovh-eu"
  application_key    = var.ovh_application_key
  application_secret = var.ovh_application_secret
  consumer_key       = var.ovh_consumer_key
}

# Provider AWS - Configuration S3 website hosting sur OVH Object Storage
# OVH Object Storage est compatible S3, on utilise le provider AWS
# pour les fonctionnalites S3 non supportees nativement par le provider OVH
provider "aws" {
  region                      = lower(var.region)
  access_key                  = ovh_cloud_project_user_s3_credential.s3_cred.access_key_id
  secret_key                  = ovh_cloud_project_user_s3_credential.s3_cred.secret_access_key
  skip_credentials_validation = true
  skip_region_validation      = true
  skip_requesting_account_id  = true

  endpoints {
    s3 = "https://s3.${lower(var.region)}.io.cloud.ovh.net"
  }
}
