import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Calendar } from 'lucide-react';

export default function Appointment() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Lotus Dental & Facial Aesthetic Clinic",
    "image": "https://lotusdental.com/logo.png",
    "url": "https://lotusdental.com",
    "telephone": "+919000046344",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Above 4 Chillies Restaurant, Indraprasth Colony, Osmania University Road, Near Osmania University, Vidya Nagar",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500044",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.398,
      "longitude": 78.508
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Local Business Schema SEO */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Visit the Best Dental Clinic in Hyderabad
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Lotus Dental & Facial Aesthetic Clinic offers premium cosmetic dental clinic services in Hyderabad, including teeth cleaning and HydraFacial treatments.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Info & Timings */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl relative hover-lift group"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl group-hover:bg-primary/20 transition-colors pointer-events-none"></div>
              
              <h3 className="text-2xl font-serif font-bold mb-8 text-primary flex items-center gap-3">
                <MapPin className="text-accent animate-bounce" size={28} />
                Clinic Location
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Dental Clinic near Osmania University</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Above 4 Chillies Restaurant,<br/>
                      Indraprasth Colony, Osmania University Road,<br/>
                      Near Osmania University, Vidya Nagar,<br/>
                      Hyderabad, Telangana 500044
                    </p>
                    <p className="text-sm text-accent mt-2 font-medium">Google Maps: CG48+49 Hyderabad, Telangana</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Contact Us</h4>
                    <a href="tel:+919000046344" className="text-primary hover:text-accent transition-colors font-medium text-lg">+91 90000 46344</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 relative z-20">
                <a 
                  href="https://wa.me/919000046344?text=Hi%20Lotus%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-medium transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
                <a 
                  href="tel:+919000046344"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white py-3 px-6 rounded-xl font-medium transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
                >
                  <Phone size={20} />
                  Call Clinic
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-8 rounded-3xl hover-lift relative z-10"
            >
              <h3 className="text-2xl font-serif font-bold mb-6 text-primary flex items-center gap-3">
                <Clock className="text-accent" size={28} />
                Clinic Timings
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <div key={day} className="flex justify-between items-center p-3 rounded-lg bg-white/50 border border-primary/10 hover:bg-primary/5 transition-colors group">
                    <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">{day}</span>
                    <span className="text-primary font-semibold">10 AM – 9 PM</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Booking Form & Google Maps */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl hover-lift flex-grow flex flex-col relative z-10"
            >
              <h3 className="text-2xl font-serif font-bold mb-6 text-primary flex items-center gap-3">
                <Calendar className="text-accent" size={28} />
                Request an Appointment
              </h3>
              
              <form className="space-y-5 flex-grow flex flex-col justify-center" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white/80" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white/80" />
                </div>
                <select className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white/80 text-gray-700">
                  <option value="">Select Service (e.g. HydraFacial, Teeth Cleaning)</option>
                  <option value="dental">Dental Consultation</option>
                  <option value="cleaning">Teeth Cleaning</option>
                  <option value="cosmetic">Cosmetic Dentistry</option>
                  <option value="hydrafacial">HydraFacial</option>
                  <option value="aesthetic">Facial Aesthetics</option>
                </select>
                <textarea rows="3" placeholder="How can we help you today?" className="w-full px-4 py-3 rounded-xl border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white/80"></textarea>
                <button type="submit" className="w-full bg-gold text-white py-4 rounded-xl font-bold hover:bg-accent transition-colors shadow-lg hover:shadow-gold/30 hover:-translate-y-1">
                  Book Appointment
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-64 sm:h-80 rounded-3xl overflow-hidden shadow-xl border border-primary/10 relative group z-10"
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.130985458021!2d78.51378891487627!3d17.40552498805903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c968f86f3b%3A0xc3f1f727c92b2ff!2sOsmania%20University%20Road%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1625555000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Lotus Dental & Facial Aesthetic Clinic Location"
                className="transition-transform duration-1000 group-hover:scale-105"
              ></iframe>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
