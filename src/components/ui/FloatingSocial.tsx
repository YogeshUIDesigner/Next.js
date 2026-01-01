'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaInstagram,
    FaWhatsapp,
    FaPhone
} from 'react-icons/fa6';
import { HiPlus, HiXMark } from 'react-icons/hi2';

const socialLinks = [
    {
        id: 'instagram',
        icon: <FaInstagram size={24} />,
        href: 'https://www.instagram.com/yogeshoneness888',
        color: 'bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
        label: 'Instagram'
    },
    // {
    //     id: 'youtube',
    //     icon: <FaYoutube size={24} />,
    //     href: 'https://youtube.com/@yogeshdesigner',
    //     color: 'bg-[#ff0000]',
    //     label: 'YouTube'
    // },
    {
        id: 'phone',
        icon: <FaPhone size={22} />,
        href: 'tel:+919870765966',
        color: 'bg-[#25D366]',
        label: 'Call Us'
    },
    {
        id: 'whatsapp',
        icon: <FaWhatsapp size={26} />,
        href: 'https://wa.me/919870765966',
        color: 'bg-[#25D366]',
        label: 'WhatsApp'
    }
];

export default function FloatingSocial() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-center gap-4">
            <AnimatePresence>
                {isOpen && (
                    <div className="flex flex-col items-center gap-4 mb-2">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.id}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg shadow-black/20 ${link.color}`}
                                initial={{ opacity: 0, scale: 0, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0, y: 20 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 25,
                                    delay: (socialLinks.length - index - 1) * 0.05
                                }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl shadow-black/30 transition-colors duration-300 ${isOpen ? 'bg-[#1a1f2e]' : 'bg-gradient-to-r from-accent-blue to-accent-cyan'
                    }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <HiXMark size={32} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <HiPlus size={32} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
