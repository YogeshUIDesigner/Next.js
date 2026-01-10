'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { blogPosts, categories } from '@/data/blog';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function AcademyPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPosts = useMemo(() => {
        return selectedCategory === 'All'
            ? blogPosts
            : blogPosts.filter((post) => post.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen pt-28 pb-20">
            {/* Hero */}
            <section className="relative pb-16 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-accent-purple/15 blur-[150px]"
                    animate={{ x: [0, 30, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 12, repeat: Infinity }}
                />

                <div className="container-custom relative z-10">
                    <ScrollReveal>
                        <div className="text-center max-w-3xl mx-auto">
                            <motion.span
                                className="inline-block px-4 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-sm font-medium mb-4"
                                whileHover={{ scale: 1.05 }}
                            >
                                Trading Academy
                            </motion.span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Learn to Trade <span className="gradient-text">Like a Pro</span>
                            </h1>
                            <p className="text-lg text-gray-400">
                                Educational resources, strategies, and insights from professional traders to help you succeed.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Categories */}
            <section className="pb-12">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                        ? 'bg-accent-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
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

            {/* Featured Post */}
            {selectedCategory === 'All' && (
                <section className="pb-16">
                    <div className="container-custom">
                        <ScrollReveal>
                            <Link href={`/portfolio/${blogPosts[0].slug}`}>
                                <motion.div
                                    className="glass-card rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0"
                                    whileHover={{ y: -8 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {/* Image */}
                                    <div className="aspect-video md:aspect-auto bg-gradient-to-br from-accent-blue/30 to-accent-cyan/30 relative">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-6xl">📈</span>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-accent-blue text-white text-xs font-medium">
                                                Featured
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col justify-center">
                                        <span className="text-accent-cyan text-sm font-medium mb-2">
                                            {blogPosts[0].category}
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                            {blogPosts[0].title}
                                        </h2>
                                        <p className="text-gray-400 mb-6">{blogPosts[0].excerpt}</p>

                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <CalendarIcon className="w-4 h-4" />
                                                <span>{blogPosts[0].publishedAt}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <ClockIcon className="w-4 h-4" />
                                                <span>{blogPosts[0].readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>
            )}

            {/* Blog Grid */}
            <section className="pb-20">
                <div className="container-custom">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCategory}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {filteredPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05,
                                        ease: 'easeOut'
                                    }}
                                >
                                    <Link href={`/portfolio/${post.slug}`}>
                                        <motion.article
                                            className="glass-card rounded-2xl overflow-hidden h-full group"
                                            whileHover={{ y: -8 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        >
                                            {/* Image */}
                                            <div className="aspect-video bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 relative overflow-hidden">
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-br from-accent-blue/40 to-accent-cyan/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-4xl">📊</span>
                                                </div>
                                                <div className="absolute top-3 left-3">
                                                    <span className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs">
                                                        {post.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                                                    {post.excerpt}
                                                </p>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white text-sm font-bold">
                                                            {post.author.name.charAt(0)}
                                                        </div>
                                                        <span className="text-sm text-gray-400">{post.author.name}</span>
                                                    </div>
                                                    <span className="text-xs text-gray-500">{post.readTime}</span>
                                                </div>
                                            </div>
                                        </motion.article>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-primary-light/30">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Stay Updated with Trading Insights
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                                Subscribe to our newsletter for weekly trading tips, market analysis, and exclusive educational content.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue/50"
                                />
                                <motion.button
                                    className="px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold rounded-xl"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
