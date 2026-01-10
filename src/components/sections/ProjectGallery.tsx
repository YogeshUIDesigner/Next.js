'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { projectGalleryData, GALLERY_CATEGORIES } from '@/data/projectGallery';

export default function ProjectGallery() {
    const [projects, setProjects] = useState<any[]>(projectGalleryData);
    const [isLoading, setIsLoading] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = useMemo(() => {
        let results = activeFilter === 'All'
            ? projects
            : projects.filter(project => project.category === activeFilter);
        return results.slice(0, 6);
    }, [activeFilter, projects]);

    return (
        <section className="relative py-16 md:py-24 overflow-hidden bg-primary">
            <div className="container-custom relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Project <span className="gradient-text">Gallery</span>
                        </h2>

                        {/* Filters */}
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
                            {GALLERY_CATEGORIES.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeFilter === category
                                        ? 'bg-accent-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Project Grid */}
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-blue"></div>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="group"
                                >
                                    <motion.div
                                        className="border-glow-card rounded-2xl overflow-hidden cursor-pointer h-full"
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        {/* Image Container */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <motion.img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.5 }}
                                            />

                                            {/* Overlay */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                            >
                                                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                                                    <ArrowTopRightOnSquareIcon className="w-6 h-6 text-white" />
                                                </div>
                                            </motion.div>

                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 rounded-full bg-primary/60 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-wider font-semibold">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 md:p-6 bg-primary-light/40">
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                                                {project.title}
                                            </h3>
                                            <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                                <motion.button
                                                    className="w-full mt-4 px-4 py-2.5 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-sm font-semibold hover:bg-accent-blue hover:text-white transition-all shadow-lg shadow-accent-blue/5"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    View Details
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {/* View More Button */}
                <ScrollReveal delay={0.2}>
                    <div className="mt-16 text-center">
                        <Link href="/portfolio">
                            <motion.button
                                className="px-10 py-4 bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-bold rounded-2xl shadow-xl shadow-accent-blue/20 hover:shadow-accent-blue/40 transition-all border border-white/10"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View More Projects
                            </motion.button>
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
