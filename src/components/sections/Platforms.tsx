'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

const platforms = [
    {
        name: 'Figma',
        logo: 'FA',
        description: 'UI/UX design, wireframes, prototypes, and design systems for web & mobile.',
        color: '#FF6B00',
    },
    {
        name: 'Adobe Photoshop',
        logo: 'Ps',
        description: 'High-quality visual design, image editing, social creatives, and marketing assets.',
        color: '#00C853',
    },
    {
        name: 'Adobe Illustrator',
        logo: 'Ai',
        description: 'Logos, vector graphics, icons, flyers, and brochure designs.',
        color: '#2962FF',
    },
    {
        name: 'After Effects',
        logo: 'Ae',
        description: '2D animation, motion graphics, logo animations, and video visuals.',
        color: '#7B1FA2',
    },
    {
        name: 'Blender',
        logo: 'Br',
        description: '3D modeling, product visualization, and realistic 3D animations.',
        color: '#FFC107',
    },
    {
        name: 'Canva',
        logo: 'Cn',
        description: 'Fast, professional designs for social media, presentations, flyers, brochures, and marketing creatives.',
        color: '#00BCD4',
    },
];

export default function Platforms() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 to-primary" />

            <div className="container-custom relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block px-4 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-sm font-medium mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Tools & Capabilities
                        </motion.span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Design Across<span className="gradient-text">Tools & Mediums</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                        I work with leading design and animation tools to deliver high-quality UI/UX, motion, 3D, and print creatives—ensuring professional results across every platform.
                        </p>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {platforms.map((platform) => (
                        <StaggerItem key={platform.name}>
                            <motion.div
                                className="glass-card p-6 rounded-2xl text-center group cursor-pointer"
                                whileHover={{
                                    y: -10,
                                    scale: 1.05,
                                    boxShadow: `0 20px 40px ${platform.color}20`,
                                }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {/* Logo */}
                                <motion.div
                                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-300"
                                    style={{ backgroundColor: `${platform.color}20` }}
                                    whileHover={{
                                        backgroundColor: platform.color,
                                    }}
                                >
                                    <span
                                        className="text-2xl font-bold transition-colors duration-300 group-hover:text-white"
                                        style={{ color: platform.color }}
                                    >
                                        {platform.logo}
                                    </span>
                                </motion.div>

                                {/* Name */}
                                <h3 className="text-white font-semibold mb-1">{platform.name}</h3>

                                {/* Description */}
                                <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                    {platform.description}
                                </p>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Additional info */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-12 text-center">
                        <p className="text-gray-400 text-sm">
                            Don&apos;t see your platform? <span className="text-accent-cyan cursor-pointer hover:underline">Contact us</span> for compatibility info.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
