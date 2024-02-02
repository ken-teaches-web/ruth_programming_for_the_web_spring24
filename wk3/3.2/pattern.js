function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, 
    secondaryColor) {
    translate(originX, originY);
    fill('black');
    rect(0, 0, 200, 200);
    fill(primaryColor)
    circle(100, 100, 200)
    stroke('white');
    strokeWeight(5);
    line(0, 100, 200, 100);
    line(100, 0, 100, 200);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill(secondaryColor);
    circle(100, 50, 25); 
    circle(50, 100, 25);
    circle(150, 100, 25);
    circle(100, 150, 25);
    noFill();

}
function draw() {
    createTile(0, 0, 'red', 'orange');
    createTile(0,200, 'orange', 'red');
    createTile(0, 200, 'red', 'orange');
    createTile(200, -400, 'orange', 'red');
    createTile(0, 200, 'red', 'orange')
    createTile(0, 200, 'orange', 'red')
    createTile(200, -400, 'red', 'orange')
    createTile(0, 200, 'orange', 'red')
    createTile(0, 200, 'red', 'orange')
    
}