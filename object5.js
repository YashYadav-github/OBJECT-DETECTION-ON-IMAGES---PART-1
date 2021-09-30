function preload(){
    img = loadImage("AC.jpeg");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center()
}

function draw(){
    image(img, 0, 0, 600, 400);
    fill("#f5672f");
    text("Air Conditioner",80,165);
    noFill();
    stroke("#f5672f");
    rect(70, 150, 400, 100);
}