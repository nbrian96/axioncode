'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationItems = [
        { label: 'Inicio', href: '/homepage' },
        { label: 'Servicios', href: '/services' },
        { label: 'Portafolio', href: '/portfolio' },
        { label: 'Nosotros', href: '/about' },
        { label: 'Contacto', href: '/contact' },
    ];

    const moreItems = [{ label: 'Legal', href: '/legal' }];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <Link
                        href="/homepage"
                        className="flex items-center gap-3 transition-smooth hover:opacity-80"
                    >
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
                        <span className="text-xl font-semibold text-primary">AxionCode</span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8">
                        {navigationItems?.map((item) => (
                            <Link
                                key={item?.href}
                                href={item?.href}
                                className="text-text-primary font-medium transition-smooth hover:text-accent relative group"
                            >
                                {item?.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}

                        <div className="relative group">
                            <button className="flex items-center gap-1 text-text-primary font-medium transition-smooth hover:text-accent">
                                Más
                                <Icon
                                    name="ChevronDownIcon"
                                    size={16}
                                    className="transition-transform group-hover:rotate-180"
                                />
                            </button>
                            <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                {moreItems?.map((item) => (
                                    <Link
                                        key={item?.href}
                                        href={item?.href}
                                        className="block px-4 py-3 text-text-primary hover:bg-muted transition-smooth first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        {item?.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </nav>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center h-11 px-6 bg-accent text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-md"
                        >
                            Agendá una llamada
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-primary transition-smooth hover:text-accent"
                        aria-label="Toggle menu"
                    >
                        <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-background border-t border-border animate-slide-in">
                    <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navigationItems?.map((item) => (
                            <Link
                                key={item?.href}
                                href={item?.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-text-primary font-medium py-2 transition-smooth hover:text-accent hover:translate-x-1"
                            >
                                {item?.label}
                            </Link>
                        ))}
                        {moreItems?.map((item) => (
                            <Link
                                key={item?.href}
                                href={item?.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-text-secondary font-medium py-2 transition-smooth hover:text-accent hover:translate-x-1"
                            >
                                {item?.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="inline-flex items-center justify-center h-14 px-6 bg-accent text-accent-foreground font-semibold rounded-lg transition-smooth hover:bg-accent-hover mt-4"
                        >
                            Agendá una llamada
                        </Link>
                    </nav>
                </div>
            )}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border safe-area-inset-bottom">
                <div className="flex items-center justify-center h-16 px-6">
                    <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center h-12 px-6 bg-accent text-accent-foreground font-semibold rounded-lg transition-smooth hover:bg-accent-hover"
                    >
                        Agendá una llamada
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
