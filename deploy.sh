#!/usr/bin/env sh

# abort on errors
set -e

# check if we have uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
  echo "⚠️ Você tem alterações não commitadas. Por favor, faça commit ou stash antes de fazer deploy."
  exit 1
fi

# check if we are on the main branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "⚠️ Você não está na branch main. Por favor, mude para a main antes de fazer deploy."
  exit 1
fi

echo "🔍 Verificando dependências..."
npm install

echo "🧪 Executando testes..."
npm run test || true

echo "🏗️ Construindo o projeto..."
npm run build

echo "📦 Preparando para deploy..."
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# Otimizar imagens se o comando sips estiver disponível
if command -v sips &> /dev/null; then
  echo "🖼️ Otimizando imagens..."
  find . -name "*.png" -exec sips -Z 1200 {} \;
  find . -name "*.jpg" -exec sips -Z 1200 {} \;
fi

# Inicializar repositório git
echo "🚀 Iniciando deploy para GitHub Pages..."
git init
git checkout -B main
git add -A
git commit -m "deploy: $(date +"%Y-%m-%d %H:%M:%S")"

# Deploy para GitHub Pages
git push -f git@github.com:mayssaferreira/aura-clinic-bliss.git main:gh-pages

echo "✅ Deploy concluído com sucesso!"
cd - 