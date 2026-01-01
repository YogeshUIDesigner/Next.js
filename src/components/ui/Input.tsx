'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, icon, className = '', ...props }, ref) => {
        return (
            <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {label && (
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        {label}
                    </label>
                )}
                <div className="relative group">
                    {icon && (
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-accent-blue transition-colors">
                            {icon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        className={`
              w-full px-4 py-3 ${icon ? 'pl-12' : ''} 
              bg-white/5 border border-white/10 rounded-xl
              text-white placeholder-gray-500
              transition-all duration-300
              focus:outline-none focus:border-accent-blue/50 focus:bg-white/[0.08]
              focus:shadow-[0_0_20px_rgba(59,130,246,0.15)]
              hover:border-white/20 hover:bg-white/[0.06]
              ${error ? 'border-red-500/50 focus:border-red-500' : ''}
              ${className}
            `}
                        {...props}
                    />

                    {/* Focus glow effect */}
                    <motion.div
                        className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-focus-within:opacity-100"
                        initial={false}
                        animate={{
                            boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.1)',
                        }}
                        transition={{ duration: 0.2 }}
                    />
                </div>

                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-sm text-red-400"
                    >
                        {error}
                    </motion.p>
                )}
            </motion.div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
