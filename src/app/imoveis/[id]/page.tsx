import { Card, CardContent } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import { Badge } from "../../../components/ui/badge"
import { getPropertyById, mockProperties } from "../../../data/imoveis"
import { MapPin, Phone, MessageCircle } from "lucide-react"
import PropertyGallery from "../../../components/property/PropertyGallery"
import { notFound } from "next/navigation"

interface PropertyDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { id } = await params
  const property = getPropertyById(id)

  // Buscar dados do preço no mockProperties
  const propertyWithPrice = mockProperties.find((p) => p.id === id)

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-2">
            {property.code}
          </Badge>
          <h1 className="text-4xl font-bold text-foreground mb-2">{property.name}</h1>
          <p className="text-xl text-muted-foreground mb-4">{property.tagline}</p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Gallery */}
            <PropertyGallery images={property.images} propertyName={property.name} />

            {/* Property Info */}
            <Card className="mb-8 mt-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Informações do imóvel</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-2">Descrição</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{property.about.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Características</h3>
                    <div className="space-y-3">
                      {property.characteristics.map((char, index) => (
                        <div key={index} className="flex items-center">
                          <char.icon className="h-5 w-5 mr-3 text-muted-foreground" />
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
                        <p className="text-sm text-muted-foreground">{diff.description}</p>
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
                {/* Preço em destaque */}
                {propertyWithPrice && (
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground mb-1">Valor do imóvel</div>
                    <div className="text-3xl font-bold text-primary">
                      R$ {propertyWithPrice.price.toLocaleString("pt-BR")}
                    </div>
                    {propertyWithPrice.area && (
                      <div className="text-sm text-muted-foreground mt-1">
                        R$ {Math.round(propertyWithPrice.price / propertyWithPrice.area).toLocaleString("pt-BR")}/m²
                      </div>
                    )}
                  </div>
                )}

                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Detalhes</div>
                  <div className="font-semibold">{property.summary.details}</div>
                  <div className="text-sm text-muted-foreground">{property.summary.parking}</div>
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
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
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
