<%@ page import="java.sql.*" %>

<%
	Connection conn = null;

	try{
		String url = "jdbc:mysql://localhost:3306/pengmango_db?serverTimezone=UTC&useSSL=false";
		String user = "root";
		String password = "mirim";
		
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(url, user, password);
	}catch(SQLException ex){
		out.println("데이터베이스 연결이 실패했습니다.<br>");
		out.println("SQLException : " + ex.getMessage());
	}
%>