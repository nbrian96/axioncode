'use client';

import React, { useState, useEffect } from 'react';
import ContactMethods from './ContactMethods';
import ConsultationBooking from './ConsultationBooking';
import WhatsAppContact from './WhatsAppContact';
import FAQSection from './FAQSection';

interface ContactMethod {
    id: string;
    icon: string;
    title: string;
    description: string;
    action: string;
    actionLabel: string;
    primary?: boolean;
}

interface FAQ {
    id: string;
    question: string;
    answer: string;
}

interface BookingFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    consultationType: string;
    date: string;
    time: string;
    message: string;
}

const ContactInteractive: React.FC = () => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
    const [showWhatsApp, setShowWhatsApp] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const contactMethods: ContactMethod[] = [
        {
            id: 'consultation',
            icon: 'CalendarDaysIcon',
            title: 'Agendá una llamada',
            description: 'Reservá un horario para una consulta personalizada de 30 minutos',
            action: 'booking',
            actionLabel: 'Agendar consulta',
            primary: true,
        },
        {
            id: 'whatsapp',
            icon: 'ChatBubbleLeftRightIcon',
            title: 'WhatsApp',
            description: 'Escribinos por WhatsApp para consultas rápidas y respuestas inmediatas',
            action: 'whatsapp',
            actionLabel: 'Abrir WhatsApp',
            primary: false,
        },
        {
            id: 'email',
            icon: 'EnvelopeIcon',
            title: 'Email',
            description: 'Envianos un email detallado sobre tu proyecto o consulta',
            action: 'email',
            actionLabel: 'Enviar email',
            primary: false,
        },
        {
            id: 'phone',
            icon: 'PhoneIcon',
            title: 'Teléfono',
            description: 'Llamanos directamente en horario de atención',
            action: 'phone',
            actionLabel: 'Ver teléfono',
            primary: false,
        },
    ];

    const faqs: FAQ[] = [
        {
            id: '1',
            question: '¿Cuánto tiempo toma agendar una consulta?',
            answer: 'El proceso de agendado toma menos de 2 minutos. Seleccionás fecha, horario, completás tus datos y listo. Recibirás una confirmación inmediata por email con los detalles de la reunión y un link para la videollamada.',
        },
        {
            id: '2',
            question: '¿La consulta inicial tiene algún costo?',
            answer: 'No, la primera consulta de 30 minutos es completamente gratuita y sin compromiso. Es una oportunidad para conocernos, entender tu proyecto y evaluar si podemos ayudarte. No hay letra chica ni sorpresas.',
        },
        {
            id: '3',
            question: '¿Qué pasa después de agendar la consulta?',
            answer: 'Recibirás un email de confirmación con toda la información: fecha, hora, link de videollamada y un breve cuestionario opcional para que podamos prepararnos mejor. 24 horas antes te enviamos un recordatorio.',
        },
        {
            id: '4',
            question: '¿Puedo cancelar o reprogramar la consulta?',
            answer: 'Sí, podés cancelar o reprogramar hasta 2 horas antes del horario agendado sin ningún problema. Solo necesitás usar el link que te enviamos en el email de confirmación.',
        },
        {
            id: '5',
            question: '¿Responden consultas por WhatsApp fuera de horario?',
            answer: 'Nuestro horario de atención por WhatsApp es de lunes a viernes de 9 a 18hs y sábados de 10 a 14hs (hora Argentina). Fuera de ese horario podés dejarnos tu mensaje y te responderemos al día siguiente hábil.',
        },
        {
            id: '6',
            question: '¿Atienden proyectos de cualquier tamaño?',
            answer: 'Sí, trabajamos con proyectos de todos los tamaños: desde MVPs para startups hasta sistemas complejos para empresas establecidas. En la consulta inicial evaluamos juntos si somos el partner indicado para tu proyecto específico.',
        },
    ];

    const handleMethodClick = (method: ContactMethod) => {
        if (!isHydrated) return;

        if (method.action === 'booking') {
            setShowBooking(true);
        } else if (method.action === 'whatsapp') {
            setShowWhatsApp(true);
        } else if (method.action === 'email') {
            if (typeof window !== 'undefined') {
                window.location.href =
                    'mailto:contacto@axioncode.com?subject=Consulta desde sitio web';
            }
        } else if (method.action === 'phone') {
            if (typeof window !== 'undefined') {
                window.location.href = 'tel:+5491112345678';
            }
        }
    };

    const handleBookingSubmit = (data: BookingFormData) => {
        console.log('Booking submitted:', data);
        setShowBooking(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
    };

    if (!isHydrated) {
        return (
            <div className="animate-pulse">
                <div className="py-16 lg:py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="h-8 bg-muted rounded w-3/4 mx-auto mb-4" />
                            <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-12" />
                            <div className="grid md:grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-48 bg-muted rounded-xl" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div id="contact-methods">
                <ContactMethods methods={contactMethods} onMethodClick={handleMethodClick} />
            </div>

            <FAQSection faqs={faqs} />

            {showBooking && (
                <ConsultationBooking
                    onClose={() => setShowBooking(false)}
                    onSubmit={handleBookingSubmit}
                />
            )}

            {showWhatsApp && <WhatsAppContact onClose={() => setShowWhatsApp(false)} />}

            {showSuccess && (
                <div className="fixed bottom-6 right-6 z-50 bg-success text-success-foreground px-6 py-4 rounded-lg shadow-lg animate-slide-in">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <svg
                                className="w-4 h-4 text-success"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div>
                            <div className="font-semibold">¡Consulta agendada!</div>
                            <div className="text-sm opacity-90">
                                Te enviamos la confirmación por email
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactInteractive;
