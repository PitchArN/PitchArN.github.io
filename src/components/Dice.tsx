"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Button, Card } from "@heroui/react";
import Confetti from 'react-confetti';
import { useRouter } from "next/navigation";
import { faceGradients, fortuneIcons } from "@/utils/fortuneUtils";

const faceRotations: { x: number; y: number }[] = [
    { x: 0, y: 0 },
    { x: 0, y: -90 },
    { x: 0, y: 180 },
    { x: 0, y: 90 },
    { x: -90, y: 0 },
    { x: 90, y: 0 },
];

export default function Dice() {
    const router = useRouter()
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [result, setResult] = useState<number | undefined>();
    const [showResult, setShowResult] = useState(false);

    const throwDice = () => {
        const face = Math.floor(Math.random() * 6);
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

    const handleClickShowResult = (result: number) => {
        router.push(`/fortune/${result}`)
    }

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-full p-6 ">
            {/* Confetti */}
            {result?.toString() && showResult && <Confetti className="z-10" width={window.innerWidth - 24} height={window.innerHeight - 24} />}

            <motion.div
                className="w-[150px] h-[150px] cursor-pointer"
                drag
                dragMomentum={false}
                onClick={throwDice}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    className="relative w-full h-full preserve-3d"
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
                        const faceNumber = i;
                        return (
                            <div
                                key={i + 1}
                                className={clsx(
                                    "absolute w-full h-full flex items-center justify-center text-white text-4xl font-bold rounded-sm  border-8 border-white",
                                    faceGradients[faceNumber]
                                )}
                                style={{
                                    transform: getFaceTransform(faceNumber),
                                }}
                            >
                                {fortuneIcons[faceNumber].icon}
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>

            {showResult && result?.toString() && (
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 backdrop-blur-xs">
                    <Card className="relative w-[90%] max-w-lg px-8 py-12 text-center bg-gray-700 rounded-md shadow">

                        <div className="flex flex-col items-center justify-center gap-3 pt-8 pb-6 text-white">
                            <div className="flex mb-4 text-5xl">{fortuneIcons[result].icon}</div>
                            <div className="flex flex-col w-4/5 gap-4">
                                <Button
                                    onClick={() => handleClickShowResult(result)}
                                    className="flex w-full p-2 text-base font-medium border-2 rounded-md text-slate-50 border-slate-50 animate-gradient bg-gradient-to-r from-pink-500/30 via-yellow-400/30 to-green-400/30"
                                    style={{ backgroundClip: "padding-box" }}
                                >
                                    ดูผล
                                </Button>
                                <Button
                                    onClick={() => { setShowResult(false); setResult(undefined) }}
                                    className="flex w-full p-2 text-base font-medium border-2 rounded-md text-slate-50 border-slate-50"
                                >
                                    ทอยอีกครั้ง
                                </Button></div>
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
        case 0:
            return `rotateY(0deg) translateZ(${distance}px)`;
        case 1:
            return `rotateY(90deg) translateZ(${distance}px)`;
        case 2:
            return `rotateY(180deg) translateZ(${distance}px)`;
        case 3:
            return `rotateY(-90deg) translateZ(${distance}px)`;
        case 4:
            return `rotateX(90deg) translateZ(${distance}px)`;
        case 5:
            return `rotateX(-90deg) translateZ(${distance}px)`;
        default:
            return "";
    }
}
