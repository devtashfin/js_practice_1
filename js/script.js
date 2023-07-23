// text change
function textChange() {
    document.getElementById("h2").innerHTML ="Walaikum Salam.";
}
// show the date
function showDate() {
    document.getElementById("dh2").innerHTML = Date();
}
// repeat text
function dataRepeat() {
    var text = "I Love U💖";
    document.getElementById("varh2").innerHTML = text.repeat(3);
}
// on/off
function bulbOn() {
    document.getElementById("bulb").src ='img/bulbon.gif';
}
function bulbOff() {
    document.getElementById("bulb").src ='img/bulboff.gif';
}