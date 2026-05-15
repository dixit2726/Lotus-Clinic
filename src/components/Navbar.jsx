import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/assets/logo.jpg" alt="Lotus Dental Logo" className="h-10 w-auto rounded-lg shadow-sm group-hover:scale-105 transition-transform" />
          <div className="text-2xl font-serif font-bold text-primary">
            Lotus <span className="text-gold">Clinic</span>
          </div>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/offers" className="hover:text-primary transition-colors">Offers</Link>
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <Link to="/contact">
          <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors">
            Book Now
          </button>
        </Link>

        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-gray-200 py-4 shadow-lg flex flex-col items-center space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/offers" onClick={() => setIsOpen(false)}>Offers</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-primary text-white px-6 py-2 rounded-full">Book Now</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
