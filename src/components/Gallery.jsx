import React from "react";

function Gallery({ images }) {
  return (
    <div className="flex flex-col items-center mt-20">
      <h3 className="text-sm font-light text-[#C7C8CA]">INSTAGRAM</h3>
      <h2 className="text-4xl font-normal">#ESPUFI</h2>
      <div className="w-3/4 grid grid-cols-2 md:grid-cols-3 lg:w-2/4 lg:grid-cols-3  gap-1 mt-4">
        {images.map((image, index) => (
          <div className="aspect-w-1 aspect-h-1" key={index}>
            <img
              key={index}
              src={image}
              alt={`Instagram ${index + 1}`}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
