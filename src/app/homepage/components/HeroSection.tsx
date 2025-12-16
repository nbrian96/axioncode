import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
    language: 'es' | 'en';
}

const HeroSection = ({ language }: HeroSectionProps) => {
    const content = {
        es: {
            badge: 'Software sin el discurso de ventas',
            title: 'Desarrollo de software honesto para empresas latinoamericanas',
            subtitle:
                'Código de calidad, precios justos y plazos realistas. Tu socio técnico, no solo tu proveedor.',
            cta: 'Agendá una llamada',
            whatsapp: 'Consultá por WhatsApp',
            stats: [
                { value: '50+', label: 'Proyectos entregados' },
                { value: '98%', label: 'Satisfacción del cliente' },
                { value: '24h', label: 'Tiempo de respuesta' },
            ],
        },
        en: {
            badge: 'Software without the sales pitch',
            title: 'Honest software development for Latin American businesses',
            subtitle:
                'Quality code, fair prices, and realistic timelines. Your technical partner, not just your vendor.',
            cta: 'Schedule a call',
            whatsapp: 'Contact via WhatsApp',
            stats: [
                { value: '50+', label: 'Projects delivered' },
                { value: '98%', label: 'Client satisfaction' },
                { value: '24h', label: 'Response time' },
            ],
        },
    };

    const t = content[language];

    return (
        <section className="relative bg-foreground text-background overflow-hidden">
            <div className="absolute inset-0 geometric-pattern opacity-30" />

            <div className="relative container mx-auto px-6 py-24 lg:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-8">
                        <Icon name="CheckCircleIcon" size={20} className="text-accent" />
                        <span className="text-sm font-medium text-background">{t.badge}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
                        {t.title}
                    </h1>

                    <p className="text-lg md:text-xl text-background/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            {t.cta}
                            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
                        </Link>
                        <a
                            href="https://wa.me/5491112345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 bg-background/10 text-background border border-background/20 font-semibold rounded-lg transition-all duration-300 hover:bg-background/20 hover:-translate-y-0.5"
                        >
                            <Icon name="ChatBubbleLeftRightIcon" size={20} className="mr-2" />
                            {t.whatsapp}
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        {t.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-background/70 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};

export default HeroSection;
