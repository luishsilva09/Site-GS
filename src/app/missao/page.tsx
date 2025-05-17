import CardInfo from "@/components/cardInfo";
import Container from "@/components/container";

const missoes = [
    {
        className: "bg-green-base",
        icone1: "icones/life.svg",
        icone2: "icones/Toolbox.svg",
        titulo: "PREPARO PARA SITUAÇÕES DE RISCO",
        texto: "Capacitamos pessoas para agir com responsabilidade em emergências, promovendo autocuidado, apoio mútuo e resposta eficiente.",
        border: true,
    },
    {
        className: "bg-orange-base",
        icone1: "icones/siren.svg",
        icone2: "icones/Climbing.svg",
        titulo: "AÇÕES DE RESGATE E PREVENÇÃO",
        texto: "Realizamos treinamentos e atividades voltadas ao salvamento em áreas naturais, com foco na segurança, técnica e cuidado com a vida.",
    },
    {
        className: "bg-green-base",
        icone1: "icones/Tree.svg",
        icone2: "icones/Recycle.svg",
        titulo: "CONSCIÊNCIA SOCIOAMBIENTAL",
        texto: "Atuamos com foco na preservação ambiental e no desenvolvimento sustentável, promovendo educação ecológica e ações responsáveis.",
        border: true,
    },
];

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
        icone1: "Tree.svg",
        icone2: "icones/justice.svg",
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
        icone1: "Tree.svg",
        icone2: "icones/Community.svg",
        titulo: "AMOR PELA COMUNIDADE",
        texto: "Temos orgulho de nossas raízes e atuamos com afeto, cuidado e dedicação por aqueles que fazem parte da nossa história.",
    },
];

export default function MissaoPage() {
    return (
        <main className="bg-green-base">
            <Container>
                <h1 className="text-white text-7xl font-semibold">MISSÃO</h1>
                <br />
                <h2 className="text-white text-5xl font-light max-w-2xl">Nossa missão e valores fundamentais</h2>
                <br />
                <div className="grid grid-cols-1 gap-8">
                    <div className="text-white font-normal text-justify">
                        <p className="mb-6">No Grupo Suçuarana, acreditamos no poder da cultura, da educação e da ação comunitária como instrumentos de transformação social.</p>
                        <p className="mb-6">Nossa missão é promover o desenvolvimento humano e fortalecer a cidadania, por meio de projetos culturais, educacionais e sociais que valorizem a identidade local, incentivem o protagonismo e ampliem oportunidades para crianças, jovens e adultos da nossa comunidade.</p>
                        <p className="mb-6">Através da arte, do conhecimento e da colaboração, buscamos construir pontes, despertar talentos e criar caminhos de esperança e dignidade para todos.</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {missoes.map((missao, index) => (
                        <div key={index} className={missao.border ? "border-gradient" : ""}>
                            <CardInfo {...missao} />
                        </div>
                    ))}
                </div>
            </Container>

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
        </main>
    );
}
