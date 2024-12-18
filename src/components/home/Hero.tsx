import { useBooking } from '../../contexts/BookingContext';
import { useTranslation } from '../../contexts/LanguageContext';
import heroImage from '../../assets/Header-website.jpeg';

export function Hero() {
  const { openBookingModal } = useBooking();
  const { t } = useTranslation();

  return (
    <section className="relative h-[100vh] flex items-center justify-center bg-[#fcd0df] overflow-hidden -mt-[1px] pt-12">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcd0df]/90 to-[#fcd0df]/80 z-10"></div>
      
      {/* Hero image with optimization */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Spa background"
          className="w-full h-full object-cover object-center translate-y-[40px] md:translate-y-[80px]"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      
      {/* Content with improved shadows */}
      <div className="container mx-auto px-4 z-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-sm">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto drop-shadow-sm">
            {t.hero.subtitle}
          </p>
          <button 
            onClick={openBookingModal}
            className="relative bg-purple-600 text-white px-8 py-3 rounded-full text-lg hover:bg-purple-700 transition-all duration-200 animate-pulse hover:animate-none"
          >
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  );
}