function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('myCanvas');
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = -5;
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = "black";
    background(200);
    ellipse(width / 2, height / 2, 50, 50);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}