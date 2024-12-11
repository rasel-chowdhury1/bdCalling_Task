"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Checkout() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlePlaceOrder = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };
    return (
        <div className="w-5/6 mx-auto">
            <div className=" grid md:grid-cols-3 gap-6">
                {/* Billing Information */}
                <div className="md:col-span-2 bg-white p-6 mb-20">
                    <h2 className="text-2xl font-bold mb-6">Billing Information</h2>
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">First name</label>
                            <input
                                type="text"
                                placeholder="Your first name"
                                className="w-full border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Last name</label>
                            <input
                                type="text"
                                placeholder="Your last name"
                                className="w-full border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Company name <span>(optional)</span></label>
                            <input
                                type="text"
                                placeholder="Your last name"
                                className="w-full border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>
                        <div className="md:col-span-3">
                            <label className="block text-sm font-medium mb-1">Street Address</label>
                            <input
                                type="text"
                                placeholder="Street Address"
                                className="w-full border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Country / Region</label>
                            <select
                                className="w-full border border-gray-300 rounded-lg p-2 my-2"
                            >
                                <option>Select</option>
                                <option>USA</option>
                                <option>Canada</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">States</label>
                            <select
                                className=" border border-gray-300 rounded-lg p-2 my-2"
                            >
                                <option>Select</option>
                                <option>California</option>
                                <option>New York</option>
                            </select>
                        </div>
                        <br/>
                        
                    </form>
                    <div className='w-full grid md:grid-cols-2 gap-6 my-2'>
                    <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Phone</label>
                            <input
                                type="text"
                                placeholder="Phone number"
                                className="w-full border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                    <div className="flex justify-between mb-4">
                        <div className="flex items-center gap-4">
                        <div className="w-16 h-16 relative">
                        <Image
                            src="/assets/Product.png"
                            alt="Freezer"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                        </div>
                            <span>Freezer x1</span>
                        </div>
                        <span>$14.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg mb-4">
                        <span>Total</span>
                        <span>$84.00</span>
                    </div>

                    <h3 className="text-lg font-bold mb-4">Payment Method</h3>
                    <div className="flex items-center gap-2 mb-4">
                        <input type="radio" id="cod" name="payment" className="w-5 h-5" />
                        <label htmlFor="cod">Cash on Delivery</label>
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                        <input type="radio" id="paypal" name="payment" className="w-5 h-5" />
                        <label htmlFor="paypal">Paypal</label>
                    </div>

                    <button onClick={handlePlaceOrder} className="bg-orange-500 text-white w-full py-2 rounded-full hover:bg-orange-600">
                        Place Order
                    </button>
                </div>
            </div>

            {/* Order Success Modal */}
{isModalVisible && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="relative bg-white rounded-lg shadow-lg p-6 w-[350px] h-[350px] text-center">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
      >
        ✕
      </button>

      <div className="text-green-500 flex justify-center text-4xl mb-4">
        <Image
          src="/assets/rightIcon.png"
          alt="rigth icon"
          width={61}
          height={61}
        />
      </div>
      <h2 className="text-xl font-bold mb-6 ">Order Successfully</h2>
      <p className="text-gray-600 mb-4 border-t-2 pt-4">
        If you want to track your order, download our app from your app store.
      </p>

      <div className="flex flex-col items-center gap-2">
        <h2 className="font-bold text-lg text-center">Download App</h2>
        <div className="flex flex-row items-center gap-2">
          <Image
            src="/assets/QrCode.png"
            alt="QR Code"
            width={76}
            height={76}
          />
          <div className="space-y-2">
            <a href="#" className="block">
              <Image
                src="/assets/playStore.png"
                alt="Google Play Store"
                width={110}
                height={40}
              />
            </a>
            <a href="#" className="block">
              <Image
                src="/assets/appStore.png"
                alt="Apple App Store"
                width={110}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

        </div>
    );
};
