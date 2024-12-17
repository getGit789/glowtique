const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

const bookingTemplate = (data) => `
Nova rezervacija je primljena:

Usluga: ${data.service}
Datum: ${data.date}
Vreme: ${data.time}

Informacije o klijentu:
Ime: ${data.name}
Email: ${data.email}
Telefon: ${data.phone}

Automatski odgovor je poslat klijentu.
`;

const contactTemplate = (data) => `
Nova poruka je primljena:

Od: ${data.name}
Email: ${data.email}
Telefon: ${data.phone}

Poruka:
${data.message}

Automatski odgovor je poslat klijentu.
`;

const customerBookingTemplate = (data) => `
Poštovani/a ${data.name},

Hvala vam na rezervaciji termina u Glowtique-u.

Detalji vaše rezervacije:
Usluga: ${data.service}
Datum: ${data.date}
Vreme: ${data.time}

Uskoro ćemo vas kontaktirati radi potvrde rezervacije.

Srdačan pozdrav,
Glowtique Tim
`;

const customerContactTemplate = (data) => `
Poštovani/a ${data.name},

Hvala vam na poruci. Potrudićemo se da vam odgovorimo u najkraćem mogućem roku.

Srdačan pozdrav,
Glowtique Tim
`;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);
    const { type } = data;

    // Send email to business
    await transporter.sendMail({
      from: '"Glowtique Website" <no-reply@glowtique.rs>',
      to: 'info@glowtique.rs',
      subject: type === 'booking' ? 'Nova Rezervacija' : 'Nova Poruka',
      text: type === 'booking' ? bookingTemplate(data) : contactTemplate(data)
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: '"Glowtique" <info@glowtique.rs>',
      to: data.email,
      subject: type === 'booking' ? 'Potvrda Rezervacije - Glowtique' : 'Potvrda Prijema Poruke - Glowtique',
      text: type === 'booking' ? customerBookingTemplate(data) : customerContactTemplate(data)
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Emails sent successfully' })
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send emails' })
    };
  }
};