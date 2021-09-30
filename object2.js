function preload(){
    img = loadImage("clock.jpeg");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center()
}

function draw(){
    image(img, 0, 0, 600, 400);

    fill("#f5672f");
    text("Clock",160,70);
    noFill();
    stroke("#f5672f");
    rect(150, 50, 250, 200);
}