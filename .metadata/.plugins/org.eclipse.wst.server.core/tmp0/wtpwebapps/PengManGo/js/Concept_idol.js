"use strict"

let Idol_Lev1 = {
    에이핑크 : 'apink',
    아스트로 : 'astro',
    에이티즈 : 'ateez',
    비스트 : 'beast',
    빅뱅 : 'bigbang',
    블락비 : 'blockb',
    비투비 : 'btob',
    씨엔블루 : 'cnblue',
    데이식스 : 'daysix',
    여자친구 : 'gfried',
    카라 : 'kara',
    러블리즈 : 'lovelyz',
    엠블랙 : 'mblaq',
    미쓰에이 : 'missa',
    몬스타엑스 : 'monstax',
    엔플라잉 : 'nflying',
    뉴이스트 : 'nuest',
    오마이걸 : 'ohmygirl',
    레인보우 : 'rainbow',
    시크릿 : 'secret',
    샤이니 : 'shinee',
    씨스타 : 'sistar',
    타히티 : 'tahiti',
    티아라 : 'tara',
    틴탑 : 'teentop',
    트와이스 : 'twice',
    유키스 : 'ukiss',
    빅톤 : 'victon',
    빅스 : 'vixx',
    위너 : 'winner'
};

let Idol_Lev2 = {
    애프터스쿨 : 'afterschool',
    베리굿 : 'berrygood',
    블랙핑크 : 'blackpink',
    브레이브걸스 : 'bravegirls',
    크레용팝 : 'crayonpop',
    달샤벳 : 'dalshabet',
    포미닛 : 'fourminute',
    걸스데이 : 'girlsday',
    에스파 : 'aespa',
    헬로비너스 : 'hellovenus',
    인피니트 : 'infinite',
    라붐 : 'laboum',
    마마무 : 'mamamoo',
    멜로디데이 : 'melodyday',
    모모랜드 : 'momoland',
    엔시티드림 : 'nctdream',
    나인뮤지스 : 'ninemuses',
    펜타곤 : 'pentagon',
    프리스틴 : 'pristin',
    레드벨벳 : 'redvelvet',
    세븐틴 : 'seventeen',
    스누퍼 : 'snuper',
    소나무 : 'sonamoo',
    써니힐 : 'sunnyhill',
    슈퍼주니어 : 'superjunior',
    더보이즈 : 'theboyz',
    스테이씨 : 'stayc',
    언니쓰 : 'unnies',
    업텐션 : 'uptention',
    원더걸스 : 'wodergirls'
};

let Idol_Lev3 = {
    소년공화국 : 'boysrepulic',
    브라운아이드걸스 : 'browneyedgirls',
    셀럽파이브 : 'celebfive',
    체리블렛 : 'cherrybullet',
    싹쓰리 : 'ssakthree',
    크래비티 : 'cravity',
    동키즈 : 'dongkiz',
    드림캐쳐 : 'dreamcatcher',
    엔하이픈 : 'enhypen',
    에버글로우 : 'everyglow',
    프로미스나인 : 'fromisnine',
    소녀시대 : 'girlsgeneration',
    골든차일드 : 'goldenchild',
    구구단 : 'gugudan',
    하이라이트 : 'highlight',
    임팩트 : 'imfact',
    코요태 : 'koyote',
    매드타운 : 'madtown',
    워너원 : 'wannaone',
    원더나인 : 'onethenine',
    원어스 : 'oneus',
    오렌지카라멜 : 'orangecaramel',
    로켓펀치 : 'rocketpunch',
    신화 : 'shinhwa',
    스텔라 : 'stellar',
    스트레이키즈 : 'straykids',
    투바투 : 'tomorrowxtogether',
    트레저 : 'treasure',
    위클리 : 'weeekly',
    위키미키 : 'wekimeki'
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
let Img_list = ["apink", "2pm", "girl","hasungwoon", "mamamoo", "exo"];
let Img_Arr = []; // 이미지 랜덤 인덱스 배열
let ind = 0; // Img_list 인덱스
let pos_t = [10, -6, 10, -10, 4, -17]; // 사진 위치
let pos_r = [13, 7, 22, 17, 1, -2]; // 사진 위치
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
    span.innerHTML = "아이돌-"+cur_level+"단계";

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
    //alert("다음단계");
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
        case 1 : bringWords(Idol_Lev1); break;
        case 2 : bringWords(Idol_Lev2); break;
        case 3 : bringWords(Idol_Lev3); break;
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
        }else{ // 다음 단어
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
    img.src = 'img/idol_'+Img_list[Img_Arr[ind++]]+'.png';
    img.id = 'idol_img';
    img.style.position = 'absolute';
    img.style.width = '500px';
    img.style.height = '500px';
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