'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, MagnifyingGlassPlusIcon, MagnifyingGlassMinusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    mediaUrl: string;
    mediaType: 'image' | 'video';
    title?: string;
}

export default function Lightbox({
    isOpen,
    onClose,
    mediaUrl,
    mediaType,
    title,
}: LightboxProps) {
    const [isZoomed, setIsZoomed] = useState(false);

    // Reset zoom when lightbox closes
    useEffect(() => {
        if (!isOpen) {
            setIsZoomed(false);
        }
    }, [isOpen]);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Backdrop for closing */}
                    <div
                        className="absolute inset-0 z-0 cursor-default"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    <motion.div
                        className={`relative w-full h-full flex flex-col items-center z-10 transition-all duration-500 ${isZoomed ? 'max-w-none' : 'max-w-7xl justify-center mx-auto'}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        {/* Header with title and close button */}
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-6 z-30 mt-20 md:mt-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
                            {title && (
                                <h3 className="text-base md:text-xl font-bold text-white drop-shadow-lg line-clamp-1 pr-4">
                                    {title}
                                </h3>
                            )}
                            <div className="ml-auto flex items-center gap-3">
                                {mediaType === 'image' && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsZoomed(!isZoomed);
                                        }}
                                        className="p-3 bg-black/60 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-full text-white transition-all hover:scale-110 active:scale-90"
                                        title={isZoomed ? "Zoom Out" : "Zoom In"}
                                    >
                                        {isZoomed ? (
                                            <MagnifyingGlassMinusIcon className="w-6 h-6 md:w-8 md:h-8" />
                                        ) : (
                                            <MagnifyingGlassPlusIcon className="w-6 h-6 md:w-8 md:h-8" />
                                        )}
                                    </button>
                                )}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onClose();
                                    }}
                                    className="p-3 bg-black/60 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-full text-white transition-all hover:scale-110 active:scale-90"
                                    title="Close"
                                >
                                    <XMarkIcon className="w-6 h-6 md:w-8 md:h-8" />
                                </button>
                            </div>
                        </div>

                        {/* Media Container */}
                        <div className={`relative w-full h-full flex flex-col items-center ${isZoomed ? 'overflow-y-auto overflow-x-hidden pt-20 pb-10 scrollbar-hide' : 'justify-center overflow-hidden'}`}>
                            {mediaType === 'video' ? (
                                <video
                                    src={mediaUrl}
                                    controls
                                    autoPlay
                                    className="max-w-full max-h-full rounded-xl shadow-2xl pointer-events-auto z-20"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            ) : (
                                <div
                                    className={`relative transition-all duration-500 ease-in-out cursor-zoom-out ${isZoomed ? 'w-full' : 'w-full h-full flex items-center justify-center'}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsZoomed(!isZoomed);
                                    }}
                                >
                                    {isZoomed ? (
                                        <div className="w-full">
                                            <img
                                                src={mediaUrl}
                                                alt={title || 'Full view'}
                                                className="w-full h-auto rounded-xl shadow-2xl"
                                                loading="eager"
                                            />
                                        </div>
                                    ) : (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={mediaUrl}
                                                alt={title || 'Full view'}
                                                fill
                                                className="object-contain rounded-xl"
                                                quality={100}
                                                priority
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
