import Dice from "@/components/Dice";

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center animate-gradient">
      <div className="absolute w-full h-full bg-slate-200 opacity-80" />
      <Dice />
    </div>
  );
}
