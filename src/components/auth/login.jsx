
import React from 'react'
import loginImage from '../../assets/login-image3.jpg';
import { useState } from 'react';
const Login = ({handleLogin}) => {  
      const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const submitHandler =(e)=>{  
        e.preventDefault()
         handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
 return (
    <div className="flex h-screen">
      {/* Left Side - Image & Text */}
      <div className="hidden md:flex w-1/2 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${loginImage})` }}>
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-3xl font-semibold">Riz<span className='text-4xl text-yellow-600'>EMp</span></h1>
          <p className="text-xl">Use Me TO manage Your Work </p>
          <p className="text-lg text-yellow-600">
       Makes Management Simple 
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-gradient-to-b from-black to-blue-900 text-white">
        <div className="w-80">
          <h2 className="text-3xl font-bold mb-6">Welcome  To RizEmp</h2>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm mb-1">Email address</label>
              <input required
              value={email}
              onChange={(e)=>{
         setEmail(e.target.value)
              }}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input required   value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
          }}
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a href="#" className="text-sm text-blue-400 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-900 to-black py-2 rounded-lg font-semibold border-1 border-gray-400 hover:opacity-90 hover:border-white"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
