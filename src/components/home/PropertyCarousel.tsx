"use client"

import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Bed, Bath, Square, ChevronLeft, ChevronRight } from "lucide-react"
import { mockProperties } from "../../data/imoveis"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function PropertyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockProperties.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockProperties.length) % mockProperties.length)
  }

  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Confira nossa seleção personalizada</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {mockProperties.map((property) => (
                <div key={property.id} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden">
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
                      <p className="text-muted-foreground mb-4">{property.location}</p>

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
                          <Button variant="outline">Ver Detalhes</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-background shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-background shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {mockProperties.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
