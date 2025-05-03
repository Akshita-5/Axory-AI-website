import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlobProps {
  className?: string;
  children?: React.ReactNode;
}

export function Blob({ className, children }: BlobProps) {
  return (
    <motion.div
      className={cn(
        "relative w-full aspect-square animate-float",
        className
      )}
      style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
      animate={{
        borderRadius: [
          "42% 58% 70% 30% / 45% 45% 55% 55%",
          "58% 42% 55% 45% / 60% 30% 70% 40%",
          "30% 70% 35% 65% / 50% 60% 40% 50%",
          "62% 38% 43% 57% / 55% 45% 55% 45%",
          "42% 58% 70% 30% / 45% 45% 55% 55%"
        ]
      }}
      transition={{
        duration: 8,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
}
