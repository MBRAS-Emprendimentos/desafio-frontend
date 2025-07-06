"use client"

import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Bed, Bath, Square, MapPin } from "lucide-react"
import { mockProperties } from "../../data/imoveis"
import PropertyFilters from "../../components/property/PropertyFilters"
import Image from "next/image"
import Link from "next/link"
import { useState, useMemo } from "react"

export default function ImoveisPage() {
  const [filters, setFilters] = useState<any>({})

  const filteredProperties = useMemo(() => {
    return mockProperties.filter((property) => {
      // Aplicar filtros aqui
      if (filters.priceRange && (property.price < filters.priceRange[0] || property.price > filters.priceRange[1])) {
        return false
      }
      if (filters.bedrooms && property.bedrooms.toString() !== filters.bedrooms) {
        return false
      }
      if (filters.area && (property.area < filters.area[0] || property.area > filters.area[1])) {
        return false
      }
      return true
    })
  }, [filters])

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Nossos Imóveis</h1>
          <p className="text-muted-foreground">Descubra nossa seleção exclusiva de propriedades de alto padrão</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <PropertyFilters onFiltersChange={setFilters} />
          </div>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">{filteredProperties.length} imóveis encontrados</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        {property.bedrooms}
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        {property.bathrooms}
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        {property.area}m²
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        R$ {property.price.toLocaleString("pt-BR")}
                      </span>
                      <Link href={`/imoveis/${property.id}`}>
                        <Button>Ver Detalhes</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Nenhum imóvel encontrado com os filtros selecionados.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
