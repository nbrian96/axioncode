'use client';

import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    projectCount: number;
}

const FilterBar = ({
    categories,
    selectedCategory,
    onCategoryChange,
    projectCount,
}: FilterBarProps) => {
    return (
        <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-6">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Icon name="FunnelIcon" size={20} className="text-accent" />
                        <span className="text-sm font-medium text-text-secondary">
                            Filtrar por categoría:
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                                    selectedCategory === category
                                        ? 'bg-accent text-accent-foreground shadow-md'
                                        : 'bg-muted text-text-primary hover:bg-accent/10 hover:text-accent'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Icon name="RectangleStackIcon" size={20} />
                        <span className="font-medium">{projectCount} proyectos</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FilterBar;
