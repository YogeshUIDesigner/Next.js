'use client';

import { motion } from 'framer-motion';
import { faqItems } from '@/data/faq';
import Accordion from '@/components/ui/Accordion';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function FAQ() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 to-primary" />
            <motion.div
                className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-[120px]"
                animate={{ x: [0, 50, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
            />

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left - Heading */}
                    <ScrollReveal direction="left">
                        <div className="lg:sticky lg:top-32">
                            <motion.span
                                className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                Got Questions?
                            </motion.span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                Frequently Asked <span className="gradient-text">Questions</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Everything you need to know about my design services, workflow, and collaboration.
                                Can’t find what you’re looking for? Feel free to reach out.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="#">
                                    <Button variant="outline">
                                        Contact Support
                                    </Button>
                                </Link>
                                <Link href="#">
                                    <Button variant="ghost">
                                        View All FAQs →
                                    </Button>
                                </Link>
                            </div>

                            {/* Stats */}
                            {/* <div className="mt-12 grid grid-cols-2 gap-6">
                                <motion.div
                                    className="glass-card p-4 rounded-xl"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="text-2xl font-bold text-accent-cyan mb-1">24/7</div>
                                    <div className="text-sm text-gray-400">Support Available</div>
                                </motion.div>
                                <motion.div
                                    className="glass-card p-4 rounded-xl"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="text-2xl font-bold text-accent-green mb-1">&lt;2hr</div>
                                    <div className="text-sm text-gray-400">Avg Response Time</div>
                                </motion.div>
                            </div> */}
                        </div>
                    </ScrollReveal>

                    {/* Right - Accordion */}
                    <ScrollReveal direction="right">
                        <Accordion items={faqItems} />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
