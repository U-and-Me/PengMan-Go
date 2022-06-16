"use strict"

curStage();

function clickId(stage, concept){

	console.log(stage);
	
	if(stage <= db_stage){
	
		let cur_stage = stage;
		localStorage.setItem("stage", cur_stage);
		
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
	var id = 'stage_con' +  db_stage;
	
	var stage_con = document.getElementById(id);
	var top = stage_con.getBoundingClientRect().top;
	var left = stage_con.getBoundingClientRect().left;
	
	console.log(left);
	
	var img = document.createElement('img');
	img.src = 'img/character.png';
	img.style.position = 'absolute';
	img.style.top = top;
	img.style.left = left;
	img.style.width = '19%';
	img.style.height = '19%';
	
	var back = document.getElementById('back');
	
	back.appendChild(img);
}