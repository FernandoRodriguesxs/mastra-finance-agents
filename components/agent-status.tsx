"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const agents = [
  {
    name: "MicoPoupador",
    task: "analisando gastos",
    icon: "/agents/mico-icon.jpg",
  },
  {
    name: "GorilaGuardião",
    task: "planejando orçamento",
    icon: "/agents/gorila-icon.jpg",
  },
  {
    name: "MacacoAuditor",
    task: "avaliando riscos",
    icon: "/agents/macaco-icon.jpg",
  },
  {
    name: "OrangotangoProventos",
    task: "avaliando renda",
    icon: "/agents/orangotango-icon.jpg",
  },
  {
    name: "MandrilMentor",
    task: "gerando recomendações",
    icon: "/agents/mandril-icon.jpg",
  },
]

export function AgentStatus() {
  const [activeAgent, setActiveAgent] = useState(0)

  useEffect(() => {
    const agentInterval = setInterval(() => {
      setActiveAgent((prev) => {
        if (prev < agents.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 1000)

    return () => {
      clearInterval(agentInterval)
    }
  }, [])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {agents.map((agent, index) => (
          <Card
            key={agent.name}
            className={`border-0 bg-card transition-all duration-300 ${
              index === activeAgent ? "ring-2 ring-primary shadow-lg scale-105" : "opacity-60"
            }`}
          >
            <CardContent className="p-6 flex flex-col items-center gap-3">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-muted shadow-md">
                <Image
                  src={agent.icon || "/placeholder.svg"}
                  alt={agent.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="text-center space-y-1">
                <p className="font-semibold text-sm text-foreground">{agent.name}</p>
                <p className="text-xs text-muted-foreground">{agent.task}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
