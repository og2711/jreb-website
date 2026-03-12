import React from "react";
import Navbar from "./components/jreb/Navbar";
import Footer from "./components/jreb/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-orange-100 selection:text-orange-900">
      {/* The Navbar and Footer are global. 
          The 'children' prop renders Home, About, Services, or Contact.
      */}
      <Navbar />
      
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}