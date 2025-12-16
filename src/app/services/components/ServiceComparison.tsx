'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ComparisonFeature {
    feature: string;
    mvp: boolean | string;
    webapp: boolean | string;
    mobile: boolean | string;
    ecommerce: boolean | string;
}

const comparisonData: ComparisonFeature[] = [
    {
        feature: 'Diseño UI/UX',
        mvp: 'Básico',
        webapp: 'Completo',
        mobile: 'Premium',
        ecommerce: 'Completo',
    },
    {
        feature: 'Responsive Design',
        mvp: true,
        webapp: true,
        mobile: true,
        ecommerce: true,
    },
    {
        feature: 'Backend API',
        mvp: 'REST',
        webapp: 'REST + GraphQL',
        mobile: 'REST + GraphQL',
        ecommerce: 'REST',
    },
    {
        feature: 'Base de Datos',
        mvp: true,
        webapp: true,
        mobile: true,
        ecommerce: true,
    },
    {
        feature: 'Autenticación',
        mvp: 'Básica',
        webapp: 'Avanzada + Roles',
        mobile: 'Biométrica',
        ecommerce: 'Avanzada',
    },
    {
        feature: 'Panel Admin',
        mvp: 'Básico',
        webapp: 'Completo',
        mobile: 'Dashboard',
        ecommerce: 'E-commerce Admin',
    },
    {
        feature: 'Integraciones',
        mvp: '1-2',
        webapp: 'Múltiples',
        mobile: 'Nativas + APIs',
        ecommerce: 'Pagos + Envíos',
    },
    {
        feature: 'Testing',
        mvp: 'Manual',
        webapp: 'Automatizado',
        mobile: 'Automatizado',
        ecommerce: 'Automatizado',
    },
    {
        feature: 'SEO',
        mvp: 'Básico',
        webapp: 'Avanzado',
        mobile: false,
        ecommerce: 'Avanzado',
    },
    {
        feature: 'Analytics',
        mvp: 'Básico',
        webapp: 'Dashboard',
        mobile: 'Dashboard',
        ecommerce: 'E-commerce Analytics',
    },
    {
        feature: 'Notificaciones',
        mvp: 'Email',
        webapp: 'Email + In-app',
        mobile: 'Push + In-app',
        ecommerce: 'Email + SMS',
    },
    {
        feature: 'Modo Offline',
        mvp: false,
        webapp: false,
        mobile: true,
        ecommerce: false,
    },
    {
        feature: 'Soporte Post-Launch',
        mvp: '30 días',
        webapp: '60 días',
        mobile: '90 días',
        ecommerce: '60 días',
    },
];

export default function ServiceComparison() {
    const [activeColumn, setActiveColumn] = useState<string | null>(null);

    const renderCell = (value: boolean | string) => {
        if (typeof value === 'boolean') {
            return value ? (
                <Icon name="CheckIcon" size={24} className="text-success mx-auto" />
            ) : (
                <Icon name="XMarkIcon" size={24} className="text-error mx-auto" />
            );
        }
        return <span className="text-sm font-medium text-text-primary">{value}</span>;
    };

    return (
        <section className="py-24 bg-muted">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">
                        Comparación de Paquetes
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Compará las características de cada paquete para elegir el que mejor se
                        adapte a tus necesidades.
                    </p>
                </div>

                <div className="hidden lg:block overflow-x-auto">
                    <div className="bg-card border border-border rounded-xl overflow-hidden min-w-[800px]">
                        <div className="grid grid-cols-5 bg-primary text-primary-foreground">
                            <div className="p-6 font-bold text-lg">Características</div>
                            <div className="p-6 text-center border-l border-primary-foreground/10">
                                <div className="font-bold text-lg mb-1">MVP Startup</div>
                                <div className="text-sm opacity-80">6-8 semanas</div>
                            </div>
                            <div className="p-6 text-center border-l border-primary-foreground/10">
                                <div className="font-bold text-lg mb-1">Web App</div>
                                <div className="text-sm opacity-80">12-16 semanas</div>
                            </div>
                            <div className="p-6 text-center border-l border-primary-foreground/10">
                                <div className="font-bold text-lg mb-1">Mobile App</div>
                                <div className="text-sm opacity-80">16-20 semanas</div>
                            </div>
                            <div className="p-6 text-center border-l border-primary-foreground/10">
                                <div className="font-bold text-lg mb-1">E-commerce</div>
                                <div className="text-sm opacity-80">14-18 semanas</div>
                            </div>
                        </div>

                        {comparisonData.map((row, index) => (
                            <div
                                key={row.feature}
                                className={`grid grid-cols-5 ${
                                    index % 2 === 0 ? 'bg-background' : 'bg-muted'
                                } hover:bg-accent-subtle transition-colors`}
                            >
                                <div className="p-4 font-medium text-text-primary border-t border-border">
                                    {row.feature}
                                </div>
                                <div className="p-4 text-center border-t border-l border-border">
                                    {renderCell(row.mvp)}
                                </div>
                                <div className="p-4 text-center border-t border-l border-border">
                                    {renderCell(row.webapp)}
                                </div>
                                <div className="p-4 text-center border-t border-l border-border">
                                    {renderCell(row.mobile)}
                                </div>
                                <div className="p-4 text-center border-t border-l border-border">
                                    {renderCell(row.ecommerce)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:hidden space-y-4">
                    {['mvp', 'webapp', 'mobile', 'ecommerce'].map((packageType) => {
                        const packageNames = {
                            mvp: 'MVP Startup',
                            webapp: 'Web App',
                            mobile: 'Mobile App',
                            ecommerce: 'E-commerce',
                        };
                        const packageTimelines = {
                            mvp: '6-8 semanas',
                            webapp: '12-16 semanas',
                            mobile: '16-20 semanas',
                            ecommerce: '14-18 semanas',
                        };

                        return (
                            <div
                                key={packageType}
                                className="bg-card border border-border rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() =>
                                        setActiveColumn(
                                            activeColumn === packageType ? null : packageType
                                        )
                                    }
                                    className="w-full p-6 flex items-center justify-between bg-primary text-primary-foreground"
                                >
                                    <div className="text-left">
                                        <div className="font-bold text-lg">
                                            {packageNames[packageType as keyof typeof packageNames]}
                                        </div>
                                        <div className="text-sm opacity-80">
                                            {
                                                packageTimelines[
                                                    packageType as keyof typeof packageTimelines
                                                ]
                                            }
                                        </div>
                                    </div>
                                    <Icon
                                        name={
                                            activeColumn === packageType
                                                ? 'ChevronUpIcon'
                                                : 'ChevronDownIcon'
                                        }
                                        size={24}
                                    />
                                </button>

                                {activeColumn === packageType && (
                                    <div className="divide-y divide-border">
                                        {comparisonData.map((row) => (
                                            <div
                                                key={row.feature}
                                                className="p-4 flex items-center justify-between"
                                            >
                                                <span className="font-medium text-text-primary">
                                                    {row.feature}
                                                </span>
                                                <div className="flex items-center">
                                                    {renderCell(
                                                        row[packageType as keyof ComparisonFeature]
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-text-secondary mb-6">
                        ¿Necesitás ayuda para elegir el paquete correcto?
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center h-14 px-8 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Hablá con un experto
                        <Icon name="ChatBubbleLeftRightIcon" size={20} className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}
