function ubahKapital(kalimat) {
    var separatedWords = [];
    var newWords = [];
    
    separatedWords = kalimat.split(' ');

    for(var i=0; i<separatedWords.length; i++){
        newWords.push(separatedWords[i][0].toUpperCase() + separatedWords[i].slice(1));
    }

    return newWords.join(' ');
}
  
// TEST CASES
console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
console.log(ubahKapital('i have a dream')); // I Have A Dream
console.log(ubahKapital('coding is fun')); // Coding Is Fun  