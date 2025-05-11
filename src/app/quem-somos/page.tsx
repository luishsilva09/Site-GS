export default function QuemSomosPage() {
    return (
        <main className="bg-green-base">
            <div className="max-w-[900px] mx-auto px-4 py-12 min-h-screen">
                <div>
                    <h1 className="text-white text-7xl font-semibold">QUEM SOMOS</h1>
                    <br />
                    <h2 className="text-white text-5xl font-light w-2xl">Conheça a história por trás do Grupo Suçuarana</h2>
                    <br />
                    <h3 className="text-orange-base font-medium text-4xl">Fundado em 1994</h3>
                    <br />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Coluna de Texto */}
                        <div className="text-white font-normal text-justify">
                            <p className="mb-6">
                                Criado por seis pessoas com elevado senso de solidariedade, praticantes de esportes radicais, atividades físicas e amantes incondicional da natureza.
                            </p>
                            <p className="mb-6">
                                Foi registrado no Cartório de Registro Civil das Pessoas Jurídicas de São José dos Campos – SP, com a denominação de “GRUPO SUÇUARANA”; cadastrou-se na Receita Federal como sendo uma Associação sem Fins Lucrativos. Apolítico e isento de preferências de credo, cor, status sociais e afins.
                            </p>
                            <p className="mb-6">
                                Em uma eleição interna entre os membros fundadores, em homenagem ao maior felino comprovadamente existente na região de atuação do Grupo. Suçuarana ou Suassu’rana, em tupi, é o nome dado pelos indígenas ao segundo maior felino da fauna brasileira, que traduzido para o português quer dizer: “felino que tem a cor dos pelos parecido com a do veado mateiro.”
                            </p>
                            <p className="mb-6">
                                Os membros possuem conhecimentos e experiências em assuntos como: Sobrevivência na Selva, Montanhismo, Pára-quedismo, Espeleologia, Pronto-Socorrismo, Salvamento Terrestre e em Altura, Combate a Incêndios, Animais Peçonhentos, Caminhadas Ambientais, Ecologia, Operações Fluviais, Mergulho Autônomo, Rafting, Paraglider, Orientação, etc.
                            </p>
                            <p className="mb-6">
                                Esses conhecimentos foram adquiridos em entidades civis e militares, tais como: CIGS, Brigada Pára-quedista, 6º BIL, TG SJC e Suzano – SP, ESAO, CIAVEX e 11º Batalhão de Montanha – Exército Brasileiro, 7º/8º GAv – Força Aérea Brasileira, Corpo de Bombeiros, Polícia Florestal e COE – Polícia Militar do Estado de São Paulo, Cruz Vermelha Brasileira, Defesa Civil do Estado de São Paulo, Defesa Civil de SJC – SP, Instituto Butantã, SESC SJC – SP, INFRAERO SJC – SP, Núcleo de Formação de Selva e muitas outras.
                            </p>
                        </div>

                        {/* Coluna de Imagens */}
                        <div className="space-y-6">
                            <img
                                src="/img1.jpg"
                                alt="Grupo Suçuarana"
                                className="w-full h-auto rounded-lg shadow-lg max-w-[350px]"
                            />
                            <img
                                src="img2.webp"
                                alt="Registro do Grupo"
                                className="w-full h-auto rounded-lg shadow-lg max-w-[350px]"
                            />
                            <img
                                src="img3.jpg"
                                alt="Suçuarana"
                                className="w-full h-auto rounded-lg shadow-lg max-w-[350px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
