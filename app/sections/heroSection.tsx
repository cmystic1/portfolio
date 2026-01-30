'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HeroSection() {
    const [typedText, setTypedText] = useState('')
    const [mounted, setMounted] = useState(false)
    const fullText = 'Aspiring Developer'

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        let index = 0
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index))
                index++
            } else {
                clearInterval(interval)
            }
        }, 100)
        return () => clearInterval(interval)
    }, [mounted])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                    className="mb-8"
                >

                </motion.div>
                <div className="w-48 h-48 mx-auto hexagon bg-gradient-to-br from-primary-yellow to-primary-yellow-dark p-1 mt-20">
                    <div className="w-full h-full hexagon bg-dark-bg flex items-center justify-center overflow-hidden">
                        <img
                            src="/profile.png"
                            alt="Carl Lester Illut Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-7xl md:text-9xl font-bold mb-6"
                >
                    <span className="gradient-text glow-text">CARL LESTER ILLUT</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-3xl md:text-4xl text-gray-300 mb-8 h-12"
                >
                    {typedText}<span className="animate-pulse text-primary-yellow">|</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Crafting exceptional digital experiences with cutting-edge technologies.
                    Transforming ideas into reality, one line of code at a time.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex gap-4 justify-center flex-wrap"
                >
                    {/* <motion.a
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="bg-primary-yellow text-dark-bg font-bold px-8 py-4 rounded-lg hover:bg-primary-yellow-dark transition-colors"
                    >
                        View My Work
                    </motion.a> */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="border-2 border-primary-yellow text-primary-yellow font-bold px-8 py-4 rounded-lg hover:bg-primary-yellow/10 transition-colors"
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}