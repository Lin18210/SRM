import React from 'react'

const Product = () => {
  const pricingPlans = [
    {
      name: 'Basic Boost',
      price: '฿9,000',
      period: 'per session',
      description: 'Perfect for small businesses starting their online presence.',
      highlights: '6 products • Up to 2 hours',
      features: [
        '12–18 professionally edited images (2–3 angles per product)',
        'Dedicated photographer for clean, consistent, visually appealing shots',
        'Basic retouching, color correction, and lighting enhancement',
        'Optional prop styling and lifestyle setup for depth and warmth',
        'Optional in-studio shoot available',
        'Ready-to-use files for e-commerce, websites, and social media',
        'Fast, hassle-free process'
      ],
      popular: false,
      buttonText: 'Book Now'
    },
    {
      name: 'Pro Pack',
      price: '฿18,000',
      period: 'per session',
      description: 'For growing businesses ready to elevate their brand visuals.',
      highlights: '10 products • Up to 4 hours',
      features: [
        '40–50 premium-quality edited images (3–4 angles per product)',
        '5 lifestyle shots showing products in real-world scenarios',
        'Advanced color correction, detailed retouching, and shadow refinement',
        'Creative team collaboration for visually striking compositions',
        'Multiple angles, hero shots, and storytelling compositions for ads',
        'Optional add-ons at discounted rates: extra products, social teaser clips, or styling upgrades',
        'Optional in-studio shoot available',
        'Fully optimized for social media and e-commerce marketing'
      ],
      popular: true,
      buttonText: 'Book Now'
    },
    {
      name: 'Complete Collection',
      price: '฿30,000',
      period: 'per session',
      description: 'Ultimate package for brands wanting comprehensive visual storytelling.',
      highlights: '20 products • Up to 8 hours',
      features: [
        '60–80 premium-quality images (3–4 angles per product)',
        '5 lifestyle shots + 1 short product video (30 seconds)',
        'Advanced color correction, detailed retouching, shadow refinement, and professional post-production',
        'Full creative team ensuring cohesive brand storytelling',
        'Hero shots, lifestyle compositions, and styled product storytelling',
        'Pre-shoot creative consultation and concept planning',
        'Optional add-ons included: extra products, location coverage, drone footage, or additional videos',
        'Priority scheduling, express delivery, and dedicated support',
        'All edited images and selected raw files upon request',
        'Fully optimized for advertising campaigns, social media, and print media'
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
          Product Photography
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Capture your products in their best light with clean, high-quality imagery that enhances your brand's credibility and drives sales.
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
              className={`w-full py-3 px-6 rounded-lg font-semibold transition mb-8 cursor-pointer ${
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
        <p className="text-gray-600 mb-4">Ready to showcase your products beautifully? Let's create stunning visuals for your brand.</p>
        <button className="text-[#d4a11c] font-semibold hover:underline">
          Contact us for custom packages →
        </button>
      </div>
    </div>
  )
}

export default Product