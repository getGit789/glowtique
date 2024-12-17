import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { DatePicker } from '../ui/DatePicker';
import { TimeSelect } from '../ui/TimeSelect';
import { useBooking } from '../../contexts/BookingContext';
import { useTranslation } from '../../contexts/LanguageContext';

interface BookingInfo {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}

const timeSlots = [
  '10:00', '10:45', '11:30',  '12:15', '13:00',
 '13:45',  '14:30', '15:15', '16:00', '16:45', '17:30', '18:15', '19:00', '19:45'
];

export function BookingForm() {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const { setShowSuccessMessage } = useBooking();
  const { t } = useTranslation();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<BookingInfo>({
    defaultValues: {
      date: selectedDate,
    },
  });

  const onSubmit = async (data: BookingInfo) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Booking submitted:', data);
    setShowSuccessMessage(true);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-semibold mb-6">{t.booking.title}</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            {t.booking.service.label}
          </label>
          <select
            id="service"
            {...register('service', { required: t.booking.serviceRequired })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent appearance-none bg-white"
          >
            <option value="">{t.booking.service.placeholder}</option>
            <option value="solarium">{t.booking.service.options.solarium}</option>
            <option value="collarium">{t.booking.service.options.collarium}</option>
            <option value="bodyslim">{t.booking.service.options.bodyslim}</option>
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>

        <DatePicker
          id="date"
          value={watch('date')}
          onChange={(value) => setValue('date', value)}
          error={errors.date?.message}
          label={t.booking.date.label}
          placeholder={t.booking.date.placeholder}
        />

        <TimeSelect
          id="time"
          value={watch('time') || ''}
          onChange={(value) => setValue('time', value)}
          options={timeSlots}
          error={errors.time?.message}
          label={t.booking.time.label}
          placeholder={t.booking.time.placeholder}
        />

        <div className="space-y-4">
          <div>
            <label htmlFor="bookingName" className="block text-sm font-medium text-gray-700 mb-1">
              {t.booking.personal.name.label}
            </label>
            <input
              type="text"
              id="bookingName"
              {...register('name', { required: t.booking.personal.name.required })}
              placeholder={t.booking.personal.name.placeholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="bookingEmail" className="block text-sm font-medium text-gray-700 mb-1">
              {t.booking.personal.email.label}
            </label>
            <input
              type="email"
              id="bookingEmail"
              {...register('email', {
                required: t.booking.personal.email.required,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: t.booking.personal.email.invalid,
                },
              })}
              placeholder={t.booking.personal.email.placeholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="bookingPhone" className="block text-sm font-medium text-gray-700 mb-1">
              {t.booking.personal.phone.label}
            </label>
            <input
              type="tel"
              id="bookingPhone"
              {...register('phone', { required: t.booking.personal.phone.required })}
              placeholder={t.booking.personal.phone.placeholder}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

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