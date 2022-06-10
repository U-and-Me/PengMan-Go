"use strict"

let Job_Lev1 = {
    배우 : 'actor',
    보험계리인 : 'actuary',
    예술가 : 'artist',
    이발사 : 'barber',
    제빵사 : 'barker',
    건설업자 : 'builder',
    정육점주인 : 'butcher',
    간호인 : 'carer',
    계산원 : 'cashier',
    청소원 : 'clearner',
    요리사 : 'cook',
    무용가 : 'dancer',
    치과의사 : 'dentist',
    의사: 'doctor',
    편집자 : 'editor',
    꽂장수 : 'florist',
    정원사 : 'gardener',
    관리자 : 'manager',
    간호사 : 'nurse',
    화가 : 'painter',
    조종사 : 'pilot',
    시인 : 'poet',
    프로그래머 : 'programmer',
    지붕수리인 : 'roofer',
    외과의사 : 'surgeon',
    재단사 : 'tailor',
    타일까는사람 : 'tiler',
    웨이터 : 'waiter',
    용접공 : 'welder',
    작가 : 'writer'
};

let Job_Lev2 = {
    회계사 : 'accountant',
    앵커 : 'anchor',
    건축가 : 'architect',
    은행직원 : 'bank clerk',
    생물학자 : 'biologist',
    경호원 : 'bodyguard',
    목수 : 'carpenter',
    약사 : 'chemist',
    희극인 : 'comedian',
    작곡가 : 'composer',
    시의원 : 'counsellor',
    실내장식가 : 'decorator',
    외교관 : 'dipolmat',
    경제전문가 : 'economist',
    전기공 : 'eletrician',
    기술자 : 'engineer',
    농부 : 'farmer',
    언론인 : 'journalist',
    판사 : 'judge',
    강사 : 'lecturer',
    사서 : 'librarian',
    기계공 : 'mechanic',
    음악가 : 'musician',
    사무직원 : 'office worker',
    안경사 : 'optician',
    집배원 : 'postman',
    항해사 : 'sailor',
    조각가 : 'sculptor',
    비서 : 'secretary',
    변호사 : 'solicitor'
};

let Job_Lev3 = {
    항공기승무원 : 'air steward',
    천문학자 : 'astronomer',
    안무가 : 'choreographer',
    공무원 : 'civil worker',
    탐정 : 'detective',
    디제이 : 'disc jockey',
    영화감독 : 'film director',
    일러스트레이터 : 'illustrator',
    인테리어디자이너 : 'interioi designer',
    번역가 : 'interpreter',
    인명구조원 : 'lifeguard',
    마사지사 : 'masseur',
    상인 : 'merchant',
    기상학자 : 'meteorologist',
    아나운서 : 'newsreader',
    긴급의료원 : 'paramedic',
    사진사 : 'photographer',
    극작가 : 'playwright',
    배관공 : 'plumber',
    정치인 : 'politician',
    교도관 : 'prison officer',
    접수안내원 : 'receptionist',
    연구원 : 'researcher',
    소매상인 : 'shopkeeper',
    사회복지사 : 'social worker',
    소프트웨어개발자 : 'software developer',
    석공 : 'stonemason',
    관광안내인 : 'tour guide',
    수의사 : 'veterinarian',
    웹디자이너 : 'web designer'
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
let Img_list = ['artist', 'doctor', 'hair','police', 'reporter', 'Travel'];
let Img_Arr = []; // 이미지 랜덤 인덱스 배열
let ind = 0; // Img_list 인덱스
let pos_t = [15, 2, 10, 1, 1, 0]; // 사진 위치
let pos_r = [13, 7, 22, 28, 1, 17]; // 사진 위치
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
    span.innerHTML = "직업-"+cur_level+"단계";

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
        case 1 : bringWords(Job_Lev1); break;
        case 2 : bringWords(Job_Lev2); break;
        case 3 : bringWords(Job_Lev3); break;
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

    console.log(list[wordCount]);
        
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
    img.src = 'img/job_'+Img_list[Img_Arr[ind]]+'.png';
    img.id = 'job_img';
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