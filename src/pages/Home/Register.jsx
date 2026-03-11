import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiPhone, FiEye, FiEyeOff } from 'react-icons/fi';
import Logo from "../img/Logo.png"; // Adjust path as needed

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const brandRed = "#EF523E";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="p-8 pb-0 text-center">
          <div className="flex justify-center mb-4">
            <img src={Logo} alt="Shop Easy Logo" className="h-12 w-auto object-contain" />
          </div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">Create an Account</h2>
          <p className="text-gray-500 text-sm mt-2">Join Shop Easy for a seamless tech experience</p>
        </div>

        {/* Form Section */}
        <form className="p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Full Name */}
          <div className="relative">
            <FiUser className="absolute left-4 top-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Full Name"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 transition-all text-sm"
              style={{ "--tw-ring-color": brandRed }}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-4 top-4 text-gray-400" />
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 transition-all text-sm"
              style={{ "--tw-ring-color": brandRed }}
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <FiPhone className="absolute left-4 top-4 text-gray-400" />
            <input 
              type="tel" 
              placeholder="Phone Number"
              className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 transition-all text-sm"
              style={{ "--tw-ring-color": brandRed }}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-4 top-4 text-gray-400" />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password"
              className="w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-2 transition-all text-sm"
              style={{ "--tw-ring-color": brandRed }}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-3 px-1">
            <input 
              type="checkbox" 
              className="mt-1 rounded border-gray-300"
              style={{ accentColor: brandRed }}
            />
            <span className="text-xs text-gray-500 leading-tight">
              By registering, you agree to our <span className="underline font-medium">Terms of Service</span> and <span className="underline font-medium">Privacy Policy</span>.
            </span>
          </div>

          {/* Register Button */}
          <button 
            type="submit"
            className="w-full py-4 text-white font-bold rounded-xl shadow-lg transition-all active:scale-[0.98] hover:opacity-90 mt-2"
            style={{ backgroundColor: brandRed, boxShadow: `0 10px 20px -10px ${brandRed}66` }}
          >
            Create Account
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account? 
            <Link to="/login" className="font-bold ml-1" style={{ color: brandRed }}>
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;