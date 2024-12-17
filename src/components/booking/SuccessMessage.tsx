import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';

export function SuccessMessage() {
  const { closeBookingModal } = useBooking();

  return (
    <div className="text-center py-8">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
        Booking Successful!
      </h3>
      <p className="text-gray-600 mb-6">
        Thank you for your booking. We'll send you a confirmation email shortly.
      </p>
      <button
        onClick={closeBookingModal}
        className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
      >
        Close
      </button>
    </div>
  );
}