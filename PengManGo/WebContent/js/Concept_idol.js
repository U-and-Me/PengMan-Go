"use strict"

let list_right = []; // 맞은 단어 배열
let wordCount = 0; // 단어 세기
let Arr_word = []; // 제시 단어 넣기
let Lev_Img = [3, 5, 6]; // 각 레벨 기회
let imgAdd = 0; // 이미지 추가 수
let Ans_Right = 0; // 단어 길이 체크
let Ans_chk = 1; // 알파벳 맞았는지 체크
let Img_list = ["apink", "2pm", "girl","hasungwoon", "mamamoo", "exo"];
let Img_Arr = []; // 이미지 랜덤 인덱스 배열
let ind = 0; // Img_list 인덱스
let pos_t = [15, 2, 10, 18, 27, 23]; // 사진 위치
let pos_r = [13, 7, 22, 26, 1, 17]; // 사진 위치
let pos_ind = 0; // 위치 배열 인덱스

let hint_time = 2000;

checkLevel();

function checkLevel(){
	if(cur_stage >= wordCount){
		playGame();
	}else{
		gameOver();
	}
}

// 다음 단어 넘어가기 전 초기화
function RemoveNextW(){
    // 밑줄 삭제
    var line = document.querySelector("#word_line");
    while(line.hasChildNodes()){
        line.removeChild(line.firstChild);
    }  

    // 사진 제거
    var back = document.querySelector("#back_img");
    while(back.hasChildNodes()){
        back.removeChild(back.firstChild);
    }
    
    list_right.fill("");
    Arr_word.fill("");
    wordCount++;
    imgAdd = 0;
    Ans_Right = 0; 
    Ans_chk = 1;
    ind = 0;
    pos_ind = 0;

    playGame();
}

function playGame(){
    bringImages();
    // 첫번째 단어 잘라서 배열에 넣기
    Arr_word = ary[wordCount].toLowerCase().split('');

    let word_len = ary[wordCount].length; // 현재 단어 길이

    var line = document.querySelector("#word_line");

    // 단어 순서대로 화면에 밑줄 긋기
    for(let i = 0; i < word_len; i++){
        line.innerHTML += '<img id="underline" src="./img/underline.png" style=" margin-left:1%; "/>';
    }

}

function bringImages(){
    for(let i = 0; i < Lev_Img[word - 1]; i++){
        let arr_len = Img_list.length;
        let index = Math.floor(Math.random() * arr_len);

        Img_Arr[i] = index;

        for(let j = 0; j < i; j++){ // 중복 제거
            if(Img_Arr[j] == Img_Arr[i]){
                i--;
                break;
            } 
        }
    }
}

// 입력받아서 맞으면 알파벳 추가 / 틀리면 그림 추가
function checkAlpha(clicked_id){
	var hint_Info = document.querySelector("#word_Info"); 
	while(hint_Info.hasChildNodes()){
        hint_Info.removeChild(hint_Info.firstChild);
    }
	// 버튼 효과음 재생
	let audio = new Audio('music/click.mp3');
	audio.play();
	
    let alpha = document.getElementById(clicked_id).value;
    alpha = alpha.toLowerCase(); // 소문자로 변경

    let word_len = ary[wordCount].length; // 현재 단어 길이
        
    var line = document.querySelector("#word_line"); 

    for(let i = 0; i < word_len; i++){
        if(alpha == Arr_word[i]){ // 맞을 경우 밑줄 제거 후 알파벳 출력
            Ans_Right++;
            list_right[i] = Arr_word[i];
            Ans_chk = 0;
        }
    }
    
    // 맞은 단어가 있을 경우에만 밑줄 변경
    if(Ans_chk == 0){
        while(line.hasChildNodes()){
            line.removeChild(line.firstChild);
        }

        for(let i = 0; i < word_len; i++){
            if(list_right[i]){
                line.innerHTML += '<img id="underline" src="./img/alpha/' + list_right[i].toUpperCase() + '.png" style=" margin-left:1%; margin-top:-100px;"/>';
            }else{
                line.innerHTML += '<img id="underline" src="./img/underline.png" style=" margin-left:1%; "/>';
            }
        }
    }     

    setTimeout( () => {

    // 그림이 완성되기 전에 맞추면 다음 단어
    if(Ans_Right == word_len && imgAdd <= Lev_Img[word - 1]){
        // 단어 모두 맞추면 다음 스테이지
        if((wordCount + 1) == word){
			alert("다음 단계로 올라갑니다👩🏻‍🎨");
            
            cur_stage = cur_stage + 1;
            console.log(cur_stage);
            
            // 모든 스테이지를 꺴을 경우
            if(cur_stage == 31){
            	localStorage.setItem("idol_stage", cur_stage);
            	var link = './html/story/story_idol.html';
    			location.href = link;
    			location.replace(link);
    			window.open(link);
            }else{           
			// 스테이지 페이지로 이동
			var link = './Level_idol.jsp?stage=' + encodeURI(cur_stage);
    		location.href = link;
    		location.replace(link);
    		window.open(link);
    		}
        }else{// 다음 단어
            RemoveNextW();
        }
    }else{
        if(Ans_chk == 1){
             // 그림 체크
            if(Lev_Img[word - 1] <= imgAdd){
				// 버튼 효과음 재생
				let audio = new Audio('music/gameover.mp3');
				audio.play();
				setTimeout(() => {  
               		// 게임 종료
                	gameOver();
				}, 700);
            }else{
                // 그림 추가
                imgAdd++;
                AddImg();
                AddHint();
            }
        }
    }

    Ans_chk = 1;
    }, 5);
}

// 이미지 추가
function AddImg(){
	console.log(Img_Arr[ind]);
    var img = document.createElement('img');
    img.src = './img/idol_'+Img_list[Img_Arr[ind]]+'.png';
    img.id = 'idol_img';
    img.style.position = 'absolute';
    img.style.width = '400px';
    img.style.height = '400px';
    img.style.top = pos_t[pos_ind]+'%';
    img.style.right = pos_r[pos_ind]+'%';

    var back = document.querySelector("#back_img");
    back.appendChild(img);

    ind++;
    pos_ind++;
}

// 힌트 추가
function AddHint(){

	var hint_Info = document.querySelector("#word_Info"); 
		     
	var button = document.createElement('img');
	var img = document.createElement('img');
	
	// 오디오
	let music;
		
	if(word == 1)
		 music = new Audio('hint/idol/onestep/' + ary[wordCount] + '.mp3');
	if(word == 2)
		music = new Audio('hint/idol/twostep/' + ary[wordCount] + '.mp3');
	if(word == 3)
		music = new Audio('hint/idol/threestep/' + ary[wordCount] + '.mp3');
		
	if(imgAdd >= 2){
		if(word == 1)
			img.src = 'hint/idol/onestepgroup/' + ary[wordCount] + '.jpg';
		if(word == 2)
			img.src = 'hint/idol/twostepgroup/' + ary[wordCount] + '.jpg';
		if(word == 3)
			img.src = 'hint/idol/threestepgroup/' + ary[wordCount] + '.jpg';	
	}
	
	img.style.position = 'absolute';
	img.style.width='80%';
    img.style.height='80%';
    img.style.left='70%';

	button.src = 'img/btn_music.png';	
    button.style.width='70%';
    button.style.height='70%';
    button.style.left='30%';
    button.style.top='70%';
    button.onclick = 'music.play();'
		
	hint_Info.appendChild(button);
	
	if(imgAdd >=2)
		hint_Info.appendChild(img);
	
	button.addEventListener('click', () => {
		music.play();
		setTimeout(() => {  	
			music.pause();
			while(hint_Info.hasChildNodes()){
        		hint_Info.removeChild(hint_Info.firstChild);
    		}
    	}, hint_time);
	});

	
	hint_time += 1500;
}

function gameOver(){
        alert("🐧GameOver🐧\n정답은 "+ary[wordCount]+"입니다");

    // index.html로 돌아가기
    var link = './Level_idol.jsp';
    location.href = link;
    location.replace(link);
    window.open(link);
}