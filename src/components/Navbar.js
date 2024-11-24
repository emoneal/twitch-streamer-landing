import React, { useEffect, useState } from 'react';
import Image from 'next/image'



const Navbar = ({ isMobile }) => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setHideNavbar(true);
        } else {
          setHideNavbar(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Define the smoothScroll function
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-gray-900 text-gray-300 px-4 py-4 shadow-md z-10 transition-transform duration-300 ${
        hideNavbar ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
      <a onClick={() => smoothScroll('#')} className="hover:text-purple-300 cursor-pointer">
        <Image src='/smallsitelogo.png' alt="Logo" width={150} height={40} onClick={() => smoothScroll('home')} />
        </a>
        <div className="space-x-4">
        <a onClick={() => smoothScroll('bio')} className="hover:text-purple-300 cursor-pointer">
            About
          </a>
          <a onClick={() => smoothScroll('schedule')} className="hover:text-purple-300 cursor-pointer">
            Schedule
          </a>
          {isMobile ? (
            // Render a link to your Twitch page when on mobile
            <a href="https://www.twitch.tv/pixelemii" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">
              Twitch
            </a>
          ) : (
            // Render a link to the stream section when not on mobile
            <a onClick={() => smoothScroll('stream')} className="hover:text-purple-300 cursor-pointer">
              Stream
            </a>
          )}
          <a onClick={() => smoothScroll('youtube')} className="hover:text-purple-300 cursor-pointer">
            YouTube
          </a>

          <a onClick={() => smoothScroll('top-clips')} className="hover:text-purple-300 cursor-pointer">
            Clips
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
