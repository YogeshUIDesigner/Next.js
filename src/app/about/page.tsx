'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import {
    RocketLaunchIcon,
    EyeIcon,
    HeartIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const values = [
    {
        icon: ShieldCheckIcon,
        title: 'Transparency',
        description: 'No hidden rules, no surprises. Everything is clear from day one.',
    },
    {
        icon: HeartIcon,
        title: 'Trader-First',
        description: 'We succeed when our traders succeed. Your growth is our priority.',
    },
    {
        icon: RocketLaunchIcon,
        title: 'Innovation',
        description: 'Constantly improving our platform, tools, and trader experience.',
    },
    {
        icon: EyeIcon,
        title: 'Integrity',
        description: 'Honest payouts, fair rules, and ethical business practices.',
    },
];

const stats = [
    { value: '2021', label: 'Founded' },
    { value: '150+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support' },
];

export default function AboutPage() {
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
                                Crafting Visual <span className="gradient-text">Experiences</span>
                            </h1>
                            <p className="text-lg text-gray-400">
                                I specialize in transforming ideas into stunning visual realities through UI/UX design, 2D/3D animation, and motion graphics.
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
                                        My journey started with a passion for art and technology. I've always been fascinated by how design can influence behavior and create emotional connections.
                                    </p>
                                    <p>
                                        Since 2021, I've worked as a freelancer, collaborating with startups and established brands to build distinctive identities and immersive digital experiences.
                                    </p>
                                    <p>
                                        My approach combines technical precision with creative intuition to deliver designs that are not only beautiful but also highly functional.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <motion.div
                                className="glass-card rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/30 to-accent-cyan/30" />
                                <div className="relative text-center p-8">
                                    <div className="text-8xl mb-4">🚀</div>
                                    <p className="text-white text-xl font-semibold">Building the future of prop trading</p>
                                </div>
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
                                The principles that guide everything we do
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
                                Ready to Join Our Community?
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Let's collaborate to bring your vision to life. Whether it's a new brand or a complex 3D project, I'm ready to help.
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
