'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projectGalleryData, GALLERY_CATEGORIES } from '@/data/projectGallery';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = useMemo(() => {
        return selectedCategory === 'All'
            ? projectGalleryData
            : projectGalleryData.filter((project) => project.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-primary pt-28 pb-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] -z-10" />

                <div className="container-custom">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto">
                            <motion.span
                                className="inline-block px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium mb-4"
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                My Creative Work
                            </motion.span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Creative <span className="gradient-text">Portfolio</span>
                            </h1>
                            <p className="text-lg text-gray-400">
                                A showcase of my latest work in 3D Motion, 2D Animation, and Web Design.
                                Each project is crafted with passion and attention to detail.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Filter Section */}
            <section className="mb-16">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="flex flex-wrap justify-center gap-4">
                            {GALLERY_CATEGORIES.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${selectedCategory === category
                                        ? 'bg-accent-cyan border-accent-cyan text-primary-dark shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                                        : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Project Grid */}
            <section>
                <div className="container-custom">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="border-glow-card rounded-2xl overflow-hidden group/card cursor-pointer bg-primary-light/10 backdrop-blur-sm border border-white/5 h-full">
                                        {/* Project Image */}
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <motion.img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                            />

                                            {/* Overlay on hover */}
                                            <motion.div
                                                className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
                                            >
                                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                                    <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white" />
                                                </div>
                                            </motion.div>

                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-widest font-bold">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover/card:text-accent-cyan transition-colors line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                                                Professional creative work specializing in {project.category.toLowerCase()} and visual storytelling.
                                            </p>

                                            <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                                <motion.button
                                                    className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-accent-cyan hover:text-white transition-all duration-300"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    View Project
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
