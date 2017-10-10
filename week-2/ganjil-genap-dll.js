var tebakan;
for (var num = 1;num <=100 ;num++) {
    tebakan = num%2;
    if (tebakan==1){
        console.log("GANJIL");
    }
    else{
        console.log("GENAP");
    }
}

for (num = 1;num <=100 ;num+=2) {
    if (num%3==0){
        console.log(num + " KELIPATAN 3");    
    }
    else{
        console.log(" ");
    }
}


for (num = 1;num <=100 ;num+=5) {
    if (num%6==0){
        console.log(num + " KELIPATAN 6");    
    }
    else{
        console.log(" ");
    }
}

for (num = 1;num <=100 ;num+=9) {
    if (num%10==0){
        console.log(num + " KELIPATAN 10");    
    }
    else{
        console.log(" ");
    }
}