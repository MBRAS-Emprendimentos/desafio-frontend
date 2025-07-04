import { properties } from "@/data/imovel";
import { CarouselImages } from "@/app/components/carousel/CarouselImages";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PropertyData } from "@/types/special";
import { MapPinHouse} from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import styles from "./page.module.css"
import { GaleriaFotos } from "@/app/components/galery/Galery";
import { ContatoForm } from "@/app/components/form/Form";
import { FaWhatsapp } from "react-icons/fa";


interface Props {
    params: {
        slug: string
    }
}

export default async function Imovel({params}: Props){
    const imovel: PropertyData | undefined = properties.find((p) => p.slug === params.slug)
    if (!imovel){
        return notFound()
    }

    return(
        <main className="">
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md p-3">
                <Image
                    src={'/images/logo.png'}
                    alt="Logo MBRAS"
                    width={90}
                    height={80}
                />
            </header>

            <div className="h-[80px]"></div>

            <section className=" flex flex-col justify-center items-center m-5 mb-8">
                <div className="flex items-center flex-col gap-1">
                    <p className={styles.bemVindo}>
                        Bem-vindo ao
                    </p>
                    <p className={styles.imovelName}>
                        &nbsp; {imovel.name}
                    </p>
                    
                </div>
            </section>
            <section className={`${styles.carrouselContainer} w-full `}>
                <CarouselImages images={imovel.images} />
            </section>


            <section className="w-full flex flex-col justify-center  items-center bg-[#081c34] px-8 py-16 gap-10 ">
                <div className="flex flex-col items-center justify-center   bg-transparent rounded-md  md:mb-16">
                    <h2 className={styles.imoveltagline}>
                        {imovel.tagline}
                    </h2>
                </div>
                <div className="w-full flex flex-col-reverse md:flex-row items-center justify-around gap-10">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <MapPinHouse className="text-white w-12 h-12 md:w-20 md:h-20" />
                        <p className="text-white font-extralight text-2xl md:text-4xl italic text-center">
                        {imovel.location}
                        </p>
                    </div>
                    <ul className="flex flex-col gap-2 text-white text-center text-left">
                        {imovel.about.highlights.map((h, index) => (
                        <li key={index} className={styles.highlights}>
                            ◦ {h}
                        </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="flex flex-row justify-center bg-white p-10">

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {imovel.neighborhoodDifferentials.map((item, index) => (
                    <li key={index} className={styles.neighborhoodDifferentials} >
                    <Card className={`${item.iconBackground} hover:shadow-md transition-shadow`}>
                        <CardContent className="p-4 flex gap-4 items-center">
                        <div className={`p-3 rounded-full ${item.iconBackground}`}>
                            <item.icon className={`${item.iconColor} w-6 h-6`} />
                        </div>
                        <div>
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        </CardContent>
                    </Card>
                    </li>
                ))}
                </ul>
            </section>

            <section className="flex flex-col items-center justify-center px-4 py-12 bg-[#081c34] text-white font-extralight">
                <div className="w-full max-w-3xl flex flex-col items-start gap-5">
                    <h1 className="text-2xl md:text-4xl italic">Sobre</h1>
                    <p className="text-base md:text-lg">{imovel.about.description}</p>
                </div>

                <div className="w-full max-w-3xl mt-10">
                    <ul className="flex flex-col md:flex-row  gap-4 justify-between">
                    {imovel.characteristics.map((i, index) => (
                        <li key={index} className={styles.characteristics} style={{ flex: "1 1 45%" }}>
                        <Card className="bg-[#ffffff71] hover:bg-[#ffffffb5]">
                            <CardContent className="flex items-center gap-4 p-4">
                            <i.icon className="w-6 h-6 text-black" />
                            <div className="flex flex-col items-start">
                                <strong>{i.label}</strong>
                                <p>{i.value}</p>
                            </div>
                            </CardContent>
                        </Card>
                        </li>
                    ))}
                    </ul>
                </div>
                </section>

            <section className="w-full h-full">
                <GaleriaFotos
                    images={imovel.images}                    
                />

            </section>

            <section className="w-full flex flex-col md:flex-row justify-around items-start gap-10 bg-[#081c34] px-4 py-12">

                <div className="flex flex-col items-center w-full max-w-lg text-center">
                    <p className="text-white text-xl font-light italic mb-12">Receba uma apresentação</p>
                    <ContatoForm />
                </div>


                <div className="flex flex-col items-center w-full max-w-sm text-center pt-[52px] md:pt-0">
                    <p className="text-white text-xl font-light italic mb-12">Ou agende uma visita!</p>

                    <a
                    href={`https://wa.me/${imovel.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white px-6 py-3 rounded-lg transition"
                    >
                        <FaWhatsapp className="w-24 h-24 hover:w-30 hover:h-30 transition-all text-green-600" />
                    </a>
                </div>
            </section>





                <section>
                </section>




            

            
         

        </main>
    )
}

export async function generateStaticParams() {
  return properties.map((p) => ({
    slug: p.slug,
  }))
}
