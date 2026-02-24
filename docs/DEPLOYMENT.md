# Deploiement - FCS Hero (frigoclimat.fr)

## Architecture

```
Next.js (static export)
    |
    v
OVH Object Storage (S3-compatible)
    |
    v
DNS (www.frigoclimat.fr -> CNAME -> bucket S3 website)
    |
    v
frigoclimat.fr -> redirection 301 -> www.frigoclimat.fr
```

## Commandes de deploiement

```bash
# Build + deploy en une commande
make deploy

# Ou separement
make build    # Build Next.js -> out/
make sync     # Upload vers S3
```

## Strategie de cache

Le Makefile applique deux regles de cache :

| Type de fichier | Cache-Control | Raison |
|---|---|---|
| `*.html`, `*.json` | `max-age=0, must-revalidate` | Contenu qui change a chaque deploy |
| Tout le reste (JS, CSS, images) | `max-age=31536000, immutable` | Assets hashes par Next.js |

## Workflow de deploiement

1. Modifier le code dans `src/`
2. Tester localement : `bun run dev`
3. Deployer : `make deploy`
4. Verifier sur `https://www.frigoclimat.fr`

## Rollback

Object Storage ne garde pas de versions. Pour un rollback :

1. Checkout le commit precedent : `git checkout <commit>`
2. Redeployer : `make deploy`

## Infrastructure

Pour modifier l'infrastructure :

```bash
make infra-plan    # Voir les changements prevus
make infra-apply   # Appliquer
```

Pour tout detruire :

```bash
make infra-destroy
```
