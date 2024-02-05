let rotateBy = 5;
    function setup() {
    createCanvas(800, 800);
    background("#067BFF");
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
}
function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}
function mousePressed () {
    noLoop();
    alert ("Why did you stop it? :(")
}