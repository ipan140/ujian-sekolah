import React, { useState, useEffect } from "react";

export default function Exam() {
  const [timeLeft, setTimeLeft] = useState(60); // 60 detik
  const [answers, setAnswers] = useState({});
  const questions = [
    { id: 1, question: "2 + 2 = ?", options: ["3", "4", "5"], answer: "4" },
    { id: 2, question: "Ibu kota Indonesia?", options: ["Bandung", "Jakarta", "Surabaya"], answer: "Jakarta" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) score++;
    });
    alert(`Skor kamu: ${score}/${questions.length}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Ujian Online</h1>
      <p className="mb-4">Sisa waktu: {timeLeft} detik</p>

      {questions.map((q) => (
        <div key={q.id} className="mb-4">
          <p>{q.question}</p>
          {q.options.map((opt) => (
            <label key={opt} className="block">
              <input
                type="radio"
                name={`q-${q.id}`}
                value={opt}
                onChange={() => handleSelect(q.id, opt)}
                checked={answers[q.id] === opt}
              />{" "}
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}
