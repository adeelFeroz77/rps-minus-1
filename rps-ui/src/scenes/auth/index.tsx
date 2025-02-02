import { Lock, Mail, User } from 'lucide-react';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8">
        {/* Tab Switching */}
        <div className="flex mb-8 bg-slate-100 rounded-lg p-1">
          <button 
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
              isLogin 
                ? "bg-blue-600 text-white" 
                : "text-slate-600 hover:bg-slate-200"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
              !isLogin 
                ? "bg-blue-600 text-white" 
                : "text-slate-600 hover:bg-slate-200"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-800">Username</label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  className="w-full bg-white border border-slate-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                  placeholder="Choose a username" 
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-800">Email</label>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="email" 
                className="w-full bg-white border border-slate-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                placeholder="Enter your email" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-800">Password</label>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="password" 
                className="w-full bg-white border border-slate-200 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                placeholder="Enter your password" 
              />
            </div>
          </div>

          {isLogin && (
            <div className="flex justify-end">
              <Link 
                to="/forgot-password" 
                className="text-sm text-blue-600 hover:text-blue-500 transition-colors"
              >
                Forgot Password?
              </Link>
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2.5 rounded-lg transition-colors font-semibold"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-600">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-slate-700 font-medium">
              <Mail className="w-5 h-5" />
              <span>Google</span>
            </button>
          </div>
        </div>

        {/* Terms */}
        <p className="mt-8 text-center text-sm text-slate-600">
          By continuing, you agree to our{" "}
          <Link 
            to="/terms" 
            className="text-blue-600 hover:text-blue-500 transition-colors font-medium"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link 
            to="/privacy" 
            className="text-blue-600 hover:text-blue-500 transition-colors font-medium"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AuthPage;
