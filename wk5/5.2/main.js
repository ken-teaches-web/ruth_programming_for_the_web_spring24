let bubbles = [];


function setup () {
    createCanvas(600, 600);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    bubble3 = new Bubble();
    bubble4 = new Bubble();
    bubble5 = new Bubble();
    bubble6 = new Bubble();
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
    bubble4.move();
    bubble4.show();
    bubble5.move();
    bubble5.show();
    bubble6.move();
    bubble6.show();
}


class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5); 
    }
    show() {
        stroke(500);
        strokeWeight(30);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}
