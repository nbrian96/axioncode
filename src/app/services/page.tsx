import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';

export const metadata: Metadata = {
    title: 'Servicios - AxionCode',
    description:
        'Descubrí nuestros servicios de desarrollo de software con paquetes transparentes, procesos claros y precios justos. Desde MVPs hasta sistemas empresariales completos.',
};

export default function ServicesPage() {
    return (
        <>
            <Header />
            <ServicesInteractive />
        </>
    );
}
