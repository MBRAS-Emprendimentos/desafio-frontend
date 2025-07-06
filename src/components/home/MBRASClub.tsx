import { Card, CardContent } from "../ui/card"
import { CheckCircle } from "lucide-react"

export default function MBRASClub() {
  const benefits = [
    "Marketing digital premium e segmentado",
    "Captação exclusiva para imóveis de alto padrão",
    "Aceleração de vendas com segurança e eficiência",
    "Suporte jurídico completo e personalizado",
    "Profissionais altamente qualificados",
    "Campanhas visuais inovadoras e estratégicas",
  ]

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">MBRAS CLUB</h2>
            <p className="text-xl text-gray-300 mb-8">
              Um programa exclusivo para proprietários que buscam o melhor do mercado imobiliário. No MBRAS Club, você
              transforma a venda do seu imóvel de alto padrão através dos serviços da nossa equipe e conta com
              estratégias de marketing digital, consultoria especializada e um suporte jurídico completo.
            </p>
            <p className="text-lg text-gray-300">
              Não aceleramos suas transações com segurança, discrição e a sofisticação necessária.
            </p>
          </div>

          <Card className="bg-white text-gray-900">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Benefícios Exclusivos</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
