import AppImage from '@/components/ui/AppImage';

interface StorySectionProps {
    title: string;
    paragraphs: string[];
    image: {
        src: string;
        alt: string;
    };
}

const StorySection = ({ title, paragraphs, image }: StorySectionProps) => {
    return (
        <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                            {title}
                        </h2>
                        <div className="space-y-6">
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-lg text-text-secondary leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                            <AppImage
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
