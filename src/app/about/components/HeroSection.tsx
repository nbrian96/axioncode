interface HeroSectionProps {
    title: string;
    subtitle: string;
    description: string;
}

const HeroSection = ({ title, subtitle, description }: HeroSectionProps) => {
    return (
        <section className="relative bg-primary text-primary-foreground py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 geometric-pattern opacity-30" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
                        {subtitle}
                    </p>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary-foreground">
                        {title}
                    </h1>
                    <p className="text-xl text-primary-foreground/80 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
