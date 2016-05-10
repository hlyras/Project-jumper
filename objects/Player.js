// Object variables
var onFalling = onGround = onTouch = false;
var UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39;
var mvUp = mvDown = mvLeft = mvRight = false;
var bornX = 30;
var bornY = 700;

// player images
var PlayerImg = new Image();
PlayerImg.src = "sprites/images/p.png";
PlayerImg.addEventListener('load',loadHandler,false);
assetsToLoad.push(PlayerImg);

var PlayerImgr = new Image();
PlayerImgr.src = "sprites/images/pr.png";
PlayerImgr.addEventListener('load',loadHandler,false);
assetsToLoad.push(PlayerImgr);

var Player = {
	img: PlayerImg,
	//color: "black",
	x:bornX,
	y:bornY,
	width: 50,
	height:50,
	dirY: 0,
	dirX: 0,
	speed: 0.3,
	weight: 1,
	onFalling: false,
	onGround: false
};

Player.onFalling = true;

function keydownMoves(){
	if(key == LEFT){ 
		Player.img = PlayerImgr;
		mvLeft = true;
	}
	if(key == RIGHT){
		Player.img = PlayerImg;
		mvRight = true;
	}
	if(key == UP){
		mvUp = true;
	}
	if(key == DOWN){
		mvDown = true;
	}
}

function keyupMoves(){
	if(key == LEFT){ 
		mvLeft = false;
		Player.dirX = 0;
	}
	if(key == RIGHT){
		mvRight = false;
		Player.dirX = 0;
	}
	if(key == UP){
		mvUp = false;
	}
	if(key == DOWN){
		mvDown = false;
	}
}

//moving player
function moves(){
	if(mvLeft){
		Player.x -= Player.dirX;
		if(Player.dirX < 25){
			Player.dirX += Player.speed;
		}
	}
	if(mvRight){
		Player.x += Player.dirX;
		if(Player.dirX < 25){
			Player.dirX += Player.speed;
		}
	}
	if(mvUp&&Player.onGround){
		Player.onGround = false;
		Player.onFalling = true;
		if(Player.dirY > -1){
			Player.dirY -= 20;
		}
	}
	/*if(mvDown){
		Player.height = 25;
	} else {
		Player.height = 50;
	}*/

	if(mvUp&&mvLeft&&leftJump&&!mvRight){
		Player.dirY = 0;
		Player.onGround = false;
		Player.onFalling = true;
		if(Player.dirY > -1){
			Player.dirY -= 25;
		}
		if(Player.dirX < 10){
			Player.dirX += 15;
		}
		leftJump = false;
	}

	if(mvUp&&mvRight&&rightJump&&!mvLeft){
		Player.dirY = 0;
		Player.onGround = false;
		Player.onFalling = true;
		if(Player.dirY > -1){
			Player.dirY -= 25;
		}
		if(Player.dirX < 10){
			Player.dirX += 15;
		}
		rightJump = false;
	}
}

function moveArea(){
	if(Player.x < 0){
		Player.x = 0;
	}
	if(Player.x + Player.width > background.width){
		Player.x = background.width - Player.width;
	}
	if(Player.y < 0){
		Player.y = 0;
	}
	if(Player.y + Player.height > background.height){
		Player.y = background.height - Player.height;
	}
}

function stateEffect(){
	if(Player.onFalling){
		Player.y += Player.dirY;
		if(Player.dirY < 20){
			Player.dirY += Player.weight;
		}
	}

	if(Player.onGround){
		Player.dirY = 0;
	}
}

function PlayerExe(){
	moveArea();
	moves();
	stateEffect();
}
