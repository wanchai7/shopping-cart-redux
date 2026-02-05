import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/Cartitem";

const MyCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.carts || []);

  // Calculate distinct items count
  const distinctItemsCount = cartItems.length;

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div className="container mx-auto py-12 px-6 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
        Shopping Cart
        <span className="badge badge-lg badge-primary text-white">{distinctItemsCount} items</span>
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100 dashed-border">
          <div className="bg-white p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h2>
          <p className="text-gray-400 max-w-sm mx-auto">Looks like you haven't added any items to the cart yet.</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-grow space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                  <span className="font-bold text-gray-800">Total</span>
                  <span className="font-extrabold text-2xl text-indigo-600">${totalPrice}</span>
                </div>
              </div>

              <button
                onClick={() => dispatch({ type: "CHECKOUT" })}
                className="btn btn-primary w-full text-lg shadow-lg shadow-indigo-200">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
