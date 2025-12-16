'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import StorySection from './StorySection';
import ValuesSection from './ValuesSection';
import TeamMember from './TeamMember';
import TimelineSection from './TimelineSection';
import CertificationsSection from './CertificationsSection';
import CTASection from './CTASection';

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

interface Value {
    id: number;
    icon: string;
    title: string;
    description: string;
}

interface Milestone {
    id: number;
    year: string;
    title: string;
    description: string;
    icon: string;
}

interface Certification {
    id: number;
    name: string;
    issuer: string;
    logo: string;
    alt: string;
}

const AboutInteractive = () => {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const heroData = {
        title: 'Somos AxionCode',
        subtitle: 'Nosotros',
        description:
            'Un equipo de desarrolladores apasionados que cree en la transparencia, la calidad y las relaciones a largo plazo. No vendemos humo, entregamos software que funciona.',
    };

    const storyData = {
        title: 'Nuestra Historia',
        paragraphs: [
            'AxionCode nació de una frustración compartida: ver cómo muchas empresas de software prometen la luna y entregan apenas una estrella. Fundada en 2020 en Buenos Aires, Argentina, comenzamos con una misión simple pero poderosa: construir software de calidad sin las tácticas de venta agresivas que caracterizan a la industria.',
            "Desde nuestros primeros proyectos, establecimos un principio fundamental: la honestidad antes que la venta. Preferimos decir 'no podemos hacer esto' antes que prometer algo irrealizable. Esta filosofía nos ha ganado la confianza de startups y empresas establecidas en toda Latinoamérica.",
            'Hoy, somos un equipo de 15 profesionales comprometidos con la excelencia técnica y la comunicación transparente. Cada proyecto que emprendemos refleja nuestros valores: código limpio, plazos realistas y precios justos.',
        ],

        image: {
            src: 'https://img.rocket.new/generatedImages/rocket_gen_img_112cf8eca-1764668943722.png',
            alt: 'Modern office workspace with developers collaborating around computer screens showing code, natural lighting through large windows',
        },
    };

    const valuesData = {
        title: 'Nuestros Valores',
        subtitle: 'Los principios que guían cada decisión y cada línea de código que escribimos',
        values: [
            {
                id: 1,
                icon: 'ShieldCheckIcon',
                title: 'Transparencia Total',
                description:
                    'Comunicación honesta sobre capacidades, plazos y costos. Sin sorpresas, sin letra chica, sin promesas vacías.',
            },
            {
                id: 2,
                icon: 'CurrencyDollarIcon',
                title: 'Precios Justos',
                description:
                    'Tarifas competitivas que reflejan el valor real del trabajo. No cobramos por el nombre, cobramos por la calidad.',
            },
            {
                id: 3,
                icon: 'UserGroupIcon',
                title: 'Relaciones a Largo Plazo',
                description:
                    'Buscamos ser tu socio tecnológico, no solo tu proveedor. El éxito de tu proyecto es nuestro éxito.',
            },
            {
                id: 4,
                icon: 'CodeBracketIcon',
                title: 'Excelencia Técnica',
                description:
                    'Código limpio, arquitecturas sólidas y mejores prácticas. La calidad no es negociable.',
            },
            {
                id: 5,
                icon: 'ClockIcon',
                title: 'Plazos Realistas',
                description:
                    'Estimaciones honestas basadas en experiencia real. Preferimos entregar a tiempo que prometer lo imposible.',
            },
            {
                id: 6,
                icon: 'AcademicCapIcon',
                title: 'Aprendizaje Continuo',
                description:
                    'Inversión constante en capacitación y actualización tecnológica para ofrecer las mejores soluciones.',
            },
        ] as Value[],
    };

    const teamMembers: TeamMemberData[] = [
        {
            id: 1,
            name: 'Martín Rodríguez',
            role: 'Founder & Lead Developer',
            bio: 'Con más de 10 años de experiencia en desarrollo full-stack, Martín fundó AxionCode con la visión de crear una empresa de software diferente. Especializado en arquitecturas escalables y liderazgo técnico, su enfoque combina excelencia técnica con comunicación clara. Antes de AxionCode, lideró equipos de desarrollo en startups tecnológicas de Buenos Aires y trabajó como consultor independiente para empresas de toda Latinoamérica.',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_17b3c9c38-1763299336236.png',
            alt: 'Professional headshot of Hispanic man with short dark hair and beard wearing navy blue shirt, smiling confidently in modern office setting',
            certifications: [
                'AWS Certified Solutions Architect',
                'Google Cloud Professional Developer',
                'Certified Scrum Master (CSM)',
            ],

            linkedin: 'https://linkedin.com/in/martin-rodriguez',
        },
        {
            id: 2,
            name: 'Carolina Méndez',
            role: 'Technical Lead & UX Architect',
            bio: 'Carolina aporta una perspectiva única que combina desarrollo frontend avanzado con diseño de experiencia de usuario. Con 8 años de experiencia, ha liderado la arquitectura técnica de más de 30 proyectos exitosos. Su especialidad es traducir requisitos complejos en interfaces intuitivas y código mantenible. Graduada en Ingeniería en Sistemas, complementó su formación con certificaciones en UX/UI y accesibilidad web.',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1725ab708-1763294479697.png',
            alt: 'Professional portrait of Hispanic woman with long dark hair wearing white blazer, confident expression in bright modern workspace',
            certifications: [
                'React Advanced Certification',
                'UX Design Professional Certificate',
                'Web Accessibility Specialist (WAS)',
            ],

            linkedin: 'https://linkedin.com/in/carolina-mendez',
        },
        {
            id: 3,
            name: 'Diego Fernández',
            role: 'Backend Architect',
            bio: 'Diego es el cerebro detrás de nuestras arquitecturas backend más complejas. Con experiencia en sistemas de alta concurrencia y microservicios, ha diseñado soluciones que manejan millones de transacciones diarias. Su enfoque pragmático equilibra innovación tecnológica con estabilidad operacional. Antes de unirse a AxionCode, trabajó en el sector fintech desarrollando sistemas críticos de procesamiento de pagos.',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_198b2dbd0-1763294059481.png',
            alt: 'Professional photo of Hispanic man with glasses and short black hair wearing gray sweater, focused expression while working on laptop',
            certifications: [
                'Kubernetes Certified Administrator',
                'MongoDB Certified Developer',
                'Docker Certified Associate',
            ],

            linkedin: 'https://linkedin.com/in/diego-fernandez',
        },
        {
            id: 4,
            name: 'Lucía Torres',
            role: 'Full-Stack Developer',
            bio: 'Lucía se destaca por su versatilidad técnica y capacidad para resolver problemas complejos con soluciones elegantes. Con 6 años de experiencia en desarrollo full-stack, domina tanto tecnologías frontend modernas como arquitecturas backend robustas. Su pasión por el código limpio y las mejores prácticas la convierte en mentora natural del equipo. Contribuye activamente a proyectos open source y participa en comunidades de desarrollo local.',
            image: 'https://img.rocket.new/generatedImages/rocket_gen_img_18bb38461-1763294167167.png',
            alt: 'Professional headshot of Hispanic woman with shoulder-length brown hair wearing black turtleneck, warm smile in contemporary office environment',
            certifications: [
                'Full-Stack Web Development Certificate',
                'Node.js Certified Developer',
                'PostgreSQL Professional Certification',
            ],

            linkedin: 'https://linkedin.com/in/lucia-torres',
        },
    ];

    const timelineData = {
        title: 'Nuestro Recorrido',
        milestones: [
            {
                id: 1,
                year: '2020',
                title: 'Fundación de AxionCode',
                description:
                    'Martín Rodríguez funda AxionCode en Buenos Aires con la misión de ofrecer desarrollo de software honesto y transparente. Los primeros tres proyectos establecen la reputación de calidad y comunicación clara.',
                icon: 'RocketLaunchIcon',
            },
            {
                id: 2,
                year: '2021',
                title: 'Expansión del Equipo',
                description:
                    'El equipo crece a 8 desarrolladores. Se implementan metodologías ágiles formales y se establecen procesos de calidad que se mantienen hasta hoy. Primer cliente internacional en Chile.',
                icon: 'UserGroupIcon',
            },
            {
                id: 3,
                year: '2022',
                title: 'Certificaciones y Reconocimiento',
                description:
                    'El equipo obtiene certificaciones clave en AWS, Google Cloud y metodologías ágiles. AxionCode es reconocida como una de las empresas emergentes más prometedoras del sector tecnológico argentino.',
                icon: 'AcademicCapIcon',
            },
            {
                id: 4,
                year: '2023',
                title: 'Consolidación Regional',
                description:
                    'Alcanzamos 15 miembros en el equipo y expandimos operaciones a México y Colombia. Más de 50 proyectos completados exitosamente con tasa de satisfacción del 98%.',
                icon: 'GlobeAmericasIcon',
            },
            {
                id: 5,
                year: '2024',
                title: 'Innovación y Crecimiento',
                description:
                    'Lanzamiento de servicios especializados en arquitecturas cloud-native y modernización de sistemas legacy. Implementación de programa de mentoría interna y contribuciones activas a comunidades open source.',
                icon: 'SparklesIcon',
            },
        ] as Milestone[],
    };

    const certificationsData = {
        title: 'Certificaciones y Acreditaciones',
        subtitle:
            'Nuestro compromiso con la excelencia técnica respaldado por certificaciones reconocidas internacionalmente',
        certifications: [
            {
                id: 1,
                name: 'AWS Certified',
                issuer: 'Amazon Web Services',
                logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_155b69cf7-1764671097554.png',
                alt: 'AWS certification logo with orange and white cloud icon on dark background',
            },
            {
                id: 2,
                name: 'Google Cloud',
                issuer: 'Google',
                logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_18d30fde2-1764642423831.png',
                alt: 'Google Cloud Platform certification badge with multicolor logo on white background',
            },
            {
                id: 3,
                name: 'Scrum Master',
                issuer: 'Scrum Alliance',
                logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1996491fd-1764705299938.png',
                alt: 'Certified Scrum Master badge with blue circular design and checkmark symbol',
            },
            {
                id: 4,
                name: 'React Advanced',
                issuer: 'Meta',
                logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_18a42dd21-1764671097526.png',
                alt: 'React certification logo with blue atomic symbol on gradient background',
            },
            {
                id: 5,
                name: 'Kubernetes Admin',
                issuer: 'CNCF',
                logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_14fc9bc3a-1764671097203.png',
                alt: 'Kubernetes certification badge with blue hexagonal ship wheel logo',
            },
            {
                id: 6,
                name: 'MongoDB Developer',
                issuer: 'MongoDB Inc',
                logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_11c7a6bb5-1765031720605.png',
                alt: 'MongoDB certification emblem with green leaf logo on dark background',
            },
            {
                id: 7,
                name: 'Docker Associate',
                issuer: 'Docker Inc',
                logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_1af9eed97-1764675856157.png',
                alt: 'Docker certification badge with blue whale logo carrying containers',
            },
            {
                id: 8,
                name: 'UX Professional',
                issuer: 'Nielsen Norman Group',
                logo: 'https://img.rocket.new/generatedImages/rocket_gen_img_167a8f0ee-1765925685070.png',
                alt: 'UX certification logo with purple and white design elements representing user experience',
            },
        ] as Certification[],
    };

    const ctaData = {
        title: '¿Listo para trabajar con un equipo que habla claro?',
        description:
            'Conversemos sobre tu proyecto sin compromisos. Te daremos una evaluación honesta de lo que podemos hacer y cuánto tiempo tomará realmente.',
        primaryCTA: {
            text: 'Agendá una llamada',
            href: '/contact',
        },
        secondaryCTA: {
            text: 'Ver nuestro trabajo',
            href: '/portfolio',
        },
    };

    if (!isHydrated) {
        return (
            <div className="min-h-screen bg-background">
                <HeroSection {...heroData} />
                <StorySection {...storyData} />
                <ValuesSection {...valuesData} />
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-16">
                            Nuestro Equipo
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member) => (
                                <TeamMember key={member.id} member={member} />
                            ))}
                        </div>
                    </div>
                </section>
                <TimelineSection {...timelineData} />
                <CertificationsSection {...certificationsData} />
                <CTASection {...ctaData} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <HeroSection {...heroData} />
            <StorySection {...storyData} />
            <ValuesSection {...valuesData} />
            <section className="py-20 lg:py-28 bg-background">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-16">
                        Nuestro Equipo
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <TeamMember key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </section>
            <TimelineSection {...timelineData} />
            <CertificationsSection {...certificationsData} />
            <CTASection {...ctaData} />
        </div>
    );
};

export default AboutInteractive;
