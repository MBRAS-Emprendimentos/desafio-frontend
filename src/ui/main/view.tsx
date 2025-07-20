"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PropertyCard } from "@/components/ui/propertyCard";
import { socialNetwork } from "./viewModel";
import { propertys } from "../../../data/imovel";
import { PropertyData } from "@/models/propertyData";
import {
  AtSign,
  LocateFixed,
  LocateIcon,
  LocateOff,
  LocationEdit,
  LocationEditIcon,
  LucideLocate,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";

export default function MainView({ socialNetWork }: socialNetwork) {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");

  const filteredProperties = propertys.filter((value) => {
    const matchesSearch =
      value.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      value.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      propertyType === "all" || (propertyType === "tosell" && value.toSell);
    return matchesSearch && matchesType;
  });
  const handleValueChange = (url: string) => {
    url && window.open(url, "_blank");
  };

  return (
    <>
      <header className="bg-[#000] h-20 flex justify-end items-center  top-0 left-0 w-full z-10 shadow-lg">
        <div className="mr-auto flex gap-5 p-3 max-lg:hidden ">
          <Image
            width={100}
            height={100}
            alt="Logo MBRAS"
            src={"https://www.mbras.com.br/mbras-logo-header-light.png"}
            className="bg-[#fff] p-3 rounded-lg"
          />
        </div>

        <ul className="flex gap-8 mr-3 max-[400px]:gap-1 max-[450px]:gap-3 max-lg:mx-auto">
          <li>
            <Select onValueChange={handleValueChange}>
              <SelectTrigger className="text-white">
                <SelectValue placeholder="Redes Sociais" />
              </SelectTrigger>
              <SelectContent>
                {socialNetWork.map((value, i) => (
                  <SelectItem key={i} value={value.value}>
                    {value.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </li>
          <li>
            <Button variant="ghost" className="border">
              <Link href={"#"}>Galeria de Fotos</Link>
            </Button>
          </li>
          <li>
            <Button variant={"ghost"} className="border">
              <Link href={"#"}>Contato</Link>
            </Button>
          </li>
        </ul>
      </header>
      <div className="min-h-screen">
        <section className="relative h-[80vh]">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
            loop
            autoPlay
            muted
          >
            <source
              src={
                "https://img.mbras.com.br/site/hero/vd-hero-hor.mp4?format=mp4&quality=75"
              }
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="container mx-auto px-4 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Referência em Altíssimo Padrão
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Há mais de uma década no mercado, a MBRAS conecta você a
                propriedades exclusivas no Brasil e ao redor do mundo.
              </p>
              <div className="flex gap-3">
                <Button size="lg">
                  <Link href="/properties">Criar Conta</Link>
                </Button>
                <Button size="lg">
                  <Link href="/properties">Fazer Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 -mt-16 relative z-10">
          <div className="bg-white p-6 rounded-lg shadow-xl grid grid-cols md:grid-cols-3 gap-4 text-[#000]">
            <Input
              placeholder="Buscar por localização ou pelo nome da propriedade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas Propriedades</SelectItem>
                <SelectItem value="tosell">Para vender</SelectItem>
              </SelectContent>
            </Select>
            <Button>Buscar</Button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Imóveis em Destaque</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property: PropertyData) => (
              <PropertyCard
                key={property.code}
                property={property}
                urlSrc={
                  property.name === "ITACEMA"
                    ? property.images[0]
                    : property.name === "RESIDENCIAL JARDIM PAULISTA"
                    ? property.images[0]
                    : property.images[0]
                }
              />
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl text-black font-bold text-center mb-12">
              Fale Conosco
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Enterprise Number",
                  value: "55 11 5185 6999",
                  icon: <PhoneCall />,
                },
                {
                  title: "Enterprise WhatsApp",
                  value: "+55 11 97799 8888",
                  icon: <Phone/>,
                },
                {
                  title: "Enterprise Address",
                  value:
                    "Av. Magalhães de Castro 4.800 Park Tower – 23° andarCidade Jardim - São Paulo - SP05676-120 Brasil",
                  icon: <MapPin/>,
                },
                {
                  title: "Enterprise email",
                  value: "contato@mbras.com.br",
                  icon: <AtSign />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-4xl mb-4 text-black">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
