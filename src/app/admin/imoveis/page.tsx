'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

type Imovel = {
  id: string
  name: string
  slug: string
  tagline: string
  location: string
  images: { url: string }[]
}

export default function ImoveisPage() {
  const [imoveis, setImoveis] = useState<Imovel[]>([])
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [importStatus, setImportStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  useEffect(() => {
    buscarImoveis()
  }, [])

  async function buscarImoveis() {
    setStatus("loading")
    try {
      const res = await fetch("/api/imoveis")
      const data = await res.json()
      setImoveis(data)
      setStatus("success")
    } catch (err) {
      console.error("Erro ao buscar imóveis", err)
      setStatus("error")
    }
  }

  async function importarImoveis() {
    setImportStatus("loading")
    try {
      const res = await fetch("/api/imoveis", { method: "POST" })
      if (!res.ok) throw new Error("Erro ao importar")
      await buscarImoveis()
      setImportStatus("success")
    } catch (error) {
      console.error(error)
      setImportStatus("error")
    }
  }

  return (
    <main className="p-6">

        <div className="absolute top-6 left-6">
            <Link href="/admin">
                <Button variant="ghost" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                </Button>
            </Link>
        </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold">Imóveis Cadastrados</h1>

        <button
          onClick={importarImoveis}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          disabled={importStatus === "loading"}
        >
          {importStatus === "loading" ? "Atualizando..." : "Atualizar lista de imóveis"}
        </button>
      </div>

      {status === "loading" && <p>Carregando imóveis...</p>}
      {status === "error" && <p className="text-red-500">Erro ao buscar imóveis.</p>}
      {importStatus === "error" && <p className="text-red-500">Erro ao importar imóveis.</p>}
      {importStatus === "success" && (
        <p className="text-green-600 mb-4">Imóveis atualizados com sucesso ✅</p>
      )}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imoveis.map((imovel) => (
          <li key={imovel.id} className="border rounded-lg p-4 shadow bg-white">
            <h2 className="text-lg font-semibold text-[#081c34]">{imovel.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{imovel.location}</p>
            {imovel.images[17] && (
              <img
                src={imovel.images[17].url}
                alt={imovel.name}
                className="w-full h-48 object-cover rounded"
              />
            )}
          </li>
        ))}
      </ul>

      {imoveis.length === 0 && status === "success" && (
        <p className="text-gray-500 mt-4">Nenhum imóvel encontrado.</p>
      )}
    </main>
  )
}
