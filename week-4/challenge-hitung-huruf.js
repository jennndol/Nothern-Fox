function hitungHuruf(kata) {
    var separatedWords = [];
    var countDuplicateChars = [];
    var counting = 0;
    var chars = '';
    var arrChars = [];
    var countingDifferentChars = 0;

    separatedWords = kata.split(' ');
    for(var i = 0; i < separatedWords.length; i++){
        for(var j=0; j<separatedWords[i].length; j++){
            for(var k=0; k<separatedWords[i].length; k++){
                if(j!==k && j<k && k>j){
                    if(separatedWords[i][j] == separatedWords[i][k]){
                        counting += 1;
                        chars += separatedWords[i][j];     
                    }
                }
            }
        }

        countDuplicateChars.push(counting);   
        arrChars.push(chars);
        counting = 0;
        chars = '';
    }
    return arrChars;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau