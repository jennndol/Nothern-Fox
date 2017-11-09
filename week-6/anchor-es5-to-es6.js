/**
 * Tugas 1
 */
var phi = 3.14;
var power = 2;
var radius = 0;
var calculateArea = function (radius) {
    return phi * Math.pow(radius, power);
}

radius = 21;
var area21 = calculateArea(radius);

radius = 7;
var area7 = calculateArea(radius);

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