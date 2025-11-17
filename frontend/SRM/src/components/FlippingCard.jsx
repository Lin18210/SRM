import React from "react";

export default function FlipCard({ image, title, details }) {
  return (
    <div className="w-full max-w-lg perspective:[1000px]">
      <div className="relative w-full h-[480px] duration-700 transform-3d hover:transform-[rotateY(180deg)]">
        
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-gray-900 border-b border-yellow-500">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-gray-900 text-white p-6 rounded-xl transform-[rotateY(180deg)] backface-hidden border-b border-yellow-500 flex flex-col items-center justify-center gap-3
">
            <h3 className="font-bold text-4xl">{title}</h3><br />
            <p className="text-lg text-center leading-relaxed whitespace-pre-line">
                {details}
            </p>
        </div>
      </div>
    </div>
  );
}
