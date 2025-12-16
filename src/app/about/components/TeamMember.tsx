'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMemberData {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    alt: string;
    certifications: string[];
    linkedin?: string;
}

interface TeamMemberProps {
    member: TeamMemberData;
}

const TeamMember = ({ member }: TeamMemberProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    if (typeof window !== 'undefined' && !isHydrated) {
        setIsHydrated(true);
    }

    return (
        <div className="bg-card rounded-xl border border-border overflow-hidden transition-smooth hover:shadow-md">
            <div className="relative h-80 overflow-hidden">
                <AppImage
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-text-secondary leading-relaxed mb-4">
                    {isHydrated && isExpanded ? member.bio : `${member.bio.substring(0, 120)}...`}
                </p>
                {isHydrated && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-accent font-medium flex items-center gap-1 transition-smooth hover:gap-2 mb-4"
                    >
                        {isExpanded ? 'Ver menos' : 'Ver más'}
                        <Icon
                            name="ChevronRightIcon"
                            size={16}
                            className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                        />
                    </button>
                )}
                {isHydrated && isExpanded && (
                    <div className="border-t border-border pt-4 mt-4">
                        <p className="text-sm font-semibold text-text-primary mb-2">
                            Certificaciones:
                        </p>
                        <ul className="space-y-1">
                            {member.certifications.map((cert, index) => (
                                <li
                                    key={index}
                                    className="text-sm text-text-secondary flex items-start gap-2"
                                >
                                    <Icon
                                        name="CheckCircleIcon"
                                        size={16}
                                        className="text-success mt-0.5 flex-shrink-0"
                                    />
                                    <span>{cert}</span>
                                </li>
                            ))}
                        </ul>
                        {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-4 text-accent font-medium transition-smooth hover:text-accent-hover"
                            >
                                <Icon name="LinkIcon" size={16} />
                                LinkedIn
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamMember;
