'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function AdminPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-12 p-6 bg-gray-50">
      <div className="absolute top-6 left-6">
        <Link href="/">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-[#081c34]">Painel do Administrador</h1>

      <div>
        <Card className=" bg-[#081c34]">
            <CardContent className="p-6 flex flex-col gap-4">
                <Link href="admin/contatos">
                    <Button className="w-60 cursor-pointer hover:bg-[#726d6d89]">Ver Contatos</Button>
                </Link>

                <Link href="admin/imoveis">
                    <Button className="w-60 cursor-pointer hover:bg-[#726d6d89]" variant="outline">Ver Imóveis</Button>
                </Link>

            </CardContent>
        </Card>
      </div>
    </main>
  )
}
