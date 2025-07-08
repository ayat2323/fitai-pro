"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X } from "lucide-react"
import { CheckoutForm } from "./checkout-form"

export function PlanSelector() {
  const [selectedPlan, setSelectedPlan] = useState<"basic" | "premium" | "elite" | null>(null)
  const [showCheckout, setShowCheckout] = useState(false)

  const handlePlanSelect = (planType: "basic" | "premium" | "elite") => {
    setSelectedPlan(planType)
    setShowCheckout(true)
  }

  const handleClose = () => {
    setShowCheckout(false)
    setSelectedPlan(null)
  }

  if (showCheckout && selectedPlan) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Checkout</h1>
            <Button variant="ghost" onClick={handleClose}>
              <X className="h-4 w-4 mr-2" />
              Zurück
            </Button>
          </div>
          <CheckoutForm planType={selectedPlan} onClose={handleClose} />
        </div>
      </div>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Wähle deinen Plan</h2>
          <p className="text-gray-300 text-lg">Für jeden das richtige Paket</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white text-2xl">KI-Basic</CardTitle>
              <div className="text-3xl font-bold text-purple-400">39€</div>
              <CardDescription className="text-gray-300">Perfekt für den Einstieg</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Vollautomatischer KI-Plan
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Wissenschaftlich optimiert
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Email-Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Grundlegende Anpassungen
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => handlePlanSelect("basic")}>
                Jetzt kaufen - 39€
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500 backdrop-blur relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              🔥 Beliebteste Wahl
            </Badge>
            <CardHeader>
              <CardTitle className="text-white text-2xl">Hybrid-Premium</CardTitle>
              <div className="text-3xl font-bold text-pink-400">89€</div>
              <CardDescription className="text-gray-300">KI + menschliche Expertise</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Alles aus KI-Basic
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Persönliche Optimierung
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Wöchentliche Check-ins
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Video-Feedback
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  WhatsApp-Support
                </li>
              </ul>
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => handlePlanSelect("premium")}
              >
                Jetzt kaufen - 89€
              </Button>
            </CardContent>
          </Card>

          {/* Elite Plan */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Elite-Coaching</CardTitle>
              <div className="text-3xl font-bold text-yellow-400">149€</div>
              <CardDescription className="text-gray-300">Maximale Betreuung</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Alles aus Premium
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Bi-wöchentliche Video-Calls
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Ernährungsberatung
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Echtzeit-Anpassungen
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  24/7 Priority Support
                </li>
              </ul>
              <Button
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold"
                onClick={() => handlePlanSelect("elite")}
              >
                Jetzt kaufen - 149€
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}