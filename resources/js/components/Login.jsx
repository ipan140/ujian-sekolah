import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      navigate("/dashboard");
    } else {
      alert("Masukkan username!");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600">
      <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 w-96">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Selamat Datang 👋
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Silakan login untuk memulai ujian
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              placeholder="Masukkan username..."
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Masuk
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          Sistem Ujian Online v1.0
        </p>
      </div>
    </div>
  );
}
