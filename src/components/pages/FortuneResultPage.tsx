'use client'

import { fortuneIcons } from '@/utils/fortuneUtils'
import { Button, Card } from '@heroui/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
    id: number
}

const FortuneResultPage = (props: Props) => {
    const router = useRouter()
    const { id } = props

    const [phase, setPhase] = useState<
        'open' | 'closed' | 'opening' | 'reveal' | 'exit'
    >('open')
    const [showCard, setShowCard] = useState(false)

    // Entry animation flow
    useEffect(() => {
        const closeCurtain = setTimeout(() => setPhase('closed'), 100)
        const openCurtain = setTimeout(() => setPhase('opening'), 1800)
        return () => {
            clearTimeout(closeCurtain)
            clearTimeout(openCurtain)
        }
    }, [])

    const handlePress = (route: string) => {
        setShowCard(false) // fade out card
        setTimeout(() => {
            setPhase('closed') // curtain closes
        }, 500);
        // Step 2: remove card after curtain closed
        setTimeout(() => {
            router.push(route)
        }, 1500)
    }

    return (
        <div className="relative flex items-center justify-center w-full h-screen overflow-hidden border-8 border-gray-700">
            {/* Background gradient */}
            <div className={`absolute w-screen h-screen animate-gradient -z-10`}>
                <div className={`absolute w-full h-full bg-gray-500 opacity-80`} />
            </div>

            {/* Card Reveal */}
            <div className="z-10 flex items-center justify-center text-base text-white">
                {phase === 'reveal' && (
                    <motion.div
                        className="flex items-center justify-center w-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: showCard ? 1 : 0, scale: showCard ? 1 : 0.95 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        onAnimationComplete={() => {
                            if (phase === 'reveal') setShowCard(true)
                        }}
                    >
                        <Card className="flex flex-col justify-center w-[90%] max-w-lg gap-2 px-8 py-12 text-center bg-gray-700 rounded-md shadow">
                            <div className="w-full text-5xl text-center">{fortuneIcons[id].icon}</div>
                            <div className="w-full text-center">{fortuneIcons[id].meaning.th}</div>
                            <div className="w-full text-sm text-center">{fortuneIcons[id].meaning.en}</div>
                            <div className="flex items-center justify-center w-full mt-3">
                                <motion.div
                                    initial={{ x: 0, opacity: 1 }}
                                    animate={{ x: 0, opacity: showCard ? 1 : 0 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className="flex flex-col w-4/5 gap-3"
                                >
                                    <Button
                                        onPress={() => handlePress("/fortune")}
                                        className="flex w-full p-2 text-base font-medium border-2 rounded-md text-slate-50 border-slate-50 animate-gradient"
                                    >
                                        ทอยอีกครั้ง
                                    </Button>
                                    <Button
                                        onPress={() => handlePress("/")}
                                        className="flex w-full p-2 text-base font-medium border-2 rounded-md text-slate-50 border-slate-50"
                                    >
                                        ไปที่การ์ดวันเกิด
                                    </Button>
                                </motion.div>
                            </div>
                        </Card>
                    </motion.div>
                )}
            </div>

            {/* Left Curtain */}
            <motion.div
                className="absolute top-0 left-0 h-full bg-linear-to-r from-gray-700 to-gray-600"
                animate={{
                    width:
                        phase === 'open'
                            ? '0%'
                            : phase === 'closed'
                                ? '50%'
                                : phase === 'opening'
                                    ? '0%'
                                    : '0%',
                }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                onAnimationComplete={() => {
                    if (phase === 'opening' && !showCard) {
                        // Only show card if coming in, not going out
                        setPhase('reveal')
                    }
                }}
            />

            {/* Right Curtain */}
            <motion.div
                className="absolute top-0 right-0 h-full bg-linear-to-l from-gray-700 to-gray-600"
                animate={{
                    width:
                        phase === 'open'
                            ? '0%'
                            : phase === 'closed'
                                ? '50%'
                                : phase === 'opening'
                                    ? '0%'
                                    : '0%',
                }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            />
        </div>
    )
}

export default FortuneResultPage
