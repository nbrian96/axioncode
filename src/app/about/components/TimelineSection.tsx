import Icon from '@/components/ui/AppIcon';

interface Milestone {
    id: number;
    year: string;
    title: string;
    description: string;
    icon: string;
}

interface TimelineSectionProps {
    title: string;
    milestones: Milestone[];
}

const TimelineSection = ({ title, milestones }: TimelineSectionProps) => {
    return (
        <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-16">
                    {title}
                </h2>
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
                        {milestones.map((milestone) => (
                            <div key={milestone.id} className="relative mb-12 last:mb-0">
                                <div className="flex items-start gap-6">
                                    <div className="hidden md:flex w-16 h-16 bg-accent rounded-full items-center justify-center flex-shrink-0 relative z-10">
                                        <Icon
                                            name={milestone.icon}
                                            size={24}
                                            className="text-accent-foreground"
                                        />
                                    </div>
                                    <div className="flex-1 bg-card p-6 rounded-xl border border-border transition-smooth hover:shadow-md">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="md:hidden w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                                                <Icon
                                                    name={milestone.icon}
                                                    size={20}
                                                    className="text-accent-foreground"
                                                />
                                            </div>
                                            <span className="text-accent font-bold text-lg">
                                                {milestone.year}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-text-secondary leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
