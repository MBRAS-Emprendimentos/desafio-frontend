"use client"

import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { useState } from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

const propertyTypes = [
  { value: "casa", label: "Casa Residencial" },
  { value: "apartamento", label: "Apartamento" },
  { value: "terreno", label: "Terreno" },
  { value: "comercial", label: "Comercial" },
  { value: "temporada", label: "Temporada" },
]

const transactionTypes = [
  { value: "venda", label: "Venda" },
  { value: "aluguel", label: "Aluguel" },
  { value: "temporada", label: "Temporada" },
]

const neighborhoods = [
  { value: "itaim-bibi", label: "Itaim Bibi" },
  { value: "jardim-paulista", label: "Jardim Paulista" },
  { value: "vila-madalena", label: "Vila Madalena" },
  { value: "moema", label: "Moema" },
  { value: "pinheiros", label: "Pinheiros" },
]

export default function SearchSection() {
  const [searchFilters, setSearchFilters] = useState({
    priceRange: "",
    bedrooms: "",
    location: "",
  })
  const router = useRouter()

  const handleSearch = () => {
    const params = new URLSearchParams()

    if (searchFilters.location) {
      params.append("neighborhood", searchFilters.location)
    }

    if (searchFilters.bedrooms) {
      params.append("bedrooms", searchFilters.bedrooms)
    }

    if (searchFilters.priceRange) {
      const [min, max] = searchFilters.priceRange.split("-")
      if (min) params.append("minPrice", min)
      if (max && max !== "999999999") params.append("maxPrice", max)
    }

    router.push(`/imoveis?${params.toString()}`)
  }

  return (
    <section className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">O que procura hoje?</h2>
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
          {/* Filtros principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Select
              value={searchFilters.location}
              onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, location: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Localização" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as regiões</SelectItem>
                <SelectItem value="itaim-bibi">Itaim Bibi</SelectItem>
                <SelectItem value="jardim-paulista">Jardim Paulista</SelectItem>
                <SelectItem value="jardins">Jardins</SelectItem>
                <SelectItem value="vila-madalena">Vila Madalena</SelectItem>
                <SelectItem value="moema">Moema</SelectItem>
                <SelectItem value="pinheiros">Pinheiros</SelectItem>
                <SelectItem value="higienopolis">Higienópolis</SelectItem>
                <SelectItem value="jardim-europa">Jardim Europa</SelectItem>
                <SelectItem value="vila-olimpia">Vila Olímpia</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={searchFilters.bedrooms}
              onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, bedrooms: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Quartos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Qualquer quantidade</SelectItem>
                <SelectItem value="1">1 quarto</SelectItem>
                <SelectItem value="2">2 quartos</SelectItem>
                <SelectItem value="3">3 quartos</SelectItem>
                <SelectItem value="4">4 quartos</SelectItem>
                <SelectItem value="5">5+ quartos</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={searchFilters.priceRange}
              onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, priceRange: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Faixa de preço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Qualquer valor</SelectItem>
                <SelectItem value="0-500000">Até R$ 500 mil</SelectItem>
                <SelectItem value="500000-1000000">R$ 500 mil - R$ 1 milhão</SelectItem>
                <SelectItem value="1000000-3000000">R$ 1 - R$ 3 milhões</SelectItem>
                <SelectItem value="3000000-10000000">R$ 3 - R$ 10 milhões</SelectItem>
                <SelectItem value="10000000-999999999">Acima de R$ 10 milhões</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="px-12" onClick={handleSearch}>
              <Search className="h-4 w-4 mr-2" />
              Buscar Imóveis
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
