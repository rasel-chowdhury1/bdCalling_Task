"use client"
import { useState } from "react";
import Banner from "./Banner";

const SetPassword: React.FC = () => { 

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
        <div>
            <Banner/>
            <div className="max-w-xl mx-auto p-8 mt-6 mb-20 bg-white border border-gray-200 rounded-lg">
          <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Set New Password</h1>
          
          <form onSubmit={handleSubmit}>
    
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter New Password"
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
                  src="https://dashboard.codeparrot.ai/api/assets/Z1bxj-4ZL_Fz8l3c" 
                  alt="toggle password visibility"
                  width={29.12}
                  height={29.12}
                  className=""
                />
              </button>
            </div>
    
            <div className="relative mb-6">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="Enter Confirm Password"
                placeholder="Confirm Password"
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
                  src="https://dashboard.codeparrot.ai/api/assets/Z1bxj-4ZL_Fz8l3c" 
                  alt="toggle password visibility"
                  width={29.12}
                  height={29.12}
                />
              </button>
            </div>
    
            <button 
              type="submit" 
              className="w-full py-5 bg-orange-500 text-white rounded-full text-lg font-semibold mb-4"
            >
              Create Account
            </button>
    
          </form>
        </div>
        </div>
    )
}

export default SetPassword;