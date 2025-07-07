"use client"

import { useState, useCallback } from "react"
import { mockProperties } from "../data/imoveis"

export interface SearchFilters {
  query?: string
  propertyType?: string
  transactionType?: string
  neighborhood?: string
  minPrice?: number
  maxPrice?: number
  bedrooms?: string
  bathrooms?: string
  minArea?: number
  maxArea?: number
  parking?: string
}

export function useSearch() {
  const [filters, setFilters] = useState<SearchFilters>({})
  const [isLoading, setIsLoading] = useState(false)

  const searchProperties = useCallback((searchFilters: SearchFilters) => {
    setIsLoading(true)
    setFilters(searchFilters)

    // Simular delay de busca
    setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return mockProperties.filter((property) => {
      // Busca por texto
      if (searchFilters.query) {
        const query = searchFilters.query.toLowerCase()
        const matchesQuery =
          property.name.toLowerCase().includes(query) || property.location.toLowerCase().includes(query)
        if (!matchesQuery) return false
      }

      // Filtro por preço
      if (searchFilters.minPrice && property.price < searchFilters.minPrice) return false
      if (searchFilters.maxPrice && property.price > searchFilters.maxPrice) return false

      // Filtro por quartos
      if (searchFilters.bedrooms && property.bedrooms.toString() !== searchFilters.bedrooms) return false

      // Filtro por banheiros
      if (searchFilters.bathrooms && property.bathrooms.toString() !== searchFilters.bathrooms) return false

      // Filtro por área
      if (searchFilters.minArea && property.area < searchFilters.minArea) return false
      if (searchFilters.maxArea && property.area > searchFilters.maxArea) return false

      return true
    })
  }, [])

  const clearFilters = useCallback(() => {
    setFilters({})
  }, [])

  return {
    filters,
    searchProperties,
    clearFilters,
    isLoading,
  }
}
