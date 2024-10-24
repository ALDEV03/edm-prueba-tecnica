import React from "react";

function Products({ data }) {
  return (
    <div className="flex flex-col mt-12">
      {data.map((product) => (
        <div
          className={`flex flex-col p-4 gap-7 lg:flex-row lg:gap-0 lg:p-0 ${
            product.row_reverse ? "lg:flex-row-reverse" : "flex-row"
          } md:flex-row `}
          key={product.id}
        >
          <div className="flex-1 aspect-w-1 aspect-h-1">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8 text-center">
            <div className="hidden flex-col items-center gap-3 lg:flex">
              <img
                src={product.thumb}
                alt={product.name}
                className="w-40 h-40 object-contain"
              />
              <hr className="w-8 bg-[#A3A3A3]" />
            </div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <a href="#">{`> VER MAS`}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
