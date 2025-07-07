"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react"
import { Dialog, DialogContent } from "../ui/dialog"

interface PropertyGalleryProps {
  images: string[]
  propertyName: string
}

export default function PropertyGallery({ images, propertyName }: PropertyGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = (index: number) => {
    setModalImageIndex(index)
    setIsModalOpen(true)
  }

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div
          className="relative h-96 rounded-lg overflow-hidden group cursor-pointer"
          onClick={() => openModal(currentImageIndex)}
        >
          <Image
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={`${propertyName} - Imagem principal`}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
            MBRAS
          </div>
          <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <Expand className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
          {images.slice(0, 12).map((image, index) => (
            <div
              key={index}
              className={`relative h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                index === currentImageIndex
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-transparent hover:border-border"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${propertyName} - Imagem ${index + 1}`}
                fill
                className="object-cover"
              />
              {index === currentImageIndex && <div className="absolute inset-0 bg-primary/20" />}
            </div>
          ))}

          {/* Show more indicator */}
          {images.length > 12 && (
            <div
              className="relative h-20 rounded-lg overflow-hidden cursor-pointer border-2 border-dashed border-border hover:border-primary bg-muted flex items-center justify-center"
              onClick={() => openModal(12)}
            >
              <span className="text-sm font-medium">+{images.length - 12}</span>
            </div>
          )}
        </div>
      </div>

      {/* Modal Gallery */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl w-full h-[90vh] p-0">
          <div className="relative h-full bg-black rounded-lg overflow-hidden">
            <Image
              src={images[modalImageIndex] || "/placeholder.svg"}
              alt={`${propertyName} - Imagem ${modalImageIndex + 1}`}
              fill
              className="object-contain"
            />

            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {modalImageIndex + 1} / {images.length}
            </div>

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={prevModalImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={nextModalImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </>
            )}

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black/50 p-2 rounded-lg max-w-full overflow-x-auto">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`relative w-12 h-12 rounded cursor-pointer border-2 flex-shrink-0 ${
                    index === modalImageIndex ? "border-white" : "border-transparent"
                  }`}
                  onClick={() => setModalImageIndex(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
