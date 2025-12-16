import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactDetail {
    id: string;
    icon: string;
    label: string;
    value: string;
    link?: string;
}

interface ContactInfoProps {
    details: ContactDetail[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ details }) => {
    return (
        <section className="py-16 lg:py-24 bg-muted">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                            Información de contacto
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Todos nuestros canales de comunicación disponibles
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {details.map((detail) => (
                            <div
                                key={detail.id}
                                className="bg-card p-6 rounded-xl border border-border hover:border-accent transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                                        <Icon
                                            name={detail.icon as any}
                                            size={24}
                                            className="text-accent"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-text-secondary mb-1">
                                            {detail.label}
                                        </div>
                                        {detail.link ? (
                                            <a
                                                href={detail.link}
                                                className="text-text-primary font-semibold hover:text-accent transition-smooth"
                                                target={
                                                    detail.link.startsWith('http')
                                                        ? '_blank'
                                                        : undefined
                                                }
                                                rel={
                                                    detail.link.startsWith('http')
                                                        ? 'noopener noreferrer'
                                                        : undefined
                                                }
                                            >
                                                {detail.value}
                                            </a>
                                        ) : (
                                            <div className="text-text-primary font-semibold">
                                                {detail.value}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-accent-subtle rounded-xl border border-accent/20">
                        <div className="flex items-start gap-4">
                            <Icon
                                name="ClockIcon"
                                size={24}
                                className="text-accent flex-shrink-0 mt-1"
                            />
                            <div>
                                <h3 className="font-semibold text-text-primary mb-2">
                                    Horarios de atención
                                </h3>
                                <div className="space-y-1 text-text-secondary">
                                    <p>Lunes a Viernes: 09:00 - 18:00 (ART)</p>
                                    <p>Sábados: 10:00 - 14:00 (ART)</p>
                                    <p>Domingos: Cerrado</p>
                                </div>
                                <p className="text-sm text-accent mt-3 font-medium">
                                    Tiempo de respuesta promedio: &lt; 2 horas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
