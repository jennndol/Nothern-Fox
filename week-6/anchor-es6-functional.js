/**
 * Tugas 1
 * Buatlah sebuah code yang mentransformasi array menggunakan map!
 */

var transformArrToLowerCase = arr => {
    // Ubah setiap element array menjadi lowercase! 
    let result = arr.map((isiArray) => {
        return isiArray.toLowerCase();
    })
    return result;
};

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']

/**
 * Tugas 2
 * Buatlah sebuah code yang melakukan filter ke array menggunakan filter!
 */

var filterArrUnder10 = arr => {
    // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!
    let result = arr.filter((isiArray) => {
        return isiArray > 10;
    })
    return result;
};

console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]

/**
 * Tugas 3
 * Buatlah sebuah code yang mendapatkan nilai terbesar menggunakan reduce!
 */

var reduceFindMaximum = arr => {
    // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
    let result = arr.reduce((a, b) => {
        return Math.max(a, b);
    })
    return result;
}
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9