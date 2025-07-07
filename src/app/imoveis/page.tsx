"use client"

import { Card, CardContent } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Bed, Bath, Square, MapPin } from "lucide-react"
import { mockProperties } from "../../data/imoveis"
import PropertyFilters from "../../components/property/PropertyFilters"
import Image from "next/image"
import Link from "next/link"
import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function ImoveisPage() {
  const [filters, setFilters] = useState<any>({})
  const searchParams = useSearchParams()

  // Aplicar filtros da URL na inicialização
  useEffect(() => {
    const urlFilters: any = {}

    // Busca por texto
    const query = searchParams.get("q")
    if (query) urlFilters.query = query

    // Outros filtros
    const propertyType = searchParams.get("propertyType")
    if (propertyType) urlFilters.propertyType = propertyType

    const transactionType = searchParams.get("transactionType")
    if (transactionType) urlFilters.transactionType = transactionType

    const neighborhood = searchParams.get("neighborhood")
    if (neighborhood) urlFilters.neighborhood = neighborhood

    const minPrice = searchParams.get("minPrice")
    if (minPrice) urlFilters.minPrice = Number.parseInt(minPrice)

    const maxPrice = searchParams.get("maxPrice")
    if (maxPrice) urlFilters.maxPrice = Number.parseInt(maxPrice)

    const bedrooms = searchParams.get("bedrooms")
    if (bedrooms) urlFilters.bedrooms = bedrooms

    setFilters(urlFilters)
  }, [searchParams])

  const filteredProperties = useMemo(() => {
    return mockProperties.filter((property) => {
      // Busca por texto
      if (filters.query) {
        const query = filters.query.toLowerCase()
        const matchesQuery =
          property.name.toLowerCase().includes(query) ||
          property.location.toLowerCase().includes(query) ||
          property.propertyData.code.toLowerCase().includes(query)
        if (!matchesQuery) return false
      }

      // Filtro por tipo de propriedade
      if (filters.propertyType) {
        const propertyType = property.name.toLowerCase()
        const filterType = filters.propertyType.toLowerCase()

        if (
          filterType === "apartamento" &&
          !propertyType.includes("apartamento") &&
          !propertyType.includes("residencial")
        )
          return false
        if (filterType === "cobertura" && !propertyType.includes("cobertura")) return false
        if (filterType === "loft" && !propertyType.includes("loft")) return false
        if (filterType === "residencial" && !propertyType.includes("residencial")) return false
      }

      // Filtro por bairro
      if (filters.neighborhood) {
        const location = property.location.toLowerCase()
        const neighborhood = filters.neighborhood.toLowerCase()

        if (neighborhood === "itaim-bibi" && !location.includes("itaim")) return false
        if (neighborhood === "jardim-paulista" && !location.includes("jardim paulista")) return false
        if (neighborhood === "jardins" && !location.includes("jardins")) return false
        if (neighborhood === "vila-madalena" && !location.includes("vila madalena")) return false
        if (neighborhood === "moema" && !location.includes("moema")) return false
        if (neighborhood === "pinheiros" && !location.includes("pinheiros")) return false
        if (neighborhood === "higienopolis" && !location.includes("higienópolis")) return false
      }

      // Aplicar filtros de preço
      if (filters.priceRange && filters.priceRange.length === 2) {
        if (property.price < filters.priceRange[0] || property.price > filters.priceRange[1]) {
          return false
        }
      }
      if (filters.minPrice && property.price < filters.minPrice) return false
      if (filters.maxPrice && property.price > filters.maxPrice) return false

      // Filtro por quartos
      if (filters.bedrooms) {
        const bedroomFilter = filters.bedrooms
        if (bedroomFilter === "4" && property.bedrooms < 4) return false
        if (bedroomFilter !== "4" && property.bedrooms.toString() !== bedroomFilter) return false
      }

      // Filtro por banheiros
      if (filters.bathrooms) {
        const bathroomFilter = filters.bathrooms
        if (bathroomFilter === "4" && property.bathrooms < 4) return false
        if (bathroomFilter !== "4" && property.bathrooms.toString() !== bathroomFilter) return false
      }

      // Filtro por área
      if (filters.area && filters.area.length === 2) {
        if (property.area < filters.area[0] || property.area > filters.area[1]) {
          return false
        }
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
          {filters.query && (
            <p className="text-sm text-muted-foreground mt-2">
              Resultados para: <span className="font-medium">"{filters.query}"</span>
            </p>
          )}
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
                      <Link href={`/imovel/${property.slug}`}>
                        <Button>Ver Detalhes</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="text-6xl mb-4">🏠</div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Nenhum imóvel encontrado</h3>
                  <p className="text-muted-foreground mb-6">
                    Não encontramos imóveis que correspondam aos seus critérios de busca. Que tal ajustar os filtros ou
                    entrar em contato conosco?
                  </p>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setFilters({})
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }}
                      className="w-full"
                    >
                      Limpar todos os filtros
                    </Button>
                    <Button
                      onClick={() => {
                        const message = "Olá! Não encontrei o imóvel ideal nos filtros disponíveis. Podem me ajudar?"
                        const whatsappUrl = `https://wa.me/5511977998888?text=${encodeURIComponent(message)}`
                        window.open(whatsappUrl, "_blank")
                      }}
                      className="w-full"
                    >
                      Falar com consultor
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
