'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function HireMePopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isNearFooter, setIsNearFooter] = useState(false);

    useEffect(() => {
        // Check if the popup has already been shown in this session
        const hasShown = sessionStorage.getItem('hireMePopupShown');

        if (!hasShown) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 10000); // 10 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = window.innerHeight;

            // Hide if we are within 500px of the bottom (footer area)
            // or if the scroll position is near the bottom
            if (scrollTop + clientHeight > scrollHeight - 500) {
                setIsNearFooter(true);
            } else {
                setIsNearFooter(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('hireMePopupShown', 'true');
    };

    return (
        <AnimatePresence>
            {isOpen && !isNearFooter && (
                <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-6 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="pointer-events-auto max-w-4xl mx-auto glass-card border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden"
                    >
                        <div className="relative p-6 flex flex-col md:flex-row items-center gap-6">
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl -z-10" />

                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all active:scale-95"
                                aria-label="Close popup"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>

                            {/* Profile Image */}
                            <div className="relative flex-shrink-0">
                                <div className="w-20 h-20 rounded-full border-2 border-accent-blue p-1 bg-white/5 overflow-hidden">
                                    <img
                                        src="/Images/yogesh.webp"
                                        alt="Yogesh"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-[#0a0a0a] rounded-full" />
                            </div>

                            {/* Content */}
                            <div className="flex-grow text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-1">Let&apos;s Build Success Together!</h3>
                                <p className="text-gray-400 text-sm md:text-base max-w-lg">
                                    Ready to bring your vision to life? I&apos;m currently available for interesting new projects.
                                </p>
                            </div>

                            {/* Action Button */}
                            <div className="flex-shrink-0 w-full md:w-auto">
                                <Link
                                    href="/contact"
                                    onClick={handleClose}
                                    className="block"
                                >
                                    <Button
                                        size="lg"
                                        className="w-full md:w-auto px-8 py-3 whitespace-nowrap"
                                    >
                                        Hire Me Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
