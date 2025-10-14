'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Target,
  Calendar,
  MapPin,
  Zap
} from 'lucide-react'

const experiences = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Licence 3 Programmation et Développement Informatique",
    institution: "INTEC SUP",
    location: "Bamako, Mali",
    period: "2024 - Présent",
    description: "Actuellement en 3ᵉ année (L3) avec spécialisation en programmation et développement informatique. Soutenance prévue le 27 septembre.",
    achievements: [
      "En cours de formation",
      "Spécialisation développement web",
      "Projets pratiques de digitalisation"
    ]
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Licence 1 et 2 – Lucas Institut et Collège",
    institution: "Lucas Institut et Collège",
    location: "Bamako, Mali",
    period: "Décembre 2023 - Août 2024",
    description: "Années de formation L1 et L2 en Informatique.",
    achievements: [
      "Bases fondamentales en programmation",
      "Initiation aux réseaux et sécurité",
      "Projets académiques variés"
    ]
  },
  {
    type: "experience",
    icon: Briefcase,
    title: "Développeur junior",
    institution: "Solutions2is",
    location: "Bamako, Mali",
    period: "Juillet 2025 - Présent",
    description: "Stage en cours avec participation à des projets de digitalisation et développement d'applications pour les clients.",
    achievements: [
      "Contribution à des projets de digitalisation",
      "Développement et amélioration d'applications clients",
      "Collaboration en équipe pour des solutions adaptées"
    ]
  },
  {
    type: "experience",
    icon: Briefcase,
    title: "Assistant informatique",
    institution: "Cabinet d'avocats de Maître Yaro",
    location: "Bamako, Mali",
    period: "Septembre 2024 - Mai 2025",
    description: "Maintenance informatique du cabinet avec gestion des postes de travail et du site web.",
    achievements: [
      "Réalisation de mises à jour et maintenance des postes",
      "Gestion et maintenance du site web du cabinet",
      "Organisation du partage de fichiers en réseau interne"
    ]
  },
  {
    type: "experience",
    icon: Briefcase,
    title: "Formateur junior",
    institution: "EPIM (École de Programmation du Mali)",
    location: "Bamako, Mali",
    period: "Février 2023 - Juin 2023",
    description: "Dispensation de cours pratiques aux apprenants après formation interne.",
    achievements: [
      "Enseignement de HTML, JavaScript, C, PHP",
      "Accompagnement dans la réalisation de projets",
      "Formation sur les outils de bureautique"
    ]
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">À </span>
            <span className="gradient-text">Propos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mon parcours, mes expériences et ce qui me motive chaque jour à créer des solutions innovantes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-400/10 rounded-2xl blur-xl" />
              <div className="relative bg-black border border-gray-800 rounded-2xl p-8">
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full animate-pulse" />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                    alt="Profile"
                    className="relative w-full h-full rounded-full border-4 border-orange-400"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  LOUIS DOMINIQUE FANKAM YOUALEU
                </h3>
                <p className="text-orange-400 text-center mb-6">
                  Développeur junior
                </p>

                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-orange-400" />
                    <span>SEBENIKORO, Bamako</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase size={16} className="text-orange-400" />
                    <span>En cours de formation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap size={16} className="text-orange-400" />
                    <span>Stage en développement</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <h4 className="text-white font-semibold mb-3">Loisirs</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Football", "Documentaire", "CTF", "Sécurité informatique"].map((passion) => (
                      <span key={passion} className="px-3 py-1 bg-orange-400/10 text-orange-400 rounded-full text-xs">
                        {passion}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover-lift">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        experience.type === 'education' ? 'bg-blue-500/20' :
                        experience.type === 'experience' ? 'bg-green-500/20' : 'bg-purple-500/20'
                      }`}>
                        <experience.icon className={
                          experience.type === 'education' ? 'text-blue-400' :
                          experience.type === 'experience' ? 'text-green-400' : 'text-purple-400'
                        } size={24} />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                          <h3 className="text-xl font-bold text-white">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Calendar size={14} />
                            {experience.period}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-orange-400 font-medium">
                            {experience.institution}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400 text-sm">
                            {experience.location}
                          </span>
                        </div>

                        <p className="text-gray-400 mb-4">
                          {experience.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">
                            Réalisations clés :
                          </h4>
                          <ul className="space-y-1">
                            {experience.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achievement}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: (index * 0.1) + (achIndex * 0.05) }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 text-sm text-gray-300"
                              >
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400/20 to-orange-400/10 border border-orange-400/30 rounded-2xl px-8 py-4">
            <Target className="text-orange-400" size={24} />
            <div className="text-left">
              <div className="text-white font-semibold">
                Passionné par le développement et la sécurité informatique
              </div>
              <div className="text-gray-400 text-sm">
                Forte envie d'apprendre et d'évoluer dans le développement informatique
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}