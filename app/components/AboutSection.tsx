'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Título centralizado de verdade */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          Sobre Mim
        </motion.h1>

        {/* Grid abaixo do título */}
        <div className="gap-12 items-center lg:flex mx-20 flex-col">
          
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <p className="text-gray-300 leading-relaxed text-center">
            Sou <span className="text-blue-400 font-semibold">Lorenzo Calabrese Circelli</span>, estudante de Engenharia da Computação e desenvolvedor apaixonado por tecnologia.
            Embora ainda não tenha experiência formal no mercado de trabalho, dedico grande atenção aos meus projetos pessoais, que me permitem explorar novas ideias e aprofundar minhas habilidades.
            Tenho experiência em desenvolvimento back-end usando Java, Spring Boot e Node.js, além de atuar em projetos em C e C++ voltados para sistemas embarcados e programação competitiva.
          </p>
          <p className="text-gray-300 leading-relaxed text-center mb-10">
            Meus projetos, listados abaixo, demonstram meu conhecimento e dedicação. Você também pode conferir meus perfis em plataformas de programação competitiva para ver minha prática em desafios de C++ e algoritmos avançados.
          </p>
         </motion.div>

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/minha-foto.jpg" // Substituir pelo caminho real
                alt="Foto de Lorenzo"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
