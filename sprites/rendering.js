function drawPlayer(){
	context.drawImage(Player.img,0,0,Player.width, Player.height, Player.x,Player.y,Player.width, Player.height);
}

function drawSpr(sprite){
	for(var i in sprite){
		var spr = sprite[i];
		context.fillStyle = spr.color;
		context.fillRect(spr.x,spr.y,spr.width,spr.height);
	}
}

function drawImg(sprite){
	for(var i in sprite){
		var spr = sprite[i];
		context.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height);
	}
}

var z = 0;

function drawSolid(sprite){
	for(var i in sprite){
		var spr = sprite[i];
		if(spr.width > 70){
			z = Math.floor(spr.width / 70);
			for(var y = 0; y < z; y++){
				context.drawImage(spr.img,0,0,spr.width,spr.height,spr.x + (70 * y) ,spr.y,spr.width,spr.height);
			}
		} else if(spr.height > 70){
			z = Math.floor(spr.height / 70);
			for(var y = 0; y < z; y++){
				context.drawImage(spr.img,0,0,spr.width,spr.height,spr.x, spr.y + (70 * y),spr.width,spr.height);
			}
		} else {
			context.drawImage(spr.img,0,0,spr.width,spr.height,spr.x,spr.y,spr.width,spr.height);
		}
	}
}

function drawSinglecolor(obj){
	context.fillStyle = obj.color;
	context.fillRect(obj.x,obj.y,obj.width,obj.height);
}