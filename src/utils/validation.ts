export const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validateEmail = (email: string): boolean => {
  return emailPattern.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phonePattern = /^[0-9]{9,10}$/;
  return phonePattern.test(phone.replace(/\s+/g, ''));
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};