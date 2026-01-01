'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    glow?: boolean;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    icon,
    iconPosition = 'left',
    glow = true,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = `
    relative inline-flex items-center justify-center gap-2 font-semibold
    rounded-xl transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-primary
  `;

    const variants = {
        primary: `
      bg-gradient-to-r from-accent-blue to-accent-cyan text-white
      hover:shadow-[0_0_30px_rgba(59,130,246,0.6),0_0_60px_rgba(6,182,212,0.4)]
      hover:scale-[1.02] active:scale-[0.98]
    `,
        secondary: `
      bg-gradient-to-r from-accent-green to-accent-cyan text-white
      hover:shadow-[0_0_30px_rgba(16,185,129,0.6),0_0_60px_rgba(6,182,212,0.4)]
      hover:scale-[1.02] active:scale-[0.98]
    `,
        outline: `
      bg-transparent border border-accent-blue/50 text-accent-blue
      hover:bg-accent-blue/10 hover:border-accent-blue
      hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]
      hover:scale-[1.02] active:scale-[0.98]
    `,
        ghost: `
      bg-white/5 text-white hover:bg-white/10
      hover:scale-[1.02] active:scale-[0.98]
    `,
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            disabled={isLoading}
            {...props}
        >
            {/* Animated gradient border for glow effect */}
            {glow && variant === 'primary' && (
                <motion.span
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-green opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                />
            )}

            {/* Loading spinner */}
            {isLoading && (
                <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <svg
                        className="h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                </motion.span>
            )}

            {/* Content */}
            <span className={`flex items-center gap-2 ${isLoading ? 'opacity-0' : ''}`}>
                {icon && iconPosition === 'left' && icon}
                {children}
                {icon && iconPosition === 'right' && icon}
            </span>

            {/* Shimmer effect */}
            <motion.span
                className="absolute inset-0 rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
            >
                <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
            </motion.span>
        </motion.button>
    );
}
