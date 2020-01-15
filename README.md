# Snake JS 🐍
## A simple snake creation in JavaScript
Created by _@ethans33_

🚨 Before I begin explaining how this project works I would like to note that this was made w/ p5.js.
#### To make the canvas repeatedly draw the frames I would need two functions, a _setup_ function and a _draw_ function.
```
function setup(){
    createCanvas(500, 500)
    frameRate(120);
}

function draw(){
  ...
}
```
Within the setup function I have created a canvas element using p5.js' _createCanvas()_ and _frameRate()_ functions. Within the draw function is anything that will be writen to the canvas.

#### Before the draw function I have just created some basic settings for the two objects created; the snake and the apple.
```
var cX = 250, cY = 250, vel = 0, vX = vel, vY = 0, r = 15; //snake
var aX = (Math.random() * (500 - r)) + r, aY = (Math.random() * (500 - r)) + r; //apple
var tail = [[],[]], length = 1; //tail
var graphicsLevel = 1; //larger the value, lower the graphics
var gameover = false, isPlaying = false;
var direction = [1, 0, 0, 0]; //l, r, u, d
```
