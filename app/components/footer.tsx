'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            © 2026 Carl Lester Illut.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
          </motion.div>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-primary-yellow text-dark-bg w-12 h-12 rounded-full flex items-center justify-center font-bold hover:bg-primary-yellow-dark transition-colors"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  )
}