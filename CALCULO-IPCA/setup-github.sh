#!/bin/bash

# 🚀 Script de Setup para GitHub
# Execute este script para configurar o repositório automaticamente

echo "🚀 Configurando Calculadora de Reajuste Salarial para GitHub..."
echo "=================================================="

# Verificar se o Git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git não está instalado. Por favor, instale o Git primeiro."
    exit 1
fi

# Inicializar repositório Git (se não existir)
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositório Git..."
    git init
    git branch -M main
fi

# Adicionar arquivos
echo "📄 Adicionando arquivos ao Git..."
git add .

# Verificar se há mudanças para commit
if git diff --staged --quiet; then
    echo "ℹ️  Nenhuma mudança para commit."
else
    # Fazer commit inicial
    echo "💾 Fazendo commit inicial..."
    git commit -m "🚀 feat: adiciona calculadora de reajuste salarial offline

- Calculadora 100% offline para dispositivos móveis
- Suporte a IPCA, IGP-M, INPC, SELIC
- Interface responsiva otimizada para celulares
- Configuração para GitHub Pages
- Documentação completa
- CI/CD automático via GitHub Actions"
fi

echo ""
echo "✅ Configuração local concluída!"
echo "=================================================="
echo ""
echo "🔗 Próximos passos:"
echo "1. Crie um repositório no GitHub chamado 'calculadora-reajuste-salarial'"
echo "2. Execute os comandos abaixo (substitua SEU-USUARIO):"
echo ""
echo "   git remote add origin https://github.com/smsilva2024/calculadora-reajuste-salarial.git"
echo "   git push -u origin main"
echo ""
echo "3. Vá em Settings → Pages → Source → GitHub Actions"
echo "4. Sua calculadora estará em: https://smsilva2024.github.io/calculadora-reajuste-salarial/"
echo ""
echo "📋 Lembre-se de:"
echo "• Substituir 'SEU-USUARIO' pelo seu usuário do GitHub"
echo "• Ativar GitHub Pages nas configurações do repositório"
echo "• Aguardar 2-5 minutos para o primeiro deploy"
echo ""
echo "🎉 Sucesso! Sua calculadora estará online em breve!"
