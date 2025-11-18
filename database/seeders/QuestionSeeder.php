<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class QuestionSeeder extends Seeder
{
    public function run(): void
    {
        // ===============================
        // ENGLISH (exam_id = 4)
        // ===============================
        $english = [
            ["What is the synonym of 'big'?", ["Small", "Large", "Tiny", "Little"], "Large"],
            ["What is the antonym of 'happy'?", ["Sad", "Glad", "Joyful", "Excited"], "Sad"],
            ["She ____ to school every day.", ["go", "goes", "going", "gone"], "goes"],
            ["The past tense of 'eat' is?", ["Eated", "Ate", "Eat", "Eaten"], "Ate"],
            ["My mother ___ cooking now.", ["is", "are", "am", "be"], "is"],
            ["A person who teaches students is called?", ["Doctor", "Teacher", "Driver", "Chef"], "Teacher"],
            ["‘They’ is a ___?", ["Pronoun", "Verb", "Noun", "Adjective"], "Pronoun"],
            ["Which one is a verb?", ["Run", "Blue", "Happy", "Table"], "Run"],
            ["The opposite of 'fast' is?", ["Quick", "Speed", "Slow", "Rapid"], "Slow"],
            ["'Library' is a place to?", ["Play football", "Borrow books", "Buy clothes", "Cook food"], "Borrow books"],

            ["She has ____ apple.", ["a", "an", "the", "some"], "an"],
            ["The plural form of 'child' is?", ["Childs", "Childes", "Children", "Childrens"], "Children"],
            ["What time is it when the clock shows 12:00?", ["Noon", "Midnight", "Morning", "Evening"], "Noon"],
            ["The opposite of 'cold' is?", ["Cool", "Warm", "Freeze", "Ice"], "Warm"],
            ["She is the ___ student in the class.", ["smart", "smarter", "smartest", "more smart"], "smartest"],
            ["‘Beautiful’ is an example of?", ["Verb", "Noun", "Adjective", "Adverb"], "Adjective"],
            ["The past tense of 'write' is?", ["Writed", "Wrote", "Written", "Write"], "Wrote"],
            ["I ___ English every day.", ["study", "studies", "studying", "studied"], "study"],
            ["Which word is a noun?", ["Sing", "Quickly", "Happiness", "Run"], "Happiness"],
            ["The opposite of 'old' is?", ["Long", "Young", "Tall", "Far"], "Young"],

            ["‘Quickly’ is an?", ["Adjective", "Noun", "Adverb", "Verb"], "Adverb"],
            ["She ___ a beautiful voice.", ["have", "has", "having", "had"], "has"],
            ["Which one is a fruit?", ["Carrot", "Potato", "Apple", "Onion"], "Apple"],
            ["The synonym of 'smart' is?", ["Clever", "Dull", "Lazy", "Slow"], "Clever"],
            ["The opposite of 'strong' is?", ["Weak", "Big", "Brave", "Heavy"], "Weak"],
            ["He ___ TV last night.", ["watch", "watches", "watching", "watched"], "watched"],
            ["Which one is correct?", ["He are happy", "She am happy", "They is happy", "I am happy"], "I am happy"],
            ["She is ___ than her sister.", ["tall", "taller", "tallest", "more tall"], "taller"],
            ["A person who helps sick people is a?", ["Pilot", "Nurse", "Chef", "Farmer"], "Nurse"],
            ["The past tense of 'go' is?", ["Goes", "Goed", "Went", "Gone"], "Went"],

            ["We ____ football every Sunday.", ["play", "plays", "playing", "played"], "play"],
            ["Which word is an adjective?", ["Beautiful", "Run", "Speak", "Jump"], "Beautiful"],
            ["How many days are in a week?", ["5", "6", "7", "8"], "7"],
            ["The opposite of 'clean' is?", ["Clear", "Dirty", "Nice", "Fresh"], "Dirty"],
            ["‘Run’ is a?", ["Verb", "Noun", "Adjective", "Pronoun"], "Verb"],
            ["The plural of 'mouse' is?", ["Mouses", "Mouse", "Mices", "Mice"], "Mice"],
            ["A place to buy medicine is called?", ["School", "Hospital", "Pharmacy", "Bank"], "Pharmacy"],
            ["The opposite of 'high' is?", ["Deep", "Short", "Low", "Tall"], "Low"],
            ["My father ___ a car.", ["drive", "drives", "driving", "drove"], "drives"],
            ["The synonym of 'angry' is?", ["Calm", "Mad", "Happy", "Glad"], "Mad"],

            ["Which one is a color?", ["Table", "Blue", "Chair", "Bag"], "Blue"],
            ["The opposite of 'cheap' is?", ["Expensive", "Easy", "Hard", "Soft"], "Expensive"],
            ["He ___ breakfast every morning.", ["eat", "eats", "eating", "ate"], "eats"],
            ["Which is a transportation?", ["Car", "Apple", "Shirt", "Book"], "Car"],
            ["The past tense of 'take' is?", ["Tooked", "Took", "Taken", "Tak"], "Took"],
            ["A baby cat is called?", ["Puppy", "Kitten", "Cub", "Calf"], "Kitten"],
            ["The opposite of 'easy' is?", ["Hard", "Soft", "Short", "Fast"], "Hard"],
            ["Which one is a profession?", ["Swimming", "Teacher", "Sleeping", "Running"], "Teacher"],
            ["She ___ very happy today.", ["are", "is", "am", "be"], "is"],
            ["What is the plural of 'fish'?", ["Fish", "Fishes", "Fishs", "Fiss"], "Fish"],
        ];

        // ===============================
        // IPA (exam_id = 2)
        // ===============================
        $ipa = [
            ["Perpindahan panas tanpa zat perantara disebut?", ["Konduksi", "Konveksi", "Radiasi", "Evaporasi"], "Radiasi"],
            ["Gaya yang bekerja pada benda dan menyebabkan benda berubah bentuk adalah?", ["Gaya gesek", "Gaya otot", "Gaya pegas", "Gaya normal"], "Gaya pegas"],
            ["Planet yang memiliki rotasi paling cepat adalah?", ["Bumi", "Mars", "Jupiter", "Saturnus"], "Jupiter"],
            ["Peristiwa fotosintesis terjadi di bagian sel tumbuhan bernama?", ["Mitokondria", "Kloroplas", "Inti sel", "Ribosom"], "Kloroplas"],
            ["Satuan usaha (work) dalam SI adalah?", ["Watt", "Newton", "Joule", "Ampere"], "Joule"],
            ["Alat kelamin jantan pada bunga disebut?", ["Putik", "Benang sari", "Kelopak", "Mahkota"], "Benang sari"],
            ["Gelombang yang membutuhkan medium perambatan adalah?", ["Gelombang cahaya", "Gelombang radio", "Gelombang bunyi", "Sinar gamma"], "Gelombang bunyi"],
            ["Jumlah proton dalam atom disebut?", ["Nomor massa", "Nomor atom", "Isotop", "Isobar"], "Nomor atom"],
            ["Gaya gravitasi pertama kali dijelaskan oleh?", ["Einstein", "Newton", "Galileo", "Bohr"], "Newton"],
            ["Struktur DNA berbentuk?", ["Double helix", "Lurus", "Lingkaran", "Spiral satu untai"], "Double helix"],
            ["Perubahan wujud cair menjadi gas disebut?", ["Kondensasi", "Sublimasi", "Evaporasi", "Deposisi"], "Evaporasi"],
            ["Bagian telinga yang berfungsi menangkap getaran bunyi adalah?", ["Koklea", "Gendang telinga", "Saraf auditori", "Telinga bagian dalam"], "Gendang telinga"],
            ["Hewan vertebrata adalah hewan yang memiliki?", ["Kaki banyak", "Kerangka luar", "Tulang belakang", "Rangka lunak"], "Tulang belakang"],
            ["Persamaan kimia yang seimbang disebut?", ["Reaksi endoterm", "Stoikiometri", "Reaksi isoton", "Reaksi spontan"], "Stoikiometri"],
            ["Zat yang mempercepat reaksi kimia tanpa ikut bereaksi adalah?", ["Katalis", "Inhibitor", "Enzim", "Reaktan"], "Katalis"],
            ["Planet terdekat dari matahari adalah?", ["Venus", "Merkurius", "Bumi", "Mars"], "Merkurius"],
            ["Kecepatan cahaya di ruang hampa adalah?", ["3×10⁶ m/s", "3×10⁸ m/s", "3×10⁴ m/s", "3×10¹⁰ m/s"], "3×10⁸ m/s"],
            ["Senyawa yang hanya tersusun dari satu jenis atom disebut?", ["Campuran", "Unsur", "Molekul", "Larutan"], "Unsur"],
            ["Jaringan tumbuhan yang memperbesar diameter batang adalah?", ["Xilem", "Floem", "Kambium", "Epidermis"], "Kambium"],
            ["Gas yang paling banyak di atmosfer bumi adalah?", ["Oksigen", "Nitrogen", "Karbon dioksida", "Hidrogen"], "Nitrogen"],
            ["Tekanan berbanding lurus dengan?", ["Gaya", "Luas penampang", "Volume", "Temperatur"], "Gaya"],
            ["Benda mengapung jika massa jenisnya?", ["Lebih besar", "Lebih kecil", "Sama", "Tidak berpengaruh"], "Lebih kecil"],
            ["Alat untuk mengukur intensitas cahaya adalah?", ["Voltmeter", "Lux meter", "Higrometer", "Manometer"], "Lux meter"],
            ["Respirasi menghasilkan energi dalam bentuk?", ["Lemak", "Protein", "ATP", "RNA"], "ATP"],
            ["Perubahan wujud padat langsung menjadi gas disebut?", ["Deposisi", "Sublimasi", "Kondensasi", "Evaporasi"], "Sublimasi"],
            ["Unit dasar pewarisan sifat adalah?", ["Sel", "Gen", "DNA", "Kromosom"], "Gen"],
            ["Gelombang radio termasuk gelombang?", ["Mekanik", "Longitudinal", "Transversal", "Bunyi"], "Transversal"],
            ["Sifat asam memiliki nilai pH?", ["7", ">7", "<7", "Tidak pasti"], "<7"],
            ["Energi potensial dipengaruhi oleh?", ["Kecepatan", "Massa dan ketinggian", "Tekanan", "Suhu"], "Massa dan ketinggian"],
            ["Otot yang bekerja tanpa disadari adalah?", ["Otot lurik", "Otot jantung", "Otot rangka", "Semua otot"], "Otot jantung"],
            ["Hukum Ohm menyatakan V =?", ["I × R", "m × g", "P × t", "F × s"], "I × R"],
            ["Zat yang tidak dapat diuraikan menjadi zat lebih sederhana adalah?", ["Senyawa", "Unsur", "Campuran", "Larutan"], "Unsur"],
            ["Hewan yang mengalami metamorfosis sempurna adalah?", ["Ayam", "Belalang", "Kupu-kupu", "Cicak"], "Kupu-kupu"],
            ["Alat optik yang bekerja seperti mata manusia adalah?", ["Teropong", "Kamera", "Mikroskop", "Kaca pembesar"], "Kamera"],
            ["Reaksi fusi terjadi pada?", ["Reaktor fisi", "Matahari", "Baterai", "Panas bumi"], "Matahari"],
            ["Sel darah yang berfungsi membunuh patogen adalah?", ["Eritrosit", "Leukosit", "Trombosit", "Plasma"], "Leukosit"],
            ["Sumber energi utama tubuh adalah?", ["Protein", "Karbohidrat", "Lemak", "Vitamin"], "Karbohidrat"],
            ["Perubahan kimia ditandai oleh?", ["Perubahan bentuk", "Perubahan warna atau gas baru terbentuk", "Perubahan ukuran", "Perubahan fase sementara"], "Perubahan warna atau gas baru terbentuk"],
            ["Besaran yang memiliki arah dan besar disebut?", ["Skalar", "Vektor", "Tetapan", "Dimensi"], "Vektor"],
            ["Pencernaan karbohidrat dimulai dari?", ["Lambung", "Usus halus", "Mulut", "Usus besar"], "Mulut"],
            ["Lapisan atmosfer tempat terjadinya cuaca adalah?", ["Stratosfer", "Mesosfer", "Troposfer", "Ionosfer"], "Troposfer"],
            ["Hidrokarbon jenuh disebut?", ["Alkena", "Alkana", "Alkuna", "Aromatik"], "Alkana"],
            ["Unit SI dari gaya adalah?", ["Joule", "Newton", "Watt", "Pascal"], "Newton"],
            ["Sifat cahaya yang menyebabkan bayangan terbentuk adalah?", ["Dapat dipantulkan", "Dapat dibiaskan", "Merambat lurus", "Merambat melengkung"], "Merambat lurus"],
            ["Sel prokariotik tidak memiliki?", ["Membran sel", "Inti sel sejati", "Sitoplasma", "DNA"], "Inti sel sejati"],
            ["Perubahan energi pada kipas angin adalah?", ["Listrik → Gerak", "Kimia → Gerak", "Gerak → Listrik", "Panas → Listrik"], "Listrik → Gerak"],
            ["Proses menghilangkan air dari tanaman agar awet disebut?", ["Dehidrasi", "Osmosis", "Filtrasi", "Difusi"], "Dehidrasi"],
            ["Hewan pemakan tumbuhan disebut?", ["Herbivor", "Karnivor", "Omnivor", "Detritivor"], "Herbivor"],
            ["Bagian mata yang mengatur banyaknya cahaya yang masuk adalah?", ["Retina", "Lensa", "Pupil", "Kornea"], "Pupil"],
            ["Arus listrik yang arah alirannya tetap disebut?", ["AC", "DC", "Hybrid", "Ionik"], "DC"]

        ];

        // ===============================
        // MATEMATIKA (exam_id = 1)
        // ===============================
        $matematika = [
            ["Hasil dari 12 × 8 adalah?", ["96", "88", "104", "92"], "96"],
            ["Penyelesaian dari 2x + 5 = 15 adalah?", ["x = 5", "x = 10", "x = -5", "x = 15"], "x = 5"],
            ["Nilai dari √81 adalah?", ["7", "8", "9", "10"], "9"],
            ["Hasil dari 3² + 4² adalah?", ["12", "25", "7", "24"], "25"],
            ["Jika y = 2x + 3, nilai y saat x = 4 adalah?", ["10", "11", "12", "9"], "11"],
            ["Hasil dari 15 ÷ 3 × 2 adalah?", ["5", "10", "15", "12"], "10"],
            ["Bentuk sederhana dari 18/24 adalah?", ["3/4", "2/3", "3/5", "4/5"], "3/4"],
            ["Hasil dari 7 × (5 + 3) adalah?", ["50", "56", "48", "52"], "56"],
            ["Keliling persegi dengan sisi 9 cm adalah?", ["36 cm", "18 cm", "27 cm", "81 cm"], "36 cm"],
            ["Luas segitiga dengan alas 8 cm dan tinggi 5 cm adalah?", ["20 cm²", "40 cm²", "30 cm²", "25 cm²"], "20 cm²"],

            ["Hasil dari 2³ × 2² adalah?", ["8", "16", "32", "64"], "32"],
            ["Penyelesaian dari x² = 49 adalah?", ["x = 7", "x = -7", "x = ±7", "x = 0"], "x = ±7"],
            ["Hasil dari 1/2 + 2/3 adalah?", ["7/6", "4/5", "3/4", "5/6"], "7/6"],
            ["Bentuk desimal dari 3/8 adalah?", ["0.375", "0.35", "0.38", "0.325"], "0.375"],
            ["Jika sudut A = 60° dan sudut B = 90°, sudut C adalah?", ["30°", "60°", "90°", "120°"], "30°"],

            ["Hasil dari 5! adalah?", ["120", "60", "24", "720"], "120"],
            ["Bentuk pecahan dari 0.125 adalah?", ["1/8", "1/4", "1/10", "1/6"], "1/8"],
            ["Hasil dari (2 + 3)² adalah?", ["10", "25", "13", "5"], "25"],
            ["Bentuk aljabar dari ‘dua dikurangi x’ adalah?", ["2x", "2 - x", "x - 2", "2 + x"], "2 - x"],
            ["Bilangan prima terkecil adalah?", ["0", "1", "2", "3"], "2"],

            ["Hasil dari 9² – 6² adalah?", ["15", "45", "27", "81"], "45"],
            ["Penyelesaian dari 3x - 7 = 8 adalah?", ["x = 3", "x = 5", "x = 7", "x = 15"], "x = 5"],
            ["Hasil dari 0.4 × 0.5 adalah?", ["0.2", "0.9", "0.25", "0.45"], "0.2"],
            ["Jika p : q = 3 : 4, maka q : p adalah?", ["3 : 4", "4 : 3", "1 : 1", "4 : 7"], "4 : 3"],
            ["Hasil dari 2² × 3² adalah?", ["12", "36", "18", "9"], "36"],

            ["Bentuk pecahan dari 0.6 adalah?", ["3/5", "2/3", "6/10", "5/6"], "3/5"],
            ["Hasil dari 5 × (4 + 6) ÷ 2 adalah?", ["20", "25", "30", "50"], "25"],
            ["Penyelesaian dari x/5 = 3 adalah?", ["x = 15", "x = 8", "x = 5", "x = 3"], "x = 15"],
            ["Bentuk sederhana dari 20/60 adalah?", ["1/3", "2/3", "1/2", "1/4"], "1/3"],
            ["Hasil dari (7 × 3) - (4 × 2) adalah?", ["13", "17", "14", "15"], "13"],

            ["Jika x = 2, y = 3, nilai 2x + 3y adalah?", ["10", "11", "12", "13"], "13"],
            ["Hasil dari 8 ÷ 0.2 adalah?", ["0.4", "1.6", "40", "16"], "40"],
            ["Faktorisasi dari x² + 5x adalah?", ["x(x + 5)", "x(x - 5)", "(x+5)(x-5)", "x²+5"], "x(x + 5)"],
            ["Hasil dari 3/4 ÷ 1/2 adalah?", ["3/8", "3/2", "2/3", "1/2"], "3/2"],
            ["Nilai dari | -7 | adalah?", ["-7", "0", "7", "14"], "7"],

            ["Hasil dari 10² ÷ 5² adalah?", ["2", "4", "5", "25"], "4"],
            ["Hasil dari 2³ + 3³ adalah?", ["17", "35", "27", "39"], "35"],
            ["Bentuk pecahan dari 0.75 adalah?", ["3/4", "2/3", "1/2", "4/5"], "3/4"],
            ["Hasil dari 5 × 5 – 5 ÷ 5 adalah?", ["20", "24", "25", "23"], "24"],
            ["Penyelesaian dari 4x – 8 = 0 adalah?", ["x = 1", "x = 2", "x = 4", "x = 8"], "x = 2"],

            ["Bentuk desimal dari 7/10 adalah?", ["0.07", "0.7", "0.75", "0.17"], "0.7"],
            ["Hasil dari (6 + 2) × (5 – 3) adalah?", ["12", "16", "20", "14"], "16"],
            ["Bentuk sederhana dari 45/60 adalah?", ["3/4", "4/5", "2/3", "5/6"], "3/4"],
            ["Hasil dari 9 + 6 ÷ 3 adalah?", ["5", "11", "13", "15"], "11"],
            ["Jika sudut A = 45° dan sudut B = 45°, sudut C adalah?", ["45°", "90°", "60°", "30°"], "90°"],

            ["Hasil dari 2 × 3 × 4 adalah?", ["12", "18", "24", "30"], "24"],
            ["Penyelesaian dari x² – 16 = 0 adalah?", ["x = 4", "x = -4", "x = ±4", "x = 0"], "x = ±4"],
            ["Hasil dari 0.2 + 0.3 adalah?", ["0.5", "0.6", "0.4", "0.3"], "0.5"],
            ["Bentuk sederhana dari 56/98 adalah?", ["4/7", "5/7", "3/7", "6/7"], "4/7"],
            ["Hasil dari 10 × (2 + 3) ÷ 5 adalah?", ["5", "10", "8", "12"], "10"],
        ];

        // ===============================
        // IPS (exam_id = 3)
        // ===============================
        $ips = [
            ["Perpindahan penduduk dari desa ke kota disebut?", ["Migrasi", "Urbanisasi", "Transmigrasi", "Emigrasi"], "Urbanisasi"],
            ["Lembaga yang mengatur proses produksi dan distribusi barang adalah?", ["Lembaga sosial", "Lembaga politik", "Lembaga ekonomi", "Lembaga budaya"], "Lembaga ekonomi"],
            ["Pulau terbesar di Indonesia adalah?", ["Jawa", "Sumatra", "Kalimantan", "Sulawesi"], "Kalimantan"],
            ["Kegiatan menukar barang dengan barang disebut?", ["Barter", "Distribusi", "Konsumsi", "Produksi"], "Barter"],
            ["Ilmu yang mempelajari hubungan manusia dengan lingkungan disebut?", ["Geologi", "Ekologi", "Sosiologi", "Antropologi"], "Ekologi"],

            ["Globalisasi menyebabkan dunia seolah menjadi?", ["Mengecil", "Membesar", "Statis", "Tidak berubah"], "Mengecil"],
            ["Sumber daya alam yang dapat diperbarui adalah?", ["Batu bara", "Minyak bumi", "Angin", "Gas alam"], "Angin"],
            ["Indonesia pernah dijajah oleh negara?", ["Amerika", "Spanyol", "Belanda", "India"], "Belanda"],
            ["Kebudayaan daerah di Indonesia disebut sebagai?", ["Budaya nasional", "Budaya lokal", "Budaya modern", "Budaya internasional"], "Budaya lokal"],
            ["Ketua BPUPKI adalah?", ["Soekarno", "Dr. Radjiman Wedyodiningrat", "Moh. Hatta", "Soepomo"], "Dr. Radjiman Wedyodiningrat"],

            ["Konstitusi pertama Indonesia adalah?", ["UUD 1945", "UUDS 1950", "RIS 1949", "Amandemen UUD"], "UUD 1945"],
            ["Pelaku utama kegiatan konsumsi adalah?", ["Produsen", "Distributor", "Konsumen", "Pemerintah"], "Konsumen"],
            ["Kegiatan ekspor berarti?", ["Menjual barang ke luar negeri", "Membeli barang dari luar negeri", "Menjual barang dalam negeri", "Mengimpor jasa"], "Menjual barang ke luar negeri"],
            ["Negara yang menganut sistem ekonomi komando adalah?", ["Amerika Serikat", "Korea Utara", "Jerman", "Jepang"], "Korea Utara"],
            ["Gunung tertinggi di Indonesia adalah?", ["Semeru", "Kerinci", "Cartenzs Pyramid", "Rinjani"], "Cartenzs Pyramid"],

            ["Perdagangan antarnegara disebut?", ["Perdagangan lokal", "Perdagangan internasional", "Perdagangan regional", "Perdagangan tradisional"], "Perdagangan internasional"],
            ["PBB dibentuk pada tahun?", ["1918", "1945", "1950", "1960"], "1945"],
            ["Peta yang menunjukkan batas negara disebut peta?", ["Topografi", "Politik", "Iklim", "Geologi"], "Politik"],
            ["Bencana akibat ulah manusia disebut?", ["Bencana alam", "Bencana sosial", "Bencana buatan", "Semua benar"], "Bencana buatan"],
            ["Kegiatan membuat barang untuk memenuhi kebutuhan disebut?", ["Distribusi", "Produksi", "Konsumsi", "Modal"], "Produksi"],

            ["Kegiatan menyalurkan barang disebut?", ["Produksi", "Distribusi", "Konsumsi", "Barter"], "Distribusi"],
            ["Salah satu dampak negatif urbanisasi adalah?", ["Kemajuan ekonomi", "Kemacetan", "Bertambahnya lapangan kerja", "Penataan kota"], "Kemacetan"],
            ["Pulau terpadat penduduknya di Indonesia adalah?", ["Bali", "Sumatra", "Kalimantan", "Jawa"], "Jawa"],
            ["Kegiatan belajar mengajar termasuk lembaga?", ["Ekonomi", "Pendidikan", "Agama", "Politik"], "Pendidikan"],
            ["Yang termasuk kebutuhan primer adalah?", ["Rumah", "Mobil", "Perhiasan", "Televisi"], "Rumah"],

            ["Tokoh proklamator Indonesia adalah?", ["Soedirman dan Hatta", "Soekarno dan Hatta", "Soekarno dan Sjahrir", "Hatta dan Sjahrir"], "Soekarno dan Hatta"],
            ["Arah mata angin yang menunjukkan timur adalah?", ["Sunrise", "Sunset", "North", "South"], "Sunrise"],
            ["Pengangguran karena kemajuan teknologi disebut?", ["Pengangguran friksional", "Pengangguran struktural", "Pengangguran musiman", "Pengangguran siklis"], "Pengangguran struktural"],
            ["Bentuk permukaan bumi yang paling luas adalah?", ["Dataran rendah", "Gunung", "Laut", "Sungai"], "Laut"],
            ["Sistem pemerintahan Indonesia adalah?", ["Monarki", "Parlementer", "Presidensial", "Komunis"], "Presidensial"],

            ["Perjanjian Renville terjadi pada tahun?", ["1946", "1947", "1948", "1950"], "1948"],
            ["Komoditas ekspor utama Indonesia adalah?", ["Minyak bumi", "Garam", "Gandum", "Ternak"], "Minyak bumi"],
            ["Keragaman budaya di Indonesia disebabkan oleh?", ["Jumlah penduduk sedikit", "Letak geografis beragam", "Pengaruh luar negeri", "Bencana alam"], "Letak geografis beragam"],
            ["Gunung Merapi terletak di pulau?", ["Jawa", "Sumatra", "Bali", "NTT"], "Jawa"],
            ["Nilai tukar mata uang disebut?", ["Kurs", "Inflasi", "Deflasi", "Nominal"], "Kurs"],

            ["Belanja online termasuk contoh perubahan?", ["Regres", "Progresif", "Revolusioner", "Tradisional"], "Progresif"],
            ["Bank Indonesia berfungsi sebagai?", ["Bank swasta", "Bank devisa", "Bank sentral", "Bank rakyat"], "Bank sentral"],
            ["Iklim di Indonesia dipengaruhi oleh?", ["Letak benua", "Letak astronomis", "Gempa bumi", "Jumlah penduduk"], "Letak astronomis"],
            ["Sumpah Pemuda terjadi pada tahun?", ["1926", "1927", "1928", "1930"], "1928"],
            ["Agen sosialisasi yang pertama kali dikenal anak adalah?", ["Sekolah", "Teman sebaya", "Media massa", "Keluarga"], "Keluarga"],

            ["ASEAN berdiri pada tahun?", ["1967", "1970", "1980", "1990"], "1967"],
            ["Alat pembayaran yang sah adalah?", ["Cek", "Kartu kredit", "Uang", "Emas"], "Uang"],
            ["Perekonomian Indonesia berdasarkan sistem ekonomi?", ["Liberal", "Komando", "Campuran", "Tertutup"], "Campuran"],
            ["Kegiatan menggunakan barang untuk memenuhi kebutuhan disebut?", ["Konsumsi", "Produksi", "Distribusi", "Ekspor"], "Konsumsi"],
            ["Iklim tropis ditandai oleh?", ["Salju", "Musim panas panjang", "Curah hujan tinggi", "Suhu selalu rendah"], "Curah hujan tinggi"],

            ["Monopoli adalah penguasaan pasar oleh?", ["Banyak produsen", "Beberapa produsen", "Satu produsen", "Konsumen"], "Satu produsen"],
            ["Hak untuk menyampaikan pendapat dijamin oleh?", ["UUD 1945", "Sumpah Pemuda", "Pancasila sila ke-4", "UU HAM"], "UUD 1945"],
            ["Penyebab utama kemacetan di kota besar adalah?", ["Pendidikan rendah", "Kepadatan penduduk", "Pertanian turun", "Bencana alam"], "Kepadatan penduduk"],
            ["Rumah adat Tongkonan berasal dari?", ["Sumatra", "Kalimantan", "Toraja", "Papua"], "Toraja"],
            ["Bentuk negara Indonesia adalah?", ["Kerajaan", "Republik", "Federasi", "Monarki"], "Republik"]
        ];

        // ===============================
        // INSERT GENERAL FUNCTION
        // ===============================
        $this->insertQuestions($english, 4);
        $this->insertQuestions($ipa, 2);
        $this->insertQuestions($matematika, 1);
        $this->insertQuestions($ips, 3);
    }

    private function insertQuestions($list, $examId)
    {
        foreach ($list as $q) {
            Question::create([
                'exam_id' => $examId,
                'question' => $q[0],
                'option_a' => $q[1][0],
                'option_b' => $q[1][1],
                'option_c' => $q[1][2],
                'option_d' => $q[1][3],
                'correct_answer' => ['a', 'b', 'c', 'd'][array_search($q[2], $q[1])],
            ]);
        }
    }
}
