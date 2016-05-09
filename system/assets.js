var assetsToLoad = [];
var loadedAssets = 0;

function loadHandler(){
	loadedAssets++;
	if(loadedAssets == assetsToLoad.length){
		removeEventListener('load', loadHandler, false);
		//inicia o jogo
		gamestate.LOADING = false;
		gamestate.PAUSED = true;
	}
}