function getRandom(){
    return Math.floor(Math.random() * 3) + 1;
}

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var numbers = [];
var guessNumbers = [];
var rightNumbers = [];

rl.question('Please enter your name : ', function(name){
    console.log('Hey '+ name + '...!\nWelcome to guess number quiz\nPlease enter your guess numbers (between 1 until 3)');
    rl.question('Your first number here! : ', function(number1){
        guessNumbers.push(number1);        
        numbers.push(getRandom());
        rl.question('Your second number here! : ', function(number2){
            guessNumbers.push(number2);
            numbers.push(getRandom());
            rl.question('Your third number here! ', function(number3){
                guessNumbers.push(number3);
                numbers.push(getRandom());
                console.log('Random Numbers : ' + numbers);
                console.log('Guess Numbers :' + guessNumbers);
                
                for(var i=0; i<3; i++){
                    if(guessNumbers[i] == numbers[i]){
                        rightNumbers.push(guessNumbers[i]);
                    }
                }
                console.log(rightNumbers);
                console.log('correct answers persentage : '+ Math.floor(Number(rightNumbers.length)/Number(guessNumbers.length)*100) + '%');
                rl.close();            
            });
        });
    });
});