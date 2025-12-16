'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Technology {
    name: string;
    category: string;
}

interface Metric {
    label: string;
    value: string;
    icon: string;
}

interface Testimonial {
    client: string;
    role: string;
    quote: string;
    image: string;
    alt: string;
}

interface Project {
    id: number;
    title: string;
    client: string;
    category: string;
    tags: string[];
    description: string;
    challenge: string;
    solution: string;
    outcome: string;
    timeline: string;
    budget: string;
    image: string;
    alt: string;
    technologies: Technology[];
    metrics: Metric[];
    testimonial: Testimonial;
    gallery: { image: string; alt: string; caption: string }[];
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4 overflow-y-auto"
            onClick={handleBackdropClick}
        >
            <div className="bg-background rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8 animate-slide-in">
                <div className="sticky top-0 z-10 bg-background border-b border-border px-6 py-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
                        <p className="text-sm text-text-secondary">{project.client}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-muted transition-smooth"
                        aria-label="Cerrar modal"
                    >
                        <Icon name="XMarkIcon" size={24} className="text-text-primary" />
                    </button>
                </div>

                <div className="p-6 space-y-8">
                    <div className="relative h-96 rounded-xl overflow-hidden">
                        <AppImage
                            src={project.image}
                            alt={project.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                                    <Icon
                                        name="ExclamationTriangleIcon"
                                        size={20}
                                        className="text-warning"
                                    />
                                    El Desafío
                                </h3>
                                <p className="text-text-primary">{project.challenge}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                                    <Icon name="LightBulbIcon" size={20} className="text-accent" />
                                    La Solución
                                </h3>
                                <p className="text-text-primary">{project.solution}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
                                    <Icon name="ChartBarIcon" size={20} className="text-success" />
                                    Resultados
                                </h3>
                                <p className="text-text-primary">{project.outcome}</p>
                            </div>

                            <div className="bg-muted rounded-lg p-4 space-y-3">
                                <div className="flex items-center gap-2">
                                    <Icon name="ClockIcon" size={20} className="text-accent" />
                                    <div>
                                        <p className="text-xs text-text-secondary">Timeline</p>
                                        <p className="font-semibold text-primary">
                                            {project.timeline}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        name="CurrencyDollarIcon"
                                        size={20}
                                        className="text-accent"
                                    />
                                    <div>
                                        <p className="text-xs text-text-secondary">Inversión</p>
                                        <p className="font-semibold text-primary">
                                            {project.budget}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                            <Icon name="ChartBarSquareIcon" size={20} className="text-accent" />
                            Métricas Clave
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {project.metrics.map((metric, index) => (
                                <div
                                    key={index}
                                    className="bg-accent-subtle rounded-lg p-4 text-center"
                                >
                                    <Icon
                                        name={metric.icon as any}
                                        size={32}
                                        className="text-accent mx-auto mb-2"
                                    />
                                    <p className="text-2xl font-bold text-primary mb-1">
                                        {metric.value}
                                    </p>
                                    <p className="text-xs text-text-secondary">{metric.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                            <Icon name="CodeBracketIcon" size={20} className="text-accent" />
                            Stack Tecnológico
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {project.technologies.map((tech, index) => (
                                <div key={index} className="bg-muted rounded-lg p-4">
                                    <p className="text-xs text-text-secondary mb-1">
                                        {tech.category}
                                    </p>
                                    <p className="font-semibold text-primary">{tech.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                            <Icon name="PhotoIcon" size={20} className="text-accent" />
                            Galería del Proyecto
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {project.gallery.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg overflow-hidden border border-border"
                                >
                                    <div className="relative h-48">
                                        <AppImage
                                            src={item.image}
                                            alt={item.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-3 bg-muted">
                                        <p className="text-sm text-text-primary">{item.caption}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-muted rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                            <Icon
                                name="ChatBubbleLeftRightIcon"
                                size={20}
                                className="text-accent"
                            />
                            Testimonio del Cliente
                        </h3>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent">
                                    <AppImage
                                        src={project.testimonial.image}
                                        alt={project.testimonial.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-text-primary italic mb-4">
                                    "{project.testimonial.quote}"
                                </p>
                                <div>
                                    <p className="font-semibold text-primary">
                                        {project.testimonial.client}
                                    </p>
                                    <p className="text-sm text-text-secondary">
                                        {project.testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                        <a
                            href="/contact"
                            className="flex-1 inline-flex items-center justify-center h-14 px-8 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            <Icon name="CalendarDaysIcon" size={20} className="mr-2" />
                            Hablemos de tu proyecto
                        </a>
                        <button
                            onClick={onClose}
                            className="flex-1 inline-flex items-center justify-center h-14 px-8 bg-muted text-text-primary font-semibold rounded-lg transition-smooth hover:bg-muted/80"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
