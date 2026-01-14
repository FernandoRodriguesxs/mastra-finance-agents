import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface FinancialReportProps {
  income: string
  expenses: string
  goal: string
}

export function FinancialReport({ income, expenses, goal }: FinancialReportProps) {
  const incomeValue = Number.parseFloat(income) || 0
  const suggestedBudget = {
    essencial: Math.round(incomeValue * 0.5),
    economias: Math.round(incomeValue * 0.2),
    lazer: Math.round(incomeValue * 0.3),
  }

  return (
    <Card className="border-2 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
          <span>📊</span>
          <span>Seu diagnóstico financeiro</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* General Summary */}
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="font-semibold text-lg mb-2 text-foreground">Resumo geral</h3>
          <p className="text-muted-foreground leading-relaxed">
            Com base na sua renda de <strong className="text-foreground">R$ {income}</strong>, identificamos
            oportunidades para otimizar seu orçamento e alcançar seu objetivo: {goal}. Nossos agentes analisaram seus
            gastos e prepararam um plano personalizado para você.
          </p>
        </div>

        {/* Suggested Budget */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-foreground flex items-center gap-2">
            <span>💰</span>
            <span>Orçamento sugerido</span>
          </h3>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/30">
              <p className="text-sm text-muted-foreground mb-1">Despesas essenciais</p>
              <p className="text-2xl font-bold text-secondary">R$ {suggestedBudget.essencial}</p>
              <p className="text-xs text-muted-foreground mt-1">50% da renda</p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
              <p className="text-sm text-muted-foreground mb-1">Economias e investimentos</p>
              <p className="text-2xl font-bold text-primary">R$ {suggestedBudget.economias}</p>
              <p className="text-xs text-muted-foreground mt-1">20% da renda</p>
            </div>
            <div className="p-4 bg-accent/10 rounded-lg border border-accent/30">
              <p className="text-sm text-muted-foreground mb-1">Lazer e lifestyle</p>
              <p className="text-2xl font-bold text-accent">R$ {suggestedBudget.lazer}</p>
              <p className="text-xs text-muted-foreground mt-1">30% da renda</p>
            </div>
          </div>
        </div>

        {/* Risk Alerts */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-foreground flex items-center gap-2">
            <span>⚠️</span>
            <span>Alertas de risco</span>
          </h3>
          <div className="space-y-2">
            <Alert className="bg-warning/10 border-warning/30">
              <AlertDescription className="text-warning-foreground">
                <strong>Atenção:</strong> Seus gastos com lazer podem estar acima do recomendado. Considere reduzir em
                15% para acelerar suas economias.
              </AlertDescription>
            </Alert>
            <Alert className="bg-destructive/10 border-destructive/30">
              <AlertDescription className="text-destructive-foreground">
                <strong>Crítico:</strong> Não identificamos uma reserva de emergência. Recomendamos priorizar a criação
                de um fundo equivalente a 6 meses de despesas.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Practical Recommendations */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-foreground flex items-center gap-2">
            <span>✨</span>
            <span>Recomendações práticas</span>
          </h3>
          <ul className="space-y-2">
            {[
              "Automatize 20% da sua renda para uma conta de investimentos assim que receber",
              "Renegocie contratos fixos (internet, celular, seguros) para reduzir custos em até 10%",
              "Use apps de cashback para compras do dia a dia e acumule economia extra",
              "Estabeleça um limite semanal de gastos variáveis para melhor controle",
              "Revise gastos por assinatura e cancele serviços não utilizados",
            ].map((rec, index) => (
              <li key={index} className="flex gap-3 p-3 bg-muted/30 rounded-lg">
                <span className="text-primary font-bold flex-shrink-0">{index + 1}.</span>
                <span className="text-foreground leading-relaxed">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
