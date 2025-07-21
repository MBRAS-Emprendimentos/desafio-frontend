import Image from "next/image";
import { propertyImages, propertys } from "../../../data/imovel";

export default function ImagesGaleryPage() {
    return (
        <div className="flex">
            {propertyImages.map((img,i) => <Image width={100} height={100} key={i} src={img} alt={''}/>)}
        </div>
    )
}