<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>PengMan🐧</title>
<link rel="stylesheet" href="css/Level.css?tearNm=3">
<script src="js/Level.js?testNm=8" defer></script>
</head>
<%@include file="./dbconn.jsp" %>
	<%
		String str = request.getParameter("stage");
		//System.out.println(str + "ddddd");
		
		int stage = 0;
	
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "";
		
		if(str != null &&Integer.parseInt(str) > 1){
			sql = "update stage set position=? where concept='character'";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, str);
			pstmt.executeUpdate();
		}
		
		sql = "select position from stage where concept='character'";
		pstmt = conn.prepareStatement(sql);
		rs = pstmt.executeQuery();
		while(rs.next()){
			stage = Integer.parseInt(rs.getString("position"));
		}
		
		System.out.println(stage);

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
        <img id="background" src="img/Stage_Background.png">
    </div>

        <span id="stage_con30" onclick="clickId(30, 'animal')"> <!-- 30 level -->
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image30"></a>
    </span>
    <span id="stage_con29" onclick="clickId(29, 'animal')"> <!-- 29 level -->
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image29"></a>
    </span>
    <span id="stage_con28" onclick="clickId(28, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image28"></a>
    </span>
    <span id="stage_con27" onclick="clickId(27, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image27"></a>
    </span>
    <span id="stage_con26" onclick="clickId(26, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image26"></a>
    </span>
    <span id="stage_con25" onclick="clickId(25, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image25"></a>
    </span>
    <span id="stage_con24" onclick="clickId(24, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image24"></a>
    </span>
    <span id="stage_con23" onclick="clickId(23, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image23"></a>
    </span>
    <span id="stage_con22" onclick="clickId(22, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image22"></a>
    </span>
    <span id="stage_con21" onclick="clickId(21, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image21"></a>
    </span>
    <span id="stage_con20" onclick="clickId(20, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image20"></a>
    </span>
    <span id="stage_con19" onclick="clickId(19, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image19"></a>
    </span>
    <span id="stage_con18" onclick="clickId(18, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image18"></a>
    </span>
    <span id="stage_con17" onclick="clickId(17, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image17"></a>
    </span>
    <span id="stage_con16" onclick="clickId(16, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image16"></a>
    </span>
    <span id="stage_con15" onclick="clickId(15, 'animal')">
        <a href="javascript:;" id="link"v><img src=".\img\Stage_icon.png" id="image15"></a>
    </span>
    <span id="stage_con14" onclick="clickId(14, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image14"></a>
    </span>
    <span id="stage_con13" onclick="clickId(13, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image13"></a>
    </span>
    <span id="stage_con12" onclick="clickId(12, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image12"></a>
    </span>
    <span id="stage_con11" onclick="clickId(11, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image11"></a>
    </span>
    <span id="stage_con10" onclick="clickId(10, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image10"></a>
    </span>
    <span id="stage_con9" onclick="clickId(9, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image9"></a>
    </span>
    <span id="stage_con8" onclick="clickId(8, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image8"></a>
    </span>
    <span id="stage_con7" onclick="clickId(7, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image7"></a>
    </span>
    <span id="stage_con6" onclick="clickId(6, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image6"></a>
    </span>
    <span id="stage_con5" onclick="clickId(5, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image5"></a>
    </span>
    <span id="stage_con4" onclick="clickId(4, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image4"></a>
    </span>
    <span id="stage_con3" onclick="clickId(3, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image3"></a>
    </span>
    <span id="stage_con2" onclick="clickId(2, 'animal')">
        <a href="javascript:;" id="link"><img src=".\img\Stage_icon.png" id="image2"></a>
    </span>   

    <script >
    	let db_stage = <%= stage%>;
    </script>
</body>
</html>