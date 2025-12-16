import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Technology {
    name: string;
    category: string;
    description: string;
    logo: string;
    alt: string;
}

const technologies: Technology[] = [
    {
        name: 'React & Next.js',
        category: 'Frontend',
        description: 'Interfaces modernas y performantes con el framework más popular del mercado.',
        logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1dd7e25d2-1764751416114.png',
        alt: 'React logo displayed on computer screen with blue gradient background',
    },
    {
        name: 'Node.js & Express',
        category: 'Backend',
        description: 'APIs robustas y escalables con JavaScript en el servidor.',
        logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ff456115-1764648543938.png',
        alt: 'Node.js green hexagon logo on dark coding environment screen',
    },
    {
        name: 'TypeScript',
        category: 'Language',
        description: 'Código más seguro y mantenible con tipado estático.',
        logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_187d51c95-1764639842817.png',
        alt: 'TypeScript blue logo with code editor showing typed JavaScript code',
    },
    {
        name: 'PostgreSQL',
        category: 'Database',
        description: 'Base de datos relacional potente para aplicaciones complejas.',
        logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e1c57163-1765389098596.png',
        alt: 'Database server racks with blue LED lights in modern data center',
    },
    {
        name: 'MongoDB',
        category: 'Database',
        description: 'Base de datos NoSQL flexible para datos no estructurados.',
        logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_11c7a6bb5-1765031720605.png',
        alt: 'Green MongoDB leaf logo on laptop screen with database schema diagrams',
    },
    {
        name: 'AWS & Vercel',
        category: 'Cloud',
        description: 'Infraestructura cloud escalable y confiable para tu aplicación.',
        logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_16c096c98-1764660028162.png',
        alt: 'Cloud computing visualization with orange and blue network connections over Earth',
    },
    {
        name: 'Docker',
        category: 'DevOps',
        description: 'Contenedores para desarrollo y deploy consistente.',
        logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_17f4977cd-1764649065810.png',
        alt: 'Docker blue whale logo on terminal screen with container commands',
    },
    {
        name: 'Git & GitHub',
        category: 'Version Control',
        description: 'Control de versiones profesional y colaboración en equipo.',
        logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_10b9cbdab-1765178035130.png',
        alt: 'GitHub Octocat logo on dark screen with code repository interface',
    },
];

const categories = [
    { name: 'Frontend', icon: 'ComputerDesktopIcon', color: 'text-blue-500' },
    { name: 'Backend', icon: 'ServerIcon', color: 'text-green-500' },
    { name: 'Database', icon: 'CircleStackIcon', color: 'text-purple-500' },
    { name: 'Cloud', icon: 'CloudIcon', color: 'text-orange-500' },
    { name: 'DevOps', icon: 'CogIcon', color: 'text-red-500' },
];

export default function TechnologyStack() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
                        Stack Tecnológico
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Trabajamos con tecnologías modernas, probadas y escalables. Elegimos las
                        herramientas correctas para cada proyecto, no las más de moda.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg"
                        >
                            <Icon
                                name={category.icon as any}
                                size={20}
                                className={category.color}
                            />
                            <span className="font-medium text-text-primary">{category.name}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="relative h-48 bg-muted overflow-hidden">
                                <AppImage
                                    src={tech.logo}
                                    alt={tech.alt}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute top-3 right-3 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-text-primary">
                                    {tech.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-2">{tech.name}</h3>
                                <p className="text-sm text-text-secondary">{tech.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-primary text-primary-foreground rounded-xl p-8 lg:p-12 max-w-4xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                                <Icon
                                    name="LightBulbIcon"
                                    size={40}
                                    className="text-accent-foreground"
                                />
                            </div>
                        </div>
                        <div className="flex-1 text-center lg:text-left">
                            <h3 className="text-2xl font-bold mb-3">
                                ¿Tu proyecto necesita otra tecnología?
                            </h3>
                            <p className="text-primary-foreground/80 mb-6">
                                Nuestro stack es flexible. Si tu proyecto requiere tecnologías
                                específicas o tenés preferencias particulares, nos adaptamos. Lo
                                importante es elegir las herramientas correctas para tus objetivos.
                            </p>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center h-12 px-6 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-accent-hover hover:shadow-md"
                            >
                                Hablemos de tecnología
                                <Icon name="ArrowRightIcon" size={18} className="ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
