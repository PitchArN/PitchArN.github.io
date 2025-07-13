"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Button, Card } from "@heroui/react";
import Confetti from 'react-confetti';

const faceRotations: Record<number, { x: number; y: number }> = {
    1: { x: 0, y: 0 },
    2: { x: 0, y: -90 },
    3: { x: 0, y: 180 },
    4: { x: 0, y: 90 },
    5: { x: -90, y: 0 },
    6: { x: 90, y: 0 },
};

const faceGradients: Record<number, string> = {
    1: "bg-gradient-to-br from-red-300 to-orange-300",
    2: "bg-gradient-to-br from-green-300 to-emerald-200",
    3: "bg-gradient-to-br from-blue-300 to-cyan-200",
    4: "bg-gradient-to-br from-yellow-200 to-amber-300",
    5: "bg-gradient-to-br from-purple-300 to-violet-200",
    6: "bg-gradient-to-br from-pink-300 to-rose-200",
};

// 🎴 Replace with real fortunes or icons later
const faceSymbols: Record<number, string> = {
    1: "🌞",
    2: "🌧️",
    3: "🌈",
    4: "💰",
    5: "❤️",
    6: "🌀",
};

export default function Dice() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [result, setResult] = useState<number | undefined>();
    const [showResult, setShowResult] = useState(false);

    const throwDice = () => {
        const face = Math.floor(Math.random() * 6) + 1;
        const base = faceRotations[face];
        const fullSpinsX = 360 * (Math.floor(Math.random() * 3) + 2);
        const fullSpinsY = 360 * (Math.floor(Math.random() * 3) + 2);

        setRotation({
            x: fullSpinsX + base.x,
            y: fullSpinsY + base.y,
        });

        setResult(face);
        setShowResult(false);
    };

    return (
        <div className="w-full h-full p-6 flex flex-col items-center justify-center border-8 border-white rounded-md relative">
            {/* Confetti */}
            {result && showResult && <Confetti className="z-10" width={window.innerWidth - 24} height={window.innerHeight - 24} />}

            <motion.div
                className="w-[150px] h-[150px] cursor-pointer"
                drag
                dragMomentum={false}
                onClick={throwDice}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    className="w-full h-full relative preserve-3d"
                    animate={{
                        rotateX: rotation.x,
                        rotateY: rotation.y,
                    }}
                    transition={{
                        duration: 2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    onAnimationComplete={() => {
                        setShowResult(true);
                    }}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                >
                    {Array.from({ length: 6 }).map((_, i) => {
                        const faceNumber = i + 1;
                        return (
                            <div
                                key={i}
                                className={clsx(
                                    "absolute w-full h-full flex items-center justify-center text-white text-4xl font-bold rounded-sm shadow-2xl border-8 border-white",
                                    faceGradients[faceNumber]
                                )}
                                style={{
                                    transform: getFaceTransform(faceNumber),
                                }}
                            >
                                {faceSymbols[faceNumber]}
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {showResult && result && (
                <div className="fixed w-full h-full inset-0  flex items-center justify-center z-50 p-4 backdrop-blur-xs">
                    <Card className="bg-white rounded-md shadow px-8 py-16 relative w-full max-w-sm text-center">

                        <div className="flex flex-col justify-center items-center pt-8 pb-6 text-white gap-3">
                            <div className="flex text-5xl mb-4">{faceSymbols[result]}</div>
                            <Button
                                onClick={() => console.log(result)}
                                className="flex w-full border-2 border-gray-700 text-gray-700 text-base font-medium rounded-md p-2 animate-gradient"
                            >
                                ดูผล
                            </Button>
                            <Button
                                onClick={() => { setShowResult(false); setResult(undefined) }}
                                className="flex border-2 border-gray-700 text-gray-700 p-2 rounded-md w-full text-base font-medium"
                            >
                                ทอยอีกครั้ง
                            </Button>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
}

function getFaceTransform(face: number) {
    const distance = 74;
    switch (face) {
        case 1:
            return `rotateY(0deg) translateZ(${distance}px)`;
        case 2:
            return `rotateY(90deg) translateZ(${distance}px)`;
        case 3:
            return `rotateY(180deg) translateZ(${distance}px)`;
        case 4:
            return `rotateY(-90deg) translateZ(${distance}px)`;
        case 5:
            return `rotateX(90deg) translateZ(${distance}px)`;
        case 6:
            return `rotateX(-90deg) translateZ(${distance}px)`;
        default:
            return "";
    }
}
