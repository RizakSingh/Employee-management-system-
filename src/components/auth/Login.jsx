import React, { useContext, useState } from "react";
import loginImage from "../../assets/login-image3.jpg";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


const submitHandler = async (e) => {
  e.preventDefault();
  try {
    
    await login(email, password);
  } catch (err) {
    alert("Invalid credentials");
  } 
};
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${loginImage})` }}
      >
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-3xl font-semibold">
            Riz<span className="text-4xl text-yellow-600">Emp</span>
          </h1>
          <p className="text-xl">Use Me To Manage Your Work</p>
          <p className="text-lg text-yellow-600">Makes Management Simple</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full md:w-1/2 justify-center items-center bg-gradient-to-b from-black to-blue-900 text-white">
        <div className="w-80">
          <h2 className="text-3xl font-bold mb-6">Welcome To RizEmp</h2>
          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email address</label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-600"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full px-4 py-2 rounded-lg bg-transparent border border-gray-600"
              />
            </div>

         <button
  type="submit"
  disabled={loading}
  className="w-full bg-gradient-to-r from-gray-900 to-black py-2 rounded-lg font-semibold"
>
  {loading ? "Waking server..." : "Sign In"}
</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
