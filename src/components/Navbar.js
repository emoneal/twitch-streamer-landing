import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setHideNavbar(true);
        } else {
          // Scrolling up
          setHideNavbar(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full bg-gray-900 text-gray-300 px-4 py-4 shadow-md z-10 transition-transform duration-300 ${
        hideNavbar ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-purple-500">
          PixelCafeVT
        </a>
        <div className="space-x-4">
          <a onClick={() => smoothScroll('stream')} className="hover:text-purple-300 cursor-pointer">
            Stream
          </a>
          <a onClick={() => smoothScroll('bio')} className="hover:text-purple-300 cursor-pointer">
            About
          </a>
          <a onClick={() => smoothScroll('schedule')} className="hover:text-purple-300 cursor-pointer">
            Schedule
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
