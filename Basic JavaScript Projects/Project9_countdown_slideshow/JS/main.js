function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Times up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

var slideindex = 0;
displayimages();
function displayimages() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideindex++;
    if (slideindex > slides.length) {slideindex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideindex-1].style.display = "block";
    dots[slideindex-1].className += " active";
    setTimeout(displayimages, 2000); //changing img every 2 seconds
}