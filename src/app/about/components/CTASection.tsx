import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
    title: string;
    description: string;
    primaryCTA: {
        text: string;
        href: string;
    };
    secondaryCTA: {
        text: string;
        href: string;
    };
}

const CTASection = ({ title, description, primaryCTA, secondaryCTA }: CTASectionProps) => {
    return (
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 geometric-pattern opacity-20" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">{title}</h2>
                    <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={primaryCTA.href}
                            className="inline-flex items-center justify-center h-14 px-8 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            {primaryCTA.text}
                            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
                        </Link>
                        <Link
                            href={secondaryCTA.href}
                            className="inline-flex items-center justify-center h-14 px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-primary-foreground hover:text-primary hover:-translate-y-0.5"
                        >
                            {secondaryCTA.text}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
