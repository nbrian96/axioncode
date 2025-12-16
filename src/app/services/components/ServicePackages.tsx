'use client';

import Icon from '@/components/ui/AppIcon';

interface Package {
    id: string;
    category: string;
    name: string;
    tagline: string;
    description: string;
    features: string[];
    timeline: string;
    idealFor: string[];
    priceRange: string;
    icon: string;
    popular?: boolean;
}

interface ServicePackagesProps {
    selectedPackage: string | null;
    onSelectPackage: (id: string | null) => void;
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const packages: Package[] = [
    {
        id: 'mvp-startup',
        category: 'startup',
        name: 'MVP Startup',
        tagline: 'Validá tu idea rápido',
        description:
            'Producto mínimo viable para validar tu concepto en el mercado. Funcionalidades core, diseño limpio y lanzamiento rápido.',
        features: [
            'Análisis de requerimientos y alcance',
            'Diseño UI/UX básico responsive',
            '3-5 funcionalidades principales',
            'Backend API REST con base de datos',
            'Panel de administración básico',
            'Deploy en producción',
            '30 días de soporte post-lanzamiento',
        ],
        timeline: '6-8 semanas',
        idealFor: ['Startups en etapa temprana', 'Validación de producto', 'Pitch a inversores'],
        priceRange: 'USD 8,000 - 15,000',
        icon: 'RocketLaunchIcon',
        popular: true,
    },
    {
        id: 'web-app',
        category: 'web',
        name: 'Aplicación Web Completa',
        tagline: 'Sistema robusto y escalable',
        description:
            'Aplicación web full-stack con arquitectura escalable, integraciones complejas y funcionalidades avanzadas.',
        features: [
            'Arquitectura escalable y modular',
            'Diseño UI/UX profesional completo',
            'Sistema de autenticación y roles',
            'Integraciones con APIs externas',
            'Dashboard con analytics',
            'Optimización de performance',
            'Testing automatizado',
            '60 días de soporte y ajustes',
        ],
        timeline: '12-16 semanas',
        idealFor: ['Empresas establecidas', 'Productos SaaS', 'Plataformas complejas'],
        priceRange: 'USD 25,000 - 50,000',
        icon: 'GlobeAltIcon',
    },
    {
        id: 'mobile-app',
        category: 'mobile',
        name: 'App Mobile Nativa',
        tagline: 'Experiencia mobile premium',
        description:
            'Aplicación móvil nativa para iOS y Android con rendimiento óptimo y experiencia de usuario superior.',
        features: [
            'Desarrollo nativo iOS y Android',
            'Diseño mobile-first optimizado',
            'Integración con servicios del dispositivo',
            'Notificaciones push',
            'Modo offline y sincronización',
            'Publicación en App Store y Play Store',
            '90 días de soporte post-lanzamiento',
        ],
        timeline: '16-20 semanas',
        idealFor: ['Apps consumer-facing', 'Servicios on-demand', 'E-commerce mobile'],
        priceRange: 'USD 35,000 - 70,000',
        icon: 'DevicePhoneMobileIcon',
    },
    {
        id: 'ecommerce',
        category: 'ecommerce',
        name: 'E-commerce Personalizado',
        tagline: 'Tienda online a medida',
        description:
            'Plataforma de comercio electrónico completa con gestión de productos, pagos y logística integrada.',
        features: [
            'Catálogo de productos con variantes',
            'Carrito y checkout optimizado',
            'Integración con pasarelas de pago',
            'Panel de administración completo',
            'Sistema de inventario y stock',
            'Integración con envíos',
            'SEO y marketing tools',
            '60 días de soporte operativo',
        ],
        timeline: '14-18 semanas',
        idealFor: ['Retail online', 'Marketplaces', 'B2B e-commerce'],
        priceRange: 'USD 30,000 - 60,000',
        icon: 'ShoppingCartIcon',
    },
    {
        id: 'consulting',
        category: 'consulting',
        name: 'Consultoría Técnica',
        tagline: 'Expertise cuando lo necesitás',
        description:
            'Asesoramiento técnico especializado para arquitectura, code review, optimización y decisiones tecnológicas.',
        features: [
            'Auditoría de código y arquitectura',
            'Recomendaciones de mejora',
            'Planificación de roadmap técnico',
            'Evaluación de stack tecnológico',
            'Documentación técnica',
            'Capacitación del equipo',
            'Soporte continuo mensual',
        ],
        timeline: '2-4 semanas',
        idealFor: ['Equipos técnicos', 'CTOs', 'Proyectos en curso'],
        priceRange: 'USD 5,000 - 15,000',
        icon: 'AcademicCapIcon',
    },
    {
        id: 'maintenance',
        category: 'support',
        name: 'Mantenimiento y Soporte',
        tagline: 'Tu equipo técnico extendido',
        description:
            'Soporte continuo, actualizaciones, bug fixes y mejoras incrementales para tu aplicación existente.',
        features: [
            'Monitoreo proactivo 24/7',
            'Bug fixes prioritarios',
            'Actualizaciones de seguridad',
            'Mejoras de performance',
            'Nuevas funcionalidades menores',
            'Backup y disaster recovery',
            'Reportes mensuales detallados',
        ],
        timeline: 'Mensual/Anual',
        idealFor: ['Apps en producción', 'Sistemas críticos', 'Crecimiento continuo'],
        priceRange: 'USD 2,000 - 8,000/mes',
        icon: 'WrenchScrewdriverIcon',
    },
];

const filters = [
    { id: 'all', label: 'Todos los Servicios', icon: 'Squares2X2Icon' },
    { id: 'startup', label: 'Startups', icon: 'RocketLaunchIcon' },
    { id: 'web', label: 'Web Apps', icon: 'GlobeAltIcon' },
    { id: 'mobile', label: 'Mobile', icon: 'DevicePhoneMobileIcon' },
    { id: 'ecommerce', label: 'E-commerce', icon: 'ShoppingCartIcon' },
    { id: 'consulting', label: 'Consultoría', icon: 'AcademicCapIcon' },
    { id: 'support', label: 'Soporte', icon: 'WrenchScrewdriverIcon' },
];

export default function ServicePackages({
    selectedPackage,
    onSelectPackage,
    activeFilter,
    onFilterChange,
}: ServicePackagesProps) {
    const filteredPackages =
        activeFilter === 'all' ? packages : packages.filter((pkg) => pkg.category === activeFilter);

    return (
        <section id="packages" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
                        Nuestros Paquetes de Servicio
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Elegí el paquete que mejor se adapte a tu proyecto. Todos incluyen código de
                        calidad, comunicación transparente y soporte post-lanzamiento.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => onFilterChange(filter.id)}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                activeFilter === filter.id
                                    ? 'bg-accent text-accent-foreground shadow-md'
                                    : 'bg-muted text-text-secondary hover:bg-muted/80'
                            }`}
                        >
                            <Icon name={filter.icon as any} size={18} />
                            <span className="hidden sm:inline">{filter.label}</span>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPackages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`relative bg-card border rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                                pkg.popular ? 'border-accent shadow-md' : 'border-border'
                            } ${selectedPackage === pkg.id ? 'ring-2 ring-accent' : ''}`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                                    Más Popular
                                </div>
                            )}

                            <div className="flex items-start justify-between mb-6">
                                <div className="w-12 h-12 bg-accent-subtle rounded-lg flex items-center justify-center">
                                    <Icon
                                        name={pkg.icon as any}
                                        size={24}
                                        className="text-accent"
                                    />
                                </div>
                                <button
                                    onClick={() =>
                                        onSelectPackage(selectedPackage === pkg.id ? null : pkg.id)
                                    }
                                    className="text-text-secondary hover:text-accent transition-smooth"
                                    aria-label={
                                        selectedPackage === pkg.id
                                            ? 'Collapse details'
                                            : 'Expand details'
                                    }
                                >
                                    <Icon
                                        name={
                                            selectedPackage === pkg.id
                                                ? 'ChevronUpIcon'
                                                : 'ChevronDownIcon'
                                        }
                                        size={24}
                                    />
                                </button>
                            </div>

                            <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                            <p className="text-accent font-medium mb-4">{pkg.tagline}</p>
                            <p className="text-text-secondary mb-6">{pkg.description}</p>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-2 text-sm">
                                    <Icon name="ClockIcon" size={18} className="text-accent" />
                                    <span className="text-text-secondary">
                                        Timeline:{' '}
                                        <strong className="text-primary">{pkg.timeline}</strong>
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Icon
                                        name="CurrencyDollarIcon"
                                        size={18}
                                        className="text-accent"
                                    />
                                    <span className="text-text-secondary">
                                        Inversión:{' '}
                                        <strong className="text-primary">{pkg.priceRange}</strong>
                                    </span>
                                </div>
                            </div>

                            {selectedPackage === pkg.id && (
                                <div className="space-y-6 animate-slide-in">
                                    <div>
                                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                                            <Icon
                                                name="CheckCircleIcon"
                                                size={20}
                                                className="text-accent"
                                            />
                                            Qué incluye
                                        </h4>
                                        <ul className="space-y-2">
                                            {pkg.features.map((feature, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2 text-sm text-text-secondary"
                                                >
                                                    <Icon
                                                        name="CheckIcon"
                                                        size={16}
                                                        className="text-accent mt-0.5 flex-shrink-0"
                                                    />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                                            <Icon
                                                name="UserGroupIcon"
                                                size={20}
                                                className="text-accent"
                                            />
                                            Ideal para
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {pkg.idealFor.map((item, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-accent-subtle text-accent text-sm rounded-full"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <a
                                href="/contact"
                                className="mt-6 w-full inline-flex items-center justify-center h-12 px-6 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-accent-hover hover:shadow-md"
                            >
                                Consultar este paquete
                                <Icon name="ArrowRightIcon" size={18} className="ml-2" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-text-secondary mb-6">
                        ¿No encontrás lo que buscás? Armamos un paquete personalizado para tu
                        proyecto.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Hablemos de tu proyecto
                        <Icon name="ChatBubbleLeftRightIcon" size={20} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}
