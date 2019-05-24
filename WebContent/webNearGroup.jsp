<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>NearGroup</title>
<link rel="shortcut icon" type="image/png" href="images/icon.png"/>
<link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto"
	rel="stylesheet">
<link
	href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
	rel="stylesheet">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!-- <script type="text/javascript" src="JQuery/jquery.xmpp.js"></script> -->
<!-- https://raw.github.com/freakySevi/jQuery-XMPP-plugin/master -->
<script type="text/javascript" src="JQuery/fblogin.js"></script>
<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
<%   
	HttpSession session1=request.getSession(false);
	if (session1.getAttribute("channelId") != null){
		if(!session1.getAttribute("channelId").equals("")){
			response.sendRedirect("home.jsp");
		}else{
			
		}
		return;
	}else{
		
	}
%>
	<div class="modal">
		<!-- Place at bottom of page -->
	</div>
	<input type="hidden" name="channelid" />
	
   
	<button id="fb-login" type="button"
		class="btn btn-warning fbprofbutton">Login with Facebook</button>
</body>
</html>
