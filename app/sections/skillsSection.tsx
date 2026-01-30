'use client'

import { motion } from 'framer-motion'

export default function SkillsSection() {
    const skillCategories = [
        {
            category: '1',
            skills: [
                { name: 'React/Next.js', level: 60 },
                { name: 'TypeScript', level: 57 },
                { name: 'Bootstrap', level: 85 },
                { name: 'Tailwind CSS', level: 72 },
                { name: 'SEO', level: 20 },
                { name: 'HTML', level: 90 }
            ],
        },
        {
            category: '2',
            skills: [
                { name: 'CSS', level: 88 },
                { name: 'Node.js', level: 60 },
                { name: 'MYSQL', level: 62 },
                { name: 'PHP', level: 80 },
                { name: 'JavaScript', level: 71 },
                { name: 'REST API', level: 50 },
            ],
        },
        {
            category: '3',
            skills: [
                { name: 'Git/GitHub', level: 63 },
                { name: 'Odoo', level: 48 },
                { name: 'Firebase', level: 55 },
                { name: 'WordPress', level: 13 },
            ],
        },
    ]

    return (
        <section id="skills" className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-6xl font-bold mb-4">
                        <span className="gradient-text">Skills & Expertise</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary-yellow mx-auto mb-6"></div>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Technologies and tools I work with daily
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.2 }}
                            className="bg-dark-card p-8 rounded-2xl border border-dark-border"
                        >
                            <h3 className="text-2xl font-bold text-primary-yellow mb-6">
                                {category.category}
                            </h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300">{skill.name}</span>
                                            <span className="text-primary-yellow font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-dark-bg rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ delay: catIndex * 0.2 + skillIndex * 0.1, duration: 1 }}
                                                className="h-full bg-gradient-to-r from-primary-yellow to-primary-yellow-dark rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}