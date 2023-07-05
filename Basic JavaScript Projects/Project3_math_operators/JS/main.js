function addition_Function() {
    var addition = 5 + 5;
    document.getElementById("Math").innerHTML = "5 + 5 =" + addition;
}

//working with subraction 
function subtract() {
    var sub = 20 - 5;
    document.getElementById("Math").innerHTML = " 20 - 5 =" + sub;
}

//working with multiplaction 
function multiplaction() {
    var multiply = 7 * 8;
    document.getElementById("Math").innerHTML = " 7 * 8 =" + multiply;
}

//working with divsion 
function divsion() {
    var divide = 42 / 2;
    document.getElementById("Math").innerHTML = " 42 / 2 =" + divide;
}

//working with subraction, multiplaction, divsion, and addition 
function mathematics() {
    var more_math = (5 + 5) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "5 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + more_math;
}

//Modulus operator
function operator() {
    var more_math = 22 % 4;
    document.getElementById("Math").innerHTML = "when you divide 22 by 4 you have a remainder of: " + more_math;
}

//negation operator
function negation() {
    var V= 5;
    document.getElementById("Math").innerHTML = - + V;
}

//increment operator
var v = 5;
v++;
document.write(v);

//decrement operator
var X = 5.55;
X--;
document.write(X);

//math.random
window.alert(Math.random()*50);

//Math method
function round() {
    var more_math = Math.round(20.5);
    document.getElementById("Math").innerHTML = Math.round(20.5);
}
