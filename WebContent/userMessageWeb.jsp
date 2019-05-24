<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<title>User Message</title>
<link rel="shortcut icon" type="image/png" href="images/icon.png"/>
<link href='https://fonts.googleapis.com/css?family=Cabin' rel='stylesheet'>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<style>
html, body {
	background-color: #fff;
	font-size: 13px;
	color: #000;
	font-family: 'Cabin';
}

.maincontainer {
    max-width: 425px !important;
}
/* Start by setting display:none to make this hidden.
   Then we position it in relation to the viewport window
   with position:fixed. Width, height, top and left speak
   for themselves. Background we set to 80% white with
   our animation centered, and no-repeating */
.modal_body {
	display: none;
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: rgba(255, 255, 255, .8) url('images/countdown.gif') 50% 50%
		no-repeat;
}

/* When the body has the loading class, we turn
   the scrollbar off with overflow:hidden */
body.loading {
	overflow: hidden;
}

/* Anytime the body has the loading class, our
   modal element will be visible*/
body.loading .modal_body {
	display: block;
}

.header-img {
	padding: 12px 25px 12px 0px;
}

.header-name {
	display: inline-block;
	font-size: 15px;
	color: #fff;
}

.header {
	background-color: #0084FF;
}

.rowheader{
	background-color: #ededed;
    height: 75px;
}

.user, .start, .end, .feedback, .feedback_send {
	text-align: center;
	margin: -5px 0;
}

.start, .end{
	margin: 0;
}

.feedback_send{
	margin: 8px 0;
}

.msdhoni {
	margin: 8px 0;
}

.user-name {
	font-size: large;
	margin-top: 4px;
	margin-bottom: -10px;
	white-space: nowrap;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
}

.user-gender {
	font-size: x-small;
}

.user-prof {
	border: 2px solid #555;
	padding: 5px 10px;
	border-radius: 20px;
}

a {
	color: #000;
	text-decoration: none;
	background-color: #ffffff;
}

a:hover{
	text-decoration: none;
}
.mess{
	margin: 5px -10px;
}

.user-prof:hover,
.mess-end:hover {
	background-color: #555;
	color: #fff;
}

.mess-left, .mess-right {
	clear: both;
	display: inline-block;
}

.mess-left {
	background-color: #EAEAEA;
	float: left;
	border-radius: 15px 15px 15px 5px;
	max-width: 70%;
	min-width: 5%;
	padding: 10px;
	line-height: 1.3em;
	margin: 3px 0;
	margin-left: 5px;
}

.mess-right {
	background-color: #0084FF;
	float: right;
	border-radius: 15px 15px 5px 15px;
	max-width: 70%;
	min-width: 5%;
	padding: 10px;
	line-height: 1.3em;
	margin: 3px 0;
	margin-right: 5px;
	color: #fff;
}

.wrapword {
	/*    white-space: pre-wrap;      CSS3   */
	white-space: -moz-pre-wrap; /* Firefox */
	white-space: -pre-wrap; /* Opera <7 */
	white-space: -o-pre-wrap; /* Opera 7 */
	word-wrap: break-word; /* IE */
}

.mess-end {
	text-align: center;
	margin: 8px;
	border: 2px solid #555;
	padding: 5px 10px;
	border-radius: 20px;
	display: inline-block;
	background-color: #fff;
}

.empty{
	width: 100%;
	text-align: -webkit-center;
	text-align: center;
}

.ending{
	height: 50px;
}

.emptylabel {
    padding: 20px;
    font-weight: 600;
    color: #8f8f8f;
}

img {
	padding: 6px 12px 6px 0;
}

@media screen and (max-width: 768px) {
	.modal{
		width: 75%;
	}

}

</style>
</head>
<body>
	<div class="modal_body">
		<!-- Place at bottom of page -->
	</div>
	<div class="container-fluid maincontainer hidden">
	<!-- <div class="header_ng"> -->
		<div class="row header">
			<div class="col-xs-12 col-sm-12 col-md-12 ">
				<img src="images/left-arrow.png" class="header-img"
					onclick="window.close();" />
				<div class="header-name">NearGroup</div>
			</div>
		</div>
		<div class="row rowheader">
			<div class="col-xs-6 col-sm-6 col-md-6 ">
				<div class="user">
					<div class="msdhoni user-name" id="user2-name"></div>
					<div class="msdhoni user-gender" id="user2-gender"></div>
					<div class="msdhoni ">
						<a href="javascript:void(0);" id="user2-url" target="_blank" class="user-prof hidden">View
							Profile</a>
					</div>
				</div>
			</div>
			<div class="col-xs-6 col-sm-6 col-md-6 ">
				<div class="user">
					<div class="msdhoni user-name" id="user1-name"></div>
					<div class="msdhoni user-gender" id="user1-gender"></div>
					<div class="msdhoni ">
						<a href="javascript:void(0);;" id="user1-url" target="_blank" class="user-prof hidden">View
							Profile</a>
					</div>
				</div>
			</div>
		</div>
		<!-- </div>
		<div class="body_ng"> -->
		<div class="row hidden">
			<div class="col-xs-12 col-sm-12 col-md-12 empty" id="empty">
				<div>
					<img src="images/empty.png" />
				</div>
				<div class="emptylabel">Apologies, No Message yet..</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 ">
				<div class="mess" id="mess-body">
					
				</div>
			</div>
		</div>
		<!-- </div>
		<div class="footer_ng"> -->
		<div class="row rowheader ending">
			<div class="col-xs-12 col-sm-12 col-md-12 start">
				<a href="https://m.me/neargroup" class="mess-end" id="ng-url"
					target="_blank" style="display: none;">Try NG</a> <a href="javascript:void(0);" 
					class="mess-end" id="pause" onclick="stopmess()"
					style="display: none;">Pause <span id="countingmess1"></span></a> <a href="javascript:void(0);" 
					class="mess-end" id="resume" onclick="startmess()"
					style="display: none;">Resume <span id="countingmess2"></span></a>
				<a href="javascript:void(0);" class="mess-end" data-toggle="modal" data-target="#myModal"
					id="modal" style="display: none;">Share</a>
			</div>
		</div>
		<div class="row rowheader ending hidden">
			<div class="col-xs-12 col-sm-12 col-md-12 end">
				<span class="mess-end">Chat Ended</span> <a
					href="https://m.me/neargroup" class="mess-end" target="_blank">Try
					NG</a> <a href="javascript:void(0);" class="mess-end" data-toggle="modal" data-target="#myModal">Share</a>
			</div>
		</div>
		<!-- <div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 feedback hidden">
				<a href="javascript:void(0);" class="mess-end" onclick='feedbackfunction("like")'>&#x1F44D;</a>
				<a href="javascript:void(0);" class="mess-end" onclick='feedbackfunction("dislike")'>&#x1f44e;</a>
				<a href="javascript:void(0);" class="mess-end" onclick='feedbackfunction("wow")'>&#x2764;&#xfe0f;</a>
				<a href="javascript:void(0);" class="mess-end" onclick='feedbackfunction("funny")'>&#x1f600;</a>
			</div>
		</div> -->
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 feedback_send hidden">

			</div>
		</div>
		<!-- </div> -->

		<!-- Modal -->
		<div class="modal fade" id="myModal" role="dialog">
			<div class="modal-dialog">

				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Share</h4>
					</div>
					<div class="modal-body">
						<p>
							<a href="javascript:void(0);" target="_blank" data-action="share/whatsapp/share" id="whatsapp_app"> 
								<img src="https://img.neargroup.in/icon_whatsapp_32" class="size" /> Whatsapp
							</a>
						</p>
						<p>
							<a href="javascript:void(0);" target="_blank" id="facebook_web"> 
								<img src="https://img.neargroup.in/icon_facebook_32" class="size" /> Facebook
							</a>
						</p>
						<!-- <p>
							<a href="javascript:void(0);" target="_blank" id="messenger_app"> 
							<img src="https://img.neargroup.in/icon_messenger_32" class="size" /> FB Messenger</a>
						</p> -->
						<!-- <p>
							<a
								href="fb://sharer/sharer.php?u=https://b3c8d88e.ngrok.io/NG/userMessageWeb.jsp?mid="><img
								src="https://image.neargroup.me/project/icon/facebook_32.png"
								class="size" /> FB</a>
						</p> -->
					</div>

				</div>

			</div>
		</div>
	</div>
</body>
<script>
	function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL
				.split('&'), sParameterName, i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true
						: sParameterName[1];
			}
		}
	}
	var t;
	var timer_is_on = 0;
	$(function() {
		$body = $("body");
		var url="https://web.neargroup.me/ng/userMessageWeb.jsp?mid="+getUrlParameter("mid");
		$body.addClass("loading");
		$.ajax({
			type : "POST",
			url : "userMessageWeb",
			dataType : 'json',
			data : JSON.stringify({
				"cid" : getUrlParameter("cid"),
				"mid" : getUrlParameter("mid")
			}),
			cache : false,
			contentType : 'application/json',
			mimeType : 'application/json',
			success : function(data) {
				$body.removeClass("loading");
				if (data) {
					if("connection" in data && data.connection=='error'){
						$('.container-fluid').removeClass('hidden');
						$('#empty').parent().removeClass('hidden');
						$('#empty').html('<div><img src="images/maintenance_in_progress.png" style="width: 100%;"/></div>');
					}else if ("data" in data && data.data=='no') {
						$('.container-fluid').removeClass('hidden');
						$('#empty').parent().removeClass('hidden');
					}else if ("user" in data) {
						$('.container-fluid').removeClass('hidden');
						$('#whatsapp_app').attr("href","whatsapp://send?text="+encodeURIComponent(url));
						$('#facebook_web').attr("href","https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(url));
						$('#messenger_app').attr("href","fb-messenger://share/?link="+encodeURIComponent(url));
						for (i in data.user) {
							if ("user1" in data.user[i]) {
								$("#user1-name").html(
										data.user[i].user1.name);	
								$("#user1-gender").html(
										data.user[i].user1.gender);
								$("#user1-url").attr("href",data.user[i].user1.url);
								$("#user1-url").removeClass('hidden');
							} else if ("user2" in data.user[i]) {
								$("#user2-name").html(
										data.user[i].user2.name);
								$("#user2-gender").html(
										data.user[i].user2.gender);
								$("#user2-url").attr("href",data.user[i].user2.url);
								$("#user2-url").removeClass('hidden');
							}
						}
					}
					if ("msg" in data) {
						if('abhinay'==getUrlParameter("neo")){
							for(i in data.msg){
								if ("msg_right" in data.msg[i]) {
									$("#mess-body")
									.append(
											'<span class="mess-right wrapword" id="mess-send'+i+'">'
													+ data.msg[i].msg_right
													+ '</span>');
								} else if ("msg_left" in data.msg[i]) {
									$("#mess-body")
									.append(
											'<span class="mess-left wrapword" id="mess-send'+i+'">'
													+ data.msg[i].msg_left
													+ '</span>');
								}
							}
							$('.end').parent().removeClass(
							"hidden");
							$('.start').parent()
							.addClass("hidden");
						}else{
						var i = 0;
						var timeout = 500;
						$('#pause').show();
						$('#ng-url').show();
						$('#modal').show();
						$('.feedback').removeClass("hidden");
						myLoop = function() {
							t = setTimeout(function() {
								if ("msg_right" in data.msg[i]) {
									$("#mess-body").append('<span class="mess-right wrapword" id="mess-send'+i+'">'
															+ data.msg[i].msg_right
															+ '</span>');

									var timeout1 = ((data.msg[i].msg_right).length) * 80;
									var timeout2 = 0;
									if (i < ((data.msg).length) - 1) {
										if ("msg_right" in data.msg[i + 1]) {
											timeout2 = ((data.msg[i + 1].msg_right).length) * 50;
										} else if ("msg_left" in data.msg[i + 1]) {
											timeout2 = ((data.msg[i + 1].msg_left).length) * 50;
										}
									}
									if (timeout1 > timeout2) {
										timeout = timeout1;
									} else {
										timeout = timeout2;
									}
								} else if ("msg_left" in data.msg[i]) {
									$("#mess-body").append('<span class="mess-left wrapword" id="mess-send'+i+'">'
															+ data.msg[i].msg_left
															+ '</span>');
									var timeout1 = ((data.msg[i].msg_left).length) * 80;
									var timeout2 = 0;
									if (i < ((data.msg).length) - 1) {
										if ("msg_right" in data.msg[i + 1]) {
											timeout2 = ((data.msg[i + 1].msg_right).length) * 50;
										} else if ("msg_left" in data.msg[i + 1]) {
											timeout2 = ((data.msg[i + 1].msg_left).length) * 50;
										}
									}
									if (timeout1 > timeout2) {
										timeout = timeout1;
									} else {
										timeout = timeout2;
									}
								}
								$('#countingmess1, #countingmess2').html(((data.msg).length - 1) - i);
								scrollToBottom(i);
								i++;
								if (i < ((data.msg).length)) {
									myLoop();
								} else {
									$('.end').parent().removeClass("hidden");
									$('.start').parent().addClass("hidden");
								}
							}, timeout)
						}

						myLoop();
					}
					}
				}
			}
		});
	});
	function startmess() {
		if (!timer_is_on) {
			timer_is_on = 1;
			myLoop();
			$('#resume').hide();
			$('#pause').show();
		}
	}

	function stopmess() {
		clearTimeout(t);
		timer_is_on = 0;
		$('#pause').hide();
		$('#resume').show();
	}

	function feedbackfunction(fdb) {
		$.ajax({
			type : "POST",
			url : "userMessageWeb",
			dataType : 'json',
			data : JSON.stringify({
				"testid" : 0,
				"fdb" : fdb,
				"mid" : getUrlParameter("mid")
			}),
			cache : false,
			contentType : 'application/json',
			mimeType : 'application/json',
			success : function(data) {
				if (data) {
					$('.feedback').addClass("hidden");
					$('.feedback_send').removeClass("hidden");
					$('.feedback_send').html("Thanks for your feedback");
					setTimeout("$('.feedback_send').addClass('hidden');/* $('.body_ng').addClass('body_ng-x');$('.footer_ng').addClass('footer_ng-x'); */ ", 5000);
				}
			}
		});
	}

	function scrollToBottom(count) {
		document.getElementById("mess-send" + count).scrollIntoView();
	}
</script>
</html>