# ============================================================================
# DNS - Configuration des enregistrements DNS OVH
# ============================================================================
# Pointe le domaine frigoclimat.fr vers le bucket Object Storage
# Note : OVH ne propose pas de CDN manageable via Terraform.
# Le site est servi directement depuis Object Storage.
# Pour ajouter un CDN, utiliser Cloudflare en proxy ou OVH CDN via l'API.
# ============================================================================

# --- CNAME www vers le bucket S3 website ---
resource "ovh_domain_zone_record" "www_cname" {
  zone      = var.domain_name
  subdomain = "www"
  fieldtype = "CNAME"
  ttl       = 3600
  target    = "${ovh_cloud_project_storage.static_bucket.name}.s3-website.${lower(var.region)}.io.cloud.ovh.net."
}

# --- Redirection zone apex (frigoclimat.fr) ---
# Note : Un CNAME sur la racine (apex) n'est pas autorise par les RFC DNS.
# OVH ne supporte pas les enregistrements ALIAS/ANAME via Terraform.
# Solution : utiliser la redirection web OVH (configuree manuellement dans le Manager)
# ou pointer un A record vers un reverse proxy.
#
# Pour le moment, on cree un enregistrement de redirection OVH :
resource "ovh_domain_zone_redirection" "apex_redirect" {
  zone      = var.domain_name
  subdomain = ""
  type      = "visiblePermanent"
  target    = "https://www.${var.domain_name}"
}

# --- TXT pour SPF (anti-spam email) ---
resource "ovh_domain_zone_record" "spf" {
  zone      = var.domain_name
  subdomain = ""
  fieldtype = "TXT"
  ttl       = 3600
  target    = "\"v=spf1 include:mx.ovh.com ~all\""
}
