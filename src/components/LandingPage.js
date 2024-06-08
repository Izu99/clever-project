import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/LandingPage.css';
import hero from '../images/hero-image.png';

const LandingPage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1200, easing: 'ease-out-back', once: true });
    
    // Scroll event listener
    const handleScroll = () => {
      const h2 = document.querySelector('.landingpage h2');
      if (window.scrollY > 0) {
        h2.classList.add('italic');
      } else {
        h2.classList.remove('italic');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='landingpage'>
      <h2 
        className='text-white text-uppercase text-center' 
        data-aos="fade-up"
        data-aos-once="true"
      >
        tech-savvy pals,<br/> always ready to<br /> sprinkle a bit of magic
      </h2>
      <p 
        className='rotated'
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-once="true"
      >
        We are
      </p>
      <div className="image mt-auto">
        <img src={hero} alt="Hero" />
      </div>
    </div>
  );
}

export default LandingPage;
