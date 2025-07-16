'use client';

import { Button } from '@heroui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

interface BirthdayCardProps {
    children: React.ReactNode;
}

export default function BirthdayCard({ children }: BirthdayCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
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
        }, 1600);
    };

    return (
        <div className={`relative flex items-center justify-center w-screen h-screen overflow-hidden ${(!isOpen && !isAnimating) ? "border-b-4 border-red-400" : ""} bg-gradient-to-br from-gray-100 to-gray-400`}>
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            {(!isOpen && !isAnimating) && <div className='fixed z-50 text-lg text-center text-gray-500 top-5 '>ดูดีที่สุดบนจอโทรศัพท์แนวตั้งนะ <br /> (เลื่อนจอให้เห็นขอบแดงข้างล่างด้วย)</div>}
            <div className="relative z-10 flex items-center justify-center w-full h-full">

                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1, duration: 0.7 }}
                        className='absolute z-30'
                    ><Button
                        onClick={handleOpen}
                        className="px-6 py-3 text-lg font-semibold text-white transition rounded-full shadow-xl bg-gradient-to-r from-gray-600 to-sky-800 hover:scale-105"
                    >
                            🎁 เปิด
                        </Button></motion.div>

                )}

                <motion.div
                    animate={{ rotateY: isOpen ? -140 : 0 }}
                    transition={{ duration: 1 }}
                    className="z-20 w-1/2 h-full overflow-hidden origin-left border-r border-gray-400 shadow-inner bg-gradient-to-br from-gray-300 to-gray-100 rounded-l-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                />

                <motion.div
                    animate={{ rotateY: isOpen ? 140 : 0 }}
                    transition={{ duration: 1 }}
                    className="z-20 w-1/2 h-full overflow-hidden origin-right border-l border-gray-400 shadow-inner bg-gradient-to-br from-gray-300 to-gray-100 rounded-r-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                />

                <motion.div
                    animate={{ rotateX: isOpen ? -120 : 0 }}
                    transition={{ duration: 0.7, delay: isOpen ? 0.6 : 0.4 }}
                    className="absolute bottom-0 z-10 w-full origin-bottom shadow-inner h-1/2 bg-white/70 rounded-t-xl"
                />
                <motion.div
                    animate={{ rotateX: isOpen ? 120 : 0 }}
                    transition={{ duration: 0.7, delay: isOpen ? 0.6 : 0.4 }}
                    className="absolute top-0 z-10 w-full origin-top shadow-inner h-1/2 bg-white/70 rounded-b-xl"
                />

                <AnimatePresence>
                    {isOpen && !isAnimating && (
                        <motion.div
                            key="inner-content"
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute z-10 flex flex-col items-center justify-center w-full h-full px-0.5 text-center rounded-md backdrop-blur-md"
                        >
                            <div className="relative w-full max-w-lg h-[80%] lg:h-[60%] mt-8 lg:mt-2">{children}</div>
                            <div className='w-full h-[10%]'>
                                <Button
                                    onClick={handleClose}
                                    className="px-5 py-2 mt-4 font-semibold text-gray-700 transition border-2 border-gray-700 rounded-full shadow-md text-md hover:scale-105"
                                >
                                    พับเก็บ
                                </Button></div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
