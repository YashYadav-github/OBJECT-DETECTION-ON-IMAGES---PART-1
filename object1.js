function preload(){
img = loadImage("bed.jpeg");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center()
}

function draw(){
    image(img, 0, 0, 600, 400);
    fill("#f5672f");
    text("Bed",65,70);
    noFill();
    stroke("#f5672f");
    rect(50, 50, 500, 200);
}