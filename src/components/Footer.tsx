import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-6 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-gray-400">
              Connecting innovative Ghanaian ideas with global investors.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-300 transition-colors">Home</Link></li>
              <li><Link to="/marketplace" className="text-gray-400 hover:text-primary-300 transition-colors">Marketplace</Link></li>
              <li><Link to="/submit" className="text-gray-400 hover:text-primary-300 transition-colors">Submit Idea</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Innovation Drive</li>
              <li>Accra, Ghana</li>
              <li>info@sikaide.com</li>
              <li>+233 20 123 4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Ƨika•iDe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;