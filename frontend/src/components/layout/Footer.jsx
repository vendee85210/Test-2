import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Instagram, Facebook, Youtube, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white">
      {/* Contact Banner */}
      <div className="bg-slate-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Phone className="h-5 w-5 text-amber-400" />
            <span>Call our reservations team on</span>
            <a href="tel:0033674048322" className="text-amber-400 font-semibold hover:text-amber-300">
              📞 0033 674 048 322
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Pure France */}
          <div>
            <h3 className="text-white font-semibold mb-4">PURE FRANCE</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/press" className="text-gray-300 hover:text-white transition-colors">Press and Media</Link></li>
              <li><Link to="/list-property" className="text-gray-300 hover:text-white transition-colors">List your property</Link></li>
            </ul>
          </div>

          {/* Useful Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">USEFUL INFO</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/travel" className="text-gray-300 hover:text-white transition-colors">Travel</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white transition-colors">Customer reviews</Link></li>
              <li><Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of use</Link></li>
              <li><Link to="/rental-agreement" className="text-gray-300 hover:text-white transition-colors">Rental agreement</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy policy</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">CONNECT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <Facebook className="h-4 w-4" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Pinterest</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <Youtube className="h-4 w-4" />
                  <span>YouTube</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <span>📧</span>
                  <span>Google</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <span>💼</span>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-600 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © Atkins & Jones Limited.<br />
            Pure France™ is a registered trading name of Atkins & Jones Ltd and a registered trademark. DS1<br />
            Self-catering holiday rentals with private pools in France | Pure France
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;