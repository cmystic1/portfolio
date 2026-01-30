'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface HireMeModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-dark-bg border border-primary-yellow/20 p-8 shadow-xl"
                    >
                        <h2 className="text-2xl font-bold mb-4 gradient-text">
                            Let&apos;s Work Together 🚀
                        </h2>

                        <p className="text-gray-400 mb-6">
                            Have a project in mind? I&apos;m open to freelance, full-time, and
                            cool collaborations.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=carlillut7@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center rounded-lg bg-primary-yellow text-dark-bg font-bold py-3 hover:bg-primary-yellow-dark transition-colors"
                            >
                                Email Me
                            </a>


                            <button
                                onClick={onClose}
                                className="flex-1 rounded-lg border border-gray-600 text-gray-300 py-3 hover:border-primary-yellow hover:text-primary-yellow transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
