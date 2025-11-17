import React from 'react'

const Event = () => {
  const pricingPlans = [
    {
      name: 'Essential Coverage',
      price: '฿25,000',
      period: 'per event',
      description: 'Perfect for small business gatherings and private events.',
      highlights: 'Up to 4 hours',
      features: [
        '80–100 high-quality images with basic retouching, lighting adjustment, and color correction',
        'Coverage focuses on key highlights — guest interactions, atmosphere, branding details, and stage moments',
        'Dedicated event photographer ensures professional capture',
        'Fast turnaround delivery ready for social media, press, and corporate reports',
        'Ideal for small business gatherings, product launches, or private events'
      ],
      popular: false,
      buttonText: 'Book Now'
    },
    {
      name: 'Corporate Highlight',
      price: '฿35,000',
      period: 'per event',
      description: 'Comprehensive coverage for brand activations and conferences.',
      highlights: 'Up to 8 hours',
      features: [
        '150+ professionally edited images with premium retouching and advanced color correction',
        'Includes behind-the-scenes shots, crowd engagement, speeches, branding, and décor',
        'Optional recap video (30s) to complement your photo set',
        'Delivered fully optimized for social media posts, websites, and promotional campaigns',
        'Add-ons available: drone footage, additional locations, or social media video clips',
        'Perfect for brand activations, conferences, or business openings'
      ],
      popular: true,
      buttonText: 'Book Now'
    },
    {
      name: 'The Prestige Package',
      price: '฿60,000',
      period: 'per event',
      description: 'Premium two-day coverage with complete creative team.',
      highlights: '2 days of coverage',
      features: [
        '200+ high-end images with premium retouching, advanced lighting adjustments, and cinematic color grading',
        'Includes highlight video (1–2 mins) with sound design, transitions, and logo animation',
        'Coverage includes preparation, speeches, performances, crowd moments, and premium branding shots',
        'Full dedicated creative team ensures cohesive storytelling',
        'Priority delivery and express post-production for premium clients',
        'Add-ons included: drone coverage, motion graphics, multiple event days',
        'Delivered fully optimized for marketing, PR campaigns, and digital platforms'
      ],
      popular: false,
      buttonText: 'Book Now'
    }
  ]

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="font-serif text-4xl md:text-6xl text-gray-900 tracking-wide uppercase mb-4">
          Event Photography
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Capture every key moment of your corporate or lifestyle events with clean, storytelling imagery that reflects your brand's energy and professionalism.
        </p>
        <div className="text-sm text-gray-700 mb-12 font-semibold">
          <p>We Cover: Corporate events • Brand launches • Conferences • Networking events • Gala dinners • Team-building events</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center mb-16">
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
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 mb-4">Ready to capture your event professionally? Let's create lasting visual memories.</p>
        <button className="text-[#d4a11c] font-semibold hover:underline">
          Contact us for custom packages →
        </button>
      </div>
    </div>
  )
}

export default Event