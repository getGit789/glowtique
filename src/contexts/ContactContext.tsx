import React, { createContext, useContext, useState } from 'react';

interface ContactContextType {
  showSuccessMessage: boolean;
  setShowSuccessMessage: (show: boolean) => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <ContactContext.Provider
      value={{
        showSuccessMessage,
        setShowSuccessMessage,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}