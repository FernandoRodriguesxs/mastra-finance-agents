/**
 * ETAPA 1 - Setup Inicial do Mastra
 * 
 * Este é o arquivo central de configuração do Mastra.
 * Aqui criamos a instância principal que gerencia todos os agentes,
 * workflows e ferramentas do nosso sistema.
 * 
 * Por enquanto, está vazio porque ainda não criamos nenhum agente.
 * Nas próximas etapas, vamos adicionar os agentes aqui.
 */

import { Mastra } from '@mastra/core'

// Importamos os agentes que criamos
import { gastoGuru } from './agents/gasto-guru'

/**
 * Instância principal do Mastra
 * 
 * O Mastra é o "cérebro" do nosso sistema multi-agente.
 * Ele gerencia:
 * - Agentes: cada agente é especializado em uma tarefa específica
 * - Workflows: sequências de passos que orquestram os agentes
 * - Storage: persistência de dados (memória dos agentes, histórico, etc)
 * - Logger: sistema de logs para debug e monitoramento
 * 
 * IMPORTANTE: Para registrar um agente, você precisa:
 * 1. Importá-lo (linha acima)
 * 2. Adicioná-lo ao objeto `agents` abaixo
 */
export const mastra = new Mastra({
  // Registramos os agentes aqui
  // A chave do objeto é o nome que você usará para acessar o agente
  agents: {
    'gasto-guru': gastoGuru, // Agente GastoGuru registrado!
  },
  // Workflows serão adicionados nas próximas etapas:
  // - workflows: { ... }
  // - storage: ... (opcional, para persistência)
  // - logger: ... (opcional, para logs)
})

// Exportamos a instância para uso em outras partes do projeto
export default mastra
