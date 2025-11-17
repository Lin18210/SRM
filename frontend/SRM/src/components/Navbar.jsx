import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      setUser(null);
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

   // A reusable style for our interactive links to keep the code clean
  const linkStyles = "relative text-base text-gray-300 hover:text-yellow-400 group transition-all duration-300 ease-in-out transform hover:scale-110";
  const underlineStyles = "absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-center";

  return (
    <nav className='sticky top-0 w-full bg-black bg-opacity-80 backdrop-blur-sm shadow-lg z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'> {/* Added a fixed height */}
          
          {/* Logo - Styled to match the branding */}
          <Link to="/" className="text-2xl font-serif text-yellow-500 hover:text-yellow-400 transition-colors">
            Social Republic Media
          </Link>
          
          {/* Navigation pages */}
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
      <li className="group/photo relative">
        <div className="hover:text-yellow-400 cursor-pointer transition flex items-center justify-between">
          Photography
          <span className="text-xs ml-2"></span>
        </div>
        
        {/* Nested submenu for Photography - with bridge to prevent hover gap */}
        <div className="absolute left-full top-0 -ml-2 pt-0 hidden group-hover/photo:block">
          {/* Invisible bridge to maintain hover */}
          <div className="absolute left-0 top-0 w-4 h-full"></div>
          
          <div className="bg-black bg-opacity-90 text-white p-4 rounded-lg shadow-xl w-56 ml-2">
            <ul className="space-y-2">
              <li>
                <Link to="/services/Product" className="hover:text-yellow-400 block transition text-sm">
                  Product Photography
                </Link>
              </li>
              <li>
                <Link to="/services/Lifestyles" className="hover:text-yellow-400 block transition text-sm">
                  Lifestyle & Interior Photography
                </Link>
              </li>
              <li>
                <Link to="/services/Food" className="hover:text-yellow-400 block transition text-sm">
                  Food & Beverage Photography
                </Link>
              </li>
              <li>
                <Link to="/services/Event" className="hover:text-yellow-400 block transition text-sm">
                  Event Photography
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>

                {/* Other services */}
                <li>
                  <Link to="/services/Video" className="hover:text-yellow-400 block transition">
                    Video Production
                  </Link>
                </li>

                <li>
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

          {/* Login and Register */}
          <div className='flex items-center space-x-6 text-sm tracking-wider'>

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;