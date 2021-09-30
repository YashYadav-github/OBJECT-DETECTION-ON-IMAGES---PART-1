function preload(){
    img = loadImage("TV.jpeg");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center()
}

function draw(){
    image(img, 0, 0, 600, 400);

    fill("#ff230a");
    text("Television",40,120);
    noFill();
    stroke("#f5672f");
    rect(30, 100, 550, 200);
}