'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { CharacterReveal } from '@/components/animations/TextReveal';
import { ArrowRightIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import { SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiBlender, SiAdobeaftereffects } from 'react-icons/si';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    // Parallax logic for background icons
    const figmaY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const psY = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const aiY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const blenderY = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const aeY = useTransform(scrollYProgress, [0, 1], [0, -40]);

    const getParallaxStyle = (speed: number) => {
        if (speed === 0.05) return { y: figmaY };
        if (speed === 0.04) return { y: psY };
        if (speed === 0.03) return { y: aiY };
        if (speed === 0.06) return { y: blenderY };
        if (speed === 0.02) return { y: aeY };
        return {};
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                {/* Main gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue/30 blur-[150px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/20 blur-[120px]"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full bg-accent-green/15 blur-[100px]"
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                />

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Radial gradient overlay */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/50 to-primary" />

                {/* Background Icons */}
                <div className="hero-background-icons">
                    <motion.div className="floating-icon icon-figma" style={getParallaxStyle(0.05)}>
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <SiFigma />
                        </motion.div>
                    </motion.div>
                    <motion.div className="floating-icon icon-ps" style={getParallaxStyle(0.04)}>
                        <motion.div
                            animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <SiAdobephotoshop />
                        </motion.div>
                    </motion.div>
                    <motion.div className="floating-icon icon-ai" style={getParallaxStyle(0.03)}>
                        <motion.div
                            animate={{ y: [0, -15, 0], rotate: [0, 12, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <SiAdobeillustrator />
                        </motion.div>
                    </motion.div>
                    <motion.div className="floating-icon icon-blender" style={getParallaxStyle(0.06)}>
                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        >
                            <SiBlender />
                        </motion.div>
                    </motion.div>
                    <motion.div className="floating-icon icon-ae" style={getParallaxStyle(0.02)}>
                        <motion.div
                            animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        >
                            <SiAdobeaftereffects />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <motion.div
                className="container-custom relative z-10 text-center"
                style={{ y, opacity, scale }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-8"
                >
                    <motion.span
                        className="w-2 h-2 rounded-full bg-accent-green"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm text-gray-300">
                        UI/UX • Branding • Web • Motion
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="block">UI/UX & Graphic Designer</span>
                    <span className="block mt-2">
                        <span className="gradient-text">Yogesh Oneness</span>
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    I design modern, user-focused digital experiences that look{' '}
                    <span className="text-accent-cyan font-semibold">Premium</span> feel intuitive, and drive real results for
                    Keep up to <span className="text-accent-green font-semibold">brands, startups, and businesses.</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link href="/contact">
                        <Button size="lg" className="min-w-[200px] group">
                            Contact Us
                            <motion.span
                                className="inline-block"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRightIcon className="w-5 h-5" />
                            </motion.span>
                        </Button>
                    </Link>
                    <Link href="/how-it-works">
                        <Button variant="outline" size="lg" className="min-w-[200px]">
                            <PlayCircleIcon className="w-5 h-5" />
                            How It Works
                        </Button>
                    </Link>
                </motion.div>



                {/* Stats Preview */}
                {/* <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {[
                        { label: 'Profit Split', value: 'Up to 90%' },
                        { label: 'Max Account', value: '$400K' },
                        { label: 'Traders Funded', value: '10K+' },
                        { label: 'Payouts Made', value: '$5M+' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="glass-card p-4 rounded-xl"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div> */}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1.5 h-3 rounded-full bg-accent-cyan"
                        animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
