import { useState } from 'react';
import FloatingNavbar from './components/sections/FloatingNavbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skill from './components/sections/Skill';
import Navbar from './components/ui/Navbar';
import ContactModal from './components/ui/ContactModal';

export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-background-light h-screen w-screen text-neo-black transition-colors duration-200 relative">
            <Navbar />
            <div className="w-full h-min bg-grid-fade">
                <Hero />
            </div>
            <div className="w-full flex items-center justify-center">
                <Skill />
            </div>
            <div className="w-full h-min px-8 py-2 bg-grid-fade sm:px-20 pt-6">
                <Projects />
            </div>
            <div className="w-full h-min flex items-center px-20 pb-10">
                <FloatingNavbar onContactClick={openModal} />

                <ContactModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </div>
    );
}
