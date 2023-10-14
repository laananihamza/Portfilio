import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"

// eslint-disable-next-line react/prop-types
function Header({ activeSection }) {
  const [position, setPosition] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const header = useRef()
  const headerScroll = () => {
    if (window.scrollY > 200) {
      setPosition(true)
    }else {
      setPosition(false)
    }
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

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (!document.querySelector('.link-section').contains(e.target) && !document.querySelector('.bars').contains(e.target)) {
        setOpenMenu(false)
    }
    })
  }, [openMenu])
  
  return (
    <header ref={header} className={`px-10 z-[99999] flex items-center justify-between duration-100 w-full ${position ? '!py-3 duration-100 fixed bg-white shadow-md' : 'relative bg-transparent py-5 shadow-none'} top-0`}>
      <div className="logo text-blueHover text-2xl font-black">L</div>
      <div className="links">
        <ul className="hidden md:flex gap-5 text-sm uppercase font-medium">
          <li className={`relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'home' ? 'before:w-full' : 'before:w-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a href="#home">Home</a></li>
          <li className={`relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'about' ? 'before:w-full' : 'before:w-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a href="#about" >About</a></li>
          <li className={`relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'resume' ? 'before:w-full' : 'before:w-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a href="#resume">Resume</a></li>
          <li className={`relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'skills' ? 'before:w-full' : 'before:w-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a href="#skills" >Skills</a></li>
          <li className={`relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'portfolio' ? 'before:w-full' : 'before:w-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a href="#portfolio">Portfolio</a></li>
          <li className={`relative before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'contact' ? 'before:w-full' : 'before:w-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a href="#contact">Contact</a></li>
        </ul>
        <div className="mobile-links block md:hidden">
          <FontAwesomeIcon icon={faBars} onClick={() => setOpenMenu(true)} size="lg" className="bars cursor-pointer" />
          <div className={`link-section p-5 min-h-screen w-[40%] fixed top-0  duration-300 bg-white z-50 ${openMenu === true ? 'right-0' : '-right-96 !shadow-none'}`}>
          <div className="close w-fit ml-auto">
            <FontAwesomeIcon icon={faClose} onClick={() => setOpenMenu(false)} size="lg" className="text-red-500 duration-200 hover:rotate-180 cursor-pointer" />
          </div>
          <ul className="mobile flex flex-col gap-5  text-sm uppercase font-medium ">
          <li className={`relative py-2 duration-200 hover:pl-2 before:absolute before:-bottom-2 before:left-0 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'home' ? 'before:w-full pl-2' : 'before:w-0 pl-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a className=" inline-block w-full" href="#home">Home</a></li>
          <li className={`relative py-2 duration-200 hover:pl-2 before:absolute before:-bottom-2 before:left-0 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'about' ? 'before:w-full pl-2' : 'before:w-0 pl-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a className=" inline-block w-full" href="#about" >About</a></li>
          <li className={`relative py-2 duration-200 hover:pl-2 before:absolute before:-bottom-2 before:left-0 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'resume' ? 'before:w-full pl-2' : 'before:w-0 pl-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a className=" inline-block w-full" href="#resume">Resume</a></li>
          <li className={`relative py-2 duration-200 hover:pl-2 before:absolute before:-bottom-2 before:left-0 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'skills' ? 'before:w-full pl-2' : 'before:w-0 pl-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a className=" inline-block w-full" href="#skills" >Skills</a></li>
          <li className={`relative py-2 duration-200 hover:pl-2 before:absolute before:-bottom-2 before:left-0 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'portfolio' ? 'before:w-full pl-2' : 'before:w-0 pl-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a className=" inline-block w-full" href="#portfolio">Portfolio</a></li>
          <li className={`relative py-2 duration-200 hover:pl-2 before:absolute before:-bottom-2 before:left-0 before:bg-gradient-to-br before:from-blueHover before:to-violetHover ${activeSection === 'contact' ? 'before:w-full pl-2' : 'before:w-0 pl-0'} before:duration-200 hover:before:w-full before:h-0.5`}><a className=" inline-block w-full" href="#contact">Contact</a></li>
        </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header