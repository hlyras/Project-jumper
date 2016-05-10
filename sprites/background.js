var backgroundSpr = [];

var backgroundImg = new Image();
backgroundImg.src = "sprites/images/background.png";

var background = {
	//img: backgroundImg,
	color: "#c7dd44",
	x:0,
	y:0,
	width: 5000,
	height: 1200
}

var backGroundImg = {
	img: backgroundImg,
	x: 0,
	y: 0,
	width: 1920,
	height: 1200
}

/*function drawBackground(sprite){
	for(var i = 0; i < 5; i++){
		var spr = sprite[0];
		context.drawImage(spr.img,0,0,spr.width,spr.height,spr.x + (spr.width * i),spr.y,spr.width,spr.height);
	}
}*/

function drawBackground(){
	context.fillStyle = background.color;
	context.fillRect(0,0,background.width,background.height);
}
backgroundSpr.push(backGroundImg);