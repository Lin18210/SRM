import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Logo & Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-serif text-yellow-500 mb-6">Social Republic Media</h3>
            <p className="text-sm text-gray-400 mb-4">Capturing your brand's story through professional photography and videography.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-yellow-500" />
                <a href="mailto:srm@infinitymedia1.net" className="hover:text-yellow-400 transition text-sm">
                  srm@infinitymedia1.net
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Follow Us</h4>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/social_republic_media/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-yellow-400 transition text-sm"
              >
                <FaInstagram className="text-lg" />
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61581699719512&sk=about&_rdc=1&_rdr#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-yellow-400 transition text-sm"
              >
                <FaFacebook className="text-lg" />
                Facebook
              </a>
              <a 
                href="https://www.tiktok.com/@socialrepublicmedia?_t=zs-9100tqfeqoy&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-yellow-400 transition text-sm"
              >
                <FaTiktok className="text-lg" />
                TikTok
              </a>
            </div>
          </div>

          {/* Column 3: Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/Product" className="hover:text-yellow-400 transition">Product Photography</Link></li>
              <li><Link to="/services/Lifestyles" className="hover:text-yellow-400 transition">Lifestyle & Interior</Link></li>
              <li><Link to="/services/Food" className="hover:text-yellow-400 transition">Food & Beverage</Link></li>
              <li><Link to="/services/Event" className="hover:text-yellow-400 transition">Event Photography</Link></li>
              <li><Link to="/services/VideoCor" className="hover:text-yellow-400 transition">Corporate Video</Link></li>
              <li><Link to="/services/VideoEvent" className="hover:text-yellow-400 transition">Event Video</Link></li>
              <li><Link to="/services/VideoSocial" className="hover:text-yellow-400 transition">Social Media Video</Link></li>
              <li><Link to="/services/Social" className="hover:text-yellow-400 transition">Social Media Marketing</Link></li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Location</h4>
            <iframe
              title="Social Republic Media Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5836334696505!2d100.55382081143256!3d13.743639686591731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee66b26b361%3A0x6e67ed7475173d32!2sHYDE%20Sukhumvit%2011!5e0!3m2!1sen!2sth!4v1763368560533!5m2!1sen!2sth"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 Social Republic Media. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
            <Link to="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
