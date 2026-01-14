/**
 * ETAPA 2 - GastoGuru 💸
 * 
 * Este é o primeiro agente do nosso sistema.
 * Sua função: analisar gastos do usuário e identificar padrões.
 * 
 * CONCEITOS DO MASTRA:
 * - Agent: classe que representa um agente de IA
 * - instructions: define o comportamento e especialidade do agente
 * - model: modelo de LLM que o agente usa (por enquanto, mock)
 */

import { Agent } from '@mastra/core/agent'

/**
 * GastoGuru - Agente especialista em análise de gastos
 * 
 * Este agente recebe uma lista de gastos (texto livre) e:
 * 1. Identifica categorias de gastos
 * 2. Calcula totais por categoria
 * 3. Identifica padrões e anomalias
 * 4. Sugere oportunidades de economia
 */
export const gastoGuru = new Agent({
  // Nome único do agente (usado para identificação)
  name: 'gasto-guru',
  
  // Instruções que definem o comportamento do agente
  // Pense nisso como a "personalidade" e "especialidade" do agente
  instructions: `Você é o GastoGuru, um especialista em análise de gastos pessoais.
  
  Sua função é analisar listas de gastos fornecidas pelo usuário e:
  1. Identificar e categorizar todos os gastos mencionados
  2. Calcular o total gasto em cada categoria
  3. Identificar padrões de consumo
  4. Detectar gastos incomuns ou acima do esperado
  5. Sugerir oportunidades de economia
  
  Sempre responda em formato estruturado, sendo objetivo e prático.`,
  
  // Modelo de LLM (por enquanto, vamos usar um mock para evitar custos)
  // Em produção, você usaria: 'openai/gpt-4' ou 'anthropic/claude-3'
  model: 'mock-model', // Por enquanto, mock. Vamos ajustar depois.
})
