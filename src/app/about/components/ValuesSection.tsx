import Icon from '@/components/ui/AppIcon';

interface Value {
    id: number;
    icon: string;
    title: string;
    description: string;
}

interface ValuesSectionProps {
    title: string;
    subtitle: string;
    values: Value[];
}

const ValuesSection = ({ title, subtitle, values }: ValuesSectionProps) => {
    return (
        <section className="py-20 lg:py-28 bg-muted">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-text-secondary">{subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value) => (
                        <div
                            key={value.id}
                            className="bg-card p-8 rounded-xl border border-border transition-smooth hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-accent-subtle rounded-lg flex items-center justify-center mb-6">
                                <Icon name={value.icon} size={28} className="text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold text-text-primary mb-3">
                                {value.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
