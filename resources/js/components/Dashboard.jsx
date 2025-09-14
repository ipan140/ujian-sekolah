import React, { useState, useEffect } from "react";

export default function Exam() {
  const [timeLeft, setTimeLeft] = useState(60); // 60 detik
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    { id: 1, question: "2 + 2 = ?", options: ["3", "4", "5"], answer: "4" },
    {
      id: 2,
      question: "Ibu kota Indonesia?",
      options: ["Bandung", "Jakarta", "Surabaya"],
      answer: "Jakarta",
    },
  ];

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

  const handleSubmit = () => {
    let sc = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) sc++;
    });
    setScore(sc);
    setSubmitted(true);
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-[600px] max-h-[90vh] overflow-y-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">
          📝 Ujian Online
        </h1>

        {/* Timer */}
        <div className="text-center mb-6">
          <span className="text-lg font-semibold text-gray-700">
            ⏳ Waktu tersisa:{" "}
            <span className={`font-bold ${timeLeft <= 10 ? "text-red-500" : "text-green-600"}`}>
              {timeLeft} detik
            </span>
          </span>
        </div>

        {!submitted ? (
          <>
            {questions.map((q) => (
              <div
                key={q.id}
                className="mb-6 p-4 border rounded-xl shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold text-gray-800 mb-3">
                  {q.id}. {q.question}
                </p>
                <div className="space-y-2">
                  {q.options.map((opt) => (
                    <label
                      key={opt}
                      className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer border transition ${
                        answers[q.id] === opt
                          ? "bg-blue-100 border-blue-500"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${q.id}`}
                        value={opt}
                        onChange={() => handleSelect(q.id, opt)}
                        checked={answers[q.id] === opt}
                        className="form-radio text-blue-600"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200 ease-in-out"
            >
              🚀 Submit Jawaban
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Hasil Ujian</h2>
            <p className="text-lg text-gray-600 mb-4">
              Skor kamu:{" "}
              <span className="font-bold text-blue-600">
                {score}/{questions.length}
              </span>
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow-md"
            >
              🔄 Ulangi Ujian
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
