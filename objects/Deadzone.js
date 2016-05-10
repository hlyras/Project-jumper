var Deadzone = {
	color: "red",
	x: 0,
	y: 1100,
	width: 5000,
	height: 100
}

function dzContact(){
	if(Deadzone.x < Player.x + Player.width  && Deadzone.x + Deadzone.width  > Player.x &&
		Deadzone.y < Player.y + Player.height && Deadzone.y + Deadzone.height > Player.y){
		lose();
	}
}

function DzExe(){
	dzContact();
}