import CardInfo from "@/components/cardInfo";
import Container from "@/components/container";

const valores = [
    {
        className: "bg-orange-base",
        icone1: "icones/Love.svg",
        titulo: "RESPEITO",
        texto: "Valorizamos a dignidade de cada pessoa, respeitando diferenças, histórias e trajetórias individuais e coletivas.",
    },
    {
        className: "bg-green-base",
        icone1: "icones/Handshake.svg",
        titulo: "COMPROMISSO",
        texto: "Nos dedicamos de forma contínua à transformação da realidade social por meio de ações concretas e inclusivas.",
    },
    {
        className: "bg-orange-base",
        icone1: "icones/justice.svg",
        titulo: "EQUIDADE",
        texto: "Buscamos justiça social promovendo oportunidades iguais para todos, especialmente para os mais vulneráveis.",
    },
    {
        className: "bg-green-base",
        icone1: "icones/Puzzle.svg",
        titulo: "COLABORAÇÃO",
        texto: "Acreditamos na força do trabalho em conjunto — entre pessoas, comunidades e organizações — para gerar impacto duradouro.",
    },
    {
        className: "bg-orange-base",
        icone1: "icones/Glass.svg",
        titulo: "TRANSPARÊNCIA",
        texto: "Prezamos pela clareza nas nossas ações, recursos e comunicações, criando relações de confiança com todos os envolvidos.",
    },
    {
        className: "bg-green-base",
        icone1: "icones/Community.svg",
        titulo: "AMOR PELA COMUNIDADE",
        texto: "Temos orgulho de nossas raízes e atuamos com afeto, cuidado e dedicação por aqueles que fazem parte da nossa história.",
    },
];

export function SecaoValores() {
    return (
        <div className="gradient min-h-[900px] w-full">
            <Container>
                <h1 className="text-white font-bold text-5xl">Valores</h1>
                <h2 className="text-white font-thin text-3xl">O que acreditamos, praticamos.</h2>
                <br />
                <div className="flex flex-wrap justify-center gap-4">
                    {valores.map((valor, index) => (
                        <CardInfo key={index} {...valor} />
                    ))}
                </div>
            </Container>
        </div>
    )
}