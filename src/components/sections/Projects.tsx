'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Palette, Database, Zap } from 'lucide-react'

const projects = [
  {
    title: "Meet - Application de Rencontre",
    description: "Application de rencontre moderne et gratuite avec matching intelligent, messages éphémères et géolocalisation. Interface responsive avec système d'authentification sécurisé.",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&h=400&fit=crop",
    tags: ["Flask", "Tailwind CSS", "SQLite", "SQLAlchemy", "JWT"],
    github: "https://github.com/louisFankam/meet-repo",
    live: "https://example.com",
    icon: Code
  },
  {
    title: "SureFact - Gestion de Construction",
    description: "Plateforme complète de gestion de projets de construction avec système de rôles, API REST, tests automatisés et gestion des fichiers. Architecture full-stack React + Node.js.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "TypeScript", "Node.js", "Express", "MySQL", "JWT"],
    github: "https://github.com/solutions2is/solutions2is-contruction-management-webapp",
    live: "https://example.com",
    icon: Database
  },
  {
    title: "Pavin - Platform Municipale",
    description: "Système de gestion municipale complète avec authentification multi-rôles, export PDF, tableaux de bord interactifs et notifications. Architecture frontend/backend séparée.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
    tags: ["React", "TypeScript", "Vite", "Node.js", "Chart.js", "PDF"],
    github: "https://github.com/louisFankam/pavin",
    live: "https://example.com",
    icon: Palette
  },
  {
    title: "Karia - Orientation Scolaire",
    description: "Application web pour conseiller les jeunes élèves sur leur orientation scolaire. Plateforme éducative interactive avec outils d'aide à la décision et parcours personnalisés.",
    image: "https://images.unsplash.com/photo-1554224154-260325c05693?w=600&h=400&fit=crop",
    tags: ["Web", "Éducation", "Orientation", "Conseil", "Jeunes"],
    github: "https://github.com/louisFankam/karia",
    live: "https://example.com",
    icon: Zap
  },
  {
    title: "Edumali - Platform Éducative",
    description: "Plateforme éducative complète pour la gestion des apprentissages et le suivi des étudiants. Système de cours en ligne avec évaluation interactive et parcours pédagogiques.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    tags: ["Éducation", "E-learning", "Gestion", "Pédagogie", "Web"],
    github: "https://github.com/louisFankam/edumali",
    live: "https://example.com",
    icon: Code
  },
  {
    title: "AI Assistant Frontend",
    description: "Interface d'assistant IA moderne avec thème sombre, composants UI avancés et architecture TypeScript. Projet de démonstration avec design responsive.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "AI", "UI/UX"],
    github: "#",
    live: "https://example.com",
    icon: Database
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Mes </span>
            <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une sélection de mes réalisations récentes mêlant innovation technique et design créatif.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-orange-400/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <project.icon className="text-orange-400" size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (tagIndex * 0.05) }}
                        className="px-3 py-1 bg-orange-400/10 text-orange-400 rounded-full text-sm border border-orange-400/20"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-center hover:bg-orange-400 hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-orange-400 text-black rounded-lg text-center hover:bg-orange-500 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live
                    </motion.a>
                  </div>
                </div>

                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-orange-400/20 pointer-events-none"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-orange-400 text-orange-400 rounded-lg font-semibold hover:bg-orange-400 hover:text-black transition-all duration-300"
          >
            Discutons de votre projet
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}