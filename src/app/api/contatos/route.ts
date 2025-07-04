import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function  GET() {
    try {
        const contatos = await prisma.contato.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })

        return NextResponse.json(contatos)
    } catch (error) {
        console.error(error)

        return new NextResponse("Erro ao buscar contatos", {status: 500})
    }
}