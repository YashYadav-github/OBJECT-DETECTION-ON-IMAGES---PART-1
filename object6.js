function preload(){
    img = loadImage("LWP.jpeg");
}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center()
}

function draw(){
    image(img, 0, 0, 600, 400);
    fill("#f5672f");
    text("Laptop",65,70);
    noFill();
    stroke("#f5672f");
    rect(50, 50, 450, 300);

    fill("#4287f5");
    text("Phone",440,165);
    noFill();
    stroke("#4287f5");
    rect(430, 150, 150, 200);
}