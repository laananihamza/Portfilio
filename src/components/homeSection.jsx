import Typewriter from "typewriter-effect";
import profile from '../assets/hamza_img.png'

function HomeSection() {
    return (
        <div id='home' className="container mx-auto px-3 md:px-5 py-10 ">
            <div className="w-full flex flex-col md:flex-row items-center gap-5">
            <div className="leftside w-9/12 md:w-1/2 text-center md:text-left ">
                <p className="welcome-text uppercase font-medium">Welcome to my portfolio</p>
                <div className="name-text text-3xl md:text-[1.6rem] lg:text-3xl xl:text-5xl font-semibold my-1 !leading-[1.3]">Hi, I am <span className=" text-blueHover">Hamza Laanani</span> a <Typewriter
                    
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Web Developer")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Pro Programmer")
                            .pauseFor(1000)
                            .start();
                            
                    }}
                    options={{
                        loop: true
                    }}
                /></div>
                <p className="name-text text-gray-600 my-3">I am a Full Stack Developer, I have strong technical skills in front-end and back-end technologies. Additionally, I have problem-solving and communication skills, and I am committed to staying up to date with the latest industry trends and emerging technologies.</p>
                <div className="cv-link my-10">
                    <a href="/files/CV_LAANANI_HAMZA_EN.pdf" download={true} className="bg-blueHover px-14 py-3 rounded-md text-white duration-200">My CV</a>
                    <a href="#portfolio" className="border-2 border-blueHover px-8 py-3 rounded-md mx-3 text-blueHover">See My Works</a>
                </div>
            </div>
            <div className=" relative">
                <div className="empty-box w-full h-[75%] bg-white shadow-lg -z-10 rounded-xl absolute left-1/2 bottom-10 -translate-x-1/2"></div>
                <img src={profile} alt="" className="max-w-full h-full z-50 rounded-xl" />
            </div>
            </div>
            
        </div>
    )
}

export default HomeSection