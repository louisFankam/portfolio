'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dominiquelouis15@gmail.com",
      href: "mailto:dominiquelouis15@gmail.com"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+223 92 00 86 52",
      href: "tel:+22392008652"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "SEBENIKORO, Bamako",
      href: null
    }
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: MessageSquare, href: "https://discord.com", label: "Discord" }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Me </span>
            <span className="gradient-text">Contacter</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Prêt à démarrer votre prochain projet ? Discutons de vos idées et voyons comment nous pouvons les transformer en réalité.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Envoyez-moi un message
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-green-400">Message envoyé avec succès !</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="text-red-400" size={20} />
                  <span className="text-red-400">Erreur lors de l&apos;envoi. Veuillez réessayer.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-gray-400 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-gray-400 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
                    placeholder="Projet de développement web"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-black font-semibold rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informations de contact
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group-hover:border-orange-400 border border-transparent"
                      >
                        <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center group-hover:bg-orange-400/30 transition-colors">
                          <info.icon className="text-orange-400" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-400 text-sm">{info.label}</div>
                          <div className="text-white font-medium group-hover:text-orange-400 transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                        <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center">
                          <info.icon className="text-orange-400" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-400 text-sm">{info.label}</div>
                          <div className="text-white font-medium">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-black border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Suivez-moi
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center group hover:bg-orange-400/20 transition-all duration-300 border border-gray-800 hover:border-orange-400"
                  >
                    <link.icon className="text-gray-400 group-hover:text-orange-400 transition-colors" size={24} />
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-orange-400/20 to-orange-400/10 border border-orange-400/30 rounded-lg">
                <div className="text-white font-semibold mb-2">
                  Temps de réponse
                </div>
                <div className="text-gray-400 text-sm">
                  Je réponds généralement aux messages dans les 24 heures ouvrées.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}