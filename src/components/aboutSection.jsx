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
                <div className={`empty-box ${isAbout ? "start" : "stop"} about-me duration-200 a1 relative z-[3] w-11/12  shadow-lg rounded-xl min-h-[350px]`}>
                    <span className={`absolute -z-[6] inline-block w-8/12 h-2 top-1/2 left-full`}></span>
                    <p className={`title relative delay-100 duration-200 text-2xl text-center font-bold before:absolute before:bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-white  before:duration-200 before:w-3/12 before:h-0.5 p-3 ${isAbout ? "text-white" : "text-black"}`}>My personal information</p>
                    <p className={`title duration-200 delay-100 p-3 ${isAbout ? "text-white" : "text-black"}`}><span className="font-bold">Name :</span> Hamza Laanani</p>
                    <p className={`title duration-200 delay-100 p-3 ${isAbout ? "text-white" : "text-black"}`}><span className="font-bold">Date of birth :</span> January 08, 2002</p>
                    <p className={`title duration-200 delay-100 p-3 ${isAbout ? "text-white" : "text-black"}`}><span className="font-bold">Address :</span> DB Haddi SYBA Marrakesh, Morocco</p>
                    <p className={`title duration-200 delay-100 p-3 ${isAbout ? "text-white" : "text-black"}`}><span className="font-bold">Email :</span> <a href="mailto:laanani.hamza02@gmail.com">laanani.hamza02@gmail.com</a></p>
                    <p className={`title duration-200 delay-100 p-3 ${isAbout ? "text-white" : "text-black"}`}><span className="font-bold">Phone :</span> <a href="tel:+212679504484">+212 679-504484</a></p>
                </div>
                <div className={`empty-box ${isAbout ? "start" : "stop"} about-me duration-300 delay-1000 a2 relative z-[3] w-11/12  shadow-lg rounded-xl min-h-[300px]`}>
                <p className={`title relative duration-200 delay-1000 text-2xl font-bold px-5 pt-5 pb-1 ${isAbout ? "text-white" : "text-black"} flex justify-between`}> <span>Complete high school</span> <span>2020</span> </p>
                <p className={`title relative duration-200 delay-1000 text-base px-5 pb-8 ${isAbout ? "text-white" : "text-black"}`}>(Hassan Ibn Tabit High School)</p>
                <p className={`title relative duration-200 delay-1000 px-5 ${isAbout ? "text-white" : "text-black"}`}>
                    I successfully completed the high school physics curriculum, achieving a solid understanding of fundamental principles in the field. This educational experience not only enhanced my critical thinking and problem-solving skills but also cultivated a strong interest in the physical sciences. It laid the foundation 
                    for my future academic and career pursuits in science and technology.
                </p>
                    <span className={`absolute -z-[6] inline-block w-2 h-4/6 left-1/2 top-full`}></span>
                </div>
                <div className={`empty-box ${isAbout ? "start" : "stop"} about-me duration-300 delay-[1.1s] ${screen.width < 800 ? "a3" : "a4"} relative z-[3] w-11/12  shadow-lg rounded-xl min-h-[300px]`}></div>
                <div className={`empty-box ${isAbout ? "start" : "stop"} about-me duration-300 delay-[2.1s] ${screen.width < 800 ? "a4" : "a3"} relative z-[3] w-11/12  shadow-lg rounded-xl min-h-[300px]`}>
                    <span className={`absolute -z-[6] inline-block w-[41.8%] h-2 top-1/2 left-0 rotate-180 -translate-x-full`}></span>
                <p className={`title relative duration-200 delay-1000 text-2xl font-bold px-5 pt-5 pb-1 ${isAbout ? "text-white" : "text-black"} flex justify-between`}> <span>Qadi Iyad Marrakech</span> <span>2021</span> </p>
                <p className={`title relative duration-200 delay-1000 text-base px-5 pb-8 ${isAbout ? "text-white" : "text-black"}`}>(Law at the FSJES faculty)</p>
                <p className={`title relative duration-200 delay-1000 px-5 ${isAbout ? "text-white" : "text-black"}`}>
                    
                </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection