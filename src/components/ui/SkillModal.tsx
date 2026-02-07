import Close from '../svg/Close';

interface Skill {
    name: string;
    icon: React.ReactNode;
    type: string;
}

interface SkillModalProps {
    isOpen: boolean;
    onClose: () => void;
    skills: Skill[];
}

export default function SkillModal({
    isOpen,
    onClose,
    skills,
}: SkillModalProps) {
    if (!isOpen) return null;

    const renderGroup = (title, type) => {
        const filtered = skills.filter((s) => s.type === type);
        if (filtered.length === 0) return null;
        return (
            <div className="mb-8 last:mb-0">
                <h3 className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-slate-700"></span>
                    {title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {filtered.map((skill, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-background-dark  transition-all text-white"
                        >
                            <div className="w-6 h-6 shrink-0">{skill.icon}</div>
                            <span className="text-sm font-bold whitespace-nowrap">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            />

            <div className="relative bg-background-dark w-full max-w-2xl rounded-3xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-extrabold text-white">
                            Tech Stack
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 absolute right-0 -top-1 hover:bg-slate-800 rounded-full text-white cursor-pointer"
                    >
                        <Close />
                    </button>
                </div>

                {renderGroup('Programming Languages', 'Language')}
                {renderGroup('Frameworks & Libraries', 'Framework')}
                {renderGroup('Databases', 'Database')}
            </div>
        </div>
    );
}
