import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from '../../contexts/LanguageContext';

export function ServiceSelect() {
  const { register, formState: { errors } } = useFormContext();
  const { t } = useTranslation();

  return (
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
        <p className="mt-1 text-sm text-red-600">{errors.service.message as string}</p>
      )}
    </div>
  );
}