const fps = 60;
const g = 0.1;
const forceY = g;
const forceX = 0;
const balls = [];
let ballNumber = 0;

document.addEventListener("click", handleMouseClick)

function handleMouseClick(event) {
  const id = 'ball-' + ballNumber;

  let imgElement = document.createElement('img');
  imgElement.id = id;
  imgElement.src = "img/ball.gif";
  document.body.append(imgElement);

  const newBall = {
    x: event.x,
    y: event.y,
    width: 100,
    height: 100,
    vx: 0,
    vy: 0,
    element: document.querySelector('#' + id),
  }
  balls.push(newBall);
  ballNumber += 1;
  drawBall(newBall);
  console.log(id);
}

function force(ball) {
  if (ball.y > window.innerHeight - ball.height / 2) {
    ball.vy = -ball.vy*0.8;
  } else {
    ball.vx += forceX;
    ball.vy += forceY;
  }

  if (ball.x > window.innerWidth - ball.width / 2) {
    ball.vx = -ball.vx;
  } else {
    ball.vx += forceX;
    ball.vy += forceY;
  }
  if (ball.x < 0 + ball.width / 2) {
    ball.vx = ball.vx + forceX;
  } else {
    ball.vx += forceX;
    ball.vy += forceY;
  }
  if (ball.vx > 0) {
    ball.vx -= ball.vx*0.005;
  }
}

function drawBall(ball) {
  ball.element.className = 'ball';
  ball.element.style.left = ball.x + 'px';
  ball.element.style.top = ball.y + 'px';
  }

function moveBall(ball) {
  ball.y += ball.vy;
  ball.x += ball.vx;
}

function time() {
  balls.forEach(moveBall);
  balls.forEach(drawBall)
  balls.forEach(force);
  /*
  if (ball.y > window.innerHeight - ball.height / 2) {
    ball.vy = -ball.vy*0.7
    console.log(ball.vy);
  } else {
    balls.forEach(force);
  }  

  if (ball.x > window.innerWidth - ball.width / 2) {
    ball.vx = -ball.vx
  }  
  */
}

setInterval(time, 1000 / fps);
