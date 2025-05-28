'use client';
import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { GiChessKnight } from "react-icons/gi";
import { motion } from "framer-motion";

const ratingData = [
  {
    platform: "Chess.com",
    color: "bg-yellow-600",
    ratings: [
      { type: "Rapid", value: 1560 },
      { type: "Blitz", value: 1450 },
      { type: "Bullet", value: 1310 },
      { type: "Daily", value: 1625 },
      { type: "Daily 960", value: 1390 },
    ],
  },
  {
    platform: "Lichess",
    color: "bg-purple-600",
    ratings: [
      { type: "Rapid", value: 1505 },
      { type: "Blitz", value: 1420 },
      { type: "Bullet", value: 1330 },
      { type: "Classical", value: 1601 },
    ],
  },
];

export default function Chess() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-8 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold mb-12 flex items-center gap-4"
      >
        <GiChessKnight className="text-yellow-400 animate-pulse" />
        My Chess Ratings
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
        {ratingData.map((platform, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-xl hover:scale-[1.025]">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold tracking-wide">
                    {platform.platform}
                  </h2>
                  <div className={`text-xs ${platform.color}`}>{platform.platform}</div>
                </div>
                <ul className="space-y-2">
                  {platform.ratings.map((r, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center py-2 px-4 bg-zinc-700/30 rounded-lg hover:bg-zinc-700/50 transition-colors duration-200"
                    >
                      <span className="font-medium text-zinc-300">{r.type}</span>
                      <span className="text-lg font-bold text-white">{r.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
