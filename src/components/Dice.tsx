"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

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
const faceIcon: Record<number, string> = {
    1: "หนึ่ง",
    2: "สอง",
    3: "สาม",
    4: "สี่",
    5: "ห้า",
    6: "หก",
};

export default function Dice() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [result, setResult] = useState<number>();
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
        setShowResult(false); // Hide during animation
    };

    return (
        <div className="flex flex-col items-center space-y-4">
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
                                    "absolute w-full h-full flex items-center justify-center text-white text-3xl font-bold rounded-sm shadow-2xl border-8 border-white",
                                    faceGradients[faceNumber]
                                )}
                                style={{
                                    transform: getFaceTransform(faceNumber),
                                }}
                            >
                                {faceIcon[i + 1]}
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {showResult && result && (
                <div className="fixed text-lg font-semibold text-white bg-gray-700">
                    Result: <span className="text-purple-600">{result}</span>
                </div>
            )}
        </div>
    );
}

function getFaceTransform(face: number) {
    const distance = 74;
    switch (face) {
        case 1:
            return `rotateY(0deg) translateZ(${distance}px)`; // Front
        case 2:
            return `rotateY(90deg) translateZ(${distance}px)`; // Right
        case 3:
            return `rotateY(180deg) translateZ(${distance}px)`; // Back
        case 4:
            return `rotateY(-90deg) translateZ(${distance}px)`; // Left
        case 5:
            return `rotateX(90deg) translateZ(${distance}px)`; // Top
        case 6:
            return `rotateX(-90deg) translateZ(${distance}px)`; // Bottom
        default:
            return "";
    }
}
