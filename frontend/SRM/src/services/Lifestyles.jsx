import React from 'react'

const Lifestyles = () => {
  const pricingPlans = [
    {
      name: 'Ambiance Starter',
      price: '฿10,000',
      period: 'per session',
      description: 'Perfect for small businesses starting their visual storytelling.',
      highlights: '1–2 areas • Up to 2 hours',
      features: [
        '20–25 high-quality, professionally edited images with retouching, color correction, and lighting adjustments',
        'Dedicated photographer ensures optimal composition, focus, and brand-appropriate style',
        'Includes basic styling and guidance to highlight your unique space',
        'Delivered ready for social media, websites, and marketing campaigns',
        'Ideal for cafés, studios, shops, or offices aiming to attract customers through visual storytelling'
      ],
      popular: false,
      buttonText: 'Book Now'
    },
    {
      name: 'The Full Experience',
      price: '฿18,000',
      period: 'per session',
      description: 'Comprehensive coverage for establishing your brand presence.',
      highlights: 'Full interior & exterior • Up to 4 hours',
      features: [
        '25–40 high-quality, professionally edited images + 5 staff portraits',
        'Premium retouching and advanced color correction applied to all images',
        'Dedicated creative team handles composition, lighting, and brand storytelling',
        'Captures customer experience, staff interactions, and business environment',
        'Delivered ready for branding, marketing campaigns, and social media',
        'Optional add-ons: extra locations, short social media clips, drone shots',
        'Ideal for businesses seeking a complete visual library for branding and marketing'
      ],
      popular: true,
      buttonText: 'Book Now'
    },
    {
      name: 'Ultimate Brand Story',
      price: '฿30,000',
      period: 'per session',
      description: 'Premium production for brands wanting a complete visual identity.',
      highlights: 'Full-location shoot • Up to 8 hours',
      features: [
        '45–60 high-quality, professionally edited images + 1 short lifestyle video (60 seconds)',
        'Premium retouching, advanced color correction, and optional motion graphics',
        'Fully dedicated creative team assigned to manage entire production from planning to delivery',
        'Multiple angles, cinematic compositions, and storytelling that reflect your brand values',
        'Optional add-ons included: drone shots, motion graphics, multiple locations',
        'Priority scheduling and express delivery for premium clients',
        'Delivered fully optimized for social media, website, and marketing campaigns',
        'Perfect for brands wanting to present a premium image online and offline'
      ],
      popular: false,
      buttonText: 'Book Now'
    }
  ]

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="font-serif text-4xl md:text-6xl text-gray-900 tracking-wide uppercase mb-4">
          Lifestyle & Interior Photography
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Showcase your space, atmosphere, and brand story through inviting, high-quality photography that connects emotionally with your audience.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 transition transform hover:shadow-2xl ${
              plan.popular
                ? 'bg-[#fbf6ec] border-2 border-[#d4a11c] scale-105 shadow-xl'
                : 'bg-white border border-gray-200 shadow-md hover:shadow-lg'
            }`}
          >
            {plan.popular && (
              <div className="text-center mb-4">
                <span className="inline-block bg-[#d4a11c] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{plan.name}</h2>
            <div className="text-center mb-2">
              <span className="text-4xl font-bold text-[#d4a11c]">{plan.price}</span>
              <p className="text-gray-600 text-sm">{plan.period}</p>
            </div>

            <p className="text-sm font-semibold text-center mb-2 text-[#d4a11c]">{plan.highlights}</p>

            <p className="text-gray-700 text-sm text-center mb-8">{plan.description}</p>

            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition mb-8 ${
                plan.popular
                  ? 'bg-[#d4a11c] text-white hover:bg-[#c49a1a]'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              {plan.buttonText}
            </button>

            <ul className="space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <span className="text-[#d4a11c] font-bold mt-1 shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="max-w-6xl mx-auto text-center mt-16">
        <p className="text-gray-600 mb-4">Ready to tell your brand's story visually? Let's create stunning lifestyle imagery for your business.</p>
        <button className="text-[#d4a11c] font-semibold hover:underline">
          Contact us for custom packages →
        </button>
      </div>
    </div>
  )
}

export default Lifestyles