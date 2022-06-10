"use strict"

let Food_Lev1 = {
    라면 : 'ramen',
    베이컨 : 'becon',
    비스킷 : 'biscuits',
    버터 : 'butter',
    당근 : 'carrot',
    치즈 : 'cheese',
    체리 : 'cherry',
    닭고기 : 'chicken',
    코코넛 : 'coconut',
    타코 : 'taco',
    오리고기 : 'duck',
    마늘 : 'garlic',
    포도 : 'grape',
    꿀: 'honey',
    아이스크림 : 'icecream',
    초밥 : 'sushi',
    면 : 'noodles',
    와플 : 'waffle',
    양파 : 'onion',
    파스타 : 'pasta',
    복숭아 : 'peach',
    김치 : 'kimchi',
    피자 : 'pizza',
    호박 : 'pumpkin',
    무 : 'radish',
    딸기 : 'strawberry',
    사탕 : 'sweets',
    토스트 : 'toast',
    칠면조고기 : 'turkey',
    요구르트 : 'yoghurt'
};

let Food_Lev2 = {
    멸치 : 'anchovy',
    살구 : 'apricot',
    아보카도 : 'avocado',
    바게트 : 'baguette',
    비빔밥 : 'bibimbap',
    보로콜리 : 'broccoli',
    불고기 : 'bulgogi',
    양배추 : 'cabbage',
    초콜릿 : 'chocolate',
    커피 : 'coffee',
    애호박 : 'courgette',
    오이 : 'cucumber',
    달고나 : 'dalgona',
    볶음밥 : 'fried rice',
    자몽 : 'grapefruit',
    햄버거 : 'hamburger',
    케첩 : 'keychup',
    양상추 : 'lettuce',
    마가린 : 'margarine',
    마요네즈 : 'mayoonaise',
    된장찌개 : 'miso stew',
    팟타이 : 'pad thai',
    파슬리 : 'parsley',
    죽 : 'porridge',
    건포도 : 'raisins',
    라즈베리 : 'raspberry',
    소시지 : 'sausages',
    스파게티 : 'spaghetti',
    시금치 : 'spinach',
    호두 : 'walnuts'
};

let Food_Lev3 = {
    가지 : 'aubergine',
    콩나물 : 'beansprouts',
    갈비찜 : 'steamed ribs',
    식혜 : 'riec punch',
    떡볶이 : 'tteockbokki',
    머핀 : 'muffin',
    삼겹살 : 'pork belly',
    돈가스 : 'pork cutlet',
    김밥 : 'gimbap',
    짬뽕 : 'jjamppong',
    버블티 : 'bubble tea',
    팥빙수 : 'patbingsu',
    스무디 : 'smoothie',
    푸딩 : 'pudding',
    마카롱 : 'macaron',
    칼국수 : 'kalguksu',
    순대 : 'sundae',
    보쌈 : 'bossam',
    잡채 : 'japchae',
    버섯 : 'mushroom',
    귤 : 'tangerine',
    회 : 'sashimi',
    고로케 : 'croquette',
    송편 : 'songpyeon',
    너겟 : 'nugget',
    쌀국수 : 'rice noodles',
    감자튀김 : 'french fries',
    팝콘 : 'popcorn',
    에스카르고 : 'escargot',
    딤섬 : 'dimsum'
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
let Img_list = ['friedrice', 'kimbab', 'mlik','pork', 'raman', 'rice'];
let Img_Arr = []; // 이미지 랜덤 인덱스 배열
let ind = 0; // Img_list 인덱스
let pos_t = [0, -4, -14, -23, -12, 5]; // 사진 위치
let pos_r = [13, 3, 17, 6, -4, 23]; // 사진 위치
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
    span.innerHTML = "음식-"+cur_level+"단계";

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
        case 1 : bringWords(Food_Lev1); break;
        case 2 : bringWords(Food_Lev2); break;
        case 3 : bringWords(Food_Lev3); break;
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
        line.innerHTML += '<img id="underline" src="img/underline.png" style=" margin-left:1%; "/>';
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
    img.src = 'img/food_'+Img_list[Img_Arr[ind]]+'.png';
    img.id = 'food_img';
    img.style.position = 'absolute';
    img.style.width = '600px';
    img.style.height = '600px';
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