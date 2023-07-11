//global variable
var X = 20
function global_1(){
    document.write(X + 5 + "<br>");
}
function global_2() {
    document.write(X + 40);
}
global_1();
global_2();

//local variable 
function local_1(){
    var Y = 15;
    document.write(Y + 20 + "<br>");
}
function local_2(){
document.write(Y + 10);
}
local_1();
local_2();

//console.log
function local_1(){
    var Y = 15;
    console.log(Y + 20);
}
function local_2(){
console.log(Y + 10);
}
local_1();
local_2();

//if statements
function greeting() {
    if (new Date().getHours() < 12) {
      document.getElementById("Method").innerHTML = "Good morning!";
    }
  }

function drive() {
    var age = 22;
    if (age >= 18) {
    document.getElementById("demo").innerHTML = "You can drive";
    }
}

function Eligibility() {
    age = document.getElementById("age").value;
    if (age >= 18) {
        vote = "you are old enough to vote!";
    }
    else {
        vote = "you are not old enough to vote!";
    }
    document.getElementById("Else"). innerHTML = vote;
}

//else if statement
function Time_function() {
    var Time = new Date().getHours();
    var reply;
    if (Time < 12 == Time > 0) {
        reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        reply = "It is afternoon.";
    }
    else {
        reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = reply;
}
    

