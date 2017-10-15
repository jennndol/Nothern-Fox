// call readline module
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// declare variables
var randomNumbers = [];
var guessNumbers = [];
var rightNumbers = [];

// get name and show it
rl.question('\nPlease enter your name : ', function(args){
    console.log('Hey '+ args + '...!\nWelcome to guess the numbers quiz\nPlease enter your guess numbers (between 1 until 3)');
    console.log('\n');
    
    // get first number, generate random number and save it into array
    rl.question('Your first number here! : ', function(args){
        guessNumbers.push(args);        
        randomNumbers.push(getRandom());

        // get second number, generate random number and save it into array
        rl.question('Your second number here! : ', function(args){
            guessNumbers.push(args);
            randomNumbers.push(getRandom());

            // get third number, generate random number and save it into array
            rl.question('Your third number here! ', function(args){
                guessNumbers.push(args);
                randomNumbers.push(getRandom());

                // Match the guessNumbers and randomNumbers and save into rightNumbers if there is right number
                for(var i=0; i<guessNumbers.length; i++){
                    if(guessNumbers[i] == randomNumbers[i]){
                        rightNumbers.push(guessNumbers[i]);
                    }
                }

                // Show the result
                console.log('\nHere is the result');
                console.log('-------------------------------');
                console.log('Guess numbers :' + guessNumbers);
                console.log('Random numbers : ' + randomNumbers);
                console.log('-------------------------------');                
                console.log('So, you have ' + getTotalRightNumbers(rightNumbers));
                console.log('correct number persentage : '+ getPercentage(rightNumbers.length, guessNumbers.length));
                console.log('\n');

                // close the readline interface
                rl.close();            
            });
        });
    });
});


/*
function getRandom: used to get random number in range between 1 until 3
*/
function getRandom(){
    return Math.floor(Math.random() * 3) + 1;
}

/*
function getPercentage: used to get percentage of something
*/
function getPercentage(x, y){
    return Math.floor(Number(x)/Number(y)*100) + '%';
}

/*
function getTotalRightNumbers: used to get the result of total in string of the correct numbers
*/
function getTotalRightNumbers(x){ // where x is the rightnumbers
    var correctAnswerTotal = x.length;
    var message;

    // Check if total of correct answers is more than 0
    if (correctAnswerTotal>0){
        message = correctAnswerTotal + ' correct '+ numberOrNumbers(correctAnswerTotal) +',\nAnd those numbers are ' + x;
    }
    else {
        message = 'no correct numbers';
    }
    return message;
}

/*
function numberOrNumbers: used to get word 'number' or 'numbers' depends on the input
*/
function numberOrNumbers(x){ // where x is the number
    var message;
    if (x > 1){
        message = 'numbers';
    }
    else{
        message = 'number';
    }
    return message;
}