export const bookingTemplate = {
  subject: 'Nova Rezervacija - Glowtique',
  template: `
    Nova rezervacija je primljena:

    Usluga: {{service}}
    Datum: {{date}}
    Vreme: {{time}}

    Informacije o klijentu:
    Ime: {{name}}
    Email: {{email}}
    Telefon: {{phone}}
  `
};

export const contactTemplate = {
  subject: 'Nova Poruka - Glowtique',
  template: `
    Nova poruka je primljena:

    Od: {{name}}
    Email: {{email}}
    Telefon: {{phone}}

    Poruka:
    {{message}}
  `
};