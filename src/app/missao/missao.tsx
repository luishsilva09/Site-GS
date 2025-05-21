import CardInfo from "@/components/cardInfo";

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

export function SecaoMissao() {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {missoes.map((missao, index) => (
                <div key={index} className={missao.border ? "border-gradient" : ""}>
                    <CardInfo {...missao} />
                </div>
            ))}
        </div>
    )
}