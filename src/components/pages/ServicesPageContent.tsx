'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import {
    DevicePhoneMobileIcon,
    CubeIcon,
    FilmIcon,
    DocumentTextIcon,
    BoltIcon,
    SwatchIcon
} from '@heroicons/react/24/outline';

const services = [
    {
        icon: DevicePhoneMobileIcon,
        title: 'UI/UX Design',
        description: 'Modern, responsive, and user-focused website, Mobile App, designs that deliver performance and aesthetics.',
        features: ['App UI Design', 'UI/UX Website Design', 'Landing Page Design', 'Mobile-Responsive Layouts']
    },
    {
        icon: CubeIcon,
        title: '3D Motion Graphics',
        description: 'High-quality 3D animations designed to elevate your brand visuals and product storytelling.',
        features: ['3D Product Animation', '3D Logo Animation', 'Cinematic Visuals', '3D Character Animation', 'Realistic Lighting & Rendering']
    },
    {
        icon: FilmIcon,
        title: '2D Motion Graphics',
        description: 'Engaging 2D motion graphics crafted for marketing, social media, and brand communication.',
        features: ['Social Media Animations', '2D Explainer Video', '2D Character Animation', '2D Product Animation', 'Promo & Ad Videos']
    },
    {
        icon: DocumentTextIcon,
        title: 'Flyer Design',
        description: 'Creative and impactful flyer designs that communicate your message clearly and attract attention.',
        features: ['Event Flyers', 'Posters', 'Brochures', 'Banners', 'Business Flyers', 'Print-Ready Designs']
    },
    {
        icon: BoltIcon,
        title: 'GIF Animations',
        description: 'Eye-catching animated GIFs optimized for digital platforms and brand engagement.',
        features: ['Social Media GIF', 'Logo GIF', 'Lightweight Loop Animations']
    },
    {
        icon: SwatchIcon,
        title: 'Logo Design',
        description: 'Professional visual identities that maximize brand recognition. We create unique logos that tell your story.',
        features: ['Logo Design', 'Custom Logo Concepts', 'Logo Animation', 'Typography-Based Logos', 'Logo Revisions & Final Assets']
    }
];

export default function ServicesPageContent() {
    return (
        <div className="min-h-screen pt-28 pb-20">
            {/* Hero Section */}
            <section className="relative pb-24 overflow-hidden">
                <motion.div
                    className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-purple/15 blur-[150px]"
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
                                Our Services
                            </motion.span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Digital Solutions for <span className="gradient-text">Modern Businesses</span>
                            </h1>
                            <p className="text-lg text-gray-400">
                                We offer a comprehensive suite of design and development services tailored to help startups and established brands grow in the digital age.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative pb-24">
                <div className="container-custom">
                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <StaggerItem key={service.title}>
                                    <motion.div
                                        className="glass-card p-8 rounded-2xl h-full border border-white/5 hover:border-accent-blue/30 transition-colors group"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-primary-light border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-accent-cyan" />
                                        </div>
                                        <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
                                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center text-sm text-gray-500">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mr-2"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 opacity-50" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Need a Custom Solution?
                                </h2>
                                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                    Don't see exactly what you're looking for? Let's discuss your unique requirements and build a tailored strategy for your success.
                                </p>
                                <Link href="/contact">
                                    <Button size="lg">Get a Free Consultation</Button>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
