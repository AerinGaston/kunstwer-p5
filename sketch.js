function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(255,100,0);
  noFill();
  stroke(35, 67, 200);
  strokeWeight(8);
  ellipse(200,200,100+(sin(frameCount/10)*50),100);
  rect(200,200,100+(cos(frameCount/20)*10),100);
   ellipse(200,200,10+(sin(frameCount/10)*50),100);
  rect(100,100,100+(cos(frameCount/10)*10),100)
    ellipse(200 + sin(frameCount/50) * 150,
      200 + cos(frameCount/100) * 150, 40, 40);
    strokeWeight(8);
  if (mouseIsPressed) 
    ellipse(200, 200, 300, 300);

}      
