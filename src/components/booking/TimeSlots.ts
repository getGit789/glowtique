export const timeSlots = [
  '10:00', '10:45', '11:30', '12:15', '13:00',
  '13:45', '14:30', '15:15', '16:00', '16:45',
  '17:30', '18:15', '19:00', '19:45'
];

export const getAvailableTimeSlots = (date: string) => {
  // In a real application, this would fetch from an API
  // For now, we'll return all slots as available
  return timeSlots;
};