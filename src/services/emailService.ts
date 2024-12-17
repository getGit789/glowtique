import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailjs.config';

interface BookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendBookingEmail = async (bookingData: BookingData) => {
  try {
    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templates.booking,
      {
        service: bookingData.service,
        date: bookingData.date,
        time: bookingData.time,
        name: bookingData.name,
        email: bookingData.email,
        phone: bookingData.phone,
        to_email: 'info@glowtique.rs'
      }
    );
  } catch (error) {
    console.error('Error sending booking email:', error);
    throw error;
  }
};

export const sendContactEmail = async (contactData: ContactData) => {
  try {
    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templates.contact,
      {
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        message: contactData.message,
        to_email: 'info@glowtique.rs'
      }
    );
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};