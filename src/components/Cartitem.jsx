import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/carts/actionTypes";
import { addQuantity, removeQuantity } from "../redux/products/action";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        // ลบสินค้าออกจากตะกร้า
        dispatch(removeFromCart(item.id));
        // คืนจำนวนสินค้ากลับไปยัง Stock (หน้า Home)
        dispatch(addQuantity(item.id, item.quantity));
    };

    const handleIncrease = () => {
        // เพิ่มจำนวนสินค้าในตะกร้า
        dispatch(increaseQuantity(item.id));
        // ตัดสต็อกสินค้า (หน้า Home)
        dispatch(removeQuantity(item.id));
    };

    const handleDecrease = () => {
        // ลดจำนวนสินค้าในตะกร้า
        dispatch(decreaseQuantity(item.id));
        // คืนสินค้า 1 ชิ้นกลับไปยัง Stock (หน้า Home)
        dispatch(addQuantity(item.id, 1));
    };

    return (
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
            {/* Image */}
            <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50 border border-gray-200">
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Details */}
            <div className="flex-grow flex flex-col gap-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-gray-800 text-lg line-clamp-1">{item.title}</h3>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">{item.category}</p>
                    </div>
                    <button
                        onClick={handleRemove}
                        className="btn btn-ghost btn-xs text-gray-400 hover:text-red-500"
                        aria-label="Remove item"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-between items-end mt-2">
                    <div className="text-indigo-600 font-bold text-lg">
                        ${item.price}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-200">
                        <button
                            onClick={handleDecrease}
                            className="btn btn-xs btn-ghost btn-square text-gray-600 hover:bg-white hover:shadow-sm"
                        >
                            -
                        </button>
                        <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                        <button
                            onClick={handleIncrease}
                            className="btn btn-xs btn-ghost btn-square text-gray-600 hover:bg-white hover:shadow-sm"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
