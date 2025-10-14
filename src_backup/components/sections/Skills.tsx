'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Palette, 
  Zap, 
  Smartphone, 
  Cloud,
  Target,
  Users
} from 'lucide-react'

const skills = [
  {
    category: "Programmation Web",
    icon: Code,
    color: "from-blue-500 to-cyan-400",
    items: [
      { name: "HTML", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "ReactJS", level: 75 },
      { name: "PHP", level: 70 },
      { name: "Laravel", level: 65 }
    ]
  },
  {
    category: "Langages",
    icon: Database,
    color: "from-green-500 to-emerald-400",
    items: [
      { name: "Python", level: 75 },
      { name: "C", level: 70 },
      { name: "JavaScript", level: 80 },
      { name: "PHP", level: 70 },
      { name: "SQL", level: 60 }
    ]
  },
  {
    category: "Outils & Technologies",
    icon: Cloud,
    color: "from-orange-500 to-red-400",
    items: [
      { name: "Git", level: 75 },
      { name: "GitHub", level: 75 },
      { name: "Virtualisation", level: 65 },
      { name: "Réseaux TCP/IP", level: 70 },
      { name: "Linux", level: 60 }
    ]
  },
  {
    category: "Compétences",
    icon: Target,
    color: "from-purple-500 to-pink-400",
    items: [
      { name: "Développement web", level: 80 },
      { name: "Maintenance applicative", level: 75 },
      { name: "Sécurité informatique", level: 70 },
      { name: "Gestion de projet", level: 65 },
      { name: "Digitalisation", level: 70 }
    ]
  },
  {
    category: "Langues",
    icon: Users,
    color: "from-teal-500 to-cyan-400",
    items: [
      { name: "Français", level: 95 },
      { name: "Anglais", level: 70 },
      { name: "Communication", level: 80 },
      { name: "Formation", level: 75 },
      { name: "Travail d'équipe", level: 85 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Compétences & </span>
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un ensemble complet de compétences techniques et créatives pour réaliser vos projets ambitieux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-black border border-gray-800 rounded-2xl p-6 hover-lift overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${skillGroup.color} rounded-xl mb-4`}>
                    <skillGroup.icon className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-6">
                    {skillGroup.category}
                  </h3>

                  <div className="space-y-4">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-orange-400 text-sm font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: (index * 0.1) + (skillIndex * 0.05),
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skillGroup.color} rounded-full shadow-lg`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-black border border-gray-800 rounded-2xl px-8 py-6">
            <div className="flex items-center gap-2">
              <Target className="text-orange-400" size={24} />
              <span className="text-white font-semibold">
                Niveau d&apos;expertise global
              </span>
            </div>
            <div className="text-3xl font-bold gradient-text">
              Développeur Junior en Formation
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}