import { useState } from 'react'
import Header from './components/Header'
import './app.css'
import HomeSection from './components/homeSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import AboutSection from './components/aboutSection';
function App() {
  const [section, setSection] = useState('home');
  const [toTop, setToTop] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY < 200) {
      setSection('home')
    }else {
      setSection(window?.location?.hash.replace('#', ''));
    }
    if (window.scrollY > 300 ) {
      setToTop(true)
    }else {
      setToTop(false)
    }
    
  })

  const scrollToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
    <div className={`scroll-to-top fixed duration-300 z-[999] hover:scale-150 cursor-pointer ${toTop ? 'bottom-5 delay-0' :  '-bottom-20 delay-500'}  right-5 border-2 border-blue-500 rounded-full py-1.5 px-3 text-blueHover`} onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} className={` duration-500 ${toTop ? 'rotate-0' : 'rotate-180' }`} /></div>
    {/* <div className={`scroll-to-top fixed duration-[1s] hover:scale-150 cursor-pointer ${toTop ? 'bottom-5' :  '-bottom-20 down'}  right-5 border-2 border-blue-500 rounded-full py-1.5 px-3 text-blueHover`} onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} /></div> */}
      <Header activeSection={section} />
      <HomeSection />
      <AboutSection />
    </>
  )
}

export default App
 