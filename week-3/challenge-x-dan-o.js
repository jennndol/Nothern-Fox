function xo(str) {
    o = str.split('x');
    x = str.split('o');
    if(o.length === x.length){
        return true;
    }
    else{
        return false;
    }
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true