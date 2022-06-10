"use strict"

let Color_Lev1 = {
    아주색 : 'azure',
    베이지색 : 'beige',
    검정색 : 'black',
    갈색 : 'brown',
    코발트색 : 'cobalt',
    적갈색 : 'cooper',
    산호색 : 'coral',
    크림색 : 'cream',
    청록색 : 'cyan',
    금색 : 'gold',
    초록색 : 'green',
    인디고색 : 'indigo',
    상아색 : 'ivory',
    카키색 : 'khaki',
    레몬색 : 'lemon',
    라일락색 : 'lilac',
    모브색 : 'mauve',
    남색 : 'navy',
    황토색 : 'ocher',
    올리브색 : 'olive',
    주황색 : ' orange',
    핑크색 : 'pink',
    보라색 : 'purple',
    스칼렛색 : 'scarlet',
    은색 : 'sliver',
    아이보리색 : 'tan',
    버밀색 : 'vermeil',
    바이올렛색 : 'violet',
    흰색 : 'white',
    노란색 : 'yellow'
};

let Color_Lev2 = {
    살구색 : 'apricot',
    애쉬색 : 'ashcolor',
    브레시색 : 'brassytone',
    차콜색 : 'charcoal',
    코랄색 : 'coral',
    진홍색 : 'crimson',
    칙칙한회색 : 'dimgray',
    에메랄드색 : 'emerald',
    자홍색 : 'fuchsia',
    연한초록색 : 'grassygreen',
    그리즐색 : 'grizzle',
    핫핑크색 : 'hotpink',
    라벤더색 : 'lavender',
    진한주황색 : 'luteous',
    매더색 : 'madder',
    짙은분홍색 : 'magenta',
    고동색 : 'maroon',
    옅은자주색 : 'mauve',
    겨자색 : 'mustard',
    오크우드색 : 'oakwood',
    연보라색 : 'orchid',
    연두색 : 'peagreen',
    핑크빛 : 'pinkish',
    황실의파랑색 : 'royalblue',
    주황색 : 'salmon',
    바다조가비색 : 'seashell',
    하늘색 : 'skyblue',
    철강빛파랑색 : 'steelblue',
    엉겅퀴색 : 'thistle',
    윔톤 : 'warmcolour'
};

let Color_Lev3 = {
    버블껌색 : 'bubblegum',
    버건디색 : 'burgundy',
    나무색 : 'burlybrown',
    카네이션색 : 'carnation',
    연초록색 : 'chartreuse',
    체리페퍼색 : 'cherrypepper',
    민들레색 : 'dandelion',
    어두운누른빛에엷은다색 : 'darkkhaki',
    어두운바다녹색 : 'darkseagreen',
    탁한분홍색 : 'duskypink',
    가지색 : 'eggplant',
    에그셀색 : 'eggshellcolor',
    내화색 : 'firebrick',
    국화과의다년초색 : 'goldenrod',
    힐리오트롭색 : 'heliotrope',
    밝은초록색 : 'honeydew',
    라임녹색 : 'limegreen',
    마스브라운색 : 'marsbrown',
    짙은남색 : 'mazarine',
    박하크림색 : 'mintcream',
    밝은오렌지색 : 'peachpuff',
    파스텔보라색 : 'periwinkle',
    시안색 : 'seamfoam',
    어두운푸른빛회색 : 'slategray',
    밝은시안색 : 'spindrift',
    붉은색도는금색 : 'strawberry',
    귤색 : 'tengerine',
    푸른빛녹색 : 'turquoise',
    주홍색 : 'vermilion',
    옐로우쉬그린색 : 'yellowishgreen'
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
let Img_list = ["brown", "green", "gray","orange", "purple", "red"];
let Img_Arr = []; // 이미지 랜덤 인덱스 배열
let ind = 0; // Img_list 인덱스
let pos_t = [15, 2, 4, 18, 27, 21]; // 사진 위치
let pos_r = [15, 7, 22, 27, 4, 19]; // 사진 위치
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

    // 컨셉, 단계 바꾸기
    var span = document.getElementById("span");
    span.innerHTML = "색깔-"+cur_level+"단계";

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
        case 1 : bringWords(Color_Lev1); break;
        case 2 : bringWords(Color_Lev2); break;
        case 3 : bringWords(Color_Lev3); break;
    }
    bringImages();
    playGame();
}

function playGame(){
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
    img.src = 'img/draw_'+Img_list[Img_Arr[ind++]]+'.png';
    img.id = 'color_img';
    img.style.position = 'absolute';
    img.style.width = '400px';
    img.style.height = '400px';
    img.style.width = '300px';
    img.style.height = '300px';
    img.style.top = pos_t[pos_ind]+'%';
    img.style.right = pos_r[pos_ind]+'%';

    var back = document.querySelector("#back_img");
    back.appendChild(img);

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