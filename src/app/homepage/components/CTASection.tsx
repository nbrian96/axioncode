import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
    language: 'es' | 'en';
}

const CTASection = ({ language }: CTASectionProps) => {
    const content = {
        es: {
            title: '¿Listo para empezar tu proyecto?',
            subtitle: 'Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos',
            primaryCTA: 'Agendá una llamada gratuita',
            secondaryCTA: 'Ver nuestro portfolio',
            features: [
                'Primera consulta sin cargo',
                'Respuesta en menos de 24 horas',
                'Propuesta detallada y transparente',
            ],
        },
        en: {
            title: 'Ready to start your project?',
            subtitle: "Let's talk about how we can help you achieve your technology goals",
            primaryCTA: 'Schedule a free call',
            secondaryCTA: 'View our portfolio',
            features: [
                'First consultation free of charge',
                'Response in less than 24 hours',
                'Detailed and transparent proposal',
            ],
        },
    };

    const t = content[language];

    return (
        <section className="py-24 bg-foreground text-background relative overflow-hidden">
            <div className="absolute inset-0 geometric-pattern opacity-20" />

            <div className="relative container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
                        {t.title}
                    </h2>

                    <p className="text-lg md:text-xl text-background/80 mb-12 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            {t.primaryCTA}
                            <Icon name="CalendarIcon" size={20} className="ml-2" />
                        </Link>
                        <Link
                            href="/portfolio"
                            className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 bg-background/10 text-background border border-background/20 font-semibold rounded-lg transition-all duration-300 hover:bg-background/20 hover:-translate-y-0.5"
                        >
                            {t.secondaryCTA}
                            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-background/70">
                        {t.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Icon
                                    name="CheckCircleIcon"
                                    size={20}
                                    className="text-accent flex-shrink-0"
                                />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
