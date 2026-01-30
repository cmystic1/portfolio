'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HirePopUp from './HirePopUp';

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const [hireMeOpen, setIseHireMeOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/90 backdrop-blur-lg shadow-lg shadow-primary-yellow/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-2xl font-bold gradient-text"
                    >
                        {'<DEV />'}
                    </motion.div>

                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="relative px-4 py-2 text-gray-300 hover:text-primary-yellow transition-colors group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-yellow group-hover:w-full transition-all duration-300"></span>
                            </motion.a>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIseHireMeOpen(true)}
                        className="hexagon bg-primary-yellow text-dark-bg font-bold px-6 py-3 hover:bg-primary-yellow-dark transition-colors"

                    >
                        Hire Me
                    </motion.button>
                </div>
            </div>
            <HirePopUp isOpen={hireMeOpen} onClose={() => setIseHireMeOpen(false)} />
        </motion.nav>
    )
}