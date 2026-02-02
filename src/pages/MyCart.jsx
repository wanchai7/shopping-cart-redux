import React from "react";
import { useSelector, useDispatch } from "react-redux";

const MyCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleGoToHome = () => {
    dispatch({ type: "Home" });
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">My Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-2xl mb-4">Your cart is empty.</p>
          <button onClick={handleGoToHome} className="btn btn-primary">
            Shop Now
          </button>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt={item.name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="btn btn-error btn-xs"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-right mt-6">
            <button onClick={handleGoToHome} className="btn btn-primary">
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
