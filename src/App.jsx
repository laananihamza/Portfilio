import { useState } from 'react'
import Header from './components/Header'
import './app.css'
import HomeSection from './components/homeSection';
function App() {
  const [section, setSection] = useState('home');
  window.addEventListener('scroll', () => {
    if (window.scrollY < 200) {
      setSection('home')
    }else {
      setSection(window?.location?.hash.replace('#', ''));
    }
    // if (window.scrollY < ) {

    // }
    
  })

  return (
    <>
      <Header activeSection={section} />
      <HomeSection />
      <div className="min-h-[100vh] w-96"></div>
      <div id='about'>Aboutttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt</div>
      <div className="min-h-[200vh] w-96"></div>
    </>
  )
}

export default App
 