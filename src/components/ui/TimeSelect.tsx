import React from 'react';
import { FormSelect } from '../forms/FormSelect';

interface TimeSelectProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
  label?: string;
  placeholder?: string;
}

export function TimeSelect({ id, value, onChange, options, error, label, placeholder }: TimeSelectProps) {
  const timeOptions = options.map(time => ({
    value: time,
    label: time
  }));

  return (
    <FormSelect
      id={id}
      label={label || ''}
      value={value}
      onChange={onChange}
      options={timeOptions}
      error={error}
      placeholder={placeholder}
      required
    />
  );
}