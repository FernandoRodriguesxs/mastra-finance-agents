/**
 * Arquivo de teste para verificar se o agente GastoGuru foi registrado corretamente
 * 
 * Execute com: npx tsx mastra/test-agent.ts
 */

import { mastra } from './index'

async function testAgent() {
  console.log('🧪 Testando registro do agente GastoGuru...\n')

  // Teste: verificar se o agente foi registrado
  try {
    const agent = mastra.getAgent('gasto-guru')

    if (agent) {
      console.log('✅ Agente GastoGuru registrado com sucesso!')
      console.log('📝 Nome:', agent.name)
      
      // Usando getInstructions() que é a forma recomendada
      const instructions = await agent.getInstructions()
      // instructions é um SystemMessage (objeto com role e content)
      const instructionsText = Array.isArray(instructions.content) 
        ? instructions.content.map((c: any) => c.text || c).join(' ')
        : instructions.content || 'Instruções configuradas'
      console.log('🎯 Instruções (primeiros 150 chars):', instructionsText.substring(0, 150) + '...')
      console.log('\n🎉 Tudo funcionando! Pronto para a próxima etapa.')
    } else {
      console.log('❌ Erro: Agente não encontrado!')
      console.log('💡 Verifique se o agente foi registrado em mastra/index.ts')
    }
  } catch (error) {
    console.error('❌ Erro ao acessar o agente:', error)
    console.log('\n💡 Possíveis causas:')
    console.log('   - Agente não foi registrado no Mastra')
    console.log('   - Nome do agente está incorreto')
    console.log('   - Erro na importação do agente')
  }
}

// Executa o teste
testAgent().catch(console.error)
