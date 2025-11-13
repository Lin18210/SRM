import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    date: '',
    services: [],
    customMessage: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckbox = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '3d3a905d-49fd-47fa-9319-85f4dbcf863e',
          name: formData.fullName,
          business: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          services: formData.services.join(', '),
          message: formData.customMessage,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          fullName: '',
          businessName: '',
          email: '',
          phone: '',
          date: '',
          services: [],
          customMessage: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Form */}
          <div className="bg-white p-8 rounded-lg">
            <div className="space-y-6">
              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <p className="text-green-800 text-sm">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">Oops! Something went wrong. Please try again.</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Name <span className="text-red-500">(required)</span>
                </label>
                <p className="text-xs text-gray-500 mb-2">Full Name</p>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Email <span className="text-red-500">(required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-3">
                  Required Service
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes('Business Photography')}
                      onChange={() => handleCheckbox('Business Photography')}
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">Business Photography</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes('Business Videography')}
                      onChange={() => handleCheckbox('Business Videography')}
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">Business Videography</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes('Marketing')}
                      onChange={() => handleCheckbox('Marketing')}
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">Marketing</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services.includes('Customize your service')}
                      onChange={() => handleCheckbox('Customize your service')}
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-700">Customize your service.</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Let's tailor our services to your brand to get the exact results you want.
                </label>
                <textarea
                  name="customMessage"
                  value={formData.customMessage}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-400 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-8 py-3 bg-white border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="hidden md:block">
            <div className="top-8">
              <img
                src="../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/alcohol_01.jpg"
                alt="Food Photography"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center text-sm text-gray-700">
          <p className="font-semibold mb-2">Setup Instructions:</p>
          <p>1. Sign up at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">web3forms.com</a></p>
          <p>2. Get your access key and replace 'YOUR_ACCESS_KEY_HERE' in the code</p>
          <p>3. Your email will receive all form submissions</p>
        </div>
      </div>
    </div>
  );
}