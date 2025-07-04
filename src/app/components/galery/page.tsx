"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import styles from "./page.module.css"

export function GaleriaFotos({ images }: { images: string[] }) {
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(null)

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-[#081c34] mb-8 text-center">
          Galeria de Fotos
        </h2>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => {
            const [erro, setErro] = useState(false)
            if (erro) return null

            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
                    className={`${styles.images} relative w-full aspect-video overflow-hidden rounded shadow cursor-pointer hover:scale-[1.01] transition`}
                    onClick={() => setImagemSelecionada(src)}
                  >
                    <Image
                      src={src}
                      alt={`Foto ${index + 1}`}
                      fill
                      className="object-cover"
                      onError={() => setErro(true)}
                    />
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-screen-2xl w-full bg-[#ffffffb9]">
                  <DialogTitle />
                  {imagemSelecionada && (
                    <div className="relative w-full h-[80vh]">
                      <Image
                        src={imagemSelecionada}
                        alt="Foto em destaque"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            )
          })}
        </div>
      </div>
    </section>
  )
}
