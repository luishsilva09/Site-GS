import Container from "@/components/container";
import Image from "next/image";
import { SecaoMissao } from "./missao/missao";
import { SecaoValores } from "./missao/valores";
import Link from "next/link";

const atividades = [
  {
    icon: 'icones/Mountain.svg',
    title: 'Estágio Básico de Montanha ( E.B.M.)',
    description: 'Treinamento focando em técnicas de montanha.',
  },
  {
    icon: 'icones/Plant.svg',
    title: 'Educação Ambiental',
    description: 'Serviço prestado à sociedade visando um futuro sustentável',
  },
  {
    icon: 'icones/Jungle.svg',
    title: 'Estágio básico de Adaptação ao Ambiente de Selva ( EB.A.S.)',
    description: 'Capacitação para sobrevivência em ambiente de selva',
  },
];

export default function Home() {
  return (
    <main className="bg-green-base">
      <div className="relative">
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

        </Container>
        {/* Atividades resumida */}
        <div className="bg-orange-base sm:gradient-left">
          <Container className="grid gap-9">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Atividades */}
              <div className="w-full lg:w-2/3 grid gap-9">
                <h2 className="text-green-base font-bold text-4xl mt-2 mb-6">Atividades</h2>
                {atividades.map((item, idx) => (
                  <div key={idx} className="flex m-1.5">
                    <div className="relative bg-green-base min-h-20 min-w-20 max-h-20 max-w-20 rounded-2xl">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="p-2"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-green-base font-bold text-xl sm:text-2xl">{item.title}</p>
                      <p className="text-green-base">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </Container>
        </div>
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
        <div className="lg:absolute lg:right-30 lg:top-[30rem] lg:w-[400px] bg-orange-base p-6 rounded-xl shadow-lg z-10">
          <h3 className="text-green-base font-bold text-3xl mb-4">Seja um voluntário</h3>
          <ul className="list-disc pl-6 text-green-base text-1 mb-5">
            <br />
            <li>Maior de 18 anos</li>
            <li>Ter espirito solidário e disciplina</li>
            <li>Gostar da natureza e das adversidades do ambiente de selva</li>
          </ul>
          <form className="flex flex-col">
            <input type="text" name="name" id="name" placeholder="Nome" />
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <input type="text" name="celular" id="celular" placeholder="Celular" />
            <input type="text" name="cidade" id="cidade" placeholder="Cidade" />
            <button>Tenho interesse</button>
          </form>
        </div>
      </div>
    </main>
  );
}
