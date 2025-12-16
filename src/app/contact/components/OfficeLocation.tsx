import React from 'react';
import Icon from '@/components/ui/AppIcon';

const OfficeLocation: React.FC = () => {
    const officeAddress = {
        street: 'Av. Corrientes 1234, Piso 5',
        city: 'Buenos Aires',
        country: 'Argentina',
        postalCode: 'C1043AAZ',
        lat: '-34.603722',
        lng: '-58.381592',
    };

    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                            Nuestra oficina
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Visitanos en el corazón de Buenos Aires
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-card p-6 rounded-xl border border-border">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                                        <Icon name="MapPinIcon" size={24} className="text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text-primary mb-2">
                                            Dirección
                                        </h3>
                                        <p className="text-text-secondary">
                                            {officeAddress.street}
                                        </p>
                                        <p className="text-text-secondary">
                                            {officeAddress.city}, {officeAddress.country}
                                        </p>
                                        <p className="text-text-secondary">
                                            {officeAddress.postalCode}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                                        <Icon
                                            name="BuildingOfficeIcon"
                                            size={24}
                                            className="text-accent"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text-primary mb-2">
                                            Cómo llegar
                                        </h3>
                                        <ul className="text-text-secondary space-y-1">
                                            <li>• Subte: Línea B (Estación Carlos Pellegrini)</li>
                                            <li>• Colectivos: 5, 6, 7, 23, 26, 50, 60, 99</li>
                                            <li>• Estacionamiento disponible en la zona</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                                        <Icon
                                            name="InformationCircleIcon"
                                            size={24}
                                            className="text-accent"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-text-primary mb-2">
                                            Información adicional
                                        </h3>
                                        <p className="text-text-secondary">
                                            Edificio con acceso para personas con movilidad
                                            reducida. Recepción en planta baja. Se requiere registro
                                            previo para visitas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-accent-subtle p-6 rounded-xl border border-accent/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <Icon
                                        name="ShieldCheckIcon"
                                        size={24}
                                        className="text-accent"
                                    />
                                    <h3 className="font-semibold text-text-primary">
                                        Empresa registrada
                                    </h3>
                                </div>
                                <p className="text-text-secondary text-sm">
                                    AxionCode S.R.L. - CUIT: 30-12345678-9\nInscripta en AFIP y
                                    habilitada para operar en todo el territorio argentino
                                </p>
                            </div>
                        </div>

                        <div className="h-[500px] lg:h-full rounded-xl overflow-hidden border border-border">
                            <iframe
                                width="100%"
                                height="100%"
                                loading="lazy"
                                title="Oficina AxionCode en Buenos Aires"
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps?q=${officeAddress.lat},${officeAddress.lng}&z=15&output=embed`}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeLocation;
