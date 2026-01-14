"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FinancialReport } from "@/components/financial-report"
import { AgentStatus } from "@/components/agent-status"
import { NextSteps } from "@/components/next-steps"

export default function FinanceFriendsPage() {
  const [income, setIncome] = useState("")
  const [expenses, setExpenses] = useState("")
  const [goal, setGoal] = useState("")
  const [analyzing, setAnalyzing] = useState(false)
  const [showReport, setShowReport] = useState(false)

  const handleAnalyze = () => {
    if (!income || !expenses || !goal) {
      alert("Por favor, preencha todos os campos")
      return
    }

    setAnalyzing(true)
    setShowReport(false)

    // Simulate analysis delay
    setTimeout(() => {
      setAnalyzing(false)
      setShowReport(true)
    }, 5000)
  }

  const handleReset = () => {
    setIncome("")
    setExpenses("")
    setGoal("")
    setAnalyzing(false)
    setShowReport(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
              <span className="text-xl text-primary-foreground font-bold">F</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">FinIA</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Section 1 - Input Form */}
          {!analyzing && !showReport && (
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Seus dados financeiros</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="income">Renda mensal (R$)</Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="5000"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expenses">Gastos mensais</Label>
                  <Textarea
                    id="expenses"
                    placeholder="Moradia: R$ 1.500&#10;Alimentação: R$ 800&#10;Transporte: R$ 400"
                    value={expenses}
                    onChange={(e) => setExpenses(e.target.value)}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goal">Objetivo financeiro</Label>
                  <Input
                    id="goal"
                    type="text"
                    placeholder="Criar reserva de emergência"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="h-11"
                  />
                </div>

                <Button size="lg" className="w-full h-12 bg-primary hover:bg-primary/90" onClick={handleAnalyze}>
                  Analisar
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Section 2 - Agent Status */}
          {analyzing && <AgentStatus />}

          {/* Section 3 - Financial Report */}
          {showReport && (
            <div className="space-y-6">
              <FinancialReport income={income} expenses={expenses} goal={goal} />
              <NextSteps />
              <Button size="lg" variant="outline" className="w-full bg-transparent" onClick={handleReset}>
                Nova análise
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
