import React from 'react';

interface ContactHeroProps {
    title: string;
    description: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ title, description }) => {
    return (
        <section className="relative bg-primary text-primary-foreground py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 geometric-pattern opacity-30" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">{title}</h1>
                    <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
