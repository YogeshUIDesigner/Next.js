'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import ScrollReveal from '@/components/animations/ScrollReveal';

// Static data removed - fetching from database

export default function LiveProjects() {
    const [liveProjects, setLiveProjects] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [visibleCards, setVisibleCards] = useState(3);

    // Fetch live projects
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects?type=live');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                setLiveProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Handle responsive visible cards
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1); // Mobile: 1 card
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2); // Tablet: 2 cards
            } else {
                setVisibleCards(3); // Desktop: 3 cards
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, liveProjects.length - visibleCards);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying || liveProjects.length === 0) return;
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, currentIndex, maxIndex, liveProjects.length]);

    // Calculate card width percentage based on visible cards
    const cardWidthPercent = 100 / visibleCards;

    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-light/20 to-primary" />

            <div className="container-custom relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Live <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-4">
                            Explore our portfolio of successfully delivered projects
                        </p>
                    </div>
                </ScrollReveal>

                {/* Slider Container */}
                <div
                    className="relative group/slider px-4 md:px-0"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {isLoading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-cyan"></div>
                        </div>
                    ) : (
                        <>
                            {/* Navigation Buttons - More premium style */}
                            <div className="hidden md:block">
                                <motion.button
                                    onClick={prevSlide}
                                    className="absolute -left-4 lg:-left-8 top-[40%] -translate-y-1/2 z-30 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-accent-cyan border border-white/10 hover:border-accent-cyan/30 transition-all shadow-2xl opacity-0 group-hover/slider:opacity-100"
                                    whileHover={{ scale: 1.1, x: -4 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ChevronLeftIcon className="w-6 h-6" />
                                </motion.button>

                                <motion.button
                                    onClick={nextSlide}
                                    className="absolute -right-4 lg:-right-8 top-[40%] -translate-y-1/2 z-30 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-accent-cyan border border-white/10 hover:border-accent-cyan/30 transition-all shadow-2xl opacity-0 group-hover/slider:opacity-100"
                                    whileHover={{ scale: 1.1, x: 4 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ChevronRightIcon className="w-6 h-6" />
                                </motion.button>
                            </div>

                            {/* Cards Container */}
                            <div className="overflow-visible py-4">
                                <div className="overflow-hidden rounded-3xl">
                                    <motion.div
                                        className="flex"
                                        animate={{ x: `-${currentIndex * cardWidthPercent}%` }}
                                        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                    >
                                        {liveProjects.map((project, index) => (
                                            <motion.div
                                                key={project.id}
                                                className="flex-shrink-0 px-3 md:px-4"
                                                style={{ width: `${cardWidthPercent}%` }}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <motion.div
                                                    className="border-glow-card rounded-2xl overflow-hidden group/card cursor-pointer h-full bg-primary-light/30 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300"
                                                    whileHover={{ y: -10 }}
                                                >
                                                    {/* Project Image */}
                                                    <div className="relative aspect-[16/10] overflow-hidden">
                                                        <motion.img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                                        />

                                                        {/* Overlay on hover */}
                                                        <motion.div
                                                            className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                                        >
                                                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                                                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white" />
                                                            </div>
                                                        </motion.div>

                                                        {/* Live badge - Cleaner design */}
                                                        <div className="absolute top-4 right-4 z-10">
                                                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-red-500/30 text-white text-[10px] font-bold uppercase tracking-wider">
                                                                <span className="relative flex h-2 w-2">
                                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                                                                </span>
                                                                Live
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="p-6">
                                                        <div className="mb-4">
                                                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover/card:text-accent-cyan transition-colors line-clamp-1">
                                                                {project.title}
                                                            </h3>
                                                            <span className="text-xs font-medium text-accent-cyan/80 uppercase tracking-widest">{project.category}</span>
                                                        </div>

                                                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                                            <motion.button
                                                                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-accent-cyan hover:text-white transition-all duration-300 shadow-lg"
                                                                whileHover={{ scale: 1.02 }}
                                                                whileTap={{ scale: 0.98 }}
                                                            >
                                                                View Project
                                                            </motion.button>
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Mobile Navigation Buttons */}
                            <div className="flex md:hidden justify-center gap-4 mt-8">
                                <motion.button
                                    onClick={prevSlide}
                                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white border border-white/10"
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ChevronLeftIcon className="w-6 h-6" />
                                </motion.button>
                                <motion.button
                                    onClick={nextSlide}
                                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white border border-white/10"
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ChevronRightIcon className="w-6 h-6" />
                                </motion.button>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-3 mt-8 md:mt-12">
                                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'w-8 bg-accent-cyan'
                                            : 'w-2 bg-white/10 hover:bg-white/30'
                                            }`}
                                        whileHover={{ scale: 1.2 }}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
