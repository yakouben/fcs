# ============================================================================
# Makefile - FCS Hero (frigoclimat.fr)
# ============================================================================
# Commandes pour build, deploy et gestion de l'infrastructure
# Usage : make help
# ============================================================================

.PHONY: help build deploy infra-init infra-plan infra-apply infra-destroy clean sync

# --- Variables ---
TERRAFORM_DIR  = terraform
TFVARS_FILE    = $(TERRAFORM_DIR)/secrets.tfvars
OUT_DIR        = out
S3_BUCKET      = $(shell cd $(TERRAFORM_DIR) && terraform output -raw bucket_name 2>/dev/null)
S3_ENDPOINT    = $(shell cd $(TERRAFORM_DIR) && terraform output -raw s3_endpoint 2>/dev/null)
S3_REGION      = $(shell cd $(TERRAFORM_DIR) && terraform output -raw bucket_region 2>/dev/null)

# --- Aide ---
help: ## Afficher cette aide
	@echo ""
	@echo "  FCS Hero - Commandes disponibles"
	@echo "  ================================"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'
	@echo ""

# --- Build ---
build: ## Build le site Next.js en mode static export
	bun run build

clean: ## Supprimer les fichiers generes (out/)
	rm -rf $(OUT_DIR) .next

# --- Infrastructure Terraform ---
infra-init: ## Initialiser Terraform (a faire une seule fois)
	cd $(TERRAFORM_DIR) && terraform init

infra-plan: ## Voir les changements Terraform prevus
	cd $(TERRAFORM_DIR) && terraform plan -var-file="secrets.tfvars"

infra-apply: ## Appliquer l'infrastructure Terraform
	cd $(TERRAFORM_DIR) && terraform apply -var-file="secrets.tfvars"

infra-destroy: ## Detruire toute l'infrastructure Terraform
	cd $(TERRAFORM_DIR) && terraform destroy -var-file="secrets.tfvars"

infra-output: ## Afficher les outputs Terraform
	cd $(TERRAFORM_DIR) && terraform output

# --- Deploiement ---
sync: build ## Build + Upload des fichiers vers le bucket S3
	@if [ -z "$(S3_BUCKET)" ]; then \
		echo "Erreur: impossible de lire le nom du bucket. Avez-vous fait 'make infra-apply' ?"; \
		exit 1; \
	fi
	aws s3 sync $(OUT_DIR)/ s3://$(S3_BUCKET)/ \
		--endpoint-url $(S3_ENDPOINT) \
		--delete \
		--cache-control "public, max-age=31536000, immutable" \
		--exclude "*.html" \
		--exclude "*.json"
	aws s3 sync $(OUT_DIR)/ s3://$(S3_BUCKET)/ \
		--endpoint-url $(S3_ENDPOINT) \
		--exclude "*" \
		--include "*.html" \
		--include "*.json" \
		--cache-control "public, max-age=0, must-revalidate"
	@echo ""
	@echo "Deploiement termine !"
	@echo "Site : $$(cd $(TERRAFORM_DIR) && terraform output -raw website_endpoint)"
	@echo "URL finale : $$(cd $(TERRAFORM_DIR) && terraform output -raw final_url)"

deploy: sync ## Alias pour sync (build + upload)

# --- Setup complet ---
setup: infra-init infra-apply sync ## Setup complet : init + apply + deploy
	@echo "Setup termine ! Votre site est en ligne."
