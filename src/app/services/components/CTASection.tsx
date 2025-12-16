import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 geometric-pattern opacity-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                        ¿Listo para empezar tu proyecto?
                    </h2>
                    <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
                        Agendá una llamada sin compromiso. Hablamos de tu proyecto, te damos una
                        estimación honesta y definimos los próximos pasos juntos.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center h-16 px-10 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-xl text-lg w-full sm:w-auto"
                        >
                            Agendá una llamada
                            <Icon name="PhoneIcon" size={24} className="ml-3" />
                        </a>
                        <a
                            href="https://wa.me/5491112345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center h-16 px-10 bg-primary-foreground text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary-foreground/90 hover:-translate-y-0.5 hover:shadow-xl text-lg w-full sm:w-auto"
                        >
                            Escribinos por WhatsApp
                            <Icon name="ChatBubbleLeftRightIcon" size={24} className="ml-3" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                                <Icon name="ClockIcon" size={32} className="text-accent" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Respuesta en 24hs</h3>
                            <p className="text-sm text-primary-foreground/70">
                                Te respondemos rápido, sin vueltas
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                                <Icon name="CurrencyDollarIcon" size={32} className="text-accent" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Presupuesto claro</h3>
                            <p className="text-sm text-primary-foreground/70">
                                Sin costos ocultos ni sorpresas
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                                <Icon name="ShieldCheckIcon" size={32} className="text-accent" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Sin compromiso</h3>
                            <p className="text-sm text-primary-foreground/70">
                                Charlamos primero, decidís después
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
