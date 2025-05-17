import Container from "@/components/container";
import { FormVoluntario } from "./formVoluntario";
import Image from "next/image";

export default function Atividades() {
    return (
        <main className="bg-green-base">
            <Container>
                <div className="relative">
                    <h1 className="text-5xl text-white md:text-7xl font-semibold z-10 relative">
                        SEJA UM VOLUNTÁRIO
                    </h1>

                    <Image
                        src="/personagem.png"
                        width={236}
                        height={354}
                        alt="personagem"
                        className="hidden md:block absolute right-0 top-[-55px] z-20"
                    />

                    <h2 className="text-3xl text-white md:text-5xl font-light max-w-2xl mt-10 z-0 relative">
                        Junte-se a nós para salvar vidas e preservar a natureza
                    </h2>
                </div>
            </Container>

            <br />
            <div className="bg-orange-base">
                <Container>
                <h3 className="text-green-base font-bold text-4xl">Por que ser um voluntário?</h3>
                <ul className="list-disc pl-6 text-white text-xl">
                    <br/>
                    <li>Contribua para uma causa importante</li>
                    <li>Desenvolva suas habilidades</li>
                    <li>Faça a diferença na comunidade</li>
                </ul>
                <br />
                <h3 className="text-green-base font-bold text-4xl">O que precisa para ser um voluntario do Grupo Suçuarana?</h3>
                <ul className="list-disc pl-6 text-white text-xl">
                        <br />
                    <li>Maior de 18 anos</li>
                    <li>Ter espirito solidário e disciplina</li>
                    <li>Gostar da natureza e das adversidades do ambiente de selva</li>
                </ul>
                    <br />
                <div>
                    <FormVoluntario ></FormVoluntario>
                </div>
                </Container>
            </div>
        </main>
    )
}