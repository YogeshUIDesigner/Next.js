'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.9,
        }),
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => {
            if (newDirection === 1) {
                return prev === testimonials.length - 1 ? 0 : prev + 1;
            }
            return prev === 0 ? testimonials.length - 1 : prev - 1;
        });
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-light/30" />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-blue/5 blur-[150px]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="container-custom relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block px-4 py-1.5 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-sm font-medium mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Success Stories
                        </motion.span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            What Clients Say About <span className="gradient-text">My Work</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Real clients, real projects.
                            Here’s what people say about working with me and the results I deliver.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Testimonial Slider */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <motion.button
                            onClick={() => paginate(-1)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-accent-cyan transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </motion.button>
                        <motion.button
                            onClick={() => paginate(1)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-accent-cyan transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChevronRightIcon className="w-6 h-6" />
                        </motion.button>

                        {/* Testimonial Card */}
                        <div className="overflow-hidden">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: 'spring', stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.3 },
                                        scale: { duration: 0.3 },
                                    }}
                                    className="glass-card p-8 md:p-12 rounded-3xl text-center"
                                >
                                    {/* Quote icon */}
                                    <motion.div
                                        className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-blue/20 flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1, rotate: [0, 10, 0] }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                    >
                                        <svg className="w-8 h-8 text-accent-blue" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </motion.div>

                                    {/* Stars */}
                                    <div className="flex justify-center gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.1 * i }}
                                            >
                                                <StarIcon className="w-5 h-5 text-yellow-400" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                                        &quot;{currentTestimonial.content}&quot;
                                    </p>

                                    {/* Profit badge */}
                                    {/* <motion.div
                                        className="inline-block px-4 py-2 rounded-full bg-accent-green/20 text-accent-green font-semibold mb-6"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Total Profit: {currentTestimonial.profit}
                                    </motion.div> */}

                                    {/* Author */}
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white font-bold text-xl">
                                            {currentTestimonial.name.charAt(0)}
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-white font-semibold">
                                                {currentTestimonial.name}
                                            </h3>
                                            <p className="text-gray-400 text-sm">
                                                {currentTestimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-accent-cyan w-8'
                                        : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
