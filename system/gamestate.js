var gamestate = {
	LOADING: true,
	PAUSED: false,
	PLAYING: false,
	LOSE: false,
	WIN: false
}

function pauseGame(key){
	if(key==13 && gamestate.PAUSED){
		gamestate.PAUSED = false;
		gamestate.PLAYING = true;
	} else if(key==13 && gamestate.PLAYING){
		gamestate.PLAYING = false;
		gamestate.PAUSED = true;
	}
}

function lose() {
	//if(level1){
		Player.y = bornY;
		Player.x = bornX;
		Final.x = 4800;
		Final.y = 920;
		Final.color = "green";
	//}
}