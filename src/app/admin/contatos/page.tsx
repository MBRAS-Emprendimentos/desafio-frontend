// app/contatos/page.tsx

import { Button } from "@/components/ui/button"
import { Contato } from "@prisma/client"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"


async function getContatos(): Promise<Contato[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contatos`, {
    cache: "no-store",
  })

  if (!res.ok) throw new Error("Erro ao buscar contatos")

  return res.json()
}

export default async function ContatosPage() {
  const contatos = await getContatos()

  return (
    <div className="flex flex-col items-center  md:m-20">

      <div className="absolute top-6 left-6">
        <Link href="/admin">
          <Button variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </Link>
      </div>

      <h1 className="text-[x-large] mb-4 ">Contatos</h1>
      <ul className="w-full">
       {contatos.map((contato) => (
            <ul key={contato.id} className="flex justify-between border p-2">
                <li >
                    <strong>
                        {contato.nome}                    
                    </strong>
                </li>
                <li>
                    {contato.email}

                </li>
                <li>

                    {new Date(contato.createdAt).toLocaleString("pt-BR")}
                </li>

            </ul>
        ))}
      </ul>
    </div>
  )
}
