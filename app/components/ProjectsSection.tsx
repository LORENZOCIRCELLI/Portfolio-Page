'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
	{
		id: 1,
		title: 'Foundation Bank',
		description: 'Plataforma de Simulação de Transações Bancarias',
		image: '/bank.png',
		githubUrl: 'https://github.com/LORENZOCIRCELLI/FoundationBank'
	},
	{
		id: 2,
		title: 'PDA+',
		description: 'Aplicativo de linha de comando para servir como assistente para Subnautica',
		image: '/subnautica.jpg',
		githubUrl: 'https://github.com/LORENZOCIRCELLI/SubnauticaPDAPlus'
	},
	{
		id: 3,
		title: 'Pelican Planner',
		description: 'Aplicativo de linha de comando para auxiliar jogadores de Stardew Valley',
		image: '/stardew.jpg',
		githubUrl: 'https://github.com/LORENZOCIRCELLI/PelicanPlanner'
	},
	{
		id: 4,
		title: 'MicroCheckout',
		description: 'Projeto com Sistemas Embarcados em C++ como um simulador real de um caixa de mercado para autoatendimento',
		image: '/checkout.jpg',
		githubUrl: 'https://github.com/LORENZOCIRCELLI/MicroCheckout'
  },
];

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(4); // inicialmente mostra 4 projetos

  const showMore = () => {
    setVisibleCount((prev) => prev + 4); // mostra mais 4 projetos ao clicar
  };

  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
      >
        Projetos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.slice(0, visibleCount).map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <Link
                  href={project.githubUrl || "#"}
                  className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

		{visibleCount < projects.length && (
		<motion.div
			className="text-center mt-8"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			<button
			onClick={showMore}
			className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
			>
			Mostrar mais projetos
			</button>
		</motion.div>
		)}
    </section>
  );
}
