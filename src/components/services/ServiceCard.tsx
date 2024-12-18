import React from 'react';
import { Clock } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  duration: string;
  image: string;
  price: string;
}

export function ServiceCard({ title, description, duration, image, price }: ServiceCardProps) {
  const showDuration = title !== 'Profesionalni Solarijum';

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          {showDuration ? (
            <div className="flex items-center text-purple-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>{duration}</span>
            </div>
          ) : (
            <div /> /* Empty div to maintain spacing */
          )}
          <span className="font-semibold text-gray-900">{price}</span>
        </div>
      </div>
    </div>
  );
}