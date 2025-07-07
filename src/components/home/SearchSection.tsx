"use client"

import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Input } from "../ui/input"
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
  { value: "aluguel", label: "Aluguel" }
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
    propertyType: "",
    transactionType: "",
    neighborhood: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  })
  const router = useRouter()

  const handleSearch = () => {
    const params = new URLSearchParams()

    Object.entries(searchFilters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value)
      }
    })

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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
            <Select
              value={searchFilters.propertyType}
              onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, propertyType: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Tipo de imóvel" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={searchFilters.transactionType}
              onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, transactionType: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Venda ou Aluguel" />
              </SelectTrigger>
              <SelectContent>
                {transactionTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={searchFilters.neighborhood}
              onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, neighborhood: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Bairro" />
              </SelectTrigger>
              <SelectContent>
                {neighborhoods.map((neighborhood) => (
                  <SelectItem key={neighborhood.value} value={neighborhood.value}>
                    {neighborhood.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              placeholder="Preço mínimo"
              value={searchFilters.minPrice}
              onChange={(e) => setSearchFilters((prev) => ({ ...prev, minPrice: e.target.value }))}
            />

            <Input
              placeholder="Preço máximo"
              value={searchFilters.maxPrice}
              onChange={(e) => setSearchFilters((prev) => ({ ...prev, maxPrice: e.target.value }))}
            />
          </div>

          {/* Filtros adicionais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Select
              value={searchFilters.bedrooms}
              onValueChange={(value) => setSearchFilters((prev) => ({ ...prev, bedrooms: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Quartos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 quarto</SelectItem>
                <SelectItem value="2">2 quartos</SelectItem>
                <SelectItem value="3">3 quartos</SelectItem>
                <SelectItem value="4">4+ quartos</SelectItem>
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
