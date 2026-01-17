'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
    { name: 'Cloudline', src: '/Images/Logo/cloudline.webp' },
    { name: 'Craft', src: '/Images/Logo/craft.webp' },
    { name: 'Dubai', src: '/Images/Logo/dubai.webp' },
    { name: 'Fluffy', src: '/Images/Logo/fluffy.webp' },
    { name: 'Jondal', src: '/Images/Logo/jondal.webp' },
    { name: 'Neuro', src: '/Images/Logo/neuro.webp' },
    { name: 'Nylae', src: '/Images/Logo/nylae.webp' },
    { name: 'Prime Cut', src: '/Images/Logo/prime-cut.webp' },
];

export default function LogoSlider() {
    return (
        <section className="py-8 md:py-10 overflow-hidden bg-primary/30 border-y border-white/5">
            <div className="container-custom mb-6 text-center">
                <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-medium">Trusted by Brands</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Gradient masks for smooth fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-primary to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-primary to-transparent z-10" />

                <motion.div
                    className="flex gap-8 md:gap-16 items-center flex-nowrap whitespace-nowrap will-change-transform"
                    animate={{ x: ["0%", "-50%"] }} // Move halfway, since we have 2 full sets (original + duplicate) * 2 to fill screen
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 20,
                            ease: 'linear',
                        },
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Render enough sets to cover the screen and scroll smoothly.
                        Using 4 sets: Set 1 & 2 are sliding, Set 3 & 4 follow.
                        Actually, simplest infinite loop is 2 identical sets.
                        If width is large, we might need more duplication.
                        Let's do 4 sets to be safe on ultra-wide screens.
                        The animation moves -25% if we have 4 sets?
                        Actually if we have [A, A] and we move from 0% to -50%, it loops perfect.
                     */}
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="relative w-24 md:w-32 h-12 md:h-16 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
