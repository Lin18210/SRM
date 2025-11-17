import React from 'react'

const VideoSocial = () => {
  const plans = [
    {
      name: 'Shorts & Reels Starter',
      price: '฿18,000',
      highlights: '5 vertical videos • ≤30s each • half-day',
      features: [
        'Concept planning & light storyboarding',
        'Shot list preparation & moodboard alignment',
        'Half-day shoot (up to 4 hours) on-location',
        'Basic lighting & stabilization for social-optimized shots',
        'Basic color correction, sound balancing & simple motion graphics',
        'Deliverables: 5 vertical videos (≤30s) ready to post'
      ],
      popular: false,
      cta: 'Book Now'
    },
    {
      name: 'Monthly Video Flow',
      price: '฿35,000 / month',
      highlights: 'Up to 10 videos/month • 1 day shoot',
      features: [
        'Monthly content strategy meeting & storyboarding',
        'Script outlines and brand voice alignment',
        '1 day shoot (8 hours) with production team',
        'Premium color grading, motion graphics, subtitles & sound mix',
        'Captions and music synchronization included',
        'Deliverables: Up to 10 fully edited vertical social videos'
      ],
      popular: true,
      cta: 'Subscribe'
    },
    {
      name: 'Content Creator Plan',
      price: '฿70,000 / month',
      highlights: '2 days shoots • 10+ videos • priority',
      features: [
        'Creative direction, storyboarding & content calendar',
        'Scripting, shot-lists and influencer collaboration planning (optional)',
        '2 days shoots per month with creative team',
        'Cinematic color grading, motion graphics & platform-specific optimization',
        'Priority editing, extra revisions and express delivery',
        'Deliverables: 10+ professionally edited videos optimized for multi-platform'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="font-serif text-4xl md:text-6xl text-gray-900 tracking-wide uppercase mb-4">Social Media Video Production</h1>
        <p className="text-lg text-gray-600">Short, creative, and scroll-stopping videos tailored for Instagram, TikTok, Facebook, and more.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <div key={i} className={`rounded-2xl p-8 transition transform hover:shadow-2xl h-full flex flex-col ${p.popular ? 'bg-[#fbf6ec] border-2 border-[#d4a11c] scale-105 shadow-xl' : 'bg-white border border-gray-200 shadow-md'}`}>
            {p.popular && (
              <div className="text-center mb-4">
                <span className="inline-block bg-[#d4a11c] text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
            )}

            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{p.name}</h2>
            <div className="text-center mb-2">
              <span className="text-3xl md:text-4xl font-bold text-[#d4a11c]">{p.price}</span>
              <p className="text-gray-600 text-sm mt-1">{p.highlights}</p>
            </div>

            <ul className="mt-6 space-y-3 text-gray-700 text-sm flex-1">
              {p.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#d4a11c] font-bold mt-1 shrink-0">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <button className={`w-full py-3 rounded-lg font-semibold ${p.popular ? 'bg-[#d4a11c] text-white hover:bg-[#c49a1a]' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}>{p.cta}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoSocial
