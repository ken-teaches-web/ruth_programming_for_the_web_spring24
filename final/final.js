let rotateBy = 5;
    function setup() {
    createCanvas(1200, 500);
    background("#d4d5df");
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(255);
    strokeWeight(.5);
    ellipse(150, 150 + alt, 150 / alt);
    strokeWeight(.1);
    bezier(alt, alt, 10, 10, 160, 90, 50, 80);
    bezier(100, 100, 10, 10, 160, 90, 50, 80);
    strokeWeight(.5);
    ellipse(300 + alt, 300 , 300, 300 / alt);
    ellipse(200 + alt, 600 , 100, 100 / alt);
    ellipse(300 + alt, 700 + alt, 150, 150 / alt);
    ellipse(300 + alt, 800 + alt, 150, 150 / alt);
}
function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}

function mousePressed () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    background("rgb(" + r + "," + g + "," + b + ")");
}