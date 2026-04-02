#!/bin/bash

# 🚀 Script de Instalação Automática - AI Trainer Expo
# Execute: bash install.sh

echo "🎯 AI TRAINER - Instalação Automática"
echo "======================================"
echo ""

# Verificar Node.js
echo "📦 Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado!"
    echo "➡️  Instale em: https://nodejs.org"
    exit 1
fi

NODE_VERSION=$(node -v)
echo "✅ Node.js instalado: $NODE_VERSION"
echo ""

# Verificar npm
echo "📦 Verificando npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado!"
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "✅ npm instalado: v$NPM_VERSION"
echo ""

# Limpar instalações anteriores
echo "🧹 Limpando cache anterior..."
rm -rf node_modules
rm -rf .expo
rm -f package-lock.json
echo "✅ Cache limpo"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
echo "⏱️  Isso pode levar alguns minutos..."
echo ""

npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Instalação concluída com sucesso!"
    echo ""
    echo "======================================"
    echo "🎉 PRÓXIMOS PASSOS:"
    echo "======================================"
    echo ""
    echo "1️⃣  Baixe o app Expo Go no celular:"
    echo "    📱 iOS: App Store"
    echo "    📱 Android: Google Play"
    echo ""
    echo "2️⃣  Inicie o projeto:"
    echo "    npm start"
    echo ""
    echo "3️⃣  Escaneie o QR code com Expo Go"
    echo ""
    echo "======================================"
    echo "📚 DOCUMENTAÇÃO:"
    echo "======================================"
    echo ""
    echo "• INICIO_RAPIDO.md    - Quick start"
    echo "• INDEX.md            - Índice completo"
    echo "• TROUBLESHOOTING.md  - Resolver problemas"
    echo "• FAQ.md              - Perguntas frequentes"
    echo ""
    echo "======================================"
    echo "💡 DICA: Execute 'npm start' agora!"
    echo "======================================"
    echo ""
else
    echo ""
    echo "❌ Erro na instalação!"
    echo ""
    echo "🔧 Tente manualmente:"
    echo "   npm cache clean --force"
    echo "   npm install"
    echo ""
    echo "📖 Ou consulte: TROUBLESHOOTING.md"
    echo ""
    exit 1
fi
