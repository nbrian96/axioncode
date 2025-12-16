'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import HeroSection from './HeroSection';
import ServicesOverview from './ServicesOverview';
import ProcessSection from './ProcessSection';
import TrustSignals from './TrustSignals';
import CTASection from './CTASection';
import Footer from './Footer';

const HomepageInteractive = () => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState<'es' | 'en'>('es');

    useEffect(() => {
        setIsHydrated(true);

        if (typeof window !== 'undefined') {
            const savedLanguage = localStorage.getItem('preferredLanguage') as 'es' | 'en' | null;
            if (savedLanguage) {
                setCurrentLanguage(savedLanguage);
            }
        }
    }, []);

    if (!isHydrated) {
        return (
            <div className="min-h-screen bg-background">
                <div className="h-20 bg-background border-b border-border" />
                <div className="container mx-auto px-6 py-24">
                    <div className="animate-pulse space-y-8">
                        <div className="h-64 bg-muted rounded-xl" />
                        <div className="h-96 bg-muted rounded-xl" />
                        <div className="h-64 bg-muted rounded-xl" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <HeroSection language={currentLanguage} />
                <ServicesOverview language={currentLanguage} />
                <ProcessSection language={currentLanguage} />
                <TrustSignals language={currentLanguage} />
                <CTASection language={currentLanguage} />
            </main>
            <Footer language={currentLanguage} />
        </div>
    );
};

export default HomepageInteractive;
