function kaliTerusRekursif(angka) {
    if (String(angka).length === 1){
        return angka;
    } else {
        var leftNumbers = Math.floor(angka / 10);
        var rightNumber = angka % 10;
        return kaliTerusRekursif(rightNumber * kaliTerusRekursif(leftNumbers));
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6