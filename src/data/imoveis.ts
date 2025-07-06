import { Car, Home, Shield, School, Hospital, Trees, RulerIcon as RulerDimensionLine } from "lucide-react"
import type { PropertyData } from "@/types/special"

const propertyImages = [
  "https://img.mbras.com.br/property_photos/MB18004/42273108-a3b4-45df-ba51-05be9c9fcafd.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/118d84fd-718e-4f7c-aed4-50a952ab79c2.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/f77d2b85-4415-4b5e-9e98-a3ce02526580.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/b5e62dc4-ad44-4bb0-b31a-595a283ae98e.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/8208a191-01a6-4386-8c40-a2d1451e5efc.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/cc3c1fee-9e1a-4bb0-a1f9-709d090f9cb6.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/b1dba50e-4cea-4ddc-aa21-e736b84bf873.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/255ea40a-7701-47c2-beb7-d41985eaf2d9.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
]

export const itacema366Data: PropertyData = {
  name: "ITACEMA 366",
  code: "MB18004",
  tagline: "Viva o melhor do Itaim Bibi",
  location: "Itaim Bibi, São Paulo",
  summary: {
    details: "145 m² | 3 dorms (1 suíte)",
    parking: "1 vaga",
  },
  images: propertyImages,
  about: {
    description:
      "Em uma das ruas mais cobiçadas do Itaim, o ITACEMA 366 combina tranquilidade, mobilidade e uma infraestrutura completa ao seu redor. A poucos passos de restaurantes renomados, lojas exclusivas, centros comerciais premium e serviços essenciais, proporcionando máxima praticidade ao seu dia a dia.",
    highlights: [
      "145 m² | 3 dormitórios (1 suíte)",
      "Sala ampla com excelente iluminação natural",
      "Planta quadrada e inteligente, maximizando espaços",
      "1 vaga de garagem",
    ],
  },
  characteristics: [
    { icon: RulerDimensionLine, label: "Área Total", value: "145 m²" },
    { icon: Home, label: "Dormitórios", value: "3 (sendo 1 suíte)" },
    { icon: Car, label: "Vagas", value: "1 vaga de garagem" },
  ],
  neighborhoodDifferentials: [
    {
      icon: Shield,
      iconColor: "text-blue-600",
      iconBackground: "bg-blue-100",
      title: "Segurança Reforçada",
      description: "15º DP a apenas 280m de distância",
    },
    {
      icon: School,
      iconColor: "text-purple-600",
      iconBackground: "bg-purple-100",
      title: "Educação de Excelência",
      description: "Pueri Domus (140m), Meu Castelinho e Gracinha (400m)",
    },
    {
      icon: Hospital,
      iconColor: "text-red-600",
      iconBackground: "bg-red-100",
      title: "Saúde de Referência",
      description: "Hospital Sancta Maggiore (1km), São Luiz Itaim (1,4km)",
    },
    {
      icon: Trees,
      iconColor: "text-green-600",
      iconBackground: "bg-green-100",
      title: "Lazer e Cultura",
      description: "Clube Pinheiros, Harmonia, Parque Ibirapuera, Parque do Povo",
    },
  ],
  walkDistanceStats: [
    { value: "15+", label: "Restaurantes Premium" },
    { value: "3", label: "Shoppings Centers" },
    { value: "5", label: "Supermercados" },
    { value: "10+", label: "Escolas de Elite" },
  ],
  contact: {
    whatsappNumber: "5511977998888",
    formId: "mbljlonp",
  },
}

// Mock data para o carrossel da home
export const mockProperties = [
  {
    id: "1",
    name: "Residencial Jardim Paulista",
    location: "Jardim Paulista, São Paulo",
    image:
      "https://img.mbras.com.br/property_photos/MB18004/42273108-a3b4-45df-ba51-05be9c9fcafd.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    price: 850000,
  },
  {
    id: "2",
    name: "Cobertura Vila Madalena",
    location: "Vila Madalena, São Paulo",
    image:
      "https://img.mbras.com.br/property_photos/MB18004/118d84fd-718e-4f7c-aed4-50a952ab79c2.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    price: 1200000,
  },
  {
    id: "3",
    name: "Apartamento Moema",
    location: "Moema, São Paulo",
    image:
      "https://img.mbras.com.br/property_photos/MB18004/f77d2b85-4415-4b5e-9e98-a3ce02526580.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    price: 650000,
  },
]
