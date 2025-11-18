import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen justify-center items-center bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 p-6">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white shadow-2xl rounded-3xl p-12 w-[900px] text-center"
            >
                <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
                    🎓 Dashboard Ujian Online
                </h1>

                <p className="text-xl text-gray-600 mb-8">
                    Pilih ujian yang ingin kamu kerjakan:
                </p>
                <ul className="text-left text-lg text-gray-700 mb-10 space-y-4 font-medium">
                    <li>
                        ✅ Pastikan perangkat (Laptop/HP) dalam kondisi baik dan
                        baterai cukup.
                    </li>
                    <li>
                        ✅ Gunakan koneksi internet yang stabil untuk
                        menghindari gangguan selama ujian.
                    </li>
                    <li>
                        ✅ Kerjakan ujian di lingkungan yang tenang dan minim
                        distraksi.
                    </li>
                    <li>
                        ✅ Bacalah soal dengan cermat sebelum memilih jawaban.
                    </li>
                    <li>
                        ✅ Waktu ujian akan berjalan otomatis setelah dimulai.
                    </li>
                    <li>
                        ✅ Jangan menutup tab atau memperbarui halaman selama
                        ujian berlangsung.
                    </li>
                    <li>
                        ✅ Semua jawaban akan tersimpan secara otomatis selama
                        kamu berpindah soal.
                    </li>
                    <li>
                        ⚠️ Setelah waktu habis, ujian akan terkumpul otomatis.
                    </li>
                </ul>

                <div className="grid grid-cols-2 gap-6 mt-10">
                    {/* MATEMATIKA */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/exam/matematika")}
                        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xl py-8 rounded-2xl shadow-lg"
                    >
                        ➕ Ujian Matematika
                    </motion.button>

                    {/* IPA */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/exam/ipa")}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xl py-8 rounded-2xl shadow-lg"
                    >
                        🔬 Ujian IPA
                    </motion.button>

                    {/* IPS */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/exam/ips")}
                        className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-xl py-8 rounded-2xl shadow-lg"
                    >
                        🌍 Ujian IPS
                    </motion.button>

                    {/* BAHASA INGGRIS */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/exam/inggris")}
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-xl py-8 rounded-2xl shadow-lg"
                    >
                        🇬🇧 Ujian Bahasa Inggris
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
