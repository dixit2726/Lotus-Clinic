import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="/assets/hero.png" 
          alt="Luxury Aesthetic Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm mb-4 block">Premium Care. Lasting Results.</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
            Beauty That Glows.<br/>Smile That Shows.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light">
            Experience world-class dental and facial aesthetics in a luxurious, relaxing environment tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gold text-white px-8 py-4 rounded-full font-medium hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book Appointment
            </button>
            <button className="bg-white/20 backdrop-blur-sm border border-white/40 text-white px-8 py-4 rounded-full font-medium hover:bg-white/30 transition-all">
              Chat on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-white/70">
        <span className="text-sm mb-2">Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
      </div>
    </section>
  );
}
