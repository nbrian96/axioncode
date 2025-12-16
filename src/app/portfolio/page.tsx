import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PortfolioInteractive from './components/PortfolioInteractive';

export const metadata: Metadata = {
    title: 'Portfolio - AxionCode',
    description:
        'Explore our transparent project showcases and case studies demonstrating quality software development with honest timelines and fair pricing for Latin American businesses.',
};

export default function PortfolioPage() {
    return (
        <>
            <Header />
            <PortfolioInteractive />
        </>
    );
}
