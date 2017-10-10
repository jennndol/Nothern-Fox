function balikString(input){
    var hasil = "";
    for (var i = input.length - 1; i >= 0; i--) { 
        hasil += input[i]; 
    }
    return hasil;
}

var input = "hello world!";
console.log(balikString(input));