function digitPerkalianMinimum(angka) {
    var tempNumbers = [];
    for(var i=1; i<=angka; i++){
        if(angka % i === 0){
            var j = angka / i;
            var lengthOfChars = (String(i) + String(j)).length;
            tempNumbers.push(lengthOfChars);
        }
    }
    return tempNumbers.sort()[0];
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2