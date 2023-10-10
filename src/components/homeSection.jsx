import Typewriter from "typewriter-effect";

function HomeSection() {
    return (
        <div id='home' className="container mx-auto px-3 md:px-5 py-10 w-full flex items-center gap-5">
            <div className="leftside w-1/2 ">
                <p className="welcome-text uppercase font-medium">Welcome to my portfolio</p>
                <div className="name-text text-2xl lg:text-3xl xl:text-5xl font-semibold my-1 !leading-[1.3]">Hi, I am <span className=" text-blueHover">Hamza Laanani</span> a <Typewriter
 
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
                {/* <p className="name-text text-2xl lg:text-3xl xl:text-5xl font-semibold my-1 !leading-[1.3]">Hi, I am <span className=" text-blueHover">Hamza Laanani</span> a <span id="typewriter">Web Developer</span></p> */}
            </div>
            <div className="w-1/2"></div>
        </div>
    )
}

export default HomeSection