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
        <section className="py-10 overflow-hidden bg-primary/30 border-y border-white/5">
            <div className="container-custom mb-6 text-center">
                <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">Trusted by Brands</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Gradient masks for smooth fade effect at edges */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10" />

                <motion.div
                    className="flex gap-16 items-center flex-nowrap whitespace-nowrap"
                    animate={{
                        x: [0, -1920], // Adjust based on total width of logos
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 30, // Adjust speed
                            ease: 'linear',
                        },
                    }}
                >
                    {/* Double the logos for seamless looping */}
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={`${logo.name}-${index}`} className="relative w-32 h-16 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
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
