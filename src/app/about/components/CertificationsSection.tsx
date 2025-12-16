import AppImage from '@/components/ui/AppImage';

interface Certification {
    id: number;
    name: string;
    issuer: string;
    logo: string;
    alt: string;
}

interface CertificationsSectionProps {
    title: string;
    subtitle: string;
    certifications: Certification[];
}

const CertificationsSection = ({ title, subtitle, certifications }: CertificationsSectionProps) => {
    return (
        <section className="py-20 lg:py-28 bg-muted">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-text-secondary">{subtitle}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-card p-6 rounded-xl border border-border flex flex-col items-center justify-center text-center transition-smooth hover:shadow-md hover:-translate-y-1"
                        >
                            <div className="relative w-20 h-20 mb-4">
                                <AppImage
                                    src={cert.logo}
                                    alt={cert.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-text-primary mb-1">
                                {cert.name}
                            </h3>
                            <p className="text-xs text-text-secondary">{cert.issuer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsSection;
