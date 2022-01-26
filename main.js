x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
document.getElementById("status").innerHTML = "System is listening (to all your conversations), please speak";
recognition.start();
}
recognition.onresult = function (event){
console.log(event);
var content = event.results[0][0].transcript;
document.getElementById("status").innerHTML = "You said       " + content + "!";

if(content == "Circle"){
    x = Math.floor(Math.random()*900);
    y = Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML = "We are drawing it, just because we want to";
    draw_circle = "set";
}
if(content == "Rectangle"){
    x = Math.floor(Math.random()*900);
    y = Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML = "We are drawing it, just because we want to";
    draw_rect = "set";
}
}
function setup(){
    canvas = createCanvas(900, 600);
}
function draw(){
    if (draw_circle == "set"){
        radius = Math.floor(Math.random()*100);
        circle(x,y,raduis);
        document.getElementById("status").innerHTML = "WE have drawn the iluminatie, I mean circle";
        draw_circle = "";
    }
    if (draw_rect == "set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "WE have drawn the console of malware, I mean a rectangle";
        draw_rect = "";
    }
}