"use strict"

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