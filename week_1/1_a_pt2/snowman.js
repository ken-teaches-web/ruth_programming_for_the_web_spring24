let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "gray")
let stroke2 = prompt("enter another basic color lowercase", "purple")
let stroke3 = prompt("enter another basic color lowercase", "red")
function setup() {
    createCanvas(1000, 800);
    background("#067BFF");
    grid = loadImage("images/100px_grid.png");
}
function draw () {
    background(grid);
    //house
    square(700, 500, 200);
    square(800, 650, 50);
    triangle(700, 500, 900, 500, 800, 300);
    point(835, 675);
    //snowman legs
    fill("#f1f1f1");
    strokeWeight(20);
    stroke(stroke1);
    //left leg
    ellipse(350, 650, 200);
    //right leg
    ellipse(650, 650, 200);
    // body
    ellipse(500, 450, 350, 400);
    // head
    ellipse(500, 200, 200);
    // hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    // hat body
    quad(400,50, 600, 50, 550, 120, 450, 120);
    //eyes
    stroke(stroke3);
    strokeWeight(20);
    point(425, 200);
    point(575, 200);
    // mouth
    noFill();
    strokeWeight(10);
    //
    line(430, 160, 465, 175);
    line(535, 175, 570, 160);
    line(450, 230, 550, 230);
}