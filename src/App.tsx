import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { Services } from './components/services/Services';
import { ContactForm } from './components/contact/ContactForm';
import { Footer } from './components/layout/Footer';
import { BookingProvider } from './contexts/BookingContext';
import { ContactProvider } from './contexts/ContactContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { BookingModal } from './components/booking/BookingModal';

function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <ContactProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <section id="home">
                <Hero />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id="contact">
                <ContactForm />
              </section>
            </main>
            <Footer />
            <BookingModal />
          </div>
        </ContactProvider>
      </BookingProvider>
    </LanguageProvider>
  );
}

export default App;