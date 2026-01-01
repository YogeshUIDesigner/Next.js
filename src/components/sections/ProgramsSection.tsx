'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { programs } from '@/data/programs';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import { CheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function ProgramsSection() {
    // Show only first 3 programs on homepage
    const featuredPrograms = programs.slice(0, 3);

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-light/30" />
            <motion.div
                className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-blue/10 blur-[150px]"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.3, 0.5] }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="container-custom relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Funded Programs
                        </motion.span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Choose Your <span className="gradient-text">Challenge</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Start your journey to becoming a funded trader. Select the account size that matches your trading style.
                        </p>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredPrograms.map((program, index) => (
                        <StaggerItem key={program.id}>
                            <motion.div
                                className={`relative h-full ${program.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
                                whileHover={{ y: -8 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {/* Popular badge */}
                                {program.popular && (
                                    <motion.div
                                        className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-sm font-semibold flex items-center gap-1.5 shadow-lg shadow-accent-blue/30">
                                            <SparklesIcon className="w-4 h-4" />
                                            Most Popular
                                        </div>
                                    </motion.div>
                                )}

                                <div
                                    className={`
                    border-glow-card h-full p-8 rounded-2xl relative overflow-hidden
                    ${program.popular ? 'border-accent-blue/30' : ''}
                  `}
                                >
                                    {/* Glow effect for popular */}
                                    {program.popular && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent" />
                                    )}

                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="text-center mb-6">
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {program.name}
                                            </h3>
                                            <div className="text-4xl font-bold text-white mb-1">
                                                ${program.accountSize.toLocaleString()}
                                            </div>
                                            <p className="text-gray-400 text-sm">Account Size</p>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                                        {/* Key Stats */}
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="text-center p-3 rounded-xl bg-white/5">
                                                <div className="text-lg font-semibold text-accent-cyan">
                                                    {program.profitTarget}%
                                                </div>
                                                <div className="text-xs text-gray-400">Profit Target</div>
                                            </div>
                                            <div className="text-center p-3 rounded-xl bg-white/5">
                                                <div className="text-lg font-semibold text-accent-green">
                                                    {program.maxDrawdown}%
                                                </div>
                                                <div className="text-xs text-gray-400">Max Drawdown</div>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-3 mb-8">
                                            {program.features.slice(0, 5).map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="flex items-center gap-3 text-gray-300"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: idx * 0.1 }}
                                                >
                                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-green/20 flex items-center justify-center">
                                                        <CheckIcon className="w-3 h-3 text-accent-green" />
                                                    </span>
                                                    <span className="text-sm">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* Price & CTA */}
                                        <div className="text-center">
                                            <div className="mb-4">
                                                <span className="text-3xl font-bold text-white">
                                                    ${program.price}
                                                </span>
                                                <span className="text-gray-400"> / one-time</span>
                                            </div>
                                            <Link href="/programs">
                                                <Button
                                                    variant={program.popular ? 'primary' : 'outline'}
                                                    className="w-full"
                                                >
                                                    Start Challenge
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* View All Button */}
                <ScrollReveal>
                    <div className="text-center">
                        <Link href="/programs">
                            <Button variant="ghost" size="lg">
                                View All Programs
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    →
                                </motion.span>
                            </Button>
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
