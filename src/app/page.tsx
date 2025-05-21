import Container from "@/components/container";
import Image from "next/image";
import { SecaoMissao } from "./missao/missao";
import { SecaoValores } from "./missao/valores";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-green-base">
      <Container className="pt-0" >
        {/* header da pagina */}
        <div className="relative w-full h-[250px] sm:h-[350px]  ">
          <Image
            src="/fundo.png"
            alt="fundo"
            className="w-full h-full object-cover opacity-50"
            layout="fill"
          />
          <div className="absolute top-4 left-4 text-white pl-2 pt-2 sm:pl-8 sm:pt-8">
            <h1 className="text-2xl font-bold mb-2 sm:text-5xl">Resgatando vidas,</h1>
            <h1 className="text-2xl font-bold mb-2 sm:text-5xl">preservando a</h1>
            <h1 className="text-2xl font-bold mb-2 sm:text-5xl">natureza</h1>
            <Link href="/seja-voluntario">
              <button className='btn-home mt-6'>
                Seja um voluntário
              </button>
            </Link>
          </div>
        </div>

        {/* Quem somos resumido */}
        <span>
          <h2 className="text-white font-bold text-4xl mt-4 mb-6">Quem somos</h2>
          <p className="text-white mt-4 mb-6">Foi fundado em 07 de setembro de 1994, criado por seis pessoas com elevado senso de solidariedade, praticantes de esportes radicais, atividades físicas e amantes incondicional da natureza</p>
        </span>
        {/* Atividades resumida */}
        {/* <div className="bg-orange-base">
          <h2>Atividades</h2>
        </div> */}
      </Container>
      {/* missao e valores */}
      <div>
        <div className="max-w-[1059px] mx-auto px-4 py-12">
          <h1 className="text-white font-bold text-5xl">Missão</h1>
          <h2 className="text-white font-thin text-3xl">Nossa missão</h2>
        </div>
        <br />
        <SecaoMissao />
        <SecaoValores />
      </div>
    </main>
  );
}
