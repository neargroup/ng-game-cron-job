<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sir Data</title>
<link rel="shortcut icon" type="image/png" href="images/icon.png"/>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- jQuery library -->
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!-- Latest compiled JavaScript -->
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
<script src="//code.jquery.com/jquery-1.12.4.js"></script>
<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<link rel="stylesheet"
	href="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">
<script
	src="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"></script>
<style type="text/css">
/* Start by setting display:none to make this hidden.
   Then we position it in relation to the viewport window
   with position:fixed. Width, height, top and left speak
   for themselves. Background we set to 80% white with
   our animation centered, and no-repeating */
.modal {
	display: none;
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: rgba(255, 255, 255, .8) url('images/FhHRx.gif') 50% 50%
		no-repeat;
}

/* When the body has the loading class, we turn
   the scrollbar off with overflow:hidden */
body.loading {
	overflow: hidden;
}

/* Anytime the body has the loading class, our
   modal element will be visible*/
body.loading .modal {
	display: block;
}

.container {
	width: 95%;
	margin: 2% auto;
}

.sepration {
    margin: 0% 2%;
	display: inline-flex;
}

.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th,
	.table>thead>tr>td, .table>thead>tr>th {
	padding: 5px;
	line-height: 0px;
	vertical-align: middle;
	border-top: 0px solid #fff;
}

.tabledata>tbody>tr>td, .tabledata>tbody>tr>th, .tabledata>tfoot>tr>td,
	.tabledata>tfoot>tr>th, .tabledata>thead>tr>td, .tabledata>thead>tr>th
	{
	padding: 12px;
	line-height: 6px;
	vertical-align: middle;
	border-top: 1px solid #ddd;
}

.tdbutton {
	text-align: center;
}

@media screen and (max-width: 768px) {
}
</style>
</head>
<body>
<!-- 
NG -- 
User Details
LiveTopicChat
RetryMatch
SUPER
SUPER READ
SUPER CRON
Chat Counts
 -->
<!-- 
SQUADLY -- 
User Details
Group Counts
 -->
<!-- 
PROFOUNDLY -- 
User Details
Topics
LiveTopicChat
RetryMatch
Chat Counts
PROF_Reply
 -->
<!-- 
WISP -- 
User Details
wispChatting
Show my profile
pass
Chat Counts
WISP_Reply
 -->

	<div class="modal">
		<!-- Place at bottom of page -->
	</div>
	<div class="container">
	<div class="sepration">
		<table class="table">
			<!--   <h2>Basic Table</h2>
  <p>The table class adds basic styling (light padding and only horizontal dividers) to a table:</p> -->
			<tr>
				<td colspan="4">From:</td>
			</tr>
			<tr>
				<td>Date</td>
				<td><input type="text" name="datefrom0" id="datepicker0"
					placeholder="yyyy/mm/dd" class="form-control"></td>
				<td>Time</td>
				<td><input type="text" name="timefrom0" id="timepicker0"
					placeholder="hh:mm:ss" class="form-control"></td>
			</tr>
			<tr>
				<td colspan="4">To:</td>
			</tr>
			<tr>
				<td>Date:</td>
				<td><input type="text" name="dateto0" id="datepicker1"
					placeholder="yyyy/mm/dd" class="form-control"></td>
				<td>Time:</td>
				<td><input type="text" name="timeto0" id="timepicker1"
					placeholder="hh:mm:ss" class="form-control"></td>
			</tr>
			<tr>
				<td colspan="1">Table Name:</td>
				<td colspan="3"><select class="form-control" id="select0"
					name="select0">
						<option selected disabled>Table Name</option>
						<option value="user_details">User Details</option>
						<!-- <option value="wispChatting">wispChatting</option> -->
						<!-- <option value="Show my profile">Show my profile</option> -->
						<!-- <option value="pass">pass</option> -->
						<!-- <option value="topics">Topics</option> -->
						<option value="LiveTopicChat">LiveTopicChat</option>
						<option value="RetryMatch">RetryMatch</option>
						<option value="SUPER">SUPER</option>
						<option value="SUPER_READ">SUPER READ</option>
						<option value="SUPER_CRON">SUPER CRON</option>
						<option value="chat_counts">Chat Counts</option>
						<!-- <option value="WISP_reply">Reply</option> -->
						<!-- <option value="PROF_reply">Reply</option> -->
						<!-- <option value="group_counts">Group Counts</option> -->
				</select></td>
			</tr>
			<tr>
				<td colspan="4" class="tdbutton">
					<button type="button" class="btn btn-danger"
						onclick="dataFunction0()">Submit</button>
				</td>
			</tr>
		</table>
		</div>
		<div class="sepration">
		<table class="table">
			<!--   <h2>Basic Table</h2>
  <p>The table class adds basic styling (light padding and only horizontal dividers) to a table:</p> -->
			<tr>
				<td colspan="4">From:</td>
			</tr>
			<tr>
				<td>Date</td>
				<td><input type="text" name="datefrom1" id="datepicker2"
					placeholder="yyyy/mm/dd" class="form-control"></td>
				<td>Time</td>
				<td><input type="text" name="timefrom1" id="timepicker2"
					placeholder="hh:mm:ss" class="form-control"></td>
			</tr>
			<tr>
				<td colspan="4">To:</td>
			</tr>
			<tr>
				<td>Date:</td>
				<td><input type="text" name="dateto1" id="datepicker3"
					placeholder="yyyy/mm/dd" class="form-control"></td>
				<td>Time:</td>
				<td><input type="text" name="timeto1" id="timepicker3"
					placeholder="hh:mm:ss" class="form-control"></td>
			</tr>
			<tr>
				<td colspan="1">Table Name:</td>
				<td colspan="3"><select class="form-control" id="select1"
					name="select1">
						<option selected disabled>Table Name</option>
						<option value="user_details">User Details</option>
						<!-- <option value="wispChatting">wispChatting</option> -->
						<!-- <option value="Show my profile">Show my profile</option> -->
						<!-- <option value="pass">pass</option> -->
						<!-- <option value="topics">Topics</option> -->
						<option value="LiveTopicChat">LiveTopicChat</option>
						<option value="RetryMatch">RetryMatch</option>
						<option value="SUPER">SUPER</option>
						<option value="SUPER_READ">SUPER READ</option>
						<option value="SUPER_CRON">SUPER CRON</option>
						<option value="chat_counts">Chat Counts</option>
						<!-- <option value="WISP_reply">Reply</option> -->
						<!-- <option value="PROF_reply">Reply</option> -->
						<!-- <option value="group_counts">Group Counts</option> -->
				</select></td>
			</tr>
			<tr>
				<td colspan="4" class="tdbutton">
					<button type="button" class="btn btn-danger"
						onclick="dataFunction1()">Submit</button>
				</td>
			</tr>
		</table>
		</div>
	</div>
	<div class="container">
		<div class="sepration">
		<table id="tabledata0" class="tabledata">
		</table>
		</div>
		<div class="sepration">
		<table id="tabledata1" class="tabledata">
		</table>
		</div>
	</div>
	<div class="container">
		<div class="sepration">
		<table id="tabledata2" class="tabledata">
		</table>
		</div>
	</div>
	<script>
	var json0="";
	var json1="";
		$(document).ready(function() {
			$("#datepicker0, #datepicker1, #datepicker2, #datepicker3")
					.datepicker({
						autoclose : true,
						changeYear : true,
						yearRange : '2015:2050',
						maxDate : '0d',
						dateFormat : 'yy/mm/dd',
					});
			$("#timepicker0, #timepicker1, #timepicker2, #timepicker3")
					.timepicker({
						autoclose : true,
						timeFormat : 'H:mm:ss',
						interval : 60,
					/* defaultTime: 'now' */
					});
		});
		function dataFunction0() {
			$body = $("body");
			var datefrom = $('input[name="datefrom0"]').val();
			var timefrom = $('input[name="timefrom0"]').val();
			var dateto = $('input[name="dateto0"]').val();
			var timeto = $('input[name="timeto0"]').val();
			var select = $('#select0').val();
			if ((datefrom == "") || (timefrom == "") || (dateto == "")
					|| (timeto == "") || (select == null)) {
				if (datefrom == "")
					$('input[name="datefrom0"]').focus();
				else if (timefrom == "")
					$('input[name="timefrom0"]').focus();
				else if (dateto == "")
					$('input[name="dateto0"]').focus();
				else if (timeto == "")
					$('input[name="timeto0"]').focus();
				else if (select == null)
					$('#select0').focus();
				return false;
			} else {
				var obj = {
					"datefrom" : datefrom,
					"timefrom" : timefrom,
					"dateto" : dateto,
					"timeto" : timeto,
					"select" : select
				};
				/* var json = JSON.stringify(obj); */
				console.log(JSON.stringify(obj));
				$body.addClass("loading");
				$.ajax({
					type : "POST",
					url : "sirData",
					dataType : 'json',
					data : JSON.stringify(obj),
					cache : false,
					contentType : 'application/json',
					mimeType : 'application/json',
					success : function(data) {
						$body.removeClass("loading");
						if (data) {
							if ("user_details" in data) {
								console.log("user_details");
								$("#tabledata0").html("");
								var thdata = "<thead><tr><th colspan='8'>Table 1 User Details</th></tr>"
									+"<tr><th></th><th>Total</th>"
									+"<th>Female/Total</th>"
									+"<th>Male/Total</th>"
									+"<th>FB_Login/Total</th>"
									+"<th>Lat-Lon/Total</th>"
									+"<th>Age-Range(!9)/Total</th>"
									+"<th>TotalChatCount/Total</th></tr></thead>";
								var trdata = "<tbody>";
								var user_details = data.user_details;
								for (i in user_details) {
									trdata += "<tr><th>"
											+ user_details[i].data.title
											+ "</th><td>"
											+ user_details[i].data.total
											+ "</td><td>"
											+ (user_details[i].data.female_total).toFixed(2)
											+ "</td><td>"
											+ (user_details[i].data.male_total).toFixed(2)
											+ "</td><td>"
											+ (user_details[i].data.fb_login_total).toFixed(2)
											+ "</td><td>"
											+ (user_details[i].data.latlon_total).toFixed(2)
											+ "</td><td>"
											+ (user_details[i].data.age_range_total).toFixed(2)
											+ "</td><td>"
											+ (user_details[i].data.chat_count_total).toFixed(2)
											+ "</td></tr>";
								}
								 trdata += "</tbody>";
								$("#tabledata0").append(thdata);
								$("#tabledata0").append(trdata);
							} else if ("chat_counts" in data) {
								console.log("chat_counts || RetryMatch || SUPER || SUPER_CRON || LiveTopicChat || SUPER_READ || wispChatting");
								$("#tabledata0").html("");
								var thdata = "<thead><tr><th colspan='4'>Table 1 Chat Counts</th></tr>"
									+"<tr><th></th>"
									+"<th>Total</th>"
									+"<th>Chat Count</th>"
									+"<th>Chat Count/Total</th>"
									+"</tr></thead>";
									/*  */
								var trdata = "<tbody>";
								var chat_counts = data.chat_counts;
								for (i in chat_counts) {
									trdata += "<tr><th>"
											+ chat_counts[i].data.title
											+ "</th><td>"
											+ chat_counts[i].data.total
											+ "</td><td>"
											+ chat_counts[i].data.chatCount
											+ "</td><td>"
											+ (chat_counts[i].data.chatCount_total).toFixed(2)
											+ "</td></tr>";
								}
								trdata += "</tbody>";
								/*  */
								$("#tabledata0").append(thdata);
								$("#tabledata0").append(trdata);
							} else if ("topics" in data) {
								console.log("topics");
								$("#tabledata0").html("");
								var thdata = "<thead><tr><th colspan='14'>Table 1 Topics</th></tr>"
								+"<tr><th></th>"
								+"<th>Topics</th>"
								+"<th>Female/Topics</th>"
								+"<th>Male/Topics</th>"
								+"<th>13-17/Topics</th>"
								+"<th>18+/Topics</th>"
								+"<th>Likes/Topics</th>"
								+"<th>Dislikes/Topics</th>"
								+"<th>Wow/Topics</th>"
								+"<th>Funny/Topics</th>"
								+"<th>Views/Topics</th>"
								+"<th>ChatRequest/Topics</th>"
								+"<th>Blocked/Topics</th>"
								+"<th>(L+W+F-D)/Views</th></tr></thead>";
								var trdata = "<tbody>";
								var topics = data.topics;
								for (i in topics) {
									trdata += "<tr><th>"
											+ topics[i].data.title
											+ "</th><td>"
											+ topics[i].data.topics
											+ "</td><td>"
											+ (topics[i].data.female_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.male_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.teenage_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.adult_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.likes_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.dislikes_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.wow_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.funny_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.views_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.chatcount_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.blocked_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.lwfd_view).toFixed(2)
											+ "</td></tr>";
								}
								trdata += "</tbody>";
								$("#tabledata0").append(thdata);
								$("#tabledata0").append(trdata);
							}else if ("group_counts" in data) {
								console.log("group_counts");
								$("#tabledata0").html("");
								var thdata = "<thead><tr><th colspan='14'>Table 1 Group Counts</th></tr>"
								+"<tr><th>group_name</th>"
								+"<th>group_count</th>"
								+"<th>total_msg</th>"
								+"<th>avg_msg</th></tr></thead>";
								var trdata = "<tbody>";
								var group_counts = data.group_counts;
								for (i in group_counts) {
									trdata += "<tr><th>"
											+ group_counts[i].group_name
											+ "</th><td>"
											+ group_counts[i].group_count
											+ "</td><td>"
											+ group_counts[i].total_msg
											+ "</td><td>"
											+ (group_counts[i].avg_msg).toFixed(2)
											+ "</td></tr>";
								}
								trdata += "<tr><th></th><td>"
									+ data.total.total_group_count
									+ "</td><td>"
									+ data.total.total_total_msg
									+ "</td><td>"
									+ (data.total.total_msg_group_count).toFixed(2)
									+ "</td></tr>";
								trdata += "</tbody>";
								$("#tabledata0").append(thdata);
								$("#tabledata0").append(trdata);
							}else if ("reply" in data || "Show my profile" in data || "pass" in data) {
								console.log("reply || Show my profile || pass");
								$("#tabledata0").html("");
								var thdata = "<thead><tr><th colspan='14'>Table 1 "
									+data.title
									+"</th></tr>"
									+"<tr><th></th><th>"
									+data.title
									+"</th></tr></thead>";
								var trdata = "<tbody>";
								var reply = data.reply;
								for (i in reply) {
									trdata += "<tr><th>"
											+ reply[i].title
											+"</th><td>"
											+ reply[i].count
											+ "</td></tr>";
								}
								trdata += "</tbody>";
								$("#tabledata0").append(thdata);
								$("#tabledata0").append(trdata);
							}else{
								
							}
							json0=JSON.stringify(data);
							dataFunction2();
						} else {
							alert("error");
						}
					}
				});
			}
		}

		function dataFunction1() {
			$body = $("body");
			var datefrom = $('input[name="datefrom1"]').val();
			var timefrom = $('input[name="timefrom1"]').val();
			var dateto = $('input[name="dateto1"]').val();
			var timeto = $('input[name="timeto1"]').val();
			var select = $('#select1').val();
			if ((datefrom == "") || (timefrom == "") || (dateto == "")
					|| (timeto == "") || (select == null)) {
				if (datefrom == "")
					$('input[name="datefrom1"]').focus();
				else if (timefrom == "")
					$('input[name="timefrom1"]').focus();
				else if (dateto == "")
					$('input[name="dateto1"]').focus();
				else if (timeto == "")
					$('input[name="timeto1"]').focus();
				else if (select == null)
					$('#select1').focus();
				return false;
			} else {
				var obj = {
					"datefrom" : datefrom,
					"timefrom" : timefrom,
					"dateto" : dateto,
					"timeto" : timeto,
					"select" : select
				};
				/* var json = JSON.stringify(obj); */
				console.log(datefrom + "  " + timefrom + "  " + dateto + "  "
						+ timeto + "  " + select);
				$body.addClass("loading");
				$.ajax({
					type : "POST",
					url : "sirData",
					dataType : 'json',
					data : JSON.stringify(obj),
					cache : false,
					contentType : 'application/json',
					mimeType : 'application/json',
					success : function(data) {
						$body.removeClass("loading");
						if (data) {
							if ("user_details" in data) {
								console.log("user_details");
								$("#tabledata1").html("");
								var thdata = "<thead><tr><th colspan='8'>Table 2 User Details</th></tr>"
								+"<tr><th></th><th>Total</th>"
								+"<th>Female/Total</th>"
								+"<th>Male/Total</th>"
								+"<th>FB_Login/Total</th>"
								+"<th>Lat-Lon/Total</th>"
								+"<th>Age-Range(!9)/Total</th>"
								+"<th>TotalChatCount/Total</th></tr></thead>";
								var trdata = "<tbody>";
								var user_details = data.user_details;
								for (i in user_details) {
									trdata += "<tr><th>"
											+ user_details[i].data.title
											+ "</th><td>"
											+ user_details[i].data.total
											+ "</td><td>"
											+ (user_details[i].data.female_total).toFixed(2)
											+ "</td><td>"
											+ (user_details[i].data.male_total).toFixed(2)
											+ "</td><td>"
											+ (user_details[i].data.fb_login_total).toFixed(2)
											+ "</td><td>"
											+ (user_details[i].data.latlon_total).toFixed(2)
											+ "</td><td>"
											+ (user_details[i].data.age_range_total).toFixed(2)
											+ "</td><td>"
											+ (user_details[i].data.chat_count_total).toFixed(2)
											+ "</td></tr>";
								}
								trdata += "</tbody>";
								$("#tabledata1").append(thdata);
								$("#tabledata1").append(trdata);
							} else if ("chat_counts" in data) {
								console.log("chat_counts || RetryMatch || SUPER || SUPER_CRON || LiveTopicChat || SUPER_READ || wispChatting");
								$("#tabledata1").html("");
								var thdata = "<thead><tr><th colspan='4'>Table 2 Chat Counts</th></tr>"
								+"<tr><th></th>"
								+"<th>Total</th>"
								+"<th>Chat Count</th>"
								+"<th>Chat Count/Total</th>"
								+"</tr></thead>";
								/*  */
								var trdata = "<tbody>";
								var chat_counts = data.chat_counts;
								for (i in chat_counts) {
									trdata += "<tr><th>"
										+ chat_counts[i].data.title
										+ "</th><td>"
										+ chat_counts[i].data.total
										+ "</td><td>"
										+ chat_counts[i].data.chatCount
										+ "</td><td>"
										+ (chat_counts[i].data.chatCount_total).toFixed(2)
										+ "</td></tr>";
								}
								trdata += "</tbody>";
								/*  */
								$("#tabledata1").append(thdata);
								$("#tabledata1").append(trdata);
							} else if ("topics" in data) {
								console.log("topics");
								$("#tabledata1").html("");
								var thdata = "<thead><tr><th colspan='14'>Table 2 Topics</th></tr>"
								+"<tr><th></th>"
								+"<th>Topics</th>"
								+"<th>Female/Topics</th>"
								+"<th>Male/Topics</th>"
								+"<th>13-17/Topics</th>"
								+"<th>18+/Topics</th>"
								+"<th>Likes/Topics</th>"
								+"<th>Dislikes/Topics</th>"
								+"<th>Wow/Topics</th>"
								+"<th>Funny/Topics</th>"
								+"<th>Views/Topics</th>"
								+"<th>ChatRequest/Topics</th>"
								+"<th>Blocked/Topics</th>"
								+"<th>(L+W+F-D)/Views</th></tr></thead>";
								var trdata = "<tbody>";
								var topics = data.topics;
								for (i in topics) {
									trdata += "<tr><th>"
											+ topics[i].data.title
											+ "</th><td>"
											+ topics[i].data.topics
											+ "</td><td>"
											+ (topics[i].data.female_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.male_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.teenage_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.adult_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.likes_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.dislikes_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.wow_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.funny_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.views_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.chatcount_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.blocked_topics).toFixed(2)
											+ "</td><td>"
											+ (topics[i].data.lwfd_view).toFixed(2)
											+ "</td></tr>";
								}
								trdata += "</tbody>";
								$("#tabledata1").append(thdata);
								$("#tabledata1").append(trdata);
							}else if ("group_counts" in data) {
									console.log("group_counts");
									$("#tabledata1").html("");
									var thdata = "<thead><tr><th colspan='14'>Table 2 Group Counts</th></tr>"
									+"<tr><th>group_name</th>"
									+"<th>group_count</th>"
									+"<th>total_msg</th>"
									+"<th>avg_msg</th></tr></thead>";
									var trdata = "<tbody>";
									var group_counts = data.group_counts;
									for (i in group_counts) {
										trdata += "<tr><th>"
												+ group_counts[i].group_name
												+ "</th><td>"
												+ group_counts[i].group_count
												+ "</td><td>"
												+ group_counts[i].total_msg
												+ "</td><td>"
												+ (group_counts[i].avg_msg).toFixed(2)
												+ "</td></tr>";
									}
									trdata += "<tr><th></th><td>"
										+ data.total.total_group_count
										+ "</td><td>"
										+ data.total.total_total_msg
										+ "</td><td>"
										+ (data.total.total_msg_group_count).toFixed(2)
										+ "</td></tr>";
									trdata += "</tbody>";
									$("#tabledata1").append(thdata);
									$("#tabledata1").append(trdata);
							} else if ("reply" in data || "Show my profile" in data || "pass" in data) {
								console.log("reply || Show my profile || pass");
								$("#tabledata1").html("");
								var thdata = "<thead><tr><th colspan='14'>Table 2 "
									+data.title
									+"</th></tr>"
									+"<tr><th></th><th>"
									+data.title
									+"</th></tr></thead>";
								var trdata = "<tbody>";
								var reply = data.reply;
								for (i in reply) {
									trdata += "<tr><th>"
											+ reply[i].title
											+"</th><td>"
											+ reply[i].count
											+ "</td></tr>";
								}
								trdata += "</tbody>";
								$("#tabledata1").append(thdata);
								$("#tabledata1").append(trdata);
							}else{
									
								}
							json1=JSON.stringify(data);
							dataFunction2();
						} else {
							alert("error");
						}
					}
				});
			}
		}
		
		function dataFunction2() {
			console.log(json0+"json1");
			console.log(json1+"json1");
			if(json0!="" && json1!=""){
				var myObj0=JSON.parse(json0);
				var myObj1=JSON.parse(json1);
				if ("user_details" in myObj0 && "user_details" in myObj1) {
					console.log("user_details");
					$("#tabledata2").html("");
					var thdata = "<thead><tr><th colspan='8'>Table 3 User Details</th></tr>"
					+"<tr><th></th><th>Total</th>"
					+"<th>Female/Total</th>"
					+"<th>Male/Total</th>"
					+"<th>FB_Login/Total</th>"
					+"<th>Lat-Lon/Total</th>"
					+"<th>Age-Range(!9)/Total</th>"
					+"<th>TotalChatCount/Total</th></tr></thead>";
					var trdata = "<tbody>";
					var user_details0 = myObj0.user_details;
					var user_details1 = myObj1.user_details;
					for (i in user_details0) {
						trdata += "<tr><th>"
								+ user_details0[i].data.title
								+ "</th><td>"
								+ (user_details0[i].data.total/user_details1[i].data.total).toFixed(2)
								+ "</td><td>"
								+ (user_details0[i].data.female_total/user_details1[i].data.female_total).toFixed(2)
								+ "</td><td>"
								+ (user_details0[i].data.male_total/user_details1[i].data.male_total).toFixed(2)
								+ "</td><td>"
								+ (user_details0[i].data.fb_login_total/user_details1[i].data.fb_login_total).toFixed(2)
								+ "</td><td>"
								+ (user_details0[i].data.latlon_total/user_details1[i].data.latlon_total).toFixed(2)
								+ "</td><td>"
								+ (user_details0[i].data.age_range_total/user_details1[i].data.age_range_total).toFixed(2)
								+ "</td><td>"
								+ (user_details0[i].data.chat_count_total/user_details1[i].data.chat_count_total).toFixed(2)
								+ "</td></tr>";
					}
					trdata += "</tbody>";
					$("#tabledata2").append(thdata);
					$("#tabledata2").append(trdata);
				} else if ("chat_counts" in myObj0 && "chat_counts" in myObj1) {
					console.log("chat_counts || RetryMatch || SUPER || SUPER_CRON || LiveTopicChat || SUPER_READ || wispChatting");
					$("#tabledata2").html("");
					var thdata = "<thead><tr><th colspan='4'>Table 3 Chat Counts</th></tr>"
					+"<tr><th></th>"
					+"<th>Total</th>"
					+"<th>Chat Count</th>"
					+"<th>Chat Count/Total</th>"
					+"</tr></thead>";
					/*  */
					var trdata = "<tbody>";
					var chat_counts0 = myObj0.chat_counts;
					var chat_counts1 = myObj1.chat_counts;
					for (i in chat_counts0) {
						trdata += "<tr><th>"
							+ chat_counts0[i].data.title
							+ "</th><td>"
							+ (chat_counts0[i].data.total/chat_counts1[i].data.total).toFixed(2)
							+ "</td><td>"
							+ (chat_counts0[i].data.chatCount/chat_counts1[i].data.chatCount).toFixed(2)
							+ "</td><td>"
							+ (chat_counts0[i].data.chatCount_total/chat_counts1[i].data.chatCount_total).toFixed(2)
							+ "</td></tr>";
					}
					trdata += "</tbody>";
					/*  */
					$("#tabledata2").append(thdata);
					$("#tabledata2").append(trdata);
				} else if ("topics" in myObj0 && "topics" in myObj1) {
					console.log("topics");
					$("#tabledata2").html("");
					var thdata = "<thead><tr><th colspan='14'>Table 3 Topics</th></tr>"
					+"<tr><th></th>"
					+"<th>Topics</th>"
					+"<th>Female/Topics</th>"
					+"<th>Male/Topics</th>"
					+"<th>13-17/Topics</th>"
					+"<th>18+/Topics</th>"
					+"<th>Likes/Topics</th>"
					+"<th>Dislikes/Topics</th>"
					+"<th>Wow/Topics</th>"
					+"<th>Funny/Topics</th>"
					+"<th>Views/Topics</th>"
					+"<th>ChatRequest/Topics</th>"
					+"<th>Blocked/Topics</th>"
					+"<th>(L+W+F-D)/Views</th></tr></thead>";
					var trdata = "<tbody>";
					var topics0 = myObj0.topics;
					var topics1 = myObj1.topics;
					for (i in topics0) {
						trdata += "<tr><th>"
								+ topics0[i].data.title
								+ "</th><td>"
								+ (topics0[i].data.topics/topics1[i].data.topics).toFixed(2)
								+ "</td><td>"
								+ (topics0[i].data.female_topics/topics1[i].data.female_topics).toFixed(2)
								+ "</td><td>"
								+ (topics0[i].data.male_topics/topics1[i].data.male_topics).toFixed(2)
								+ "</td><td>"
								+ (topics0[i].data.teenage_topics/topics1[i].data.teenage_topics).toFixed(2)
								+ "</td><td>"
								+ (topics0[i].data.adult_topics/topics1[i].data.adult_topics).toFixed(2)
								+ "</td><td>"
								+ (topics0[i].data.likes_topics/topics1[i].data.likes_topics).toFixed(2)
								+ "</td><td>"
								+ (topics0[i].data.dislikes_topics/topics1[i].data.dislikes_topics).toFixed(2)
								+ "</td><td>"
								+ (topics0[i].data.wow_topics/topics1[i].data.wow_topics).toFixed(2)
								+ "</td><td>"
								+ (topics0[i].data.funny_topics/topics1[i].data.funny_topics).toFixed(2)
								+ "</td><td>"
								+ (topics0[i].data.views_topics/topics1[i].data.views_topics).toFixed(2)
								+ "</td><td>"
								+ (topics0[i].data.chatcount_topics/topics1[i].data.chatcount_topics).toFixed(2)
								+ "</td><td>"
								+ (topics0[i].data.blocked_topics/topics1[i].data.blocked_topics).toFixed(2)
								+ "</td><td>"
								+ (topics0[i].data.lwfd_view/topics1[i].data.lwfd_view).toFixed(2)
								+ "</td></tr>";
					}
					trdata += "</tbody>";
					$("#tabledata2").append(thdata);
					$("#tabledata2").append(trdata);
				}else if ("group_counts" in myObj0 && "group_counts" in myObj1) {
					console.log("group_counts");
					$("#tabledata2").html("");
					var thdata = "<thead><tr><th colspan='14'>Table 3 Group Counts</th></tr>"
					+"<tr><th>group_name</th>"
					+"<th>group_count</th>"
					+"<th>total_msg</th>"
					+"<th>avg_msg</th></tr></thead>";
					var trdata = "<tbody>";
					var group_counts0 = myObj0.group_counts;
					var group_counts1 = myObj1.group_counts;
					for (i in group_counts0) {
						var group_count = group_counts0[i].group_count+group_counts1[i].group_count;
						var total_msg = group_counts0[i].total_msg+group_counts1[i].total_msg;
						trdata += "<tr><th>"
								+ group_counts0[i].group_name
								+ "</th><td>"
								+ (group_counts0[i].group_count/group_counts1[i].group_count).toFixed(2)
								+ "</td><td>"
								+ (group_counts0[i].total_msg/group_counts0[i].total_msg).toFixed(2)
								+ "</td><td>"
								+ (total_msg/group_count).toFixed(2)
								+ "</td></tr>";
					}
					var total_group_count = parseInt(myObj0.total.total_group_count)+parseInt(myObj1.total.total_group_count);
					var total_total_msg = parseInt(myObj0.total.total_total_msg)+parseInt(myObj1.total.total_total_msg); 
					trdata += "<tr><th></th><td>"
						+ total_group_count
						+ "</td><td>"
						+ total_total_msg
						+ "</td><td>"
						+ (parseFloat(total_total_msg)/parseFloat(total_group_count)).toFixed(2)
						+ "</td></tr>";
					trdata += "</tbody>";
					$("#tabledata2").append(thdata);
					$("#tabledata2").append(trdata);
				}else if ("reply" in myObj0 && "reply" in myObj1
						|| "Show my profile" in myObj0 && "Show my profile" in myObj1 
						|| "pass" in myObj0 && "pass" in myObj1) {
					console.log("PROF_reply || WISP_reply || Show my profile || pass");
					
					$("#tabledata2").html("");
					var thdata = "<thead><tr><th colspan='14'>Table 3 "
						+myObj0.title
						+"</th></tr>"
						+"<tr><th></th><th>"
						+myObj0.title
						+"</th></tr></thead>";
					var trdata = "<tbody>";
					var reply0 = myObj0.reply;
					var reply1 = myObj1.reply;
					for (i in reply0) {
						trdata += "<tr><th>"
								+ reply0[i].title
								+"</th><td>"
								+ (parseFloat(reply0[i].count)/parseFloat(reply1[i].count)).toFixed(2)
								+ "</td></tr>";
					}
					trdata += "</tbody>";
					$("#tabledata2").append(thdata);
					$("#tabledata2").append(trdata);
				}else{
					
				}
			}
		}
	</script>
</body>
</html>