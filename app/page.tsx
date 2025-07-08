import { PlanSelector } from "@/components/plan-selector"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Dumbbell, Zap } from "lucide-react"

export default function TrainingsplanLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">FitAI Pro</h1>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="hover:text-purple-400">
            Features
          </a>
          <a href="#plans" className="hover:text-purple-400">
            Pläne
          </a>
          <a href="#contact" className="hover:text-purple-400">
            Kontakt
          </a>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
          >
            Login
          </Button>
        </nav>
        <Button className="md:hidden" variant="ghost">
          Menu
        </Button>
      </header>

      {/* Hero Section */}
      <main>
        <section className="text-center py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
          <h2 className="text-5xl font-extrabold mb-4">Dein wissenschaftlich perfekter Trainingsplan.</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            KI-Präzision trifft auf menschliche Expertise. Erreiche deine Fitnessziele schneller als je zuvor.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Starte deine Transformation
          </Button>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4">Warum FitAI Pro?</h3>
              <p className="text-lg text-gray-400">Das Beste aus beiden Welten für maximale Ergebnisse.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <Zap className="h-8 w-8 text-purple-400 mb-4" />
                  <CardTitle className="text-white">KI-Präzision</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Unsere KI analysiert tausende Datenpunkte und wissenschaftliche Studien, um deinen Plan mathematisch
                  zu optimieren.
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <Dumbbell className="h-8 w-8 text-pink-400 mb-4" />
                  <CardTitle className="text-white">Menschliche Expertise</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Jeder Plan wird von einem erfahrenen Personal Trainer überprüft, verfeinert und an deine individuellen
                  Bedürfnisse angepasst.
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-green-400 mb-4" />
                  <CardTitle className="text-white">Garantierte Ergebnisse</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Durch die Kombination von Technologie und Erfahrung garantieren wir dir einen Plan, der wirklich
                  funktioniert.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Plan Selector Section */}
        <section id="plans" className="bg-gray-900">
          <PlanSelector />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Noch Fragen?</h3>
              <p className="text-lg text-gray-400">Wir sind für dich da. Schreib uns eine Nachricht!</p>
            </div>
            <Card className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-8">
                {/* Hier könnte ein Kontaktformular stehen */}
                <p className="text-center text-gray-300">
                  Kontaktformular wird hier bald hinzugefügt.
                  <br />
                  Bis dahin erreichst du uns unter{" "}
                  <a href="mailto:support@fitai-pro.de" className="text-purple-400 hover:underline">
                    support@fitai-pro.de
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} FitAI Pro. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-white">
              Impressum
            </a>
            <a href="#" className="hover:text-white">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
