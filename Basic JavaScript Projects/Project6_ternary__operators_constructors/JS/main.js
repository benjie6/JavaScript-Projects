function Ride_Function() {
    var Height, Can_Ride
    Height= document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "you are too short":"you are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

//TERNARY OPERATORS 
function Vote_Function() {
    var age, can_vote
    age= document.getElementById("age").value;
    can_vote = (age <= 18) ? "you are not eligiable":"you are eligiable";
    document.getElementById("Vote").innerHTML = can_vote + "to vote";
}

function Vehicle(Make, Model, Year, Color) {
    this. Vehicle_Make = Make;
    this. Vehicle_Model = Model;
    this. Vehicle_Year = Year;
    this. Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function person(first, last, age) {
    this.first_name = first;
    this.last_name = last;
    this.age = age; 
}
var myname = new person("benjamin", "vega", "22")
function create_person() {
    document.getElementById("New_and_This").innerHTML = "My name is " + myname.first_name + myname.last_name + " I am " + myname.age + " years old";
}

// nested function 
function numbers() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var starting = 13;
        function Add_five() {starting += 5;}
        Add_five();
        return starting;
    }

}