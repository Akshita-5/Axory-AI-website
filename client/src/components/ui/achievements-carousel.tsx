import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface Achievement {
  id: string;
  title: string;
  carouselText: string;
  fullText: string;
  image: string;
}

interface AchievementCardProps {
  achievement: Achievement;
  className?: string;
}

function AchievementCard({ achievement, className }: AchievementCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={cn("rounded-xl bg-white shadow-lg overflow-hidden", className)}>
      <div className="relative h-48 bg-gradient-to-r from-primary/50 to-[#20b2aa]/50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="text-white text-center">
            <h3 className="text-xl md:text-2xl font-bold">{achievement.title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4">{achievement.carouselText}</p>

        <Button
          variant="ghost"
          className="flex items-center text-primary hover:text-primary/80"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              Read less <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Read more <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pt-4 border-t border-gray-200"
          >
            <p className="text-gray-700">{achievement.fullText}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

interface AchievementsCarouselProps {
  achievements: Achievement[];
  className?: string;
}

export function AchievementsCarousel({ achievements, className }: AchievementsCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className={cn("w-full", className)}
    >
      <CarouselContent>
        {achievements.map((achievement) => (
          <CarouselItem key={achievement.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
            <AchievementCard achievement={achievement} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-8 gap-4">
        <CarouselPrevious className="relative static" />
        <CarouselNext className="relative static" />
      </div>
    </Carousel>
  );
}