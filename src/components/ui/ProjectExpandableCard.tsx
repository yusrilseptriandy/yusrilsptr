import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { ImageCarousel } from './Carousel';

type Project = {
    title: string;
    description: string;
    src: string[];
    ctaText: string;
    ctaLink: string;
    content: React.ReactNode;
    isProgress?: boolean;
};

const projects: Project[] = [
    {
        title: 'Coursebisa',
        description: 'Full-stack',
        src: [
            '/cb/image1.png',
            '/cb/image2.png',
            '/cb/image3.png',
            '/cb/image4.png',
            '/cb/image5.png',
            '/cb/image6.png',
            '/cb/image7.png',
        ],
        ctaText: 'Github',
        ctaLink: 'https://github.com/yusrilseptriandy/course-bisa',
        isProgress: true,
        content: (
            <div className="space-y-4">
                <p className="text-sm leading-relaxed text-neutral-700">
                    Built with <span className="font-semibold">Nextjs</span>,{' '}
                    <span className="font-semibold">Bun</span>,{' '}
                    <span className="font-semibold">TypeScript</span>,{' '}
                    <span className="font-semibold">ElysiaJS</span>,{' '}
                    <span className="font-semibold">Postgre</span>,{' '}
                    <span className="font-semibold">Redis</span>,{' '}
                    <span className="font-semibold">Docker</span>,{' '}
                    <span className="font-semibold">Prisma ORM</span>,{' '}
                    <span className="font-semibold">TailwindCSS</span>
                </p>
                <div>
                    <p className="text-sm font-semibold mb-2">Features:</p>
                    <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1">
                        <li>MUX Integration for Course Management</li>
                        <li>Support for Premium and Free Courses</li>
                        <li>Advanced Video Content Protection to Prevent Piracy</li>
                        <li>Will be integrated with Xendit</li>
                        <li>Fully Responsive User Interface for All Devices</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: 'Material Flow',
        description: 'Full-stack inventory dashboard',
        src: [
            '/material-flow.png',
            '/Screenshot (55).png',
            '/Screenshot (56).png',
            '/Screenshot (57).png',
            '/Screenshot (58).png',
            '/Screenshot (59).png',
            '/Screenshot (60).png',
            '/Screenshot (62).png',
        ],
        ctaText: 'Github',
        ctaLink: 'https://github.com/yusrilseptriandy/stok-material',
        content: (
            <div className="space-y-4">
                <p className="text-sm leading-relaxed text-neutral-700">
                    Built with <span className="font-semibold">Vite</span>,{' '}
                    <span className="font-semibold">React</span>,{' '}
                    <span className="font-semibold">TypeScript</span>,{' '}
                    <span className="font-semibold">Prisma</span>,{' '}
                    <span className="font-semibold">MySQL</span>,{' '}
                    <span className="font-semibold">JWT (access + refresh)</span>,{' '}
                    <span className="font-semibold">TailwindCSS</span>
                </p>
                <div>
                    <p className="text-sm font-semibold mb-2">Features:</p>
                    <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1">
                        <li>Secure login with refresh token</li>
                        <li>Material inventory tracking</li>
                        <li>CRUD dashboard + role based access</li>
                        <li>Responsive UI</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: 'Klinik',
        description: 'Full-stack dengan Yii2 Basic',
        src: [
            '/yii/Screenshot (54).png',
            '/yii/Screenshot (47).png',
            '/yii/Screenshot (48).png',
            '/yii/Screenshot (49).png',
            '/yii/Screenshot (50).png',
            '/yii/Screenshot (51).png',
            '/yii/Screenshot (52).png',
            '/yii/Screenshot (53).png',
        ],
        ctaText: 'GitLab',
        ctaLink:
            'https://gitlab.com/yusrilsptr/kliniku/-/tree/d7e2e5faefabad81d202ffc61e01ba3d4a204bee/',
        content: (
            <div className="space-y-4">
                <p className="text-sm leading-relaxed text-neutral-700">
                    Built with <span className="font-semibold">Yii2 Basic</span>,{' '}
                    <span className="font-semibold">PHP</span>,{' '}
                    <span className="font-semibold">PostgreSQL</span>
                </p>
                <div>
                    <p className="text-sm font-semibold mb-2">Features:</p>
                    <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1">
                        <li>Register Pasien</li>
                        <li>Create Riwayat Pasien</li>
                        <li>Print Formulir Riwayat Pasien</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: 'Rental Car',
        description: 'Full-stack dengan laravel',
        src: ['/rentalcar.png'],
        ctaText: 'Github',
        ctaLink: 'https://github.com/yusrilseptriandy/flexcar-car-rental',
        content: (
            <div className="space-y-4">
                <p className="text-sm leading-relaxed text-neutral-700">
                    Built with <span className="font-semibold">PHP</span>,{' '}
                    <span className="font-semibold">Laravel</span>,{' '}
                    <span className="font-semibold">MySQL</span>
                </p>
                <div>
                    <p className="text-sm font-semibold mb-2">Features:</p>
                    <ul className="list-disc pl-5 text-sm text-neutral-700 space-y-1">
                        <li>CRUD Mobil</li>
                        <li>Checkout</li>
                        <li>Riwayat Order</li>
                    </ul>
                </div>
            </div>
        ),
    },
];

export default function ProjectExpandableCard() {
    const [active, setActive] = useState<Project | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') setActive(null);
        }

        document.body.style.overflow = active ? 'hidden' : 'auto';
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            {/* Backdrop */}
            <AnimatePresence>
                {active && (
                    <motion.div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>

            {/* Modal */}
            <AnimatePresence>
                {active && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
                        <motion.div
                            ref={ref}
                            layoutId={`card-${active.title}-${id}`}
                            className="w-full max-w-2xl max-h-[90vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                        >
                            {/* Image */}
                            <motion.div
                                layoutId={`image-${active.title}-${id}`}
                                className="relative w-full aspect-video bg-neutral-100"
                            >
                                {active.isProgress && (
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                            </span>
                                           On Progress
                                        </span>
                                    </div>
                                )}
                                <ImageCarousel
                                    images={active.src}
                                    alt={active.title}
                                />
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                    <div>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="text-xl sm:text-2xl font-bold text-neutral-900"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-sm text-neutral-600 mt-1"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium rounded-full transition-colors w-full sm:w-auto"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>

                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="prose prose-sm max-w-none"
                                >
                                    {active.content}
                                </motion.div>
                            </div>

                            {/* Close button - mobile */}
                            <button
                                onClick={() => setActive(null)}
                                className="sm:hidden absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg"
                                aria-label="Close"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-0">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        layoutId={`card-${project.title}-${id}`}
                        onClick={() => setActive(project)}
                        className="group relative aspect-video cursor-pointer rounded-2xl overflow-hidden bg-neutral-100 shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <motion.img
                            layoutId={`image-${project.title}-${id}`}
                            src={project.src[0]}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {project.isProgress && (
                            <div className="absolute top-3 right-3 z-10">
                                <span className="bg-orange-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                                    </span>
                                    <span className="hidden sm:inline">On Progress</span>
                                    <span className="sm:hidden">ON</span>
                                </span>
                            </div>
                        )}

                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                            <motion.h3
                                layoutId={`title-${project.title}-${id}`}
                                className="text-white font-bold text-lg sm:text-xl"
                            >
                                {project.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${project.description}-${id}`}
                                className="text-white/80 text-xs sm:text-sm"
                            >
                                {project.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
}