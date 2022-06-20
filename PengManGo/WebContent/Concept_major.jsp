<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PengMan🐧</title>
    <link rel="stylesheet" href="css/Concept_game.css?testNm=6">
    <script src="js/Concept_major.js?testNm=10" defer></script>
</head>
	<%@include file="./dbconn.jsp" %>
	<%
	// 1~10 : 1개 / 11 ~ 20 : 2개 / 21 ~ 30 : 3개
		ArrayList<String> word_list1 = new ArrayList<>();
		ArrayList<String> word_list2 = new ArrayList<>();
		ArrayList<String> word_list3 = new ArrayList<>();
		int ind = 0;
	
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		String sql = "select c_word from word where diff='1' and concept='coding' order by rand() limit 1";
		pstmt = conn.prepareStatement(sql);
		rs = pstmt.executeQuery();
		while(rs.next()){
			word_list1.add(rs.getString("c_word"));
		}
		
		sql = "select c_word from word where diff='2' and concept='coding' order by rand() limit 2";
		pstmt = conn.prepareStatement(sql);
		rs = pstmt.executeQuery();
		while(rs.next()){
			word_list2.add(rs.getString("c_word"));
		}
		
		sql = "select c_word from word where diff='3' and concept='coding' order by rand() limit 3";
		pstmt = conn.prepareStatement(sql);
		rs = pstmt.executeQuery();
		while(rs.next()){
			word_list3.add(rs.getString("c_word"));
		}
		
		if(rs != null){
     		rs.close();
     	}
     	if(pstmt != null){
     		pstmt.close();
     	}
     	if(conn != null){
     		conn.close();
     	}
	%>
<body>
    <div id="back">
            <img id="background"src="img/background.jpg">
            <a href="./Level_major.jsp"><img id="char" src="img/character.png"></button></a>
            <span id="span">코딩</span>
        <div id="back_2">
            <img id="draw_image" src="img\visualStudioCode.jpg">
            <div id="back_img"></div>
        </div> 
        <div id="word_line"></div>
    <div class="warp">
        <div class="keyboard">
            <button id="Alpha-A" onclick="checkAlpha(this.id)" value="A">A</button>
            <button id="Alpha-B" onclick="checkAlpha(this.id)" value="B">B</button>
            <button id="Alpha-C" onclick="checkAlpha(this.id)" value="C">C</button>
            <button id="Alpha-D" onclick="checkAlpha(this.id)" value="D">D</button>
            <button id="Alpha-E" onclick="checkAlpha(this.id)" value="E">E</button>
            <button id="Alpha-F" onclick="checkAlpha(this.id)" value="F">F</button>
            <button id="Alpha-G" onclick="checkAlpha(this.id)" value="G">G</button>
            <button id="Alpha-H" onclick="checkAlpha(this.id)" value="H">H</button>
            <button id="Alpha-I" onclick="checkAlpha(this.id)" value="I">I</button>
        </div>
        <div class="keyboard">
            <button id="Alpha-J" onclick="checkAlpha(this.id)" value="J">J</button>
            <button id="Alpha-K" onclick="checkAlpha(this.id)" value="K">K</button>
            <button id="Alpha-L" onclick="checkAlpha(this.id)" value="L">L</button>
            <button id="Alpha-M" onclick="checkAlpha(this.id)" value="M">M</button>
            <button id="Alpha-N" onclick="checkAlpha(this.id)" value="N">N</button>
            <button id="Alpha-O" onclick="checkAlpha(this.id)" value="O">O</button>
            <button id="Alpha-P" onclick="checkAlpha(this.id)" value="P">P</button>
            <button id="Alpha-Q" onclick="checkAlpha(this.id)" value="Q">Q</button>
            <button id="Alpha-R" onclick="checkAlpha(this.id)" value="R">R</button>
        </div>
        <div class="keyboard">
            <button id="Alpha-S" onclick="checkAlpha(this.id)" value="S">S</button>
            <button id="Alpha-T" onclick="checkAlpha(this.id)" value="T">T</button>
            <button id="Alpha-U" onclick="checkAlpha(this.id)" value="U">U</button>
            <button id="Alpha-V" onclick="checkAlpha(this.id)" value="V">V</button>
            <button id="Alpha-W" onclick="checkAlpha(this.id)" value="W">W</button>
            <button id="Alpha-X" onclick="checkAlpha(this.id)" value="X">X</button>
            <button id="Alpha-Y" onclick="checkAlpha(this.id)" value="Y">Y</button>
            <button id="Alpha-Z" onclick="checkAlpha(this.id)" value="Z">Z</button>
            <button id="heart" onclick="audio.play();" value="♡">🎶</button>
            <script>                	
            	let ary = [];
            	
            	let cur_stage = parseInt(window.localStorage.getItem("major_stage"));
    			let word = 0;
    			
            	if(cur_stage >= 1 && cur_stage <= 10){
            		ary[0] = "<%= word_list1.get(0) %>";
            		word = 1;
            	}else if(cur_stage >= 11 && cur_stage <= 20){
            		ary[0] = "<%= word_list2.get(0) %>";
            		ary[1] = "<%= word_list2.get(1) %>";
            		word = 2;
            	}else if(cur_stage >= 21 && cur_stage <= 30){
            		ary[0] = "<%= word_list3.get(0) %>";
            		ary[1] = "<%= word_list3.get(1) %>";
            		ary[2] = "<%= word_list3.get(2) %>";
            		word = 3;
            	}
    	
                let audio = new Audio('music/storybgmcoding.mp3');
                audio.addEventListener('ended', function () {
                    this.currentTime = 0;
                    audio.volumn = 3;
                    audio.play();
                }, false);
            </script>
        </div>
    </div>  
    <span id="word_Info">
    
    </span>
</div>
</body>
</html>