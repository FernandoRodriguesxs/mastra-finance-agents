/**
 * Arquivo de teste para verificar se o setup do Mastra está funcionando
 * 
 * Este arquivo pode ser executado com: npx tsx mastra/test-setup.ts
 * ou removido após confirmar que tudo está funcionando.
 */

import { mastra } from './index'

// Teste simples: verificar se a instância do Mastra foi criada
console.log('✅ Mastra configurado com sucesso!')
console.log('📦 Instância do Mastra:', mastra)
console.log('🎯 Pronto para adicionar agentes e workflows!')
