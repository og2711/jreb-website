import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ icon: Icon, title, description, image, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onClick={onClick}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
        <div className="absolute bottom-4 left-5">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
        <div className="flex items-center gap-2 text-sm font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}