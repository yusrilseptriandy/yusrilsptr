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
};

const projects: Project[] = [
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
        ctaLink: '#',
        content: (
            <>
                <p className="leading-relaxed">
                    Built with <b>Vite</b>, <b>React</b>, <b>TypeScript</b>,{' '}
                    <b>Prisma</b>,<b> MySQL</b>, <b>JWT (access + refresh)</b>{' '}
                    and <b>TailwindCSS</b>.
                </p>
                <p className="mt-4 leading-relaxed">Features:</p>
                <ul className="list-disc pl-5 mt-2">
                    <li>Secure login with refresh token</li>
                    <li>Material inventory tracking</li>
                    <li>CRUD dashboard + role based access</li>
                    <li>Responsive UI</li>
                </ul>
            </>
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
            <>
                <p className="leading-relaxed">
                    Built with <b>Yii2 Basic</b>, <b>PHP</b>, ,
                    <b> PostgreSQL</b>
                </p>
                <p className="mt-4 leading-relaxed">Features:</p>
                <ul className="list-disc pl-5 mt-2">
                    <li>Register Pasien</li>
                    <li>Create Riwayat Pasien</li>
                    <li>Print Formulir Riwayat Pasien</li>
                </ul>
            </>
        ),
    },

    {
        title: 'Rental Car',
        description: 'Full-stack dengan laravel',
        src: ['/rentalcar.png'],
        ctaText: 'Github',
        ctaLink: 'https://github.com/yusrilseptriandy/flexcar-car-rental',
        content: (
            <>
                <p className="leading-relaxed">
                    Built with, <b>PHP</b>, <b>Laravel</b>, ,<b> MySQL</b>
                </p>
                <p className="mt-4 leading-relaxed">Features:</p>
                <ul className="list-disc pl-5 mt-2">
                    <li>CRUD Mobil</li>
                    <li>Checkout</li>
                    <li>Riwayat Order</li>
                </ul>
            </>
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

        if (active) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && (
                    <motion.div
                        className="fixed inset-0 bg-black/25 z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                )}
            </AnimatePresence>

            {/* MODAL */}
            <AnimatePresence>
                {active && (
                    <div className="fixed inset-0 grid place-items-center z-50 md:p-4">
                        <motion.div
                            ref={ref}
                            layoutId={`card-${active.title}-${id}`}
                            className="w-full max-w-2xl h-full  flex flex-col bg-white md:rounded-3xl overflow-hidden shadow-xl"
                        >
                            {/* IMAGE */}
                            <motion.div
                                layoutId={`image-${active.title}-${id}`}
                                className="w-full aspect-video p-2"
                            >
                                <ImageCarousel
                                    images={active.src}
                                    alt={active.title}
                                />
                            </motion.div>
                            <button
                                onClick={() => setActive(null)}
                                className="absolute bottom-2 right-2 text-white bg-red-500 px-3 py-2 rounded-full font-bold md:hidden"
                            >
                                Close
                            </button>
                            {/* CONTENT */}
                            <div className="p-5 flex flex-col gap-4">
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="text-2xl font-black"
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
                                        className="px-4 py-2 rounded-full font-bold bg-black text-white text-nowrap"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>

                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-sm text-neutral-700 overflow-auto max-h-56"
                                >
                                    {active.content}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* CARD LIST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        layoutId={`card-${project.title}-${id}`}
                        className="relative aspect-video cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setActive(project)}
                    >
                        <div className="absolute inset-0 bg-white neo-border rounded-2xl overflow-hidden neo-button-shadow">
                            <motion.img
                                layoutId={`image-${project.title}-${id}`}
                                src={project.src[0]}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute left-4 bottom-4 bg-black/60 text-white px-3 py-2 rounded-xl">
                            <motion.h3
                                layoutId={`title-${project.title}-${id}`}
                                className="font-black"
                            >
                                {project.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${project.description}-${id}`}
                                className="text-xs opacity-80"
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
