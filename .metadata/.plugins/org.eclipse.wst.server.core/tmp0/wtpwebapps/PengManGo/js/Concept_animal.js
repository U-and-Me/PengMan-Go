"use strict"

let Animal_Lev1 = {
    오소리 : 'badge',
    낙타 : 'camel',
    치타 : 'cheetah',
    닭 : 'chicken',
    돌고래 : 'dolphin',
    당나귀 : 'donkey',
    독수리 : 'eagle',
    코끼리 : 'elephant',
    개구리 : 'frog',
    기린 : 'giraffe',
    고릴라 : 'gorilla',
    말 : 'horse',
    코알라 : 'koala',
    바닷가재: 'lobster',
    미어캣 : 'meerkat',
    원숭이 : 'monkey',
    문어 : 'octopus',
    판다 : 'panda',
    앵무새 : 'parrot',
    펭귄 : 'penguin',
    너구리 : 'racoon',
    새우 : 'shrimp',
    스컹크 : 'skunk',
    나무늘보 : 'sloth',
    달팽이 : 'snail',
    거미 : 'spider',
    불가사리 : 'starfish',
    호랑이 : 'tiger',
    거북이 : 'turle',
    얼룩말 : 'zebra'
};

let Animal_Lev2 = {
    들소 : 'buffalo',
    잉어 : 'carp',
    카멜레온 : 'chameleon',
    침팬지 : 'chimpanzee',
    매미 : 'cicada',
    소라 : 'conch',
    가재 : 'crayfish',
    악어 : 'crocodile',
    공룡 : 'dinosaur',
    거위 : 'goose',
    고슴도치 : 'hedgehog',
    하이에나 : 'hyena',
    캥거루 : 'kangaroo',
    무당벌레 : 'ladybug',
    표범 : 'leopard',
    도마뱀 : 'lizard',
    두더지 : 'mole',
    타조 : 'ostrich',
    비둘기 : 'pigeon',
    오리너구리 : 'platypus',
    다람쥐 : 'quirrel',
    순록 : 'reindeer',
    연어 : 'salmon',
    갈매기 : 'seagull',
    상어 : 'shark',
    종달새 : 'skylark',
    오징어 : 'squid',
    제비 : 'swallow',
    두꺼비 : 'toad',
    족제비 : 'weasel'
};

let Animal_Lev3 = {
    개미핥기 : 'anteater',
    영양 : 'antelope',
    북극여우 : 'arcticfox',
    줄무늬다람쥐 : 'chipmunk',
    산호 : 'coral',
    뻐꾸기 : 'cuckoo',
    사막여우 : 'desertfox',
    물개 : 'furseal',
    가젤 : 'gazelle',
    갈치 : 'hairtail',
    하마 : 'hippopotamus',
    재규어 : 'jaguar',
    랫서판다 : 'lesserpanda',
    고등어 : 'mackerel',
    까치 : 'magpie',
    몽구스 : 'mongoose',
    꾀꼬리 : 'nightingale',
    오랑우탄 : 'orangutan',
    공작새 : 'peacock',
    북극곰 : 'polarbear',
    쿼카 : 'quokka',
    코뿔소 : 'rhinoceros',
    노루 : 'roedeer',
    바다코끼리 : 'seaelephant',
    참새 : 'sparrow',
    가오리 : 'stingray',
    올챙이 : 'tadpole',
    고라니 : 'wapiti',
    기러기 : 'wildgoose',
    삵 : 'wildcat'
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
let Img_list = ['bear', 'cat', 'panda','lion', 'rabbit', 'squirrel'];
let Img_Arr = []; // 이미지 랜덤 인덱스 배열
let ind = 0; // Img_list 인덱스
let pos_t = [15, 2, 10, 18, 27, 23]; // 사진 위치
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
    span.innerHTML = "동물-"+cur_level+"단계";

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
        case 1 : bringWords(Animal_Lev1); break;
        case 2 : bringWords(Animal_Lev2); break;
        case 3 : bringWords(Animal_Lev3); break;
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
    img.src = 'img/animal_'+Img_list[Img_Arr[ind]]+'.png';
    img.id = 'animal_img';
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