import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    countryCode: '+66',
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
          phone: `${formData.countryCode} ${formData.phone}`,
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
          countryCode: '+66',
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
  <div className="min-h-screen bg-[#e8f0ff] flex items-center justify-center p-6">
    <div className="bg-white w-full max-w-3xl p-10 rounded-xl shadow-sm">

      {/* Title */}
      <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">
        Get In Touch
      </h2>

      {/* Status Messages */}
      {status === "success" && (
        <div className="text-green-600 text-sm mb-4 text-center">
          Thanks for submitting!
        </div>
      )}

      {status === "error" && (
        <div className="text-red-600 text-sm mb-4 text-center">
          Something went wrong. Please try again.
        </div>
      )}

      {/* Form */}
      <div className="space-y-6">

        {/* Row 1 — First/Business Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="First Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#e4e7ff] rounded-lg text-sm placeholder-gray-600 focus:outline-none"
          />

          <input
            type="text"
            name="businessName"
            placeholder="Last Name"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#e4e7ff] rounded-lg text-sm placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* Row 2 — Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#e4e7ff] rounded-lg text-sm placeholder-gray-600 focus:outline-none"
          />

          {/* Phone Input Group */}
          <div className="grid grid-cols-3 gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="col-span-1 px-4 py-3 bg-[#e4e7ff] rounded-lg text-sm focus:outline-none"
            >
              <option value="+66">TH +66</option>
              <option value="+65">SG +65</option>
              <option value="+60">MY +60</option>
              <option value="+95">MM +95</option>
              <option value="+1">US +1</option>
              <option value="+44">GB +44</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="col-span-2 px-4 py-3 bg-[#e4e7ff] rounded-lg text-sm placeholder-gray-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#e4e7ff] rounded-lg text-sm focus:outline-none"
        />

        {/* Services (checkboxes) */}
        <div className="space-y-3">
          <label className="text-sm text-gray-700 font-medium">Required Service</label>

          {[
            "Business Photography",
            "Business Videography",
            "Marketing",
            "Customize your service"
          ].map((service) => (
            <label key={service} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleCheckbox(service)}
                className="w-4 h-4"
              />
              <span className="text-sm">{service}</span>
            </label>
          ))}
        </div>

        {/* Message */}
        <textarea
          name="customMessage"
          placeholder="Type your message here"
          value={formData.customMessage}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 bg-[#cfd7ff] rounded-lg text-sm placeholder-gray-600 focus:outline-none resize-none"
        />

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg shadow-sm transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>

      </div>
    </div>
  </div>
);


}