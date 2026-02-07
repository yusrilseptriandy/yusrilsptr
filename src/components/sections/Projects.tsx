import ProjectExpandableCard from '../ui/ProjectExpandableCard';

export default function Projects() {
    return (
        <div
            id="projects"
            className=" scroll-mt-24 w-full h-full flex flex-col pb-8"
        >
            <div className="mb-4 z-10">
                <h2 className="relative text-3xl md:text-4xl font-black">
                    <span className="">Selected Projects</span>
                </h2>
                <p className="text-sm md:text-lg font-medium opacity-70">
                    A collection of things I've built with code
                </p>
            </div>

            <ProjectExpandableCard />
        </div>
    );
}
