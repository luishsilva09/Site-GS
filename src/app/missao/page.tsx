import Container from "@/components/container";
import { SecaoMissao } from "./missao";
import { SecaoValores } from "./valores";

export default function MissaoPage() {
    return (
        <main className="bg-green-base">
            <Container>
                <h1 className="text-white text-5xl font-semibold sm:text-7xl">MISSÃO</h1>
                <br />
                <h2 className="text-white text-3xl font-light max-w-2xl sm:text-5xl">Nossa missão e valores fundamentais</h2>
                <br />
                <div className="grid grid-cols-1 gap-8">
                    <div className="text-white font-normal text-justify">
                        <p className="mb-6">No Grupo Suçuarana, acreditamos no poder da cultura, da educação e da ação comunitária como instrumentos de transformação social.</p>
                        <p className="mb-6">Nossa missão é promover o desenvolvimento humano e fortalecer a cidadania, por meio de projetos culturais, educacionais e sociais que valorizem a identidade local, incentivem o protagonismo e ampliem oportunidades para crianças, jovens e adultos da nossa comunidade.</p>
                        <p className="mb-6">Através da arte, do conhecimento e da colaboração, buscamos construir pontes, despertar talentos e criar caminhos de esperança e dignidade para todos.</p>
                    </div>
                </div>

                <SecaoMissao />
            </Container>

            <SecaoValores />
        </main>
    );
}
