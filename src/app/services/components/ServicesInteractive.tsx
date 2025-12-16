'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import ServicePackages from './ServicePackages';
import ProcessWorkflow from './ProcessWorkflow';
import TechnologyStack from './TechnologyStack';
import ServiceComparison from './ServiceComparison';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

export default function ServicesInteractive() {
    const [isHydrated, setIsHydrated] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('all');

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return (
            <main className="min-h-screen bg-background pt-20">
                <div className="container mx-auto px-6 py-16">
                    <div className="animate-pulse space-y-8">
                        <div className="h-12 bg-muted rounded w-3/4"></div>
                        <div className="h-6 bg-muted rounded w-1/2"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {[1, 2, 3]?.map((i) => (
                                <div key={i} className="h-96 bg-muted rounded-lg"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background pt-20">
            <HeroSection />
            <ServicePackages
                selectedPackage={selectedPackage}
                onSelectPackage={setSelectedPackage}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
            />
            <ProcessWorkflow />
            <TechnologyStack />
            <ServiceComparison />
            <TestimonialsSection />
            <CTASection />
        </main>
    );
}
