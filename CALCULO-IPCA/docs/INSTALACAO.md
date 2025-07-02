# 🚀 Guia de Instalação e Deploy

## 📋 Pré-requisitos

- Conta no GitHub
- Git instalado no computador
- Navegador moderno

## 🔧 Setup Inicial

### 1. Criar Repositório no GitHub

1. Acesse [GitHub.com](https://github.com)
2. Clique em **"New repository"**
3. Nome sugerido: `calculadora-reajuste-salarial`
4. Descrição: `Calculadora de reajuste salarial 100% offline para dispositivos móveis`
5. ✅ Marque **"Public"** (para usar GitHub Pages gratuito)
6. ✅ Marque **"Add a README file"**
7. Escolha licença: **MIT License**
8. Clique **"Create repository"**

### 2. Clonar o Repositório

```bash
# Clone o repositório (substitua SEU-USUARIO)
git clone https://github.com/smsilva2024/calculadora-reajuste-salarial.git

# Entre na pasta
cd calculadora-reajuste-salarial
```

### 3. Adicionar os Arquivos

```bash
# Copie todos os arquivos do projeto para a pasta
# Os arquivos principais são:
# - index.html (ou renomeie calculadora-offline.html para index.html)
# - README.md
# - LICENSE
# - .github/workflows/deploy.yml

# Adicione os arquivos ao git
git add .

# Faça o commit
git commit -m "🚀 Adiciona calculadora de reajuste salarial offline"

# Envie para o GitHub
git push origin main
```

## 🌐 Configurar GitHub Pages

### Método 1: Automático (Recomendado)

O arquivo `.github/workflows/deploy.yml` já configurará tudo automaticamente.

1. Vá para **Settings** → **Pages**
2. Em **Source**, selecione **"GitHub Actions"**
3. O deploy será feito automaticamente a cada push

### Método 2: Manual

1. Vá para **Settings** → **Pages**
2. Em **Source**, selecione **"Deploy from a branch"**
3. Escolha **Branch**: `main`
4. Folder: `/ (root)`
5. Clique **"Save"**

## ✅ Verificar se Funcionou

1. Aguarde 2-5 minutos após o push
2. Acesse: `https://smsilva2024.github.io/calculadora-reajuste-salarial/`
3. A calculadora deve carregar normalmente
4. Teste em dispositivos móveis

## 🔗 URLs de Acesso

Após o deploy, sua calculadora estará disponível em:

- **URL Principal**: `https://smsilva2024.github.io/calculadora-reajuste-salarial/`
- **URL Alternativa**: `https://smsilva2024.github.io/calculadora-reajuste-salarial/index.html`
- **Versão Standalone**: `https://smsilva2024.github.io/calculadora-reajuste-salarial/calculadora-offline.html`

## 📱 Compartilhamento

### WhatsApp
```
🧮 Calculadora de Reajuste Salarial
📊 IPCA, IGP-M, INPC, SELIC atualizados
📱 Funciona em qualquer celular
🌐 https://smsilva2024.github.io/calculadora-reajuste-salarial/
```

### QR Code
Gere um QR Code da URL para facilitar o acesso mobile:
- Use: https://qr-code-generator.com/
- Cole sua URL do GitHub Pages
- Baixe e compartilhe o QR Code

## 🛠️ Manutenção

### Atualizar Índices
1. Edite o arquivo `index.html` ou `calculadora-offline.html`
2. Modifique os valores em `INDICES_OFFLINE`
3. Faça commit e push
4. O GitHub Pages atualizará automaticamente

### Adicionar Funcionalidades
1. Faça as modificações nos arquivos
2. Teste localmente
3. Commit e push
4. Deploy automático

## 🔧 Troubleshooting

### Problema: Página não carrega
- **Solução**: Verifique se o GitHub Pages está ativado em Settings → Pages
- **Aguarde**: O primeiro deploy pode demorar até 10 minutos

### Problema: CSS/JS não carrega
- **Solução**: Use URLs relativas (sem barra inicial)
- **Exemplo**: `href="styles.css"` em vez de `href="/styles.css"`

### Problema: 404 Error
- **Solução**: Certifique-se que o arquivo `index.html` existe na raiz
- **Alternativa**: Renomeie `calculadora-offline.html` para `index.html`

## 📊 Monitoramento

### Analytics (Opcional)
Para acompanhar o uso da calculadora:

1. Crie conta no Google Analytics
2. Adicione o código de tracking no `<head>` do HTML
3. Monitore acessos, dispositivos e localização dos usuários

### Exemplo de código do Google Analytics:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Domínio Personalizado (Opcional)

Para usar um domínio próprio (ex: calculadora.seusite.com.br):

1. Compre um domínio
2. Configure DNS apontando para GitHub Pages
3. Em Settings → Pages → Custom domain
4. Digite seu domínio e salve
5. Aguarde a verificação

---

**✅ Após seguir estes passos, sua calculadora estará online e acessível de qualquer lugar do mundo!**
