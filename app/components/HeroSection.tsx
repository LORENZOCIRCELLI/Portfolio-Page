'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Imagem de fundo */}
      <img
        src="/background.jpg" // substitua pelo caminho da sua imagem
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradiente linear sobre a imagem (opacidade reduzida) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30" />

      {/* Gradiente radial escuro no centro */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.6),rgba(0,0,0,0.9))]" />
      </div>

      {/* Conteúdo central */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Lorenzo Calabrese Circelli
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-8 px-4"
        >
          Estudante de Engenharia da Computação e Desenvolvedor Full-Stack
        </motion.p>
      </div>

      {/* Setinha animada */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>

      {/* Gradiente de transição inferior para próxima seção preta */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-0" />
    </motion.section>
  );
}
