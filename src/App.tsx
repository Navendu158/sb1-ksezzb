import React from 'react';
import { Gavel, BookOpen, Users, Phone, Scale } from 'lucide-react';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import Map from './components/Map';

function App() {
  const courses = [
    {
      title: "Medical Law Fundamentals",
      description: "Essential legal principles for healthcare professionals",
      price: 499,
      duration: "12 weeks",
      features: [
        "24 video lessons",
        "Case study analysis",
        "Legal document templates",
        "Expert consultation",
        "Certificate of completion"
      ]
    },
    {
      title: "Healthcare Compliance",
      description: "Comprehensive guide to medical regulations",
      price: 699,
      duration: "16 weeks",
      features: [
        "32 video lessons",
        "Regulatory updates",
        "Compliance toolkit",
        "Group workshops",
        "Professional certification"
      ]
    },
    {
      title: "Medical Ethics & Law",
      description: "Advanced course in healthcare ethics and legislation",
      price: 899,
      duration: "20 weeks",
      features: [
        "40 video lessons",
        "Ethics committee sessions",
        "Real case discussions",
        "Personal mentor",
        "International certification"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-8">
            Expert Medico-Legal Consultancy
          </h1>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Professional guidance at the intersection of medicine and law.
            Protecting healthcare professionals and ensuring legal compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition">
              Get Legal Advice
            </button>
            <button className="bg-blue-700 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-800 transition">
              View Courses
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Gavel className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Consultation</h3>
              <p className="text-gray-600">Expert advice on medical law and healthcare regulations.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Training</h3>
              <p className="text-gray-600">Specialized courses in medical law and compliance.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Case Management</h3>
              <p className="text-gray-600">Comprehensive support for medical legal cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Professional Courses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">contact@medicolegal.com</span>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" rows={4}></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
              <Map />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Scale className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold text-white">MedicoLegal</span>
              </div>
              <p>Expert guidance in medical law and healthcare compliance.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Legal Consultation</a></li>
                <li><a href="#" className="hover:text-white transition">Professional Training</a></li>
                <li><a href="#" className="hover:text-white transition">Case Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} MedicoLegal Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;