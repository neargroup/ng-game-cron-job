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
	background-color: #FAFAFA;
	font-size: 13px;
	color: #000;
	font-family: 'Cabin';
}

/* .header_ng {
	position:absolute;
	top:0px;
	left:0px;
	right:0px;
	height:116px;
	overflow:hidden;
}

.body_ng {
	position:absolute;
	top:117px;
	bottom:79px;
	left:0px;
	right:0px;
	overflow:auto;
}
.body_ng-x{
	bottom:40px;
}
.footer_ng {
	position:absolute;
	bottom:0px;
	height:78px;
	left:0px;
	right:0px;
	overflow:hidden;
}
.footer_ng-x {
	height:41px;
}

.row {
    margin-right: 0px;
    margin-left: 0px;
} */

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

.user, .start, .end, .feedback, .feedback_send {
	text-align: center;
	margin: -5px 0;
}

.feedback_send {
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
}

a:hover {
	text-decoration: none;
}

.mess {
	margin: 0 -10px;
}

.user-prof:hover, .mess-end:hover {
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
	max-width: 75%;
	min-width: 5%;
	padding: 10px;
	line-height: 1.3em;
	margin: 3px 0;
}

.mess-right {
	background-color: #0084FF;
	float: right;
	border-radius: 15px 15px 5px 15px;
	max-width: 75%;
	min-width: 5%;
	padding: 10px;
	line-height: 1.3em;
	margin: 3px 0;
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
}

.hide {
	display: none;
}

img {
	padding: 6px 12px 6px 0;
}

@media screen and (max-width: 768px) {
	.modal {
		width: 75%;
	}
}
</style>
</head>
<body>
	<div class="modal_body">
		<!-- Place at bottom of page -->
	</div>
	<div class="container-fluid">
		<!-- <div class="header_ng"> -->
		<div class="row header">
			<div class="col-xs-12 col-sm-12 col-md-12 ">
				<img src="images/left-arrow.png" class="header-img"
					onclick="window.close();" />
				<div class="header-name">NearGroup</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-6 col-sm-6 col-md-6 ">
				<div class="user">
					<div class="msdhoni user-name" id="user2-name"></div>
				</div>
			</div>
			<div class="col-xs-6 col-sm-6 col-md-6 ">
				<div class="user">
					<div class="msdhoni user-name" id="user1-name"></div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 no" id="no"></div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 ">
				<div class="mess" id="mess-body"></div>
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
	$(function() {
		$body = $("body");
		var mid = getUrlParameter("mid");
		var cid = getUrlParameter("cid");
		var tid = getUrlParameter("tid");
		$body.addClass("loading");
		$.ajax({
			type : "POST",
			url : "userFeedbackWeb",
			dataType : 'json',
			data : JSON.stringify({
				"cid" : cid,
				"tid" : tid,
				"mid" : mid
			}),
			cache : false,
			contentType : 'application/json',
			mimeType : 'application/json',
			success : function(data) {
				$body.removeClass("loading");
				if (data) {
					if ("no" in data) {
						$('#no').html(data.no);
					}
					if ("user" in data) {
						for (i in data.user) {
							if ("user1" in data.user[i]) {
								$("#user1-name").html(
										data.user[i].user1.name);
								$("#user1-gender").html(
										data.user[i].user1.gender);
								$("#user1-url").attr("href",
										data.user[i].user1.url);
								$("#user1-url").removeClass('hide');
							} else if ("user2" in data.user[i]) {
								$("#user2-name").html(
										data.user[i].user2.name);
								$("#user2-gender").html(
										data.user[i].user2.gender);
								$("#user2-url").attr("href",
										data.user[i].user2.url);
								$("#user2-url").removeClass('hide');
							}
						}
					}
					if ("msg" in data) {
						for (i in data.msg) {
							if ("msg_right" in data.msg[i].data) {
								$("#mess-body").append('<span class="mess-right wrapword" id="mess-send'
										+ i
										+ '">'
										+ data.msg[i].data.msg_right
										+ '</span>');
							} else if ("msg_left" in data.msg[i].data) {
								$("#mess-body").append('<span class="mess-left wrapword" id="mess-send'
										+ i
										+ '">'
										+ data.msg[i].data.msg_left
										+ '</span>');
							}
						}
					}
				}
			}
		});
	});
</script>
</html>