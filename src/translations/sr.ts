import solariumImage from '../assets/Solarium1.jpg';
import collariumImage from '../assets/Collarium2.jpg';
import bodySlimImage from '../assets/Body-Slim.jpg';

export const sr = {
  navigation: {
    home: 'Početna',
    services: 'Usluge',
    contact: 'Kontakt',
    bookNow: 'Zakaži Odmah',
  },
  hero: {
    title: 'Premium Solarijum & Collarium',
    subtitle: 'Otkrijte svoj blistavi sjaj uz naše profesionalne usluge preplanulosti i podmlađivanja kože. Posebno dizajnirano za one koji cene kvalitet i brigu.',
    cta: 'Zakažite Svoj Termin',
  },
  services: {
    title: 'Naše Premium Usluge',
    subtitle: 'Doživite savršen spoj tehnologije i luksuza u našim premium uslugama preplanulosti i nege tela.',
    items: [
      {
        title: 'Profesionalni Solarijum',
        description: 'Doživite bezbedno i kontrolisano UV tamnjenje u našim najsavremenijim kabinama. Savršeno za postizanje prirodnog, preplanulnog tena.',
        duration: '15-20 minuta',
        price: '400 rsd',
        image: solariumImage
      },
      {
        title: 'Napredni Collarium',
        description: 'Revolucionarna anti-aging terapija koja prirodno podmlađuje kožu i jača kosti, pružajući vidljive rezultate kroz stimulaciju kolagena za mlađi izgled i zdraviji koštani sistem.',
        duration: '15-30 minuta',
        price: 'od 1200 rsd',
        image: collariumImage
      },
      {
        title: 'Body Slim',
        description: 'Napredni tretman oblikovanja tela koristeći najnoviju tehnologiju za vajanje i toniranje tela uz zatezanje kože.',
        duration: '30 minuta',
        price: 'od 3000 rsd',
        image: bodySlimImage
      },
    ],
  },
  contact: {
    title: 'Kontaktirajte Nas',
    subtitle: 'Zakažite svoj termin ili nas kontaktirajte',
    info: {
      title: 'Kontakt',
      email: 'Email',
      phone: 'Telefon',
      location: 'Lokacija',
      emailValue: 'info@glowtique.com',
      phoneValue: '+381 63 123 4567',
      locationValue: 'Zrenjanin, Srbija'
    },
    form: {
      title: 'Pošaljite Nam Poruku',
      name: 'Ime i Prezime',
      email: 'Email Adresa',
      phone: 'Broj Telefona',
      message: 'Vaša Poruka',
      send: 'Pošalji Poruku',
      nameRequired: 'Ime je obavezno',
      emailRequired: 'Email je obavezan',
      emailInvalid: 'Nevažeća email adresa',
      phoneRequired: 'Telefon je obavezan',
      messageRequired: 'Poruka je obavezna',
    },
    success: {
      title: 'Poruka Uspešno Poslata!',
      message: 'Hvala na poruci. Odgovorićemo vam u najkraćem mogućem roku.',
      newMessage: 'Pošaljite Novu Poruku'
    }
  },
  booking: {
    title: 'Zakazivanje Termina',
    service: {
      label: 'Izaberite Uslugu',
      placeholder: 'Odaberite uslugu...',
      options: {
        solarium: 'Profesionalni Solarijum',
        collarium: 'Napredni Collarium',
        bodyslim: 'Body Slim'
      }
    },
    date: {
      label: 'Izaberite Datum',
      placeholder: 'Odaberite datum...'
    },
    time: {
      label: 'Izaberite Vreme',
      placeholder: 'Odaberite vreme...'
    },
    personal: {
      name: {
        label: 'Ime i Prezime',
        placeholder: 'Unesite vaše ime i prezime',
        required: 'Ime je obavezno'
      },
      email: {
        label: 'Email Adresa',
        placeholder: 'Unesite vašu email adresu',
        required: 'Email je obavezan',
        invalid: 'Nevažeća email adresa'
      },
      phone: {
        label: 'Broj Telefona',
        placeholder: 'Unesite vaš broj telefona',
        required: 'Telefon je obavezan'
      }
    },
    submit: 'Zakaži Termin',
    serviceRequired: 'Molimo izaberite uslugu',
    success: {
      title: 'Uspešno Zakazano!',
      message: 'Hvala na rezervaciji. Poslaćemo vam email sa potvrdom uskoro.',
      close: 'Zatvori'
    }
  }
};