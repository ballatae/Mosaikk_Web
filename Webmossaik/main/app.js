var home = document.getElementById("home");
var about = document.getElementById("about");
var services = document.getElementById("services");
var contact = document.getElementById("contact");
var circle = document.getElementsByClassName("circle");


function phoneBall(number) {
    console.log("U thirra");

    if (number === 1) {
        document.getElementById("circle").style.left = "7%";
    }
    else if (number === 2) {
        document.getElementById("circle").style.left = "31.7%";
    }
    else if (number === 3) {
        document.getElementById("circle").style.left = "57%";
    }
    else if (number === 4) {
        document.getElementById("circle").style.left = "82%";
    }
}
