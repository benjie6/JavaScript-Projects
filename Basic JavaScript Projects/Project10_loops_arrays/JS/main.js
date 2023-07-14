function property() {
var X = "answer"
var length = X.length;
document.getElementById("run").innerHTML = length;
}

// for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";
var Y;
function for_Loop() {
    for ( Y = 0; Y < Instruments.length; Y++) {
        content =+ Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

function array_Function() {
    var car = [];
    car [0] = "nissan";
    car [1] = "blue";
    car [2] = "20mph";
    document.getElementById("Array").innerHTML = "show me make of the car " + car[0] + ".";

}

function constant_function() {
    const cars = {make:"toyota", color:"black", fuel:"gasoline"}
    cars.currentspeed = "20mph"
    cars.color = "white"
    document.getElementById("Constant").innerHTML = "The spped of this car is " + cars.currentspeed;
}

//let keyword
let number = 42;
console.log(number);

//return 
 function myfunction() {
    return Math.PI
 }
document.getElementById("return").innerHTML = myfunction();


let car = {
    make: "toyota ",
    model: "supra" , 
    year: "1999",
    description : function() {
        return "the best car is a " + this.make + this.model + this.year;
    }
};
document.getElementById("Object").innerHTML = car.description;

