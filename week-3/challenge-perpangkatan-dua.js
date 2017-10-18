function perpangkatanDua(str) {
    var result = Math.log(str)/Math.log(2);
    if (result===Math.floor(result)){
        return result;
    } else {
        return -1;
    }
}
  
// TEST CASES
console.log(perpangkatanDua(64)); // 6
console.log(perpangkatanDua(22)); // -1
console.log(perpangkatanDua(16)); // 4
console.log(perpangkatanDua(222)); // -1
console.log(perpangkatanDua(1)); // 0
