import React from 'react';
import { Scale } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="relative z-10 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Scale className="w-8 h-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-800">MedicoLegal</span>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-600">
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#courses" className="hover:text-blue-600 transition">Courses</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">
          Book Consultation
        </button>
      </div>
    </nav>
  );
}