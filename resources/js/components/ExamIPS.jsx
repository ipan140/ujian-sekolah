import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Exam() {
    const [timeLeft, setTimeLeft] = useState(130 * 60);
    const [answers, setAnswers] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const questions = [
        {
            id: 1,
            question: "Perpindahan penduduk dari desa ke kota disebut?",
            options: ["Migrasi", "Urbanisasi", "Transmigrasi", "Emigrasi"],
            answer: "Urbanisasi",
        },
        {
            id: 2,
            question:
                "Lembaga yang mengatur proses produksi dan distribusi barang adalah?",
            options: [
                "Lembaga sosial",
                "Lembaga politik",
                "Lembaga ekonomi",
                "Lembaga budaya",
            ],
            answer: "Lembaga ekonomi",
        },
        {
            id: 3,
            question: "Pulau terbesar di Indonesia adalah?",
            options: ["Jawa", "Sumatra", "Kalimantan", "Sulawesi"],
            answer: "Kalimantan",
        },
        {
            id: 4,
            question: "Kegiatan menukar barang dengan barang disebut?",
            options: ["Barter", "Distribusi", "Konsumsi", "Produksi"],
            answer: "Barter",
        },
        {
            id: 5,
            question:
                "Ilmu yang mempelajari hubungan manusia dengan lingkungan disebut?",
            options: ["Geologi", "Ekologi", "Sosiologi", "Antropologi"],
            answer: "Ekologi",
        },
        {
            id: 6,
            question: "Globalisasi menyebabkan dunia seolah menjadi?",
            options: ["Mengecil", "Membesar", "Statis", "Tidak berubah"],
            answer: "Mengecil",
        },
        {
            id: 7,
            question: "Sumber daya alam yang dapat diperbarui adalah?",
            options: ["Batu bara", "Minyak bumi", "Angin", "Gas alam"],
            answer: "Angin",
        },
        {
            id: 8,
            question: "Indonesia pernah dijajah oleh negara?",
            options: ["Amerika", "Spanyol", "Belanda", "India"],
            answer: "Belanda",
        },
        {
            id: 9,
            question: "Kebudayaan daerah di Indonesia disebut sebagai?",
            options: [
                "Budaya nasional",
                "Budaya lokal",
                "Budaya modern",
                "Budaya internasional",
            ],
            answer: "Budaya lokal",
        },
        {
            id: 10,
            question: "Ketua BPUPKI adalah?",
            options: [
                "Soekarno",
                "Dr. Radjiman Wedyodiningrat",
                "Moh. Hatta",
                "Soepomo",
            ],
            answer: "Dr. Radjiman Wedyodiningrat",
        },

        {
            id: 11,
            question: "Konstitusi pertama Indonesia adalah?",
            options: ["UUD 1945", "UUDS 1950", "RIS 1949", "Amandemen UUD"],
            answer: "UUD 1945",
        },
        {
            id: 12,
            question: "Pelaku utama kegiatan konsumsi adalah?",
            options: ["Produsen", "Distributor", "Konsumen", "Pemerintah"],
            answer: "Konsumen",
        },
        {
            id: 13,
            question: "Kegiatan ekspor berarti?",
            options: [
                "Menjual barang ke luar negeri",
                "Membeli barang dari luar negeri",
                "Menjual barang dalam negeri",
                "Mengimpor jasa",
            ],
            answer: "Menjual barang ke luar negeri",
        },
        {
            id: 14,
            question: "Negara yang menganut sistem ekonomi komando adalah?",
            options: ["Amerika Serikat", "Korea Utara", "Jerman", "Jepang"],
            answer: "Korea Utara",
        },
        {
            id: 15,
            question: "Gunung tertinggi di Indonesia adalah?",
            options: ["Semeru", "Kerinci", "Cartenzs Pyramid", "Rinjani"],
            answer: "Cartenzs Pyramid",
        },
        {
            id: 16,
            question: "Perdagangan antarnegara disebut?",
            options: [
                "Perdagangan lokal",
                "Perdagangan internasional",
                "Perdagangan regional",
                "Perdagangan tradisional",
            ],
            answer: "Perdagangan internasional",
        },
        {
            id: 17,
            question: "PBB dibentuk pada tahun?",
            options: ["1918", "1945", "1950", "1960"],
            answer: "1945",
        },
        {
            id: 18,
            question: "Peta yang menunjukkan batas negara disebut peta?",
            options: ["Topografi", "Politik", "Iklim", "Geologi"],
            answer: "Politik",
        },
        {
            id: 19,
            question: "Bencana akibat ulah manusia disebut?",
            options: [
                "Bencana alam",
                "Bencana sosial",
                "Bencana buatan",
                "Semua benar",
            ],
            answer: "Bencana buatan",
        },
        {
            id: 20,
            question:
                "Kegiatan membuat barang untuk memenuhi kebutuhan disebut?",
            options: ["Distribusi", "Produksi", "Konsumsi", "Modal"],
            answer: "Produksi",
        },

        {
            id: 21,
            question: "Kegiatan menyalurkan barang disebut?",
            options: ["Produksi", "Distribusi", "Konsumsi", "Barter"],
            answer: "Distribusi",
        },
        {
            id: 22,
            question: "Salah satu dampak negatif urbanisasi adalah?",
            options: [
                "Kemajuan ekonomi",
                "Kemacetan",
                "Bertambahnya lapangan kerja",
                "Penataan kota",
            ],
            answer: "Kemacetan",
        },
        {
            id: 23,
            question: "Pulau terpadat penduduknya di Indonesia adalah?",
            options: ["Bali", "Sumatra", "Kalimantan", "Jawa"],
            answer: "Jawa",
        },
        {
            id: 24,
            question: "Kegiatan belajar mengajar termasuk lembaga?",
            options: ["Ekonomi", "Pendidikan", "Agama", "Politik"],
            answer: "Pendidikan",
        },
        {
            id: 25,
            question: "Yang termasuk kebutuhan primer adalah?",
            options: ["Rumah", "Mobil", "Perhiasan", "Televisi"],
            answer: "Rumah",
        },
        {
            id: 26,
            question: "Tokoh proklamator Indonesia adalah?",
            options: [
                "Soedirman dan Hatta",
                "Soekarno dan Hatta",
                "Soekarno dan Sjahrir",
                "Hatta dan Sjahrir",
            ],
            answer: "Soekarno dan Hatta",
        },
        {
            id: 27,
            question: "Arah mata angin yang menunjukkan timur adalah?",
            options: ["Sunrise", "Sunset", "North", "South"],
            answer: "Sunrise",
        },
        {
            id: 28,
            question: "Pengangguran karena kemajuan teknologi disebut?",
            options: [
                "Pengangguran friksional",
                "Pengangguran struktural",
                "Pengangguran musiman",
                "Pengangguran siklis",
            ],
            answer: "Pengangguran struktural",
        },
        {
            id: 29,
            question: "Bentuk permukaan bumi yang paling luas adalah?",
            options: ["Dataran rendah", "Gunung", "Laut", "Sungai"],
            answer: "Laut",
        },
        {
            id: 30,
            question: "Sistem pemerintahan Indonesia adalah?",
            options: ["Monarki", "Parlementer", "Presidensial", "Komunis"],
            answer: "Presidensial",
        },

        {
            id: 31,
            question: "Perjanjian Renville terjadi pada tahun?",
            options: ["1946", "1947", "1948", "1950"],
            answer: "1948",
        },
        {
            id: 32,
            question: "Komoditas ekspor utama Indonesia adalah?",
            options: ["Minyak bumi", "Garam", "Gandum", "Ternak"],
            answer: "Minyak bumi",
        },
        {
            id: 33,
            question: "Keragaman budaya di Indonesia disebabkan oleh?",
            options: [
                "Jumlah penduduk sedikit",
                "Letak geografis beragam",
                "Pengaruh luar negeri",
                "Bencana alam",
            ],
            answer: "Letak geografis beragam",
        },
        {
            id: 34,
            question: "Gunung Merapi terletak di pulau?",
            options: ["Jawa", "Sumatra", "Bali", "NTT"],
            answer: "Jawa",
        },
        {
            id: 35,
            question: "Nilai tukar mata uang disebut?",
            options: ["Kurs", "Inflasi", "Deflasi", "Nominal"],
            answer: "Kurs",
        },
        {
            id: 36,
            question: "Belanja online termasuk contoh perubahan?",
            options: ["Regres", "Progresif", "Revolusioner", "Tradisional"],
            answer: "Progresif",
        },
        {
            id: 37,
            question: "Bank Indonesia berfungsi sebagai?",
            options: [
                "Bank swasta",
                "Bank devisa",
                "Bank sentral",
                "Bank rakyat",
            ],
            answer: "Bank sentral",
        },
        {
            id: 38,
            question: "Iklim di Indonesia dipengaruhi oleh?",
            options: [
                "Letak benua",
                "Letak astronomis",
                "Gempa bumi",
                "Jumlah penduduk",
            ],
            answer: "Letak astronomis",
        },
        {
            id: 39,
            question: "Sumpah Pemuda terjadi pada tahun?",
            options: ["1926", "1927", "1928", "1930"],
            answer: "1928",
        },
        {
            id: 40,
            question: "Agen sosialisasi yang pertama kali dikenal anak adalah?",
            options: ["Sekolah", "Teman sebaya", "Media massa", "Keluarga"],
            answer: "Keluarga",
        },

        {
            id: 41,
            question: "ASEAN berdiri pada tahun?",
            options: ["1967", "1970", "1980", "1990"],
            answer: "1967",
        },
        {
            id: 42,
            question: "Alat pembayaran yang sah adalah?",
            options: ["Cek", "Kartu kredit", "Uang", "Emas"],
            answer: "Uang",
        },
        {
            id: 43,
            question: "Perekonomian Indonesia berdasarkan sistem ekonomi?",
            options: ["Liberal", "Komando", "Campuran", "Tertutup"],
            answer: "Campuran",
        },
        {
            id: 44,
            question:
                "Kegiatan menggunakan barang untuk memenuhi kebutuhan disebut?",
            options: ["Konsumsi", "Produksi", "Distribusi", "Ekspor"],
            answer: "Konsumsi",
        },
        {
            id: 45,
            question: "Iklim tropis ditandai oleh?",
            options: [
                "Salju",
                "Musim panas panjang",
                "Curah hujan tinggi",
                "Suhu selalu rendah",
            ],
            answer: "Curah hujan tinggi",
        },
        {
            id: 46,
            question: "Monopoli adalah penguasaan pasar oleh?",
            options: [
                "Banyak produsen",
                "Beberapa produsen",
                "Satu produsen",
                "Konsumen",
            ],
            answer: "Satu produsen",
        },
        {
            id: 47,
            question: "Hak untuk menyampaikan pendapat dijamin oleh?",
            options: [
                "UUD 1945",
                "Sumpah Pemuda",
                "Pancasila sila ke-4",
                "UU HAM",
            ],
            answer: "UUD 1945",
        },
        {
            id: 48,
            question: "Penyebab utama kemacetan di kota besar adalah?",
            options: [
                "Pendidikan rendah",
                "Kepadatan penduduk",
                "Pertanian turun",
                "Bencana alam",
            ],
            answer: "Kepadatan penduduk",
        },
        {
            id: 49,
            question: "Rumah adat Tongkonan berasal dari?",
            options: ["Sumatra", "Kalimantan", "Toraja", "Papua"],
            answer: "Toraja",
        },
        {
            id: 50,
            question: "Bentuk negara Indonesia adalah?",
            options: ["Kerajaan", "Republik", "Federasi", "Monarki"],
            answer: "Republik",
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
