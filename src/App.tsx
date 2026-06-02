import './App.css'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-10">

      <div className="w-300 max-w-full flex flex-col">

        <section className="border-8 border-black p-12 md:p-16">

          <div className="flex flex-col gap-4">

            <div className="flex items-start gap-6">

              <div className="w-6 h-24 bg-indigo-900"></div>

              <div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                  Lorenzo
                </h1>

                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                  Calabrese Circelli
                </h1>
              </div>

            </div>

            <div className="ml-12">
              <p className="uppercase tracking-[0.3em] text-sm text-zinc-700">
                Estudante de Engenharia da Computação • Pesquisador
              </p>
            </div>

          </div>

        </section>

        <section className="flex flex-col md:flex-row">

          <div className="w-full md:w-1/2 border-l-8 border-r-4 border-b-8 border-black p-10 md:p-14">

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                Sobre
              </p>
            </div>

            <p className="text-lg leading-relaxed text-justify text-zinc-800">
              Estudante de Engenharia da Computação e pesquisador nas áreas de scientific machine learning (SciML), bioinformática estrutural e computação de alto desempenho (HPC). Desenvolvo pesquisas voltadas para modelagem computacional aplicada à saúde, incluindo estudos sobre arboviroses, genética estrutural e análise de proteínas baseada em dados laboratoriais e simulações computacionais.
            </p>
            <p className="text-lg leading-relaxed text-justify text-zinc-800">
              Minha atuação concentra-se no estudo e desenvolvimento de arquiteturas avançadas de aprendizado profundo para aplicações científicas e sistemas complexos, integrando redes neurais, modelagem matemática e computação de alto desempenho.
            </p>
            <p className="text-lg leading-relaxed text-justify text-zinc-800">
              Também participo do desenvolvimento de tecnologias educacionais voltadas para sustentabilidade ambiental.
            </p>

          </div>

          <div className="w-full md:w-1/2 border-l-4 border-r-8 border-b-8 border-black p-10 md:p-14">

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                Projetos Selecionados
              </p>
            </div>

            <div className="flex flex-col">

              <div className="group border-b border-black py-5 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white px-4 -mx-4">
                <h3 className="text-2xl font-bold">
                  Guardiões do Planeta
                </h3>

                <p className="text-sm opacity-70 mt-1">
                  Game de Sustentabilidade Ambiental
                </p>
              </div>

              <a href="https://github.com/LORENZOCIRCELLI/SubnauticaPDAPlus" className="group border-b border-black py-5 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white px-4 -mx-4">
                <h3 className="text-2xl font-bold">
                  SubnauticaPDAPlus
                </h3>

                <p className="text-sm opacity-70 mt-1">
                  Software em Java para Auxiliar no Jogo Subnautica
                </p>
              </a>

              <div className="group border-b border-black py-5 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white px-4 -mx-4">
                <h3 className="text-2xl font-bold">
                  Banking System API
                </h3>

                <p className="text-sm opacity-70 mt-1">
                  Spring Boot backend with authentication and roles
                </p>
              </div>

              <div className="group py-5 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white px-4 -mx-4">
                <h3 className="text-2xl font-bold">
                  Arduino Purchase System
                </h3>

                <p className="text-sm opacity-70 mt-1">
                  RFID, LCD and embedded interaction simulation
                </p>
              </div>

            </div>
            <div className="mt-8">
              <p className="font-bold bg-black text-white pt-3 pb-3 flex justify-center">Todos os meus Projetos</p>
            </div>
          </div>
        </section>

        <section className="border-x-8 border-b-8 border-black p-10 md:p-14">

          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
              Interesses de Pesquisa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Aprendizado de Máquina Científico
              </h3>

              <p className="leading-relaxed text-zinc-700">
                Desenvolvimento e estudo de arquiteturas avançadas
                de redes neurais aplicadas à modelagem científica,
                sistemas complexos e análise computacional de dados.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Proteômica Computacional
              </h3>

              <p className="leading-relaxed text-zinc-700">
                Pesquisa em bioinformática estrutural, análise de
                proteínas, genética computacional e modelagem molecular
                aplicada a pesquisas farmacológicas.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Computação de Alto Desempenho (HPC)
              </h3>

              <p className="leading-relaxed text-zinc-700">
                Computação paralela e infraestrutura
                de alto desempenho para simulações computacionais,
                processamento científico e treinamento de modelos.
              </p>
            </div>

          </div>

        </section>

        <section className="border-x-8 border-b-8 border-black">

          <div className="p-10 md:p-14 border-b-8 border-black">

            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Certificações
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Formação e Cursos Relevantes
            </h2>

          </div>

          <div className="flex flex-col">

            <div className="border-b-4 border-black p-8 md:p-10">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>
                  <h3 className="text-2xl font-bold">
                    Neural Networks and Deep Learning
                  </h3>

                  <p className="mt-2 text-zinc-600">
                    DeepLearning.AI • Coursera
                  </p>
                </div>

                <p className="text-sm font-bold">
                  2026
                </p>

              </div>

            </div>

            <div className="border-b-4 border-black p-8 md:p-10">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>
                  <h3 className="text-2xl font-bold">
                    HPC and Parallel Computing
                  </h3>

                  <p className="mt-2 text-zinc-600">
                    NVIDIA
                  </p>
                </div>

                <p className="text-sm font-bold">
                  2025
                </p>

              </div>

            </div>

            <div className="border-b-4 border-black p-8 md:p-10">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>
                  <h3 className="text-2xl font-bold">
                    Structural Bioinformatics
                  </h3>

                  <p className="mt-2 text-zinc-600">
                    Programa de Pesquisa
                  </p>
                </div>

                <p className="text-sm font-bold">
                  2026
                </p>

              </div>

            </div>

          </div>

          <Link
            to="/certifications"
            className="group flex items-center justify-between p-10 md:p-14 transition-all duration-300 hover:bg-black hover:text-white"
          >

            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 group-hover:text-zinc-300 mb-4">
                Arquivo
              </p>

              <h3 className="text-3xl md:text-4xl font-black">
                Ver todas as certificações
              </h3>
            </div>

            <p className="text-5xl font-black">
              →
            </p>

          </Link>

        </section>

        <section className="border-x-8 border-b-8 border-black">

          <div className="grid grid-cols-1 md:grid-cols-4">

            <a
              href="#"
              className="group border-b md:border-b-0 md:border-r-4 border-black p-10 transition-all duration-300 hover:bg-black hover:text-white"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 group-hover:text-zinc-300 mb-6">
                Pesquisa
              </p>

              <h3 className="text-3xl font-black leading-tight">
                Publicações
              </h3>

              <p className="mt-4 leading-relaxed opacity-80">
                Artigos, projetos científicos e pesquisa em andamento.
              </p>
            </a>

            <a
              href="#"
              className="group border-b md:border-b-0 md:border-r-4 border-black p-10 transition-all duration-300 hover:bg-black hover:text-white"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 group-hover:text-zinc-300 mb-6">
                Desenvolv.
              </p>

              <h3 className="text-3xl font-black leading-tight">
                Projetos
              </h3>

              <p className="mt-4 leading-relaxed opacity-80">
                Engenharia da Computação, Machine Learning e HPC.
              </p>
            </a>

            <a
              href="#"
              className="group border-b md:border-b-0 md:border-r-4 border-black p-10 transition-all duration-300 hover:bg-black hover:text-white"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 group-hover:text-zinc-300 mb-6">
                Profissional
              </p>

              <h3 className="text-3xl font-black leading-tight">
                Currículo
              </h3>

              <p className="mt-4 leading-relaxed opacity-80">
                Experiência acadêmica e conquistas.
              </p>
            </a>

            <a
              href="#"
              className="group p-10 transition-all duration-300 hover:bg-black hover:text-white"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 group-hover:text-zinc-300 mb-6">
                Contato
              </p>

              <h3 className="text-3xl font-black leading-tight">
                Conexão
              </h3>

              <p className="mt-4 leading-relaxed opacity-80">
                GitHub, LinkedIn, Lattes e Email.
              </p>
            </a>

          </div>

        </section>

        <section className="flex flex-col md:flex-row">

          <div className="w-full md:w-1/2 border-l-8 border-r-4 border-b-8 border-black p-10">

            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-5">
              Contato
            </p>

            <div className="space-y-3 flex flex-col text-bold text-lg text-shadow-zinc-600 tracking-[0.1em]">
              <a href="https://github.com/LORENZOCIRCELLI" className="text-lg">
                Github
              </a>

              <a href="https://www.linkedin.com/in/lorenzocalabresecircelli/" className="text-lg">
                LinkedIn
              </a>
            </div>

          </div>

          <div className="w-full md:w-1/2 border-l-4 border-r-8 border-b-8 border-black p-10 flex items-end justify-end">

            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              2026
            </p>

          </div>

        </section>

      </div>

    </div>
  )
}