const app = new PIXI.Application({
  width: 500,
  height: 500,
  backgroundColor: 0x1099bb,
  resolution: 1
});
document.getElementById("game").appendChild(app.view);

const stage = new PIXI.Container();

app.stage.addChild(stage);

var sprite;

PIXI.loader.add("spritesheet", "img/trainer.png").load(setup);

function setup() {
  stage.interactive = true;

  //Switch to switch cases

  document.addEventListener("keypress", function(event) {
    event.preventDefault();
    //Switch to switch cases
    let direction = event.key.toLowerCase();

    switch (direction) {
      case "w":
        walkingUp();
        break;
      case "s":
        walkingDown();
        break;
      case "d":
        walkingRight();
        break;
      case "a":
        walkingLeft();
        break;
      default:
        console.log("Press a different key");
    }
  });
}

function walkingDown() {
  //WALKING DOWN ANIMATION
  let texture = PIXI.Texture.from("img/trainer.png");
  sprite = new PIXI.Sprite(texture);
  console.log("S WAS PRESSED");
  let walkingDown = new PIXI.Rectangle(0, 0, 40, 56);

  texture.frame = walkingDown;

  var walkDwon = setInterval(function() {
    if (walkingDown.x >= 160) {
      walkingDown.x = 0;
    }
    sprite.texture.frame = walkingDown;
    walkingDown.x += 40;
  }, 200);
  stage.addChild(sprite);
  animationLoop();
}
function walkingUp() {
  //WALKING UP ANIMATION
  let texture = PIXI.Texture.from("img/trainer.png");
  sprite = new PIXI.Sprite(texture);
  console.log("W WAS PRESSED");
  let walkingUp = new PIXI.Rectangle(0, 168, 40, 56);

  texture.frame = walkingUp;

  var walkUp = setInterval(function() {
    if (walkingUp.x >= 160) {
      walkingUp.x = 0;
    }
    sprite.texture.frame = walkingUp;
    walkingUp.x += 40;
  }, 200);
  stage.addChild(sprite);
  animationLoop();
}
function walkingRight() {
  //WALKING RIGHT ANIMATION
  let texture = PIXI.Texture.from("img/trainer.png");
  sprite = new PIXI.Sprite(texture);
  console.log("D WAS PRESSED");
  let walkingRight = new PIXI.Rectangle(0, 112, 40, 56);

  texture.frame = walkingRight;

  var walkRight = setInterval(function() {
    if (walkingRight.x >= 160) {
      walkingRight.x = 0;
    }
    sprite.texture.frame = walkingRight;
    walkingRight.x += 40;
  }, 200);
  stage.addChild(sprite);
  animationLoop();
}
function walkingLeft() {
  //WALKING LEFT ANIMATION
  let texture = PIXI.Texture.from("img/trainer.png");
  sprite = new PIXI.Sprite(texture);
  console.log("A WAS PRESSED");
  let walkingLeft = new PIXI.Rectangle(0, 56, 40, 56);

  texture.frame = walkingLeft;

  var walkLeft = setInterval(function() {
    if (walkingLeft.x >= 160) {
      walkingLeft.x = 0;
    }
    sprite.texture.frame = walkingLeft;
    walkingLeft.x += 40;
  }, 200);
  stage.addChild(sprite);
  animationLoop();
}

function animationLoop() {
  requestAnimationFrame(animationLoop);

  app.render(stage);
}
