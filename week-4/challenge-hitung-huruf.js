function hitungHuruf(kata) {
    var separatedWords = [];
    var chars = '';
    var arrChars = [];

    separatedWords = kata.split(' ');
    for(var i = 0; i < separatedWords.length; i++){
        for(var j=0; j<separatedWords[i].length; j++){
            for(var k=0; k<separatedWords[i].length; k++){
                if(j!==k){
                    if(separatedWords[i][j] === separatedWords[i][k]){
                        if(chars.indexOf(separatedWords[i][j])===-1){
                            chars += separatedWords[i][j];                             
                        }
                    }
                }
            }
        }
        arrChars.push(chars);
        chars = '';
    }

    var max = arrChars[0].length;
    for(var l=0; l<arrChars.length;l++){
        if(max < arrChars[l].length){
            max = arrChars[l].length;
            position = arrChars.indexOf(arrChars[l]);
        }
    }
    
    return separatedWords[position];
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau