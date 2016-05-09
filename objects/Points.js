var Initial = {
	color:"yellow",
	x:20,
	y:920,
	width:20,
	height:50
}

function FinalTouchInitial() {
	if(Initial.x < Final.x + Final.width  && Initial.x + Initial.width  > Final.x &&
		Initial.y < Final.y + Final.height && Initial.y + Initial.height > Final.y){
		gamestate.PLAYING = false;
		gamestate.PAUSED = false;
		gamestate.WIN = true;
		alert('you win');
	}
}

////////

var Final = {
	color:"green",
	x:4800,
	y:920,
	width:20,
	height:50
}

function FinalTouchPlayer() {
	if(Final.x < Player.x + Player.width  && Final.x + Final.width  > Player.x &&
		Final.y < Player.y + Player.height && Final.y + Final.height > Player.y){
		Final.x = Player.x + 15;
		Final.y = Player.y - 20;
		Final.color = "black";
	}
}

function PointsExe(){
	FinalTouchPlayer();
	FinalTouchInitial();
}