'use client';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
    id: number;
    title: string;
    client: string;
    category: string;
    tags: string[];
    description: string;
    timeline: string;
    image: string;
    alt: string;
}

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
    return (
        <article
            onClick={onClick}
            className="group bg-card rounded-xl overflow-hidden border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
        >
            <div className="relative h-64 overflow-hidden">
                <AppImage
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-smooth">
                    {project.title}
                </h3>

                <p className="text-sm text-text-secondary mb-4">Cliente: {project.client}</p>

                <p className="text-text-primary mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Icon name="ClockIcon" size={16} />
                        <span>{project.timeline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                        <span>Ver caso completo</span>
                        <Icon name="ArrowRightIcon" size={16} />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
