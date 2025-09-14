import React, { useState, useEffect } from "react";

export default function Exam() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 menit (600 detik)
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ 30 soal dummy
  const questions = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    question: `Soal nomor ${i + 1}: Berapakah hasil ${i + 1} + ${i + 2}?`,
    options: [
      `${i + i}`,
      `${i + 1 + i + 2}`,
      `${i + 10}`,
      `${i + 5}`,
    ],
    answer: `${i + 1 + i + 2}`,
  }));

  // Timer
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

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) score++;
    });
    alert(`Skor kamu: ${score}/${questions.length}`);
  };

  // Format menit:detik
  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600 p-6 gap-6">
      {/* Kiri: Soal */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-[700px]">
        {/* Timer */}
        <div className="text-center mb-6">
          <span className="text-xl font-bold text-gray-700">
            ⏳ Waktu tersisa:{" "}
            <span className={`${timeLeft <= 30 ? "text-red-600" : "text-green-600"}`}>
              {formatTime(timeLeft)}
            </span>
          </span>
        </div>

        {/* Soal */}
        <div className="mb-6">
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
                  onChange={() => handleSelect(currentQuestion.id, opt)}
                  checked={answers[currentQuestion.id] === opt}
                  className="mr-3"
                />
                <span className="text-lg">{opt}</span>
              </label>
            ))}
          </div>
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

        {/* Progress */}
        <div className="text-center mt-4 text-gray-600">
          Soal {currentIndex + 1} dari {questions.length}
        </div>
      </div>

      {/* Kanan: Tabel Ringkasan */}
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-[250px] h-fit">
        <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">📋 Status Soal</h3>
        <div className="grid grid-cols-5 gap-2">
          {questions.map((q) => (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(q.id - 1)}
              className={`w-10 h-10 rounded-lg font-bold ${
                answers[q.id]
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-700"
              } ${currentIndex + 1 === q.id ? "ring-2 ring-blue-500" : ""}`}
            >
              {q.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
