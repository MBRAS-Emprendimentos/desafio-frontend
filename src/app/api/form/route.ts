import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {

    try {
        const body = await req.json()
        const {nome, email, numero} = body
        
          if (!nome || !email || !numero) {
            return NextResponse.json({ error: "Dados incompletos" }, { status: 400 })
        }
    
        const novoContato = await prisma.contato.create({
            data: {
                nome,
                email,
                numero,
            },
        })

        return NextResponse.json(novoContato)
        
    } catch (error) {
        console.error(error)
        return new NextResponse('erro ao enviar', {status: 500})  }




}