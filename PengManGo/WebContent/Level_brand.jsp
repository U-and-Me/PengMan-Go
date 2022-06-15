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
			sql = "update stage set position=? where concept='brand'";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, str);
			pstmt.executeUpdate();
		}
		
		sql = "select position from stage where concept='brand'";
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
        <img id="background" src="img/Stage_background.png">
    </div>

   <div id = "stage_con30" onclick="clickId(30, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
        <div id = "stage_con29" onclick="clickId(29, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con28" onclick="clickId(28, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
        <div id = "stage_con27" onclick="clickId(27, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con26" onclick="clickId(26, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con25" onclick="clickId(25,'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con24" onclick="clickId(24, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con23" onclick="clickId(23, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con22" onclick="clickId(22, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con21" onclick="clickId(21, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con20" onclick="clickId(20, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con19" onclick="clickId(19, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con18" onclick="clickId(18, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con17" onclick="clickId(17, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con16" onclick="clickId(16, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con15" onclick="clickId(15, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con14" onclick="clickId(14, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con13" onclick="clickId(13, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con12" onclick="clickId(12, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con11" onclick="clickId(11, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con10" onclick="clickId(10, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con9" onclick="clickId(9, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con8" onclick="clickId(8, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con7" onclick="clickId(7, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con6" onclick="clickId(6, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con5" onclick="clickId(5, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con4" onclick="clickId(4, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con3" onclick="clickId(3, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con2" onclick="clickId(2, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>
       <div id = "stage_con1" onclick="clickId(1, 'brand')">
       <img id="image1" src=".\img\Stage_icon.png">
       </div>

    <script >
    	let db_stage = <%= stage%>;
    </script>
</body>
</html>