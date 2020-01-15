/*
Created By @ethans33
*/
console.log('%c ### Created by @ethans33 ###' , 'color: crimson; font-weight: bold;')

function setup(){
    createCanvas(500, 500)
    frameRate(120);
    img = loadImage(document.getElementById('imgSnake').src);
}

var cX = 250, cY = 250, vel = 0, vX = vel, vY = 0, r = 15; //snake
var aX = (Math.random() * (500 - r)) + r, aY = (Math.random() * (500 - r)) + r; //apple
var tail = [[],[]], length = 1; //tail
var graphicsLevel = 1; //larger the value, lower the graphics
var gameover = false, isPlaying = false;
var direction = [1, 0, 0, 0]; //l, r, u, d

function draw(){

    background('white')

    //snake
    fill('#283747')
    stroke('#283747')
    cX += vX;
    cY += vY;
    circle(cX, cY, r)

    if(cX > canvas.width - r/2 || cX < r/2 || cY > canvas.height - r/2 || cY < r/2){
      gameover = true;
    }
    
    if(isPlaying == false){
      background('white')
      fill('#283747')
      stroke('#283747')

      textFont('monospace', 16)
      textAlign(CENTER);
      text('pr3ss sp4c3 t0 p1ay', canvas.width / 2, canvas.height / 2 + 50);
    }

    //create tail
    if(tail[0].length == length && tail[1].length == length){
      tail[0].shift()
      tail[0].push(cX)
      tail[1].shift()
      tail[1].push(cY)
    } else {
      tail[0].push(cX)
      tail[1].push(cY)
    }
  
    for(i = 0; i < length; i++){
      if(i % graphicsLevel == 0){circle(tail[0][i], tail[1][i], r)}
      if(i < length - 15){
        if(collideCircleCircle(cX, cY, r, tail[0][i], tail[1][i], r)){
          gameover = true;
        }
      }
    }

    //apple
    fill('#ff5252')
    stroke('#ff5252')
    if (isPlaying) {
      circle(aX, aY, r)
    }
    
    if(collideCircleCircle(cX, cY, r, aX, aY, r)){
      aX = (Math.random() * (500 - r)) + r;
      aY = (Math.random() * (500 - r)) + r;
      length += 5;
      //vel += .025;
    }

    //game over
    if(gameover){
      background('white')
      fill('#283747')
      stroke('#283747')

      textFont('monospace', 16)
      textAlign(CENTER);
      text('g4me 0v3r — ' + (length - 1) / 5, canvas.width / 2, canvas.height / 2 + 10);
      imageMode(CENTER);
      image(img, canvas.width / 2, canvas.width / 2 - 50, img.width * .2, img.height * .2);
    }
}

//Controls
function keyPressed() {
  if (keyCode === LEFT_ARROW && direction[1] == 0) {
    vX = -vel;
    vY = 0;
    direction = [1, 0, 0, 0]
  } else if (keyCode === RIGHT_ARROW && direction[0] == 0) {
    vX = vel;
    vY = 0;
    direction = [0, 1, 0, 0]
  } else if (keyCode === UP_ARROW && direction[3] == 0) {
    vY = -vel;
    vX = 0;
    direction = [0, 0, 1, 0]
  } else if (keyCode === DOWN_ARROW && direction[2] == 0){
    vY = vel;
    vX = 0;
    direction = [0, 0, 0, 1]
  } else if (keyCode === 32 && isPlaying == false){
    vel = 2;
    vX = vel;
    isPlaying = true;
  }
}