function sentence() {
    var part1 = " making this "
    var part2 = " into a "
    var part3 = " sentence "
    var full = part1.concat(part2, part3);
    document.getElementById("connect").innerHTML = full;
}

//sclice method
function slice() {
    var cities = "tokyo , portland, seattle";
    var section = cities.slice(6);
    document.getElementById("places").innerHTML = section;
}

//top upper case method
function uppercase() {
    var text = "hello world";
    var result = text.toUpperCase();
    document.getElementById("instruction").innerHTML = result;
}

//tostring method
function method() {
    var Y = 77;
    document.getElementById("string").innerHTML = Y.toString();
}

//to precision method
function precision() {
    var x = 7101120.907712
    document.getElementById("to").innerHTML = x.toPrecision(7);
}

function numbers(){
    var num = 7.56;
    var n = num.toFixed();
    document.getElementById("fix").innerHTML = n;
}