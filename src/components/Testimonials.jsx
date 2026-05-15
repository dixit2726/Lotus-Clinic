import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: "Sandhya Reddy", text: "I recently got a HydraFacial done and I'm extremely happy with the results." },
  { name: "Sushmitha Collections", text: "I recently got my carbon facial done and I'm really happy with the results." },
  { name: "Rishvitha Roy", text: "Had a really great experience here. The doctor was very kind." },
  { name: "Tanush Kumar", text: "It was an amazing experience. Dr. Sai Prasanna is very skilled." }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Patient Experiences</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-48 glass-card rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex items-center justify-center">
            <Quote className="absolute top-6 left-6 text-primary/10 w-16 h-16" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center relative z-10"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="text-gold w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg md:text-2xl text-gray-700 italic font-serif mb-6">"{reviews[current].text}"</p>
                <h4 className="font-bold text-primary">— {reviews[current].name}</h4>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${current === i ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${i+1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
