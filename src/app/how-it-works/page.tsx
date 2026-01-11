'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import {
    ChatBubbleLeftRightIcon,
    PencilSquareIcon,
    SparklesIcon,
    PaperAirplaneIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';

const steps = [
    {
        number: '01',
        title: 'Project Discovery & Consultation',
        description: 'We start with a detailed consultation to understand your vision, brand identity, target audience, and project requirements.',
        icon: ChatBubbleLeftRightIcon,
        color: 'from-accent-blue to-accent-cyan',
        details: [
            'Free initial consultation',
            'Detailed brief and requirements',
            'Timeline and budget discussion',
        ],
    },
    {
        number: '02',
        title: 'Design & Development',
        description: 'Our creative team brings your vision to life with innovative designs, mockups, and iterative development based on your feedback.',
        icon: PencilSquareIcon,
        color: 'from-accent-cyan to-accent-green',
        details: [
            'Creative concept development',
            'Multiple design iterations',
            'Real-time collaboration',
        ],
    },
    {
        number: '03',
        title: 'Review & Refinement',
        description: 'We work closely with you through revisions to ensure every detail meets your expectations and brand standards.',
        icon: SparklesIcon,
        color: 'from-accent-green to-accent-blue',
        details: [
            'Unlimited revision rounds',
            'Professional feedback integration',
            'Quality assurance checks',
        ],
    },
    {
        number: '04',
        title: 'Final Delivery & Support',
        description: 'Receive your final designs in all required formats, plus ongoing support and source files for future modifications.',
        icon: PaperAirplaneIcon,
        color: 'from-accent-purple to-accent-blue',
        details: [
            'All file formats included',
            'Source files provided',
            'Post-delivery support',
        ],
    },
];

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="relative pb-20 overflow-hidden">
                <motion.div
                    className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-accent-cyan/15 blur-[150px]"
                    animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
                    transition={{ duration: 15, repeat: Infinity }}
                />

                <div className="container-custom relative z-10">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto">
                            <motion.span
                                className="inline-block px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                How It Works
                            </motion.span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Our Design <span className="gradient-text">Process</span>
                            </h1>
                            <p className="text-lg text-gray-400">
                                A simple 4-step process from initial consultation to final delivery. Transparent, collaborative, and results-driven.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Steps Timeline */}
            <section className="relative py-20">
                <div className="container-custom">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-green" />

                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <ScrollReveal key={step.number} delay={index * 0.15}>
                                    <div className={`relative flex flex-col lg:flex-row items-center gap-8 mb-20 last:mb-0 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                        {/* Content */}
                                        <motion.div
                                            className={`flex-1 ${isEven ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <div className={`glass-card p-8 rounded-2xl ${isEven ? 'lg:mr-8' : 'lg:ml-8'}`}>
                                                <div className={`inline-block text-7xl font-bold gradient-text opacity-20 mb-2`}>
                                                    {step.number}
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                                <p className="text-gray-400 mb-6">{step.description}</p>

                                                <ul className={`space-y-2 ${isEven ? 'lg:text-right' : ''}`}>
                                                    {step.details.map((detail, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            className={`flex items-center gap-2 text-sm text-gray-300 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                                                            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                                                            {detail}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>

                                        {/* Center Icon */}
                                        <motion.div
                                            className="relative z-10 flex-shrink-0"
                                            whileHover={{ scale: 1.1, rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg shadow-accent-blue/20`}>
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>
                                        </motion.div>

                                        {/* Empty space for layout */}
                                        <div className="flex-1 hidden lg:block" />
                                    </div>

                                    {/* Arrow between steps */}
                                    {index < steps.length - 1 && (
                                        <motion.div
                                            className="hidden lg:flex justify-center my-4"
                                            initial={{ opacity: 0, y: -10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                        >
                                            <motion.div
                                                animate={{ y: [0, 10, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            >
                                                <ArrowRightIcon className="w-6 h-6 text-accent-cyan rotate-90" />
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-24 bg-primary-light/20">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    See Our Work in <span className="gradient-text">Action</span>
                                </h2>
                                <p className="text-gray-400 mb-8">
                                    Discover how we transform ideas into stunning visual designs. From concept to completion, see our creative process in action.
                                </p>
                                <div className="space-y-4">
                                    {['Transparent pricing with no hidden fees', 'Clear communication throughout the process', 'Real projects with real results'].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="flex items-center gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <div className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="text-white">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Video Placeholder */}
                            <motion.div
                                className="relative aspect-video rounded-2xl overflow-hidden glass-card"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center">
                                    <motion.button
                                        className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </motion.button>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 glass p-3 rounded-lg">
                                    <div className="text-sm text-white font-medium">Design Process Walkthrough</div>
                                    <div className="text-xs text-gray-400">8:30</div>
                                </div>
                            </motion.div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Start Your Project?
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Let's bring your creative vision to life. Get in touch today and take the first step towards stunning designs.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/portfolio">
                                    <Button size="lg">View Portfolio</Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" size="lg">Get Started</Button>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
