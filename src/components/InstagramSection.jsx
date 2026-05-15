import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

export default function InstagramSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
          <FaInstagram size={24} /> <span>@LotusClinic</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-12">Follow Our Journey</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={`/assets/insta${i}.png`} 
                alt={`Clinic Instagram Post ${i}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FaInstagram className="text-white w-10 h-10" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="mt-12 border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-colors">
          View Instagram
        </button>
      </div>
    </section>
  );
}
