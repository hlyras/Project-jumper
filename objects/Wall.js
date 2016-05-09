var Solid = function(c,x,y,w,h){
	this.img = c;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.left = function(){
		return this.x;
	}
	this.right = function(){
		return this.x + this.width;
	}
	this.uper = function(){
		return this.y;
	}
	this.bottom = function(){
		return this.y + this.height;
	}
}

var leftTouch = rightTouch = uperTouch = bottomTouch = false;
var leftJump = rightJump = false;
var groundX = 0;
var groundY = 0;
var groundW = 0;

Solid.prototype.contact = function(){
	// Left touch on Solid
	if(Player.x + Player.width >= this.left() - 15 && Player.x + Player.width <= this.left() + 5 && Player.y + Player.width >= this.uper() && Player.y <= this.bottom()&&mvRight){
		Player.x = this.left() - Player.width - 2;
		leftTouch = true;
	} else if(Player.x + Player.width < this.left()){
		leftTouch = false;
	}

	// Right touch on Solid
	if(Player.x <= this.right() + 15 && Player.x >= this.right() - 5 && Player.y + Player.width >= this.uper() && Player.y <= this.bottom()&&mvLeft){
		Player.x = this.right() + 2;
		rightTouch = true;
	} else if(Player.x > this.right()){
		rightTouch = false;
	}

	// Uper touch on Solid
	if(Player.y + Player.height >= this.uper() - 10 && Player.y + Player.height <= this.uper() + 5 && Player.x + Player.width >= this.left() && Player.x <= this.right()){
		Player.dirY = 0;
		Player.onFalling = false;
		Player.onGround = true;
		groundY = this.uper();
		groundX = this.left();
		groundW = this.right();
		Player.y = groundY - Player.height;
	} else if(mvRight && Player.x > groundW || mvLeft && Player.x + Player.width < groundX){
		Player.onGround = false;
		Player.onFalling = true;
	}
}

Solid.prototype.effects = function(){
	if(leftTouch){
		leftJump = true;
		Player.dirX = 0;
	} 

	if(rightTouch){
		rightJump = true;
		Player.dirX = 0;
	}
}	

var SolidImg = new Image();
SolidImg.src = "sprites/images/Solid.png"
SolidImg.addEventListener('load',loadHandler,false);
assetsToLoad.push(SolidImg);

var Solids = [];
//instances
var Floor1 = new Solid(SolidImg,0,1000,70*6,70);
var Floor2 = new Solid(SolidImg,70*17,1000,70*1,70);
var Floor3 = new Solid(SolidImg,70*(17+7),1000,70*1,70);
var Floor4 = new Solid(SolidImg,70*(17+20),1000,70*10,70);
var Floor5 = new Solid(SolidImg,70*(17+44),1000,70*11,70);
var Solid1 = new Solid(SolidImg,70*12,300,70,70*10);
var Solid2 = new Solid(SolidImg,70*7,300,70,70*10);

Solids.push(Floor1);
Solids.push(Floor2);
Solids.push(Floor3);
Solids.push(Floor4);
Solids.push(Floor5);
Solids.push(Solid2);
Solids.push(Solid1);


function SolidExe(){
	for( var i in Solids ){
		Solids[i].contact();
		Solids[i].effects();
	}
}