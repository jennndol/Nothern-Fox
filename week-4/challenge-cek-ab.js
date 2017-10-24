function checkAB(num) {
    var temp = [];
    for(var i=0; i<num.length;i++){
        if(num[i]=='a' || num[i]=='b'){
            if((num[i]=='a') && (num[i+3+1]=='b')){
                temp.push('isFound');
            }
            else if ((num[i]=='b') && (num[i+3+1]=='a')){
                temp.push('isFound');
            }
        }
    }
    return temp.length > 0;
}
  
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false