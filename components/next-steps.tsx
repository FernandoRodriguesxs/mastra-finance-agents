import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function NextSteps() {
  const steps = [
    {
      icon: "📉",
      title: "Reduzir gastos em lazer",
      description: "Diminua em 15% os gastos com entretenimento nos próximos 3 meses",
    },
    {
      icon: "🛡️",
      title: "Criar reserva de emergência",
      description: "Junte R$ 500 por mês até completar 6 meses de despesas essenciais",
    },
    {
      icon: "🎯",
      title: "Ajustar meta mensal",
      description: "Revise seu objetivo trimestralmente para acompanhar o progresso",
    },
  ]

  return (
    <Card className="border-2 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
          <span>🚀</span>
          <span>Próximos passos</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-5 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-3">{step.icon}</div>
              <h4 className="font-semibold text-foreground mb-2 text-balance">{step.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
