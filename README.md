# Snake JS 🐍
## A simple snake creation in JavaScript

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
var gameover = false, isPlaying = false;

var cX = 250, cY = 250, vel = 0, vX = vel, vY = 0, r = 15; //snake
var tail = [[],[]], length = 1; //tail
var direction = [1, 0, 0, 0]; //l, r, u, d

var aX = (Math.random() * (500 - r)) + r, aY = (Math.random() * (500 - r)) + r; //apple
```
Each line is a variable in it's own category; the first line is relative to the user, the next three lines are relative to the snake and the last line is relative to the apple. When the user presses a key the program sets _isPlaying_ to true. _cX_ and _cY_ is the snake head's position on the canvas, _vel_ is the snakes velocity (for now this is set to 0 because the user has not started the game yet), _vX_ and _vY_ is the snakes x and y velocities and r is the snake head's radius. _aX_ and _aY_ are the apple's location, this is set to a random position within the boundaries of the canvas.

####
