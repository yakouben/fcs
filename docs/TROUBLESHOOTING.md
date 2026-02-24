# Troubleshooting - FCS Hero

## Terraform

### Erreur "401 Unauthorized" lors de `terraform apply`

Les credentials OVH API sont invalides ou expirees.

- Verifier `terraform/secrets.tfvars`
- Regenerer un token sur [https://api.ovh.com/createToken/](https://api.ovh.com/createToken/)
- S'assurer que les droits incluent `/cloud/project/*` et `/domain/zone/*`

### Erreur "Project not found"

L'ID du projet Public Cloud est incorrect.

- Verifier `ovh_cloud_project_id` dans `secrets.tfvars`
- L'ID se trouve dans l'URL du Manager OVH

### Erreur "Bucket already exists"

Un bucket avec ce nom existe deja dans la region.

- Changer `project_name` ou `environment` dans `secrets.tfvars`
- Ou importer le bucket existant : `cd terraform && terraform import ovh_cloud_project_storage.static_bucket <service_name>/<region>/<bucket_name>`

## Deploiement (AWS CLI / S3)

### Erreur "Unable to locate credentials"

AWS CLI n'est pas configure avec les credentials S3 OVH.

```bash
cd terraform
terraform output -raw s3_access_key_id
terraform output -raw s3_secret_access_key
aws configure --profile ovh-s3
export AWS_PROFILE=ovh-s3
```

### Erreur "NoSuchBucket"

Le bucket n'existe pas encore. Lancer d'abord `make infra-apply`.

### Les fichiers sont uploades mais le site affiche 403

La bucket policy n'a pas ete appliquee correctement.

```bash
make infra-plan   # Verifier qu'il n'y a pas de drift
make infra-apply  # Re-appliquer si necessaire
```

## DNS

### Le site n'est pas accessible via www.frigoclimat.fr

La propagation DNS peut prendre jusqu'a 24h (generalement 1-2h).

- Verifier l'enregistrement CNAME : `dig www.frigoclimat.fr CNAME`
- Verifier que le bucket repond : `curl -I http://<bucket>.s3-website.gra.io.cloud.ovh.net`

### frigoclimat.fr (sans www) ne fonctionne pas

La redirection apex est geree par OVH. Verifier :

```bash
curl -I http://frigoclimat.fr
# Doit retourner 301 vers https://www.frigoclimat.fr
```

## Build Next.js

### Erreur "Image Optimization is not compatible with static export"

Deja gere : `next.config.ts` inclut `images.unoptimized: true`.

### Les pages dynamiques echouent au build

Le mode `output: 'export'` ne supporte pas :
- `getServerSideProps`
- Routes API (`/api/*`)
- `generateStaticParams` avec `dynamicParams: true`

Toutes les pages doivent etre statiques.
