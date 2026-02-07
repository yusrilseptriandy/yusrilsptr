export default function Hero() {
    return (
        <div className="w-full h-full sm:flex flex-row  items-center justify-between px-8 py-6 sm:px-20 sm:py-8">
            <div className="sm:w-1/2">
                <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                    Hi, I'm Yusril! <br />I build{' '}
                    <span className="relative z-10">
                        playful
                        <svg
                            className="absolute -bottom-2 left-0 w-full h-4 text-accent-yellow -z-10"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 10"
                        >
                            <path
                                d="M0 5 Q 25 10 50 5 T 100 5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="8"
                            ></path>
                        </svg>
                    </span>{' '}
                    digital things.
                </h1>
                <div className="absolute -top-10 -right-4 md:right-10 text-accent-yellow animate-pulse drop-shadow-[2px_2px_0px_rgba(26,26,26,1)]" />
                <p className="mt-6 opacity-70">
                    Fresh Computer Science graduate focused on Full-Stack
                    JavaScript development, passionate about building modern web
                    applications.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <a
                        href="#projects"
                        className="bg-primary text-neo-black px-8 py-4 neo-border rounded-xl text-lg font-black neo-button-shadow flex items-center gap-2 hover:bg-accent-yellow transition-colors z-10"
                    >
                        View My Work
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <g
                                fill="none"
                                stroke="#1a1a1a"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                            >
                                <path strokeDasharray="20" d="M12 3l0 17.5">
                                    <animate
                                        fill="freeze"
                                        attributeName="stroke-dashoffset"
                                        dur="0.3s"
                                        values="20;0"
                                    />
                                </path>
                                <path
                                    strokeDasharray="12"
                                    strokeDashoffset="12"
                                    d="M12 21l7 -7M12 21l-7 -7"
                                >
                                    <animate
                                        fill="freeze"
                                        attributeName="stroke-dashoffset"
                                        begin="0.3s"
                                        dur="0.2s"
                                        to="0"
                                    />
                                </path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="w-full max-w-sm aspect-square relative mt-4 z-10">
                <div className="absolute inset-0 bg-accent-yellow neo-border rounded-2xl translate-x-3 translate-y-3"></div>
                <div className="absolute inset-0 bg-white neo-border rounded-2xl overflow-hidden ">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/me.png')",
                        }}
                    />
                </div>

                <div className="absolute -left-16 hidden lg:block">
                    <div className="rotate-90 drop-shadow-[2px_2px_0px_rgba(26,26,26,1)]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="100"
                            viewBox="0 0 22 22"
                        >
                            <path
                                fill="#ffd93d"
                                d="M19 12v2h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1h-4v-1H9v-1H8v-2H7V3h2v6h1v2h2v1h3v-1h-1v-1h-1V8h2v1h1v1h1v1h1v1"
                            />
                        </svg>
                    </div>
                    <p className="font-bold -rotate-12 -mt-4 absolute text-nowrap">
                        It's me!
                    </p>
                </div>
            </div>
        </div>
    );
}
