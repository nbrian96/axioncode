import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
    number: string;
    title: string;
    description: string;
    duration: string;
    icon: string;
    deliverables: string[];
}

const processSteps: ProcessStep[] = [
    {
        number: '01',
        title: 'Discovery & Planning',
        description:
            'Entendemos tu negocio, objetivos y usuarios. Definimos alcance, tecnologías y roadmap del proyecto.',
        duration: '1-2 semanas',
        icon: 'MagnifyingGlassIcon',
        deliverables: [
            'Documento de requerimientos',
            'Arquitectura técnica',
            'Timeline detallado',
            'Propuesta de presupuesto',
        ],
    },
    {
        number: '02',
        title: 'Diseño & Prototipado',
        description:
            'Creamos wireframes, diseños UI/UX y prototipos interactivos para validar la experiencia antes de desarrollar.',
        duration: '2-3 semanas',
        icon: 'PaintBrushIcon',
        deliverables: [
            'Wireframes completos',
            'Diseño UI final',
            'Prototipo interactivo',
            'Guía de estilos',
        ],
    },
    {
        number: '03',
        title: 'Desarrollo',
        description:
            'Construimos tu aplicación con sprints semanales, demos regulares y comunicación constante sobre el progreso.',
        duration: '4-12 semanas',
        icon: 'CodeBracketIcon',
        deliverables: [
            'Código fuente',
            'Demos semanales',
            'Documentación técnica',
            'Testing automatizado',
        ],
    },
    {
        number: '04',
        title: 'Testing & QA',
        description:
            'Probamos exhaustivamente funcionalidad, performance, seguridad y experiencia de usuario en diferentes dispositivos.',
        duration: '1-2 semanas',
        icon: 'BeakerIcon',
        deliverables: [
            'Reporte de testing',
            'Bug fixes',
            'Optimización de performance',
            'Validación de seguridad',
        ],
    },
    {
        number: '05',
        title: 'Deploy & Launch',
        description:
            'Desplegamos tu aplicación en producción con configuración de servidores, dominios y monitoreo.',
        duration: '1 semana',
        icon: 'RocketLaunchIcon',
        deliverables: [
            'Deploy en producción',
            'Configuración de infraestructura',
            'Monitoreo activo',
            'Documentación de usuario',
        ],
    },
    {
        number: '06',
        title: 'Soporte & Evolución',
        description:
            'Te acompañamos post-lanzamiento con soporte técnico, ajustes y planificación de nuevas funcionalidades.',
        duration: 'Continuo',
        icon: 'WrenchScrewdriverIcon',
        deliverables: [
            'Soporte técnico',
            'Bug fixes prioritarios',
            'Actualizaciones',
            'Consultoría continua',
        ],
    },
];

export default function ProcessWorkflow() {
    return (
        <section className="py-24 bg-muted">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
                        Nuestro Proceso de Trabajo
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Un proceso transparente y predecible. Sabés exactamente qué esperar en cada
                        etapa y recibís entregables concretos.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {processSteps.map((step, index) => (
                        <div
                            key={step.number}
                            className="bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-accent-subtle rounded-lg flex items-center justify-center mb-4">
                                        <Icon
                                            name={step.icon as any}
                                            size={28}
                                            className="text-accent"
                                        />
                                    </div>
                                    <div className="text-4xl font-bold text-accent/20">
                                        {step.number}
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-primary mb-2">
                                        {step.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
                                        <Icon name="ClockIcon" size={16} className="text-accent" />
                                        <span>{step.duration}</span>
                                    </div>
                                    <p className="text-text-secondary mb-6">{step.description}</p>

                                    <div>
                                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                                            <Icon
                                                name="DocumentCheckIcon"
                                                size={18}
                                                className="text-accent"
                                            />
                                            Entregables
                                        </h4>
                                        <ul className="space-y-2">
                                            {step.deliverables.map((deliverable, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2 text-sm text-text-secondary"
                                                >
                                                    <Icon
                                                        name="CheckIcon"
                                                        size={16}
                                                        className="text-accent mt-0.5 flex-shrink-0"
                                                    />
                                                    <span>{deliverable}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-accent-subtle border border-accent/20 rounded-xl p-8 max-w-4xl mx-auto">
                    <div className="flex items-start gap-4">
                        <Icon
                            name="InformationCircleIcon"
                            size={24}
                            className="text-accent flex-shrink-0 mt-1"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-2">
                                Comunicación Transparente
                            </h3>
                            <p className="text-text-secondary mb-4">
                                Durante todo el proceso mantenemos comunicación constante a través
                                de:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-sm text-text-secondary">
                                    <Icon
                                        name="ChatBubbleLeftRightIcon"
                                        size={16}
                                        className="text-accent"
                                    />
                                    <span>Reuniones semanales de seguimiento</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-text-secondary">
                                    <Icon
                                        name="DocumentTextIcon"
                                        size={16}
                                        className="text-accent"
                                    />
                                    <span>Reportes de progreso detallados</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-text-secondary">
                                    <Icon
                                        name="VideoCameraIcon"
                                        size={16}
                                        className="text-accent"
                                    />
                                    <span>Demos de funcionalidades</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-text-secondary">
                                    <Icon name="EnvelopeIcon" size={16} className="text-accent" />
                                    <span>Acceso directo al equipo técnico</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
