# Snake JS 🐍
## A simple snake creation in JavaScript

Created by _@ethans33_
Before explaining how this project works I would like to note that this was made w/ p5.js.

###### To make the canvas repeatedly draw the frames I would need two functions, a _setup_ function and a _draw_ function.
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
