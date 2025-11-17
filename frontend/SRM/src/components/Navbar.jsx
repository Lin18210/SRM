import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      setUser(null);
      navigate("/");
      setIsOpen(false);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleNavClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsPhotoOpen(false);
    setIsVideoOpen(false);
  };

   // A reusable style for our interactive links to keep the code clean
  const linkStyles = "relative text-base text-gray-300 hover:text-yellow-400 group transition-all duration-300 ease-in-out transform hover:scale-110";
  const underlineStyles = "absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center";

  return (
    <nav className='sticky top-0 w-full bg-black bg-opacity-80 backdrop-blur-sm shadow-lg z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          
          {/* Logo - Styled to match the branding */}
          <Link to="/" onClick={handleNavClick} className="text-2xl font-serif text-yellow-500 hover:text-yellow-400 transition-colors">
            <img src="../assets/Logo/Copy of Logo Social Republic media .png" alt="Logo of Social Republic Media" className="h-45 w-auto"/>
          </Link>
          
          {/* Desktop Navigation pages */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8 text-sm tracking-wider">
              <Link to="/" className={linkStyles}>Home <span className={underlineStyles}></span></Link>
              <Link to="/gallery" className={linkStyles}>Gallery <span className={underlineStyles}></span></Link>
              
              {/* ===== SERVICES DROPDOWN ===== */}
              <div className="relative group">
                <button className={`${linkStyles} flex items-center`}>
                  Services
                  <span className={underlineStyles}></span>
                </button>

                {/* DROPDOWN WRAPPER - Added padding-top to bridge the gap */}
                <div className="absolute left-0 pt-4 hidden group-hover:block">
                <div className="bg-black bg-opacity-90 text-white p-6 rounded-lg shadow-xl w-64">
                  <ul className="space-y-3">
                    {/* Photography with nested submenu */}
                    <li className="group/photo relative pb-2 border-b border-gray-700 last:border-b-0">
                      <div className="hover:text-yellow-400 cursor-pointer transition flex items-center justify-between">
                        Photography
                        <span className="text-xs ml-2"><FaArrowRight/></span>
                      </div>
        
                  {/* Nested submenu for Photography - with bridge to prevent hover gap */}
                  <div className="absolute left-full top-0 -ml-2 pt-0 hidden group-hover/photo:block">
                    {/* Invisible bridge to maintain hover */}
                    <div className="absolute left-0 top-0 w-4 h-full"></div>
                    
                    <div className="bg-black bg-opacity-90 text-white p-4 rounded-lg shadow-xl w-56 ml-2">
                        <ul className="space-y-0">
                          <li className="py-2 border-b border-gray-700 last:border-b-0">
                            <Link to="/services/Product" className="hover:text-yellow-400 block transition text-sm">
                              Product Photography
                            </Link>
                          </li>
                          <li className="py-2 border-b border-gray-700 last:border-b-0">
                            <Link to="/services/Lifestyles" className="hover:text-yellow-400 block transition text-sm">
                              Lifestyle & Interior Photography
                            </Link>
                          </li>
                          <li className="py-2 border-b border-gray-700 last:border-b-0">
                            <Link to="/services/Food" className="hover:text-yellow-400 block transition text-sm">
                              Food & Beverage Photography
                            </Link>
                          </li>
                          <li className="py-2 last:border-b-0">
                            <Link to="/services/Event" className="hover:text-yellow-400 block transition text-sm">
                              Event Photography
                            </Link>
                          </li>
                        </ul>
                      </div>
                  </div>
                </li>

                {/* Other services */}
                <li className="group/video relative pb-2 border-b border-gray-700 last:border-b-0">
                  <div className="hover:text-yellow-400 cursor-pointer transition flex items-center justify-between">
                    Video Production
                    <span className="text-xs ml-2"><FaArrowRight/></span>
                  </div>
                  
                  {/* Nested submenu for Video Production - with bridge to prevent hover gap */}
                  <div className="absolute left-full top-0 -ml-2 pt-0 hidden group-hover/video:block">
                    {/* Invisible bridge to maintain hover */}
                    <div className="absolute left-0 top-0 w-4 h-full"></div>
                    
                    <div className="bg-black bg-opacity-90 text-white p-4 rounded-lg shadow-xl w-56 ml-2">
                      <ul className="space-y-0">
                        <li className="py-2 border-b border-gray-700 last:border-b-0">
                          <Link to="/services/VideoCor" className="hover:text-yellow-400 block transition text-sm">
                            Corporate & Brand Videography
                          </Link>
                        </li>
                        <li className="py-2 border-b border-gray-700 last:border-b-0">
                          <Link to="/services/VideoEvent" className="hover:text-yellow-400 block transition text-sm">
                            Event Videography
                          </Link>
                        </li>
                        <li className="py-2 last:border-b-0">
                          <Link to="/services/VideoSocial" className="hover:text-yellow-400 block transition text-sm">
                            Social Media Video Production
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="py-2 border-b border-gray-700/30 last:border-b-0">
                  <Link to="/services/Social" className="hover:text-yellow-400 block transition">
                    Social Media Marketing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

              <Link to="/blog" className={linkStyles}>Blog <span className={underlineStyles}></span></Link>
              <Link to="/contact" className={linkStyles}>Contact <span className={underlineStyles}></span></Link>
              <Link to="/faq" className={linkStyles}>FAQ <span className={underlineStyles}></span></Link>
          </div>

          {/* Desktop Login and Register */}
          <div className='hidden md:flex items-center space-x-6 text-sm tracking-wider'>
            {user ? (
              <button onClick={handleLogout} className='bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 font-semibold transition-colors'>
                Logout
              </button>
            ) : (
              <div className='flex items-center space-x-4'>
                <Link to="/login" className='bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 font-semibold transition-colors'>
                  Login
                </Link>
                <Link to="/register" className='text-gray-300 hover:text-white transition-colors'>
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-yellow-500 hover:text-yellow-400 text-2xl transition-colors'
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className='md:hidden bg-black bg-opacity-95 pb-6'>
            <div className='flex flex-col space-y-4 px-4 py-4 border-t border-gray-700'>
              
              {/* Home */}
              <Link to="/" onClick={handleNavClick} className='text-gray-300 hover:text-yellow-400 transition py-2 border-b border-gray-700'>
                Home
              </Link>

              {/* Gallery */}
              <Link to="/gallery" onClick={handleNavClick} className='text-gray-300 hover:text-yellow-400 transition py-2 border-b border-gray-700'>
                Gallery
              </Link>

              {/* Services Dropdown */}
              <div className='border-b border-gray-700'>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className='w-full text-left text-gray-300 hover:text-yellow-400 transition py-2 flex items-center justify-between'
                >
                  Services
                  <span className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}>
                    <FaArrowRight />
                  </span>
                </button>

                {/* Services Submenu */}
                {isServicesOpen && (
                  <div className='bg-gray-900 rounded mt-2 p-4 space-y-3 ml-4 border-l border-gray-700'>
                    
                    {/* Photography */}
                    <div>
                      <button
                        onClick={() => setIsPhotoOpen(!isPhotoOpen)}
                        className='w-full text-left text-gray-400 hover:text-yellow-400 transition py-2 flex items-center justify-between text-sm'
                      >
                        Photography
                        <span className={`transition-transform text-xs ${isPhotoOpen ? 'rotate-180' : ''}`}>
                          <FaArrowRight />
                        </span>
                      </button>

                      {/* Photography Submenu */}
                      {isPhotoOpen && (
                        <div className='ml-4 space-y-2 mt-2 border-l border-gray-600 pl-3'>
                          <Link 
                            to="/services/Product" 
                            onClick={handleNavClick}
                            className='block text-gray-400 hover:text-yellow-400 transition text-sm py-1'
                          >
                            Product Photography
                          </Link>
                          <Link 
                            to="/services/Lifestyles" 
                            onClick={handleNavClick}
                            className='block text-gray-400 hover:text-yellow-400 transition text-sm py-1'
                          >
                            Lifestyle & Interior
                          </Link>
                          <Link 
                            to="/services/Food" 
                            onClick={handleNavClick}
                            className='block text-gray-400 hover:text-yellow-400 transition text-sm py-1'
                          >
                            Food & Beverage
                          </Link>
                          <Link 
                            to="/services/Event" 
                            onClick={handleNavClick}
                            className='block text-gray-400 hover:text-yellow-400 transition text-sm py-1'
                          >
                            Event Photography
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Video Production */}
                    <div>
                      <button
                        onClick={() => setIsVideoOpen(!isVideoOpen)}
                        className='w-full text-left text-gray-400 hover:text-yellow-400 transition py-2 flex items-center justify-between text-sm'
                      >
                        Video Production
                        <span className={`transition-transform text-xs ${isVideoOpen ? 'rotate-180' : ''}`}>
                          <FaArrowRight />
                        </span>
                      </button>

                      {/* Video Submenu */}
                      {isVideoOpen && (
                        <div className='ml-4 space-y-2 mt-2 border-l border-gray-600 pl-3'>
                          <Link 
                            to="/services/VideoCor" 
                            onClick={handleNavClick}
                            className='block text-gray-400 hover:text-yellow-400 transition text-sm py-1'
                          >
                            Corporate & Brand
                          </Link>
                          <Link 
                            to="/services/VideoEvent" 
                            onClick={handleNavClick}
                            className='block text-gray-400 hover:text-yellow-400 transition text-sm py-1'
                          >
                            Event Videography
                          </Link>
                          <Link 
                            to="/services/VideoSocial" 
                            onClick={handleNavClick}
                            className='block text-gray-400 hover:text-yellow-400 transition text-sm py-1'
                          >
                            Social Media Video
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Social Media Marketing */}
                    <Link 
                      to="/services/Social" 
                      onClick={handleNavClick}
                      className='block text-gray-400 hover:text-yellow-400 transition py-2 text-sm'
                    >
                      Social Media Marketing
                    </Link>
                  </div>
                )}
              </div>

              {/* Blog */}
              <Link to="/blog" onClick={handleNavClick} className='text-gray-300 hover:text-yellow-400 transition py-2 border-b border-gray-700'>
                Blog
              </Link>

              {/* Contact */}
              <Link to="/contact" onClick={handleNavClick} className='text-gray-300 hover:text-yellow-400 transition py-2 border-b border-gray-700'>
                Contact
              </Link>

              {/* FAQ */}
              <Link to="/faq" onClick={handleNavClick} className='text-gray-300 hover:text-yellow-400 transition py-2 border-b border-gray-700'>
                FAQ
              </Link>

              {/* Mobile Auth Buttons */}
              <div className='pt-4 space-y-3 border-t border-gray-700'>
                {user ? (
                  <button 
                    onClick={handleLogout}
                    className='w-full bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 font-semibold transition-colors'
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link 
                      to="/login" 
                      onClick={handleNavClick}
                      className='block w-full text-center bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 font-semibold transition-colors'
                    >
                      Login
                    </Link>
                    <Link 
                      to="/register" 
                      onClick={handleNavClick}
                      className='block w-full text-center text-gray-300 border border-gray-600 px-4 py-2 rounded hover:text-yellow-400 hover:border-yellow-400 transition-colors'
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;