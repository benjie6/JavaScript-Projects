function myDictionary() {
    var car = {
        make: "nissan",
        model: "gtr r34 skyline",
        year: 1999,
    };
    delete car.model // value is now undefined 
    document.getElementById("Dictionary").innerHTML = car.model;
}

function dictionary() {
    var KVPS = {
        key: "keyvalue1",
        key: "keyvalue2",
    };
    document.getElementById("KVPs").innerHTML = KVPS.key;
}