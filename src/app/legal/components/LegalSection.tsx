import React from 'react';

interface LegalSectionProps {
    title: string;
    content: string[];
    index: number;
}

const LegalSection: React.FC<LegalSectionProps> = ({ title, content, index }) => {
    return (
        <section className="scroll-mt-24">
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-subtle text-accent text-sm font-bold">
                    {index + 1}
                </span>
                {title}
            </h3>
            <div className="space-y-4 pl-11">
                {content.map((paragraph, idx) => (
                    <p key={idx} className="text-text-primary leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default LegalSection;
