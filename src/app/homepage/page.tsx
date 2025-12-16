import type { Metadata } from 'next';
import HomepageInteractive from './components/HomepageInteractive';

export const metadata: Metadata = {
    title: 'AxionCode - Desarrollo de Software Honesto para Latinoamérica',
    description:
        'Software development sin el discurso de ventas. Código de calidad, precios justos y plazos realistas. Tu socio técnico confiable en Argentina y Latinoamérica.',
};

export default function Homepage() {
    return <HomepageInteractive />;
}
