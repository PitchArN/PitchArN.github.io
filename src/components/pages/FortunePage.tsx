'use client'

import React, { useState } from 'react'
import Dice from '../Dice'
import { motion } from 'framer-motion'

function FortunePage() {
    const [curtainGone, setCurtainGone] = useState(false)

    return (
        <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden border-8 border-gray-700">
            {/* Curtain that fades out */}
            <motion.div
                initial={{ backgroundColor: '#374151', opacity: 1 }}
                animate={{ backgroundColor: '#374151', opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                onAnimationComplete={() => setCurtainGone(true)}
                className={`absolute top-0 left-0 w-full h-full  z-50 ${curtainGone ? 'pointer-events-none' : ''
                    }`}
            />

            {/* Page Content */}
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center">
                <div className="absolute w-screen h-screen animate-gradient -z-10">
                    <div className="absolute w-full h-full bg-gray-500 opacity-80" />
                </div>

                <div className="flex w-full justify-center items-center h-[10%] bg-gray-700 z-10">
                    <div className="flex font-semibold text-center text-slate-50">จิ้มลูกเต๋าให้มันหมุน</div>
                </div>

                <div className="z-10 flex w-full h-full rounded-md">
                    <Dice />
                </div>
            </div>
        </div>
    )
}

export default FortunePage
