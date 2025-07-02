# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com a Calculadora de Reajuste Salarial! 

## 📋 Como Contribuir

### 1. Reportar Bugs
- Use a aba **Issues** do GitHub
- Descreva o problema detalhadamente
- Inclua screenshots se necessário
- Mencione dispositivo e navegador usado

### 2. Sugerir Melhorias
- Abra uma **Issue** com a tag `enhancement`
- Explique sua ideia claramente
- Justifique por que seria útil

### 3. Contribuir com Código

#### Preparação
```bash
# 1. Faça um fork do repositório
# 2. Clone seu fork
git clone https://github.com/SEU-USUARIO/calculadora-reajuste-salarial.git

# 3. Crie uma branch para sua feature
git checkout -b feature/nova-funcionalidade

# 4. Configure o upstream
git remote add upstream https://github.com/USUARIO-ORIGINAL/calculadora-reajuste-salarial.git
```

#### Desenvolvimento
```bash
# 1. Faça suas alterações
# 2. Teste localmente
python -m http.server 8000
# ou abra index.html diretamente

# 3. Commit suas mudanças
git add .
git commit -m "feat: adiciona nova funcionalidade"

# 4. Push para seu fork
git push origin feature/nova-funcionalidade

# 5. Abra um Pull Request
```

## 📝 Padrões de Código

### HTML
- Use HTML5 semântico
- Mantenha acessibilidade (ARIA labels)
- Teste em diferentes navegadores

### CSS
- Use CSS moderno (Grid, Flexbox)
- Mantenha responsividade mobile-first
- Siga convenções de nomenclatura

### JavaScript
- Use ES6+ features
- Mantenha compatibilidade com navegadores antigos
- Documente funções complexas

## 🧪 Testes

### Teste Localmente
```bash
# Servidor local
python -m http.server 8000
# ou
npx http-server

# Teste em diferentes dispositivos
# Use DevTools para simular mobile
```

### Checklist de Testes
- [ ] Funciona em Chrome, Firefox, Safari
- [ ] Responsivo em diferentes tamanhos de tela
- [ ] Todos os cálculos estão corretos
- [ ] Validação de formulário funciona
- [ ] Sem erros no console
- [ ] Funciona offline

## 📊 Áreas que Precisam de Ajuda

### 🔥 Prioridade Alta
- [ ] Testes automatizados
- [ ] Mais índices econômicos
- [ ] Histórico de cálculos
- [ ] Exportação de resultados

### 🔥 Prioridade Média
- [ ] Modo escuro
- [ ] Gráficos de evolução
- [ ] Calculadora de 13º salário
- [ ] Internacionalização (i18n)

### 🔥 Prioridade Baixa
- [ ] Animações avançadas
- [ ] Temas personalizáveis
- [ ] Integração com redes sociais
- [ ] Notificações push

## 🎯 Tipos de Contribuição

### 📝 Documentação
- Melhorar README
- Criar tutoriais
- Traduzir para outros idiomas
- Adicionar exemplos de uso

### 🐛 Correção de Bugs
- Corrigir cálculos incorretos
- Resolver problemas de compatibilidade
- Melhorar validação de dados
- Otimizar performance

### ✨ Novas Funcionalidades
- Adicionar novos índices
- Implementar histórico
- Criar modos de visualização
- Adicionar exportação

### 🎨 Design/UX
- Melhorar interface
- Otimizar para acessibilidade
- Criar animações suaves
- Revisar fluxo do usuário

## 📏 Padrões de Commit

Use o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona nova funcionalidade
fix: corrige bug específico
docs: atualiza documentação
style: mudanças de formatação
refactor: refatoração de código
test: adiciona ou modifica testes
chore: mudanças de build/configuração
```

### Exemplos:
```
feat: adiciona cálculo de 13º salário
fix: corrige formatação de moeda
docs: atualiza guia de instalação
style: melhora responsividade mobile
refactor: otimiza função de cálculo
test: adiciona testes para validação
chore: atualiza dependências
```

## 🏆 Reconhecimento

Todos os contribuidores são reconhecidos:

- Nome adicionado no README
- Menção em releases
- Badge de contribuidor
- Agradecimento público

## 📞 Comunicação

### Canais Oficiais
- **Issues**: Para bugs e sugestões
- **Discussions**: Para perguntas gerais
- **Pull Requests**: Para contribuições de código
- **Email**: para questões privadas

### Diretrizes de Comunicação
- Seja respeitoso e construtivo
- Use linguagem clara e objetiva
- Forneça contexto suficiente
- Seja paciente com as respostas

## 🚀 Processo de Review

### Para Maintainers
1. Verificar se segue os padrões
2. Testar funcionalidade
3. Revisar código
4. Solicitar mudanças se necessário
5. Aprovar e fazer merge

### Para Contribuidores
1. Esperar review (normalmente 1-3 dias)
2. Implementar mudanças solicitadas
3. Responder comentários
4. Aguardar aprovação final

## 📅 Roadmap

### v2.1 (Próxima Release)
- Histórico de cálculos
- Exportação em PDF
- Mais índices econômicos

### v2.2 (Futuro)
- Gráficos interativos
- Modo escuro
- Suporte a múltiplas moedas

### v3.0 (Longo Prazo)
- Aplicativo mobile nativo
- Backend para dados em tempo real
- Sistema de usuários

## 🙏 Agradecimentos

Obrigado por contribuir! Sua ajuda torna este projeto melhor para todos.

---

**Dúvidas?** Abra uma issue ou entre em contato!

**Primeira contribuição?** Procure issues marcadas com `good first issue`!
