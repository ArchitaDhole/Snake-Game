var snake;
var foods = [];
var food;

function setup() {
  createCanvas(750, 650);
  snake = createSprite(width / 2, height / 2, 50, 50);
  food = createSprite(200, 100, 20, 20);
  // for (var i = 0; i < 5; i++) {
  //   var r = Math.round(random(10, 750));
  //   var food = createSprite(r, 500, 20, 20);
  //   foods.push(food);
  //   console.log(i);
  // }
}

function draw() {
  background(50);

  snake.rotateToDirection = true;

  if (keyDown("UP")) {
    snake.y = snake.y - 10;
  }
  if (keyDown("down")) {
    snake.y = snake.y + 10;
  }
  if (keyDown("left")) {
    snake.x = snake.x - 10;
  }
  if (keyDown("right")) {
    snake.x = snake.x + 10;
  }
  if (snake.isTouching(food)) {
    food.destroy();
    snake.width = snake.width + 20;
  }

  drawSprites();
}
