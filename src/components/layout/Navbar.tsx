'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline';
import Button from '@/components/ui/Button';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
     { href: '/how-it-works', label: 'How It Works' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'py-3 bg-[#0B0F1A]/95 md:bg-primary/80 md:backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                : 'py-5 bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <nav className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-10">
                    <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center">
                            <span className="text-white font-bold text-xl">Y</span>
                        </div>
                        <span className="text-xl font-bold text-white">
                            Yogesh<span className="text-accent-cyan">Designer</span>
                        </span>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative group"
                        >
                            <motion.span
                                className={`text-sm font-medium transition-colors ${pathname === link.href
                                    ? 'text-accent-cyan'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                                whileHover={{ y: -1 }}
                            >
                                {link.label}
                            </motion.span>
                            <motion.span
                                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-cyan"
                                initial={{ width: pathname === link.href ? '100%' : '0%' }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/contact">
                        <Button size="sm">Contact Us</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="lg:hidden relative z-10 p-2 rounded-lg bg-white/5 border border-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <XMarkIcon className="w-6 h-6 text-white" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Bars3Icon className="w-6 h-6 text-white" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden fixed inset-0 bg-[#0F172A] z-[100] flex flex-col h-[100dvh]"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{
                            type: 'spring',
                            damping: 30,
                            stiffness: 300,
                            mass: 0.8
                        }}
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-lg sticky top-0 z-10">
                            <Link href="/" className="relative z-10" onClick={() => setIsOpen(false)}>
                                <div className="flex items-center gap-2">
                                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">Y</span>
                                    </div>
                                    <span className="text-lg font-bold text-white">
                                        Yogesh<span className="text-accent-cyan">Designer</span>
                                    </span>
                                </div>
                            </Link>
                            <button
                                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <XMarkIcon className="w-6 h-6 text-white" />
                            </button>
                        </div>

                        {/* Mobile Menu Links */}
                        <div className="flex-1 overflow-y-auto pt-8 pb-12 px-6 flex flex-col items-center gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}
                                    transition={{ delay: index * 0.04 }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={link.href}
                                        className={`block py-3 text-xl font-semibold transition-colors ${pathname === link.href
                                            ? 'text-accent-cyan'
                                            : 'text-white hover:text-accent-cyan'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                transition={{ delay: navLinks.length * 0.04 }}
                                className="flex flex-col w-full gap-4 mt-4 px-4"
                            >
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <Button size="lg" className="w-full py-4 rounded-2xl shadow-lg shadow-accent-blue/20">Contact Us</Button>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
