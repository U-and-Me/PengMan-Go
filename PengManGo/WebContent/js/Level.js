"use strict"

function clickId(stage, concept){
	
	if(stage <= db_stage){
	
		var link = document.querySelector("#link");
		var link_name = './Concept_' + concept + '.jsp';
		link.href = link_name;
		location.replace(link_name);
    	window.open(link);
    	
	}

	let cur_stage = stage;
	
	localStorage.setItem("stage", cur_stage);
	//console.log(localStorage.getItem("stage"));
	
}