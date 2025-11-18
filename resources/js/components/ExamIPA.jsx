import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Exam() {
    const [timeLeft, setTimeLeft] = useState(130 * 60);
    const [answers, setAnswers] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const questions = [
        {
            id: 1,
            question: "Perpindahan panas tanpa zat perantara disebut?",
            options: ["Konduksi", "Konveksi", "Radiasi", "Evaporasi"],
            answer: "Radiasi",
        },
        {
            id: 2,
            question:
                "Gaya yang bekerja pada benda dan menyebabkan benda berubah bentuk adalah?",
            options: ["Gaya gesek", "Gaya otot", "Gaya pegas", "Gaya normal"],
            answer: "Gaya pegas",
        },
        {
            id: 3,
            question: "Planet yang memiliki rotasi paling cepat adalah?",
            options: ["Bumi", "Mars", "Jupiter", "Saturnus"],
            answer: "Jupiter",
        },
        {
            id: 4,
            question:
                "Peristiwa fotosintesis terjadi di bagian sel tumbuhan bernama?",
            options: ["Mitokondria", "Kloroplas", "Inti sel", "Ribosom"],
            answer: "Kloroplas",
        },
        {
            id: 5,
            question: "Satuan usaha (work) dalam SI adalah?",
            options: ["Watt", "Newton", "Joule", "Ampere"],
            answer: "Joule",
        },
        {
            id: 6,
            question: "Alat kelamin jantan pada bunga disebut?",
            options: ["Putik", "Benang sari", "Kelopak", "Mahkota"],
            answer: "Benang sari",
        },
        {
            id: 7,
            question: "Gelombang yang membutuhkan medium perambatan adalah?",
            options: [
                "Gelombang cahaya",
                "Gelombang radio",
                "Gelombang bunyi",
                "Sinar gamma",
            ],
            answer: "Gelombang bunyi",
        },
        {
            id: 8,
            question: "Jumlah proton dalam atom disebut?",
            options: ["Nomor massa", "Nomor atom", "Isotop", "Isobar"],
            answer: "Nomor atom",
        },
        {
            id: 9,
            question: "Gaya gravitasi pertama kali dijelaskan oleh?",
            options: ["Einstein", "Newton", "Galileo", "Bohr"],
            answer: "Newton",
        },
        {
            id: 10,
            question: "Struktur DNA berbentuk?",
            options: [
                "Double helix",
                "Lurus",
                "Lingkaran",
                "Spiral satu untai",
            ],
            answer: "Double helix",
        },
        {
            id: 11,
            question: "Perubahan wujud cair menjadi gas disebut?",
            options: ["Kondensasi", "Sublimasi", "Evaporasi", "Deposisi"],
            answer: "Evaporasi",
        },
        {
            id: 12,
            question:
                "Bagian telinga yang berfungsi menangkap getaran bunyi adalah?",
            options: [
                "Koklea",
                "Gendang telinga",
                "Saraf auditori",
                "Telinga bagian dalam",
            ],
            answer: "Gendang telinga",
        },
        {
            id: 13,
            question: "Hewan vertebrata adalah hewan yang memiliki?",
            options: [
                "Kaki banyak",
                "Kerangka luar",
                "Tulang belakang",
                "Rangka lunak",
            ],
            answer: "Tulang belakang",
        },
        {
            id: 14,
            question: "Persamaan kimia yang seimbang disebut?",
            options: [
                "Reaksi endoterm",
                "Stoikiometri",
                "Reaksi isoton",
                "Reaksi spontan",
            ],
            answer: "Stoikiometri",
        },
        {
            id: 15,
            question:
                "Zat yang mempercepat reaksi kimia tanpa ikut bereaksi adalah?",
            options: ["Katalis", "Inhibitor", "Enzim", "Reaktan"],
            answer: "Katalis",
        },
        {
            id: 16,
            question: "Planet terdekat dari matahari adalah?",
            options: ["Venus", "Merkurius", "Bumi", "Mars"],
            answer: "Merkurius",
        },
        {
            id: 17,
            question: "Kecepatan cahaya di ruang hampa adalah?",
            options: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10⁴ m/s", "3×10¹⁰ m/s"],
            answer: "3×10⁸ m/s",
        },
        {
            id: 18,
            question:
                "Senyawa yang hanya tersusun dari satu jenis atom disebut?",
            options: ["Campuran", "Unsur", "Molekul", "Larutan"],
            answer: "Unsur",
        },
        {
            id: 19,
            question:
                "Jenis jaringan pada tumbuhan yang berfungsi memperbesar diameter batang adalah?",
            options: ["Xilem", "Floem", "Kambium", "Epidermis"],
            answer: "Kambium",
        },
        {
            id: 20,
            question: "Gas yang paling banyak di atmosfer bumi adalah?",
            options: ["Oksigen", "Nitrogen", "Karbon dioksida", "Hidrogen"],
            answer: "Nitrogen",
        },
        {
            id: 21,
            question: "Tekanan berbanding lurus dengan?",
            options: ["Gaya", "Luas penampang", "Volume", "Temperatur"],
            answer: "Gaya",
        },
        {
            id: 22,
            question: "Benda mengapung jika massa jenisnya?",
            options: [
                "Lebih besar",
                "Lebih kecil",
                "Sama",
                "Tidak berpengaruh",
            ],
            answer: "Lebih kecil",
        },
        {
            id: 23,
            question:
                "Alat yang digunakan untuk mengukur intensitas cahaya adalah?",
            options: ["Voltmeter", "Lux meter", "Higrometer", "Manometer"],
            answer: "Lux meter",
        },
        {
            id: 24,
            question: "Reaksi respirasi menghasilkan energi dalam bentuk?",
            options: ["Lemak", "Protein", "ATP", "RNA"],
            answer: "ATP",
        },
        {
            id: 25,
            question: "Perubahan wujud padat langsung menjadi gas disebut?",
            options: ["Deposisi", "Sublimasi", "Kondensasi", "Evaporasi"],
            answer: "Sublimasi",
        },
        {
            id: 26,
            question: "Unit dasar pewarisan sifat adalah?",
            options: ["Sel", "Gen", "DNA", "Kromosom"],
            answer: "Gen",
        },
        {
            id: 27,
            question: "Gelombang radio termasuk gelombang?",
            options: ["Mekanik", "Longitudinal", "Transversal", "Bunyi"],
            answer: "Transversal",
        },
        {
            id: 28,
            question: "Sifat asam memiliki nilai pH?",
            options: ["7", ">7", "<7", "Tidak pasti"],
            answer: "<7",
        },
        {
            id: 29,
            question: "Energi potensial dipengaruhi oleh?",
            options: ["Kecepatan", "Massa dan ketinggian", "Tekanan", "Suhu"],
            answer: "Massa dan ketinggian",
        },
        {
            id: 30,
            question: "Otot yang bekerja tanpa disadari adalah?",
            options: [
                "Otot lurik",
                "Otot jantung",
                "Otot rangka",
                "Semua otot",
            ],
            answer: "Otot jantung",
        },
        {
            id: 31,
            question: "Hukum Ohm menyatakan V =?",
            options: ["I × R", "m × g", "P × t", "F × s"],
            answer: "I × R",
        },
        {
            id: 32,
            question:
                "Zat yang tidak dapat diuraikan menjadi zat lebih sederhana adalah?",
            options: ["Senyawa", "Unsur", "Campuran", "Larutan"],
            answer: "Unsur",
        },
        {
            id: 33,
            question: "Hewan yang mengalami metamorfosis sempurna adalah?",
            options: ["Ayam", "Belalang", "Kupu-kupu", "Cicak"],
            answer: "Kupu-kupu",
        },
        {
            id: 34,
            question: "Alat optik yang bekerja seperti mata manusia adalah?",
            options: ["Teropong", "Kamera", "Mikroskop", "Kaca pembesar"],
            answer: "Kamera",
        },
        {
            id: 35,
            question: "Reaksi fusi terjadi pada?",
            options: ["Reaktor fisi", "Matahari", "Baterai", "Panas bumi"],
            answer: "Matahari",
        },
        {
            id: 36,
            question: "Sel darah yang berfungsi membunuh patogen adalah?",
            options: ["Eritrosit", "Leukosit", "Trombosit", "Plasma"],
            answer: "Leukosit",
        },
        {
            id: 37,
            question:
                "Senyawa organik yang menjadi sumber energi utama tubuh adalah?",
            options: ["Protein", "Karbohidrat", "Lemak", "Vitamin"],
            answer: "Karbohidrat",
        },
        {
            id: 38,
            question: "Perubahan kimia ditandai oleh?",
            options: [
                "Perubahan bentuk",
                "Perubahan warna atau gas baru terbentuk",
                "Perubahan ukuran",
                "Perubahan fase sementara",
            ],
            answer: "Perubahan warna atau gas baru terbentuk",
        },
        {
            id: 39,
            question: "Besaran yang memiliki arah dan besar disebut?",
            options: ["Skalar", "Vektor", "Tetapan", "Dimensi"],
            answer: "Vektor",
        },
        {
            id: 40,
            question: "Pencernaan karbohidrat dimulai dari?",
            options: ["Lambung", "Usus halus", "Mulut", "Usus besar"],
            answer: "Mulut",
        },
        {
            id: 41,
            question: "Lapisan atmosfer tempat terjadinya cuaca adalah?",
            options: ["Stratosfer", "Mesosfer", "Troposfer", "Ionosfer"],
            answer: "Troposfer",
        },
        {
            id: 42,
            question: "Hidrokarbon jenuh disebut?",
            options: ["Alkena", "Alkana", "Alkuna", "Aromatik"],
            answer: "Alkana",
        },
        {
            id: 43,
            question: "Unit SI dari gaya adalah?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            answer: "Newton",
        },
        {
            id: 44,
            question:
                "Sifat cahaya yang menyebabkan bayangan terbentuk adalah?",
            options: [
                "Dapat dipantulkan",
                "Dapat dibiaskan",
                "Merambat lurus",
                "Merambat melengkung",
            ],
            answer: "Merambat lurus",
        },
        {
            id: 45,
            question: "Sel prokariotik tidak memiliki?",
            options: ["Membran sel", "Inti sel sejati", "Sitoplasma", "DNA"],
            answer: "Inti sel sejati",
        },
        {
            id: 46,
            question: "Perubahan energi pada kipas angin adalah?",
            options: [
                "Listrik → Gerak",
                "Kimia → Gerak",
                "Gerak → Listrik",
                "Panas → Listrik",
            ],
            answer: "Listrik → Gerak",
        },
        {
            id: 47,
            question:
                "Proses menghilangkan air dari tanaman agar awet disebut?",
            options: ["Dehidrasi", "Osmosis", "Filtrasi", "Difusi"],
            answer: "Dehidrasi",
        },
        {
            id: 48,
            question: "Hewan pemakan tumbuhan disebut?",
            options: ["Herbivor", "Karnivor", "Omnivor", "Detritivor"],
            answer: "Herbivor",
        },
        {
            id: 49,
            question:
                "Bagian mata yang mengatur banyaknya cahaya yang masuk adalah?",
            options: ["Retina", "Lensa", "Pupil", "Kornea"],
            answer: "Pupil",
        },
        {
            id: 50,
            question: "Arus listrik yang arah alirannya tetap disebut?",
            options: ["AC", "DC", "Hybrid", "Ionik"],
            answer: "DC",
        },
    ];

    // ==========================
    // TIMER
    // ==========================
    useEffect(() => {
        if (timeLeft === 0) {
            handleSubmit();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleSelect = (qid, option) => {
        setAnswers({ ...answers, [qid]: option });
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // ==========================
    // SWEET ALERT HASIL
    // ==========================
    const handleSubmit = () => {
        let score = 0;
        questions.forEach((q) => {
            if (answers[q.id] === q.answer) score++;
        });

        Swal.fire({
            title: "🎉 Ujian Selesai!",
            html: `
      <h2>Skor Kamu:</h2>
      <h1 style="font-size:40px; margin-top:10px; color:#1d4ed8">${score}/${questions.length}</h1>
    `,
            icon: "success",
            confirmButtonText: "Pergi ke Dashboard",
            confirmButtonColor: "#2563eb",
        }).then(() => {
            // ➜ Setelah klik tombol, arahkan ke dashboard
            window.location.href = "/dashboard";
        });
    };

    const formatTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const seconds = sec % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const currentQuestion = questions[currentIndex];

    return (
        <div className="flex justify-center items-start min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600 p-6 gap-6">
            {/* Panel Soal */}
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-[700px]">
                <div className="text-center mb-6">
                    <span className="text-xl font-bold text-gray-700">
                        ⏳ Waktu tersisa:{" "}
                        <span
                            className={`${
                                timeLeft <= 30
                                    ? "text-red-600"
                                    : "text-green-600"
                            }`}
                        >
                            {formatTime(timeLeft)}
                        </span>
                    </span>
                </div>

                <h2 className="text-2xl font-extrabold text-gray-800 mb-4">
                    {currentQuestion.id}. {currentQuestion.question}
                </h2>

                <div className="space-y-3">
                    {currentQuestion.options.map((opt) => (
                        <label
                            key={opt}
                            className={`flex items-center p-3 border rounded-xl cursor-pointer transition ${
                                answers[currentQuestion.id] === opt
                                    ? "bg-blue-100 border-blue-500"
                                    : "hover:bg-gray-100"
                            }`}
                        >
                            <input
                                type="radio"
                                name={`q-${currentQuestion.id}`}
                                value={opt}
                                checked={answers[currentQuestion.id] === opt}
                                onChange={() =>
                                    handleSelect(currentQuestion.id, opt)
                                }
                                className="mr-3"
                            />
                            <span className="text-lg">{opt}</span>
                        </label>
                    ))}
                </div>

                {/* Navigasi */}
                <div className="flex justify-between items-center mt-8">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className="px-6 py-3 rounded-xl bg-gray-300 hover:bg-gray-400 disabled:opacity-50 font-semibold"
                    >
                        ⬅️ Sebelumnya
                    </button>

                    {currentIndex < questions.length - 1 ? (
                        <button
                            onClick={handleNext}
                            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        >
                            Selanjutnya ➡️
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold"
                        >
                            ✅ Submit Ujian
                        </button>
                    )}
                </div>

                <div className="text-center mt-4 text-gray-600">
                    Soal {currentIndex + 1} dari {questions.length}
                </div>
            </div>

            {/* Panel Status */}
            <div className="bg-white shadow-2xl rounded-2xl p-6 w-[250px] h-fit">
                <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">
                    📋 Status Soal
                </h3>

                <div className="grid grid-cols-5 gap-2">
                    {questions.map((q) => (
                        <button
                            key={q.id}
                            onClick={() => setCurrentIndex(q.id - 1)}
                            className={`w-10 h-10 rounded-lg font-bold ${
                                answers[q.id]
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-300 text-gray-700"
                            } ${
                                currentIndex + 1 === q.id
                                    ? "ring-2 ring-blue-500"
                                    : ""
                            }`}
                        >
                            {q.id}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
