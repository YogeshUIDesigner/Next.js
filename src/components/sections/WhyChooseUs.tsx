'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import {
    ShieldCheckIcon,
    CurrencyDollarIcon,
    ClockIcon,
    ChartBarSquareIcon,
} from '@heroicons/react/24/outline';

const features = [
    {
        icon: ShieldCheckIcon,
        title: 'UI/UX & Web Design',
        description:
            'User-focused interfaces, responsive layouts, and clean design systems for web and mobile experiences.',
        color: 'from-accent-blue to-accent-cyan',
    },
    {
        icon: CurrencyDollarIcon,
        title: '2D & 3D Animation',
        description:
            'Engaging 2D animations and realistic 3D visuals to explain ideas, products, and brand stories.',
        color: 'from-accent-green to-accent-cyan',
    },
    {
        icon: ClockIcon,
        title: 'Motion Graphics & Visuals',
        description:
            'Smooth motion designs for videos, reels, promos, and digital branding content.',
        color: 'from-accent-purple to-accent-blue',
    },
    {
        icon: ChartBarSquareIcon,
        title: 'Flyers, Brochures & Print',
        description:
            'High-quality marketing creatives designed for both digital use and professional print output.',
        color: 'from-accent-cyan to-accent-green',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-primary-light/30" />
            <motion.div
                className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-green/5 blur-[150px]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 15, repeat: Infinity }}
            />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <ScrollReveal direction="left">
                        <div>
                            <motion.span
                                className="inline-block px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                               Why Work With Me?
                            </motion.span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Design Crafted for <span className="gradient-text">Real Results</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                            I create complete visual experiences—combining UI/UX design with 2D & 3D animation, motion graphics, and print creatives.
                            From digital interfaces to marketing visuals, every design is crafted to communicate clearly and look impactful.
                            </p>

                            {/* Trust indicators */}
                            <div className="flex flex-wrap gap-6">
                                <motion.div
                                    className="flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-accent-green/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-medium">UI/UX + Visual Design</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-accent-blue" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-medium">Motion & 3D Ready</span>
                                </motion.div>
                                <motion.div
                                    className="flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-accent-cyan/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-accent-cyan" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-medium">Print & Digital Expertise</span>
                                </motion.div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Content - Features Grid */}
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <StaggerItem key={feature.title}>
                                    <motion.div
                                        className="glass-card p-6 rounded-2xl h-full group"
                                        whileHover={{
                                            y: -8,
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                                        }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        {/* Icon */}
                                        <motion.div
                                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                            whileHover={{ rotate: [0, -5, 5, 0] }}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </motion.div>

                                        {/* Content */}
                                        <h3 className="text-lg font-semibold text-white mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>

                                        {/* Hover indicator */}
                                        <motion.div
                                            className={`mt-4 h-0.5 rounded-full bg-gradient-to-r ${feature.color}`}
                                            initial={{ width: 0 }}
                                            whileHover={{ width: '100%' }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    );
}
