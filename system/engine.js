//Recursive function to make engine works
function loop(){
	//Requesting frames system passing loop and canvas
	window.requestAnimationFrame(loop, Canvas);
	if(gamestate.LOADING){
		console.log('LOADING...')
	} 
	if(gamestate.PLAYING){
		update();
		//debugger;
		render();
	}
}

function update(){
	PlayerExe();
	SolidExe();
	DzExe();
	CameraExe();
	EnemyExe();
	PointsExe();
}

function render(){
	context.save();
	context.translate(-Camera.x,-Camera.y);
	//draw Background
	//drawBackground(backgroundSpr);
	drawBackground(backgroundSpr);

	// draw Final
	drawSinglecolor(Initial);
	drawSinglecolor(Final);

	// draw Solids
	drawSolid(Solids);

	//draw shurikens
	drawImg(Enemys);

	//Deadzone
	drawSinglecolor(Deadzone);
	
	//drawImg(Player);
	drawPlayer();

	/*context.font ="35px Arial bold";
	context.fillText(Player.dirX, Player.x - 20, Player.y - 50, 200, 50);
	context.fillText(Player.dirY, Player.x - 20, Player.y - 80, 200, 50);
	context.fillText(Player.x, Player.x - 20, Player.y - 150, 200, 50);*/
	context.restore();
}

context.fillStyle = "white";
context.font = "100px Arial bold";
context.fillText("PRESS ENTER", 500, 500);

loop();