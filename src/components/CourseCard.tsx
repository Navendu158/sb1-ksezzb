import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import PaymentPage from './PaymentPage';

interface CourseProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
}

export default function CourseCard({ title, description, price, duration, features }: CourseProps) {
  const [showPayment, setShowPayment] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-blue-100">{description}</p>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">${price}</span>
            <span className="text-gray-600 ml-2">{duration}</span>
          </div>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowPayment(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition"
          >
            Enroll Now
          </button>
        </div>
      </div>

      {showPayment && (
        <PaymentPage
          courseTitle={title}
          price={price}
          onBack={() => setShowPayment(false)}
        />
      )}
    </>
  );
}