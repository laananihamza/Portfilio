import { useState } from "react";

function AboutSection() {
    const [isAbout, setIsAbout] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY >= document.getElementById('about').offsetTop + 10) {
            setIsAbout(true)
        }else {
            setIsAbout(false)
        }
    })
    return (
        <div id='about' className="container mx-auto px-3 md:px-5 py-14 min-h-screen">
            <div className="relative text-center mb-8">
                <p className="text-2xl md:text-3xl lg:text-5xl font-medium uppercase text-gray-800">About</p>
                <p className="text-4xl w-full md:text-6xl -z-10 font-medium uppercase absolute top-4 left-1/2 -translate-x-1/2 text-gray-200">About Me</p>
            </div>
            <div className="content mt-28 grid grid-cols-1 justify-items-center gap-y-32 md:grid-cols-2 md:gap-28 lg:gap-32 xl:gap-40 2xl:gap-52">
                <div className={`empty-box ${isAbout ? "start" : "stop"} about-me duration-200 a1 relative z-[3] w-11/12  shadow-lg rounded-xl min-h-[300px]`}>
                    <span className={`absolute -z-[6] inline-block w-8/12 h-2 top-1/2 left-full`}></span>
                </div>
                <div className={`empty-box ${isAbout ? "start" : "stop"} about-me duration-300 delay-1000 a2 relative z-[3] w-11/12  shadow-lg rounded-xl min-h-[300px]`}>
                    <span className={`absolute -z-[6] inline-block w-2 h-4/6 left-1/2 top-full`}></span>
                </div>
                <div className={`empty-box ${isAbout ? "start" : "stop"} about-me duration-300 delay-[1.1s] a4 relative z-[3] w-11/12  shadow-lg rounded-xl min-h-[300px]`}></div>
                <div className={`empty-box ${isAbout ? "start" : "stop"} about-me duration-300 delay-[2.1s] a3 relative z-[3] w-11/12  shadow-lg rounded-xl min-h-[300px]`}>
                    <span className={`absolute -z-[6] inline-block w-5/12 h-2 top-1/2 left-0 rotate-180 -translate-x-full`}></span>
                </div>
            </div>
        </div>
    )
}

export default AboutSection