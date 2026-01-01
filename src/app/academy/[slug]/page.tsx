'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogPosts } from '@/data/blog';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, ShareIcon } from '@heroicons/react/24/outline';

export default function ArticlePage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
    const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

    return (
        <div className="min-h-screen pt-28 pb-20">
            {/* Back Button */}
            <div className="container-custom mb-8">
                <Link href="/portfolio">
                    <motion.button
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        whileHover={{ x: -5 }}
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        Back to Academy
                    </motion.button>
                </Link>
            </div>

            {/* Article Header */}
            <section className="pb-12">
                <div className="container-custom max-w-4xl">
                    <ScrollReveal>
                        <div className="text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-4">
                                {post.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                                {post.title}
                            </h1>

                            {/* Author & Meta */}
                            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white font-bold">
                                        {post.author.name.charAt(0)}
                                    </div>
                                    <span className="text-white font-medium">{post.author.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarIcon className="w-4 h-4" />
                                    {post.publishedAt}
                                </div>
                                <div className="flex items-center gap-2">
                                    <ClockIcon className="w-4 h-4" />
                                    {post.readTime}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Featured Image */}
            <section className="pb-12">
                <div className="container-custom max-w-5xl">
                    <ScrollReveal>
                        <motion.div
                            className="aspect-video rounded-2xl glass-card overflow-hidden relative"
                            whileHover={{ scale: 1.01 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/30 to-accent-cyan/30 flex items-center justify-center">
                                <span className="text-8xl">📈</span>
                            </div>
                        </motion.div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Article Content */}
            <section className="pb-16">
                <div className="container-custom max-w-3xl">
                    <ScrollReveal>
                        <article className="prose prose-lg prose-invert max-w-none">
                            <div
                                className="text-gray-300 leading-relaxed space-y-6"
                                dangerouslySetInnerHTML={{
                                    __html: post.content
                                        .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-white mt-8 mb-4">$1</h1>')
                                        .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-white mt-8 mb-4">$1</h2>')
                                        .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold text-white mt-6 mb-3">$1</h3>')
                                        .replace(/^\*\*(.*)\*\*/gm, '<strong class="text-white">$1</strong>')
                                        .replace(/^\d\. \*\*(.*)\*\*/gm, '<p class="pl-4 border-l-2 border-accent-blue/50"><strong class="text-white">$1</strong></p>')
                                        .replace(/\n\n/g, '</p><p class="text-gray-300 leading-relaxed">')
                                }}
                            />
                        </article>
                    </ScrollReveal>
                </div>
            </section>

            {/* Share Section */}
            <section className="pb-16">
                <div className="container-custom max-w-3xl">
                    <ScrollReveal>
                        <div className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center text-white font-bold text-lg">
                                    {post.author.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white font-medium">{post.author.name}</p>
                                    <p className="text-sm text-gray-400">Trading Educator</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-400">Share this article:</span>
                                <motion.button
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ShareIcon className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Related Articles */}
            <section className="py-16 bg-primary-light/20">
                <div className="container-custom">
                    <ScrollReveal>
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">
                            Related Articles
                        </h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedPosts.map((relPost, idx) => (
                            <ScrollReveal key={relPost.id} delay={idx * 0.1}>
                                <Link href={`/portfolio/${relPost.slug}`}>
                                    <motion.article
                                        className="glass-card rounded-xl overflow-hidden group"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="aspect-video bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center">
                                            <span className="text-3xl">📊</span>
                                        </div>
                                        <div className="p-4">
                                            <span className="text-xs text-accent-cyan">{relPost.category}</span>
                                            <h3 className="text-white font-medium mt-1 group-hover:text-accent-cyan transition-colors line-clamp-2">
                                                {relPost.title}
                                            </h3>
                                        </div>
                                    </motion.article>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
