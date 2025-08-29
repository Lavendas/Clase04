function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
var x = 0;
var y = 0;
var fosforito; 

function setup() {
  fosforito = createCanvas(windowWidth, windowHeight);
  fosforito.parent("cuerpo");
  fosforito.position(0,0);
  fosforito.style('z-index','-1'); 
  background("pink");
  noStroke();
  frameRate(10);
}

function draw() {
  background(map(mouseX,0, windowWidth,0, 360), map (mouseY,0, windowHeight, 0,100),100)
  colorMode(HSB, 360, 100, 100);
  x = lerp(x, mouseX, 1.1);
  y = lerp(y, mouseY, 1.1);
  fill("white");
  textSize(random(100,200));
  text("🦐",x,y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}