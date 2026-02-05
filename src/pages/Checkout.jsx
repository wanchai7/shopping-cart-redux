import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/carts/actionTypes";

const Checkout = () => {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.carts || []);
    const totalPrice = carts.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleBackToCart = () => {
        dispatch({ type: "CART" });
    };

    const handleConfirmPayment = () => {
        // Logic confirm payment
        setShowSuccessModal(true);
    }

    const handleCloseModal = () => {
        setShowSuccessModal(false);
        dispatch(clearCart());
        dispatch({ type: "HOME" });
    }

    return (
        <div className="container mx-auto py-12 px-6 max-w-2xl relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white text-center">
                    <h1 className="text-2xl font-bold mb-1">Payment</h1>
                    <p className="opacity-90 text-sm">Scan QR Code to Pay</p>
                </div>

                <div className="p-8 flex flex-col items-center gap-8">
                    {/* Total Price Display */}
                    <div className="text-center">
                        <p className="text-gray-500 font-medium mb-1">Total Amount</p>
                        <h2 className="text-4xl font-extrabold text-indigo-600">${totalPrice}</h2>
                    </div>

                    {/* QR Code Placeholder */}
                    <div className="bg-white p-4 rounded-xl shadow-inner border border-gray-200">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                            alt="Payment QR Code"
                            className="w-64 h-64 object-contain"
                        />
                    </div>

                    <p className="text-gray-400 text-sm max-w-xs text-center">
                        Please open your banking app and scan this QR code to complete your purchase.
                    </p>

                    {/* Actions */}
                    <div className="w-full grid grid-cols-2 gap-4 mt-4">
                        <button
                            onClick={handleBackToCart}
                            className="btn btn-outline border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400"
                        >
                            Back to Cart
                        </button>
                        <button
                            onClick={handleConfirmPayment}
                            className="btn btn-primary"
                        >
                            Confirm Payment
                        </button>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 transform transition-all scale-100 animate-bounce-in">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">จ่ายเงินสำเร็จ</h3>
                            <p className="text-gray-500 mb-6">
                                ขอบคุณที่ใช้บริการของเรา
                            </p>
                            <button
                                onClick={handleCloseModal}
                                className="btn btn-success w-full text-white font-bold"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;
