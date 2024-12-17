import React from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { useBooking } from '../../contexts/BookingContext';
import { useTranslation } from '../../contexts/LanguageContext';
import { FormInput } from '../forms/FormInput';
import { FormSelect } from '../forms/FormSelect';
import { TimeSelect } from '../ui/TimeSelect';
import { DatePicker } from '../ui/DatePicker';
import { getAvailableTimeSlots } from './TimeSlots';
import { BookingSuccessMessage } from './BookingSuccessMessage';
import { useFormValidation } from '../../hooks/useFormValidation';
import { sendBookingEmail } from '../../services/emailService';

interface BookingInfo {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}

export function BookingForm() {
  const { showSuccessMessage, setShowSuccessMessage } = useBooking();
  const { t } = useTranslation();
  const { errors, validateForm } = useFormValidation();
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm<BookingInfo>({
    defaultValues: {
      date: format(new Date(), 'yyyy-MM-dd'),
    },
  });

  const selectedDate = watch('date');
  const availableTimeSlots = getAvailableTimeSlots(selectedDate);

  const serviceOptions = [
    { value: 'solarium', label: t.booking.service.options.solarium },
    { value: 'collarium', label: t.booking.service.options.collarium },
    { value: 'bodyslim', label: t.booking.service.options.bodyslim },
  ];

  const onSubmit = async (data: BookingInfo) => {
    const isValid = validateForm(data, {
      service: ['required'],
      date: ['required'],
      time: ['required'],
      name: ['required'],
      email: ['required', 'email'],
      phone: ['required', 'phone'],
    });

    if (isValid) {
      try {
        await sendBookingEmail(data);
        setShowSuccessMessage(true);
      } catch (error) {
        console.error('Booking failed:', error);
      }
    }
  };

  if (showSuccessMessage) {
    return <BookingSuccessMessage />;
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-semibold mb-6">{t.booking.title}</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormSelect
          id="service"
          label={t.booking.service.label}
          value={watch('service') || ''}
          onChange={(value) => setValue('service', value)}
          options={serviceOptions}
          error={errors.service}
          placeholder={t.booking.service.placeholder}
          required
        />

        <DatePicker
          id="date"
          value={selectedDate}
          onChange={(value) => setValue('date', value)}
          error={errors.date}
          label={t.booking.date.label}
          placeholder={t.booking.date.placeholder}
        />

        <TimeSelect
          id="time"
          value={watch('time') || ''}
          onChange={(value) => setValue('time', value)}
          options={availableTimeSlots}
          error={errors.time}
          label={t.booking.time.label}
          placeholder={t.booking.time.placeholder}
        />

        <FormInput
          id="name"
          type="text"
          label={t.booking.personal.name.label}
          value={watch('name') || ''}
          onChange={(value) => setValue('name', value)}
          error={errors.name}
          placeholder={t.booking.personal.name.placeholder}
          required
        />

        <FormInput
          id="email"
          type="email"
          label={t.booking.personal.email.label}
          value={watch('email') || ''}
          onChange={(value) => setValue('email', value)}
          error={errors.email}
          placeholder={t.booking.personal.email.placeholder}
          required
        />

        <FormInput
          id="phone"
          type="tel"
          label={t.booking.personal.phone.label}
          value={watch('phone') || ''}
          onChange={(value) => setValue('phone', value)}
          error={errors.phone}
          placeholder={t.booking.personal.phone.placeholder}
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          {t.booking.submit}
        </button>
      </form>
    </div>
  );
}