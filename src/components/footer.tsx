export function Footer() {
    return (
        <footer className="bg-green-base text-white bottom-0 left-0 right-0">
            <div className="max-w-[900px] mx-auto px-6 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Coluna 1: Contato */}
                    <div className="mb-6 text-sm">
                        <p className="font-semibold text-lg">Contato</p>
                        <p>Unidade Nacional São José dos Campos – SP<br />
                            melo@sussuarana.org.br<br />
                            MELO (12) 98845-4044
                        </p><br/>
                        <p>Unidade Regional Manaus - AM<br />
                            regional.manaus@sussuarana.org.br<br />
                            Haldane (92) 92 9135-0973
                        </p><br/>
                        <p>Unidade Regional Sorocaba – SP<br />
                            contato@sussuarana.org.br
                        </p>
                    </div>

                    {/* Coluna 2: Links */}
                    <div className="mb-6 text-sm">
                        <p className="font-semibold text-lg">Links</p>
                        <ul>
                            <li><a href="#" className="hover:underline">Estatuto</a></li>
                            <li><a href="#" className="hover:underline">Regimento Interno</a></li>
                            <li><a href="#" className="hover:underline">Transparência</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Ícones */}
                    <div className="mb-6 text-sm">
                        <p className="font-semibold text-lg">Redes Sociais</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-400">Facebook</a>
                            <a href="#" className="text-white hover:text-gray-400">Instagram</a>
                            <a href="#" className="text-white hover:text-gray-400">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <p className="font-thin text-center py-4 text-sm">
                    Todas as informações contidas neste website são de caráter informativo. Cópias, para publicações em outras páginas web ou qualquer outro meio de divulgação, só estarão autorizadas mediante contato prévio e análise dos diretores da instituição. Grupo Suçuarana ® - Copyright © 2016 Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
