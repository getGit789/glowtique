import React from 'react';
import { ServiceCard } from './ServiceCard';
import { useTranslation } from '../../contexts/LanguageContext';

export function Services() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gray-50 pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 mx-auto max-w-[600px] mb-8">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {t.services.items.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                duration={service.duration}
                price={service.price}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}