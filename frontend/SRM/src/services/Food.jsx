import React from 'react'

const Food = () => {
  const pricingPlans = [
    {
      name: 'Taste Essentials',
      price: '฿9,000',
      period: 'per session',
      description: 'Perfect for restaurants starting their visual menu.',
      highlights: 'Up to 2 hours',
      features: [
        '15–25 high-quality, professionally edited images with retouching and color correction',
        'Dedicated photographer ensures visually appealing shots that boost customer appetite',
        'Includes basic prop styling and composition for menu updates or social media',
        'Delivered ready for web, social media, and promotional campaigns',
        'Perfect for cafés, restaurants, or bars updating their menu visuals'
      ],
      popular: false,
      buttonText: 'Book Now'
    },
    {
      name: 'Signature Spread',
      price: '฿18,000',
      period: 'per session',
      description: 'Comprehensive coverage for showcasing your menu.',
      highlights: 'Half-day shoot • Up to 4 hours',
      features: [
        '35–50 high-quality, professionally edited images + 2–3 styled hero shots',
        'Premium retouching, color correction, and multiple angles applied',
        'Creative team ensures styled setups, lighting, and composition that tell a story',
        'Showcase seasonal menus, promotions, or signature dishes',
        'Lifestyle elements included to show dishes in real-world scenarios',
        'Optional add-ons: extra dishes, social media clips, drone footage',
        'Delivered ready for menu campaigns, social media, and website promotion'
      ],
      popular: true,
      buttonText: 'Book Now'
    },
    {
      name: 'Culinary Experience',
      price: '฿30,000',
      period: 'per session',
      description: 'Premium production for major menu launches and rebrands.',
      highlights: 'Full-day shoot • Up to 8 hours',
      features: [
        '50–70 high-quality, professionally edited images + 3–5 styled hero shots + 1 short food video (10–15s)',
        'Advanced retouching, color correction, and video post-production included',
        'Full dedicated team ensures styled setups, lighting, and composition that tell a story',
        'Showcase seasonal menus, promotions, or signature dishes',
        'Interior/exterior and guest/staff lifestyle shots capture the full ambiance of your business',
        'Multiple angles, hero shots, and storytelling for premium campaigns',
        'Priority scheduling and express delivery available for premium clients',
        'Delivered fully optimized for social media, website, and advertising campaigns',
        'Optional add-ons: drone shots, motion graphics, extra location coverage'
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
          Food & Beverage Photography
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Tempting visuals that capture the texture, color, and artistry of your dishes and drinks.
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
        <p className="text-gray-600 mb-4">Ready to make your food and drinks irresistible? Let's create stunning visuals for your menu.</p>
        <button className="text-[#d4a11c] font-semibold hover:underline">
          Contact us for custom packages →
        </button>
      </div>
    </div>
  )
}

export default Food