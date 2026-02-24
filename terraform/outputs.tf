# ============================================================================
# OUTPUTS - Informations post-deploiement
# ============================================================================
# Ces sorties sont utilisees par le Makefile et les scripts de deploiement
# Les valeurs sensibles sont masquees par defaut (terraform output -raw)
# ============================================================================

output "bucket_name" {
  description = "Nom du bucket S3"
  value       = ovh_cloud_project_storage.static_bucket.name
}

output "bucket_region" {
  description = "Region du bucket"
  value       = ovh_cloud_project_storage.static_bucket.region_name
}

output "s3_endpoint" {
  description = "Endpoint S3 pour upload (AWS CLI)"
  value       = "https://s3.${lower(var.region)}.io.cloud.ovh.net"
}

output "website_endpoint" {
  description = "URL du site sur Object Storage (acces direct)"
  value       = "http://${ovh_cloud_project_storage.static_bucket.name}.s3-website.${lower(var.region)}.io.cloud.ovh.net"
}

output "s3_access_key_id" {
  description = "Access Key ID pour AWS CLI"
  value       = ovh_cloud_project_user_s3_credential.s3_cred.access_key_id
  sensitive   = true
}

output "s3_secret_access_key" {
  description = "Secret Access Key pour AWS CLI"
  value       = ovh_cloud_project_user_s3_credential.s3_cred.secret_access_key
  sensitive   = true
}

output "final_url" {
  description = "URL finale du site (apres configuration DNS)"
  value       = "https://www.${var.domain_name}"
}

output "deployment_info" {
  description = "Informations completes pour deploiement"
  value = {
    bucket_name  = ovh_cloud_project_storage.static_bucket.name
    bucket_region = ovh_cloud_project_storage.static_bucket.region_name
    s3_endpoint  = "https://s3.${lower(var.region)}.io.cloud.ovh.net"
    website_url  = "http://${ovh_cloud_project_storage.static_bucket.name}.s3-website.${lower(var.region)}.io.cloud.ovh.net"
    final_domain = "www.${var.domain_name}"
  }
}
