import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
    number: string;
    title: string;
    description: string;
    icon: string;
}

interface ProcessSectionProps {
    language: 'es' | 'en';
}

const ProcessSection = ({ language }: ProcessSectionProps) => {
    const content = {
        es: {
            badge: 'Nuestro proceso',
            title: 'Cómo trabajamos juntos',
            subtitle: 'Un proceso transparente y colaborativo diseñado para tu tranquilidad',
            steps: [
                {
                    number: '01',
                    title: 'Consulta inicial',
                    description:
                        'Conversamos sobre tu proyecto, necesidades y objetivos. Sin compromisos, solo una charla honesta.',
                    icon: 'ChatBubbleLeftRightIcon',
                },
                {
                    number: '02',
                    title: 'Propuesta clara',
                    description:
                        'Te enviamos una propuesta detallada con alcance, plazos realistas y costos transparentes.',
                    icon: 'DocumentTextIcon',
                },
                {
                    number: '03',
                    title: 'Desarrollo iterativo',
                    description:
                        'Trabajamos en sprints cortos con entregas frecuentes. Siempre sabés en qué estamos trabajando.',
                    icon: 'CodeBracketIcon',
                },
                {
                    number: '04',
                    title: 'Entrega y soporte',
                    description:
                        'Lanzamos tu proyecto y te acompañamos después. El soporte post-entrega está incluido.',
                    icon: 'RocketLaunchIcon',
                },
            ],
        },
        en: {
            badge: 'Our process',
            title: 'How we work together',
            subtitle: 'A transparent and collaborative process designed for your peace of mind',
            steps: [
                {
                    number: '01',
                    title: 'Initial consultation',
                    description:
                        'We talk about your project, needs and goals. No commitments, just an honest conversation.',
                    icon: 'ChatBubbleLeftRightIcon',
                },
                {
                    number: '02',
                    title: 'Clear proposal',
                    description:
                        'We send you a detailed proposal with scope, realistic timelines and transparent costs.',
                    icon: 'DocumentTextIcon',
                },
                {
                    number: '03',
                    title: 'Iterative development',
                    description:
                        "We work in short sprints with frequent deliveries. You always know what we're working on.",
                    icon: 'CodeBracketIcon',
                },
                {
                    number: '04',
                    title: 'Delivery and support',
                    description:
                        'We launch your project and accompany you afterwards. Post-delivery support is included.',
                    icon: 'RocketLaunchIcon',
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
                        <Icon name="ClipboardDocumentCheckIcon" size={20} className="text-accent" />
                        <span className="text-sm font-medium text-accent">{t.badge}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                        {t.title}
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-card border border-border rounded-xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                                    {step.number}
                                </div>

                                <div className="w-14 h-14 bg-accent-subtle rounded-lg flex items-center justify-center mb-6 mt-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                                    <Icon
                                        name={step.icon as any}
                                        size={28}
                                        className="text-accent group-hover:text-accent-foreground"
                                    />
                                </div>

                                <h3 className="text-xl font-semibold text-text-primary mb-3">
                                    {step.title}
                                </h3>

                                <p className="text-text-secondary leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {index < t.steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
