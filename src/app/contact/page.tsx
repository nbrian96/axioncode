import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactInteractive from './components/ContactInteractive';
import ContactInfo from './components/ContactInfo';
import OfficeLocation from './components/OfficeLocation';

export const metadata: Metadata = {
    title: 'Contacto - AxionCode',
    description:
        'Contactá con AxionCode para agendar una consulta gratuita, consultas por WhatsApp o conocer nuestra oficina en Buenos Aires. Múltiples canales de comunicación disponibles.',
};

interface ContactDetail {
    id: string;
    icon: string;
    label: string;
    value: string;
    link?: string;
}

export default function ContactPage() {
    const contactDetails: ContactDetail[] = [
        {
            id: 'email',
            icon: 'EnvelopeIcon',
            label: 'Email',
            value: 'contacto@axioncode.com',
            link: 'mailto:contacto@axioncode.com',
        },
        {
            id: 'phone',
            icon: 'PhoneIcon',
            label: 'Teléfono',
            value: '+54 9 11 1234-5678',
            link: 'tel:+5491112345678',
        },
        {
            id: 'whatsapp',
            icon: 'ChatBubbleLeftRightIcon',
            label: 'WhatsApp',
            value: '+54 9 11 1234-5678',
            link: 'https://wa.me/5491112345678',
        },
        {
            id: 'address',
            icon: 'MapPinIcon',
            label: 'Dirección',
            value: 'Av. Corrientes 1234, Piso 5, Buenos Aires',
        },
    ];

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <div className="pt-20">
                <ContactHero
                    title="Hablemos de tu proyecto"
                    description="Elegí el canal que prefieras para contactarnos. Estamos listos para escucharte y ayudarte a hacer realidad tu proyecto de software."
                />

                <ContactInteractive />

                <ContactInfo details={contactDetails} />

                <OfficeLocation />
            </div>
        </main>
    );
}
