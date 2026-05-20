import Link from "next/link";
import React from "react";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 border-t border-gray-200 mt-5">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Rentify</h2>
          <p className="text-sm text-gray-500 mb-4">
            Easy and affordable car rentals.
          </p>

          <div className="flex gap-4 text-xl text-gray-600">
            <a href="#" className="hover:text-blue-650 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-sky-500 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/all-cars" className="hover:underline">
                Explore Cars
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:underline">
                Login/Register
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +880 12345678
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@rentify.com
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-8 pt-4 border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} Rentify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
