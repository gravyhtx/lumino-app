"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure cn utility is available

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 80) return prev; // Prevent hitting 100% until ready
        return prev + Math.random() * 15; // Random increment for natural feel
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full bg-white dark:bg-gray-900">
      {/* Glassmorphic Loading Bar Container */}
      <div className="relative w-2/3 max-w-lg h-4 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-lg shadow-inner overflow-hidden border border-white/30 dark:border-gray-800">
        <motion.div
          className="h-full bg-black dark:bg-white rounded-full shadow-md"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {/* Bouncing Dots */}
      {/* <div className="flex justify-center mt-4 space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-gray-700 dark:bg-gray-300"
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div> */}
    </div>
  );
};

export default LoadingBar;