"use client";
import Link from "next/link";
import "@/styles/fonts.css";
import { Button } from "@/components/ui/button";
import { itacema366Data } from "../../../data/imovel";
import Image from "next/image";
import { socialNetwork } from "./viewModel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function MainView({ socialNetWork }: socialNetwork) {
  const handleValueChange = (url: string) => {
    url && window.open(url, "_blank");
  };

  return (
    <>
      <header className="bg-[#0162b1] h-20 flex justify-end items-center fixed top-0 left-0 w-full z-10 shadow-lg">
        <div className="mr-auto flex gap-5 p-3 max-lg:hidden ">
          <Image
            width={100}
            height={100}
            alt="Logo MBRAS"
            src={"https://www.mbras.com.br/mbras-logo-header-light.png"}
            className=""
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

      <main className="w-full h-screen relative overflow-hidden flex items-center justify-center ">
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
        <div className="w-4xl h-2/4 relative ml-10 flex flex-col items-center rounded-3xl text-[#95cade] max-md:mx-auto ">
          <h1 className="text-5xl montserrat my-3 max-lg:text-3xl max-md:text-xl">
            Referência em Altíssimo Padrão
          </h1>
          <p className="max-lg:text-xl max-lg:w-96 max-md:text-lg max-md:w-60">
            Há 10 anos criando conexões, a MBRAS oferece acesso às propriedades
            mais exclusivas do Brasil e do mundo.
          </p>
          <div className="bg-[#ffffff51] w-3xl h-36  flex justify-center items-center px-2 rounded-lg mt-20 max-lg:bg-none max-lg:w-80  ">
            <div className="bg-[#fff] w-[768px] h-32 rounded-lg text-black flex flex-col items-center justify-center">
              <p className="text-4xl">{itacema366Data.name}</p>
              <Separator className="bg-[#0162b1] my-3 mx-[12px] " />
              <Button className="bg-[#0162b1] hover:bg-[#014a8a] text-white">
                Saiba mais sobre o Imóvel
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
