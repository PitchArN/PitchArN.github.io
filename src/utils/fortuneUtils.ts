export const faceGradients: string[] = [
  "bg-gradient-to-br from-red-300 to-orange-300",
  "bg-gradient-to-br from-green-300 to-emerald-200",
  "bg-gradient-to-br from-blue-300 to-cyan-200",
  "bg-gradient-to-br from-yellow-200 to-amber-300",
  "bg-gradient-to-br from-purple-300 to-violet-200",
  "bg-gradient-to-br from-pink-300 to-rose-200",
];
export type FortuneMeaning = {
  th: string;
  en: string;
};

export type FortuneIcon = {
  icon: string;
  meaning: FortuneMeaning;
};

export const fortuneIcons: FortuneIcon[] = [
  {
    icon: "🔆", // Sun with rays – จริงจังกว่า 🌞
    meaning: {
      th: "แสงแห่งความหวังกำลังส่องทางให้คุณ เดินต่อไปด้วยความมั่นใจ",
      en: "A ray of hope lights your path. Move forward with confidence.",
    },
  },
  {
    icon: "🌦️", // Sun behind rain cloud – มีความหมายของผ่านพ้น
    meaning: {
      th: "แม้จะมีเมฆฝน แต่แสงแดดยังอยู่กับคุณ อดทนไว้ ความสุขรออยู่",
      en: "Clouds may come, but the sun still shines. Stay strong—joy awaits.",
    },
  },
  {
    icon: "🕊️", // Dove – แทนสายรุ้ง เป็นสัญลักษณ์ของความสงบ/ความหวัง
    meaning: {
      th: "ความสงบใจจะนำทางคุณไปสู่สิ่งที่งดงามกว่าที่เคย",
      en: "Peace within will guide you to something more beautiful than ever.",
    },
  },
  {
    icon: "🏆", // Trophy – แทนเงิน มีพลังด้านสำเร็จและยิ่งใหญ่
    meaning: {
      th: "ความสำเร็จกำลังใกล้เข้ามา เชื่อมั่นในศักยภาพของคุณ",
      en: "Success is within reach. Believe in your true potential.",
    },
  },
  {
    icon: "💖", // Sparkling heart – จริงจังกว่า ❤️ และมีพลังเชิงบวกมากขึ้น
    meaning: {
      th: "ความรักและความเมตตาจะโอบล้อมคุณ ไม่ว่าจะอยู่ที่ใด",
      en: "Love and kindness surround you—wherever you are.",
    },
  },
  {
    icon: "🔮", // Crystal ball – ใช้แทน 🌀 เพื่อดูมีพลังลึกลับและลึกซึ้ง
    meaning: {
      th: "อนาคตเต็มไปด้วยความเป็นไปได้ อย่ากลัวที่จะก้าวไปข้างหน้า",
      en: "The future holds endless possibilities. Don’t fear to take the next step.",
    },
  },
];
