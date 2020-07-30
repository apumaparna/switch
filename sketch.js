/* global createCanvas background image loadImage windowWidth
   windowHeight width height colorMode noStroke color HSB fill 
   ellipse text stroke line mouseX mouseY rect
*/

// We'll use variables for most of our colors in this code-along.
let backgroundColor, color1, color2, textColor, brightness; 
const saturation = 80; 

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  brightness = 80; 

  
  dayMode(); 

  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  // backgroundColor = color(95);
  // textColor = color(20);
  
  /* When used with three arguments, the function takes, in this order:
     HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
           is blue.
     SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
     BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible. */
  // color1 = color(0, brightness, saturation);
  // color2 = color(200, brightness, saturation);
}

function draw() {
  background(backgroundColor);
  // Call the drawCenterLine function here to run the three lines of code
  // contained in that function.
  
  if (mouseX < 50 && mouseY < 50){
    backgroundColor = color(330, saturation, brightness); 
    background(backgroundColor); 
  }
  else if (mouseX < 50 && mouseY > 350){
    backgroundColor = color(180, saturation, brightness); 
    background(backgroundColor); 
  }
  else if (mouseX > 350 && mouseY > 350){
    backgroundColor = color(270, saturation, brightness); 
    background(backgroundColor); 
  }
  else if (mouseX > 350 && mouseY < 50){
    backgroundColor = color(90, saturation, brightness); 
    background(backgroundColor); 
  }
  
  
  fill(color(330, saturation, brightness));
  rect(0, 0, 50, 50); 
  
  fill(color(180, saturation, brightness));
  rect(0, 350, 50, 50);
  
  fill(color(270, saturation, brightness));
  rect(350, 350, 50, 50); 
  
  fill(color(90, saturation, brightness));
  rect(350, 0, 50, 50); 
  
  drawCenterLine()
  

  // The red and blue circles:
  if (mouseX > 200) {
    nightMode(); 
  }
  else {
    dayMode(); 
  }
  
  if (mouseY > 200){
    mutedMode(); 
  }
  else {
    brightness = 80; 
  }
  
  fill(color1);      // Todo: swap colors when passing the middle 
  ellipse(100, 200, 50);
  fill(color2);
  ellipse(300, 200, 50);

  // The grey circle and the text:
  fill(textColor);
  ellipse(mouseX, mouseY, 50);    // Todo: should follow mouse pointer
  text("Flip the switch", 20, 20);
}

function drawCenterLine() {
  
  // Enable stroke with textColor to draw the line.
  stroke(textColor);
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  line(200, 0, 200, 400);
  line(0, 200, 400, 200)
  // Turn stroke off again.
  noStroke();
}

function dayMode() {
  //let tempColor = color1; 
  color1 = color(0, brightness, saturation); 
  color2 = color(200, brightness, saturation); 
  
  //let tempColor2 = textColor; 
  textColor = color(20); 
  backgroundColor = color(95);
}

function nightMode() {
  //let tempColor = color1; 
  color1 = color(200, brightness, saturation); 
  color2 = color(0, brightness, saturation); 
  
  //let tempColor2 = textColor; 
  textColor = color(95); 
  backgroundColor = color(20); 
}

function mutedMode() {
  brightness = 50; 
  //saturation = 50; 
}