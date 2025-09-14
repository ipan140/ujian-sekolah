import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleStartExam = () => {
    navigate("/exam"); // arahkan ke halaman ujian
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-2xl rounded-3xl p-12 w-[800px] text-center"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-lg">
          🎓 Dashboard Ujian Online
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Selamat datang! Sebelum memulai ujian online, pastikan kamu sudah
          menyiapkan:
        </p>

        <ul className="text-left text-lg text-gray-700 mb-10 space-y-4 font-medium">
          <li>✅ Koneksi internet stabil</li>
          <li>✅ Lingkungan yang tenang</li>
          <li>✅ Baca soal dengan teliti</li>
          <li>✅ Waktu ujian akan dihitung otomatis</li>
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStartExam}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-2xl py-5 rounded-2xl shadow-lg transition duration-300 ease-in-out"
        >
          🚀 Mulai Ujian Sekarang
        </motion.button>
      </motion.div>
    </div>
  );
}
