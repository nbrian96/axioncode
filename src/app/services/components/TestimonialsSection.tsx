import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    service: string;
    quote: string;
    avatar: string;
    alt: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Martín Rodríguez',
        role: 'Founder & CEO',
        company: 'TechFlow',
        service: 'MVP Startup',
        quote: 'AxionCode nos ayudó a lanzar nuestro MVP en tiempo récord. La comunicación fue clara desde el día uno, sin promesas exageradas. Entregaron exactamente lo que necesitábamos para validar nuestra idea con inversores.',
        avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f01d8521-1763291683506.png',
        alt: 'Professional headshot of Hispanic man with short black hair and beard in navy blue suit',
        rating: 5,
    },
    {
        id: '2',
        name: 'Carolina Méndez',
        role: 'CTO',
        company: 'Mercado Digital',
        service: 'E-commerce',
        quote: 'Necesitábamos una plataforma de e-commerce robusta y escalable. El equipo de AxionCode no solo entregó un producto de calidad, sino que nos educó en el proceso. Apreciamos su honestidad sobre tiempos y costos.',
        avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_103b528db-1763293982935.png',
        alt: 'Professional portrait of woman with long brown hair in white blouse smiling at camera',
        rating: 5,
    },
    {
        id: '3',
        name: 'Diego Fernández',
        role: 'Product Manager',
        company: 'FinTech Solutions',
        service: 'Web App',
        quote: 'Trabajar con AxionCode fue refrescante. Nada de jerga técnica innecesaria, solo soluciones prácticas. Nos ayudaron a priorizar features y entregar valor rápido. El soporte post-lanzamiento fue excepcional.',
        avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1723bbfe9-1763295076919.png',
        alt: 'Young professional man with glasses and short dark hair in gray blazer',
        rating: 5,
    },
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
                        Lo que dicen nuestros clientes
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Testimonios reales de empresas que confiaron en nosotros para construir sus
                        productos digitales.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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

                            <blockquote className="text-text-primary mb-6 leading-relaxed">
                                "{testimonial.quote}"
                            </blockquote>

                            <div className="flex items-center gap-4 pt-6 border-t border-border">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                                    <AppImage
                                        src={testimonial.avatar}
                                        alt={testimonial.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-primary">{testimonial.name}</div>
                                    <div className="text-sm text-text-secondary">
                                        {testimonial.role}
                                    </div>
                                    <div className="text-sm text-text-secondary">
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-accent-subtle rounded-full">
                                <Icon name="CheckBadgeIcon" size={16} className="text-accent" />
                                <span className="text-xs font-medium text-accent">
                                    {testimonial.service}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="/portfolio"
                        className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Ver más casos de éxito
                        <Icon name="ArrowRightIcon" size={20} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}
