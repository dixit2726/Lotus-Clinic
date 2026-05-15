import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getAssetPath } from '../utils';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 group">
              <img src={getAssetPath('/assets/logo.jpg')} alt="Lotus Dental Logo" className="h-10 w-auto rounded-lg shadow-lg border border-white/10 group-hover:scale-105 transition-transform" />
              <div className="text-2xl font-serif font-bold text-white">
                Lotus <span className="text-gold">Clinic</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium luxury dental and facial aesthetics in a relaxing, state-of-the-art clinic. Your comfort and care are our highest priorities.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/dr_vijaya_dental_care_clinic/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-serif mb-6 text-white border-b border-gray-800 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/offers" className="text-gray-400 hover:text-gold transition-colors">Monthly Offers</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-gold transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-serif mb-6 text-white border-b border-gray-800 pb-2">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Teeth Cleaning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Smile Designing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Dental Implants</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Carbon Facial</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors">HydraFacial</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-serif mb-6 text-white border-b border-gray-800 pb-2">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-400 text-sm">
                  Above 4 Chillies Restaurant, Indraprasth Colony, Osmania University Road, Vidya Nagar, Hyderabad, 500044
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold flex-shrink-0" size={20} />
                <span className="text-gray-400">+91 90000 46344</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold flex-shrink-0" size={20} />
                <span className="text-gray-400">contact@lotusdental.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Lotus Dental & Facial Aesthetic Clinic. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
