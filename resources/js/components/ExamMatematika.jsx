import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Exam() {
    const [timeLeft, setTimeLeft] = useState(130 * 60); // Time in seconds
    const [answers, setAnswers] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate(); // Initialize navigate hook here

    const mathQuestions = [
        {
            id: 1,
            question: "Hasil dari 12 × 8 adalah?",
            options: ["96", "88", "104", "92"],
            answer: "96",
        },
        {
            id: 2,
            question: "Penyelesaian dari 2x + 5 = 15 adalah?",
            options: ["x = 5", "x = 10", "x = -5", "x = 15"],
            answer: "x = 5",
        },
        {
            id: 3,
            question: "Nilai dari √81 adalah?",
            options: ["7", "8", "9", "10"],
            answer: "9",
        },
        {
            id: 4,
            question: "Hasil dari 3² + 4² adalah?",
            options: ["12", "25", "7", "24"],
            answer: "25",
        },
        {
            id: 5,
            question: "Jika y = 2x + 3, nilai y saat x = 4 adalah?",
            options: ["10", "11", "12", "9"],
            answer: "11",
        },
        {
            id: 6,
            question: "Hasil dari 15 ÷ 3 × 2 adalah?",
            options: ["5", "10", "15", "12"],
            answer: "10",
        },
        {
            id: 7,
            question: "Bentuk sederhana dari 18/24 adalah?",
            options: ["3/4", "2/3", "3/5", "4/5"],
            answer: "3/4",
        },
        {
            id: 8,
            question: "Hasil dari 7 × (5 + 3) adalah?",
            options: ["50", "56", "48", "52"],
            answer: "56",
        },
        {
            id: 9,
            question: "Keliling persegi dengan sisi 9 cm adalah?",
            options: ["36 cm", "18 cm", "27 cm", "81 cm"],
            answer: "36 cm",
        },
        {
            id: 10,
            question: "Luas segitiga dengan alas 8 cm dan tinggi 5 cm adalah?",
            options: ["20 cm²", "40 cm²", "30 cm²", "25 cm²"],
            answer: "20 cm²",
        },

        {
            id: 11,
            question: "Hasil dari 2³ × 2² adalah?",
            options: ["8", "16", "32", "64"],
            answer: "32",
        },
        {
            id: 12,
            question: "Penyelesaian dari x² = 49 adalah?",
            options: ["x = 7", "x = -7", "x = ±7", "x = 0"],
            answer: "x = ±7",
        },
        {
            id: 13,
            question: "Hasil dari 1/2 + 2/3 adalah?",
            options: ["7/6", "4/5", "3/4", "5/6"],
            answer: "7/6",
        },
        {
            id: 14,
            question: "Bentuk desimal dari 3/8 adalah?",
            options: ["0,375", "0,35", "0,38", "0,325"],
            answer: "0,375",
        },
        {
            id: 15,
            question:
                "Jika sudut A = 60° dan sudut B = 90°, sudut C segitiga adalah?",
            options: ["30°", "60°", "90°", "120°"],
            answer: "30°",
        },

        {
            id: 16,
            question: "Hasil dari 5! (faktorial) adalah?",
            options: ["120", "60", "24", "720"],
            answer: "120",
        },
        {
            id: 17,
            question: "Bentuk sederhana dari 0,125 adalah?",
            options: ["1/8", "1/4", "1/10", "1/6"],
            answer: "1/8",
        },
        {
            id: 18,
            question: "Hasil dari (2 + 3)² adalah?",
            options: ["10", "25", "13", "5"],
            answer: "25",
        },
        {
            id: 19,
            question: "Bentuk aljabar dari ‘dua dikurangi x’ adalah?",
            options: ["2x", "2 - x", "x - 2", "2 + x"],
            answer: "2 - x",
        },
        {
            id: 20,
            question: "Bilangan prima terkecil adalah?",
            options: ["0", "1", "2", "3"],
            answer: "2",
        },

        {
            id: 21,
            question: "Hasil dari 9² – 6² adalah?",
            options: ["15", "45", "27", "81"],
            answer: "45",
        },
        {
            id: 22,
            question: "Penyelesaian dari 3x - 7 = 8 adalah?",
            options: ["x = 3", "x = 5", "x = 7", "x = 15"],
            answer: "x = 5",
        },
        {
            id: 23,
            question: "Hasil dari 0,4 × 0,5 adalah?",
            options: ["0,2", "0,9", "0,25", "0,45"],
            answer: "0,2",
        },
        {
            id: 24,
            question: "Jika p : q = 3 : 4, maka q : p =?",
            options: ["3 : 4", "4 : 3", "1 : 1", "4 : 7"],
            answer: "4 : 3",
        },
        {
            id: 25,
            question: "Hasil dari 2² × 3² adalah?",
            options: ["12", "36", "18", "9"],
            answer: "36",
        },

        {
            id: 26,
            question: "Bentuk pecahan dari 0,6 adalah?",
            options: ["3/5", "2/3", "6/10", "5/6"],
            answer: "3/5",
        },
        {
            id: 27,
            question: "Hasil dari 5 × (4 + 6) ÷ 2 adalah?",
            options: ["20", "25", "30", "50"],
            answer: "25",
        },
        {
            id: 28,
            question: "Penyelesaian dari x/5 = 3 adalah?",
            options: ["x = 15", "x = 8", "x = 5", "x = 3"],
            answer: "x = 15",
        },
        {
            id: 29,
            question: "Bentuk sederhana dari 20/60 adalah?",
            options: ["1/3", "2/3", "1/2", "1/4"],
            answer: "1/3",
        },
        {
            id: 30,
            question: "Hasil dari (7 × 3) - (4 × 2) adalah?",
            options: ["13", "17", "14", "15"],
            answer: "13",
        },

        {
            id: 31,
            question: "Jika x = 2, y = 3, nilai dari 2x + 3y adalah?",
            options: ["10", "11", "12", "13"],
            answer: "13",
        },
        {
            id: 32,
            question: "Hasil dari 8 ÷ 0,2 adalah?",
            options: ["0,4", "1,6", "40", "16"],
            answer: "40",
        },
        {
            id: 33,
            question: "Bentuk faktorisasi dari x² + 5x adalah?",
            options: ["x(x + 5)", "x(x - 5)", "(x + 5)(x - 5)", "x² + 5"],
            answer: "x(x + 5)",
        },
        {
            id: 34,
            question: "Hasil dari 3/4 ÷ 1/2 adalah?",
            options: ["3/8", "3/2", "2/3", "1/2"],
            answer: "3/2",
        },
        {
            id: 35,
            question: "Nilai dari | -7 | adalah?",
            options: ["-7", "0", "7", "14"],
            answer: "7",
        },

        {
            id: 36,
            question: "Hasil dari 10² ÷ 5² adalah?",
            options: ["2", "4", "5", "25"],
            answer: "4",
        },
        {
            id: 37,
            question: "Hasil dari 2³ + 3³ adalah?",
            options: ["17", "35", "27", "39"],
            answer: "35",
        },

        // SOAL 38 YANG BERMASALAH SUDAH BENAR
        {
            id: 38,
            question: "Bentuk pecahan dari 0,75 adalah?",
            options: ["3/4", "2/3", "1/2", "4/5"],
            answer: "3/4",
        },

        {
            id: 39,
            question: "Hasil dari 5 × 5 – 5 ÷ 5 adalah?",
            options: ["20", "24", "25", "23"],
            answer: "24",
        },
        {
            id: 40,
            question: "Penyelesaian dari 4x – 8 = 0 adalah?",
            options: ["x = 1", "x = 2", "x = 4", "x = 8"],
            answer: "x = 2",
        },

        {
            id: 41,
            question: "Bentuk desimal dari 7/10 adalah?",
            options: ["0,07", "0,7", "0,75", "0,17"],
            answer: "0,7",
        },
        {
            id: 42,
            question: "Hasil dari (6 + 2) × (5 – 3) adalah?",
            options: ["12", "16", "20", "14"],
            answer: "16",
        },
        {
            id: 43,
            question: "Bentuk sederhana dari 45/60 adalah?",
            options: ["3/4", "4/5", "2/3", "5/6"],
            answer: "3/4",
        },
        {
            id: 44,
            question: "Hasil dari 9 + 6 ÷ 3 adalah?",
            options: ["5", "11", "13", "15"],
            answer: "11",
        },
        {
            id: 45,
            question:
                "Jika sudut A = 45° dan sudut B = 45°, sudut C segitiga adalah?",
            options: ["45°", "90°", "60°", "30°"],
            answer: "90°",
        },

        {
            id: 46,
            question: "Hasil dari 2 × 3 × 4 adalah?",
            options: ["12", "18", "24", "30"],
            answer: "24",
        },
        {
            id: 47,
            question: "Penyelesaian dari x² – 16 = 0 adalah?",
            options: ["x = 4", "x = -4", "x = ±4", "x = 0"],
            answer: "x = ±4",
        },
        {
            id: 48,
            question: "Hasil dari 0,2 + 0,3 adalah?",
            options: ["0,5", "0,6", "0,4", "0,3"],
            answer: "0,5",
        },
        {
            id: 49,
            question: "Bentuk sederhana dari 56/98 adalah?",
            options: ["4/7", "5/7", "3/7", "6/7"],
            answer: "4/7",
        },
        {
            id: 50,
            question: "Hasil dari 10 × (2 + 3) ÷ 5 adalah?",
            options: ["5", "10", "8", "12"],
            answer: "10",
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
        if (currentIndex < mathQuestions.length - 1) {
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
        mathQuestions.forEach((q) => {
            if (answers[q.id] === q.answer) score += 2; // 2 points per question, total 50 questions = 100
        });

        Swal.fire({
            title: "🎉 Ujian Selesai!",
            html: `
                <h2>Skor Kamu:</h2>
                <h1 style="font-size:40px; margin-top:10px; color:#1d4ed8">${score}/100</h1>
            `,
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#2563eb",
        }).then(() => {
            // Navigate to the dashboard after clicking OK
            navigate("/dashboard");
        });
    };

    const formatTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const seconds = sec % 60;
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const currentQuestion = mathQuestions[currentIndex];

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

                    {currentIndex < mathQuestions.length - 1 ? (
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
                    Soal {currentIndex + 1} dari {mathQuestions.length}
                </div>
            </div>

            {/* Panel Status */}
            <div className="bg-white shadow-2xl rounded-2xl p-6 w-[250px] h-fit">
                <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">
                    📋 Status Soal
                </h3>

                <div className="grid grid-cols-5 gap-2">
                    {mathQuestions.map((q) => (
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
