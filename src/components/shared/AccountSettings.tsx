"use client"
import { useState } from "react";


const AccountSettings: React.FC = () => {
    const [formData, setFormData] = useState({
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false
          });
        
          const [showPassword, setShowPassword] = useState(false);
          const [showConfirmPassword, setShowConfirmPassword] = useState(false);
        
          const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value, type, checked } = e.target;
            setFormData(prev => ({
              ...prev,
              [name]: type === 'checkbox' ? checked : value
            }));
          };
        
          const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            // Handle form submission logic here
          };
    return (
        <div className="">
            {/** Account Settings */}
            <div className="ml-4 border rounded-md mb-4">
                <div className="border-b">
                    <h3 className="font-poppins text-2xl font-medium leading-[150%] p-4">Account Settings</h3>
                </div>
                <div className="flex w-full flex-col md:flex-row items-center">
                    {/** form  */}
                    <div className="w-full md:w-2/3">
                    <form className="m-6">
                        <div>
                            <label className="block font-poppins leading-[150%] text-sm text-[#1A1A1A]">First name</label>
                            <input
                                type="text"
                                placeholder="Dianne"
                                className="w-full font-poppins text-lg  leading-[130%] border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>
                        <div>
                            <label className="block  font-poppins leading-[150%] text-sm text-[#1A1A1A] mb-1">Last name</label>
                            <input
                                type="text"
                                placeholder="Russell"
                                className="w-full font-poppins text-lg  leading-[130%] border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>

                        <div>
                            <label className="block  font-poppins leading-[150%] text-sm text-[#1A1A1A] mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="dianne.russell@gmail.com"
                                className="w-full font-poppins text-lg  leading-[130%] border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>
                        <div>
                            <label className="block  font-poppins leading-[150%] text-sm text-[#1A1A1A] mb-1">Phone</label>
                            <input
                                type="text"
                                placeholder="(603) 555-0123"
                                className="w-full font-poppins text-lg  leading-[130%] border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-[180px] px-2 py-2 my-6 font-poppins font-semibold bg-[#EA5326] text-white rounded-full text-base"
                            >
                            Save Changes
                            </button>
                        
                    </form>
                    </div>
                    {/** prifile image */}
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                        <div className="w-[220px] h-[220px] mb-5">
                            <img
                            src="/assets/dashboard/Profile.png"
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className=" px-2 py-2 my-2 font-poppins font-semibold  text-[#EA5326] border border-red-500 rounded-full text-base"
                            >
                            Chose Images
                            </button>
                    </div>
                </div>
            </div>
            {/** Billing Address */}
            <div className="ml-4 border rounded-md mb-4">
                <div className="border-b">
                    <h3 className="font-poppins text-2xl font-medium leading-[150%] p-4">Billing Address</h3>
                </div>
                <div className="flex w-full flex-col md:flex-row items-center">
                    {/** form  */}
                    <div className="w-full">
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-4 m-6 ">
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
                                className="w-full border border-gray-300 rounded-lg p-2 my-2"
                            >
                                <option>Select</option>
                                <option>California</option>
                                <option>New York</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Zip Code <span>(optional)</span></label>
                            <input
                                type="text"
                                placeholder="Your last name"
                                className="w-full border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>

                        
                        
                    </form>

                    <div className='flex w-full gap-2  mx-6'>
                       <div className="w-3/5">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>
                        <div className="2/5">
                            <label className="block text-sm font-medium mb-1">Phone</label>
                            <input
                                type="text"
                                placeholder="Phone number"
                                className="w-full border border-gray-300 rounded-lg p-2 my-2"
                            />
                        </div>
                    </div>
                    <button 
                            type="submit" 
                            className=" mx-6 w-[180px] px-2 py-2 my-6 font-poppins font-semibold bg-[#EA5326]  text-white rounded-full text-base"
                            >
                            Save Changes
                            </button>
                    </div>
                </div>
            </div>
            {/** Change Password */}
            <div className="ml-4 border rounded-md">
                <div className="border-b">
                    <h3 className="font-poppins text-2xl font-medium leading-[150%] p-4">Change Password</h3>
                </div>
                <div className="flex w-full flex-col md:flex-row items-center">
                    {/** form  */}
                    <div className="w-full m-6">
                    <form onSubmit={handleSubmit}>
                    <div className="relative mb-6">
                    <label className="block  font-poppins leading-[150%] text-sm text-[#1A1A1A] mb-1">Current Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-5 border border-gray-300 rounded-lg text-lg text-gray-600 focus:outline-none"
                />
                <button
                    type="button"
                    className="absolute right-5 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <img 
                    src="/assets/eye.png" 
                    alt="toggle password visibility"
                    width={29.12}
                    height={29.12}
                    className=""
                    />
                </button>
                </div>
    
            <div className="flex gap-2">
                <div className="relative mb-6 w-1/2">
                <label className="block  font-poppins leading-[150%] text-sm text-[#1A1A1A] mb-1">New Password </label>
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full p-5 border border-gray-300 rounded-lg text-lg text-gray-600 focus:outline-none"
                />
                <button
                    type="button"
                    className="absolute right-5 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <img 
                    src="/assets/eye.png" 
                    alt="toggle password visibility"
                    width={29.12}
                    height={29.12}
                    className=""
                    />
                </button>
                </div>
        
                <div className="relative mb-6 w-1/2">
                <label className="block  font-poppins leading-[150%] text-sm text-[#1A1A1A] mb-1">Confirm Password</label>
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full p-5 border border-gray-300 rounded-lg text-lg text-gray-600 focus:outline-none"
                />
                <button
                    type="button"
                    className="absolute right-5 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                    <img 
                    src="/assets/eye.png" 
                    alt="toggle password visibility"
                    width={29.12}
                    height={29.12}
                    />
                </button>
                </div>
            </div>
    
          </form>
                       <button 
                        type="submit" 
                        className=" mx-6 w-[180px] px-2 py-2 my-6 font-poppins font-semibold bg-[#EA5326]  text-white rounded-full text-base"
                        >
                        Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings;