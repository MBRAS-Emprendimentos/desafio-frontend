import { Car, Home, Shield, School, Hospital, Trees, RulerIcon as RulerDimensionLine } from "lucide-react"
import type { PropertyData } from "@/types/special"
import { generateSlug } from "../lib/slugify"

// Arrays de imagens para cada propriedade
const itacema366Images = [
  "https://img.mbras.com.br/property_photos/MB18004/42273108-a3b4-45df-ba51-05be9c9fcafd.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/118d84fd-718e-4f7c-aed4-50a952ab79c2.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/f77d2b85-4415-4b5e-9e98-a3ce02526580.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/b5e62dc4-ad44-4bb0-b31a-595a283ae98e.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/8208a191-01a6-4386-8c40-a2d1451e5efc.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/cc3c1fee-9e1a-4bb0-a1f9-709d090f9cb6.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/b1dba50e-4cea-4ddc-aa21-e736b84bf873.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/255ea40a-7701-47c2-beb7-d41985eaf2d9.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/9ca71c73-38df-48a2-b245-4099d9054fed.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/6d654c90-5634-4979-8622-364b2c1bbb89.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/3f61efe9-24a4-4917-b6c8-5eedaca6c78b.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/80e88526-5a03-4f4e-942d-24529d74593b.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/9d728e7a-5acd-415a-a43f-8cf668e7d71c.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/1e7024e8-4483-4a9d-9ca2-9accb1884d8f.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/02b76a72-ca38-4a96-a1c7-e3faa838a25d.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/1507a78d-2073-45b3-9c6e-06ac77fd7d2d.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/69f25d37-4099-49d2-937d-99b4b52f55ab.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
  "https://img.mbras.com.br/property_photos/MB18004/728b84c8-b622-4f78-a881-65b0f1f454f5.jpeg?tr=f-auto,q-auto,pr=true,w=1200",
]

const jardimPaulistaImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600563438938-a42d098c3d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
]

const vilaMadalenaImages = [
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600121848554-f7c5b6c3e8b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
]

const moemaImages = [
  "https://images.unsplash.com/photo-1600566752229-450a5ba3e4c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600563438938-a42d098c3d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
]

const pinheirosImages = [
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600121848554-f7c5b6c3e8b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
]

const higienopolisImages = [
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600563438938-a42d098c3d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566752229-450a5ba3e4c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
]

const superLuxuosoItaimImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600563438938-a42d098c3d8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566752229-450a5ba3e4c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
]

const apartamentoJardinsImages = [
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600121848554-f7c5b6c3e8b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
]

// Dados completos das propriedades
export const itacema366Data: PropertyData = {
  name: "ITACEMA 366",
  code: "MB18004",
  tagline: "Viva o melhor do Itaim Bibi",
  location: "Itaim Bibi, São Paulo",
  summary: {
    details: "145 m² | 3 dorms (1 suíte)",
    parking: "1 vaga",
  },
  images: itacema366Images,
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

export const jardimPaulistaData: PropertyData = {
  name: "RESIDENCIAL JARDIM PAULISTA",
  code: "MB18001",
  tagline: "Elegância no coração de São Paulo",
  location: "Jardim Paulista, São Paulo",
  summary: {
    details: "120 m² | 3 dorms (1 suíte)",
    parking: "2 vagas",
  },
  images: jardimPaulistaImages,
  about: {
    description:
      "Localizado no prestigioso bairro do Jardim Paulista, este apartamento oferece o melhor da vida urbana com sofisticação. Próximo à Avenida Paulista, shopping centers e uma rica vida cultural, proporcionando conveniência e qualidade de vida incomparáveis.",
    highlights: [
      "120 m² | 3 dormitórios (1 suíte)",
      "Varanda gourmet com vista panorâmica",
      "Acabamentos de alto padrão",
      "2 vagas de garagem cobertas",
    ],
  },
  characteristics: [
    { icon: RulerDimensionLine, label: "Área Total", value: "120 m²" },
    { icon: Home, label: "Dormitórios", value: "3 (sendo 1 suíte)" },
    { icon: Car, label: "Vagas", value: "2 vagas de garagem" },
  ],
  neighborhoodDifferentials: [
    {
      icon: Shield,
      iconColor: "text-blue-600",
      iconBackground: "bg-blue-100",
      title: "Segurança 24h",
      description: "Portaria e segurança 24 horas no edifício",
    },
    {
      icon: School,
      iconColor: "text-purple-600",
      iconBackground: "bg-purple-100",
      title: "Educação Premium",
      description: "Colégio Bandeirantes e outras escolas renomadas",
    },
    {
      icon: Hospital,
      iconColor: "text-red-600",
      iconBackground: "bg-red-100",
      title: "Saúde Completa",
      description: "Hospital Sírio-Libanês e Einstein próximos",
    },
    {
      icon: Trees,
      iconColor: "text-green-600",
      iconBackground: "bg-green-100",
      title: "Cultura e Lazer",
      description: "MASP, Trianon, Parque Ibirapuera",
    },
  ],
  walkDistanceStats: [
    { value: "20+", label: "Restaurantes Gourmet" },
    { value: "5", label: "Shopping Centers" },
    { value: "8", label: "Supermercados" },
    { value: "12+", label: "Escolas Particulares" },
  ],
  contact: {
    whatsappNumber: "5511977998888",
    formId: "mbljlonp",
  },
}

export const vilaMadalenaData: PropertyData = {
  name: "COBERTURA VILA MADALENA",
  code: "MB18002",
  tagline: "Modernidade e charme boêmio",
  location: "Vila Madalena, São Paulo",
  summary: {
    details: "180 m² | 4 dorms (2 suítes)",
    parking: "2 vagas",
  },
  images: vilaMadalenaImages,
  about: {
    description:
      "Cobertura exclusiva na Vila Madalena, combinando o charme boêmio do bairro com todo o conforto moderno. Terraço privativo, acabamentos premium e localização privilegiada próxima aos melhores bares, restaurantes e galerias de arte da cidade.",
    highlights: [
      "180 m² | 4 dormitórios (2 suítes)",
      "Terraço privativo de 60 m²",
      "Churrasqueira e área gourmet completa",
      "2 vagas de garagem com depósito",
    ],
  },
  characteristics: [
    { icon: RulerDimensionLine, label: "Área Total", value: "180 m²" },
    { icon: Home, label: "Dormitórios", value: "4 (sendo 2 suítes)" },
    { icon: Car, label: "Vagas", value: "2 vagas + depósito" },
  ],
  neighborhoodDifferentials: [
    {
      icon: Shield,
      iconColor: "text-blue-600",
      iconBackground: "bg-blue-100",
      title: "Bairro Seguro",
      description: "Policiamento constante e comunidade unida",
    },
    {
      icon: School,
      iconColor: "text-purple-600",
      iconBackground: "bg-purple-100",
      title: "Educação Criativa",
      description: "Escolas alternativas e cursos de arte",
    },
    {
      icon: Hospital,
      iconColor: "text-red-600",
      iconBackground: "bg-red-100",
      title: "Saúde Acessível",
      description: "Hospital das Clínicas e UBS próximos",
    },
    {
      icon: Trees,
      iconColor: "text-green-600",
      iconBackground: "bg-green-100",
      title: "Vida Cultural",
      description: "Bares, galerias, teatro e vida noturna",
    },
  ],
  walkDistanceStats: [
    { value: "30+", label: "Bares e Restaurantes" },
    { value: "2", label: "Shopping Centers" },
    { value: "6", label: "Supermercados" },
    { value: "15+", label: "Galerias de Arte" },
  ],
  contact: {
    whatsappNumber: "5511977998888",
    formId: "mbljlonp",
  },
}

export const moemaData: PropertyData = {
  name: "APARTAMENTO MOEMA",
  code: "MB18003",
  tagline: "Conforto e praticidade",
  location: "Moema, São Paulo",
  summary: {
    details: "95 m² | 2 dorms (1 suíte)",
    parking: "1 vaga",
  },
  images: moemaImages,
  about: {
    description:
      "Apartamento moderno em Moema, um dos bairros mais valorizados de São Paulo. Excelente localização com fácil acesso ao metrô, shopping Ibirapuera e parques. Ideal para quem busca praticidade e qualidade de vida na zona sul.",
    highlights: [
      "95 m² | 2 dormitórios (1 suíte)",
      "Sacada com vista livre",
      "Cozinha planejada moderna",
      "1 vaga de garagem",
    ],
  },
  characteristics: [
    { icon: RulerDimensionLine, label: "Área Total", value: "95 m²" },
    { icon: Home, label: "Dormitórios", value: "2 (sendo 1 suíte)" },
    { icon: Car, label: "Vagas", value: "1 vaga de garagem" },
  ],
  neighborhoodDifferentials: [
    {
      icon: Shield,
      iconColor: "text-blue-600",
      iconBackground: "bg-blue-100",
      title: "Segurança Residencial",
      description: "Bairro residencial com baixo índice de criminalidade",
    },
    {
      icon: School,
      iconColor: "text-purple-600",
      iconBackground: "bg-purple-100",
      title: "Educação Qualificada",
      description: "Escolas tradicionais e universidades próximas",
    },
    {
      icon: Hospital,
      iconColor: "text-red-600",
      iconBackground: "bg-red-100",
      title: "Saúde Especializada",
      description: "Hospital São Paulo e clínicas especializadas",
    },
    {
      icon: Trees,
      iconColor: "text-green-600",
      iconBackground: "bg-green-100",
      title: "Áreas Verdes",
      description: "Parque Ibirapuera e Parque do Estado",
    },
  ],
  walkDistanceStats: [
    { value: "25+", label: "Restaurantes" },
    { value: "4", label: "Shopping Centers" },
    { value: "7", label: "Supermercados" },
    { value: "3", label: "Estações de Metrô" },
  ],
  contact: {
    whatsappNumber: "5511977998888",
    formId: "mbljlonp",
  },
}

export const pinheirosData: PropertyData = {
  name: "LOFT PINHEIROS",
  code: "MB18005",
  tagline: "Design contemporâneo",
  location: "Pinheiros, São Paulo",
  summary: {
    details: "85 m² | 1 dorm (1 suíte)",
    parking: "1 vaga",
  },
  images: pinheirosImages,
  about: {
    description:
      "Loft moderno em Pinheiros, perfeito para jovens profissionais e investidores. Conceito aberto, design contemporâneo e localização estratégica próxima ao metrô, universidades e centros empresariais. Excelente potencial de valorização.",
    highlights: [
      "85 m² | 1 dormitório suíte",
      "Conceito loft com pé-direito alto",
      "Cozinha integrada americana",
      "1 vaga de garagem",
    ],
  },
  characteristics: [
    { icon: RulerDimensionLine, label: "Área Total", value: "85 m²" },
    { icon: Home, label: "Dormitórios", value: "1 suíte" },
    { icon: Car, label: "Vagas", value: "1 vaga de garagem" },
  ],
  neighborhoodDifferentials: [
    {
      icon: Shield,
      iconColor: "text-blue-600",
      iconBackground: "bg-blue-100",
      title: "Segurança Urbana",
      description: "Movimento constante e boa iluminação",
    },
    {
      icon: School,
      iconColor: "text-purple-600",
      iconBackground: "bg-purple-100",
      title: "Hub Universitário",
      description: "USP, FAAP e outras universidades próximas",
    },
    {
      icon: Hospital,
      iconColor: "text-red-600",
      iconBackground: "bg-red-100",
      title: "Saúde Acessível",
      description: "Hospital das Clínicas e postos de saúde",
    },
    {
      icon: Trees,
      iconColor: "text-green-600",
      iconBackground: "bg-green-100",
      title: "Vida Noturna",
      description: "Bares, baladas e restaurantes 24h",
    },
  ],
  walkDistanceStats: [
    { value: "40+", label: "Bares e Restaurantes" },
    { value: "3", label: "Shopping Centers" },
    { value: "10", label: "Supermercados" },
    { value: "5", label: "Universidades" },
  ],
  contact: {
    whatsappNumber: "5511977998888",
    formId: "mbljlonp",
  },
}

export const higienopolisData: PropertyData = {
  name: "EDIFÍCIO HIGIENÓPOLIS",
  code: "MB18006",
  tagline: "Tradição e sofisticação",
  location: "Higienópolis, São Paulo",
  summary: {
    details: "200 m² | 4 dorms (3 suítes)",
    parking: "3 vagas",
  },
  images: higienopolisImages,
  about: {
    description:
      "Apartamento clássico em Higienópolis, bairro tradicional e nobre de São Paulo. Amplos ambientes, acabamentos refinados e localização privilegiada próxima ao centro da cidade, teatros e centros culturais. Perfeito para famílias que valorizam tradição e elegância.",
    highlights: [
      "200 m² | 4 dormitórios (3 suítes)",
      "Sala de estar e jantar amplas",
      "Dependência completa de empregada",
      "3 vagas de garagem",
    ],
  },
  characteristics: [
    { icon: RulerDimensionLine, label: "Área Total", value: "200 m²" },
    { icon: Home, label: "Dormitórios", value: "4 (sendo 3 suítes)" },
    { icon: Car, label: "Vagas", value: "3 vagas de garagem" },
  ],
  neighborhoodDifferentials: [
    {
      icon: Shield,
      iconColor: "text-blue-600",
      iconBackground: "bg-blue-100",
      title: "Bairro Nobre",
      description: "Tradição em segurança e tranquilidade",
    },
    {
      icon: School,
      iconColor: "text-purple-600",
      iconBackground: "bg-purple-100",
      title: "Educação Tradicional",
      description: "Colégio Rio Branco e escolas centenárias",
    },
    {
      icon: Hospital,
      iconColor: "text-red-600",
      iconBackground: "bg-red-100",
      title: "Saúde de Referência",
      description: "Hospital das Clínicas e Santa Casa",
    },
    {
      icon: Trees,
      iconColor: "text-green-600",
      iconBackground: "bg-green-100",
      title: "Cultura Clássica",
      description: "Teatro Municipal, Pinacoteca, Sala São Paulo",
    },
  ],
  walkDistanceStats: [
    { value: "18+", label: "Restaurantes Clássicos" },
    { value: "2", label: "Shopping Centers" },
    { value: "5", label: "Supermercados" },
    { value: "8+", label: "Teatros e Museus" },
  ],
  contact: {
    whatsappNumber: "5511977998888",
    formId: "mbljlonp",
  },
}

export const superLuxuosoItaimData: PropertyData = {
  name: "SUPER LUXUOSO NO MELHOR DO ITAIM BIBI",
  code: "MB18007",
  tagline: "Apartamento de altíssimo padrão na rua mais charmosa do Itaim",
  location: "Itaim Bibi, São Paulo",
  summary: {
    details: "460 m² | 4 dorms (3 suítes)",
    parking: "5 vagas",
  },
  images: superLuxuosoItaimImages,
  about: {
    description:
      "Apartamento de altíssimo padrão, localizado na rua mais charmosa e valorizada do Itaim-Bibi. Este belíssimo apartamento com 460m², super arejado e iluminado, muito espaçoso em todos seus ambientes, são 03 suítes, todas com closet, sendo a master com banheiros Sr. e Sra. Amplo home theater, salas de estar e jantar também muito amplas e iluminadas. Condomínio encantador, terreno amplo, com recuo em todas as divisas. Pouquíssimos passos do Parque do Povo e das Avenidas Faria Lima, Juscelino Kubitschek e Marginal Pinheiros.",
    highlights: [
      "460 m² | 4 dormitórios (3 suítes)",
      "Suíte master com banheiros Sr. e Sra.",
      "Amplo home theater",
      "Todas as suítes com closet",
      "5 vagas de garagem",
      "Salas amplas e iluminadas",
    ],
  },
  characteristics: [
    { icon: RulerDimensionLine, label: "Área Total", value: "460 m²" },
    { icon: Home, label: "Dormitórios", value: "4 (sendo 3 suítes)" },
    { icon: Car, label: "Vagas", value: "5 vagas de garagem" },
  ],
  neighborhoodDifferentials: [
    {
      icon: Shield,
      iconColor: "text-blue-600",
      iconBackground: "bg-blue-100",
      title: "Segurança Premium",
      description: "Portaria 24h, vigilância e guarita com controle de acesso",
    },
    {
      icon: School,
      iconColor: "text-purple-600",
      iconBackground: "bg-purple-100",
      title: "Educação de Elite",
      description: "Próximo às melhores escolas particulares de São Paulo",
    },
    {
      icon: Hospital,
      iconColor: "text-red-600",
      iconBackground: "bg-red-100",
      title: "Saúde Especializada",
      description: "Hospital Albert Einstein e clínicas de referência",
    },
    {
      icon: Trees,
      iconColor: "text-green-600",
      iconBackground: "bg-green-100",
      title: "Lazer Exclusivo",
      description: "Parque do Povo, Faria Lima e restaurantes gourmet",
    },
  ],
  walkDistanceStats: [
    { value: "50+", label: "Restaurantes Premium" },
    { value: "8", label: "Shopping Centers" },
    { value: "12", label: "Empórios Gourmet" },
    { value: "3", label: "Parques Urbanos" },
  ],
  contact: {
    whatsappNumber: "5511977998888",
    formId: "mbljlonp",
  },
}

export const apartamentoJardinsData: PropertyData = {
  name: "APARTAMENTO DECORADO DOS SONHOS EM PRÉDIO ITALIANO",
  code: "MB18008",
  tagline: "Decoração artística em rua arborizada dos Jardins",
  location: "Jardins, São Paulo",
  summary: {
    details: "180 m² | 3 dorms (2 suítes)",
    parking: "2 vagas",
  },
  images: apartamentoJardinsImages,
  about: {
    description:
      "Apartamento com decoração artística, industrial, misturando o clássico com o moderno, em rua arborizada e prédio com arquitetura neoclássica. O apartamento fica em uma rua charmosa, arborizada, na melhor região dos jardins, e o 1º andar dá uma sensação de se estar morando em uma casa com jardim. Raro em SP, todas as janelas são cercadas de verde. Árvores verdes frondosas cercam o quarteirão. Os melhores restaurantes de SP estão a pé do apartamento, na rua Bela Cintra.",
    highlights: [
      "180 m² | 3 dormitórios (2 suítes)",
      "Decoração artística e industrial",
      "Arquitetura neoclássica italiana",
      "Todas as janelas cercadas de verde",
      "Rua arborizada e charmosa",
      "Próximo aos melhores restaurantes",
    ],
  },
  characteristics: [
    { icon: RulerDimensionLine, label: "Área Total", value: "180 m²" },
    { icon: Home, label: "Dormitórios", value: "3 (sendo 2 suítes)" },
    { icon: Car, label: "Vagas", value: "2 vagas de garagem" },
  ],
  neighborhoodDifferentials: [
    {
      icon: Shield,
      iconColor: "text-blue-600",
      iconBackground: "bg-blue-100",
      title: "Bairro Nobre",
      description: "Uma das regiões mais seguras e valorizadas de SP",
    },
    {
      icon: School,
      iconColor: "text-purple-600",
      iconBackground: "bg-purple-100",
      title: "Educação Tradicional",
      description: "Colégio Dante Alighieri e escolas renomadas próximas",
    },
    {
      icon: Hospital,
      iconColor: "text-red-600",
      iconBackground: "bg-red-100",
      title: "Saúde de Referência",
      description: "Hospital Sírio-Libanês e clínicas especializadas",
    },
    {
      icon: Trees,
      iconColor: "text-green-600",
      iconBackground: "bg-green-100",
      title: "Gastronomia de Elite",
      description: "EMA, Miado, Muquifo e restaurantes estrelados",
    },
  ],
  walkDistanceStats: [
    { value: "25+", label: "Restaurantes Gourmet" },
    { value: "4", label: "Shopping Centers" },
    { value: "1", label: "Estação de Metrô" },
    { value: "15+", label: "Galerias de Arte" },
  ],
  contact: {
    whatsappNumber: "5511977998888",
    formId: "mbljlonp",
  },
}

// Array com todas as propriedades
export const allProperties: PropertyData[] = [
  itacema366Data,
  jardimPaulistaData,
  vilaMadalenaData,
  moemaData,
  pinheirosData,
  higienopolisData,
  superLuxuosoItaimData,
  apartamentoJardinsData,
]

// Mock data para o carrossel da home e listagem geral
export const mockProperties = [
  {
    id: "1",
    name: "Residencial Jardim Paulista",
    location: "Jardim Paulista, São Paulo",
    image: jardimPaulistaImages[0],
    images: jardimPaulistaImages,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    price: 850000,
    propertyData: jardimPaulistaData,
    slug: generateSlug(jardimPaulistaData.name, jardimPaulistaData.code),
  },
  {
    id: "2",
    name: "Cobertura Vila Madalena",
    location: "Vila Madalena, São Paulo",
    image: vilaMadalenaImages[0],
    images: vilaMadalenaImages,
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    price: 1200000,
    propertyData: vilaMadalenaData,
    slug: generateSlug(vilaMadalenaData.name, vilaMadalenaData.code),
  },
  {
    id: "3",
    name: "Apartamento Moema",
    location: "Moema, São Paulo",
    image: moemaImages[0],
    images: moemaImages,
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    price: 650000,
    propertyData: moemaData,
    slug: generateSlug(moemaData.name, moemaData.code),
  },
  {
    id: "4",
    name: "ITACEMA 366",
    location: "Itaim Bibi, São Paulo",
    image: itacema366Images[0],
    images: itacema366Images,
    bedrooms: 3,
    bathrooms: 2,
    area: 145,
    price: 980000,
    propertyData: itacema366Data,
    slug: generateSlug(itacema366Data.name, itacema366Data.code),
  },
  {
    id: "5",
    name: "Loft Pinheiros",
    location: "Pinheiros, São Paulo",
    image: pinheirosImages[0],
    images: pinheirosImages,
    bedrooms: 1,
    bathrooms: 1,
    area: 85,
    price: 550000,
    propertyData: pinheirosData,
    slug: generateSlug(pinheirosData.name, pinheirosData.code),
  },
  {
    id: "6",
    name: "Edifício Higienópolis",
    location: "Higienópolis, São Paulo",
    image: higienopolisImages[0],
    images: higienopolisImages,
    bedrooms: 4,
    bathrooms: 4,
    area: 200,
    price: 1500000,
    propertyData: higienopolisData,
    slug: generateSlug(higienopolisData.name, higienopolisData.code),
  },
  {
    id: "7",
    name: "Super Luxuoso no Melhor do Itaim Bibi",
    location: "Itaim Bibi, São Paulo",
    image: superLuxuosoItaimImages[0],
    images: superLuxuosoItaimImages,
    bedrooms: 4,
    bathrooms: 4,
    area: 460,
    price: 25000000,
    propertyData: superLuxuosoItaimData,
    slug: generateSlug(superLuxuosoItaimData.name, superLuxuosoItaimData.code),
  },
  {
    id: "8",
    name: "Apartamento Decorado dos Sonhos",
    location: "Jardins, São Paulo",
    image: apartamentoJardinsImages[0],
    images: apartamentoJardinsImages,
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    price: 3500000,
    propertyData: apartamentoJardinsData,
    slug: generateSlug(apartamentoJardinsData.name, apartamentoJardinsData.code),
  },
]

// Função para buscar propriedade por ID
export const getPropertyById = (id: string): PropertyData | undefined => {
  const propertyMap: { [key: string]: PropertyData } = {
    "1": jardimPaulistaData,
    "2": vilaMadalenaData,
    "3": moemaData,
    "4": itacema366Data,
    "5": pinheirosData,
    "6": higienopolisData,
    "7": superLuxuosoItaimData,
    "8": apartamentoJardinsData,
  }

  return propertyMap[id]
}

// Função para buscar propriedade por slug
export const getPropertyBySlug = (slug: string): PropertyData | undefined => {
  const property = mockProperties.find((prop) => prop.slug === slug)
  return property?.propertyData
}

// Função para gerar todos os slugs (útil para generateStaticParams)
export const getAllPropertySlugs = (): string[] => {
  return mockProperties.map((property) => property.slug)
}