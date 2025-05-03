"use client"

import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"

interface YumiereLogoProps {
  darkMode?: boolean;
  showCircle?: boolean;
  symbolOnly?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const YumiereLogo: React.FC<YumiereLogoProps> = ({
  darkMode = false,
  showCircle = true,
  symbolOnly = false,
  className,
  size = 'md',
}) => {
  const sizes = {

    sm: {
      container: "h-8",
      jade: "h-8",
      text: "text-xl ml-3",
      circle: "w-6 h-6 ml-2",
    },
    md: {
      container: "h-12",
      jade: "h-12",
      text: "text-3xl ml-4",
      circle: "w-8 h-8 ml-3",
    },
    lg: {
      container: "h-16",
      jade: "h-16",
      text: "text-4xl ml-5",
      circle: "w-10 h-10 ml-4",
    }
  };

  return (
    <div 
      className={cn(
        "yumiere-logo-combined inline-flex items-center", 
        sizes[size].container,
        className
      )}
    >
      {/* Jade Character with Pulse Animation */}
      {showCircle ? (
       <motion.div
       initial={{ scale: 1 }}
       animate={{ scale: [1, 1.1, 1] }}
       transition={{ 
         duration: 8,          // 8 seconds total for inhale + exhale
         repeat: Infinity, 
         repeatType: "mirror", 
         ease: "easeInOut",
       }}
       className={cn(
         "flex items-center justify-center border-2 border-[#3AA678] rounded-full", 
         sizes[size].circle
       )}
     >
       <span 
         className={cn(
           "font-serif text-[#3AA678]",
           {
             "text-base": size === "sm",
             "text-xl": size === "md",
             "text-2xl": size === "lg",
           }
         )}
       >
         玉
       </span>
     </motion.div>
     
      ) : (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "font-serif text-[#3AA678]",
            {
              "text-base": size === "sm",
              "text-xl": size === "md",
              "text-2xl": size === "lg",
            }
          )}
        >
          玉
        </motion.span>
      )}

      {/* Text "Yumiere" with Slide/Fade In */}
      {!symbolOnly && (
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn(
            "yumiere-text-logo inline-flex",
            {
              "text-2xl": size === 'sm',
              "text-4xl": size === 'md', 
              "text-6xl": size === 'lg'
            },
            className
          )}
          style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontWeight: 500,
            lineHeight: 1
          }}
        >
          <span style={{ color: '#3AA678' }}>YU</span>
          <span style={{ color: darkMode ? '#FFFFFF' : '#000000' }}>MIERE</span>
        </motion.span>
      )}
    </div>
  );
};

export default YumiereLogo;
