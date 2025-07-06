"use client"

import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Slider } from "../ui/slider"
import { Badge } from "../ui/badge"
import { useState } from "react"
import { X, Filter } from "lucide-react"

interface PropertyFiltersProps {
  onFiltersChange: (filters: any) => void
}

export default function PropertyFilters({ onFiltersChange }: PropertyFiltersProps) {
  const [filters, setFilters] = useState({
    propertyType: "",
    transactionType: "",
    neighborhood: "",
    priceRange: [0, 2000000],
    bedrooms: "",
    bathrooms: "",
    area: [0, 500],
    parking: "",
  })

  const [isOpen, setIsOpen] = useState(false)

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters = {
      propertyType: "",
      transactionType: "",
      neighborhood: "",
      priceRange: [0, 2000000],
      bedrooms: "",
      bathrooms: "",
      area: [0, 500],
      parking: "",
    }
    setFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const activeFiltersCount = Object.values(filters).filter(
    (value) => value !== "" && !(Array.isArray(value) && value[0] === 0),
  ).length

  return (
    <div className="space-y-4">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="w-full">
          <Filter className="h-4 w-4 mr-2" />
          Filtros {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </Button>
      </div>

      {/* Filters Card */}
      <Card className={`${isOpen ? "block" : "hidden"} lg:block`}>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">Filtros</CardTitle>
          {activeFiltersCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-1" />
              Limpar
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Tipo de Imóvel */}
          <div>
            <label className="text-sm font-medium mb-2 block">Tipo de Imóvel</label>
            <Select value={filters.propertyType} onValueChange={(value) => handleFilterChange("propertyType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="casa">Casa</SelectItem>
                <SelectItem value="apartamento">Apartamento</SelectItem>
                <SelectItem value="terreno">Terreno</SelectItem>
                <SelectItem value="comercial">Comercial</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Venda ou Aluguel */}
          <div>
            <label className="text-sm font-medium mb-2 block">Transação</label>
            <Select
              value={filters.transactionType}
              onValueChange={(value) => handleFilterChange("transactionType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Venda ou Aluguel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="venda">Venda</SelectItem>
                <SelectItem value="aluguel">Aluguel</SelectItem>
                <SelectItem value="temporada">Temporada</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bairro */}
          <div>
            <label className="text-sm font-medium mb-2 block">Bairro</label>
            <Select value={filters.neighborhood} onValueChange={(value) => handleFilterChange("neighborhood", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o bairro" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="itaim-bibi">Itaim Bibi</SelectItem>
                <SelectItem value="jardim-paulista">Jardim Paulista</SelectItem>
                <SelectItem value="vila-madalena">Vila Madalena</SelectItem>
                <SelectItem value="moema">Moema</SelectItem>
                <SelectItem value="pinheiros">Pinheiros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Faixa de Preço */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Faixa de Preço: R$ {filters.priceRange[0].toLocaleString()} - R$ {filters.priceRange[1].toLocaleString()}
            </label>
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => handleFilterChange("priceRange", value)}
              max={2000000}
              min={0}
              step={50000}
              className="mt-2"
            />
          </div>

          {/* Quartos */}
          <div>
            <label className="text-sm font-medium mb-2 block">Quartos</label>
            <Select value={filters.bedrooms} onValueChange={(value) => handleFilterChange("bedrooms", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Número de quartos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 quarto</SelectItem>
                <SelectItem value="2">2 quartos</SelectItem>
                <SelectItem value="3">3 quartos</SelectItem>
                <SelectItem value="4">4+ quartos</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Banheiros */}
          <div>
            <label className="text-sm font-medium mb-2 block">Banheiros</label>
            <Select value={filters.bathrooms} onValueChange={(value) => handleFilterChange("bathrooms", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Número de banheiros" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 banheiro</SelectItem>
                <SelectItem value="2">2 banheiros</SelectItem>
                <SelectItem value="3">3 banheiros</SelectItem>
                <SelectItem value="4">4+ banheiros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Área */}
          <div>
            <label className="text-sm font-medium mb-2 block">
              Área: {filters.area[0]}m² - {filters.area[1]}m²
            </label>
            <Slider
              value={filters.area}
              onValueChange={(value) => handleFilterChange("area", value)}
              max={500}
              min={0}
              step={10}
              className="mt-2"
            />
          </div>

          {/* Vagas de Garagem */}
          <div>
            <label className="text-sm font-medium mb-2 block">Vagas de Garagem</label>
            <Select value={filters.parking} onValueChange={(value) => handleFilterChange("parking", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Número de vagas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Sem vaga</SelectItem>
                <SelectItem value="1">1 vaga</SelectItem>
                <SelectItem value="2">2 vagas</SelectItem>
                <SelectItem value="3">3+ vagas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.propertyType && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {filters.propertyType}
              <X className="h-3 w-3 cursor-pointer" onClick={() => handleFilterChange("propertyType", "")} />
            </Badge>
          )}
          {filters.transactionType && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {filters.transactionType}
              <X className="h-3 w-3 cursor-pointer" onClick={() => handleFilterChange("transactionType", "")} />
            </Badge>
          )}
          {filters.neighborhood && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {filters.neighborhood}
              <X className="h-3 w-3 cursor-pointer" onClick={() => handleFilterChange("neighborhood", "")} />
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}
