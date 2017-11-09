/**
 * Tugas 1
 */
const phi = 3.14;
const power = 2;
let radius = 0;
const calculateArea = function (radius) {
    return phi * Math.pow(radius, power);
}

radius = 21;
let area21 = calculateArea(radius);

radius = 7;
let area7 = calculateArea(radius);

console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

/**
 * Tugas 2
 */

const multiply = function (num1, num2) {
    return num1 * num2;
}

const divide = function (num1, num2) {
    return num1 / num2;
}

const doubleMe = function (num) {
    return num * 2;
}

console.log(multiply(5, 2));
console.log(divide(10, 2));