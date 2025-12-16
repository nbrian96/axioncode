'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimeSlot {
    id: string;
    time: string;
    available: boolean;
}

interface ConsultationBookingProps {
    onClose: () => void;
    onSubmit: (data: BookingFormData) => void;
}

interface BookingFormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    consultationType: string;
    date: string;
    time: string;
    message: string;
}

const ConsultationBooking: React.FC<ConsultationBookingProps> = ({ onClose, onSubmit }) => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [formData, setFormData] = useState<BookingFormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        consultationType: '',
        date: '',
        time: '',
        message: '',
    });
    const [errors, setErrors] = useState<Partial<BookingFormData>>({});

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const consultationTypes = [
        { id: 'technical', label: 'Consulta Técnica', description: 'Para decisores técnicos' },
        { id: 'business', label: 'Consulta de Negocios', description: 'Para dueños de empresas' },
        { id: 'startup', label: 'Consulta Startup', description: 'Para fundadores de startups' },
        { id: 'referral', label: 'Referido', description: 'Vengo por recomendación' },
    ];

    const availableDates = [
        { id: '1', date: '18/12/2025', day: 'Miércoles' },
        { id: '2', date: '19/12/2025', day: 'Jueves' },
        { id: '3', date: '20/12/2025', day: 'Viernes' },
        { id: '4', date: '23/12/2025', day: 'Lunes' },
        { id: '5', date: '26/12/2025', day: 'Jueves' },
    ];

    const timeSlots: TimeSlot[] = [
        { id: '1', time: '09:00', available: true },
        { id: '2', time: '10:00', available: true },
        { id: '3', time: '11:00', available: false },
        { id: '4', time: '14:00', available: true },
        { id: '5', time: '15:00', available: true },
        { id: '6', time: '16:00', available: true },
        { id: '7', time: '17:00', available: false },
    ];

    const validateStep = (step: number): boolean => {
        const newErrors: Partial<BookingFormData> = {};

        if (step === 1) {
            if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
            if (!formData.email.trim()) {
                newErrors.email = 'El email es requerido';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = 'Email inválido';
            }
            if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
            if (!formData.consultationType)
                newErrors.consultationType = 'Selecciona un tipo de consulta';
        }

        if (step === 2) {
            if (!selectedDate) newErrors.date = 'Selecciona una fecha';
            if (!selectedTime) newErrors.time = 'Selecciona un horario';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            if (currentStep === 2) {
                setFormData({ ...formData, date: selectedDate, time: selectedTime });
            }
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
        setErrors({});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateStep(3)) {
            onSubmit({ ...formData, date: selectedDate, time: selectedTime });
        }
    };

    const handleInputChange = (field: keyof BookingFormData, value: string) => {
        setFormData({ ...formData, [field]: value });
        if (errors[field]) {
            setErrors({ ...errors, [field]: undefined });
        }
    };

    if (!isHydrated) {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-card rounded-2xl max-w-2xl w-full p-8">
                    <div className="animate-pulse space-y-4">
                        <div className="h-8 bg-muted rounded w-3/4" />
                        <div className="h-4 bg-muted rounded w-1/2" />
                        <div className="space-y-3 mt-8">
                            <div className="h-12 bg-muted rounded" />
                            <div className="h-12 bg-muted rounded" />
                            <div className="h-12 bg-muted rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-card rounded-2xl max-w-2xl w-full my-8">
                <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary">
                                Agendá tu consulta
                            </h2>
                            <p className="text-text-secondary mt-1">Paso {currentStep} de 3</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-muted rounded-lg transition-smooth"
                            aria-label="Cerrar"
                        >
                            <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 mb-8">
                        {[1, 2, 3].map((step) => (
                            <div
                                key={step}
                                className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                                    step <= currentStep ? 'bg-accent' : 'bg-muted'
                                }`}
                            />
                        ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-text-primary mb-2">
                                        Nombre completo *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className={`w-full px-4 py-3 rounded-lg border ${
                                            errors.name ? 'border-error' : 'border-border'
                                        } bg-input focus:outline-none focus:ring-2 focus:ring-accent transition-smooth`}
                                        placeholder="Juan Pérez"
                                    />
                                    {errors.name && (
                                        <p className="text-error text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-primary mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className={`w-full px-4 py-3 rounded-lg border ${
                                            errors.email ? 'border-error' : 'border-border'
                                        } bg-input focus:outline-none focus:ring-2 focus:ring-accent transition-smooth`}
                                        placeholder="juan@empresa.com"
                                    />
                                    {errors.email && (
                                        <p className="text-error text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-primary mb-2">
                                        Teléfono *
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className={`w-full px-4 py-3 rounded-lg border ${
                                            errors.phone ? 'border-error' : 'border-border'
                                        } bg-input focus:outline-none focus:ring-2 focus:ring-accent transition-smooth`}
                                        placeholder="+54 9 11 1234-5678"
                                    />
                                    {errors.phone && (
                                        <p className="text-error text-sm mt-1">{errors.phone}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-primary mb-2">
                                        Empresa (opcional)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.company}
                                        onChange={(e) =>
                                            handleInputChange('company', e.target.value)
                                        }
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                                        placeholder="Mi Empresa S.A."
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-primary mb-3">
                                        Tipo de consulta *
                                    </label>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {consultationTypes.map((type) => (
                                            <button
                                                key={type.id}
                                                type="button"
                                                onClick={() =>
                                                    handleInputChange('consultationType', type.id)
                                                }
                                                className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                                                    formData.consultationType === type.id
                                                        ? 'border-accent bg-accent-subtle'
                                                        : 'border-border hover:border-accent'
                                                }`}
                                            >
                                                <div className="font-semibold text-text-primary mb-1">
                                                    {type.label}
                                                </div>
                                                <div className="text-sm text-text-secondary">
                                                    {type.description}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    {errors.consultationType && (
                                        <p className="text-error text-sm mt-2">
                                            {errors.consultationType}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-text-primary mb-3">
                                        Seleccioná una fecha *
                                    </label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {availableDates.map((dateOption) => (
                                            <button
                                                key={dateOption.id}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedDate(dateOption.date);
                                                    if (errors.date)
                                                        setErrors({ ...errors, date: undefined });
                                                }}
                                                className={`p-4 rounded-lg border text-center transition-all duration-300 ${
                                                    selectedDate === dateOption.date
                                                        ? 'border-accent bg-accent-subtle'
                                                        : 'border-border hover:border-accent'
                                                }`}
                                            >
                                                <div className="text-sm text-text-secondary mb-1">
                                                    {dateOption.day}
                                                </div>
                                                <div className="font-semibold text-text-primary">
                                                    {dateOption.date}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    {errors.date && (
                                        <p className="text-error text-sm mt-2">{errors.date}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-primary mb-3">
                                        Seleccioná un horario *
                                    </label>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                        {timeSlots.map((slot) => (
                                            <button
                                                key={slot.id}
                                                type="button"
                                                onClick={() => {
                                                    if (slot.available) {
                                                        setSelectedTime(slot.time);
                                                        if (errors.time)
                                                            setErrors({
                                                                ...errors,
                                                                time: undefined,
                                                            });
                                                    }
                                                }}
                                                disabled={!slot.available}
                                                className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                                                    !slot.available
                                                        ? 'border-border bg-muted text-text-secondary cursor-not-allowed opacity-50'
                                                        : selectedTime === slot.time
                                                          ? 'border-accent bg-accent-subtle text-accent font-semibold'
                                                          : 'border-border hover:border-accent text-text-primary'
                                                }`}
                                            >
                                                {slot.time}
                                            </button>
                                        ))}
                                    </div>
                                    {errors.time && (
                                        <p className="text-error text-sm mt-2">{errors.time}</p>
                                    )}
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <div className="bg-muted rounded-lg p-6 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-text-secondary">Nombre:</span>
                                        <span className="font-semibold text-text-primary">
                                            {formData.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-text-secondary">Email:</span>
                                        <span className="font-semibold text-text-primary">
                                            {formData.email}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-text-secondary">Teléfono:</span>
                                        <span className="font-semibold text-text-primary">
                                            {formData.phone}
                                        </span>
                                    </div>
                                    {formData.company && (
                                        <div className="flex items-center justify-between">
                                            <span className="text-text-secondary">Empresa:</span>
                                            <span className="font-semibold text-text-primary">
                                                {formData.company}
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <span className="text-text-secondary">Tipo:</span>
                                        <span className="font-semibold text-text-primary">
                                            {
                                                consultationTypes.find(
                                                    (t) => t.id === formData.consultationType
                                                )?.label
                                            }
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between pt-3 border-t border-border">
                                        <span className="text-text-secondary">Fecha y hora:</span>
                                        <span className="font-semibold text-accent">
                                            {selectedDate} a las {selectedTime}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-primary mb-2">
                                        Mensaje adicional (opcional)
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) =>
                                            handleInputChange('message', e.target.value)
                                        }
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-accent transition-smooth resize-none"
                                        placeholder="Contanos brevemente sobre tu proyecto o consulta..."
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex items-center gap-3 mt-8">
                            {currentStep > 1 && (
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="flex-1 py-3 px-6 rounded-lg border border-border text-text-primary font-semibold hover:bg-muted transition-smooth"
                                >
                                    Atrás
                                </button>
                            )}
                            {currentStep < 3 ? (
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="flex-1 py-3 px-6 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent-hover transition-smooth"
                                >
                                    Siguiente
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="flex-1 py-3 px-6 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent-hover transition-smooth"
                                >
                                    Confirmar consulta
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConsultationBooking;
