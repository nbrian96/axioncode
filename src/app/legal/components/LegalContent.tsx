'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import LegalSection from './LegalSection';

interface LegalDocument {
    id: string;
    title: string;
    icon: string;
    lastUpdated: string;
    sections: {
        title: string;
        content: string[];
    }[];
}

const LegalContent = () => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [activeDocument, setActiveDocument] = useState('privacy');
    const [language, setLanguage] = useState('es');

    useEffect(() => {
        setIsHydrated(true);
        const savedLanguage = localStorage.getItem('language') || 'es';
        setLanguage(savedLanguage);
    }, []);

    const legalDocuments: Record<string, LegalDocument> = {
        privacy: {
            id: 'privacy',
            title: language === 'es' ? 'Política de Privacidad' : 'Privacy Policy',
            icon: 'ShieldCheckIcon',
            lastUpdated: '15 de diciembre de 2025',
            sections: [
                {
                    title: language === 'es' ? 'Introducción' : 'Introduction',
                    content: [
                        language === 'es'
                            ? 'En AxionCode, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica cómo recopilamos, usamos y protegemos tu información cuando visitas nuestro sitio web o utilizas nuestros servicios.'
                            : 'At AxionCode, we value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your information when you visit our website or use our services.',
                        language === 'es'
                            ? 'Operamos bajo las regulaciones argentinas de protección de datos y cumplimos con los estándares internacionales de privacidad.'
                            : 'We operate under Argentine data protection regulations and comply with international privacy standards.',
                    ],
                },
                {
                    title:
                        language === 'es'
                            ? 'Información que Recopilamos'
                            : 'Information We Collect',
                    content: [
                        language === 'es'
                            ? 'Datos de contacto: nombre, correo electrónico, número de teléfono y empresa cuando completas formularios de contacto o solicitas consultas.'
                            : 'Contact information: name, email, phone number, and company when you complete contact forms or request consultations.',
                        language === 'es'
                            ? 'Datos de navegación: dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia mediante Google Analytics 4.'
                            : 'Browsing data: IP address, browser type, pages visited, and time spent via Google Analytics 4.',
                        language === 'es'
                            ? 'Datos de comunicación: contenido de mensajes enviados a través de WhatsApp, correo electrónico o formularios de contacto.'
                            : 'Communication data: content of messages sent via WhatsApp, email, or contact forms.',
                    ],
                },
                {
                    title:
                        language === 'es'
                            ? 'Cómo Usamos tu Información'
                            : 'How We Use Your Information',
                    content: [
                        language === 'es'
                            ? 'Responder a tus consultas y proporcionar información sobre nuestros servicios de desarrollo de software.'
                            : 'Respond to your inquiries and provide information about our software development services.',
                        language === 'es'
                            ? 'Mejorar la experiencia del usuario en nuestro sitio web mediante análisis de comportamiento.'
                            : 'Improve user experience on our website through behavior analysis.',
                        language === 'es'
                            ? 'Enviar comunicaciones relacionadas con proyectos activos o propuestas solicitadas.'
                            : 'Send communications related to active projects or requested proposals.',
                        language === 'es'
                            ? 'Cumplir con obligaciones legales y fiscales como empresa registrada en Argentina.'
                            : 'Comply with legal and tax obligations as a registered company in Argentina.',
                    ],
                },
                {
                    title: language === 'es' ? 'Protección de Datos' : 'Data Protection',
                    content: [
                        language === 'es'
                            ? 'Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra acceso no autorizado, pérdida o alteración.'
                            : 'We implement technical and organizational security measures to protect your personal data against unauthorized access, loss, or alteration.',
                        language === 'es'
                            ? 'Utilizamos cifrado HTTPS para todas las comunicaciones del sitio web.'
                            : 'We use HTTPS encryption for all website communications.',
                        language === 'es'
                            ? 'Aplicamos políticas de seguridad de contenido (CSP) y sanitización de formularios para prevenir ataques.'
                            : 'We apply content security policies (CSP) and form sanitization to prevent attacks.',
                        language === 'es'
                            ? 'Limitamos el acceso a datos personales solo al personal autorizado que necesita esta información para realizar sus funciones.'
                            : 'We limit access to personal data only to authorized personnel who need this information to perform their duties.',
                    ],
                },
                {
                    title:
                        language === 'es'
                            ? 'Cookies y Tecnologías de Seguimiento'
                            : 'Cookies and Tracking Technologies',
                    content: [
                        language === 'es'
                            ? 'Utilizamos Google Analytics 4 para analizar el tráfico del sitio web y mejorar nuestros servicios. Estos datos son anónimos y agregados.'
                            : 'We use Google Analytics 4 to analyze website traffic and improve our services. This data is anonymous and aggregated.',
                        language === 'es'
                            ? 'Cookies esenciales: necesarias para el funcionamiento básico del sitio (preferencias de idioma, sesión).'
                            : 'Essential cookies: necessary for basic site functionality (language preferences, session).',
                        language === 'es'
                            ? 'Cookies analíticas: nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.'
                            : 'Analytics cookies: help us understand how visitors interact with our site.',
                        language === 'es'
                            ? 'Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.'
                            : 'You can configure your browser to reject cookies, although this may affect site functionality.',
                    ],
                },
                {
                    title: language === 'es' ? 'Tus Derechos' : 'Your Rights',
                    content: [
                        language === 'es'
                            ? 'Derecho de acceso: solicitar una copia de los datos personales que tenemos sobre ti.'
                            : 'Right of access: request a copy of the personal data we hold about you.',
                        language === 'es'
                            ? 'Derecho de rectificación: corregir datos inexactos o incompletos.'
                            : 'Right of rectification: correct inaccurate or incomplete data.',
                        language === 'es'
                            ? 'Derecho de supresión: solicitar la eliminación de tus datos personales.'
                            : 'Right of erasure: request deletion of your personal data.',
                        language === 'es'
                            ? 'Derecho de oposición: oponerte al procesamiento de tus datos para fines específicos.'
                            : 'Right to object: object to the processing of your data for specific purposes.',
                        language === 'es'
                            ? 'Para ejercer estos derechos, contáctanos en contacto@axioncode.com'
                            : 'To exercise these rights, contact us at contacto@axioncode.com',
                    ],
                },
                {
                    title: language === 'es' ? 'Compartir Información' : 'Information Sharing',
                    content: [
                        language === 'es'
                            ? 'No vendemos, alquilamos ni compartimos tus datos personales con terceros para fines de marketing.'
                            : 'We do not sell, rent, or share your personal data with third parties for marketing purposes.',
                        language === 'es'
                            ? 'Podemos compartir información con proveedores de servicios que nos ayudan a operar nuestro sitio web (hosting, análisis).'
                            : 'We may share information with service providers who help us operate our website (hosting, analytics).',
                        language === 'es'
                            ? 'Podemos divulgar información si es requerido por ley o para proteger nuestros derechos legales.'
                            : 'We may disclose information if required by law or to protect our legal rights.',
                    ],
                },
                {
                    title: language === 'es' ? 'Retención de Datos' : 'Data Retention',
                    content: [
                        language === 'es'
                            ? 'Conservamos tus datos personales solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política.'
                            : 'We retain your personal data only for as long as necessary to fulfill the purposes described in this policy.',
                        language === 'es'
                            ? 'Datos de contacto: se conservan mientras exista una relación comercial activa o potencial.'
                            : 'Contact data: retained while there is an active or potential business relationship.',
                        language === 'es'
                            ? 'Datos de proyectos: se conservan según los requisitos legales y contractuales aplicables.'
                            : 'Project data: retained according to applicable legal and contractual requirements.',
                    ],
                },
                {
                    title: language === 'es' ? 'Contacto' : 'Contact',
                    content: [
                        language === 'es'
                            ? 'Si tienes preguntas sobre esta política de privacidad o cómo manejamos tus datos, contáctanos:'
                            : 'If you have questions about this privacy policy or how we handle your data, contact us:',
                        'Email: contacto@axioncode.com',
                        'WhatsApp: +54 9 11 1234-5678',
                        language === 'es'
                            ? 'Dirección: Buenos Aires, Argentina'
                            : 'Address: Buenos Aires, Argentina',
                    ],
                },
            ],
        },
        terms: {
            id: 'terms',
            title: language === 'es' ? 'Términos de Servicio' : 'Terms of Service',
            icon: 'DocumentTextIcon',
            lastUpdated: '15 de diciembre de 2025',
            sections: [
                {
                    title: language === 'es' ? 'Aceptación de Términos' : 'Acceptance of Terms',
                    content: [
                        language === 'es'
                            ? 'Al acceder y utilizar el sitio web de AxionCode, aceptas estar sujeto a estos términos de servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestro sitio web.'
                            : 'By accessing and using the AxionCode website, you agree to be bound by these terms of service. If you disagree with any part of these terms, you should not use our website.',
                        language === 'es'
                            ? 'Estos términos se aplican a todos los visitantes, usuarios y otras personas que accedan o utilicen el servicio.'
                            : 'These terms apply to all visitors, users, and others who access or use the service.',
                    ],
                },
                {
                    title: language === 'es' ? 'Descripción del Servicio' : 'Service Description',
                    content: [
                        language === 'es'
                            ? 'AxionCode proporciona servicios de desarrollo de software, consultoría técnica y soluciones tecnológicas para empresas en Argentina y América Latina.'
                            : 'AxionCode provides software development services, technical consulting, and technology solutions for businesses in Argentina and Latin America.',
                        language === 'es'
                            ? 'Nuestros servicios incluyen desarrollo web, aplicaciones móviles, sistemas empresariales y consultoría de arquitectura de software.'
                            : 'Our services include web development, mobile applications, enterprise systems, and software architecture consulting.',
                        language === 'es'
                            ? 'Los detalles específicos de cada proyecto se establecen en contratos individuales que complementan estos términos generales.'
                            : 'Specific details of each project are established in individual contracts that complement these general terms.',
                    ],
                },
                {
                    title: language === 'es' ? 'Uso del Sitio Web' : 'Website Use',
                    content: [
                        language === 'es'
                            ? 'Puedes utilizar nuestro sitio web para informarte sobre nuestros servicios, contactarnos y solicitar consultas.'
                            : 'You may use our website to learn about our services, contact us, and request consultations.',
                        language === 'es'
                            ? 'No debes utilizar el sitio para fines ilegales o no autorizados.'
                            : 'You must not use the site for illegal or unauthorized purposes.',
                        language === 'es'
                            ? 'No debes intentar acceder a áreas restringidas del sitio o interferir con su funcionamiento.'
                            : 'You must not attempt to access restricted areas of the site or interfere with its operation.',
                        language === 'es'
                            ? 'Nos reservamos el derecho de suspender o terminar tu acceso si violas estos términos.'
                            : 'We reserve the right to suspend or terminate your access if you violate these terms.',
                    ],
                },
                {
                    title: language === 'es' ? 'Propiedad Intelectual' : 'Intellectual Property',
                    content: [
                        language === 'es'
                            ? 'Todo el contenido del sitio web, incluyendo texto, gráficos, logos, imágenes y software, es propiedad de AxionCode o sus licenciantes.'
                            : 'All website content, including text, graphics, logos, images, and software, is the property of AxionCode or its licensors.',
                        language === 'es'
                            ? 'No puedes reproducir, distribuir o crear trabajos derivados sin nuestro permiso expreso por escrito.'
                            : 'You may not reproduce, distribute, or create derivative works without our express written permission.',
                        language === 'es'
                            ? 'El código desarrollado para clientes se rige por los acuerdos contractuales específicos de cada proyecto.'
                            : 'Code developed for clients is governed by the specific contractual agreements of each project.',
                    ],
                },
                {
                    title: language === 'es' ? 'Servicios de Desarrollo' : 'Development Services',
                    content: [
                        language === 'es'
                            ? 'Los proyectos de desarrollo se rigen por contratos específicos que detallan alcance, plazos y costos.'
                            : 'Development projects are governed by specific contracts detailing scope, timelines, and costs.',
                        language === 'es'
                            ? 'Proporcionamos estimaciones honestas y realistas basadas en nuestra experiencia y las especificaciones del proyecto.'
                            : 'We provide honest and realistic estimates based on our experience and project specifications.',
                        language === 'es'
                            ? 'Los cambios en el alcance del proyecto pueden afectar los plazos y costos acordados.'
                            : 'Changes in project scope may affect agreed timelines and costs.',
                        language === 'es'
                            ? 'Mantenemos comunicación transparente durante todo el proceso de desarrollo.'
                            : 'We maintain transparent communication throughout the development process.',
                    ],
                },
                {
                    title: language === 'es' ? 'Precios y Pagos' : 'Pricing and Payments',
                    content: [
                        language === 'es'
                            ? 'Los precios se establecen en pesos argentinos (ARS) con referencia en dólares estadounidenses (USD) para clientes internacionales.'
                            : 'Prices are set in Argentine pesos (ARS) with reference in US dollars (USD) for international clients.',
                        language === 'es'
                            ? 'Los términos de pago se especifican en cada contrato individual.'
                            : 'Payment terms are specified in each individual contract.',
                        language === 'es'
                            ? 'Nos reservamos el derecho de ajustar precios con notificación previa para proyectos futuros.'
                            : 'We reserve the right to adjust prices with prior notice for future projects.',
                        language === 'es'
                            ? 'Los pagos atrasados pueden resultar en la suspensión de servicios según lo establecido en el contrato.'
                            : 'Late payments may result in service suspension as established in the contract.',
                    ],
                },
                {
                    title:
                        language === 'es'
                            ? 'Garantías y Limitaciones'
                            : 'Warranties and Limitations',
                    content: [
                        language === 'es'
                            ? 'Nos esforzamos por entregar software de alta calidad, pero no garantizamos que esté libre de errores.'
                            : 'We strive to deliver high-quality software, but do not guarantee it will be error-free.',
                        language === 'es'
                            ? 'Proporcionamos soporte post-lanzamiento según lo acordado en cada contrato.'
                            : 'We provide post-launch support as agreed in each contract.',
                        language === 'es'
                            ? 'No somos responsables de daños indirectos o consecuentes derivados del uso de nuestros servicios.'
                            : 'We are not liable for indirect or consequential damages arising from the use of our services.',
                        language === 'es'
                            ? 'Nuestra responsabilidad total está limitada al monto pagado por el servicio específico.'
                            : 'Our total liability is limited to the amount paid for the specific service.',
                    ],
                },
                {
                    title: language === 'es' ? 'Confidencialidad' : 'Confidentiality',
                    content: [
                        language === 'es'
                            ? 'Respetamos la confidencialidad de la información de nuestros clientes.'
                            : "We respect the confidentiality of our clients' information.",
                        language === 'es'
                            ? 'Podemos firmar acuerdos de confidencialidad adicionales según sea necesario.'
                            : 'We may sign additional confidentiality agreements as needed.',
                        language === 'es'
                            ? 'No divulgamos información de proyectos sin el consentimiento expreso del cliente.'
                            : "We do not disclose project information without the client's express consent.",
                        language === 'es'
                            ? 'Los casos de estudio en nuestro portfolio se publican solo con autorización del cliente.'
                            : 'Case studies in our portfolio are published only with client authorization.',
                    ],
                },
                {
                    title: language === 'es' ? 'Modificaciones' : 'Modifications',
                    content: [
                        language === 'es'
                            ? 'Nos reservamos el derecho de modificar estos términos en cualquier momento.'
                            : 'We reserve the right to modify these terms at any time.',
                        language === 'es'
                            ? 'Los cambios significativos se notificarán a través del sitio web.'
                            : 'Significant changes will be notified through the website.',
                        language === 'es'
                            ? 'El uso continuado del sitio después de las modificaciones constituye aceptación de los nuevos términos.'
                            : 'Continued use of the site after modifications constitutes acceptance of the new terms.',
                        language === 'es'
                            ? 'La fecha de última actualización se muestra en la parte superior de este documento.'
                            : 'The last update date is shown at the top of this document.',
                    ],
                },
                {
                    title: language === 'es' ? 'Ley Aplicable' : 'Applicable Law',
                    content: [
                        language === 'es'
                            ? 'Estos términos se rigen por las leyes de la República Argentina.'
                            : 'These terms are governed by the laws of the Argentine Republic.',
                        language === 'es'
                            ? 'Cualquier disputa se resolverá en los tribunales de Buenos Aires, Argentina.'
                            : 'Any dispute will be resolved in the courts of Buenos Aires, Argentina.',
                        language === 'es'
                            ? 'AxionCode está registrada como empresa en Argentina y cumple con todas las obligaciones fiscales locales.'
                            : 'AxionCode is registered as a company in Argentina and complies with all local tax obligations.',
                    ],
                },
            ],
        },
        accessibility: {
            id: 'accessibility',
            title: language === 'es' ? 'Declaración de Accesibilidad' : 'Accessibility Statement',
            icon: 'UserGroupIcon',
            lastUpdated: '15 de diciembre de 2025',
            sections: [
                {
                    title: language === 'es' ? 'Nuestro Compromiso' : 'Our Commitment',
                    content: [
                        language === 'es'
                            ? 'AxionCode se compromete a garantizar la accesibilidad digital para personas con discapacidades. Mejoramos continuamente la experiencia del usuario para todos y aplicamos los estándares de accesibilidad relevantes.'
                            : 'AxionCode is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.',
                        language === 'es'
                            ? 'Creemos que todos deben tener acceso a la información y servicios en línea, independientemente de sus capacidades.'
                            : 'We believe everyone should have access to online information and services, regardless of their abilities.',
                    ],
                },
                {
                    title:
                        language === 'es' ? 'Estándares de Conformidad' : 'Conformance Standards',
                    content: [
                        language === 'es'
                            ? 'Nuestro sitio web cumple con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 nivel AA.'
                            : 'Our website conforms to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.',
                        language === 'es'
                            ? 'Estas pautas explican cómo hacer el contenido web más accesible para personas con discapacidades.'
                            : 'These guidelines explain how to make web content more accessible for people with disabilities.',
                        language === 'es'
                            ? 'La conformidad con WCAG 2.1 nivel AA significa que nuestro sitio es accesible para la mayoría de las personas con discapacidades.'
                            : 'Conformance with WCAG 2.1 Level AA means our site is accessible to most people with disabilities.',
                    ],
                },
                {
                    title:
                        language === 'es'
                            ? 'Características de Accesibilidad'
                            : 'Accessibility Features',
                    content: [
                        language === 'es'
                            ? 'Navegación por teclado: todas las funciones son accesibles mediante teclado sin necesidad de mouse.'
                            : 'Keyboard navigation: all functions are accessible via keyboard without requiring a mouse.',
                        language === 'es'
                            ? 'Compatibilidad con lectores de pantalla: el sitio funciona con JAWS, NVDA y otros lectores de pantalla populares.'
                            : 'Screen reader compatibility: the site works with JAWS, NVDA, and other popular screen readers.',
                        language === 'es'
                            ? 'Texto alternativo: todas las imágenes incluyen descripciones de texto alternativo significativas.'
                            : 'Alternative text: all images include meaningful alternative text descriptions.',
                        language === 'es'
                            ? 'Contraste de color: mantenemos una relación de contraste mínima de 4.5:1 para texto normal.'
                            : 'Color contrast: we maintain a minimum contrast ratio of 4.5:1 for normal text.',
                        language === 'es'
                            ? 'Estructura semántica: utilizamos HTML semántico para una mejor navegación y comprensión.'
                            : 'Semantic structure: we use semantic HTML for better navigation and understanding.',
                        language === 'es'
                            ? 'Formularios accesibles: todos los campos de formulario tienen etiquetas claras y mensajes de error descriptivos.'
                            : 'Accessible forms: all form fields have clear labels and descriptive error messages.',
                    ],
                },
                {
                    title:
                        language === 'es' ? 'Tecnologías Compatibles' : 'Compatible Technologies',
                    content: [
                        language === 'es'
                            ? 'Este sitio web está diseñado para funcionar con las siguientes tecnologías de asistencia:'
                            : 'This website is designed to work with the following assistive technologies:',
                        language === 'es'
                            ? 'Lectores de pantalla: JAWS, NVDA, VoiceOver, TalkBack'
                            : 'Screen readers: JAWS, NVDA, VoiceOver, TalkBack',
                        language === 'es'
                            ? 'Navegadores: Chrome, Firefox, Safari, Edge (versiones recientes)'
                            : 'Browsers: Chrome, Firefox, Safari, Edge (recent versions)',
                        language === 'es'
                            ? 'Sistemas operativos: Windows, macOS, iOS, Android'
                            : 'Operating systems: Windows, macOS, iOS, Android',
                        language === 'es'
                            ? 'Software de reconocimiento de voz: Dragon NaturallySpeaking'
                            : 'Voice recognition software: Dragon NaturallySpeaking',
                    ],
                },
                {
                    title: language === 'es' ? 'Limitaciones Conocidas' : 'Known Limitations',
                    content: [
                        language === 'es'
                            ? 'A pesar de nuestros mejores esfuerzos, algunas áreas del sitio pueden tener limitaciones de accesibilidad:'
                            : 'Despite our best efforts, some areas of the site may have accessibility limitations:',
                        language === 'es'
                            ? 'Contenido de terceros: algunos widgets o integraciones pueden no ser completamente accesibles.'
                            : 'Third-party content: some widgets or integrations may not be fully accessible.',
                        language === 'es'
                            ? 'Documentos PDF antiguos: algunos documentos heredados pueden no cumplir con los estándares actuales.'
                            : 'Older PDF documents: some legacy documents may not meet current standards.',
                        language === 'es'
                            ? 'Estamos trabajando activamente para abordar estas limitaciones.'
                            : 'We are actively working to address these limitations.',
                    ],
                },
                {
                    title: language === 'es' ? 'Evaluación y Pruebas' : 'Assessment and Testing',
                    content: [
                        language === 'es'
                            ? 'Realizamos evaluaciones regulares de accesibilidad utilizando:'
                            : 'We conduct regular accessibility assessments using:',
                        language === 'es'
                            ? 'Herramientas automatizadas: WAVE, axe DevTools, Lighthouse'
                            : 'Automated tools: WAVE, axe DevTools, Lighthouse',
                        language === 'es'
                            ? 'Pruebas manuales: navegación por teclado, pruebas con lectores de pantalla'
                            : 'Manual testing: keyboard navigation, screen reader testing',
                        language === 'es'
                            ? 'Revisiones de expertos: auditorías periódicas por especialistas en accesibilidad'
                            : 'Expert reviews: periodic audits by accessibility specialists',
                        language === 'es'
                            ? 'Retroalimentación de usuarios: incorporamos comentarios de usuarios con discapacidades'
                            : 'User feedback: we incorporate feedback from users with disabilities',
                    ],
                },
                {
                    title: language === 'es' ? 'Mejora Continua' : 'Continuous Improvement',
                    content: [
                        language === 'es'
                            ? 'La accesibilidad es un proceso continuo. Nos comprometemos a:'
                            : 'Accessibility is an ongoing process. We are committed to:',
                        language === 'es'
                            ? 'Monitorear y mejorar regularmente la accesibilidad de nuestro sitio web.'
                            : 'Regularly monitoring and improving the accessibility of our website.',
                        language === 'es'
                            ? 'Capacitar a nuestro equipo en las mejores prácticas de accesibilidad.'
                            : 'Training our team in accessibility best practices.',
                        language === 'es'
                            ? 'Incorporar la accesibilidad en todos los nuevos desarrollos desde el inicio.'
                            : 'Incorporating accessibility into all new developments from the start.',
                        language === 'es'
                            ? 'Responder a los comentarios de los usuarios y abordar los problemas reportados.'
                            : 'Responding to user feedback and addressing reported issues.',
                    ],
                },
                {
                    title: language === 'es' ? 'Comentarios y Contacto' : 'Feedback and Contact',
                    content: [
                        language === 'es'
                            ? 'Valoramos tus comentarios sobre la accesibilidad de nuestro sitio web. Si encuentras alguna barrera de accesibilidad, por favor contáctanos:'
                            : 'We value your feedback on the accessibility of our website. If you encounter any accessibility barriers, please contact us:',
                        'Email: accesibilidad@axioncode.com',
                        'WhatsApp: +54 9 11 1234-5678',
                        language === 'es'
                            ? 'Nos esforzamos por responder a los comentarios de accesibilidad dentro de 2 días hábiles.'
                            : 'We strive to respond to accessibility feedback within 2 business days.',
                        language === 'es'
                            ? 'Proporciona detalles específicos sobre el problema, incluyendo la página URL y el navegador/tecnología de asistencia que estás utilizando.'
                            : 'Please provide specific details about the issue, including the page URL and the browser/assistive technology you are using.',
                    ],
                },
                {
                    title: language === 'es' ? 'Aprobación Formal' : 'Formal Approval',
                    content: [
                        language === 'es'
                            ? 'Esta declaración de accesibilidad fue aprobada el 15 de diciembre de 2025.'
                            : 'This accessibility statement was approved on December 15, 2025.',
                        language === 'es'
                            ? 'Fue revisada por última vez el 15 de diciembre de 2025.'
                            : 'It was last reviewed on December 15, 2025.',
                        language === 'es'
                            ? 'Esta declaración se revisa y actualiza regularmente para reflejar el estado actual de accesibilidad del sitio.'
                            : 'This statement is regularly reviewed and updated to reflect the current accessibility status of the site.',
                    ],
                },
            ],
        },
    };

    const documents = [
        {
            id: 'privacy',
            label: language === 'es' ? 'Privacidad' : 'Privacy',
            icon: 'ShieldCheckIcon',
        },
        { id: 'terms', label: language === 'es' ? 'Términos' : 'Terms', icon: 'DocumentTextIcon' },
        {
            id: 'accessibility',
            label: language === 'es' ? 'Accesibilidad' : 'Accessibility',
            icon: 'UserGroupIcon',
        },
    ];

    if (!isHydrated) {
        return (
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="h-12 bg-muted rounded-lg animate-pulse mb-8" />
                    <div className="space-y-4">
                        <div className="h-6 bg-muted rounded animate-pulse" />
                        <div className="h-6 bg-muted rounded animate-pulse w-3/4" />
                        <div className="h-6 bg-muted rounded animate-pulse w-5/6" />
                    </div>
                </div>
            </div>
        );
    }

    const currentDocument = legalDocuments[activeDocument];

    return (
        <div className="container mx-auto px-6 py-16 lg:py-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                        {language === 'es' ? 'Información Legal' : 'Legal Information'}
                    </h1>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        {language === 'es'
                            ? 'Transparencia y cumplimiento en cada aspecto de nuestro servicio'
                            : 'Transparency and compliance in every aspect of our service'}
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    <aside className="lg:col-span-1">
                        <nav className="sticky top-24 space-y-2">
                            {documents.map((doc) => (
                                <button
                                    key={doc.id}
                                    onClick={() => setActiveDocument(doc.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                                        activeDocument === doc.id
                                            ? 'bg-accent text-accent-foreground shadow-md'
                                            : 'bg-card text-text-primary hover:bg-muted'
                                    }`}
                                >
                                    <Icon
                                        name={doc.icon as any}
                                        size={20}
                                        variant={activeDocument === doc.id ? 'solid' : 'outline'}
                                    />
                                    <span className="font-medium">{doc.label}</span>
                                </button>
                            ))}
                        </nav>
                    </aside>

                    <div className="lg:col-span-3">
                        <div className="bg-card rounded-xl shadow-sm border border-border p-8 lg:p-12">
                            <div className="flex items-start gap-4 mb-8 pb-8 border-b border-border">
                                <div className="p-3 bg-accent-subtle rounded-lg">
                                    <Icon
                                        name={currentDocument.icon as any}
                                        size={32}
                                        className="text-accent"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold text-primary mb-2">
                                        {currentDocument.title}
                                    </h2>
                                    <p className="text-sm text-text-secondary">
                                        {language === 'es'
                                            ? 'Última actualización: '
                                            : 'Last updated: '}
                                        {currentDocument.lastUpdated}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-12">
                                {currentDocument.sections.map((section, index) => (
                                    <LegalSection
                                        key={index}
                                        title={section.title}
                                        content={section.content}
                                        index={index}
                                    />
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-border">
                                <div className="bg-muted rounded-lg p-6">
                                    <div className="flex items-start gap-3">
                                        <Icon
                                            name="InformationCircleIcon"
                                            size={24}
                                            className="text-accent flex-shrink-0 mt-1"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-primary mb-2">
                                                {language === 'es'
                                                    ? '¿Tienes preguntas?'
                                                    : 'Have questions?'}
                                            </h3>
                                            <p className="text-text-secondary mb-4">
                                                {language === 'es'
                                                    ? 'Si necesitas aclaraciones sobre cualquier aspecto de nuestras políticas legales, no dudes en contactarnos.'
                                                    : "If you need clarification on any aspect of our legal policies, please don't hesitate to contact us."}
                                            </p>
                                            <div className="flex flex-wrap gap-4">
                                                <a
                                                    href="mailto:contacto@axioncode.com"
                                                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-smooth font-medium"
                                                >
                                                    <Icon name="EnvelopeIcon" size={18} />
                                                    contacto@axioncode.com
                                                </a>
                                                <a
                                                    href="https://wa.me/5491112345678"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-smooth font-medium"
                                                >
                                                    <Icon
                                                        name="ChatBubbleLeftRightIcon"
                                                        size={18}
                                                    />
                                                    WhatsApp
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalContent;
