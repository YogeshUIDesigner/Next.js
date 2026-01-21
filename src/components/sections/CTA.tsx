'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CTA() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background with animated gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 via-primary to-accent-cyan/20" />
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                }}
                animate={{
                    background: [
                        'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 70% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
                        'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container-custom relative z-10">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/20 border border-accent-green/30 mb-8"
                            whileHover={{ scale: 1.05 }}
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(16, 185, 129, 0.2)',
                                    '0 0 40px rgba(16, 185, 129, 0.4)',
                                    '0 0 20px rgba(16, 185, 129, 0.2)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
                            </span>
                            <span className="text-accent-green font-medium">Let’s Work Together</span>
                        </motion.div>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Let’s Build Something
                            <br />
                            <span className="gradient-text">Great Together</span>
                        </h2>

                        {/* Subheading */}
                        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Looking for a designer who can handle UI/UX, 2D & 3D animation, motion graphics, and print creatives?
                            Let’s collaborate to create visuals that are engaging, functional, and brand-focused.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <Link href="/contact">
                                <Button size="lg" className="min-w-[220px] group">
                                    Let's Get Started
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowRightIcon className="w-5 h-5" />
                                    </motion.span>
                                </Button>
                            </Link>
                            <Link href="/how-it-works">
                                <Button variant="outline" size="lg" className="min-w-[220px]">
                                    Learn More
                                </Button>
                            </Link>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Clear Communication</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>On-Time Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Quality-Focused Design</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
