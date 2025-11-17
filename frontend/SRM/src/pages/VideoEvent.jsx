import React from 'react'

const VideoEvent = () => {
  const plans = [
    {
      name: 'Essential Event Reel',
      price: '฿35,000',
      highlights: 'Up to 6 hours • 2–3 min recap',
      features: [
        'Brief consultation to define key moments & brand goals',
        'Shot list for event coverage',
        'Up to 6 hours of event filming by a dedicated videographer',
        'Coverage of main highlights: speakers, crowd, branding shots',
        '1 short recap video (≈2–3 mins), basic color correction & audio balance',
        'Free copyright-safe song + logo intro/outro — delivered web/social ready'
      ],
      popular: false,
      cta: 'Book Now'
    },
    {
      name: 'Event Story Package',
      price: '฿45,000',
      highlights: 'Up to 8 hours • main video + socials',
      features: [
        'Script/shot list development and location logistics',
        'Captured by a dedicated production team for multiple angles',
        'Up to 8 hours coverage with one camera operator',
        '1 main video (2–3 mins) + 2 short social clips (15–30s)',
        'Premium color grading, audio mix, and basic motion graphics',
        'Free copyright-safe song + logo intro/outro — optimized delivery'
      ],
      popular: true,
      cta: 'Book Now'
    },
    {
      name: 'Full Event Film',
      price: '฿90,000',
      highlights: '2 days • highlight film + socials • 4K/HDR',
      features: [
        'Full creative direction: storyboarding & multi-location planning',
        '2 days full event coverage with creative production crew',
        'Drone or specialty shots (if required), interviews & testimonials',
        '1 highlight film (2–5 mins) + 3 social cuts, cinematic color grading',
        '4K/HDR output, full audio mix, motion graphics and lower-thirds',
        'Priority scheduling, express delivery, free copyright-safe song'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="font-serif text-4xl md:text-6xl text-gray-900 tracking-wide uppercase mb-4">Event Videography</h1>
        <p className="text-lg text-gray-600">Dynamic video coverage that captures emotion, atmosphere, and brand storytelling from your events.</p>
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

export default VideoEvent
