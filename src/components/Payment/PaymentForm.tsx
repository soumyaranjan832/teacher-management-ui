'use client';
import { useState } from 'react';

export default function PaymentForm() {
  const [formData, setFormData] = useState({ name: '', amount: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.amount) {
      setError('All fields are required.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', amount: '' });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Payment Details</h2>

      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your name"
          aria-label="Name"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="amount" className="block text-sm font-medium">Amount</label>
        <input
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter amount"
          aria-label="Amount"
          type="number"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">Payment submitted successfully!</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Submit Payment'}
      </button>
    </form>
  );
}
