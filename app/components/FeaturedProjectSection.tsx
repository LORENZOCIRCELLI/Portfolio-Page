"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function FeaturedProjectSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900/10 to-blue-900/10 py-20"
    >
      <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
        <Card className="max-w-5xl w-full shadow-xl rounded-2xl overflow-hidden bg-white/90 dark:bg-zinc-900">
          <CardContent className="grid md:grid-cols-2 gap-8 p-8">
            
            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <img
                src="./featured-project.png"
                alt="Featured Project"
                className="rounded-xl shadow-lg w-full max-h-96 object-cover"
              />
            </motion.div>

            {/* Texto + Badges + Botões */}
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-4xl font-bold text-purple-600">
                🚀 Air Guardian
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300">
                Este é um projeto desenvolvido em colaboração com 
                <span className="font-semibold"> Gabriel Monteiro</span>.  
                O objetivo é medir dados do ar (como qualidade e partículas) e informar o usuário 
                em tempo real por meio de um aplicativo no celular.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React Native</Badge>
                <Badge variant="secondary">ESP32</Badge>
                <Badge variant="secondary">IoT</Badge>
                <Badge variant="secondary">Real-time Data</Badge>
              </div>

              {/* Botões */}
              <div className="flex gap-4">
                <Button asChild>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Em Breve
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌐 Em breve
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
