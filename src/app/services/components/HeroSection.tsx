import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
    return (
        <section className="relative bg-primary text-primary-foreground py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 geometric-pattern opacity-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-subtle rounded-full mb-6">
                        <Icon name="CodeBracketIcon" size={20} className="text-accent" />
                        <span className="text-sm font-medium text-accent">
                            Servicios de Desarrollo
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                        Software de calidad, sin vueltas
                    </h1>

                    <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-8 text-balance">
                        Paquetes transparentes, procesos claros y precios justos. Elegí el servicio
                        que necesitás y empezá a construir tu proyecto con un equipo que habla
                        claro.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#packages"
                            className="inline-flex items-center justify-center h-14 px-8 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto"
                        >
                            Ver Paquetes
                            <Icon name="ArrowDownIcon" size={20} className="ml-2" />
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center h-14 px-8 bg-primary-foreground text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary-foreground/90 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto"
                        >
                            Agendá una llamada
                            <Icon name="PhoneIcon" size={20} className="ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
