# 🧠 Mastra Finance Agents

Planejador Financeiro Pessoal Inteligente usando o framework **Mastra** com arquitetura multi-agente.

## 📋 Sobre o Projeto

Este projeto é um **planejador financeiro pessoal** construído com **Next.js** e **Mastra**, utilizando uma arquitetura de **multi-agentes de IA** para análise financeira inteligente.

### 🎯 Objetivo

Aprender o framework Mastra enquanto construímos um produto real, explorando:
- **Agents**: Agentes especializados em tarefas específicas
- **Workflows**: Orquestração de fluxos de trabalho
- **Comunicação entre agentes**: Troca de contexto e colaboração
- **Boas práticas**: Estrutura e organização de código

## 🏗️ Arquitetura

### Agentes Planejados

1. **GastoGuru 💸** - Analisa gastos e identifica padrões
2. **BudgetWizard 🧙‍♂️** - Cria orçamentos personalizados
3. **RiscoRex 🦖** - Avalia riscos financeiros
4. **SalárioSábio 📈** - Avalia renda e metas
5. **ConselheiroCósmico 🌌** - Consolida recomendações
6. **MaestroFinanceiro 🎼** - Orquestrador dos agentes

### Status Atual

- ✅ **ETAPA 1**: Setup inicial do Mastra
- ✅ **ETAPA 2**: Primeiro agente (GastoGuru) criado e registrado
- 🚧 **ETAPA 3**: Workflows (próxima etapa)
- 📋 **ETAPA 4**: Outros agentes
- 📋 **ETAPA 5**: Comunicação entre agentes

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 16 (App Router)
- **IA Framework**: Mastra (@mastra/core)
- **Linguagem**: TypeScript
- **UI**: shadcn/ui + Tailwind CSS
- **Gerenciador de Pacotes**: pnpm

## 📁 Estrutura do Projeto

```
├── app/                    # Páginas Next.js
├── components/             # Componentes React
│   ├── ui/                # Componentes shadcn/ui
│   ├── agent-status.tsx   # Status dos agentes
│   ├── financial-report.tsx
│   └── next-steps.tsx
├── mastra/                 # Configuração do Mastra
│   ├── agents/           # Agentes de IA
│   │   └── gasto-guru.ts # ✅ Primeiro agente
│   ├── workflows/        # Workflows (próxima etapa)
│   ├── tools/            # Ferramentas dos agentes
│   ├── index.ts          # Configuração central
│   └── test-agent.ts     # Testes
└── public/                # Assets estáticos
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js >= 20
- pnpm instalado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/FernandoRodriguesxs/mastra-finance-agents.git

# Entre no diretório
cd mastra-finance-agents

# Instale as dependências
pnpm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Testar Agentes

```bash
# Testar setup do Mastra
npx tsx mastra/test-setup.ts

# Testar agente GastoGuru
npx tsx mastra/test-agent.ts
```

## 📚 Aprendizado

Este projeto segue uma abordagem **didática e progressiva**:

1. **Setup inicial** - Configuração do ambiente
2. **Primeiro agente** - Entendendo a estrutura básica
3. **Workflows** - Orquestração de tarefas
4. **Multi-agentes** - Comunicação e colaboração
5. **Integração** - Conectando com o frontend

## 📝 Commits Organizados

Os commits foram organizados por responsabilidade:

- `chore`: Configuração e dependências
- `feat`: Novas funcionalidades
- `feat(mastra)`: Funcionalidades do Mastra
- `test`: Arquivos de teste

## 🔗 Links Úteis

- [Documentação Mastra](https://mastra.ai)
- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)

## 📄 Licença

Este projeto é para fins educacionais e de aprendizado.

---

**Desenvolvido com ❤️ para aprender Mastra**
