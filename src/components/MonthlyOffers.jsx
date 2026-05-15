import React from 'react';
import { motion } from 'framer-motion';
import { getAssetPath } from '../utils';

const offers = [
  { 
    title: "Hydrafacial", 
    price: "₹1800", 
    oldPrice: "₹3000", 
    desc: "Deep cleansing and glowing skin",
    image: getAssetPath('/assets/hydrafacial.png')
  },
  { 
    title: "Teeth Cleaning", 
    price: "₹1200", 
    oldPrice: "₹2500", 
    desc: "Complete scaling and polishing",
    image: getAssetPath('/assets/whitening.png')
  },
  { 
    title: "All Treatments", 
    price: "15% OFF", 
    oldPrice: "", 
    desc: "Special discount on any dental treatment",
    image: getAssetPath('/assets/hero.png')
  },
];

export default function MonthlyOffers() {
  return (
    <section id="offers" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Exclusive Monthly Offers</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Premium treatments at exceptional value. Valid for this month only.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card rounded-2xl hover-lift relative overflow-hidden group border border-primary/10 bg-white flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">LIMITED TIME</div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">{offer.title}</h3>
                <p className="text-gray-500 mb-6">{offer.desc}</p>
                <div className="flex items-baseline gap-3 mb-6 mt-auto">
                  <span className="text-4xl font-bold text-primary">{offer.price}</span>
                  {offer.oldPrice && <span className="text-lg text-gray-400 line-through">{offer.oldPrice}</span>}
                </div>
                <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white py-3 rounded-full transition-colors font-medium">
                  Claim Offer
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
