"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function CertificatesSection() {
  const [visibleCount, setVisibleCount] = useState(6); // inicialmente mostra 4 projetos
  
    const showMore = () => {
      setVisibleCount((prev) => prev + 4); // mostra mais 4 projetos ao clicar
    };
  const certificates = [
  {
    id:1,
    title: "JavaScript/ECMA: Do Básico ao Avançado",
    issuer: "Udemy",
    year: "2025",
    pdf: "/Javascript.pdf",
  },
  {
    id:2,
    title: "Inteligência Artificial, Informação e Ética",
    issuer: "USP",
    year: "2025",
    pdf: "/CertificadoUSPIA.pdf",
  },
  {
    id:3,
    title: "XVII Escola do Supercomputador Santos Dumont",
    issuer: "LNCC",
    year: "2025",
    pdf: "/PV2025_id1.pdf",
  },
  {
    id:4,
    title: "Profiling e Otimização de Códigos em C/C++",
    issuer: "LNCC",
    year: "2025",
    pdf: "/PV2025_id7.pdf",
  },
  {
    id:5,
    title: "Introdução à Programação de GPU com CUDA",
    issuer: "LNCC",
    year: "2025",
    pdf: "/PV2025_id3.pdf",
  },
  {
    id:6,
    title: "Introdução a Containers para HPC/IA",
    issuer: "LNCC",
    year: "2025",
    pdf: "/PV2025_id2.pdf",
  },
  {
    id:7,
    title: "Otimização de Aplicações Paralelas em CPU e GPU",
    issuer: "LNCC",
    year: "2025",
    pdf: "/PV2025_id4.pdf",
  },
  {
    id:8,
    title: "Introdução à Computação Quântica",
    issuer: "LNCC",
    year: "2025",
    pdf: "/PV2025_id6.pdf",
  },
];


  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-900/20 to-black">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Certificados
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {certificates.slice(0, visibleCount).map((certificate) => (          
        <motion.div
            key={certificate.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: certificate.id * 0.2 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition bg-white border-hidden">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                <p className="text-gray-600 mb-4">
                  Emitido por <strong>{certificate.issuer}</strong> ({certificate.year})
                </p>
                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Badge className="px-3 py-1">Ver certificado</Badge>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {visibleCount < certificates.length && (
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
            Mostrar mais certificados
            </button>
          </motion.div>
          )}
    </section>
  );
}
