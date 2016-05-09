var Level1 = Level2 = Level3 = false;

if(Level1){
	//Player posistion
	//Floors and walls
	var Floor1 = new Solid(WallImg2,0,1000,70*6,70);
	var Wall1 = new Solid(WallImg2,200,700,70,70*3);
	var Floor2 = new Solid(WallImg2,70*17,1000,70*1,70);
	var Floor3 = new Solid(WallImg2,70*(17+15),1000,70*1,70);
	var Floor4 = new Solid(WallImg2,70*(17+15+15),1000,70*1,70);
	var Floor5 = new Solid(WallImg,70*(17+15+15+15),1000,70*10,70);
}