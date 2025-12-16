'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import FilterBar from './FilterBar';

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

const PortfolioInteractive = () => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const categories = ['Todos', 'E-commerce', 'SaaS', 'Fintech', 'Educación', 'Salud'];

    const projects: Project[] = [
        {
            id: 1,
            title: 'Sistema de Gestión de Inventario',
            client: 'TechRetail Argentina',
            category: 'E-commerce',
            tags: ['React', 'Node.js', 'PostgreSQL'],
            description:
                'Plataforma completa de gestión de inventario para cadena de retail con 15 sucursales en Buenos Aires',
            challenge:
                'El cliente manejaba inventario manualmente en hojas de cálculo, causando errores de stock y pérdidas de ventas. Necesitaban sincronización en tiempo real entre sucursales y reportes automatizados.',
            solution:
                'Desarrollamos un sistema web responsive con dashboard en tiempo real, sincronización automática de stock, alertas de reposición, y generación de reportes personalizados. Implementamos arquitectura escalable con React para el frontend y Node.js con PostgreSQL para el backend.',
            outcome:
                'Reducción del 85% en errores de inventario, aumento del 40% en eficiencia operativa, y ROI positivo en 6 meses. El sistema ahora procesa más de 10,000 transacciones diarias sin problemas.',
            timeline: '4 meses de desarrollo + 2 semanas de capacitación',
            budget: 'ARS 2,500,000 - USD 15,000 (precio fijo)',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_122b22f9d-1764654516001.png',
            alt: 'Modern warehouse interior with organized inventory shelves and digital scanning equipment',
            technologies: [
                { name: 'React 18', category: 'Frontend' },
                { name: 'Node.js', category: 'Backend' },
                { name: 'PostgreSQL', category: 'Database' },
                { name: 'Redis', category: 'Cache' },
                { name: 'AWS', category: 'Infrastructure' },
            ],

            metrics: [
                { label: 'Reducción de Errores', value: '85%', icon: 'ArrowTrendingDownIcon' },
                { label: 'Aumento de Eficiencia', value: '40%', icon: 'ArrowTrendingUpIcon' },
                { label: 'Transacciones Diarias', value: '10K+', icon: 'ChartBarIcon' },
                { label: 'ROI', value: '6 meses', icon: 'CurrencyDollarIcon' },
            ],

            testimonial: {
                client: 'María González',
                role: 'Gerente de Operaciones, TechRetail',
                quote: 'AxionCode no solo entregó el sistema a tiempo, sino que nos capacitó exhaustivamente. Su transparencia en costos y plazos fue refrescante en esta industria.',
                image: 'https://img.rocket.new/generatedImages/rocket_gen_img_117446712-1763296393343.png',
                alt: 'Professional Hispanic woman with short dark hair in business attire smiling at camera',
            },
            gallery: [
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b358b248-1764660304309.png',
                    alt: 'Dashboard analytics screen showing real-time inventory metrics and graphs',
                    caption: 'Dashboard principal con métricas en tiempo real',
                },
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1af87a03a-1764654105211.png',
                    alt: 'Mobile app interface displaying inventory management features',
                    caption: 'Interfaz móvil para gestión sobre la marcha',
                },
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_191ca20e1-1764675977590.png',
                    alt: 'Team members using tablets in warehouse for inventory tracking',
                    caption: 'Sistema en uso en sucursal',
                },
            ],
        },
        {
            id: 2,
            title: 'Plataforma de Educación Online',
            client: 'EduTech Latam',
            category: 'Educación',
            tags: ['Next.js', 'TypeScript', 'MongoDB'],
            description:
                'Sistema de gestión de aprendizaje (LMS) para institución educativa con 5,000+ estudiantes',
            challenge:
                'La institución usaba múltiples plataformas desconectadas para clases, tareas y evaluaciones. Los profesores perdían horas en tareas administrativas y los estudiantes tenían una experiencia fragmentada.',
            solution:
                'Creamos una plataforma unificada con aulas virtuales, sistema de tareas automatizado, evaluaciones en línea, y panel de progreso para estudiantes y padres. Implementamos Next.js para rendimiento óptimo y MongoDB para flexibilidad de datos.',
            outcome:
                'Reducción del 60% en tiempo administrativo docente, aumento del 35% en participación estudiantil, y 98% de satisfacción de usuarios. La plataforma soporta 500 usuarios concurrentes sin degradación de rendimiento.',
            timeline: '5 meses de desarrollo + 1 mes de migración de datos',
            budget: 'ARS 3,200,000 - USD 19,000 (precio fijo)',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e398f1c3-1765060796077.png',
            alt: 'Young students using laptops in modern classroom with teacher guiding them',
            technologies: [
                { name: 'Next.js 14', category: 'Frontend' },
                { name: 'TypeScript', category: 'Language' },
                { name: 'MongoDB', category: 'Database' },
                { name: 'Socket.io', category: 'Real-time' },
                { name: 'Vercel', category: 'Hosting' },
            ],

            metrics: [
                { label: 'Ahorro de Tiempo', value: '60%', icon: 'ClockIcon' },
                { label: 'Participación', value: '+35%', icon: 'UserGroupIcon' },
                { label: 'Satisfacción', value: '98%', icon: 'StarIcon' },
                { label: 'Usuarios Concurrentes', value: '500+', icon: 'UsersIcon' },
            ],

            testimonial: {
                client: 'Dr. Carlos Mendoza',
                role: 'Director Académico, EduTech Latam',
                quote: 'La plataforma transformó nuestra operación educativa. AxionCode entendió nuestras necesidades pedagógicas y las tradujo en tecnología efectiva sin complicaciones innecesarias.',
                image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15e307b98-1763293959673.png',
                alt: 'Middle-aged man with beard and glasses in professional attire smiling warmly',
            },
            gallery: [
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_17cba8b74-1764661435196.png',
                    alt: 'Student dashboard showing course progress and upcoming assignments',
                    caption: 'Panel de estudiante con progreso de cursos',
                },
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ccf9e69e-1764668943669.png',
                    alt: 'Virtual classroom interface with video conferencing and chat features',
                    caption: 'Aula virtual con videoconferencia integrada',
                },
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d97b5e54-1765925684440.png',
                    alt: 'Teacher grading interface with automated assessment tools',
                    caption: 'Sistema de evaluación automatizado para docentes',
                },
            ],
        },
        {
            id: 3,
            title: 'App de Gestión Financiera Personal',
            client: 'FinanzasSimples',
            category: 'Fintech',
            tags: ['React Native', 'Express', 'MySQL'],
            description:
                'Aplicación móvil para control de gastos personales y planificación financiera',
            challenge:
                'Los usuarios argentinos necesitaban una herramienta simple para manejar múltiples cuentas bancarias, trackear gastos en pesos y dólares, y planificar ahorros en contexto de inflación.',
            solution:
                'Desarrollamos app nativa iOS/Android con sincronización bancaria automática, categorización inteligente de gastos, alertas de presupuesto, y proyecciones de ahorro ajustadas a inflación. Backend robusto con Express y MySQL para seguridad de datos financieros.',
            outcome:
                'Más de 15,000 descargas en primer trimestre, calificación 4.8/5 en stores, y usuarios reportan ahorro promedio del 25% en gastos mensuales. Procesamiento seguro de datos de 8 bancos argentinos.',
            timeline: '6 meses de desarrollo + 2 meses de certificación bancaria',
            budget: 'ARS 4,000,000 - USD 24,000 (precio fijo)',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_165991d4f-1765268763579.png',
            alt: 'Person holding smartphone displaying financial charts and budget tracking interface',
            technologies: [
                { name: 'React Native', category: 'Mobile' },
                { name: 'Express.js', category: 'Backend' },
                { name: 'MySQL', category: 'Database' },
                { name: 'JWT', category: 'Security' },
                { name: 'AWS Lambda', category: 'Serverless' },
            ],

            metrics: [
                { label: 'Descargas', value: '15K+', icon: 'ArrowDownTrayIcon' },
                { label: 'Calificación', value: '4.8/5', icon: 'StarIcon' },
                { label: 'Ahorro Promedio', value: '25%', icon: 'BanknotesIcon' },
                { label: 'Bancos Integrados', value: '8', icon: 'BuildingLibraryIcon' },
            ],

            testimonial: {
                client: 'Laura Fernández',
                role: 'Fundadora, FinanzasSimples',
                quote: 'AxionCode navegó la complejidad de integraciones bancarias con profesionalismo. Su enfoque en seguridad y experiencia de usuario fue exactamente lo que necesitábamos.',
                image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10df5a971-1765003957966.png',
                alt: 'Young professional woman with long brown hair in casual business attire smiling confidently',
            },
            gallery: [
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_136be5ba0-1764764585886.png',
                    alt: 'Mobile app home screen showing account balances and recent transactions',
                    caption: 'Pantalla principal con balance de cuentas',
                },
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_198a5d3c2-1765376314265.png',
                    alt: 'Budget tracking interface with category breakdowns and spending alerts',
                    caption: 'Seguimiento de presupuesto por categorías',
                },
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a7e54fb4-1765209246400.png',
                    alt: 'Savings goals dashboard with progress bars and projections',
                    caption: 'Metas de ahorro con proyecciones',
                },
            ],
        },
        {
            id: 4,
            title: 'Sistema de Reservas para Clínica',
            client: 'SaludDigital',
            category: 'Salud',
            tags: ['Vue.js', 'Django', 'PostgreSQL'],
            description: 'Plataforma de gestión de turnos médicos y historias clínicas digitales',
            challenge:
                'Clínica con 20 profesionales manejaba turnos por teléfono, causando dobles reservas y pérdida de pacientes. Historias clínicas en papel dificultaban seguimiento de tratamientos.',
            solution:
                'Implementamos sistema web con reserva online 24/7, recordatorios automáticos por WhatsApp, gestión de historias clínicas digitales con firma electrónica, y panel de métricas para administración. Vue.js para interfaz intuitiva y Django para cumplimiento de normativas de salud.',
            outcome:
                'Reducción del 70% en llamadas telefónicas, disminución del 50% en ausencias de pacientes, digitalización completa de 5,000 historias clínicas. Sistema cumple con Ley de Protección de Datos Personales argentina.',
            timeline: '5 meses de desarrollo + 1 mes de capacitación y migración',
            budget: 'ARS 3,500,000 - USD 21,000 (precio fijo)',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1adff19af-1764799323010.png',
            alt: 'Modern medical clinic reception area with digital check-in kiosk and comfortable waiting room',
            technologies: [
                { name: 'Vue.js 3', category: 'Frontend' },
                { name: 'Django', category: 'Backend' },
                { name: 'PostgreSQL', category: 'Database' },
                { name: 'Celery', category: 'Task Queue' },
                { name: 'WhatsApp API', category: 'Integration' },
            ],

            metrics: [
                { label: 'Reducción de Llamadas', value: '70%', icon: 'PhoneXMarkIcon' },
                { label: 'Menos Ausencias', value: '50%', icon: 'CalendarDaysIcon' },
                { label: 'Historias Digitalizadas', value: '5K', icon: 'DocumentTextIcon' },
                { label: 'Cumplimiento Legal', value: '100%', icon: 'ShieldCheckIcon' },
            ],

            testimonial: {
                client: 'Dra. Ana Rodríguez',
                role: 'Directora Médica, SaludDigital',
                quote: 'La implementación fue impecable. AxionCode entendió las particularidades del sector salud y entregó un sistema que nuestro equipo adoptó inmediatamente.',
                image: 'https://img.rocket.new/generatedImages/rocket_gen_img_14ed39e6a-1765122859411.png',
                alt: 'Female doctor in white coat with stethoscope smiling professionally in clinic setting',
            },
            gallery: [
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_127c653f6-1764651947994.png',
                    alt: 'Patient booking interface showing available appointment slots and doctor profiles',
                    caption: 'Sistema de reserva online para pacientes',
                },
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_12846389f-1764675687984.png',
                    alt: 'Doctor viewing digital medical records on tablet in consultation room',
                    caption: 'Historia clínica digital para profesionales',
                },
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1db111e7f-1764758118070.png',
                    alt: 'Administrative dashboard showing appointment statistics and clinic metrics',
                    caption: 'Panel administrativo con métricas de gestión',
                },
            ],
        },
        {
            id: 5,
            title: 'Marketplace B2B para Proveedores',
            client: 'ConectaNegocios',
            category: 'SaaS',
            tags: ['Angular', 'NestJS', 'MongoDB'],
            description:
                'Plataforma de conexión entre proveedores mayoristas y comercios minoristas',
            challenge:
                'Proveedores y comercios negociaban por WhatsApp y email, perdiendo oportunidades de negocio. Faltaba transparencia en precios y disponibilidad de productos.',
            solution:
                'Creamos marketplace con catálogos digitales, sistema de cotizaciones automáticas, gestión de órdenes de compra, y chat integrado. Angular para experiencia de usuario fluida y NestJS para arquitectura escalable.',
            outcome:
                'Más de 200 proveedores y 1,500 comercios registrados en 6 meses. Volumen de transacciones de USD 500K mensuales. Reducción del 80% en tiempo de negociación.',
            timeline: '7 meses de desarrollo + 2 meses de onboarding de usuarios',
            budget: 'ARS 5,000,000 - USD 30,000 (precio fijo)',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10d9e0e0f-1765252600959.png',
            alt: 'Business professionals shaking hands in modern office with digital screens showing marketplace interface',
            technologies: [
                { name: 'Angular 17', category: 'Frontend' },
                { name: 'NestJS', category: 'Backend' },
                { name: 'MongoDB', category: 'Database' },
                { name: 'RabbitMQ', category: 'Message Queue' },
                { name: 'Stripe', category: 'Payments' },
            ],

            metrics: [
                { label: 'Proveedores', value: '200+', icon: 'BuildingStorefrontIcon' },
                { label: 'Comercios', value: '1.5K', icon: 'ShoppingBagIcon' },
                { label: 'Volumen Mensual', value: 'USD 500K', icon: 'CurrencyDollarIcon' },
                { label: 'Ahorro de Tiempo', value: '80%', icon: 'ClockIcon' },
            ],

            testimonial: {
                client: 'Roberto Sánchez',
                role: 'CEO, ConectaNegocios',
                quote: 'AxionCode construyó la plataforma que imaginábamos pero no sabíamos cómo ejecutar. Su experiencia en marketplaces fue evidente desde el día uno.',
                image: 'https://img.rocket.new/generatedImages/rocket_gen_img_18ed26be6-1765003960128.png',
                alt: 'Mature businessman in suit with gray hair smiling confidently in corporate office',
            },
            gallery: [
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_102dfa408-1764832954959.png',
                    alt: 'Supplier dashboard showing product catalog management and order tracking',
                    caption: 'Panel de proveedor con gestión de catálogo',
                },
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_19b8ea74d-1764642187846.png',
                    alt: 'Retailer interface displaying product search and quote comparison features',
                    caption: 'Búsqueda y comparación de productos para comercios',
                },
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1664c3726-1764675685207.png',
                    alt: 'Order management system showing purchase orders and delivery tracking',
                    caption: 'Sistema de gestión de órdenes de compra',
                },
            ],
        },
        {
            id: 6,
            title: 'Portal de Noticias con CMS',
            client: 'InfoDigital',
            category: 'E-commerce',
            tags: ['Next.js', 'Strapi', 'PostgreSQL'],
            description:
                'Plataforma de publicación de contenido con sistema de gestión para medio digital',
            challenge:
                'Medio de comunicación necesitaba migrar de WordPress a solución custom para mejor rendimiento, SEO y experiencia de lectura. Requerían publicación rápida y gestión de múltiples autores.',
            solution:
                'Desarrollamos portal con Next.js para rendimiento óptimo y SEO, Strapi como CMS headless para gestión flexible de contenido, sistema de comentarios moderados, y analytics integrado. Optimización para Core Web Vitals.',
            outcome:
                'Mejora del 90% en velocidad de carga, aumento del 60% en tiempo de permanencia, y crecimiento del 45% en tráfico orgánico. Publicación de artículos reducida de 15 a 3 minutos.',
            timeline: '4 meses de desarrollo + 1 mes de migración de contenido',
            budget: 'ARS 2,800,000 - USD 17,000 (precio fijo)',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_16b9228b6-1764778840184.png',
            alt: 'Journalist typing on laptop in modern newsroom with multiple monitors displaying news articles',
            technologies: [
                { name: 'Next.js 14', category: 'Frontend' },
                { name: 'Strapi', category: 'CMS' },
                { name: 'PostgreSQL', category: 'Database' },
                { name: 'Cloudflare', category: 'CDN' },
                { name: 'Google Analytics', category: 'Analytics' },
            ],

            metrics: [
                { label: 'Velocidad de Carga', value: '+90%', icon: 'BoltIcon' },
                { label: 'Tiempo de Permanencia', value: '+60%', icon: 'ClockIcon' },
                { label: 'Tráfico Orgánico', value: '+45%', icon: 'ArrowTrendingUpIcon' },
                { label: 'Tiempo de Publicación', value: '-80%', icon: 'DocumentCheckIcon' },
            ],

            testimonial: {
                client: 'Martín López',
                role: 'Editor en Jefe, InfoDigital',
                quote: 'La migración fue transparente para nuestros lectores y transformadora para nuestro equipo editorial. AxionCode entregó exactamente lo prometido, sin sorpresas.',
                image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cced5e37-1763294295729.png',
                alt: 'Young male journalist with casual attire and glasses smiling in creative workspace',
            },
            gallery: [
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1897fadee-1765651100973.png',
                    alt: 'Article page showing optimized reading experience with clean typography',
                    caption: 'Experiencia de lectura optimizada',
                },
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1bdbd5593-1765154164741.png',
                    alt: 'CMS interface showing content management and publishing workflow',
                    caption: 'Sistema de gestión de contenido para editores',
                },
                {
                    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_16d218b41-1764795740480.png',
                    alt: 'Analytics dashboard displaying traffic metrics and reader engagement data',
                    caption: 'Dashboard de analytics integrado',
                },
            ],
        },
    ];

    const filteredProjects = isHydrated
        ? selectedCategory === 'Todos'
            ? projects
            : projects.filter((p) => p.category === selectedCategory)
        : projects;

    const handleProjectClick = (project: Project) => {
        if (!isHydrated) return;
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        if (!isHydrated) return;
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    if (!isHydrated) {
        return (
            <main className="min-h-screen bg-background pt-20">
                <div className="container mx-auto px-6 py-16">
                    <div className="text-center mb-16">
                        <div className="h-12 bg-muted rounded w-64 mx-auto mb-4" />
                        <div className="h-6 bg-muted rounded w-96 mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div
                                key={i}
                                className="bg-card rounded-xl overflow-hidden border border-border"
                            >
                                <div className="h-64 bg-muted" />
                                <div className="p-6 space-y-4">
                                    <div className="h-6 bg-muted rounded w-3/4" />
                                    <div className="h-4 bg-muted rounded w-full" />
                                    <div className="h-4 bg-muted rounded w-5/6" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background pt-20">
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 geometric-pattern opacity-30" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                            Nuestro Portfolio
                        </h1>
                        <p className="text-xl text-text-secondary mb-8">
                            Proyectos reales, resultados transparentes. Cada caso de estudio incluye
                            desafíos honestos, soluciones técnicas detalladas, y métricas
                            verificables.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-text-secondary">
                            <div className="flex items-center gap-2">
                                <Icon name="CheckCircleIcon" size={20} className="text-success" />
                                <span>Plazos reales cumplidos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon name="CheckCircleIcon" size={20} className="text-success" />
                                <span>Presupuestos transparentes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon name="CheckCircleIcon" size={20} className="text-success" />
                                <span>Resultados medibles</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FilterBar
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                projectCount={filteredProjects.length}
            />

            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => handleProjectClick(project)}
                            />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <Icon
                                name="FolderOpenIcon"
                                size={64}
                                className="text-muted-foreground mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-primary mb-2">
                                No hay proyectos en esta categoría
                            </h3>
                            <p className="text-text-secondary">
                                Seleccioná otra categoría para ver más proyectos
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <section className="py-20 bg-muted">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-primary mb-6">
                            ¿Tenés un proyecto en mente?
                        </h2>
                        <p className="text-xl text-text-secondary mb-8">
                            Hablemos sin compromiso. Te daremos una estimación honesta de tiempo y
                            costo, sin presión de ventas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center h-14 px-8 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                <Icon name="CalendarDaysIcon" size={20} className="mr-2" />
                                Agendá una llamada
                            </a>
                            <a
                                href="https://wa.me/5491112345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center h-14 px-8 bg-success text-success-foreground font-semibold rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                <Icon name="ChatBubbleLeftRightIcon" size={20} className="mr-2" />
                                Escribinos por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {isModalOpen && selectedProject && (
                <ProjectModal project={selectedProject} onClose={handleCloseModal} />
            )}

            <footer className="bg-primary text-primary-foreground py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">AxionCode</h3>
                            <p className="text-sm opacity-80">
                                Software development sin el sales pitch. Calidad, transparencia,
                                resultados.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold mb-4">Navegación</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="/homepage"
                                        className="opacity-80 hover:opacity-100 transition-smooth"
                                    >
                                        Inicio
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services"
                                        className="opacity-80 hover:opacity-100 transition-smooth"
                                    >
                                        Servicios
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/about"
                                        className="opacity-80 hover:opacity-100 transition-smooth"
                                    >
                                        Nosotros
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="opacity-80 hover:opacity-100 transition-smooth"
                                    >
                                        Contacto
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a
                                        href="/legal"
                                        className="opacity-80 hover:opacity-100 transition-smooth"
                                    >
                                        Términos y Condiciones
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/legal"
                                        className="opacity-80 hover:opacity-100 transition-smooth"
                                    >
                                        Política de Privacidad
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold mb-4">Contacto</h4>
                            <ul className="space-y-2 text-sm opacity-80">
                                <li>Buenos Aires, Argentina</li>
                                <li>info@axioncode.com</li>
                                <li>+54 9 11 1234-5678</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
                        <p>
                            &copy; {new Date().getFullYear()} AxionCode. Todos los derechos
                            reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default PortfolioInteractive;
