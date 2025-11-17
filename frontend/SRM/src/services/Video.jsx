import React from 'react'

const Video = () => {
  const videoPacks = [
    {
      category: 'Corporate & Brand Videography',
      categoryDesc: "Polished storytelling that brings your brand's identity and purpose to life.",
      plans: [
        {
          name: 'Starter Story',
          price: 'From ฿30,000',
          description: 'Perfect for startups introducing their story online.',
          sections: [
            {
              title: 'Pre-Production',
              items: [
                'Light scripting and story planning call (1 session)',
                'Shot list and on-location planning',
                'Brand tone and visual moodboard alignment'
              ]
            },
            {
              title: 'Production',
              items: [
                '1 filming day (up to 6 hours)',
                'Dedicated videographer with professional lighting and stabilization gear',
                'Direction and guidance during filming',
                'Captures authentic office moments, behind-the-scenes workflow, team introductions'
              ]
            },
            {
              title: 'Post-Production',
              items: [
                '1 short brand video (1–2 mins)',
                'Basic color grading, sound balancing, and logo intro/outro integration',
                '1 revision round',
                'Delivered ready for website, presentations, and social media'
              ]
            }
          ],
          popular: false
        },
        {
          name: 'The Brand Builder',
          price: 'From ฿45,000',
          description: 'Perfect for businesses expanding their brand presence.',
          sections: [
            {
              title: 'Pre-Production',
              items: [
                'Script and concept development tailored to your campaign',
                'Multi-location shoot planning (1–2 locations)',
                'Storyboard and brand tone consultation'
              ]
            },
            {
              title: 'Production',
              items: [
                '1 filming day (up to 8 hours) with a dedicated production team',
                'Professional lighting setups and b-rolls',
                'Coverage for both horizontal and vertical formats',
                'Includes dynamic b-rolls of workspace, team collaboration, product interactions'
              ]
            },
            {
              title: 'Post-Production',
              items: [
                '1 main corporate video (2–3 mins) + 2 short vertical clips',
                'Premium color grading, motion graphics, subtitles, and audio mixing',
                'Optional voice-over, drone shots, or express delivery',
                '1 revision round'
              ]
            }
          ],
          popular: true
        }
        ,
        {
          name: 'Executive Edge',
          price: 'From ฿90,000',
          description: 'Full-scale, cinematic production for leadership, exhibitions, and flagship campaigns.',
          sections: [
            {
              title: 'Pre-Production',
              items: [
                'Full creative direction, scriptwriting, and storyboard planning',
                'Strategic brand message consultation',
                'Location scouting and shoot schedule planning'
              ]
            },
            {
              title: 'Production',
              items: [
                '2 days of full-scale shoot',
                'Handled by a full dedicated production crew',
                'Multi-scene coverage (interviews, testimonials, lifestyle, team)',
                'Optional drone and cinematic b-rolls',
                'Showcases cinematic visuals of leadership interviews, team operations, brand spaces, and lifestyle sequences'
              ]
            },
            {
              title: 'Post-Production',
              items: [
                '2 premium corporate videos (3–5 mins) + 3 short social cuts',
                '4K HDR quality, cinematic color grading, and professional sound mixing',
                'Motion graphics, branded lower-thirds, and multilingual subtitles',
                'Priority editing and client consultation sessions',
                '2 revision rounds'
              ]
            }
          ],
          popular: false
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="font-serif text-4xl md:text-6xl text-gray-900 tracking-wide uppercase mb-4">
          Video Production
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Professional video storytelling designed to strengthen your brand, engage your audience, and communicate your message with cinematic impact.
        </p>
      </div>

      {/* Video Packages */}
      {videoPacks.map((pack, idx) => (
        <div key={idx} className="mb-20">
          <div className="max-w-6xl mx-auto mb-12 text-center">
            <h2 className="font-serif text-3xl md:text-5xl text-gray-900 tracking-wide uppercase mb-2">
              {pack.category}
            </h2>
            <p className="text-lg text-gray-600">{pack.categoryDesc}</p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {pack.plans.map((plan, planIdx) => (
              <div
                key={planIdx}
                className={`rounded-2xl p-8 transition transform hover:shadow-2xl ${
                  plan.popular
                    ? 'bg-[#fbf6ec] border-2 border-[#d4a11c] shadow-xl'
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

                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{plan.name}</h3>
                <p className="text-3xl font-bold text-[#d4a11c] text-center mb-4">{plan.price}</p>
                <p className="text-gray-700 text-sm text-center mb-8">{plan.description}</p>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition mb-8 ${
                    plan.popular
                      ? 'bg-[#d4a11c] text-white hover:bg-[#c49a1a]'
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  Get Started
                </button>

                <div className="space-y-6">
                  {plan.sections.map((section, secIdx) => (
                    <div key={secIdx}>
                      <h4 className="font-bold mb-3 text-[#d4a11c]">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <span className="text-[#d4a11c] font-bold mt-1 shrink-0">✓</span>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Footer CTA */}
      <div className="max-w-6xl mx-auto text-center mt-16">
        <p className="text-gray-600 mb-4">Ready to bring your brand story to life with professional video? Let's create something amazing.</p>
        <button className="text-[#d4a11c] font-semibold hover:underline">
          Contact us for custom video packages →
        </button>
      </div>
    </div>
  )
}

export default Video