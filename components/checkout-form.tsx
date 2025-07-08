"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Loader2, CreditCard, Shield, CheckCircle } from "lucide-react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"

interface CheckoutFormProps {
  planType: "basic" | "premium" | "elite"
  onClose: () => void
}

const planDetails = {
  basic: {
    name: "KI-Basic Plan",
    price: 39,
    features: ["Vollautomatischer KI-Plan", "Wissenschaftlich optimiert", "Email-Support"],
  },
  premium: {
    name: "Hybrid-Premium Plan",
    price: 89,
    features: ["Alles aus Basic", "Persönliche Optimierung", "Wöchentliche Check-ins", "Video-Feedback"],
  },
  elite: {
    name: "Elite-Coaching Plan",
    price: 149,
    features: ["Alles aus Premium", "Bi-wöchentliche Calls", "Ernährungsberatung", "24/7 Support"],
  },
}

export function CheckoutForm({ planType, onClose }: CheckoutFormProps) {
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [error, setError] = useState("")

  const plan = planDetails[planType]

  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements || !customerData.name || !customerData.email) {
      setError("Stripe ist noch nicht geladen oder es fehlen Kundendaten.")
      return
    }

    setIsProcessing(true)
    setError("")

    // 1. Erstelle einen Payment Intent auf unserem Server
    const res = await fetch("/api/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planType, customerData }),
    })

    const { clientSecret, error: backendError } = await res.json()

    if (backendError) {
      setError(backendError)
      setIsProcessing(false)
      return
    }

    // 2. Bestätige die Zahlung auf dem Client mit dem Secret
    const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
        receipt_email: customerData.email,
      },
      redirect: "if_required",
    })

    if (stripeError) {
      setError(stripeError.message || "Ein unerwarteter Fehler ist aufgetreten.")
      setIsProcessing(false)
      return
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log("Zahlung erfolgreich!", paymentIntent)
      setPaymentSuccess(true)
    } else {
      setError("Zahlung fehlgeschlagen.")
    }

    setIsProcessing(false)
  }

  if (paymentSuccess) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="text-center p-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-600 mb-2">Demo Zahlung erfolgreich! 🎉</h3>
          <p className="text-gray-600 mb-6">
            Danke für deinen Test-Kauf! In der echten Version erhältst du deinen personalisierten Trainingsplan
            innerhalb der nächsten 2 Stunden per Email.
          </p>
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-green-800 mb-2">Was passiert als nächstes?</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>✅ KI erstellt deinen Basisplan</li>
              <li>✅ Trainer optimiert den Plan</li>
              <li>✅ Du erhältst eine persönliche Einführung</li>
              <li>✅ Support-Team meldet sich bei dir</li>
            </ul>
          </div>
          <Button onClick={onClose} className="w-full">
            Zurück zur Startseite
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Plan Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {plan.name}
              <Badge variant="secondary">{plan.price}€</Badge>
            </CardTitle>
            <CardDescription>Deine Bestellung im Überblick</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Gesamt:</span>
                <span>{plan.price}€</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Einmalige Zahlung, keine Abonnement</p>
            </div>
          </CardContent>
        </Card>

        {/* Payment Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Demo Checkout
            </CardTitle>
            <CardDescription>Teste den Checkout-Prozess (Demo-Modus)</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Vollständiger Name</Label>
                <Input
                  id="name"
                  value={customerData.name}
                  onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                  placeholder="Max Mustermann"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email-Adresse</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerData.email}
                  onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                  placeholder="max@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Telefonnummer (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={customerData.phone}
                  onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                  placeholder="+49 123 456789"
                />
              </div>

              <div className="py-4">
                <PaymentElement />
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="h-4 w-4" />
                <span>Deine Daten sind SSL-verschlüsselt und sicher</span>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                disabled={isProcessing || !stripe || !elements}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Zahlung wird verarbeitet...
                  </>
                ) : (
                  <>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Jetzt sicher {plan.price}€ bezahlen
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Mit dem Kauf stimmst du unseren{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  AGB
                </a>{" "}
                zu.
              </p>
              <p className="text-xs text-gray-500 mt-1">30 Tage Geld-zurück-Garantie bei Unzufriedenheit</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}