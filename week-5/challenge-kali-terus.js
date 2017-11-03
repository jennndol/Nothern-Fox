function kaliTerusRekursif(angka) {
    if (String(angka).length === 1){
        return angka;
    } else {
        var firstNumber = Math.floor(angka / 10);
        var secondNumber = angka % 10;
        return kaliTerusRekursif(secondNumber * kaliTerusRekursif(firstNumber));
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6