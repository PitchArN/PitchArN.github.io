"use client"
import BirthdayCard from "@/components/BirthdayCard";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CardPage() {
    const router = useRouter()
    const [isShowHidden, setShowHidden] = useState<boolean>(false)

    const handleGotoFortune = () => {
        router.push("/fortune")
    }

    return (
        <div className="flex items-center w-screen h-screen bg-black justify-items-center">
            <BirthdayCard >
                <div className="relative flex flex-col justify-between w-full h-full p-6 overflow-y-auto text-2xl text-gray-800 bg-white rounded-lg">
                    {/* <div className="absolute inset-0 z-0">
                        <Image
                            src={'/left-card.avif'}
                            alt=""
                            fill
                            style={{ objectFit: 'cover', opacity: 0.20 }}
                            priority
                        />
                        <Image
                            src={'/left-card.avif'}
                            alt=""
                            fill
                            style={{ objectFit: 'cover', opacity: 0.20, rotate: "180deg" }}
                            priority
                        />
                    </div> */}
                    <div className="relative z-10"></div>

                    <div className="flex flex-col">
                        <div className="pb-3 text-3xl font-bold text-sky-600">Happy Birthday to Beammm!</div>
                        <div className="text-base text-left text-gray-800">
                            <div className="pb-1 text-lg ">
                                สสวก นะเธอ ✨
                            </div>
                            <div className="">
                                เก่งมากที่เอาชีวิตรอดมาได้ในช่วงอายุ 23 ที่มีอะไรยากๆ เต็มไปหมด หวังว่าในปีที่ 24 ของเธอจะมีสิ่งดีๆ เข้ามาเยอะๆ นะ
                            </div>
                            <div className="">
                                อย่าลืมใจดีกับตัวเองให้มากๆ คนดีๆ ที่พร้อมช่วยเหลือเธอยังคงอยู่รอบๆ ตัวเธออีกนะ ไม่ต้องไปใส่ใจคนที่พูดที่ทำไม่ดีกับเธอมากก็ได้--มันเหนื่อยจะตายเธอก็รู้
                            </div>
                            <div className="">
                                ปัญหาร้อยแปดพันเก้าที่ก็ค่อยๆ แก้ค่อยๆ คลายมันออกมาไม่ต้องกดดันตัวเองขนาดนั้น อาจจะใช้เวลาซักหน่อยแต่ไปถึงปลายทางแน่นอน หรือจะพักซักหน่อยก็ไม่ได้ผิดอะไรนะ ยังไงซะทำตอนมีแรงก็ย่อมดีกว่าทำตอนเป็นศพเดินได้ถูกมั้ย --เข้มใส่ตัวเองไปจะหมดแรงเอาเปล่าๆ
                            </div>
                            <div className="pb-2 ">
                                ที่สำคัญที่สุดอย่าลืมให้ความสำคัญกับความรู้สึกตัวเองด้วย ไม่ว่าใครจะพูดอะไรแต่สิ่งที่เธอรู้สึก เธอรู้สึกมันจริงๆ นะ หลายคำถามที่เธอคอยถามตัวเองคำตอบอาจจะชัดอยู่แล้วในสิ่งที่เธอรู้สึกก็ได้ เช่น ไม่ว่าคนอื่นจะคิดว่าที่ปรึกษาควรจะเป็นยังไง แต่สิ่งที่เธอไม่โอเคก็คือสิ่งที่เธอรู้สึกจริงๆ --มันอาจจะไม่ได้แก้ปัญหาหลายอย่างที่เกิดขึ้นแต่มันจะทำให้เรามีมุมมองที่ชัดขึ้นตอนที่เราตัดสินใจนะ  หรือไม่แน่ คำตอบของคำถามอาจจะมาจากใครก็ไม่รู้ข้างทางก็ได้แบบอ้อมๆ อ่ะนะ
                            </div>
                            <motion.div
                                onClick={() => setShowHidden(true)}
                                className="w-full h-auto p-3 rounded-sm cursor-pointer"
                                initial={false}
                                animate={{
                                    backgroundColor: isShowHidden ? '#f1f5f9' : '#1f2937',
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                }}
                            >
                                <hr />
                                <div className="pb-2">
                                    แหนะ รู้นะว่าแอบคิดว่าก็ไม่ได้อยากได้คำอวยพรอะไร หรือไม่เห็นต้องทำขนาดนี้เลยใช่มั้ยล่ะ? (เดา)
                                </div>
                                <div className="w-full p-2 text-white">
                                    <hr />
                                </div>
                                <div className="pb-2">
                                    รับความยินดีซักหน่อยก็ไม่เสียหายอะไรจริงมั้ย อาจจะไม่อินแต่ก็.. ช่วยรับไว้หน่อยนะ นานๆ จะตั้งใจทำซักที
                                </div>
                                <hr />
                            </motion.div>

                        </div>


                    </div>
                    <div className="flex flex-col w-full py-2">
                        <div className="text-base text-right text-gray-800">
                            รักนะคับ
                        </div>
                        <div className="pb-2 text-base text-right text-gray-800">
                            ปัน
                        </div>
                    </div>
                    <Button
                        className="flex self-center p-4 text-lg font-semibold text-white transition rounded-full shadow-md bg-gradient-to-r from-gray-800 to-sky-800 hover:scale-105"
                        onPress={handleGotoFortune}
                    >
                        เซียมซี?
                    </Button>
                </div>
            </BirthdayCard>
        </div>
    );
}
