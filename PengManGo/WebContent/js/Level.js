"use strict"

curStage();

function clickId(stage, concept){
	
	let cur_stage = stage;
	localStorage.setItem(concept+"_stage", cur_stage);
	
	if(stage == 1){
		clickStory(concept);
	}else if(stage <= db_stage){
	
		var link_name = './Concept_' + concept + '.jsp';
		location.href = link_name;
		location.replace(link_name);
    	window.open(link);
    	
	}
	
}

function clickStory(concept){

	var link_story = './html/story/story_'+concept+'.html';
	location.href = link_story;
	location.replace(link_story);
	window.open(link_story);
	
}

function curStage(){
	
	for(let i = 1; i < 31; i++){
		var img = document.createElement('img');
	
		img.style.width = '88px';
		img.style.heigth = '88px';
		
		if(i == db_stage){
			var id = 'stage_con' +  i;
			var stage_con = document.getElementById(id);
			
			img.src = './img/stage_current.png';
			stage_con.appendChild(img);
		}else if(i < db_stage){
			var id = 'stage_con' +  i;
			var stage_con = document.getElementById(id);
			
			img.src = './img/stage_break.png';
			stage_con.appendChild(img);
		}else{
			var id = 'stage_con' +  i;
			var stage_con = document.getElementById(id);
		
			img.src = './img/Stage_icon.png';
			stage_con.appendChild(img);
		}
	}
}

function Reset(concept){
    	let update_db = 0;
		if(confirm('정말로 초기화 하시겠습니까?') == true){
			var link_name = './Level_' + concept + '.jsp?reset=1';
			location.href = link_name;
			location.replace(link_name);
    		window.open(link);
		}


}