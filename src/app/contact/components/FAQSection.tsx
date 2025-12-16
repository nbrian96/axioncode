'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
    id: string;
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [openId, setOpenId] = useState<string | null>(null);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const toggleFAQ = (id: string) => {
        if (!isHydrated) return;
        setOpenId(openId === id ? null : id);
    };

    if (!isHydrated) {
        return (
            <section className="py-16 lg:py-24 bg-muted">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="animate-pulse space-y-4">
                            <div className="h-8 bg-background rounded w-3/4 mx-auto" />
                            <div className="h-4 bg-background rounded w-1/2 mx-auto" />
                            <div className="space-y-3 mt-8">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-16 bg-background rounded" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 lg:py-24 bg-muted">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                            Preguntas frecuentes
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Respuestas rápidas a las consultas más comunes
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-smooth"
                                >
                                    <span className="font-semibold text-text-primary pr-4">
                                        {faq.question}
                                    </span>
                                    <Icon
                                        name="ChevronDownIcon"
                                        size={20}
                                        className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                                            openId === faq.id ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openId === faq.id ? 'max-h-96' : 'max-h-0'
                                    }`}
                                >
                                    <div className="px-6 pb-6 text-text-secondary leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-text-secondary mb-4">¿No encontraste lo que buscabas?</p>
                        <a
                            href="#contact-methods"
                            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-smooth"
                        >
                            Contactanos directamente
                            <Icon name="ArrowRightIcon" size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
