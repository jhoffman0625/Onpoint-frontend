
import React from "react";

const Login = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded shadow w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4 text-center">OnPoint Login</h2>
      <input className="w-full border p-2 mb-3 rounded" placeholder="Email" type="email" />
      <input className="w-full border p-2 mb-3 rounded" placeholder="Password" type="password" />
      <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
    </div>
  </div>
);

export default Login;
