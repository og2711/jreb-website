import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "36", label: "States Coverage" },
  { value: "50+", label: "Expert Professionals" },
];

export default function StatsBar() {
  return (
    <div className="bg-teal-800 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{stat.value}</div>
              <div className="text-sm text-teal-200 font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}