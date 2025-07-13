"use client"
import BirthdayCard from "@/components/BirthdayCard";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function CardPage() {
    const router = useRouter()

    const handleGotoFortune = () => {
        router.push("/fortune")
    }

    return (

        <div className="flex bg-black items-center justify-items-center w-screen h-screen">
            <BirthdayCard >
                <div className="flex flex-col bg-white py-8 px-4 rounded-lg  gap-4 text-gray-800 font-serif text-2xl">
                    <div className="text-3xl font-bold text-yellow-600">Happy Birthday!</div>
                    <div className="text-lg text-gray-600">
                        Wishing you joy, love, and sparkling moments today and always. ✨
                    </div>
                    <Button
                        className="self-center px-4 py-2 text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-md hover:scale-105 transition rounded-full"
                        onClick={handleGotoFortune}
                    >
                        เซียมซี
                    </Button>
                </div>
            </BirthdayCard>
        </div>
    );
}
