import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/lib/utils";
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from "lucide-react";

// Import your sharpened logo
import logo from "@/assets/JREB Logo_Light.png";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Identity */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* Using the real logo asset with a slight invert to keep it visible on dark bg */}
              <img 
                src={logo} 
                alt="JREB Logistics" 
                className="h-10 w-auto brightness-0 invert" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A world-class oil and gas servicing, engineering, and freight forwarding logistics company incorporated in Nigeria.
            </p>
            <p className="text-xs text-gray-500 font-mono">License No: C4128RC1178413</p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-6">Navigation</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((page) => (
                <li key={page}>
                  <Link
                    to={createPageUrl(page)}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Logistics & Freight Forwarding</li>
              <li>Procurement Solutions</li>
              <li>Engineering & Construction</li>
              <li>Equipment Leasing</li>
              <li>Oil & Gas Services</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-orange-400 mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" />
                <span>Close 6 Elekahia Housing Estate,<br />Port Harcourt, Rivers State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a href="tel:+2349055790053" className="hover:text-white transition-colors">+234 905 579 0053</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <a href="mailto:info@jreblogistics.com" className="hover:text-white transition-colors">info@jreblogistics.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span>www.jreblogistics.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} JREB Logistics Limited. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-500 uppercase tracking-tighter">
            <span>Logistics</span>
            <span className="text-orange-400 font-bold">|</span>
            <span>Oil & Gas</span>
            <span className="text-orange-400 font-bold">|</span>
            <span>Engineering</span>
            <span className="text-orange-400 font-bold">|</span>
            <span>Procurement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}