let white = document.getElementById("white");
let blue = document.getElementById("blue");
let black = document.getElementById("black");
let orange = document.getElementById("orange");

white.addEventListener("click", function () {
    document.body.style.backgroundColor = "#ffffff";
});
black.addEventListener("click", function () {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";

});
blue.addEventListener("click", function () {
    document.body.style.backgroundColor = "#6699ff";
});
orange.addEventListener("click", function () {
    document.body.style.backgroundColor = "#ff99ff";
});




// blue.addEventListener("click", fun("#6699ff"));
// orange.addEventListener("click", fun("#ff9999"));




