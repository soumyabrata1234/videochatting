// src/components/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    
    name: ""
    
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormData({
      
    //   name: ""
      
    // });
     navigate("/video/" + formData.name);

 //   alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-zinc-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* <div>
            <label className="block mb-1 text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div> */}

          <div>
            <label className="block mb-1 text-sm font-medium text-zinc-300">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* <div>
            <label className="block mb-1 text-sm font-medium text-zinc-300">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div> */}

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-xl font-semibold text-white"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
