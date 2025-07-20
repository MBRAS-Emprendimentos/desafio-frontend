import { AtSign, MapPin, Phone, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-black font-bold text-center mb-12">
            Fale Conosco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Number",
                value: "+55 11 5185 6999",
                type: "number",
                icon: <PhoneCall />,
              },
              {
                title: "Enterprise WhatsApp",
                value: "+55 11 97799 8888",
                type: "appNumber",
                icon: <Phone />,
              },
              {
                title: "Enterprise Address",
                value:
                  "Av. Magalhães de Castro 4.800 Park Tower – 23° andarCidade Jardim - São Paulo - SP05676-120 Brasil",
                type: "addess",
                icon: <MapPin />,
              },
              {
                title: "Enterprise email",
                value: "contato@mbras.com.br",
                type: "email",
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
                <Link
                  href={
                    service.type === "number"
                      ? `tel${service.value}`
                      : service.type === "appNumber"
                      ? `whatsapp://send?phone=${service.value.trim()}`
                      : service.type === "address"
                      ? `https://www.google.com/maps/place/MBRAS+-+Im%C3%B3veis+de+alto+padr%C3%A3o+em+S%C3%A3o+Paulo/@-23.6016177,-46.6984674,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce50dcc7f4358f:0xc7b297d77701de4a!8m2!3d-23.6016177!4d-46.6984674!16s%2Fg%2F11c2kgnwfk?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D`
                      : service.type === "email"
                      ? `mailto:${service.value}`
                      : ""
                  }
                  className="text-gray-600"
                >
                  {service.value}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white p-5">
        <div className="container mx-auto px-4 flex ">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MBRAS - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  );
}
