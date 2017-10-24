function fpb(angka1, angka2) {
  var factors1 = [], factors2 = [], commonValues = [];
  for(var i=1; i<=angka1; i++){
    if(angka1%i==0){
        factors1.push(i);
    }
  }

  for(var j=1; j<=angka2; j++){
    if(angka2%j==0){
        factors2.push(j);
    }
  }

  commonValues = factors1.filter(function(value) { 
    return factors2.indexOf(value) > -1;
  });

  return (commonValues.reduce(function(a, b){
    return Math.max(a,b);
  }));
}
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1