"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CertificatesSection() {
const certificates = [
  {
    title: "JavaScript: Do Básico ao Avançado",
    issuer: "Udemy",
    year: "2025",
    pdf: "/Javascript.pdf",
  },
  {
    title: "Inteligência Artificial, Informação e Ética",
    issuer: "USP",
    year: "2025",
    pdf: "/CertificadoUSPIA.pdf",
  },
  {
    title: "XVII Escola do Supercomputador Santos Dumont",
    issuer: "LNCC",
    year: "2025",
    pdf: "/PV2025_id1.pdf",
  },
  {
    title: "Profiling e Otimização de Códigos em C/C++",
    issuer: "LNCC",
    year: "2025",
    pdf: "/PV2025_id7.pdf",
  },
  {
    title: "Introdução à Programação de GPU com CUDA",
    issuer: "LNCC",
    year: "2025",
    pdf: "/PV2025_id3.pdf",
  },
  {
    title: "Introdução a Containers para HPC/IA",
    issuer: "LNCC",
    year: "2025",
    pdf: "/PV2025_id2.pdf",
  },
  {
    title: "Otimização de Aplicações Paralelas em CPU e GPU",
    issuer: "LNCC",
    year: "2025",
    pdf: "/PV2025_id4.pdf",
  },
  {
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
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition bg-white border-hidden">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-4">
                  Emitido por <strong>{cert.issuer}</strong> ({cert.year})
                </p>
                <a
                  href={cert.pdf}
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
    </section>
  );
}
