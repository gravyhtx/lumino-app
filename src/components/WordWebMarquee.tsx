import React from 'react';
import { motion } from 'framer-motion';

interface WordData {
  text: string;
  score: number;
}

interface WordWebMarqueeProps {
  words: WordData[];
  minFontSize?: number;
  maxFontSize?: number;
}

const WordWebMarquee: React.FC<WordWebMarqueeProps> = ({
  words,
  minFontSize = 12,
  maxFontSize = 64,
}) => {
  const getWordStyle = (score: number) => {
    const fontSize = minFontSize + (maxFontSize - minFontSize) * (score / 100);
    const opacity = 0.5 + (score / 200);
    return { fontSize, opacity };
  };

  return (
    <div className="w-full h-64 overflow-hidden bg-gray-100">
      <motion.div
        className="flex flex-wrap justify-center items-center h-full"
        animate={{
          x: ['-100%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {words.concat(words).map((word, index) => (
          <motion.span
            key={`${word.text}-${index}`}
            className="inline-block mx-2 my-1"
            style={getWordStyle(word.score)}
          >
            {word.text}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default WordWebMarquee;


const words = [
  { text: "Next.js", score: 95 },
  { text: "TypeScript", score: 95 },
  { text: "React", score: 90 },
  { text: "JSDoc", score: 90 },
  { text: "CSS", score: 85 },
  { text: "SCSS", score: 80 },
  { text: "Supabase", score: 85 },
  { text: "Prisma", score: 85 },
  { text: "Clerk", score: 85 },
  { text: "Tailwind", score: 80 },
  { text: "Turborepo", score: 75 },
  { text: "Vercel", score: 75 },
  { text: "T3 Stack", score: 75 },
  { text: "Accessibility", score: 70 },
  { text: "Full-stack", score: 85 },
  { text: "Liquid", score: 70 },
  { text: "Handlebars", score: 65 },
  { text: "SQL", score: 70 },
  { text: "PostgreSQL", score: 70 },
  { text: "MongoDB", score: 65 },
  { text: "Three.js", score: 60 },
  { text: "A-Frame", score: 60 },
  { text: "Framer Motion", score: 65 },
  { text: "GitHub", score: 80 },
  { text: "Adobe Suite", score: 75 },
  { text: "Corel Draw", score: 70 },
  { text: "Blender", score: 50 },
  { text: "Digital Print", score: 75 },
  { text: "Product Design", score: 70 },
  { text: "Vinyl", score: 65 },
  { text: "Screen Print", score: 65 },
  { text: "Embroidery", score: 60 },
  { text: "DTG", score: 60 },
  { text: "Sublimation", score: 60 },
];