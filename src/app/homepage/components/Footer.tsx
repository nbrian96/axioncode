'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
    language: 'es' | 'en';
}

const Footer = ({ language }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    const content = {
        es: {
            tagline: 'Tu socio técnico, no solo tu proveedor',
            company: {
                title: 'Empresa',
                links: [
                    { label: 'Nosotros', href: '/about' },
                    { label: 'Servicios', href: '/services' },
                    { label: 'Portfolio', href: '/portfolio' },
                    { label: 'Contacto', href: '/contact' },
                ],
            },
            legal: {
                title: 'Legal',
                links: [
                    { label: 'Términos y condiciones', href: '/legal' },
                    { label: 'Política de privacidad', href: '/legal' },
                    { label: 'Accesibilidad', href: '/legal' },
                ],
            },
            contact: {
                title: 'Contacto',
                email: 'hola@axioncode.com',
                phone: '+54 9 11 1234-5678',
                address: 'Buenos Aires, Argentina',
            },
            social: {
                title: 'Síguenos',
            },
            copyright: `© ${currentYear} AxionCode. Todos los derechos reservados.`,
        },
        en: {
            tagline: 'Your technical partner, not just your vendor',
            company: {
                title: 'Company',
                links: [
                    { label: 'About', href: '/about' },
                    { label: 'Services', href: '/services' },
                    { label: 'Portfolio', href: '/portfolio' },
                    { label: 'Contact', href: '/contact' },
                ],
            },
            legal: {
                title: 'Legal',
                links: [
                    { label: 'Terms and conditions', href: '/legal' },
                    { label: 'Privacy policy', href: '/legal' },
                    { label: 'Accessibility', href: '/legal' },
                ],
            },
            contact: {
                title: 'Contact',
                email: 'hello@axioncode.com',
                phone: '+54 9 11 1234-5678',
                address: 'Buenos Aires, Argentina',
            },
            social: {
                title: 'Follow us',
            },
            copyright: `© ${currentYear} AxionCode. All rights reserved.`,
        },
    };

    const t = content[language];

    const socialLinks = [
        { icon: 'EnvelopeIcon', href: 'mailto:hola@axioncode.com', label: 'Email' },
        { icon: 'PhoneIcon', href: 'tel:+5491112345678', label: 'Phone' },
    ];

    return (
        <footer className="bg-foreground text-background border-t border-background/10">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <Link href="/homepage" className="flex items-center gap-3 mb-4">
                            <div className="relative w-10 h-10">
                                <svg
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full"
                                >
                                    <rect width="40" height="40" rx="8" fill="#0066ff" />
                                    <path d="M12 28L20 12L28 28H24L20 20L16 28H12Z" fill="white" />
                                    <path d="M17 28L20 22L23 28H17Z" fill="#0052cc" />
                                </svg>
                            </div>
                            <span className="text-xl font-semibold">AxionCode</span>
                        </Link>
                        <p className="text-background/70 text-sm leading-relaxed">{t.tagline}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-background mb-4">{t.company.title}</h3>
                        <ul className="space-y-3">
                            {t.company.links.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-background/70 text-sm transition-smooth hover:text-accent hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-background mb-4">{t.legal.title}</h3>
                        <ul className="space-y-3">
                            {t.legal.links.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-background/70 text-sm transition-smooth hover:text-accent hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-background mb-4">{t.contact.title}</h3>
                        <ul className="space-y-3 text-sm text-background/70">
                            <li className="flex items-start gap-2">
                                <Icon
                                    name="EnvelopeIcon"
                                    size={16}
                                    className="mt-0.5 flex-shrink-0"
                                />
                                <a
                                    href={`mailto:${t.contact.email}`}
                                    className="transition-smooth hover:text-accent"
                                >
                                    {t.contact.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon name="PhoneIcon" size={16} className="mt-0.5 flex-shrink-0" />
                                <a
                                    href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                                    className="transition-smooth hover:text-accent"
                                >
                                    {t.contact.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon
                                    name="MapPinIcon"
                                    size={16}
                                    className="mt-0.5 flex-shrink-0"
                                />
                                <span>{t.contact.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-background/10 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-background/70">{t.copyright}</p>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-background/70">{t.social.title}</span>
                            <div className="flex items-center gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-accent hover:scale-110"
                                        aria-label={social.label}
                                    >
                                        <Icon name={social.icon as any} size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
