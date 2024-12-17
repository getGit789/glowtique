import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import { BookingForm } from '../booking/BookingForm';
import { useContact } from '../../contexts/ContactContext';
import { ContactSuccessMessage } from './ContactSuccessMessage';
import { useTranslation } from '../../contexts/LanguageContext';
import { sendContactEmail } from '../../services/emailService';

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const { showSuccessMessage, setShowSuccessMessage } = useContact();
  const { t } = useTranslation();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInfo>();

  const onSubmit = async (data: ContactInfo) => {
    try {
      await sendContactEmail(data);
      setShowSuccessMessage(true);
      reset();
    } catch (error) {
      console.error('Message submission failed:', error);
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gray-50 pt-4 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 mx-auto max-w-[600px] mb-8">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <BookingForm />
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">{t.contact.info.title}</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-medium">{t.contact.info.email}</h4>
                      <p className="text-gray-600">{t.contact.info.emailValue}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-medium">{t.contact.info.phone}</h4>
                      <p className="text-gray-600">{t.contact.info.phoneValue}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-medium">{t.contact.info.location}</h4>
                      <p className="text-gray-600">{t.contact.info.locationValue}</p>
                    </div>
                  </div>
                </div>
              </div>

              {showSuccessMessage ? (
                <ContactSuccessMessage />
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6">{t.contact.form.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.contact.form.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name', { required: t.contact.form.nameRequired })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email', {
                          required: t.contact.form.emailRequired,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: t.contact.form.emailInvalid,
                          },
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone', { required: t.contact.form.phoneRequired })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.contact.form.message}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register('message', { required: t.contact.form.messageRequired })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      {t.contact.form.send}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}