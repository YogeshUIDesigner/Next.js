'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function HomeAbout() {
    return (
        <section className="relative py-24 bg-primary-light/20">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal direction="left">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Our <span className="gradient-text">Story</span>
                            </h2>
                            <div className="space-y-4 text-gray-400 mb-8">
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

                            <Link href="/about">
                                <Button size="lg" aria-label="Know more about our story">Know More</Button>
                            </Link>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right">
                        <motion.div
                            className="glass-card rounded-2xl aspect-[4/5] relative overflow-hidden max-w-md mx-auto"
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
    );
}
