export default function Close() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={38}
            height={38}
            viewBox="0 0 24 24"
        >
            <defs>
                <mask id="SVGzptI4dvL">
                    <g
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    >
                        <path
                            fill="#fff"
                            fillOpacity={0}
                            stroke="#fff"
                            strokeDasharray="60"
                            d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"
                        >
                            <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                dur="0.6s"
                                values="60;0"
                            />
                            <animate
                                fill="freeze"
                                attributeName="fill-opacity"
                                begin="0.6s"
                                dur="0.4s"
                                to="1"
                            />
                        </path>

                        <path
                            fill="none"
                            stroke="#000"
                            strokeDasharray="8"
                            strokeDashoffset="8"
                            d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"
                        >
                            <animate
                                fill="freeze"
                                attributeName="stroke-dashoffset"
                                begin="1.1s"
                                dur="0.2s"
                                to="0"
                            />
                        </path>
                    </g>
                </mask>
            </defs>

            <path fill="#fbf3f3" d="M0 0h24v24H0z" mask="url(#SVGzptI4dvL)" />
        </svg>
    );
}
