import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Service {
    icon: string;
    title: string;
    description: string;
    features: string[];
}

interface ServicesOverviewProps {
    language: 'es' | 'en';
}

const ServicesOverview = ({ language }: ServicesOverviewProps) => {
    const content = {
        es: {
            badge: 'Nuestros servicios',
            title: 'Soluciones técnicas sin complicaciones',
            subtitle: 'Desarrollo de software adaptado a las necesidades reales de tu negocio',
            cta: 'Ver todos los servicios',
            services: [
                {
                    icon: 'CodeBracketIcon',
                    title: 'Desarrollo Web',
                    description:
                        'Aplicaciones web modernas y escalables con las últimas tecnologías',
                    features: ['React & Next.js', 'APIs RESTful', 'Diseño responsive'],
                },
                {
                    icon: 'DevicePhoneMobileIcon',
                    title: 'Desarrollo Mobile',
                    description: 'Apps nativas y multiplataforma para iOS y Android',
                    features: ['React Native', 'Flutter', 'Integración nativa'],
                },
                {
                    icon: 'CubeIcon',
                    title: 'MVP & Startups',
                    description: 'Validá tu idea con un producto mínimo viable funcional',
                    features: ['Desarrollo ágil', 'Iteración rápida', 'Costos controlados'],
                },
                {
                    icon: 'WrenchScrewdriverIcon',
                    title: 'Consultoría Técnica',
                    description: 'Asesoramiento experto para decisiones tecnológicas estratégicas',
                    features: ['Arquitectura', 'Code review', 'Optimización'],
                },
            ],
        },
        en: {
            badge: 'Our services',
            title: 'Technical solutions without complications',
            subtitle: 'Software development tailored to your business real needs',
            cta: 'View all services',
            services: [
                {
                    icon: 'CodeBracketIcon',
                    title: 'Web Development',
                    description: 'Modern and scalable web applications with latest technologies',
                    features: ['React & Next.js', 'RESTful APIs', 'Responsive design'],
                },
                {
                    icon: 'DevicePhoneMobileIcon',
                    title: 'Mobile Development',
                    description: 'Native and cross-platform apps for iOS and Android',
                    features: ['React Native', 'Flutter', 'Native integration'],
                },
                {
                    icon: 'CubeIcon',
                    title: 'MVP & Startups',
                    description: 'Validate your idea with a functional minimum viable product',
                    features: ['Agile development', 'Fast iteration', 'Controlled costs'],
                },
                {
                    icon: 'WrenchScrewdriverIcon',
                    title: 'Technical Consulting',
                    description: 'Expert advice for strategic technology decisions',
                    features: ['Architecture', 'Code review', 'Optimization'],
                },
            ],
        },
    };

    const t = content[language];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-subtle border border-accent/20 rounded-full mb-6">
                        <Icon name="SparklesIcon" size={20} className="text-accent" />
                        <span className="text-sm font-medium text-accent">{t.badge}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                        {t.title}
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {t.services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-accent-subtle rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                                <Icon
                                    name={service.icon as any}
                                    size={28}
                                    className="text-accent group-hover:text-accent-foreground"
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-text-primary mb-3">
                                {service.title}
                            </h3>

                            <p className="text-text-secondary mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-2 text-sm text-text-secondary"
                                    >
                                        <Icon
                                            name="CheckIcon"
                                            size={16}
                                            className="text-accent flex-shrink-0"
                                        />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center h-12 px-8 bg-secondary text-secondary-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-muted hover:-translate-y-0.5"
                    >
                        {t.cta}
                        <Icon name="ArrowRightIcon" size={20} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
