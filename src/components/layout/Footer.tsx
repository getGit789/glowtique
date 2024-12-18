import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { SocialLink } from './SocialLink';
import { useTranslation } from '../../contexts/LanguageContext';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Company Info */}
          <div className="flex-1 min-w-[250px] max-w-sm">
            <h3 className="text-lg font-semibold text-white mb-3">Glowtique</h3>
            <p className="text-sm text-gray-400 mb-4">
              Premium Solarijum, Collarium i Body-Slim usluge za vašu lepotu i zdravlje.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram className="w-4 h-4" />}
                label="Instagram"
              />
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook className="w-4 h-4" />}
                label="Facebook"
              />
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter className="w-4 h-4" />}
                label="Twitter"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[150px] max-w-[200px]">
            <h3 className="text-lg font-semibold text-white mb-3">Brzi Linkovi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-purple-400 transition-colors">
                  Početna
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors">
                  Usluge
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1 min-w-[200px] max-w-[250px]">
            <h3 className="text-lg font-semibold text-white mb-3">Kontakt Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>Zrenjanin, Srbija</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>+381 63 123 4567</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>info@glowtique.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-4 text-center">
          <p className="text-xs text-gray-400">
            {new Date().getFullYear()} Glowtique. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}