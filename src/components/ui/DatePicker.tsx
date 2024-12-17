import React from 'react';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';

interface DatePickerProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  min?: string;
  label?: string;
  placeholder?: string;
}

export function DatePicker({ id, value, onChange, error, min, label, placeholder }: DatePickerProps) {
  const today = format(new Date(), 'yyyy-MM-dd');

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type="date"
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={min || today}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent appearance-none pr-10"
        />
        <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-purple-600 pointer-events-none" />
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}