'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ParticleBackground() {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; duration: number; size: number }>>([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const particleCount = window.innerWidth < 768 ? 12 : 20;
        const newParticles = Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 20,
            duration: 20 + Math.random() * 20,
            size: 2 + Math.random() * 3,
        }));
        setParticles(newParticles);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Gradient orbs - Simplified on mobile */}
            {!isMobile && (
                <>
                    <motion.div
                        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue/10 blur-[80px]"
                        animate={{
                            x: [0, 40, 0],
                            y: [0, 20, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                    <motion.div
                        className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/8 blur-[60px]"
                        animate={{
                            x: [0, -30, 0],
                            y: [0, -25, 0],
                        }}
                        transition={{
                            duration: 22,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: 2,
                        }}
                    />
                </>
            )}

            {/* Static subtle background for mobile */}
            {isMobile && (
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-light/50 to-primary opacity-50" />
            )}

            {/* Floating particles - Fewer and slower on mobile */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-accent-blue/20"
                    style={{
                        left: `${particle.x}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    initial={{ y: '110vh', opacity: 0 }}
                    animate={{
                        y: '-10vh',
                        opacity: [0, 0.8, 0.8, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                }}
            />
        </div>
    );
}
