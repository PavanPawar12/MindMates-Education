import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            We are dedicated to providing high-quality educational resources 
            to help learners of all levels succeed. Join our community and 
            take your learning journey to the next level.
          </p>
        </div>

        {/* Signup Form */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Sign Up for Updates</h2>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className=" bg-white  px-4 py-2 rounded w-full sm:w-auto flex-1 text-black"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
          <div className="flex gap-4 text-lg">
            <a href="https://www.facebook.com/profile.php?id=61578992529124" className="hover:text-white"><FaFacebookF /></a>
            <a href="https://x.com/" className="hover:text-white"><FaTwitter /></a>
            <a href="https://www.instagram.com/pavan_pawar431122/" className="hover:text-white"><FaInstagram /></a>
            <a href="linkedin.com/in/pavan-pawar-312631286" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Education Portal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
