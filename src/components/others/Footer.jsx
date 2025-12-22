import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-blue-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">rizEmp Market</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Licenses</a></li>
              <li><a href="#" className="hover:text-white">API Access</a></li>
              <li><a href="#" className="hover:text-white">Become a Partner</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Developers</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Community Forum</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Events</a></li>
              <li><a href="#" className="hover:text-white">Meetups</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">About rizEmp</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Do Not Sell Data</a></li>
              <li><a href="#" className="hover:text-white">Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Info */}
          <div className="text-sm text-gray-400">
            <p>© {new Date().getFullYear()} rizEmp Pvt Ltd. All rights reserved.</p>
            <p>Trademarks and brands are the property of their respective owners.</p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 text-gray-400 text-lg">
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaYoutube /></a>
            <a href="#" className="hover:text-white"><FaPinterestP /></a>
          </div>

          {/* Logo (Links to Login) */}
          <div>
            <a
              href="/login"
              className="flex items-center gap-2 text-white font-bold text-lg hover:text-blue-300 transition"
            >
              
              rizEmp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
