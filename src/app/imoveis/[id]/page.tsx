import { Card, CardContent } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Badge } from "../../../components/ui/badge"
import { itacema366Data } from "../../../data/imoveis"
import Image from "next/image"
import { MapPin, Phone, MessageCircle } from "lucide-react"

export default function PropertyDetailPage() {
  const property = itacema366Data

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-2">
            {property.code}
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{property.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{property.tagline}</p>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{property.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="relative h-96 mb-6 rounded-lg overflow-hidden">
              <Image src={property.images[0] || "/placeholder.svg"} alt={property.name} fill className="object-cover" />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">MBRAS</div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {property.images.slice(1, 5).map((image, index) => (
                <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${property.name} - ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Property Info */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Informações do imóvel</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-2">Descrição</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{property.about.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Características</h3>
                    <div className="space-y-3">
                      {property.characteristics.map((char, index) => (
                        <div key={index} className="flex items-center">
                          <char.icon className="h-5 w-5 mr-3 text-gray-500" />
                          <span className="text-sm">
                            <span className="font-medium">{char.label}:</span> {char.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Differentials */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Diferenciais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.neighborhoodDifferentials.map((diff, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`p-3 rounded-lg ${diff.iconBackground} mr-4`}>
                        <diff.icon className={`h-6 w-6 ${diff.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{diff.title}</h3>
                        <p className="text-sm text-gray-600">{diff.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-1">Detalhes</div>
                  <div className="font-semibold">{property.summary.details}</div>
                  <div className="text-sm text-gray-600">{property.summary.parking}</div>
                </div>

                <div className="space-y-3 mb-6">
                  <Button className="w-full" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar Agora
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Proximidades</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {property.walkDistanceStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
