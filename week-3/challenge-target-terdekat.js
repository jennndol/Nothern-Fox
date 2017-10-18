function targetTerdekat(arr) {
    var result;
    var idX, idO;
    var distances = [];
    if (arr.indexOf('x')===-1){
        result = 0;
    }
    else{
        for(var i=0; i<arr.length; i++){
            if(arr[i]!==''){
                if(arr[i]=='x'){
                    idX = [i];
                } else if(arr[i]=='o'){
                    idO = [i];
                }
                distances.push(Math.abs(idX-idO));
            }
        }
        distances.sort();
        result = distances[0];
    }
    return result;
}
  
// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2