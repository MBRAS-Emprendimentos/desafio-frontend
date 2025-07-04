import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex items-baseline justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-start justify-start">
        <Image 
          src={'/images/logo.png'}
          alt="Logo"
          width={300}
          height={200}
        />

        <Card className=" bg-[#081c34]">
          <CardContent className="p-6 flex flex-col gap-4">
            <Link href="/admin">
              <Button variant={"default"} className="w-60 cursor-pointer hover:bg-[#726d6d89]">
                Painel do adm</Button>
            </Link>

            <Link href="/imoveis/itacema-366">
              <Button variant={"outline"} className="w-60 cursor-pointer hover:bg-[#726d6d89]">
                Cliente
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
