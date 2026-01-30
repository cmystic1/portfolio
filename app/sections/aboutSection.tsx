'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
//   const stats = [
//     { number: '1+', label: 'Years Experience' },
//     { number: '50+', label: 'Projects Completed' },
//     { number: '30+', label: 'Happy Clients' },
//     { number: '100%', label: 'Satisfaction' },
//   ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-yellow mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary-yellow/20 blur-3xl rounded-full"></div>
            <div className="relative bg-dark-card p-8 rounded-2xl border border-dark-border">
              <h3 className="text-3xl font-bold text-primary-yellow mb-4">Who I Am</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate developer with a love for creating innovative solutions. 
                With expertise in modern web technologies, I bring ideas to life through 
                clean, efficient code.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a career 
                dedicated to pushing boundaries and delivering excellence in every project.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary-yellow/20 blur-3xl rounded-full"></div>
            <div className="relative bg-dark-card p-8 rounded-2xl border border-dark-border">
              <h3 className="text-3xl font-bold text-primary-yellow mb-4">What I Do</h3>
              <ul className="space-y-3">
                {['Frontend Development', 'Backend Development', 'UI/UX Design', 'Performance Optimization'].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-primary-yellow rounded-full"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-dark-card p-6 rounded-xl border border-dark-border text-center card-hover"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  )
}