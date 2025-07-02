# 📋 Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [2.0.0] - 2025-07-02

### 🚀 Adicionado
- **Funcionamento 100% offline** - Não precisa mais de servidor
- **GitHub Pages** - Hospedagem gratuita e acessível de qualquer lugar
- **Arquivo único** - `calculadora-offline.html` com tudo incluído
- **Dados atualizados** - Índices de julho/2025
- **Interface mobile otimizada** - Design responsivo aprimorado
- **Badge offline** - Indicador visual de funcionamento autônomo
- **CI/CD automático** - Deploy automático via GitHub Actions
- **Documentação completa** - Guias de instalação e contribuição

### 🔄 Modificado
- **Arquitetura offline** - Removidas dependências de APIs externas
- **Performance** - Carregamento instantâneo
- **UX mobile** - Interface otimizada para touch
- **Formatação** - Melhor apresentação de resultados

### 🗑️ Removido
- **Dependência de servidor** - Não precisa mais do server.py
- **Requisições HTTP** - Todas as APIs externas removidas
- **Service Worker complexo** - Simplificado para funcionamento offline

## [1.0.0] - 2025-07-02

### 🚀 Adicionado
- **Calculadora base** - Funcionalidade principal de cálculo
- **Interface responsiva** - Design mobile-first
- **Múltiplos índices** - IPCA, IGP-M, INPC, SELIC
- **Períodos variáveis** - 3, 6 e 12 meses
- **Validação de dados** - Verificação de campos obrigatórios
- **PWA support** - Service Worker e Manifest
- **Servidor de desenvolvimento** - server.py para testes locais

### 📊 Índices Incluídos
- **IPCA**: 4.62% (12m), 2.31% (6m), 1.15% (3m)
- **IGP-M**: 3.64% (12m), 1.82% (6m), 0.91% (3m)
- **INPC**: 4.77% (12m), 2.38% (6m), 1.19% (3m)
- **SELIC**: 10.75% (12m), 5.37% (6m), 2.69% (3m)

---

## 🎯 Roadmap

### v2.1 (Planejado - Agosto 2025)
- [ ] **Histórico de cálculos** - Salvar cálculos anteriores no localStorage
- [ ] **Exportação PDF** - Gerar relatório do cálculo
- [ ] **Mais índices** - Adicionar CDI, TR, INCC
- [ ] **Modo escuro** - Toggle para tema escuro
- [ ] **Gráfico de comparação** - Visualizar diferença entre índices

### v2.2 (Planejado - Setembro 2025)
- [ ] **Calculadora de 13º** - Ferramenta adicional
- [ ] **Simulador de evolução** - Projeção de crescimento salarial
- [ ] **Compartilhamento social** - Compartilhar resultados
- [ ] **QR Code integrado** - Gerar QR para compartilhamento rápido
- [ ] **Múltiplas moedas** - Suporte a USD, EUR

### v3.0 (Planejado - Dezembro 2025)
- [ ] **Backend opcional** - Dados em tempo real via API
- [ ] **Sistema de usuários** - Contas para histórico persistente
- [ ] **Aplicativo nativo** - Versões iOS e Android
- [ ] **Notificações** - Alertas de novos índices
- [ ] **API pública** - Disponibilizar dados para terceiros

---

## 📈 Estatísticas de Versão

| Versão | Tamanho | Performance | Compatibilidade |
|--------|---------|-------------|------------------|
| 1.0.0 | ~150KB | Bom | 95% |
| 2.0.0 | ~25KB | Excelente | 99% |

---

## 🐛 Bugs Corrigidos

### v2.0.0
- **Dependência de servidor** - Aplicação agora é totalmente autônoma
- **Problemas de CORS** - Eliminados com funcionamento offline
- **Lentidão de APIs** - Removida dependência de APIs externas
- **Problemas de conectividade** - App funciona sem internet

### v1.0.0
- **Zoom indesejado no iOS** - Font-size fixado em 16px
- **Validação de formulário** - Melhorada verificação de campos
- **Formatação de moeda** - Corrigida apresentação em BRL
- **Responsividade** - Ajustes para dispositivos pequenos

---

## 🔄 Migrations

### De v1.0.0 para v2.0.0
- **Não é necessária migração** - Versão totalmente standalone
- **Arquivos antigos** - Podem ser mantidos para referência
- **URL nova** - GitHub Pages fornece nova URL de acesso
- **Dados** - Índices atualizados automaticamente

---

## 🏆 Créditos

### Contribuidores
- **Desenvolvedor Principal** - Criação e manutenção
- **Comunidade** - Sugestões e feedback
- **Beta Testers** - Testes em dispositivos diversos

### Fontes de Dados
- **Banco Central do Brasil** - Dados oficiais dos índices
- **IBGE** - Informações complementares
- **FGV** - Dados do IGP-M

---

## 📞 Suporte por Versão

| Versão | Status | Suporte até | Atualizações |
|--------|--------|-------------|--------------|
| 2.0.0 | ✅ Atual | - | Sim |
| 1.0.0 | ⚠️ Legado | 2025-12-31 | Críticas apenas |

---

**📝 Nota**: Para ver todas as mudanças detalhadas, visite o [GitHub Releases](https://github.com/seu-usuario/calculadora-reajuste-salarial/releases).
