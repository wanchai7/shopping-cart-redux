import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="flex flex-col text-gray-600 h-full bg-white">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-100">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop";
          }}
        />
        <div className="absolute top-2 right-2 bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
          {product.category}
        </div>
      </div>

      <div className="px-1 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 min-h-[1.75rem] line-clamp-1">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mb-3 min-h-[3rem] line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-normal">
              Available: {product.available}
            </span>
            <span className="text-lg font-bold text-gray-800">
              ${product.price}
            </span>
          </div>

          <button className="bg-indigo-100 hover:bg-indigo-600 hover:text-white text-indigo-700 text-sm font-semibold py-2 px-6 rounded-lg transition-all w-fit">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
