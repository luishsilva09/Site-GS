import CardAtividades from "@/components/cardAtividades";
import Container from "@/components/container";
import Image from "next/image";

const cards = [
    {
        icone: "icones/Mountain.svg",
        titulo: "Estágio básico de montanha (E.B.M.)",
        texto: "Treinamento focando em técnicas de montanha.",
    },
    {
        icone: "icones/Plant.svg",
        titulo: "Educação Ambiental",
        texto: "Serviço prestado à sociedade visando um futuro sustentável",
    },
    {
        icone: "icones/Jungle.svg",
        titulo: "Estágio básico de adaptação ao ambiente de selva (EB.A.S.)",
        texto: "Capacitação para sobrevivência em ambiente de selva",
    },
    {
        icone: "icones/Toolbox.svg",
        titulo: "Estágio de admissão Grupo Suçuarana (E.A.G.S.)",
        texto: "Integração inicial ao grupo por meio de atividades práticas.",
    },
];

const imagens = ["/Montanha.png", "/Acampamento.png", "/img5.png"];

export default function Atividades() {
    return (
        <main className="bg-orange-base">
            <Container>
                <h1 className="text-5xl text-white font-bold md:text-7xl mb-10">ATIVIDADES</h1>

                <div className="flex flex-col md:flex-row md:items-start md:gap-10">
                    {/* Cards */}
                    <div className="flex flex-col gap-5 md:w-1/2">
                        {cards.map((card, index) => (
                            <CardAtividades
                                key={index}
                                icone={card.icone}
                                titulo={card.titulo}
                                texto={card.texto}
                            />
                        ))}

                        {/* Imagens no mobile */}
                        <div className="flex flex-col gap-4 mt-6 md:mt-0 justify-center items-center md:hidden">
                            {imagens.map((src, index) => (
                                <Image key={index} src={src} alt="imagem" width={315} height={315} />
                            ))}
                        </div>
                    </div>

                    {/* Imagens no desktop */}
                    <div className="hidden md:flex flex-col gap-4 md:w-1/2">
                        {imagens.map((src, index) => (
                            <Image key={index} src={src} alt="imagem" width={315} height={315} />
                        ))}
                    </div>
                </div>
            </Container>
        </main>
    );
}
