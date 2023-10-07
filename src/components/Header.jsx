import { useEffect, useRef, useState } from "react"

// eslint-disable-next-line react/prop-types
function Header({ activeSection }) {
  const [position, setPosition] = useState(false)
  const header = useRef()
  const headerScroll = () => {
    if (window.scrollY > 200) {
      setPosition(true)
    }else {
      setPosition(false)
    }
    console.log('1');
  }
  const onScroll = () => {
    requestAnimationFrame(headerScroll)
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  
  return (
    <header ref={header} className={`px-10  flex items-center justify-between duration-100 w-full ${position ? '!py-3 duration-100 fixed bg-white' : 'relative bg-transparent py-5'} top-0`}>
      <div className="logo text-blueHover text-2xl font-black">L</div>
      <div className="links">
        <ul className="flex gap-5 text-sm uppercase font-medium">
          <li className={`relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'home' ? 'before:w-full' : 'before:w-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a href="#home">Home</a></li>
          <li className={`relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'about' ? 'before:w-full' : 'before:w-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a href="#about" >About</a></li>
          <li className={`relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'resume' ? 'before:w-full' : 'before:w-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a href="#resume">Resume</a></li>
          <li className={`relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'skills' ? 'before:w-full' : 'before:w-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a href="#skills" >Skills</a></li>
          <li className={`relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'portfolio' ? 'before:w-full' : 'before:w-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a href="#portfolio">Portfolio</a></li>
          <li className={`relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'contact' ? 'before:w-full' : 'before:w-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header