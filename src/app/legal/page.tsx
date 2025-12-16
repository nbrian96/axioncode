import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import LegalContent from './components/LegalContent';

export const metadata: Metadata = {
    title: 'Legal - AxionCode',
    description:
        'Privacy policy, terms of service, and accessibility statement for AxionCode software development services.',
};

export default function LegalPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-20">
                <LegalContent />
            </main>
        </>
    );
}
