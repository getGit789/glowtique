import React from 'react';
import { X } from 'lucide-react';
import { useBooking } from '../../contexts/BookingContext';
import { BookingForm } from './BookingForm';
import { BookingSuccessMessage } from './BookingSuccessMessage';

export function BookingModal() {
  const { isBookingModalOpen, closeBookingModal, showSuccessMessage } = useBooking();

  if (!isBookingModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl">
        <button
          onClick={closeBookingModal}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="p-6">
          {showSuccessMessage ? (
            <BookingSuccessMessage />
          ) : (
            <BookingForm />
          )}
        </div>
      </div>
    </div>
  );
}