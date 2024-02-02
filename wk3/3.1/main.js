function setup() {
    createCanvas(200,200);
}
function createTile() {
    translate(0, 0);
    fill('black');
    rect(0, 0, 200, 200);
    fill('orange')
    circle(100, 100, 200)
    stroke('white');
    strokeWeight(5);
    line(0, 100, 200, 100);
    line(100, 0, 100, 200);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('red');
    circle(100, 50, 25); 
    circle(50, 100, 25);
    circle(150, 100, 25);
    circle(100, 150, 25);
    noFill();

}
function draw() {
    createTile();
}