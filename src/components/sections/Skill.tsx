import { useState } from 'react';
import Expansion from '../svg/Expansion';
import Express from '../svg/Express';
import Js from '../svg/Js';
import MySQL from '../svg/MySQL';
import Nextjs from '../svg/Nextjs';
import Pg from '../svg/Pg';
import Php from '../svg/Php';
import Ts from '../svg/Ts';
import SkillModal from '../ui/SkillModal';

export default function Skill() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const skills = [
        { name: 'Next.js', icon: <Nextjs />, type: 'Framework' },
        { name: 'Express Js', icon: <Express />, type: 'Framework' },
        { name: 'PostgreSQL', icon: <Pg />, type: 'Database' },
        { name: 'MySQL', icon: <MySQL />, type: 'Database' },
        { name: 'Typescript', icon: <Ts />, type: 'Language' },
        { name: 'Javascript', icon: <Js />, type: 'Language' },
        { name: 'Php', icon: <Php />, type: 'Language' },
    ];

    return (
        <div className="w-full flex flex-col items-center bg-background-dark border-y border-slate-100 py-6 overflow-hidden">
            <div className="w-full items-center justify-center flex px-3 sm:px-6 mb-4 relative">
                <h1 className="text-sm sm:text-lg text-gray-500  uppercase tracking-wider font-extrabold font-space text-center">
                    powering experiences with
                </h1>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="cursor-pointer animate-pulse bg-background-light p-2 rounded-full absolute right-4 -top-4 hover:scale-105 hover:animate-none"
                >
                    <Expansion />
                </button>
            </div>
            <div className="flex sm:w-1/2 w-full overflow-hidden relative items-center ">
                <div className="flex flex-nowrap gap-12 items-center animate-marquee whitespace-nowrap px-6">
                    {skills.map((skill, index) => (
                        <div
                            key={`skill-1-${index}`}
                            className="flex items-center gap-2 text-xl font-bold text-white"
                        >
                            <div className="w-8 h-8 flex items-center justify-center">
                                {skill.icon}
                            </div>
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
            <SkillModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                skills={skills}
            />
        </div>
    );
}
