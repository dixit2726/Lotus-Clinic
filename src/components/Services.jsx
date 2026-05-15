import React from 'react';
import { motion } from 'framer-motion';
import { Smile, User, Star, Shield, Sparkles, Heart } from 'lucide-react';
import { getAssetPath } from '../utils';

const services = [
  { title: "Teeth Cleaning", icon: <Sparkles className="text-gold" size={24}/>, image: getAssetPath('/assets/whitening.png') },
  { title: "Root Canal", icon: <Shield className="text-gold" size={24}/>, image: getAssetPath('/assets/rootcanal.png') },
  { title: "Aligners", icon: <Smile className="text-gold" size={24}/>, image: getAssetPath('/assets/aligners.png') },
  { title: "Dental Implants", icon: <Star className="text-gold" size={24}/>, image: getAssetPath('/assets/implants.png') },
  { title: "Crowns & Bridges", icon: <Shield className="text-gold" size={24}/>, image: getAssetPath('/assets/crowns.png') },
  { title: "Smile Designing", icon: <Smile className="text-gold" size={24}/>, image: getAssetPath('/assets/smiledesign.png') },
  { title: "Carbon Facial", icon: <User className="text-gold" size={24}/>, image: getAssetPath('/assets/carbonfacial.png') },
  { title: "HydraFacial", icon: <Heart className="text-gold" size={24}/>, image: getAssetPath('/assets/hydrafacial.png') },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Premium Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive dental and aesthetic treatments tailored to enhance your natural beauty.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background rounded-2xl overflow-hidden hover-lift border border-gray-100 shadow-sm group flex flex-col"
            >
              <div className="h-40 overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-serif font-bold text-gray-800">{service.title}</h3>
                <button className="mt-4 text-sm font-medium text-primary hover:text-gold transition-colors">Learn More →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
