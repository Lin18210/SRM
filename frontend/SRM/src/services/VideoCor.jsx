import React from 'react'

const VideoCor = () => {
  const plans = [
    {
      name: 'Starter Story',
      price: 'From ฿30,000',
      highlights: '1 filming day • 1–2 min video',
      features: [
        'Light scripting & story planning (1 session)',
        'Shot list and on-location planning',
        '1 filming day (up to 6 hours) with professional lighting',
        '1 short brand video (1–2 mins), basic color grading',
        '1 revision round — delivered ready for web & social'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'The Brand Builder',
      price: 'From ฿45,000',
      highlights: '1 filming day • 2–3 min video + vertical cuts',
      features: [
        'Script & concept development, storyboard',
        'Multi-location planning (1–2 locations)',
        'Dedicated production team, professional b-rolls',
        '1 main corporate video (2–3 mins) + 2 vertical clips',
        'Premium grading, motion graphics & 1 revision round'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Executive Edge',
      price: 'From ฿90,000',
      highlights: '2 filming days • 2 premium videos',
      features: [
        'Full creative direction, scriptwriting & storyboards',
        'Location scouting and full production crew (2 days)',
        'Multi-scene coverage: interviews, testimonials, lifestyle',
        '2 premium videos (3–5 mins) + 3 social cuts, 4K HDR',
        'Motion graphics, multilingual subtitles, 2 revision rounds'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="font-serif text-4xl md:text-6xl text-gray-900 tracking-wide uppercase mb-4">Corporate & Brand Videography</h1>
        <p className="text-lg text-gray-600">Polished storytelling that brings your brand's identity and purpose to life.</p>
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

export default VideoCor
