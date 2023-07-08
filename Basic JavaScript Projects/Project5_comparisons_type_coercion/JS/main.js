document.write(typeof "day"); //output string
document.write("11" + 20);

//display NaN
function NAN() {
    document.getElementById("Test").innerHTML = 0/0;
}

//display true
function true_function() {
    document.getElementById("demo").innerHTML = isNaN("hello");//utilized isNAN()
}

//display false
function false_function() {
    document.getElementById("example").innerHTML = isNaN("456");
}

//displaying infinity
document.write(2e310);

//displaying negative infinity
document.write(-3e310);

//boolean logic
document.write(7>4);

//console function
console.log(4 + 6);

console.log(8<3);

//double equal sign
document.write(5 == 9);

//triple equal sign 
x= 22;
y= 22;
document.write(x === y); //return true 

x = 5;
y = "hello"
document.write(x === y); //return false

x = 7;
y = "7";
document.write(x === y); //return false

x = true;
y = false;
document.write(x === y); //return false

//AND operator
document.write( 28 > 10 && 7 > 2);

//OR operator
document.write(9<10 || 11<12);

//NOT operator
function my_function() {
    document.getElementById("Not").innerHTML = !(7>10);
}
