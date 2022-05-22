"use strict"

let Beauty_Lev1 = {
    여드름 : 'badge',
    향기 : 'aroma',
    기초 : 'base',
    브러쉬 : 'brush',
    다이어트 : 'diet',
    드레스 : 'dress',
    눈썹 : 'eyebrows',
    눈꺼풀 : 'eyelids',
    아이라이너 : 'eyeliner',
    거품 : 'foam',
    주근깨 : 'freckle',
    후드티 : 'hoodie',
    재킷 : 'jacket',
    청바지: 'jeans',
    립스틱 : 'lipstick',
    마스카라 : 'mascara',
    옷 : 'outfit',
    팩 : 'pack',
    펄 : 'pearl',
    모공 : 'pores',
    파우더 : 'powder',
    복구하다 : 'repair',
    샌들 : 'sandals',
    반바지 : 'shorts',
    피부 : 'skin',
    소매 : 'sleeve',
    얼굴빛 : 'teint',
    토너 : 'toner',
    워터 : 'water',
    왁스 : 'wax'
};

let Beauty_Lev2 = {
    발찌 : 'anorak',
    베레모 : 'beret',
    블레이저 : 'blazer',
    잡티 : 'blemish',
    블러셔 : 'blusher',
    가디건 : 'cardigan',
    캐쥬얼 : 'casual',
    컨실러 : 'concealer',
    면 : 'cotton',
    컬링 : 'curling',
    셔츠 : 'dressshirt',
    귀마개 : 'earmuffs',
    에센스 : 'essence',
    속눈썹 : 'eyelashes',
    장갑 : 'gloves',
    머리모양 : 'haircut',
    가죽 : 'leather',
    립글로스 : 'lipgoloss',
    오버핏 : 'overfit',
    우비 : 'raincoat',
    리무버 : 'remover',
    신발끈 : 'shoelace',
    운동화 : 'sneakers',
    패턴 : 'stripe',
    선크림 : 'sunblock',
    니트 : 'sweater',
    체육복 : 'tracksuit',
    탑코트 : 'topcoat',
    유행 : 'trendy',
    유니폼 : 'uniform'
};

let Beauty_Lev3 = {
    악세사리 : 'accessory',
    알레르기 : 'allergic',
    밸런싱 : 'balancing',
    비니 : 'beanie',
    팔찌 : 'bracelets',
    머리땋기 : 'braids',
    캔버스 : 'canverse',
    화장품 : 'cosmetics',
    더마톨로지 : 'dermatology',
    귀걸이 : 'earring',
    에코백 : 'ecobags',
    아이섀도우 : 'eyeshadow',
    최신유행 : 'fashionable',
    롱패딩 : 'longpadding',
    파운데이션 : 'foundation',
    향 : 'fragrance',
    글리터 : 'glitter',
    그라데이션 : 'gradation',
    하이라이트 : 'highlight',
    매니큐어 : 'manicure',
    메신저백 : 'messengerbag',
    수분제품 : 'moisturizers',
    향수 : 'perfume',
    폴리에스터 : 'polyester',
    추천하다 : 'recommend',
    옷핀 : 'safetypin',
    구레나룻 : 'sideburns',
    하이힐 : 'stilettos',
    스타킹 : 'stockings',
    미백 : 'whitening'
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
let Img_list = ['blush', 'lip','palette', 'fashion_1', 'fashion_2', 'fashion_3'];
let Img_Arr = []; // 이미지 랜덤 인덱스 배열
let ind = 0; // Img_list 인덱스
let pos_t = [15, 2, 10, 15, 17, 3]; // 사진 위치
let pos_r = [13, 7, 22, 27, 1, 17]; // 사진 위치
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
    span.innerHTML = "뷰티/패션-"+cur_level+"단계";

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
        case 1 : bringWords(Beauty_Lev1); break;
        case 2 : bringWords(Beauty_Lev2); break;
        case 3 : bringWords(Beauty_Lev3); break;
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
    img.src = 'img/beauty_'+Img_list[Img_Arr[ind]]+'.png';
    img.id = 'beauty_img';
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