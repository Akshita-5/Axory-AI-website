import React from "react";
import { Link } from "wouter";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logoImage from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#1b172b] text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 px-6 py-12">
          {/* Company Section with Logo */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="Company Logo" 
                className="h-18 w-36"
              />
            </Link>
            <p className="text-gray-300 text-sm mb-2">Where AI powers Authenticity</p>
            <p className="text-gray-300 text-sm">
              Innovation Centre, MIT Rd, Eshwar Nagar, Manipal, Karnataka 576104
            </p>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-[#4FBABB] text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li className="transition-all hover:translate-x-1 hover:text-[#f39c12] cursor-pointer">
                <a href="#about" className="text-gray-300 hover:text-[#f39c12] transition-colors">About Us</a>
              </li>
              <li className="transition-all hover:translate-x-1 hover:text-[#f39c12] cursor-pointer">
                <a href="#contact" className="text-gray-300 hover:text-[#f39c12] transition-colors">Contact Us</a>
              </li>
              <li className="transition-all hover:translate-x-1 hover:text-[#f39c12] cursor-pointer">
                <a href="#" className="text-gray-300 hover:text-[#f39c12] transition-colors">Book a Call</a>
              </li>
              <li className="transition-all hover:translate-x-1 hover:text-[#f39c12] cursor-pointer">
                <a href="#" className="text-gray-300 hover:text-[#f39c12] transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-[#4FBABB] text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">
              ✉️ <a href="mailto:axorytech@gmail.com" className="hover:text-[#f39c12]">axorytech@gmail.com</a>
            </p>
            <p className="text-gray-300 mb-2">
              ✉️ <a href="mailto:tarini@axory.ai" className="hover:text-[#f39c12]">tarini@axory.ai</a>
            </p>
            <p className="text-gray-300 mb-4">
              ✉️ <a href="mailto:akshita@axory.tech" className="hover:text-[#f39c12]">akshita@axory.tech</a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-[#f39c12] transition transform hover:scale-110">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-[#f39c12] transition transform hover:scale-110">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/axory.ai/" className="text-white hover:text-[#f39c12] transition transform hover:scale-110">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/axory-ai" className="text-white hover:text-[#f39c12] transition transform hover:scale-110">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h2 className="text-[#4FBABB] text-lg font-bold mb-2">Want to Share Personal Experience?</h2>
            <p className="text-gray-300 text-sm mb-4">Drop us your mail ID. We'll reach out to you soon!</p>
            <div className="flex flex-col md:flex-row">
              <input 
                type="email" 
                id="email-input" 
                placeholder="Your email" 
                className="p-2 rounded-md focus:outline-none w-full md:flex-1 mb-2 md:mb-0 md:mr-2"
              />
              <button
                className="bg-[#4FBABB] text-white font-semibold py-2 px-4 rounded transition transform hover:scale-105"
                onClick={() => {
                  const email = (document.getElementById("email-input") as HTMLInputElement).value;
                  if (email) {
                    const formUrl = `https://docs.google.com/forms/d/17UQFSfNEcYWqckrMCkxLI6FuFfQeprOWYhVUqFAVDZk/viewform?usp=pp_url&entry.1234567890=${encodeURIComponent(email)}`;
                    window.open(formUrl, "_blank");
                  } else {
                    alert("Please enter your email before sending.");
                  }
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-[#5d528c] py-4 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © <a href="#" className="text-[#f39c12]">AXORY AI</a>, All Rights Reserved.
            </p>
            <ul className="flex space-x-6 mt-4 md:mt-0">
              <li className="text-gray-400 text-sm hover:text-[#f39c12] cursor-pointer">Home</li>
              <li className="text-gray-400 text-sm hover:text-[#f39c12] cursor-pointer">Cookies</li>
              <li className="text-gray-400 text-sm hover:text-[#f39c12] cursor-pointer">Help</li>
              <li className="text-gray-400 text-sm hover:text-[#f39c12] cursor-pointer">FAQs</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}