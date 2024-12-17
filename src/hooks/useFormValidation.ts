import { useState } from 'react';
import { validateEmail, validatePhone, validateRequired } from '../utils/validation';

interface ValidationErrors {
  [key: string]: string;
}

export function useFormValidation() {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (data: { [key: string]: string }, rules: { [key: string]: string[] }) => {
    const newErrors: ValidationErrors = {};

    Object.entries(rules).forEach(([field, validations]) => {
      const value = data[field];

      validations.forEach(rule => {
        if (rule === 'required' && !validateRequired(value)) {
          newErrors[field] = 'Ovo polje je obavezno';
        }
        if (rule === 'email' && !validateEmail(value)) {
          newErrors[field] = 'Nevažeća email adresa';
        }
        if (rule === 'phone' && !validatePhone(value)) {
          newErrors[field] = 'Nevažeći broj telefona';
        }
      });
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validateForm };
}