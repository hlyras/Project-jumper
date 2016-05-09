var Camera = {
	x:0, 
	y:0,
	width: Canvas.width,
	height: Canvas.height,
	leftEdge: function(){
		return this.x + (this.width * 0.25);
	},
	rightEdge: function(){
		return this.x + (this.width * 0.40);
	},
	topEdge: function(){
		return this.y + (this.height * 0.25);
	},
	bottomEdge: function(){
		return this.y + (this.height * 0.75);
	}
}

function CameraPosition(){
	if(Player.x < Camera.leftEdge()){
		Camera.x = Player.x - (Camera.width * 0.25);
	}
	if(Player.x + Player.width > Camera.rightEdge()){
		Camera.x = Player.x + Player.width - (Camera.width * 0.40);
	}
	if(Player.y < Camera.topEdge()){
		Camera.y = Player.y - (Camera.height * 0.25);
	}
	if(Player.y + Player.height > Camera.bottomEdge()){
		Camera.y = Player.y + Player.height - (Camera.height * 0.75);
	}
}

function CameraLimit(){
	//limite da câmera
	if(Camera.x < 0){
		Camera.x = 0;
	}
	if(Camera.x + Camera.width > background.width){
		Camera.x = background.width - Camera.width;
	}
	if(Camera.y < 0){
		Camera.y = 0;
	}
	if(Camera.y + Camera.height > background.height){
		Camera.y = background.height - Camera.height;
	}
}

function CameraExe(){
	CameraPosition();
	CameraLimit();
}