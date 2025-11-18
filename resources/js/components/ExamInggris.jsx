import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Exam() {
    const [timeLeft, setTimeLeft] = useState(130 * 60);
    const [answers, setAnswers] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const questions = [
        {
            id: 1,
            question: "What is the synonym of 'big'?",
            options: ["Small", "Large", "Tiny", "Little"],
            answer: "Large",
        },
        {
            id: 2,
            question: "What is the antonym of 'happy'?",
            options: ["Sad", "Glad", "Joyful", "Excited"],
            answer: "Sad",
        },
        {
            id: 3,
            question: "She ____ to school every day.",
            options: ["go", "goes", "going", "gone"],
            answer: "goes",
        },
        {
            id: 4,
            question: "The past tense of 'eat' is?",
            options: ["Eated", "Ate", "Eat", "Eaten"],
            answer: "Ate",
        },
        {
            id: 5,
            question: "My mother ___ cooking now.",
            options: ["is", "are", "am", "be"],
            answer: "is",
        },
        {
            id: 6,
            question: "A person who teaches students is called?",
            options: ["Doctor", "Teacher", "Driver", "Chef"],
            answer: "Teacher",
        },
        {
            id: 7,
            question: "‘They’ is a ___?",
            options: ["Pronoun", "Verb", "Noun", "Adjective"],
            answer: "Pronoun",
        },
        {
            id: 8,
            question: "Which one is a verb?",
            options: ["Run", "Blue", "Happy", "Table"],
            answer: "Run",
        },
        {
            id: 9,
            question: "The opposite of 'fast' is?",
            options: ["Quick", "Speed", "Slow", "Rapid"],
            answer: "Slow",
        },
        {
            id: 10,
            question: "'Library' is a place to?",
            options: [
                "Play football",
                "Borrow books",
                "Buy clothes",
                "Cook food",
            ],
            answer: "Borrow books",
        },
        {
            id: 11,
            question: "She has ____ apple.",
            options: ["a", "an", "the", "some"],
            answer: "an",
        },
        {
            id: 12,
            question: "The plural form of 'child' is?",
            options: ["Childs", "Childes", "Children", "Childrens"],
            answer: "Children",
        },
        {
            id: 13,
            question: "What time is it when the clock shows 12:00?",
            options: ["Noon", "Midnight", "Morning", "Evening"],
            answer: "Noon",
        },
        {
            id: 14,
            question: "The opposite of 'cold' is?",
            options: ["Cool", "Warm", "Freeze", "Ice"],
            answer: "Warm",
        },
        {
            id: 15,
            question: "She is the ___ student in the class.",
            options: ["smart", "smarter", "smartest", "more smart"],
            answer: "smartest",
        },
        {
            id: 16,
            question: "‘Beautiful’ is an example of?",
            options: ["Verb", "Noun", "Adjective", "Adverb"],
            answer: "Adjective",
        },
        {
            id: 17,
            question: "The past tense of 'write' is?",
            options: ["Writed", "Wrote", "Written", "Write"],
            answer: "Wrote",
        },
        {
            id: 18,
            question: "I ___ English every day.",
            options: ["study", "studies", "studying", "studied"],
            answer: "study",
        },
        {
            id: 19,
            question: "Which word is a noun?",
            options: ["Sing", "Quickly", "Happiness", "Run"],
            answer: "Happiness",
        },
        {
            id: 20,
            question: "The opposite of 'old' is?",
            options: ["Long", "Young", "Tall", "Far"],
            answer: "Young",
        },
        {
            id: 21,
            question: "‘Quickly’ is an?",
            options: ["Adjective", "Noun", "Adverb", "Verb"],
            answer: "Adverb",
        },
        {
            id: 22,
            question: "She ___ a beautiful voice.",
            options: ["have", "has", "having", "had"],
            answer: "has",
        },
        {
            id: 23,
            question: "Which one is a fruit?",
            options: ["Carrot", "Potato", "Apple", "Onion"],
            answer: "Apple",
        },
        {
            id: 24,
            question: "The synonym of 'smart' is?",
            options: ["Clever", "Dull", "Lazy", "Slow"],
            answer: "Clever",
        },
        {
            id: 25,
            question: "The opposite of 'strong' is?",
            options: ["Weak", "Big", "Brave", "Heavy"],
            answer: "Weak",
        },
        {
            id: 26,
            question: "He ___ TV last night.",
            options: ["watch", "watches", "watching", "watched"],
            answer: "watched",
        },
        {
            id: 27,
            question: "Which one is correct?",
            options: [
                "He are happy",
                "She am happy",
                "They is happy",
                "I am happy",
            ],
            answer: "I am happy",
        },
        {
            id: 28,
            question: "She is ___ than her sister.",
            options: ["tall", "taller", "tallest", "more tall"],
            answer: "taller",
        },
        {
            id: 29,
            question: "A person who helps sick people is a?",
            options: ["Pilot", "Nurse", "Chef", "Farmer"],
            answer: "Nurse",
        },
        {
            id: 30,
            question: "The past tense of 'go' is?",
            options: ["Goes", "Goed", "Went", "Gone"],
            answer: "Went",
        },
        {
            id: 31,
            question: "We ____ football every Sunday.",
            options: ["play", "plays", "playing", "played"],
            answer: "play",
        },
        {
            id: 32,
            question: "Which word is an adjective?",
            options: ["Beautiful", "Run", "Speak", "Jump"],
            answer: "Beautiful",
        },
        {
            id: 33,
            question: "How many days are in a week?",
            options: ["5", "6", "7", "8"],
            answer: "7",
        },
        {
            id: 34,
            question: "The opposite of 'clean' is?",
            options: ["Clear", "Dirty", "Nice", "Fresh"],
            answer: "Dirty",
        },
        {
            id: 35,
            question: "‘Run’ is a?",
            options: ["Verb", "Noun", "Adjective", "Pronoun"],
            answer: "Verb",
        },
        {
            id: 36,
            question: "The plural of 'mouse' is?",
            options: ["Mouses", "Mouse", "Mices", "Mice"],
            answer: "Mice",
        },
        {
            id: 37,
            question: "A place to buy medicine is called?",
            options: ["School", "Hospital", "Pharmacy", "Bank"],
            answer: "Pharmacy",
        },
        {
            id: 38,
            question: "The opposite of 'high' is?",
            options: ["Deep", "Short", "Low", "Tall"],
            answer: "Low",
        },
        {
            id: 39,
            question: "My father ___ a car.",
            options: ["drive", "drives", "driving", "drove"],
            answer: "drives",
        },
        {
            id: 40,
            question: "The synonym of 'angry' is?",
            options: ["Calm", "Mad", "Happy", "Glad"],
            answer: "Mad",
        },
        {
            id: 41,
            question: "Which one is a color?",
            options: ["Table", "Blue", "Chair", "Bag"],
            answer: "Blue",
        },
        {
            id: 42,
            question: "The opposite of 'cheap' is?",
            options: ["Expensive", "Easy", "Hard", "Soft"],
            answer: "Expensive",
        },
        {
            id: 43,
            question: "He ___ breakfast every morning.",
            options: ["eat", "eats", "eating", "ate"],
            answer: "eats",
        },
        {
            id: 44,
            question: "Which is a transportation?",
            options: ["Car", "Apple", "Shirt", "Book"],
            answer: "Car",
        },
        {
            id: 45,
            question: "The past tense of 'take' is?",
            options: ["Tooked", "Took", "Taken", "Tak"],
            answer: "Took",
        },
        {
            id: 46,
            question: "A baby cat is called?",
            options: ["Puppy", "Kitten", "Cub", "Calf"],
            answer: "Kitten",
        },
        {
            id: 47,
            question: "The opposite of 'easy' is?",
            options: ["Hard", "Soft", "Short", "Fast"],
            answer: "Hard",
        },
        {
            id: 48,
            question: "Which one is a profession?",
            options: ["Swimming", "Teacher", "Sleeping", "Running"],
            answer: "Teacher",
        },
        {
            id: 49,
            question: "She ___ very happy today.",
            options: ["are", "is", "am", "be"],
            answer: "is",
        },
        {
            id: 50,
            question: "What is the plural of 'fish'?",
            options: ["Fish", "Fishes", "Fishs", "Fiss"],
            answer: "Fish",
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
            confirmButtonText: "OK",
            confirmButtonColor: "#2563eb",
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
