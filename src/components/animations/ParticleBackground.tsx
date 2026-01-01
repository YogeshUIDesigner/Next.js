'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ParticleBackground() {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; duration: number; size: number }>>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 20,
            duration: 15 + Math.random() * 20,
            size: 2 + Math.random() * 4,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Gradient orbs */}
            <motion.div
                className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent-blue/20 blur-[120px]"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent-cyan/15 blur-[100px]"
                animate={{
                    x: [0, -80, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-accent-green/10 blur-[80px]"
                animate={{
                    x: [0, 60, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 4,
                }}
            />

            {/* Floating particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-accent-blue/30"
                    style={{
                        left: `${particle.x}%`,
                        width: particle.size,
                        height: particle.size,
                    }}
                    initial={{ y: '110vh', opacity: 0 }}
                    animate={{
                        y: '-10vh',
                        opacity: [0, 1, 1, 0],
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
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}
            />
        </div>
    );
}
