'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface WhatsAppContactProps {
    onClose: () => void;
}

const WhatsAppContact: React.FC<WhatsAppContactProps> = ({ onClose }) => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [customMessage, setCustomMessage] = useState('');

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const quickTopics = [
        {
            id: 'pricing',
            label: 'Consulta de precios',
            message: 'Hola! Me gustaría conocer más sobre sus precios y paquetes de servicios.',
        },
        {
            id: 'mvp',
            label: 'Desarrollo de MVP',
            message: 'Hola! Estoy interesado en desarrollar un MVP para mi startup.',
        },
        {
            id: 'consulting',
            label: 'Consultoría técnica',
            message: 'Hola! Necesito asesoramiento técnico para mi proyecto.',
        },
        {
            id: 'timeline',
            label: 'Tiempos de entrega',
            message: 'Hola! Quisiera saber los tiempos estimados para un proyecto.',
        },
        { id: 'custom', label: 'Otro tema', message: '' },
    ];

    const handleSendWhatsApp = () => {
        const phoneNumber = '5491112345678';
        let message = '';

        if (selectedTopic === 'custom') {
            message = customMessage;
        } else {
            const topic = quickTopics.find((t) => t.id === selectedTopic);
            message = topic?.message || '';
        }

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        if (isHydrated && typeof window !== 'undefined') {
            window.open(whatsappUrl, '_blank');
        }
        onClose();
    };

    if (!isHydrated) {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <div className="bg-card rounded-2xl max-w-lg w-full p-8">
                    <div className="animate-pulse space-y-4">
                        <div className="h-8 bg-muted rounded w-3/4" />
                        <div className="h-4 bg-muted rounded w-1/2" />
                        <div className="space-y-3 mt-8">
                            <div className="h-12 bg-muted rounded" />
                            <div className="h-12 bg-muted rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-2xl max-w-lg w-full">
                <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                                <Icon
                                    name="ChatBubbleLeftRightIcon"
                                    size={24}
                                    className="text-white"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-text-primary">WhatsApp</h2>
                                <p className="text-text-secondary text-sm">Respuesta inmediata</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-muted rounded-lg transition-smooth"
                            aria-label="Cerrar"
                        >
                            <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-3">
                                Seleccioná el tema de tu consulta
                            </label>
                            <div className="space-y-2">
                                {quickTopics.map((topic) => (
                                    <button
                                        key={topic.id}
                                        type="button"
                                        onClick={() => setSelectedTopic(topic.id)}
                                        className={`w-full p-4 rounded-lg border text-left transition-all duration-300 ${
                                            selectedTopic === topic.id
                                                ? 'border-[#25D366] bg-[#25D366]/10'
                                                : 'border-border hover:border-[#25D366]'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium text-text-primary">
                                                {topic.label}
                                            </span>
                                            {selectedTopic === topic.id && (
                                                <Icon
                                                    name="CheckCircleIcon"
                                                    size={20}
                                                    className="text-[#25D366]"
                                                />
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {selectedTopic === 'custom' && (
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">
                                    Escribí tu mensaje
                                </label>
                                <textarea
                                    value={customMessage}
                                    onChange={(e) => setCustomMessage(e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-border bg-input focus:outline-none focus:ring-2 focus:ring-[#25D366] transition-smooth resize-none"
                                    placeholder="Hola! Quisiera consultar sobre..."
                                />
                            </div>
                        )}

                        <button
                            onClick={handleSendWhatsApp}
                            disabled={
                                !selectedTopic ||
                                (selectedTopic === 'custom' && !customMessage.trim())
                            }
                            className="w-full py-4 px-6 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-[#20BA5A] transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            <Icon name="ChatBubbleLeftRightIcon" size={20} />
                            Abrir WhatsApp
                        </button>

                        <div className="text-center text-sm text-text-secondary">
                            Te responderemos en menos de 2 horas en horario laboral
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatsAppContact;
