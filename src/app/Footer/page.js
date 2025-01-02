'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      setMessage('Something went wrong! Please try again.');
    }
  };

  return (
    <div>
      {/* Subscription Section */}
      <section id="subscribe" className="py-10 px-4 bg-gray-100">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Subscribe for Freebies!</h3>
          <p className="text-gray-600 mb-6">
            Enter your email to receive exclusive updates and a 15% OFF coupon code.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg mb-4"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold w-full"
            >
              Subscribe Now
            </button>
          </form>
          {message && (
            <div className="mt-4 text-gray-800 bg-gray-200 p-3 rounded-lg">
              {message}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 YourLogo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
