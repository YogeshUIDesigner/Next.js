'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { programs, programComparison } from '@/data/programs';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import { CheckIcon, SparklesIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function ProgramsPage() {
    return (
        <div className="min-h-screen pt-28 pb-20">
            {/* Hero Section */}
            <section className="relative pb-20 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue/20 blur-[150px]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                <div className="container-custom relative z-10">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto">
                            <motion.span
                                className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                Funded Programs
                            </motion.span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Choose Your <span className="gradient-text">Trading Challenge</span>
                            </h1>
                            <p className="text-lg text-gray-400">
                                Select the account size that matches your trading style. Pass our simple evaluation and trade with real capital.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="relative pb-24">
                <div className="container-custom">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {programs.map((program) => (
                            <StaggerItem key={program.id}>
                                <motion.div
                                    className={`relative h-full ${program.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
                                    whileHover={{ y: -8 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {program.popular && (
                                        <motion.div
                                            className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-xs font-semibold flex items-center gap-1 shadow-lg">
                                                <SparklesIcon className="w-3 h-3" />
                                                Popular
                                            </div>
                                        </motion.div>
                                    )}

                                    <div
                                        className={`glass-card h-full p-6 rounded-2xl ${program.popular ? 'border-accent-blue/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : ''
                                            }`}
                                    >
                                        <div className="text-center mb-4">
                                            <h3 className="text-lg font-bold text-white mb-1">{program.name}</h3>
                                            <div className="text-3xl font-bold gradient-text">
                                                ${program.accountSize.toLocaleString()}
                                            </div>
                                            <p className="text-xs text-gray-500">Account Size</p>
                                        </div>

                                        <div className="h-px bg-white/10 mb-4" />

                                        <div className="space-y-3 mb-4">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-400">Profit Target</span>
                                                <span className="text-white font-medium">{program.profitTarget}%</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-400">Max Drawdown</span>
                                                <span className="text-white font-medium">{program.maxDrawdown}%</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-400">Daily Drawdown</span>
                                                <span className="text-white font-medium">{program.dailyDrawdown}%</span>
                                            </div>
                                        </div>

                                        <ul className="space-y-2 mb-6">
                                            {program.features.slice(0, 4).map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                    <CheckIcon className="w-4 h-4 text-accent-green flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-white mb-3">
                                                ${program.price}
                                            </div>
                                            <Button
                                                variant={program.popular ? 'primary' : 'outline'}
                                                className="w-full"
                                                size="sm"
                                            >
                                                Get Started
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="relative py-24 bg-primary-light/20">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Compare <span className="gradient-text">All Plans</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Side-by-side comparison of all our funded trading programs
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px]">
                                <thead>
                                    <tr>
                                        <th className="text-left p-4 text-gray-400 font-medium">Feature</th>
                                        {programs.map((p) => (
                                            <th key={p.id} className="p-4 text-center">
                                                <span className={`text-white font-semibold ${p.popular ? 'text-accent-cyan' : ''}`}>
                                                    {p.name}
                                                </span>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {programComparison.map((row, idx) => (
                                        <motion.tr
                                            key={row.feature}
                                            className="border-t border-white/5 hover:bg-white/5 transition-colors"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                        >
                                            <td className="p-4 text-gray-300">{row.feature}</td>
                                            <td className="p-4 text-center text-white">{row.starter}</td>
                                            <td className="p-4 text-center text-white">{row.standard}</td>
                                            <td className="p-4 text-center text-white">{row.professional}</td>
                                            <td className="p-4 text-center text-white">{row.elite}</td>
                                            <td className="p-4 text-center text-white">{row.master}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="glass-card p-12 rounded-3xl text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Get Funded?
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                Join thousands of traders who are already trading with our capital. Start your journey today.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/register">
                                    <Button size="lg">Start Your Challenge</Button>
                                </Link>
                                <Link href="/how-it-works">
                                    <Button variant="outline" size="lg">Learn How It Works</Button>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
