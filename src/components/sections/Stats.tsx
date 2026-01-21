'use client';

import { motion } from 'framer-motion';
import Counter from '@/components/ui/Counter';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

const stats = [
    {
        value: 3,
        suffix: '%',
        label: 'Profit Split',
        description: 'Keep up to 90% of what you earn',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        value: 400,
        prefix: '$',
        suffix: 'K',
        label: 'Max Account Size',
        description: 'Trade with serious capital',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
    },
    {
        value: 5,
        prefix: '$',
        suffix: 'M+',
        label: 'Total Payouts',
        description: 'Paid to our traders',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
            </svg>
        ),
    },
    {
        value: 10000,
        suffix: '+',
        label: 'Traders Funded',
        description: 'Join our growing community',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
];

export default function Stats() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-light/50 to-primary" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />

            <div className="container-custom relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block px-4 py-1.5 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-sm font-medium mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Our Numbers
                        </motion.span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Trusted by <span className="gradient-text">Brands & Creators</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Creating meaningful digital experiences through UI/UX, graphic design, and motion—helping brands stand out and connect better with users.
                        </p>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <StaggerItem key={stat.label}>
                            <motion.div
                                className="glass-card p-6 rounded-2xl text-center group"
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)',
                                }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {/* Icon */}
                                <motion.div
                                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 text-accent-cyan mb-4 group-hover:scale-110 transition-transform"
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {stat.icon}
                                </motion.div>

                                {/* Value */}
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    <Counter
                                        end={stat.value}
                                        prefix={stat.prefix}
                                        suffix={stat.suffix}
                                        duration={2.5}
                                    />
                                </div>

                                {/* Label */}
                                <h3 className="text-lg font-semibold text-white mb-1">
                                    {stat.label}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-400">{stat.description}</p>

                                {/* Decorative line */}
                                <motion.div
                                    className="mt-4 h-1 rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
