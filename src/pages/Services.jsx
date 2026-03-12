import React from "react";
import { motion } from "framer-motion";
import {
  Truck, ShoppingCart, Wrench, Container,
  Warehouse, FileCheck, PackageCheck,
  Anchor, HardHat, Cable, Gauge, ShieldCheck, Cpu, Droplets,
  Tractor, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import SectionHeading from "../components/jreb/SectionHeading";

import servicesHero from "@/assets/services-hero.png";

const LOGISTICS_IMG = servicesHero;
const PROCUREMENT_IMG = servicesHero;
const ENGINEERING_IMG = servicesHero;
const EQUIPMENT_IMG = servicesHero;

function ServiceSection({ id, title, subtitle, description, image, children, reverse = false }) {
  return (
    <section id={id} className="py-24 even:bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:direction-rtl" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={reverse ? "lg:order-2" : ""}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-orange-100 text-orange-600 mb-4">
              {subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{description}</p>
            {children}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={reverse ? "lg:order-1" : ""}
          >
            <img src={image} alt={title} className="rounded-2xl shadow-xl w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureTag({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-gray-100 shadow-sm">
      <Icon className="w-4 h-4 text-teal-700 flex-shrink-0" />
      <span className="text-sm text-gray-700 font-medium">{label}</span>
    </div>
  );
}

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesHero} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center py-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-orange-500/20 text-orange-300 mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Industrial Solutions
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From logistics and freight forwarding to engineering, procurement, and equipment leasing — we deliver end-to-end solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-wrap gap-3">
          {[
            { label: "Logistics", href: "#logistics", icon: Truck },
            { label: "Procurement", href: "#procurement", icon: ShoppingCart },
            { label: "Engineering", href: "#engineering", icon: Wrench },
            { label: "Equipment Leasing", href: "#leasing", icon: Container },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-teal-700 hover:bg-teal-50 transition-all border border-gray-200 hover:border-teal-200"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Logistics */}
      <ServiceSection
        id="logistics"
        title="Logistics & Freight Forwarding"
        subtitle="Logistics Services"
        description="As professionals in the provision of complete cargo services, we manage the process and expense of flow of goods from origin to destination. Our team of experts handles customs, port operations, documentation, dangerous goods management, warehousing, and door-to-door cargo services."
        image={LOGISTICS_IMG}
      >
        <div className="flex flex-wrap gap-3">
          <FeatureTag icon={Warehouse} label="Secure Warehousing" />
          <FeatureTag icon={FileCheck} label="Customs Clearance" />
          <FeatureTag icon={PackageCheck} label="Cargo Delivery" />
          <FeatureTag icon={ShieldCheck} label="Insured Transit" />
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { title: "Warehousing", desc: "Secure, insured storage with CCTV — pallet and bulk rates, long and short term." },
            { title: "Clearing & Forwarding", desc: "Efficient customs clearance tailored to each importer's expectations." },
            { title: "Cargo Delivery", desc: "Coverage across all 36 states — Groupage, LCL, LTL, and FTL shipments." },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </ServiceSection>

      {/* Procurement */}
      <section id="procurement" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:order-2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-orange-100 text-orange-600 mb-4">
                Procurement Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Procurement Solutions</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our procurement solution is aimed at constantly satisfying our clients' needs by providing quality products consistent with internationally recommended standards at timely delivery. We maintain strong relationships with Original Equipment Manufacturers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:order-1"
            >
              <img src={PROCUREMENT_IMG} alt="Procurement" className="rounded-2xl shadow-xl w-full" />
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              { icon: Gauge, title: "Piping Materials", desc: "Line pipes, fittings, connectors, seal rings, flow control valves, check valves, ball valves, globe valves." },
              { icon: ShieldCheck, title: "Safety Materials", desc: "Coveralls, helmets, safety shoes, gloves, masks, life jackets, life buoys, life rafts." },
              { icon: Gauge, title: "Instrumentation", desc: "Pressure gauges, transmitters, pumps, compressors, analyzers, solenoid valves, manifolds, fittings." },
              { icon: Cable, title: "Electrical Materials", desc: "Power cables, marine cables, optic fibre, motors, generators, UPS systems, cable trays." },
              { icon: Cpu, title: "IT/Telecomm", desc: "Ethernet switches, touch panel PCs, operating systems, electronics, and accessories." },
              { icon: Droplets, title: "Oils & Chemicals", desc: "Laboratory chemicals, grease, fuel additives, machine fluids, corrosion prevention oils, coolants." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering */}
      <ServiceSection
        id="engineering"
        title="Engineering & Construction"
        subtitle="Engineering Services"
        description="JREB renders construction-oriented services such as architectural consultancy, mechanical & civil works, building construction, supply of building materials, and quantity surveying."
        image={ENGINEERING_IMG}
      >
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Fabrication</h4>
            <p className="text-sm text-gray-600 mb-3">Custom fabrication performed in-house by trained technicians to guarantee quality standards and delivery schedules.</p>
            <div className="flex flex-wrap gap-2">
              {["Barges & Boats", "Oil Pipelines", "Pipe Spools", "Tanks", "Pressure Vessels"].map((item) => (
                <span key={item} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">{item}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Maintenance & Modification</h4>
            <p className="text-sm text-gray-600 mb-3">Engineers and technicians working on land, swamps, and offshore — carrying out facility repairs, maintenance, and upgrades.</p>
            <div className="flex flex-wrap gap-2">
              {["Tanks & Storage", "Pumps & Valves", "Instrumentation", "Warehouses", "Pipes & Facilities"].map((item) => (
                <span key={item} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </ServiceSection>

      {/* Equipment Leasing */}
      <section id="leasing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:order-2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-orange-100 text-orange-600 mb-4">
                Equipment Leasing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Equipment Leasing Services</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We lease marine and earth-moving equipment. With our partners both local and international, we can assure you of our effective services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:order-1"
            >
              <img src={EQUIPMENT_IMG} alt="Equipment Leasing" className="rounded-2xl shadow-xl w-full" />
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Anchor,
                title: "Marine Equipment",
                items: ["Tug Boats", "Barges", "Swamp Boogies", "DP 1&2 Vessels", "Crew & Security Boats", "House Boats"],
              },
              {
                icon: Tractor,
                title: "Earth Moving Equipment",
                items: ["Graders", "Compressors", "Poker Vibrators", "Cranes", "Forklifts", "Vehicles"],
              },
              {
                icon: HardHat,
                title: "Other Equipment",
                items: ["Centrifugal Pumps", "Generators", "Welding Machines"],
              },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <cat.icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Our Services?</h2>
          <p className="text-lg text-teal-200 mb-10">
            Contact us today for a customized solution tailored to your project requirements.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-3 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
          >
            Get In Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
