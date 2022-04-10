<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
	<%@ include file="dbconn.jsp" %>
	<%
		ArrayList<String> word_list = new ArrayList();
	
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select c_word from word where diff='1'";
		pstmt = conn.prepareStatement(sql);
		rs = pstmt.executeQuery();
		while(rs.next()){
			word_list.add(rs.getString("c_word"));
		}
	%>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PengMan🐧</title>
    <link rel="stylesheet" href="css/Concept_game.css">
    <script src="js/Concept_animal.js" defer></script>
</head>

<body>
    <div id="back">
        <img id="background" src="img/background.jpg">
        <a href="index.jsp"><img id="char" src="img/character.png"></button></a>
        <span id="span">동물-1단계</span>
        <div id="back_2">
            <img id="draw_image" src="img\yard.jpg">
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
                	let test = "dddddd";
                    let audio = new Audio('music/moring.mp3');
                    audio.addEventListener('ended', function () {
                        this.currentTime = 0;
                        audio.play();
                    }, false);
                </script>
            </div>
        </div>
        <span id="word_Info">
            맞춘 단어
        </span>
    </div>
</body>

</html>