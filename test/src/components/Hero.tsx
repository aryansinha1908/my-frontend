"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
// 1. Import the icons and type from lucide-react
import {
  Handshake,
  Rocket,
  Lightbulb,
  Zap,
  Trophy,
  LucideIcon,
} from "lucide-react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const leftSquareX = useTransform(smoothX, [-1, 1], [40, -40]);
  const leftSquareY = useTransform(smoothY, [-1, 1], [40, -40]);

  const rightSquareX = useTransform(smoothX, [-1, 1], [-30, 30]);
  const rightSquareY = useTransform(smoothY, [-1, 1], [-30, 30]);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMounted) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  // 2. Map characters to their respective Lucide React components instead of strings
  const matchWord = [
    { char: "M", icon: Handshake },
    { char: "a", icon: Rocket },
    { char: "t", icon: Lightbulb },
    { char: "c", icon: Zap },
    { char: "h", icon: Trophy },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse delay-75" />

      <div className="absolute left-4 md:left-20 top-20 w-48 h-48 md:w-64 md:h-64 z-10 animate-float">
        <motion.div
          style={{ x: leftSquareX, y: leftSquareY }}
          className="w-full h-full rounded-3xl shadow-2xl flex flex-col justify-center p-6 gap-4 transform -rotate-6 bg-white/40 backdrop-blur-md border border-white/60"
        >
          <div className="w-3/4 h-4 bg-blue-500 rounded-full animate-pulse" />
          <div className="w-full h-4 bg-blue-500 rounded-full animate-pulse delay-75" />
          <div className="w-5/6 h-4 bg-blue-500 rounded-full animate-pulse delay-150" />
        </motion.div>
      </div>

      <div className="absolute right-4 md:right-20 bottom-20 w-48 h-48 md:w-72 md:h-72 z-10 animate-float delay-150">
        <motion.div
          style={{ x: rightSquareX, y: rightSquareY }}
          className="w-full h-full rounded-[3rem] shadow-2xl flex flex-col items-end justify-center p-6 gap-4 transform rotate-6 bg-white/40 backdrop-blur-md border border-white/60"
        >
          <div className="w-full h-4 bg-blue-500 rounded-full animate-pulse" />
          <div className="w-2/3 h-4 bg-blue-500 rounded-full animate-pulse delay-100" />
          <div className="w-4/5 h-4 bg-blue-500 rounded-full animate-pulse delay-200" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center text-center px-4 max-w-3xl pointer-events-none"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 flex flex-wrap justify-center gap-x-2">
          Find Your Perfect
          <span className="text-blue-600 flex pointer-events-auto">
            {matchWord.map((item, index) => (
              <InteractiveLetter
                key={index}
                char={item.char}
                icon={item.icon}
              />
            ))}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
          Connect with top students and developers. Collaborate on open-source
          projects, dominate hackathons, and build the future together.
        </p>

        <form
          className="flex w-full max-w-md items-center gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-xl border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 transition-all pointer-events-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your student or work email"
            className="flex-1 bg-transparent px-4 py-3 outline-none text-slate-700 placeholder-slate-400"
            required
          />
          <button
            type="submit"
            className="bg-slate-900 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Join Now
          </button>
        </form>
      </motion.div>
    </section>
  );
}

// 3. Update the types: icon is now a component (LucideIcon), not a string
function InteractiveLetter({
  char,
  icon: Icon,
}: {
  char: string;
  icon: LucideIcon;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="relative inline-flex items-center justify-center cursor-crosshair"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="invisible">{char}</span>

      <motion.span
        className="absolute"
        animate={{
          opacity: isHovered ? 0 : 1,
          y: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {char}
      </motion.span>

      <motion.span
        className="absolute flex items-center justify-center"
        initial={{ opacity: 0, y: 10, scale: 0.5 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 10,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
      >
        {/* 4. Render the component. The w/h em units ensure it perfectly scales with the 7xl font size */}
        <Icon className="w-[0.8em] h-[0.8em]" strokeWidth={3} />
      </motion.span>
    </span>
  );
}
