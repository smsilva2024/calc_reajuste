@echo off
echo 🚀 Configurando Calculadora de Reajuste Salarial para GitHub...
echo ==================================================

REM Verificar se o Git está instalado
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git não está instalado. Por favor, instale o Git primeiro.
    pause
    exit /b 1
)

REM Inicializar repositório Git (se não existir)
if not exist ".git" (
    echo 📁 Inicializando repositório Git...
    git init
    git branch -M main
)

REM Adicionar arquivos
echo 📄 Adicionando arquivos ao Git...
git add .

REM Verificar se há mudanças para commit
git diff --staged --quiet
if %errorlevel% equ 0 (
    echo ℹ️  Nenhuma mudança para commit.
) else (
    REM Fazer commit inicial
    echo 💾 Fazendo commit inicial...
    git commit -m "🚀 feat: adiciona calculadora de reajuste salarial offline - Calculadora 100%% offline para dispositivos móveis - Suporte a IPCA, IGP-M, INPC, SELIC - Interface responsiva otimizada para celulares - Configuração para GitHub Pages - Documentação completa - CI/CD automático via GitHub Actions"
)

echo.
echo ✅ Configuração local concluída!
echo ==================================================
echo.
echo 🔗 Próximos passos:
echo 1. Crie um repositório no GitHub chamado 'calculadora-reajuste-salarial'
echo 2. Execute os comandos abaixo (substitua SEU-USUARIO):
echo.
echo    git remote add origin https://github.com/smsilva2024/calculadora-reajuste-salarial.git
echo    git push -u origin main
echo.
echo 3. Vá em Settings → Pages → Source → GitHub Actions
echo 4. Sua calculadora estará em: https://smsilva2024.github.io/calculadora-reajuste-salarial/
echo.
echo 📋 Lembre-se de:
echo • Substituir 'SEU-USUARIO' pelo seu usuário do GitHub
echo • Ativar GitHub Pages nas configurações do repositório
echo • Aguardar 2-5 minutos para o primeiro deploy
echo.
echo 🎉 Sucesso! Sua calculadora estará online em breve!
echo.
pause
