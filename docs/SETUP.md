# Guide de Setup - FCS Hero (frigoclimat.fr)

## Pre-requis

- **Node.js** >= 18 / **Bun** (recommande)
- **Terraform** >= 1.5
- **AWS CLI** v2 (pour le deploiement S3)
- Un compte **OVH** avec :
  - Un projet **Public Cloud** actif
  - Le domaine **frigoclimat.fr** gere dans la zone DNS OVH

## 1. Obtenir les credentials OVH API

1. Aller sur [https://api.ovh.com/createToken/](https://api.ovh.com/createToken/)
2. Se connecter avec votre compte OVH
3. Remplir les champs :
   - **Application name** : `fcs-hero-terraform`
   - **Application description** : `Terraform pour frigoclimat.fr`
   - **Validity** : `Unlimited`
   - **Rights** : ajouter les droits suivants :
     - `GET /cloud/project/*`
     - `POST /cloud/project/*`
     - `PUT /cloud/project/*`
     - `DELETE /cloud/project/*`
     - `GET /domain/zone/*`
     - `POST /domain/zone/*`
     - `PUT /domain/zone/*`
     - `DELETE /domain/zone/*`
4. Copier les 3 cles generees : **Application Key**, **Application Secret**, **Consumer Key**

## 2. Trouver l'ID du projet Public Cloud

1. Aller sur le [Manager OVH](https://www.ovh.com/manager/)
2. Naviguer vers **Public Cloud** > votre projet
3. L'ID du projet est dans l'URL : `https://www.ovh.com/manager/public-cloud/#/pci/projects/<PROJECT_ID>`

## 3. Configurer les secrets Terraform

```bash
cp terraform/secrets.tfvars.example terraform/secrets.tfvars
```

Editer `terraform/secrets.tfvars` avec vos vraies valeurs.

## 4. Initialiser et deployer

```bash
# Installer les dependances
bun install

# Setup complet (init Terraform + apply + build + deploy)
make setup
```

Ou etape par etape :

```bash
make infra-init     # Initialiser Terraform
make infra-plan     # Verifier les changements
make infra-apply    # Creer l'infrastructure
make deploy         # Build + upload du site
```

## 5. Configurer AWS CLI

Apres `make infra-apply`, configurez AWS CLI avec les credentials S3 :

```bash
# Recuperer les credentials
cd terraform
terraform output -raw s3_access_key_id
terraform output -raw s3_secret_access_key

# Configurer un profil AWS CLI
aws configure --profile ovh-s3
# Access Key ID: (coller la valeur)
# Secret Access Key: (coller la valeur)
# Region: gra
# Output format: json
```

Puis exporter le profil avant deploiement :

```bash
export AWS_PROFILE=ovh-s3
make deploy
```
