'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/sections/ContactForm';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-28 pb-20">
            {/* Header Section */}
            <section className="relative py-12 mb-12">
                <div className="container-custom relative z-10 text-center">
                    <ScrollReveal>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Contact <span className="gradient-text">Me</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Got a project? Let's talk about it. I'm always open to new opportunities
                            and collaborations with creative brands and startups.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[100px]" />
                </div>
            </section>

            {/* Contact Form Section */}
            <ContactForm />

            {/* Simple Map or Quote Section */}
            <section className="py-20 bg-primary-light/10">
                <div className="container-custom text-center">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-accent-green" />
                            <span className="text-sm text-gray-400">Available for freelance work</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            "Design is not just what it looks like and feels like. <br />
                            Design is <span className="text-accent-cyan">how it works</span>."
                        </h2>
                        <p className="text-gray-500">— Steve Jobs</p>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
