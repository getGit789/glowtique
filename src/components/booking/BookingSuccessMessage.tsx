import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { useTranslation } from '../../contexts/LanguageContext';

export function BookingSuccessMessage() {
  const { setShowSuccessMessage } = useBooking();
  const { t } = useTranslation();

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        {t.booking.success.title}
      </h3>
      <p className="text-gray-600 mb-6">
        {t.booking.success.message}
      </p>
      <button
        onClick={() => setShowSuccessMessage(false)}
        className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
      >
        {t.booking.success.close}
      </button>
    </div>
  );
}