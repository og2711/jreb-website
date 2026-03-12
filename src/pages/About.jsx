import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award, Shield, Users, Lightbulb, Star } from "lucide-react";
import SectionHeading from "../components/jreb/SectionHeading";
import StatsBar from "../components/jreb/StatsBar";

import teamImg from "../assets/team-logistics.png";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-orange-500/20 text-orange-300 mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Who We Are
            </h1>
            <p className="text-lg text-teal-200 max-w-2xl mx-auto">
              A world-class oil and gas servicing and freight forwarding logistics company, incorporated in 2014.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <img
                  src={teamImg}
                  alt="JREB Logistics team"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold">2014</div>
                  <div className="text-sm opacity-80">Established</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-teal-100 text-teal-700 mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Driving Excellence in Nigeria's Industrial Sector
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to <strong className="text-gray-900">JREB Logistics Limited</strong> — a world-class oil and gas servicing and freight forwarding logistics company. We were incorporated in 2014 as an oil and gas engineering services provider and a registered indigenous Clearing & Forwarding agent in Nigeria (License No: C4128RC1178413).
                </p>
                <p>
                  JREB is founded on the desire to aid our clients in achieving their goals through the provision of qualitative services and the observance of relevant quality guidelines and safe environmental requirements for their area of operations.
                </p>
                <p>
                  Our workforce is managed by a team of qualified professionals from various fields with active industrial experiences. Our scope of services are designed with flexibility to allow our customers concentrate on their core competences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                For our customers, to create value in all our operations and services, with respect to safety and environment. For our employees, to recruit, retain, and reward a well-trained high-performance workforce.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-teal-800 rounded-2xl p-8 shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-teal-200 leading-relaxed text-sm">
                To be recognized as the premier indigenous Logistics and oil and gas service provider driven by excellence and innovation.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                <Star className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Values</h3>
              <ul className="space-y-3">
                {[
                  { icon: Award, label: "Excellence" },
                  { icon: Shield, label: "Quality & Integrity" },
                  { icon: Users, label: "Teamwork" },
                  { icon: Lightbulb, label: "Innovation" },
                ].map((v) => (
                  <li key={v.label} className="flex items-center gap-3 text-sm text-gray-600">
                    <v.icon className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    {v.label}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Our Team */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="Our People, Our Strength"
            description="Our staff are our most important asset — young, experienced, and highly motivated."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100"
          >
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our team is not only young and experienced but highly motivated, as well as committed to meeting our corporate goals through the maintenance of the highest level of efficiency, professionalism and teamwork at all times so as to ensure accuracy and precision in executing all project deliverables.
              </p>
              <p>
                This hardworking and dynamic workforce is managed and controlled by a group of highly competent management team with tons of experience in the petroleum sector, giving our company an edge over others in terms of productivity and service delivery.
              </p>
              <p>
                We have a qualified system for accessing key skills and experience to ensure that our staff and consultants have significant and relevant experience relative to the job they are assigned. The company allocates significant resources to various unique training and development programs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Policies"
            title="Committed to the Highest Standards"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "HSE Policy",
                desc: "Strongly committed to sound CASHES-Q practices in all aspects of our business — preventing injury and protecting all employees and subcontractors from work hazards.",
              },
              {
                title: "Quality Policy",
                desc: "In line with ISO 9001:2008, we consciously determine the needs and expectations of all interested parties and ensure that their requirements are met with continual improvement.",
              },
              {
                title: "Local Content Policy",
                desc: "Committed to maximizing the use of Nigerian human resources, materials, equipment and services in support of the Nigerian Oil & Gas Industry Content Act.",
              },
            ].map((policy, i) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="w-2 h-10 bg-orange-500 rounded-full mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{policy.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{policy.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
