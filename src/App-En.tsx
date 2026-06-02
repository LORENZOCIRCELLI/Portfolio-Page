import './App.css'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-10">
      <div className="w-300 max-w-full flex flex-col">

        {/* Header */}
        <section className="border-8 border-black p-12 md:p-16">

          <div className="flex flex-col gap-4">
            <div className="flex items-end justify-end">
              <p className="text-sm text-blue-900 font-bold">
                <Link to="/" className="hover:underline">
                  PT
                </Link>
              </p>
            </div>
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
                Computer Engineering Student • Researcher
              </p>
            </div>

            <div className="ml-12">
              <p className="text-sm text-zinc-700">
                <a href="https://lattes.cnpq.br/9066461369543994" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Lattes
                </a>
                &nbsp;&nbsp;•&nbsp;&nbsp;
                <a href="https://github.com/LORENZOCIRCELLI" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* GBI */}
        <section className="border-x-8 border-b-8 border-black">
          <a
            href="https://sites.usp.br/gbi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-between p-6 md:p-10 transition-all duration-300 hover:bg-black hover:text-white"
          >
            <h3 className="text-xs md:text-sm uppercase tracking-[0.2em] text-center flex-1">
              Member of the Bioinformatics Group at the Ribeirão Preto Medical School (FMRP-USP)
            </h3>

            <p className="text-xs mt-3 text-justify text-zinc-800">
              Genetics Department
            </p>
          </a>
        </section>

        {/* About and Selected Projects */}
        <section className="flex flex-col md:flex-row">

          <div className="w-full md:w-1/2 border-l-8 border-r-4 border-b-8 border-black p-10 md:p-14">

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                About
              </p>
            </div>

            <p className="text-lg leading-relaxed text-zinc-800">
              Computer Engineering student and researcher in the areas of scientific machine learning (SciML), structural bioinformatics, and high-performance computing (HPC).
            </p>

            <div className="mb-8 mt-8">
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                Development
              </p>
            </div>

            <p className="text-lg leading-relaxed text-zinc-800">
              Research focused on computational modeling applied to health, including studies on arboviruses, structural genetics, and protein analysis based on laboratory data and computational simulations.
            </p>

            <br />

            <p className="text-lg leading-relaxed text-zinc-800">
              Advanced deep learning architectures for scientific applications and complex systems, integrating neural networks, mathematical modeling, and high-performance computing.
            </p>

            <br />

            <p className="text-lg leading-relaxed text-zinc-800">
              Educational technologies focused on environmental sustainability.
            </p>

          </div>

          <div className="w-full md:w-1/2 border-l-4 border-r-8 border-b-8 border-black p-10 md:p-14">

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                Selected Projects
              </p>
            </div>

            <div className="flex flex-col">

              <div className="group border-b border-black py-5 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white px-4 -mx-4">
                <h3 className="text-2xl font-bold">
                  Guardians of the Planet
                </h3>
                <p className="text-sm opacity-70 mt-1">
                  Environmental Sustainability Game
                </p>
              </div>

              <div className="group border-b border-black py-5 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white px-4 -mx-4">
                <h3 className="text-2xl font-bold">
                  IoT Weather Station
                </h3>
                <p className="text-sm opacity-70 mt-1">
                  Embedded systems with IoT and real-time monitoring
                </p>
              </div>

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
          </div>
        </section>

        {/* English */}
        <section className="border-x-8 border-b-8 border-black">
          <div className="flex items-center justify-center p-4 md:p-6 transition-all duration-300 hover:bg-black hover:text-white">

            <h3 className="text-xs uppercase tracking-[0.3em] text-center">
              Fluent English (reading, writing, and speaking)
            </h3>

          </div>
        </section>

        {/* Research Interests */}
        <section className="border-x-8 border-b-8 border-black p-10 md:p-14">

          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
              Research Interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Scientific Machine Learning
              </h3>
              <p className="leading-relaxed text-zinc-700">
                Development and study of advanced neural network architectures applied to scientific modeling, complex systems, and computational data analysis.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">
                Computational Proteomics
              </h3>
              <p className="leading-relaxed text-zinc-700">
                Research in structural bioinformatics, protein analysis, computational genetics, and molecular modeling applied to pharmaceutical research.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">
                High-Performance Computing (HPC)
              </h3>
              <p className="leading-relaxed text-zinc-700">
                Parallel computing and high-performance infrastructure for scientific simulations, data processing, and model training.
              </p>
            </div>

          </div>

        </section>

        {/* Core Projects */}
        <section className="border-x-8 border-b-8 border-black">

          <div className="p-10 md:p-14 border-b-8 border-black">

            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Major Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Core Projects
            </h2>

          </div>

          <div className="flex flex-col">

            <div className="border-b-4 border-black">

              <Link
                to="/certifications"
                className="group flex items-center justify-between p-8 md:p-12 transition-all duration-300 hover:bg-black hover:text-white"
              >
                <div>
                  <h3 className="text-2xl font-bold">
                    SciML Platform for Biological Systems Simulation
                  </h3>

                  <p className="mt-2 text-zinc-600">
                    Platform that builds hybrid (physics + neural) models to simulate complex biological systems
                  </p>
                </div>

                <p className="text-sm font-bold">
                  2026
                </p>

              </Link>

            </div>

            <div className="border-black">

              <Link
                to="/certifications"
                className="group flex items-center justify-between p-8 md:p-12 transition-all duration-300 hover:bg-black hover:text-white"
              >
                <div>
                  <h3 className="text-2xl font-bold">
                    Distributed Cloud Computational Engine
                  </h3>

                  <p className="mt-2 text-zinc-600">
                    Particle simulation platform based on high-performance cloud computing
                  </p>
                </div>

                <p className="text-sm font-bold">
                  2026
                </p>

              </Link>

            </div>

          </div>

        </section>

        {/* Education */}
        <section className="border-x-8 border-b-8 border-black">

          <div className="p-10 md:p-14 border-b-8 border-black">

            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-6">
              Certifications
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Education and Relevant Courses
            </h2>

          </div>

          <div className="flex flex-col">

            <div className="border-b-4 border-black">

              <Link
                to=""
                className="group flex items-center justify-between p-8 md:p-12 transition-all duration-300 hover:bg-black hover:text-white"
              >
                <div>
                  <h3 className="text-2xl font-bold">
                    Bachelor's Degree in Computer Engineering
                  </h3>

                  <p className="mt-2 text-zinc-600">
                    University of Ribeirão Preto
                  </p>
                </div>

                <p className="text-sm font-bold">
                  2024–2029
                </p>

              </Link>

            </div>

            <div className="border-b-4 border-black">

              <Link
                to="/certifications"
                className="group flex items-center justify-between p-8 md:p-12 transition-all duration-300 hover:bg-black hover:text-white"
              >
                <div>
                  <h3 className="text-2xl font-bold">
                    AI Agent Engineering Career
                  </h3>

                  <p className="mt-2 text-zinc-600">
                    Alura
                  </p>
                </div>

                <p className="text-sm font-bold">
                  2026
                </p>

              </Link>

            </div>

            <div className="border-b-4 border-black">

              <Link
                to="/certifications"
                className="group flex items-center justify-between p-8 md:p-12 transition-all duration-300 hover:bg-black hover:text-white"
              >
                <div>
                  <h3 className="text-2xl font-bold">
                    Imperial College London Courses
                  </h3>

                  <p className="mt-2 text-zinc-600">
                    Imperial College London – Coursera
                  </p>
                </div>

                <p className="text-sm font-bold">
                  2026 – Present
                </p>

              </Link>

            </div>

          </div>

          <Link
            to="/certifications"
            className="group flex items-center justify-between p-10 md:p-10 transition-all duration-300 hover:bg-black hover:text-white"
          >

            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 group-hover:text-zinc-300 mb-4">
                Archive
              </p>

              <h3 className="text-3xl md:text-4xl font-black">
                View all certifications
              </h3>
            </div>

            <p className="text-5xl font-black">
              →
            </p>

          </Link>

        </section>

        {/* Publications, Projects and Resume */}
        <section className="border-x-8 border-b-8 border-black">

          <div className="grid grid-cols-1 md:grid-cols-3">

            <a
              href="#"
              className="group border-b md:border-b-0 md:border-r-4 border-black p-10 transition-all duration-300 hover:bg-black hover:text-white"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 group-hover:text-zinc-300 mb-6">
                Research
              </p>

              <h3 className="text-3xl font-black leading-tight">
                Publications
              </h3>

              <p className="mt-4 leading-relaxed opacity-80">
                Articles, studies, scientific production, and ongoing research.
              </p>
            </a>

            <Link
              to="/projects"
              className="group border-b md:border-b-0 md:border-r-4 md:border-l-4 border-black p-10 transition-all duration-300 hover:bg-black hover:text-white"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 group-hover:text-zinc-300 mb-6">
                Development
              </p>

              <h3 className="text-3xl font-black leading-tight">
                Projects
              </h3>

              <p className="mt-4 leading-relaxed opacity-80">
                Computer Engineering, Machine Learning, and HPC.
              </p>
            </Link>

            <a
              href="src\assets\curiculum\curriculum.pdf"
              className="group border-b md:border-b-0 border-black p-10 md:border-l-4 transition-all duration-300 hover:bg-black hover:text-white"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 group-hover:text-zinc-300 mb-6">
                Professional
              </p>

              <h3 className="text-3xl font-black leading-tight">
                Resume
              </h3>

              <p className="mt-4 leading-relaxed opacity-80">
                Academic experience and achievements.
              </p>
            </a>

          </div>

        </section>

        {/* Footer */}
        <section className="flex flex-col md:flex-row">

          <div className="w-full md:w-1/2 border-l-8 border-r-4 border-b-8 border-black p-10">

            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-5">
              Contact
            </p>

            <div className="space-y-3 flex flex-col text-bold text-lg text-shadow-zinc-600 tracking-[0.1em]">

              <a href="https://github.com/LORENZOCIRCELLI" className="text-lg">
                GitHub
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