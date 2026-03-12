import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-orange-100 text-orange-600 mb-4">
          {label}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      )}
      {description && (
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
