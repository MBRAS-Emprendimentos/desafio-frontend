"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function CarouselImages({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  return (
    <div className="relative w-full">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex cursor-grab active:cursor-grabbing">
          {images.map((src, index) => {
            const [erro, setErro] = React.useState(false)
            if (erro) return null

            return (
              <div
                key={index}
                className="relative w-full h-[80vw] max-h-[500px] flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Imagem ${index + 1}`}
                  fill
                  className="object-cover rounded-md"
                  sizes="100vw"
                  quality={100}
                  onError={() => setErro(true)}
                  loading="lazy"
                />
              </div>
            )
          })}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="h-3/5 absolute top-1/2 left-2 transform -translate-y-1/2 bg-transparent hover:bg-[#ffffff8f] transition p-2 shadow"
      >
        <ArrowLeft className="text-black" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="h-3/5 absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent hover:bg-[#ffffff8f] transition p-2 shadow"
      >
        <ArrowRight className="text-black" />
      </button>
    </div>
  )
}
