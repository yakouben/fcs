# ============================================================================
# VARIABLES - Variables de configuration du projet
# ============================================================================
# Toutes les variables sensibles doivent etre definies dans secrets.tfvars
# Les valeurs par defaut sont adaptees au projet frigoclimat.fr
# ============================================================================

# --- Credentials OVH API ---

variable "ovh_application_key" {
  description = "OVH API Application Key - Obtenu sur https://api.ovh.com/createToken/"
  type        = string
  sensitive   = true
}

variable "ovh_application_secret" {
  description = "OVH API Application Secret"
  type        = string
  sensitive   = true
}

variable "ovh_consumer_key" {
  description = "OVH API Consumer Key"
  type        = string
  sensitive   = true
}

# --- Configuration Projet ---

variable "ovh_cloud_project_id" {
  description = "ID du projet Public Cloud OVH (visible dans le Manager OVH)"
  type        = string
}

variable "project_name" {
  description = "Nom du projet (utilise pour nommer les ressources)"
  type        = string
  default     = "frigoclimat"

  validation {
    condition     = can(regex("^[a-z0-9-]+$", var.project_name))
    error_message = "Le nom doit contenir uniquement des minuscules, chiffres et tirets"
  }
}

variable "domain_name" {
  description = "Nom de domaine principal"
  type        = string
  default     = "frigoclimat.fr"
}

variable "region" {
  description = "Region OVH pour Object Storage (GRA=Gravelines, SBG=Strasbourg, BHS=Beauharnois)"
  type        = string
  default     = "GRA"

  validation {
    condition     = contains(["GRA", "SBG", "BHS", "DE", "UK", "WAW"], var.region)
    error_message = "Region invalide. Valeurs possibles: GRA, SBG, BHS, DE, UK, WAW"
  }
}

variable "environment" {
  description = "Environnement (dev, staging, prod)"
  type        = string
  default     = "prod"

  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environnement doit etre: dev, staging ou prod"
  }
}
