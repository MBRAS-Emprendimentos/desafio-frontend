"use client"

import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Slider } from "../ui/slider"
import { Badge } from "../ui/badge"
import { useState } from "react"
import { X, Filter, RotateCcw } from "lucide-react"

interface PropertyFiltersProps {
  onFiltersChange: (filters: any) => void
}

export default function PropertyFilters({ onFiltersChange }: PropertyFiltersProps) {
  const [filters, setFilters] = useState({
    priceRange: [0, 50000000],
    bedrooms: "any",
    areaRange: [0, 1000],
  })

  const [isOpen, setIsOpen] = useState(false)

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  const clearFilters = () => {
    const clearedFilters = {
      priceRange: [0, 50000000],
      bedrooms: "any",
      areaRange: [0, 1000],
    }
    setFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const hasActiveFilters =
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 50000000 ||
    filters.bedrooms !== "any" ||
    filters.areaRange[0] > 0 ||
    filters.areaRange[1] < 1000

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `R$ ${(price / 1000000).toFixed(1)}M`
    }
    return `R$ ${(price / 1000).toFixed(0)}K`
  }

  return (
    <div className="space-y-4">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="w-full justify-between">
          <div className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2 h-5 w-5 p-0 flex items-center justify-center">
                !
              </Badge>
            )}
          </div>
        </Button>
      </div>

      {/* Filters Card */}
      <Card className={`${isOpen ? "block" : "hidden"} lg:block`}>
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-lg">Filtros</CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 px-2">
              <RotateCcw className="h-3 w-3 mr-1" />
              Limpar
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Faixa de Preço */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Preço</label>
              <span className="text-xs text-muted-foreground">
                {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
              </span>
            </div>
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => handleFilterChange("priceRange", value)}
              max={50000000}
              min={0}
              step={100000}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>R$ 0</span>
              <span>R$ 50M+</span>
            </div>
          </div>

          {/* Quartos */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Quartos</label>
            <Select value={filters.bedrooms} onValueChange={(value) => handleFilterChange("bedrooms", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Qualquer quantidade" />
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
          </div>

          {/* Área */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Área</label>
              <span className="text-xs text-muted-foreground">
                {filters.areaRange[0]}m² - {filters.areaRange[1]}m²
              </span>
            </div>
            <Slider
              value={filters.areaRange}
              onValueChange={(value) => handleFilterChange("areaRange", value)}
              max={1000}
              min={0}
              step={10}
              className="mt-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0m²</span>
              <span>1000m²+</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="space-y-2">
          <div className="text-sm font-medium text-muted-foreground">Filtros ativos:</div>
          <div className="flex flex-wrap gap-2">
            {(filters.priceRange[0] > 0 || filters.priceRange[1] < 50000000) && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
                <X
                  className="h-3 w-3 cursor-pointer hover:text-destructive"
                  onClick={() => handleFilterChange("priceRange", [0, 50000000])}
                />
              </Badge>
            )}
            {filters.bedrooms !== "any" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {filters.bedrooms === "5"
                  ? "5+ quartos"
                  : `${filters.bedrooms} quarto${filters.bedrooms !== "1" ? "s" : ""}`}
                <X
                  className="h-3 w-3 cursor-pointer hover:text-destructive"
                  onClick={() => handleFilterChange("bedrooms", "any")}
                />
              </Badge>
            )}
            {(filters.areaRange[0] > 0 || filters.areaRange[1] < 1000) && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {filters.areaRange[0]}m² - {filters.areaRange[1]}m²
                <X
                  className="h-3 w-3 cursor-pointer hover:text-destructive"
                  onClick={() => handleFilterChange("areaRange", [0, 1000])}
                />
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
