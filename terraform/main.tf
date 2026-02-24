# ============================================================================
# MAIN - Point d'entree principal Terraform
# ============================================================================
# Ce fichier sert de reference pour la structure du projet.
# Les ressources sont organisees dans des fichiers separes :
#   - providers.tf  : Configuration des providers OVH et AWS
#   - variables.tf  : Variables de configuration
#   - bucket.tf     : Object Storage S3 + website hosting
#   - dns.tf        : Enregistrements DNS
#   - outputs.tf    : Sorties post-deploiement
# ============================================================================

# Tags communs pour toutes les ressources
locals {
  common_tags = {
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "terraform"
    Domain      = var.domain_name
  }

  bucket_name = "${var.project_name}-${var.environment}-static"
  s3_endpoint = "https://s3.${lower(var.region)}.io.cloud.ovh.net"
}
