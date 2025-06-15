import { useState } from 'react';
import { Link } from 'react-router';
import Logo from './Logo';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navbar from './Navbar';
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header
      className="
        flex items-center justify-between px-4 md:px-10 h-20 relative bg-black text-white
      "
    >
      <Logo />
      <Navbar 
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
      <div className='flex items-center md:hidden gap-4'>
        <Link
          to="/weather"
          className="bg-blue-500 hover:bg-blue-700 max-w-36 transition px-6 py-3 rounded-full text-cebter md:inline w-auto"
        >
          Login
        </Link>
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes size={22} />
          ) : (
            <FaBars size={22} />
          )}
        </button>
      </div>
      
    </header>
  )
}

export default Header
