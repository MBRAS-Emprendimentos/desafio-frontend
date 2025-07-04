import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { properties } from "@/data/imovel"

export async function POST(req: NextRequest) {
  try {
    for (const property of properties) {
      const imovel = await prisma.imovel.create({
        data: {
          slug: property.slug,
          name: property.name,
          code: property.code,
          tagline: property.tagline,
          location: property.location,
          summaryDetails: property.summary.details,
          summaryParking: property.summary.parking,
          description: property.about.description,
          whatsappNumber: property.contact.whatsappNumber,
          formId: property.contact.formId,

          images: {
            createMany: {
              data: property.images.map((url) => ({ url })),
            },
          },
          highlights: {
            createMany: {
              data: property.about.highlights.map((text) => ({ text })),
            },
          },
          characteristics: {
            createMany: {
              data: property.characteristics.map((c) => ({
                label: c.label,
                value: c.value,
              })),
            },
          },
          neighborhoodDifferentials: {
            createMany: {
              data: property.neighborhoodDifferentials.map((d) => ({
                title: d.title,
                description: d.description,
                iconColor: d.iconColor,
                iconBackground: d.iconBackground,
              })),
            },
          },
          walkDistanceStats: {
            createMany: {
              data: property.walkDistanceStats.map((s) => ({
                value: s.value,
                label: s.label,
              })),
            },
          },
        },
      })

      console.log("Imóvel inserido:", imovel.name)
    }

    return NextResponse.json({ status: "ok" })
  } catch (error) {
    console.error("Erro ao salvar imóveis:", error)
    return new NextResponse("Erro ao salvar imóveis", { status: 500 })
  }
}

export async function GET() {
  try {
    const imoveis = await prisma.imovel.findMany({
      include: {
        images: true,
        highlights: true,
        characteristics: true,
        neighborhoodDifferentials: true,
        walkDistanceStats: true,
      },
    })

    return NextResponse.json(imoveis)
  } catch (error) {
    console.error("Erro ao buscar imóveis:", error)
    return new NextResponse("Erro ao buscar imóveis", { status: 500 })
  }
}
