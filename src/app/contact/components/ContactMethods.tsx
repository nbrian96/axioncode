import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
    id: string;
    icon: string;
    title: string;
    description: string;
    action: string;
    actionLabel: string;
    primary?: boolean;
}

interface ContactMethodsProps {
    methods: ContactMethod[];
    onMethodClick: (method: ContactMethod) => void;
}

const ContactMethods: React.FC<ContactMethodsProps> = ({ methods, onMethodClick }) => {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                            Elegí cómo contactarnos
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Múltiples canales para que elijas el que mejor se adapte a tu necesidad
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {methods.map((method) => (
                            <div
                                key={method.id}
                                className={`relative p-8 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                    method.primary
                                        ? 'bg-accent text-accent-foreground border-accent'
                                        : 'bg-card text-card-foreground border-border hover:border-accent'
                                }`}
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div
                                        className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                                            method.primary ? 'bg-white/20' : 'bg-accent/10'
                                        }`}
                                    >
                                        <Icon
                                            name={method.icon as any}
                                            size={24}
                                            className={
                                                method.primary ? 'text-white' : 'text-accent'
                                            }
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2">
                                            {method.title}
                                        </h3>
                                        <p
                                            className={`text-sm ${method.primary ? 'text-white/90' : 'text-text-secondary'}`}
                                        >
                                            {method.description}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => onMethodClick(method)}
                                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                                        method.primary
                                            ? 'bg-white text-accent hover:bg-gray-100'
                                            : 'bg-accent text-accent-foreground hover:bg-accent-hover'
                                    }`}
                                >
                                    {method.actionLabel}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMethods;
