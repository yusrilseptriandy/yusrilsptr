export default function FloatingNavbar({ onContactClick }) {
    const navItems = [
        {
            id: 'hero',
            label: 'Home',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 14 14"
                >
                    <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M6.093 1.265a1.5 1.5 0 0 1 1.814 0l.66.501a20.5 20.5 0 0 1 4.905 5.335l.212.333a1 1 0 0 1-.844 1.536h-.691c.04.92-.01 1.841-.15 2.752a1.856 1.856 0 0 1-1.836 1.574H8.25V10a1.25 1.25 0 1 0-2.5 0v3.296H3.837a1.86 1.86 0 0 1-1.835-1.574c-.14-.911-.19-1.833-.15-2.752H1.16a1 1 0 0 1-.844-1.536L.527 7.1a20.5 20.5 0 0 1 4.906-5.334z"
                        clip-rule="evenodd"
                    />
                </svg>
            ),
        },
        {
            id: 'contact',
            label: 'Contact',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 640 640"
                >
                    <path
                        fill="#fff"
                        d="M96 96c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80m-24-96c0-30.9 25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56m240-48h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H392c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 96h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H392c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                    />
                </svg>
            ),
        },
    ];

    return (
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-30">
            <div className="bg-background-dark/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center gap-6 px-6 py-3">
                {navItems.map((item) =>
                    item.id === 'contact' ? (
                        <button
                            key={item.id}
                            onClick={onContactClick}
                            className="text-neo-white hover:text-neo-accent transition-colors duration-300 text-xl"
                            aria-label={item.label}
                        >
                            {item.icon}
                        </button>
                    ) : (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="text-neo-white hover:text-neo-accent transition-colors duration-300 text-xl"
                            aria-label={item.label}
                        >
                            {item.icon}
                        </a>
                    ),
                )}
            </div>
        </div>
    );
}
