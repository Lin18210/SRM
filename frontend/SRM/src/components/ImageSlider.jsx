import React, { useState, useEffect } from 'react';
import slideOne from '../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/alcohol_01.jpg';
import slideTwo from '../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/cocktail_02.jpg';
import slideThree from '../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/coffee_03.jpg';
import slideFour from '../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/smoothie_05.jpg';
import slideFive from '../../assets/Drinks & Cocktail-20251112T095416Z-1-001/Drinks & Cocktail/wine_04.jpg';

const ImageSlider = () => {
  const images = [slideOne, slideTwo, slideThree, slideFour, slideFive];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden h-[800px]">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="w-full h-[800px] object-contain shrink-0 bg-gray-900"
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
