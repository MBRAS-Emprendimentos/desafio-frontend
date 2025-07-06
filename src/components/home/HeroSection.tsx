"use client"

import { Button } from "../ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Referência em
            <br />
            imóveis de alto
            <br />
            padrão.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Há mais de uma década no mercado, a MBRAS conecta você às propriedades exclusivas no Brasil e ao redor do
            mundo.
          </p>
          <Link href="/imoveis">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-3">
              Explorar Imóveis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
