import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';
import { useBooking } from '../../contexts/BookingContext';
import { useTranslation } from '../../contexts/LanguageContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openBookingModal } = useBooking();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-[#fbccdc] md:bg-[#fcd0df] py-4 md:py-4'
      }`}
    >
      <div className="container mx-auto px-6 md:px-4 flex items-center justify-between h-full">
        <Link href="#home" onClick={() => scrollToSection('home')} className="flex items-center">
          <img 
            src="/Glowtique400x100.png" 
            alt="Glowtique" 
            className={`w-auto transition-all duration-300 ${
              isScrolled 
                ? 'h-8 md:h-12' 
                : 'h-12 md:h-16'
            } hover:opacity-90`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="#home" 
            onClick={() => scrollToSection('home')}
            className={`transition-all duration-300 ${
              isScrolled ? 'text-base' : 'text-lg'
            }`}
          >
            {t.navigation.home}
          </Link>
          <Link 
            href="#services" 
            onClick={() => scrollToSection('services')}
            className={`transition-all duration-300 ${
              isScrolled ? 'text-base' : 'text-lg'
            }`}
          >
            {t.navigation.services}
          </Link>
          <Link 
            href="#contact" 
            onClick={() => scrollToSection('contact')}
            className={`transition-all duration-300 ${
              isScrolled ? 'text-base' : 'text-lg'
            }`}
          >
            {t.navigation.contact}
          </Link>
          <button 
            onClick={openBookingModal}
            className={`bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-all duration-300 ${
              isScrolled ? 'text-base' : 'text-lg'
            }`}
          >
            {t.navigation.bookNow}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center px-0">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`transition-all duration-300 ${
              isScrolled ? 'text-2xl' : 'text-3xl'
            } text-gray-600 hover:text-gray-900 focus:outline-none`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#fbccdc] md:bg-[#f8e7ef] shadow-lg md:hidden">
            <div className="px-4 py-4 space-y-4 flex flex-col items-center text-center">
              <Link
                href="#home"
                onClick={() => {
                  scrollToSection('home');
                  setIsMenuOpen(false);
                }}
                className="block text-gray-700 hover:text-gray-900 transition-all duration-300"
              >
                {t.navigation.home}
              </Link>
              <Link
                href="#services"
                onClick={() => {
                  scrollToSection('services');
                  setIsMenuOpen(false);
                }}
                className="block text-gray-700 hover:text-gray-900 transition-all duration-300"
              >
                {t.navigation.services}
              </Link>
              <Link
                href="#contact"
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="block text-gray-700 hover:text-gray-900 transition-all duration-300"
              >
                {t.navigation.contact}
              </Link>
              <button 
                onClick={() => {
                  openBookingModal();
                  setIsMenuOpen(false);
                }}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors text-sm"
              >
                {t.navigation.bookNow}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}