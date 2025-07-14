"use client"
import BirthdayCard from "@/components/BirthdayCard";
import { Button } from "@heroui/react";
// import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CardPage() {
    const router = useRouter()

    const handleGotoFortune = () => {
        router.push("/fortune")
    }

    return (
        <div className="flex items-center w-screen h-screen bg-black justify-items-center">
            <BirthdayCard >
                <div className="relative flex flex-col justify-between w-full h-full p-8 overflow-y-auto text-2xl text-gray-800 bg-white rounded-lg">
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
                            <div className="pb-2 ">
                                อย่าลืมใจดีกับตัวเองให้มากๆ คนดีๆ ที่พร้อมช่วยเหลือเธอยังคงอยู่รอบๆ ตัวเธออีกนะ ไม่ต้องไปใส่ใจคนที่พูดที่ทำไม่ดีกับเธอมากก็ได้ ปัญหาร้อยแปดพันเก้าก็ค่อยๆ แก้ ไม่ต้องกดดันตัวเองขนาดนั้น ชั้นเชื่อว่าเธอทำได้ อาจจะใช้เวลาซักหน่อยแต่ไปถึงปลายทางแน่นอน หรือจะพักซักหน่อยก็ไม่ได้ผิดอะไรนะ ยังไงซะทำตอนมีแรงก็ย่อมดีกว่าทำตอนเป็นศพเดินได้ถูกมั้ย
                            </div>
                            <div className="pb-2 ">
                                แหนะ รู้นะว่าแอบคิดว่าก็ไม่ได้อยากได้คำอวยพรอะไร หรือไม่เห็นต้องทำขนาดนี้เลยใช่มั้ยล่ะ (?)
                            </div>
                            <div className="pb-2 ">
                                นี่เป็นความตั้งใจเล็กๆ น้อยๆ ของชั้นต่อเธอที่เป็นคนสำคัญ และชั้นดีใจที่ปีนี้เป็นอีกปีมีเธออยู่ รับความยินดีซักหน่อยก็ไม่เสียหายอะไรจริงมั้ย
                            </div>
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
                        className="flex self-center px-4 py-2 text-lg font-semibold text-white transition rounded-full shadow-md bg-gradient-to-r from-gray-800 to-sky-800 hover:scale-105"
                        onPress={handleGotoFortune}
                    >
                        เซียมซี?
                    </Button>
                </div>
            </BirthdayCard>
        </div>
    );
}
