import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Send, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import contactHero from "@/assets/contact-hero.png";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! We'll be in touch shortly.");
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={contactHero} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center py-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-orange-500/20 text-orange-300 mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Work Together
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Reach out to us and let's discuss how we can help achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: MapPin, title: "Visit Us", lines: ["Close 6 Elekahia Housing Estate,", "Port Harcourt, Rivers State, Nigeria"] },
              { icon: Phone, title: "Call Us", lines: ["+234 905 579 0053"] },
              { icon: Mail, title: "Email Us", lines: ["info@jreblogistics.com", "jareb_2013@yahoo.com"] },
              { icon: Clock, title: "Business Hours", lines: ["Mon – Fri: 8am – 5pm", "Saturday: 9am – 1pm"] },
            ].map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.lines.map((line, j) => (
                  <p key={j} className="text-sm text-gray-500">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Form Section */}
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-orange-100 text-orange-600 mb-4">
                Get a Quote
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll respond shortly.</p>
                  <Button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    variant="outline"
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">Full Name *</label>
                      <Input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email *</label>
                      <Input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">Phone</label>
                      <Input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+234..."
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">Subject *</label>
                      <Input
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="Project Inquiry"
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1.5 block">Message *</label>
                    <Textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="min-h-32 rounded-xl"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]"
            >
              <iframe
                title="JREB Logistics Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.571!2d7.0204!3d4.8156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069ceadaf20c1c7%3A0xd3e7e6a1f64c3c25!2sElekahia%20Housing%20Estate%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
