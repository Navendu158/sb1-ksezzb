import React, { useState } from 'react';
import { CreditCard, Smartphone, ArrowLeft, Check } from 'lucide-react';

interface PaymentPageProps {
  courseTitle: string;
  price: number;
  onBack: () => void;
}

export default function PaymentPage({ courseTitle, price, onBack }: PaymentPageProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | null>(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setProcessing(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">Thank you for enrolling in {courseTitle}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Payment</h2>
        <p className="text-gray-600 mb-8">
          Course: {courseTitle} - ${price}
        </p>

        {!paymentMethod ? (
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => setPaymentMethod('card')}
              className="p-6 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-left"
            >
              <CreditCard className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Card Payment</h3>
              <p className="text-gray-600 text-sm">Pay using credit or debit card</p>
            </button>
            <button
              onClick={() => setPaymentMethod('upi')}
              className="p-6 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-left"
            >
              <Smartphone className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">UPI Payment</h3>
              <p className="text-gray-600 text-sm">Pay using UPI ID</p>
            </button>
          </div>
        ) : (
          <form onSubmit={handlePayment} className="space-y-6">
            {paymentMethod === 'card' ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123"
                      className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  UPI ID
                </label>
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="username@upi"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            )}
            <button
              type="submit"
              disabled={processing}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {processing ? 'Processing...' : `Pay $${price}`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}