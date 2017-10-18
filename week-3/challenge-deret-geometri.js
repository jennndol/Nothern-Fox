function tentukanDeretGeometri(arr) {
    var multipliedBy = [];
    var isEqual = true;
    for(var i = 0; i<arr.length-1; i++){
        multipliedBy.push(arr[i+1]/arr[i]);
    }

    for(j=0;j<multipliedBy.length - 1;j++){
        if (multipliedBy[j] != multipliedBy[j+1]){
            isEqual = false;            
        }
    }
    return isEqual;
}
  
// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false