function First_function() {
    //assign values to varables 
    var name = "Benjamin"
    var age = "22";
    //assign HTML element by its ID
    document.getElementById("output").innerHTML = "My name is " +name+ " I am " +age+ " years old.";
}
function myfunction(){
    var sentence = "I am learning javascript";
    sentence += " and alot from this course";
    document.getElementById("concatenate").innerHTML = sentence;
}