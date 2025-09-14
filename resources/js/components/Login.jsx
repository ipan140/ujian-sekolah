import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ animasi
import api from "../api"; // axios instance

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Email dan password wajib diisi!");
      return;
    }

    try {
      setLoading(true);

      // ✅ Kirim request login ke Laravel
      const response = await api.post("/login", { email, password });
      const data = response.data;

      // ✅ Simpan token & user di localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (error) {
      console.error("Error saat login:", error);
      if (error.response) {
        alert(error.response.data.message || "Login gagal, periksa email/password.");
      } else {
        alert("Tidak dapat terhubung ke server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600">
      {/* Animasi Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 w-96"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Selamat Datang 👋
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Silakan login untuk memulai ujian
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Masukkan email..."
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Masukkan password..."
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Animasi Tombol */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition duration-200 disabled:opacity-50"
          >
            {loading ? "Memproses..." : "Masuk"}
          </motion.button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          Belum punya akun?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline font-medium">
            Daftar di sini
          </Link>
        </p>

        <p className="text-xs text-gray-500 text-center mt-6">
          Sistem Ujian Online v1.0
        </p>
      </motion.div>
    </div>
  );
}
