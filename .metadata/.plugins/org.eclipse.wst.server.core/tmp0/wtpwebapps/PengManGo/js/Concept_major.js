"use strict"

let Major_Lev1 = {
    1 : 'array',
    2 : 'click',
    3 : 'compiler',
    4 : 'database',
    5 : 'doctype',
    6 : 'drawable',
    7 : 'edittext',
    8 : 'exception',
    9 : 'extends',
    10 : 'frame',
    11 : 'function',
    12 : 'gradle',
    13 : 'insert',
    14 : 'layout',
    15 : 'logic',
    16 : 'mutex',
    17 : 'network',
    18 : 'object',
    19 : 'package',
    20 : 'private',
    21 : 'select',
    22 : 'short',
    23 : 'sleep',
    24 : 'string',
    25 : 'syntax',
    26 : 'system',
    27 : 'thread',
    28 : 'vector',
    29 : 'visible',
    30 : 'while'
};

let Major_Lev2 = {
    1 : 'argument',
    2 : 'background',
    3 : 'binding',
    4 : 'branch',
    5 : 'container',
    6 : 'dictionary',
    7 : 'encoding',
    8 : 'carer',
    9 : 'fragment',
    10 : 'implement',
    11 : 'inflater',
    12 : 'instance',
    13 : 'intent',
    14: 'interface',
    15 : 'iterable',
    16 : 'maketext',
    17 : 'namespace',
    18 : 'ofstream',
    19 : 'oncreate',
    20 : 'parameter',
    21 : 'reflect',
    22 : 'rendering',
    23 : 'replace',
    24 : 'request',
    25 : 'respone',
    26 : 'servlet',
    27 : 'settimeout',
    28 : 'shadow',
    29 : 'unsigned',
    30 : 'variable'
};

let Major_Lev3 = {
    1 : 'abstraction',
    2 : 'autofocus',
    3 : 'constructor',
    4 : 'destructor',
    5 : 'enumerate',
    6 : 'getelement',
    7 : 'indentifier',
    8 : 'inheritance',
    9 : 'initialization',
    10 : 'instanceof',
    11 : 'notification',
    12 : 'overriding',
    13 : 'partition',
    14: 'placeholder',
    15 : 'polymorphism',
    16 : 'printstacktrace',
    17 : 'prototype',
    18 : 'recursion',
    19 : 'resource',
    20 : 'setattribute',
    21 : 'setinterval',
    22 : 'singleton',
    23 : 'snakecase',
    24 : 'statement',
    25 : 'subquery',
    26 : 'surfaceview',
    27 : 'symmbolic',
    28 : 'synchronized',
    29 : 'transition',
    30 : 'upcasting'
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
let Img_list = ['error1', 'error2', 'error3','error4', 'error5', 'error6'];
let Img_Arr = []; // 이미지 랜덤 인덱스 배열
let ind = 0; // Img_list 인덱스
let pos_t = [15, 2, 10, -4, -10, -18]; // 사진 위치
let pos_r = [3, 7, 19, 20, 3, 13]; // 사진 위치
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
    span.innerHTML = "코딩-"+cur_level+"단계";

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
        case 1 : bringWords(Major_Lev1); break;
        case 2 : bringWords(Major_Lev2); break;
        case 3 : bringWords(Major_Lev3); break;
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
    img.src = 'img/major_'+Img_list[Img_Arr[ind]]+'.png';
    img.id = 'Major_img';
    img.style.position = 'absolute';
    img.style.width = '500px';
    img.style.height = '500px';
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