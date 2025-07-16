import React from 'react';
import { MapPin, Phone, Mail, Globe, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-hostly-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {/* Brand & Social */}
          <div>
            <h3 className="text-2xl font-bold text-hostly-primary mb-4">Hostly</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your Space Your Way - Experience modern living with premium amenities. 
              We provide affordable & comfortable accommodations for students and professionals.
            </p>

            <h4 className="text-lg font-semibold mb-3 text-hostly-primary">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/host.ly_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-hostly-primary text-hostly-accent p-3 rounded-full hover:bg-yellow-400 hover:scale-110 transition-transform"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/919446588033?text=Hello%2C%20I%20want%20to%20book%20a%20free%20visit"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-hostly-primary text-hostly-accent p-3 rounded-full hover:bg-yellow-400 hover:scale-110 transition-transform"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://hostly.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-hostly-primary text-hostly-accent p-3 rounded-full hover:bg-yellow-400 hover:scale-110 transition-transform"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-hostly-primary">Get in Touch</h4>
            <div className="space-y-5">

              <div className="flex items-start space-x-3">
                <div className="bg-hostly-primary text-hostly-accent p-2 rounded-lg">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a 
                    href="tel:+919446588033" 
                    className="text-hostly-primary hover:text-hostly-secondary text-sm transition"
                  >
                    +91 9446 588 033
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-hostly-primary text-hostly-accent p-2 rounded-lg">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:support@hostly.co.in" 
                    className="text-hostly-primary hover:text-hostly-secondary text-sm transition"
                  >
                    support@hostly.co.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-hostly-primary">Visit Us</h4>
            <div className="flex items-start space-x-3 mb-4">
              <div className="bg-hostly-primary text-hostly-accent p-2 rounded-lg">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Address</p>
                <p className="text-hostly-primary text-sm">
                  Thondayad, Pipe Line Road<br />
                  Near Star Care Hospital<br />
                  Kozhikode, Kerala
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <a 
              href="https://maps.google.com/?q=11.270523,75.806389" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-hostly-primary text-hostly-accent hover:bg-hostly-secondary  px-4 py-2 rounded-lg text-sm font-medium mb-4 transition"
            >
              <MapPin size={16} />
              <span>View on Google Maps</span>
            </a>
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=11.270523,75.806389&hl=en&z=14&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-48"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Hostly. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-hostly-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-hostly-primary transition">Terms of Service</a>
            <a href="#" className="hover:text-hostly-primary transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
