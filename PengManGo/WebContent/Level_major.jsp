<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>PengMan🐧</title>
<link rel="stylesheet" href="css/Level.css?testNm=6">
<script src="js/Level.js?testNm=17" defer></script>
</head>
<%@include file="./dbconn.jsp" %>
	<%
		String str = request.getParameter("stage");

		int stage = 0;
	
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "";
		
		if(str != null &&Integer.parseInt(str) > 1){
			sql = "update stage set position=? where concept='major'";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, str);
			pstmt.executeUpdate();
		}
		
		sql = "select position from stage where concept='major'";
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
	%>
<body>
	<a href="./html/Concept.html"><img id="link" src="./img/btn_back.png"></a>
	<img id="reset" src="./img/btn_reset.png" onclick="Reset('major')">
	
	<div id="back">
		<img id="background" src=".\img\Stage_Background.png" >

		<div id="stage_con30" onclick="clickId(30, 'major')">
		</div>
		<div id="stage_con29" onclick="clickId(29, 'major')">
		</div>
		<div id="stage_con28" onclick="clickId(28, 'major')">
		</div>
		<div id="stage_con27" onclick="clickId(27, 'major')">
		</div>
		<div id="stage_con26" onclick="clickId(26, 'major')">
		</div>
		<div id="stage_con25" onclick="clickId(25, 'major')">
		</div>
		<div id="stage_con24" onclick="clickId(24, 'major')">
		</div>
		<div id="stage_con23" onclick="clickId(23, 'major')">
		</div>
		<div id="stage_con22" onclick="clickId(22, 'major')">
		</div>
		<div id="stage_con21" onclick="clickId(21, 'major')">
		</div>
		<div id="stage_con20" onclick="clickId(20, 'major')">
		</div>
		<div id="stage_con19" onclick="clickId(19, 'major')">
		</div>
		<div id="stage_con18" onclick="clickId(18, 'major')">
		</div>
		<div id="stage_con17" onclick="clickId(17, 'major')">
		</div>
		<div id="stage_con16" onclick="clickId(16, 'major')">
		</div>
		<div id="stage_con15" onclick="clickId(15, 'major')">
		</div>
		<div id="stage_con14" onclick="clickId(14, 'major')">
		</div>
		<div id="stage_con13" onclick="clickId(13, 'major')">
		</div>
		<div id="stage_con12" onclick="clickId(12, 'major')">
		</div>
		<div id="stage_con11" onclick="clickId(11, 'major')">
		</div>
		<div id="stage_con10" onclick="clickId(10, 'major')">
		</div>
		<div id="stage_con9" onclick="clickId(9, 'major')">
		</div>
		<div id="stage_con8" onclick="clickId(8, 'major')">
		</div>
		<div id="stage_con7" onclick="clickId(7, 'major')">
		</div>
		<div id="stage_con6" onclick="clickId(6, 'major')">
		</div>
		<div id="stage_con5" onclick="clickId(5, 'major')">
		</div>
		<div id="stage_con4" onclick="clickId(4, 'major')">
		</div>
		<div id="stage_con3" onclick="clickId(3, 'major')">
		</div>
		<div id="stage_con2" onclick="clickId(2, 'major')">
		</div>
		<div id="stage_con1" onclick="clickId(1, 'major')">
		</div>
	</div>

     <script >
    	let db_stage = <%= stage%>;
    	
    	function dbReset(update_db){
    		if(update_db == 1){
    			<%
    				pstmt = null;
    				sql = "";
    			
    				sql = "update stage set position=? where concept='major'";
    				pstmt = conn.prepareStatement(sql);
					pstmt.setString(1, "1");
					pstmt.executeUpdate();
    				System.out.println(stage);

         			if(pstmt != null){
         				pstmt.close();
         			}
         			if(conn != null){
         				conn.close();
         			}
    			%>
    		}
    	}
    </script>
</body>
</html>