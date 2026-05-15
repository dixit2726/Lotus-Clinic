import React from 'react';
import { Award, Zap, ShieldCheck, HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  { title: "Expert Doctors", desc: "Highly skilled specialists ensuring top-notch care.", icon: <Award size={40} className="text-primary"/> },
  { title: "Advanced Technology", desc: "State-of-the-art equipment for precise treatments.", icon: <Zap size={40} className="text-primary"/> },
  { title: "Safe & Hygienic", desc: "Strict sterilization protocols for your safety.", icon: <ShieldCheck size={40} className="text-primary"/> },
  { title: "Painless Experience", desc: "Gentle techniques to ensure zero discomfort.", icon: <HeartPulse size={40} className="text-primary"/> }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background border-t border-b border-gray-200/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm text-center hover-lift border border-primary/5"
            >
              <div className="w-20 h-20 mx-auto bg-background rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
