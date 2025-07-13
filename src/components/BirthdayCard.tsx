'use client';

import { Button } from '@heroui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Confetti from 'react-confetti';

interface BirthdayCardProps {
    children: React.ReactNode;
}

export default function BirthdayCard({ children }: BirthdayCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    // Handle confetti appearance timing
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setShowConfetti(true), 1200);
            return () => clearTimeout(timer);
        } else {
            setShowConfetti(false);
        }
    }, [isOpen]);

    const handleOpen = () => {
        setIsAnimating(true);
        setIsOpen(true);
        setTimeout(() => setIsAnimating(false), 1500);
    };

    const handleClose = () => {
        setIsAnimating(true);
        setShowConfetti(false);
        setTimeout(() => {
            setIsOpen(false);
            setIsAnimating(false);
        }, 1600); // Wait until all reverse animations complete
    };

    return (
        <div className="relative w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-400 overflow-hidden">

            {/* Confetti */}
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

            {/* Card Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">

                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1, duration: 0.7 }}
                        className='absolute z-30'
                        children={<Button
                            onClick={handleOpen}
                            className=" px-6 py-3 text-lg font-semibold bg-gradient-to-r from-gray-600 to-gray-500 text-white shadow-xl hover:scale-105 transition rounded-full"
                        >
                            🎁 Open
                        </Button>}
                    />

                )}

                {/* Side Doors */}
                <motion.div
                    animate={{ rotateY: isOpen ? -140 : 0 }}
                    transition={{ duration: 1 }}
                    className=" w-1/2 h-full origin-left bg-gradient-to-br from-gray-300 to-gray-100 border-r border-gray-400 shadow-inner z-20 rounded-l-xl overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                />

                <motion.div
                    animate={{ rotateY: isOpen ? 140 : 0 }}
                    transition={{ duration: 1 }}
                    className=" w-1/2 h-full origin-right bg-gradient-to-br from-gray-300 to-gray-100 border-l border-gray-400 shadow-inner z-20 rounded-r-xl overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                />

                {/* Top and Bottom Flaps */}
                <motion.div
                    animate={{ rotateX: isOpen ? -120 : 0 }}
                    transition={{ duration: 0.7, delay: isOpen ? 0.6 : 0.4 }}
                    className="absolute bottom-0 w-full h-1/2 origin-bottom bg-white/70 rounded-t-xl shadow-inner z-10"
                />
                <motion.div
                    animate={{ rotateX: isOpen ? 120 : 0 }}
                    transition={{ duration: 0.7, delay: isOpen ? 0.6 : 0.4 }}
                    className="absolute top-0 w-full h-1/2 origin-top bg-white/70 rounded-b-xl shadow-inner z-10"
                />

                {/* Inner Content with Exit Animation */}
                <AnimatePresence>
                    {isOpen && !isAnimating && (
                        <motion.div
                            key="inner-content"
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute w-full h-full flex flex-col items-center justify-center px-10 text-center backdrop-blur-xs rounded-xl shadow-2xl border border-gray-300 z-10"
                        >
                            <div className="mb-6">{children}</div>

                            <Button
                                onClick={handleClose}
                                className="mt-4 px-5 py-2 text-md font-semibold border-2 border-gray-700 text-gray-700 shadow-md hover:scale-105 transition rounded-full"
                            >
                                Fold
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
