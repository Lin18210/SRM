import React from 'react'

const Social = () => {
  const pricingPlans = [
    {
      name: 'The Starter',
      price: '฿30,000',
      period: '/month',
      description: 'Perfect for small businesses building consistent online presence.',
      highlights: '2 platforms • 12 posts/month',
      features: [
        'Manage 2 platforms (e.g., Instagram & Facebook)',
        '12 posts/month (mix of photos, carousels, short clips, and stories)',
        'Basic content strategy and monthly content calendar',
        'Professional photo & video content with basic retouching and color correction',
        'Dedicated social media manager to handle posting, captions, and community replies',
        'Hashtag research and caption writing for better visibility',
        '1 monthly catch-up call for feedback and strategy alignment',
        'Monthly performance report showing reach, engagement, and audience growth',
        'Delivered ready for social media marketing, helping small businesses build consistent online presence'
      ],
      popular: false,
      buttonText: 'Get Started'
    },
    {
      name: 'The Growth Engine',
      price: '฿45,000',
      period: '/month',
      description: 'For growing businesses ready to scale their social presence.',
      highlights: '3 platforms • 20 posts/month',
      features: [
        'Manage 3 platforms (e.g., Instagram, Facebook, TikTok)',
        '20 posts/month (mix of high-quality photos, carousels, Reels/TikToks, and stories)',
        'Advanced content strategy tailored to your target audience',
        'Dedicated creative team to handle posting, captions, and community replies',
        'Includes premium retouching, color correction, and on-brand visuals',
        'SEO-friendly captions + trend-based hashtags for higher engagement',
        '2 catch-up calls/month to review insights and optimize campaigns',
        'Short-form video creation (up to 4/month) for Reels or TikTok',
        'Monthly performance & insights report with recommendations',
        'Delivered ready for brand growth, engagement boosting, and marketing campaigns'
      ],
      popular: true,
      buttonText: 'Get Started'
    },
    {
      name: 'The Brand Builder',
      price: '฿55,000',
      period: '/month',
      description: 'Premium package for brands wanting to dominate social media.',
      highlights: '4 platforms • 30 posts/month',
      features: [
        'Manage 4 platforms (Instagram, Facebook, TikTok, LinkedIn or YouTube)',
        '30 posts/month including photos, Reels, TikToks, short video campaigns, and stories',
        'Full social media strategy with audience research, campaign calendar, and creative direction',
        'Full dedicated team (strategist, photographer, videographer, editor, and manager)',
        'Premium retouching, advanced color grading, and video post-production for every visual',
        'Weekly catch-up calls to refine content and discuss performance',
        'Ad campaign setup & management (Meta Ads / TikTok Ads) — ad spend separate',
        'Competitor benchmarking, audience analysis, and engagement optimization',
        'Priority scheduling, express delivery, and premium creative direction for all campaigns',
        'Delivered fully optimized for social media, helping brands scale and dominate online'
      ],
      popular: false,
      buttonText: 'Get Started'
    }
  ]

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="font-serif text-4xl md:text-6xl text-gray-900 tracking-wide uppercase mb-4">
          Social Media Marketing
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Let our team plan, create, and manage your content so you can focus on your business. We build online presence that converts followers into loyal customers.
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
        <p className="text-gray-600 mb-4">Ready to grow your social media presence and engage your audience? Let's build your online empire.</p>
        <button className="text-[#d4a11c] font-semibold hover:underline">
          Contact us for a social media consultation →
        </button>
      </div>
    </div>
  )
}

export default Social