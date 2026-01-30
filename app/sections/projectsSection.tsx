'use client'

import { motion } from 'framer-motion'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management',
      tech: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      title: '3D Portfolio Website',
      description: 'Interactive 3D portfolio with Three.js and immersive animations',
      tech: ['Three.js', 'Next.js', 'GSAP'],
      gradient: 'from-yellow-300 to-yellow-600',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat app with AI-powered responses and smart suggestions',
      tech: ['TypeScript', 'WebSocket', 'OpenAI'],
      gradient: 'from-amber-400 to-yellow-500',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind'],
      gradient: 'from-yellow-500 to-amber-600',
    },
    {
      title: 'Crypto Trading Bot',
      description: 'Automated trading bot with machine learning price predictions',
      tech: ['Python', 'TensorFlow', 'REST API'],
      gradient: 'from-yellow-400 to-orange-400',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for managing multiple social media accounts',
      tech: ['Vue.js', 'Chart.js', 'Express'],
      gradient: 'from-amber-300 to-yellow-500',
    },
  ]

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-yellow mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A showcase of my recent work and creative endeavors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-dark-card rounded-2xl border border-dark-border overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-yellow/20 flex items-center justify-center">
                    <span className="text-2xl">💎</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="text-primary-yellow hover:text-primary-yellow-dark"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-yellow transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary-yellow/10 text-primary-yellow rounded-full border border-primary-yellow/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-yellow to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}