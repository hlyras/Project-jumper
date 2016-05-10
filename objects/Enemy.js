var EnemyImg = new Image();
EnemyImg.src = "sprites/images/Enemy.png";
EnemyImg.addEventListener('load',loadHandler,false);
assetsToLoad.push(EnemyImg);

var Enemy = function(c,x,y,w,h){
	this.img = c;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.leftTouch = false;
	this.rightTouch = false;
	this.uperTouch = false;
}

var uperTouch = false;

Enemy.prototype.contact = function(){
	if (this.x < Player.x + Player.width  && this.x + this.width  > Player.x &&
		this.y < Player.y + Player.height && this.y + this.height > Player.y) {
		lose();
	}
}

Enemy.prototype.movement = function(){
	this.x -= 5;
	if(this.x + this.width < 0){
		this.x = background.width;
		this.y = Math.floor(Math.random()*600);
	}
}

var Enemys = [];

var Enemy1 = new Enemy(EnemyImg,70*7+10, 250, 50, 50);
/*var Enemy2 = new Enemy(EnemyImg,1000, Math.floor(Math.random()*600)+ 300, 50, 50);
var Enemy3 = new Enemy(EnemyImg,1500, Math.floor(Math.random()*600)+ 300, 50, 50);
var Enemy4 = new Enemy(EnemyImg,2000, Math.floor(Math.random()*600)+ 300, 50, 50);
var Enemy5 = new Enemy(EnemyImg,2500, Math.floor(Math.random()*600)+ 300, 50, 50);
var Enemy6 = new Enemy(EnemyImg,3000, Math.floor(Math.random()*600)+ 300, 50, 50);
var Enemy7 = new Enemy(EnemyImg,3500, Math.floor(Math.random()*600)+ 300, 50, 50);
var Enemy8 = new Enemy(EnemyImg,4000, Math.floor(Math.random()*600)+ 300, 50, 50);
var Enemy9 = new Enemy(EnemyImg,4500, Math.floor(Math.random()*600)+ 300, 50, 50);
var Enemy10 = new Enemy(EnemyImg,5000, Math.floor(Math.random()*600)+ 300, 50, 50);
Enemys.push(Enemy2);
Enemys.push(Enemy3);
Enemys.push(Enemy4);
Enemys.push(Enemy5);
Enemys.push(Enemy6);
Enemys.push(Enemy7);
Enemys.push(Enemy8);
Enemys.push(Enemy9);
Enemys.push(Enemy10);*/
Enemys.push(Enemy1);

function EnemyExe() {
	for( var i in Enemys ){
		Enemys[i].contact();
	}
}