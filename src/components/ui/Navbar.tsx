import Download from '../svg/Download';
import Human from '../svg/Human';

const Navbar = () => {
    return (
        <div
            id="hero"
            className="w-full h-16 flex justify-between items-center bg-background-light px-8 py-6 sm:px-20 sm:py-8"
        >
            <div className="flex items-center gap-3">
                <div className="size-10 bg-accent-yellow neo-border rounded-lg flex items-center justify-center neo-button-shadow hover:bg-primary transition-colors p-1">
                    <Human />
                </div>
                <h2 className="text-xl font-extrabold tracking-tight">
                    Yusrilsptr
                </h2>
            </div>
            <a
                href="https://drive.google.com/file/d/1RHPcsLXqNILOZxKkhCRIe8yqbOt-vdfy/view?usp=drive_link"
                target="_blank"
                className="bg-white px-3 neo-border rounded-lg text-sm font-extrabold neo-button-shadow hover:bg-accent-yellow hover:text-neo-black transition-colors h-8 font-space flex items-center justify-center gap-2 cursor-pointer"
            >
                MY CV
                <Download />
            </a>
        </div>
    );
};
export default Navbar;
