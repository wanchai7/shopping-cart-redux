import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductForm from '../components/ProductForm.jsx';

const Home = () => {
  const { products, selectedCategory } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-3/4">
        <h1 className="text-4xl font-bold mb-6">Our Products</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
              <figure>
                <img src={product.imageUrl || 'https://picsum.photos/400/225'} alt={product.name} className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-lg font-semibold">${product.price}</p>
                <p>In Stock: {product.quantity}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/4">
        <h1 className="text-4xl font-bold mb-6">Add Product</h1>
        <ProductForm />
      </div>
    </div>
  );
};

export default Home;