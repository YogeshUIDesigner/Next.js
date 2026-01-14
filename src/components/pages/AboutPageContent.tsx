'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import {
    RocketLaunchIcon,
    UsersIcon,
    LightBulbIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const values = [
    {
        icon: LightBulbIcon,
        title: 'Creativity & Quality',
        description: 'We believe creativity is the core of everything we build. From design to animation, we focus on ideas that stand out and leave a lasting impression.',
    },
    {
        icon: UsersIcon,
        title: 'Client-Centric Approach',
        description: 'Our clients’ goals come first. We listen, understand, and create solutions that truly align with their vision and business needs.',
    },
    {
        icon: RocketLaunchIcon,
        title: 'Innovation & Growth',
        description: 'We constantly explore new trends, tools, and technologies to deliver modern, engaging, and future-ready digital experiences.',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Quality & Commitment',
        description: 'We never compromise on quality. Every project is handled with attention to detail, dedication, and a commitment to excellence.',
    },
];

const stats = [
    { value: '100+', label: 'Projects Completed' },
    { value: '3+ Years', label: 'Creative Experience' },
    { value: '30+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support' },
];

export default function AboutPageContent() {
    return (
        <div className="min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="relative pb-24 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-accent-blue/15 blur-[150px]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 12, repeat: Infinity }}
                />

                <div className="container-custom relative z-10">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto">
                            <motion.span
                                className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                About Us
                            </motion.span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Empowering Brands <span className="gradient-text">With Design & Technology</span>
                            </h1>
                            <p className="text-lg text-gray-400">
                                We help brands grow through creative design, modern websites, 2D & 3D animation, and impactful visual content.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Stats */}
            <section className="relative pb-24">
                <div className="container-custom">
                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <StaggerItem key={stat.label}>
                                <motion.div
                                    className="glass-card p-6 rounded-2xl text-center"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Story */}
            <section className="relative py-24 bg-primary-light/20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal direction="left">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Our <span className="gradient-text">Story</span>
                                </h2>
                                <div className="space-y-4 text-gray-400">
                                    <p>
                                        We combine creativity and technology to build digital solutions that not only look great but also deliver real results. Every project we work on is unique, with a strong focus on design, performance, and user experience.
                                    </p>
                                    <p>
                                        Our team specializes in website design, UI/UX design, branding, 2D & 3D animation, brochure design, flyer design, and creative visual content that help brands build a powerful and memorable online presence. We believe in transforming simple ideas into impactful digital experiences that connect with the audience and communicate the brand’s message effectively.
                                    </p>
                                    <p>
                                        We are committed to quality, creativity, and innovation, using modern tools and best practices to deliver solutions that add long-term value to our clients.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <motion.div
                                className="glass-card rounded-2xl aspect-square relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                            >
                                <Image
                                    src="/Images/yogesh.webp"
                                    alt="Yogesh Mahor"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="relative py-24">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Our <span className="gradient-text">Values</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                The principles that guide everything we do — from how we work with clients to the quality of our designs.
                            </p>
                        </div>
                    </ScrollReveal>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <StaggerItem key={value.title}>
                                    <motion.div
                                        className="glass-card p-6 rounded-2xl text-center h-full"
                                        whileHover={{ y: -8 }}
                                    >
                                        <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center mb-4">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                                        <p className="text-sm text-gray-400">{value.description}</p>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="glass-card p-12 rounded-3xl text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Start Your Next Project?
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Let’s bring your ideas to life with creative design, modern websites, and 2D & 3D animation.
                                Partner with us to create impactful digital experiences.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/contact">
                                    <Button size="lg">Get Started</Button>
                                </Link>
                                <Link href="/how-it-works">
                                    <Button variant="outline" size="lg">Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
