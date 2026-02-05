import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { FcGoogle } from 'react-icons/fc'; 
import { FaApple } from 'react-icons/fa';   

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    
    // Here you would normally validate the user.
    // Since we want to go to the dashboard:
    navigate("/dashboard"); // This sends the user to the dashboard route
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4">
      
      {/* --- Logo Section --- */}
      <div className="mb-10 text-center">
        <Link to="/" className="flex items-center justify-center gap-2">
          <div className="bg-[#E44232] p-1.5 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
            </svg>
          </div>
          <span className="text-[#E44232] text-2xl font-bold tracking-tight">todoist</span>
        </Link>
      </div>

      <div className="w-full max-w-[400px]">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Log in</h1>

        {/* --- Social Login Buttons --- */}
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2.5 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all">
            <FcGoogle size={20} /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2.5 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all">
            <FaApple size={20} /> Continue with Apple
          </button>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200"></span></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400">OR</span></div>
        </div>

        {/* --- Login Form with onSubmit --- */}
        <form className="space-y-5" onSubmit={handleSubmit}> 
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              required
              placeholder="Enter your email..." 
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              placeholder="Enter your password..." 
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#E44232] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#c3392b] transition-all shadow-md shadow-red-100"
          >
            Log in
          </button>
        </form>

        <div className="mt-6 text-sm text-center">
          <a href="#" className="text-gray-600 underline hover:text-black">Forgot your password?</a>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm text-gray-600">
          Don't have an account? <Link to="/register" className="text-[#E44232] font-bold hover:underline">Sign up</Link>
        </div>
      </div>
      
      {/* --- Simple Footer Links --- */}
      <div className="mt-12 text-[12px] text-gray-400 flex gap-4">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
      </div>
    </div>
  );
};

export default Login;