import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white text-black px-3 py-1 rounded text-sm font-bold inline-block mb-4">MBRAS</div>
            <p className="text-gray-300 mb-4">
              Referência em imóveis de alto padrão. Conectamos você às melhores oportunidades do mercado imobiliário.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/imoveis" className="text-gray-300 hover:text-white">
                  Imóveis
                </Link>
              </li>
              <li>
                <Link href="/contatos" className="text-gray-300 hover:text-white">
                  Contatos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>(11) 9 7799-8888</li>
              <li>contato@mbras.com.br</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MBRAS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
