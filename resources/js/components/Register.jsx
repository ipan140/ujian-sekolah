import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ animasi
import api from "../api"; // axios instance

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Nama, email, dan password wajib diisi!");
      return;
    }
    if (password !== passwordConfirmation) {
      alert("Password dan konfirmasi password tidak cocok!");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/register", {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });

      const data = response.data;
      console.log("✅ Register berhasil:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      navigate("/dashboard");
    } catch (error) {
      console.error("❌ Error saat register:", error);

      if (error.response) {
        const res = error.response.data;

        if (res.errors) {
          const messages = Object.values(res.errors).flat().join("\n");
          alert(messages);
        } else {
          alert(res.message || "Registrasi gagal, coba lagi.");
        }
      } else {
        alert("Tidak dapat terhubung ke server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600">
      {/* Animasi Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 w-96"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Daftar Akun Baru ✍️
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Buat akun untuk memulai ujian
        </p>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nama</label>
            <input
              type="text"
              placeholder="Masukkan nama lengkap..."
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Masukkan email..."
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Masukkan password..."
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Konfirmasi Password</label>
            <input
              type="password"
              placeholder="Ulangi password..."
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>

          {/* Animasi Tombol */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-200 disabled:opacity-50"
          >
            {loading ? "Mendaftarkan..." : "Daftar"}
          </motion.button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          Sudah punya akun?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-green-600 cursor-pointer hover:underline"
          >
            Login di sini
          </span>
        </p>
      </motion.div>
    </div>
  );
}
