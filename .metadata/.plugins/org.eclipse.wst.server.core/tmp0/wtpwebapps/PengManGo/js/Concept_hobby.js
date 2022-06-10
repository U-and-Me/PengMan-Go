"use strict"

let Hobby_Lev1 = {
    체커 : 'checker',
    체스 : 'chess',
    합창 : 'choir',
    클래식 : 'classical',
    요리 : 'cooking',
    공예 : 'craft',
    춤 : 'dancing',
    운동 : 'exercise',
    축구 : 'football',
    골프 : 'golf',
    기타 : 'guitar',
    조깅 : 'jogging',
    마술 : 'magic',
    영화: 'moive',
    노래 : 'music',
    그림 : 'paint',
    피아노 : 'piano',
    사진 : 'picture',
    독서 : 'reading',
    락 : 'rock',
    쇼핑 : 'shopping',
    잠 : 'sleeping',
    주식 : 'stock',
    공부 : 'studying',
    수영 : 'swimming',
    테니스 : 'tennis',
    바이올린 : 'violin',
    걷기 : 'walking',
    요가 : 'yoga',
    서핑 : 'surfing'
};

let Hobby_Lev2 = {
    보드게임 : 'boardgame',
    서예 : 'calligraphy',
    청소 : 'cleaning',
    등산 : 'climbing',
    제빵 : 'cooking',
    자전거 : 'cycling',
    개발 : 'development',
    드라이브 : 'drive',
    전시회 : 'exhibition',
    피규어 : 'figurine',
    낚시 : 'fishing',
    원예 : 'gardening',
    외출 : 'goingout',
    헬스 : 'gymnasium',
    역사 : 'history',
    뜨개질 : 'knitting',
    수학문제풀기 : 'mathing',
    뮤지컬 : 'musisal',
    신문 : 'newspaper',
    오락 : 'pastime',
    포토샵 : 'photoshop',
    필라테스 : 'pilates',
    도자기 : 'pottery',
    래프팅 : 'rafting',
    검색하기 : 'searching',
    바느질 : 'sewing',
    공상과학영화 : 'sfmovie',
    여행 : 'traveling',
    비디오게임 : 'videogame',
    봉사활동 : 'valunteering'
};

let Hobby_Lev3 = {
    사인 : 'autograph',
    모형만들기 : 'build models',
    동전수집 : 'coin collecting',
    코노 : 'coin karaoke',
    십자수 : 'crossstitch',
    일기쓰기 : 'diarywriting',
    아무일도안하기 : 'nothing',
    매운음식먹기 : 'hotfoods',
    자수 : 'embroidery',
    꽂꽂이 : 'flower arrangement',
    외국어 : 'foreign languages',
    양초 : 'fragrantgrass',
    맛집탐방 : 'gastroventure',
    콘서트가기 : 'concert',
    놀이공원가기 : 'amusement',
    투자 : 'investment',
    재테크 : 'investment techniques',
    친구만나기 : 'meet friends',
    종이접기 : 'paper folding',
    사진촬영 : 'photography',
    시쓰기 : 'poem writing',
    냉장고자석 : 'refrigerator magnets',
    암벽등반 : 'rockclimbing',
    자기탐구 : 'soulsearching',
    멍때리기 : 'spacingout',
    우표수집 : 'stamp collecting',
    타이포그래피 : 'typography',
    텃밭 : 'vagetable garden',
    목공 : 'woodworking',
    유튜브 : 'youtuber'
};

let cur_level = 1; // 현재 레벨
let list = ["", "", "", "", ""]; // 단어 배열
let list_right = []; // 맞은 단어 배열
let wordCount = 0; // 단어 세기
let Arr_word = []; // 제시 단어 넣기
let Lev_Img = [3, 5, 6]; // 각 레벨 기회
let imgAdd = 0; // 이미지 추가 수
let Ans_Right = 0; // 단어 길이 체크
let Ans_chk = 1; // 알파벳 맞았는지 체크
let Img_list = ['art', 'bike', 'cook','game', 'sing', 'skateboard'];
let Img_Arr = []; // 이미지 랜덤 인덱스 배열
let ind = 0; // Img_list 인덱스
let pos_t = [15, 2, 10, 1, 8, 4]; // 사진 위치
let pos_r = [13, 7, 22, 26, 1, 17]; // 사진 위치
let pos_ind = 0; // 위치 배열 인덱스

checkLev();

// 단계 넘어가기 전 초기화
function RemoveInfo(){
    cur_level++;
    list = ["", "", "", "", ""];
    list_right.fill("");
    Arr_word.fill("");
    wordCount = 0;
    imgAdd = 0;
    Ans_Right = 0;
    Ans_chk = 1;
    ind = 0;
    pos_ind = 0;

    // 밑줄 제거
    var line = document.querySelector("#word_line");
    while(line.hasChildNodes()){
        line.removeChild(line.firstChild);
    } 

    // 사진 제거
    var back = document.querySelector("#back_img");
    while(back.hasChildNodes()){
        back.removeChild(back.firstChild);
    }

    // 컨셉, 단계 바꾸기
    var span = document.getElementById("span");
    span.innerHTML = "취미-"+cur_level+"단계";

    // 맞춘 단어 제거
    var word_info = document.querySelector("#word_Info"); 
    while(word_info.hasChildNodes()){
        word_info.removeChild(word_info.firstChild);
    }

    var word_info = document.querySelector("#word_Info");
    word_info.innerHTML += '<div style = "font-size:25px; font-weight: bold; color: #0d0624; text-align: center; padding-top: 1%;">맞춘 단어</div>';

    checkLev();
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

// 레벨에 맞는 단어 5개 가져오기
function checkLev(){

    // 게임 종료
    if(cur_level > 3){
        gameOver();
    }

    switch(cur_level){
        case 1 : bringWords(Hobby_Lev1); break;
        case 2 : bringWords(Hobby_Lev2); break;
        case 3 : bringWords(Hobby_Lev3); break;
    }
    playGame();
}

function playGame(){
    
    bringImages();
    // 첫번째 단어 잘라서 배열에 넣기
    Arr_word = list[wordCount].toLowerCase().split('');

    let word_len = list[wordCount].length; // 현재 단어 길이

    var line = document.querySelector("#word_line");

    // 단어 순서대로 화면에 밑줄 긋기
    for(let i = 0; i < word_len; i++){
        if(Arr_word[i] == " "){
            line.innerHTML += '<span id="underline" style=" margin-left:1%; width:50px; "/>';
        }else{
            line.innerHTML += '<img id="underline" src="img/underline.png" style=" margin-left:1%; "/>';
        }
    }

}

function bringWords(wordLists){
    
    let mapL = new Map(Object.entries(wordLists)); //  맵 변환
    let CName = new Array();
    let wordLength = 0;

    for(let key of mapL.keys()){
        CName.push(key); // 키 값 배열에 넣기
        wordLength++;
    }

    for(let i = 0; i < 5; i++){
        let index = Math.floor(Math.random() * wordLength);
        let name = CName[index];

        list[i] = mapL.get(name);

        for(let j = 0; j < i; j++){ // 중복 제거
            if(list[j] == list[i]){
                i--;
                break;
            } 
        }
        
    }
}

function bringImages(){
    for(let i = 0; i < Lev_Img[cur_level-1]; i++){
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
    let alpha = document.getElementById(clicked_id).value;
    alpha = alpha.toLowerCase(); // 소문자로 변경

    let word_len = list[wordCount].length; // 현재 단어 길이
        
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
                line.innerHTML += '<span style=" margin-left:1%; width:68px; font-size:30px;">'+list_right[i]+'</span>';
            }else{
                line.innerHTML += '<img id="underline" src="img/underline.png" style=" margin-left:1%; "/>';
            }
        }
    }     

    // 그림이 완성되기 전에 맞추면 다음 단어
    if(Ans_Right == word_len && imgAdd <= Lev_Img[cur_level-1]){
        // 단어 5개를 모두 맞추면 다음 단계
        if(wordCount == 4){
            alert("다음 단계로 올라갑니다👩🏻‍🎨");
            RemoveInfo();
        }else{// 다음 단어
            var word_info = document.querySelector("#word_Info"); 
            word_info.innerHTML += '<div style = "font-size:20px; margin-top:2%">'+list[wordCount]+'</div>';
            RemoveNextW();
        }
    }else{
        if(Ans_chk == 1){
             // 그림 체크
            if(Lev_Img[cur_level-1] <= imgAdd){
                // 게임 종료
                gameOver();
            }else{
                // 그림 추가
                imgAdd++;
                AddImg();
            }
        }
    }

    Ans_chk = 1;
}

// 이미지 추가
function AddImg(){
    var img = document.createElement('img');
    img.src = 'img/hobby_'+Img_list[Img_Arr[ind]]+'.png';
    img.id = 'hobby_img';
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

function gameOver(){
    alert("정답은 "+list[wordCount]+"입니다");
    alert("🐧GameOver🐧");
    alert("🐧메인화면으로 넘어갑니다");

    // index.html로 돌아가기
    var link = 'index.jsp';
    location.href = link;
    location.replace(link);
    window.open(link);
}