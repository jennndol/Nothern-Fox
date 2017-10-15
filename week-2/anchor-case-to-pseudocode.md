<!-- Tugas 1

Buatlah sebuah pseudocode yang mengambil dua angka, dan menghitung serta menampilkan hasil perkalian dari kedua bilangan tersebut.

hint: Gunakan kata kunci SIMPAN, HITUNG, dan TULISKAN. -->

SIMPAN `angka pertama`
SIMPAN `angka kedua`
HITUNG `angka pertama` dikalikan dengan `angka kedua`
SIMPAN hasil perhitungan sebelumnya
TULISKAN hasil perhitungan

SAVE `first number`
SAVE `second number`
COMPUTE `first number` multiplied by `second number`
SAVE the previous computation result
WRITE the computation result

------------------------------------------------------

<!-- Tugas 2

Buatlah sebuah pseudocode yang mengambil sebuah kata, dan jika kata yang diambil bertuliskan "Saya Belajar JavaScript!", tampilkan "Pasti Bisa!".

hint: Gunakan kata kunci SIMPAN, IF, dan TULISKAN. -->

SIMPAN `kata`
IF `kata` sama dengan `Saya Belajar JavaScript!`
    TULISKAN `Pasti Bisa!`
END IF

SAVE `word`
IF `word` is equal to `Saya Belajar JavaScript!`
    WRITE `Pasti Bisa!`
END IF
------------------------------------------------------

<!-- Tugas 3

Buatlah sebuah pseudocode yang mengambil sebuah angka. Tampilkan sebuah deret angka yang habis dibagi 3 dan dimulai dari angka 1. Deret angka akan berhenti sampai deret angka tersebut mencapai angka yang disimpan sebelumnya.

hint: Gunakan kata kunci SIMPAN, ULANGI, dan TAMPILKAN. -->

SIMPAN `angka maksimum`
ULANGI setiap pertambahan 1 `index` dari 1 sampai `angka maksimum`
    SIMPAN `angka` dari angka `index` yang sisa hasil bagi dengan 3 = 0
    TAMPILKAN `angka`
END ULANGI

SAVE `maximum number`
FOR every addition 1 in `index` from 1 to `maximum number`
    SAVE `number` from `index` divided by 3 = 0
    SHOW `number`
END FOR