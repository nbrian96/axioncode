import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
    name: string;
    role: string;
    company: string;
    image: string;
    alt: string;
    quote: string;
    rating: number;
}

interface TrustSignalsProps {
    language: 'es' | 'en';
}

const TrustSignals = ({ language }: TrustSignalsProps) => {
    const content = {
        es: {
            badge: 'Confianza comprobada',
            title: 'Lo que dicen nuestros clientes',
            subtitle: 'Relaciones a largo plazo basadas en transparencia y resultados',
            certifications: {
                title: 'Certificaciones y garantías',
                items: [
                    'Empresa registrada en Argentina',
                    'Cumplimiento fiscal AFIP',
                    'Garantía de calidad en código',
                    'Soporte post-entrega incluido',
                ],
            },
            testimonials: [
                {
                    name: 'María González',
                    role: 'CEO',
                    company: 'TechStart Argentina',
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11094aa78-1763296768439.png',
                    alt: 'Professional woman with dark hair in business attire smiling at camera in modern office',
                    quote: 'AxionCode nos ayudó a lanzar nuestro MVP en tiempo récord. Su transparencia en costos y plazos fue refrescante en esta industria.',
                    rating: 5,
                },
                {
                    name: 'Carlos Rodríguez',
                    role: 'CTO',
                    company: 'Innovar Solutions',
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12f4a9aaa-1763296256351.png',
                    alt: 'Hispanic man with beard wearing glasses and blue shirt in professional setting',
                    quote: 'Finalmente encontramos un socio técnico que habla nuestro idioma, literal y figurativamente. Excelente calidad de código.',
                    rating: 5,
                },
                {
                    name: 'Ana Martínez',
                    role: 'Founder',
                    company: 'EduTech Latam',
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1387e39bc-1765229993079.png',
                    alt: 'Young woman with long brown hair in casual business attire smiling outdoors',
                    quote: 'La honestidad de AxionCode sobre lo que podían y no podían hacer nos ahorró tiempo y dinero. Altamente recomendados.',
                    rating: 5,
                },
            ],
        },
        en: {
            badge: 'Proven trust',
            title: 'What our clients say',
            subtitle: 'Long-term relationships based on transparency and results',
            certifications: {
                title: 'Certifications and guarantees',
                items: [
                    'Registered company in Argentina',
                    'AFIP tax compliance',
                    'Code quality guarantee',
                    'Post-delivery support included',
                ],
            },
            testimonials: [
                {
                    name: 'María González',
                    role: 'CEO',
                    company: 'TechStart Argentina',
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11094aa78-1763296768439.png',
                    alt: 'Professional woman with dark hair in business attire smiling at camera in modern office',
                    quote: 'AxionCode helped us launch our MVP in record time. Their transparency in costs and timelines was refreshing in this industry.',
                    rating: 5,
                },
                {
                    name: 'Carlos Rodríguez',
                    role: 'CTO',
                    company: 'Innovar Solutions',
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12f4a9aaa-1763296256351.png',
                    alt: 'Hispanic man with beard wearing glasses and blue shirt in professional setting',
                    quote: 'We finally found a technical partner who speaks our language, literally and figuratively. Excellent code quality.',
                    rating: 5,
                },
                {
                    name: 'Ana Martínez',
                    role: 'Founder',
                    company: 'EduTech Latam',
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1387e39bc-1765229993079.png',
                    alt: 'Young woman with long brown hair in casual business attire smiling outdoors',
                    quote: "AxionCode's honesty about what they could and couldn't do saved us time and money. Highly recommended.",
                    rating: 5,
                },
            ],
        },
    };

    const t = content[language];

    return (
        <section className="py-24 bg-muted">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full mb-6">
                        <Icon name="ShieldCheckIcon" size={20} className="text-accent" />
                        <span className="text-sm font-medium text-accent">{t.badge}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                        {t.title}
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">{t.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {t.testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-md"
                        >
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Icon
                                        key={i}
                                        name="StarIcon"
                                        size={20}
                                        className="text-warning"
                                        variant="solid"
                                    />
                                ))}
                            </div>

                            <p className="text-text-primary mb-6 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                    <AppImage
                                        src={testimonial.image}
                                        alt={testimonial.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-text-primary">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-text-secondary">
                                        {testimonial.role}, {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-card border border-border rounded-xl p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-text-primary mb-4">
                            {t.certifications.title}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.certifications.items.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 bg-muted rounded-lg"
                            >
                                <Icon
                                    name="CheckBadgeIcon"
                                    size={24}
                                    className="text-accent flex-shrink-0 mt-0.5"
                                    variant="solid"
                                />
                                <span className="text-sm text-text-primary font-medium">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
