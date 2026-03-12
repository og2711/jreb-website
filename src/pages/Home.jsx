import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { motion } from "framer-motion";
import { Truck, Wrench, ShoppingCart, Container, ArrowRight, Shield, Award, Users, Target } from "lucide-react";
import SectionHeading from "../components/jreb/SectionHeading";
import ServiceCard from "../components/jreb/ServiceCard";
import StatsBar from "../components/jreb/StatsBar";

import heroImg from "../assets/hero-industrial.png";
import servicesHero from "../assets/services-hero.png";
import logisticsHero from "../assets/hero-logistics.png";
import procurementHero from "../assets/procurement-hero.png";
import engineeringHero from "../assets/engineering-hero.png";
import equipmentHero from "../assets/equipment-hero.png";

const services = [
  {
    icon: Truck,
    title: "Logistics & Freight Forwarding",
    description: "Complete cargo services including customs clearance, warehousing, and door-to-door delivery across all 36 states of Nigeria.",
    image: logisticsHero,
  },
  {
    icon: ShoppingCart,
    title: "Procurement Solutions",
    description: "Quality products consistent with international standards — piping, safety materials, electrical, instrumentation, and more.",
    image: procurementHero,
  },
  {
    icon: Wrench,
    title: "Engineering & Construction",
    description: "Architectural consultancy, fabrication, mechanical & civil works, and facility maintenance for the oil and gas industry.",
    image: engineeringHero,
  },
  {
    icon: Container,
    title: "Equipment Leasing",
    description: "Marine and earth moving equipment leasing including tug boats, barges, cranes, graders, and more.",
    image: equipmentHero,
  },
];

const values = [
  { icon: Award, label: "Excellence", desc: "Delivering world-class standards" },
  { icon: Shield, label: "Integrity", desc: "Trust in every engagement" },
  { icon: Users, label: "Teamwork", desc: "Collaborative partnerships" },
  { icon: Target, label: "Innovation", desc: "Forward-thinking solutions" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="JREB Logistics industrial facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-px bg-orange-400" />
              <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">
                Since 2014
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Powering Nigeria's
              <span className="block text-orange-400 mt-2">Industrial Growth</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-lg">
              World-class logistics, procurement, engineering, and oil & gas services.
              Trusted by Shell, Total, Chevron, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={createPageUrl("Services")}
                className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full transition-all duration-300 border border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-orange-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Comprehensive Industrial Solutions"
            description="From logistics and procurement to engineering and equipment leasing — we deliver end-to-end services for Nigeria's oil & gas and industrial sectors."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Link key={service.title} to={createPageUrl("Services")}>
                <ServiceCard {...service} index={i} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="Built on Trust & Excellence"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-teal-800 group transition-all duration-500 border border-gray-100 hover:border-teal-700"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center transition-colors duration-500">
                  <v.icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors duration-500 mb-1">
                  {v.label}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-teal-200 transition-colors duration-500">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionHeading
            label="Trusted By"
            title="Our Valued Clients"
            description="We are proud to serve some of the world's leading oil & gas companies."
          />
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              { name: "Shell", domain: "shell.com" },
              { name: "TotalEnergies", domain: "totalenergies.com" },
              { name: "Saipem", domain: "saipem.com" },
              { name: "Agip (ENI)", domain: "eni.com" },
              { name: "Chevron", domain: "chevron.com" },
            ].map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3 px-8 py-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-20 w-52"
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${client.domain}&sz=64`}
                  alt={client.name}
                  className="w-8 h-8 object-contain"
                />
                <span className="text-base font-bold text-gray-500">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-teal-200 mb-10">
            Let us help you achieve your project goals with our world-class logistics, procurement, and engineering services.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-3 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
