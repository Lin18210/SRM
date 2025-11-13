import React, { useState } from 'react'

const slides = [
  {
    image: '../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/alcohol_02.jpg',
    title: 'Cocktail',
    description: 'Professional photography that captures the essence of your brand with stunning visual narratives.',
  },
  {
    image: '../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/bear_01.jpg',
    title: 'Business Videography',
    description: 'Cinematic storytelling that brings your business vision to life through compelling video content.',
  },
  {
    image: '../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/beverage_01.jpg',
    title: 'SEO-Friendly Visuals',
    description: 'Optimized visual content that enhances your online presence and drives organic traffic.',
  },
  {
    image: '../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/bottle_01.jpg',
    title: 'Brand Strategy',
    description: 'Strategic visual planning that aligns with your business goals and brand identity.',
  },
  {
    image: '../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/cafe_01.jpg',
    title: 'Creative Direction',
    description: 'Expert creative guidance that brings unique perspectives to every project.',
  },
]

const MultiCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Create infinite loop by duplicating slides
  const extendedSlides = [...slides, ...slides, ...slides]

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prev) => prev + 1)
      setTimeout(() => setIsAnimating(false), 600)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prev) => prev - 1)
      setTimeout(() => setIsAnimating(false), 600)
    }
  }

  // Reset position when reaching clone boundaries
  const handleTransitionEnd = () => {
    if (currentIndex >= slides.length * 2) {
      setCurrentIndex(slides.length)
    } else if (currentIndex <= 0) {
      setCurrentIndex(slides.length)
    }
  }

  return (
    <div className="relative w-full bg-black flex items-center justify-center px-4 py-12 overflow-hidden">
      <div className="max-w-9xl w-full">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 text-white text-2xl disabled:opacity-50"
          aria-label="Previous slide"
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 text-white text-2xl disabled:opacity-50"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Slides Container */}
        <div className="overflow-hidden px-12">
          <div 
            className="flex gap-6"
            style={{
              transform: `translateX(calc(-${currentIndex * (100 / 3 + 2)}%))`,
              transition: isAnimating ? 'transform 600ms ease-in-out' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={index}
                className="shrink-0 w-full md:w-[calc(33.333%-1rem)]"
              >
                <div className="relative h-[600px] rounded-lg overflow-hidden group cursor-pointer">
                  {/* Image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
                  
                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-3 tracking-tight">
                      {slide.title}
                    </h3>
                    <p className="text-base text-gray-200 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  setCurrentIndex(slides.length + index)
                  setTimeout(() => setIsAnimating(false), 600)
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                (currentIndex % slides.length) === index 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MultiCardSlider