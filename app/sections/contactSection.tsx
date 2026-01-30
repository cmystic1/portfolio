'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram } from 'lucide-react'

export default function ContactSection() {
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        contact: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setSuccessMessage('')
        setErrorMessage('')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const data = await res.json()

            if (data.success) {
                setSuccessMessage('✨ Message sent successfully! I’ll get back to you soon.')
                setFormData({ name: '', email: '', message: '', contact: '' })
                setTimeout(() => setSuccessMessage(''), 4000)
            } else {
                setErrorMessage('Something went wrong. Please try again.')
            }
        } catch (err) {
            setErrorMessage('Server error. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }



    const contactInfo = [
        { icon: <Mail size={24} />, label: 'Email', value: 'carlillut7@gmail.com' },
        { icon: <Phone size={24} />, label: 'Phone', value: '+639472478213' },
        { icon: <MapPin size={24} />, label: 'Location', value: 'Binaobao, Bantayan, Cebu' },
    ]

    const socialLinks = [
        { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/cmystic1', target: '_blank' },
        { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/carl-illut-0319342b4/', target: '_blank' },
        { name: 'Facebook', icon: <Facebook size={24} />, url: 'https://www.facebook.com/carllesterillut', target: '_blank' },
        { name: 'Instagram', icon: <Instagram size={24} />, url: 'https://www.instagram.com/carllesterillut/', target: '_blank' },
    ]

    return (
        <section id="contact" className="min-h-screen py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-bold mb-4">
                        <span className="gradient-text">Get In Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary-yellow mx-auto mb-6"></div>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Let's collaborate and create something amazing together
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info + Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Contact Info */}
                        <div className="bg-dark-card p-8 rounded-2xl border border-dark-border mb-8">
                            <h3 className="text-2xl font-bold text-primary-yellow mb-6">
                                Contact Information
                            </h3>

                            {errorMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500 text-red-400 font-semibold text-center"
                                >
                                    {errorMessage}
                                </motion.div>
                            )}

                            <div className="space-y-4">
                                {contactInfo.map((info) => (
                                    <motion.div
                                        key={info.label}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-4 p-4 bg-dark-bg rounded-lg"
                                    >
                                        <span className="text-primary-yellow">{info.icon}</span>
                                        <div>
                                            <div className="text-gray-400 text-sm">{info.label}</div>
                                            <div className="text-white font-semibold">{info.value}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-dark-card p-8 rounded-2xl border border-dark-border">
                            <h3 className="text-2xl font-bold text-primary-yellow mb-6">
                                Follow Me
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className="flex items-center gap-3 p-4 bg-dark-bg rounded-lg hover:border hover:border-primary-yellow transition-all"
                                    >
                                        <span className="text-primary-yellow">{social.icon}</span>
                                        <span className="font-semibold">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="bg-dark-card p-8 rounded-2xl border border-dark-border">
                            <h3 className="text-2xl font-bold text-primary-yellow mb-6">
                                Send Message
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:border-primary-yellow transition-colors text-white"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:border-primary-yellow transition-colors text-white"
                                        placeholder="example@gmail.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">Contact no.</label>
                                    <input
                                        type="text"
                                        value={formData.contact}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (/^\d{0,11}$/.test(value)) {
                                                setFormData({ ...formData, contact: value });
                                            }
                                        }}
                                        onWheel={(e) => e.currentTarget.blur()}
                                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:border-primary-yellow transition-colors text-white appearance-none"
                                        placeholder="09XXXXXXXXX"
                                        pattern="09\d{9}" 
                                        title="Contact number must start with 09 and be 11 digits"
                                        required
                                    />

                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">Message</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:border-primary-yellow transition-colors text-white resize-none"
                                        placeholder="Your message..."
                                        required
                                    />
                                </div>

                                <motion.button
                                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full flex items-center justify-center gap-3 font-bold py-4 rounded-lg transition-all
        ${isLoading
                                            ? 'bg-gray-500 cursor-not-allowed'
                                            : 'bg-primary-yellow text-dark-bg hover:bg-primary-yellow-dark'
                                        }
    `}
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        <>Send Message 🚀</>
                                    )}
                                </motion.button>

                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
            {successMessage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={() => setSuccessMessage('')}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-dark-card border border-green-500 rounded-2xl p-10 max-w-md text-center shadow-2xl"
                    >
                        <div className="text-6xl mb-4">🎉</div>

                        <h3 className="text-3xl font-bold text-green-400 mb-3">
                            Message Sent!
                        </h3>

                        <p className="text-gray-300 mb-6">
                            Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSuccessMessage('')}
                            className="px-6 py-3 bg-primary-yellow text-dark-bg font-bold rounded-lg"
                        >
                            Close ✨
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}

        </section>
    )
}
