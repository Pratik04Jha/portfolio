'use client';
import { useState, useEffect } from "react";

export const useAnimatedRating = (data, delay = 0, duration = 2000) => {
  const [animatedRatings, setAnimatedRatings] = useState(data.map(() => 0));

  useEffect(() => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const newRatings = data.map((item) =>
        Math.floor(progress * item.rating)
      );
      setAnimatedRatings(newRatings);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timeout = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [data, delay, duration]);

  return animatedRatings;
};
