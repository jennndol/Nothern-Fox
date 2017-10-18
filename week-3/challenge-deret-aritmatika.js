function tentukanDeretAritmatika(arr) {
    var distances = [];
    var isEqual = true;
    for(var i = 0; i<arr.length-1; i++){
        distances.push(arr[i+1]-arr[i]);
    }

    for(j=0;j<distances.length - 1;j++){
        if (distances[j] != distances[j+1]){
            isEqual = false;            
        }
    }
    return isEqual;
}
  
// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false