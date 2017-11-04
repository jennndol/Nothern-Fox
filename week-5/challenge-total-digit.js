function totalDigitRekursif(angka) {
    var strAngka = String(angka);
    if(strAngka.length === 1){
        return angka;
    }
    else {
        var leftNumber = Number(strAngka[0]);
        var rightNumbers = Number(strAngka.slice(1));
        return leftNumber + totalDigitRekursif(rightNumbers);
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5