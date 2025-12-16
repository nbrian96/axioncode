import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AboutInteractive from './components/AboutInteractive';

export const metadata: Metadata = {
    title: 'Nosotros - AxionCode',
    description:
        'Conocé al equipo de AxionCode: desarrolladores apasionados comprometidos con la transparencia, calidad y relaciones a largo plazo. Software honesto sin promesas vacías.',
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="pt-20">
                <AboutInteractive />
            </main>
        </>
    );
}
