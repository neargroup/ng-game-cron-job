<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>NearGroup</title>
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
<script type="text/javascript" src="JQuery/jquery.xmpp.js"></script>
<!-- https://raw.github.com/freakySevi/jQuery-XMPP-plugin/master -->

<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
<%   
	HttpSession session1=request.getSession(false);
	if (session1.getAttribute("channelId") == null || session1.getAttribute("channelId").equals("")){
		System.out.println("aaaaaaaaaa");
		response.sendRedirect("webNearGroup.jsp");
		return;
	}else{
		
	}
%>
	<div class="modal">
		<!-- Place at bottom of page -->
	</div>
	<input type="hidden" name="channelid" value="<%=session.getAttribute("channelId") %>"/>
	<input type="hidden" name="butPayRefmsgid" />
	<input type="hidden" name="butPayText" />
	
		
	<div class="container container-height">
		<div class="row" id="row_body">
			<div class="col-md-5">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<span class="glyphicon glyphicon-comment"></span>
						<div class="btn-group pull-right"></div>
					</div>
					<div class="panel-body" id="panel-body">
						<ul class="chat" id="chatbox-body">
							
						</ul>
					</div>
					<div class="panel-footer">
						<div class="input-group">
							<div id="roster">
								<ul id="contacts">
								</ul>
							</div>
							<% if(session1.getAttribute("start") == "1" || session1.getAttribute("start").equals("1")){ %>
							<textarea name="chattext" id="chattext"
								class="form-control input-sm butsend" maxlength="700" rows="2"
								cols="55" placeholder="Type your message here..."
								onkeypress="handle(event)"></textarea>
							<span class="input-group-btn butsend">
								<button class="btn btn-warning btn-sm" type='submit'
									id="btn-chat" onclick="openChat()">Send</button><br>
									<a class="btn btn-warning btn-sm" id="imagebutton" onclick="openFile();">Image</a>
									<input type="file" name="prodImage" id="prodImage" style="display: none;" accept="image/*">
							</span>
							<% }else { %>
							<button class="btn btn-warning btn-sm" type='submit'
									id="btn-chat-getstarted" onclick="getstarted()">Get Started</button>
							<textarea name="chattext" id="chattext"
								class="form-control input-sm butsend hide" maxlength="700" rows="2"
								cols="55" placeholder="Type your message here..."
								onkeypress="handle(event)"></textarea>
							<span class="input-group-btn butsend">
								<button class="btn btn-warning btn-sm hide" type='submit'
									id="btn-chat" onclick="openChat()">Send</button><br>
									<a class="btn btn-warning btn-sm hide" id="imagebutton" onclick="openFile();">Image</a>
									<input type="file" name="prodImage" id="prodImage" style="display: none;" accept="image/*">
							</span>
							<%} %>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-5">
				<div class="panel panel-primary" id="quick_replies"></div>
			</div>
		</div>
	</div>
	<a href="webLogOut" type="button"
		class="btn btn-warning fbprofbutton">Logout</a>
	<button class="btn btn-warning btn-sm hide" type='submit'
		id="connectBut">Send</button>
		<script type="text/javascript" src="JQuery/main.js"></script>
</body>
</html>
