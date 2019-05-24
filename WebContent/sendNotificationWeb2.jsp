<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Send Notification</title>
<link rel="shortcut icon" type="image/png" href="images/icon.png"/>
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
</head>
<style>
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

.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th,
	.table>thead>tr>td, .table>thead>tr>th {
	padding: 5px;
	line-height: 0px;
	vertical-align: middle;
	border-top: 0px solid #fff;
}

.tdbutton {
	text-align: center;
}

img {
	max-width: 40%;
}

.senbut {
	width: 100px;
}
</style>
<body>
	<div class="modal">
		<!-- Place at bottom of page -->
	</div>
	<div class="container">
		<table class="table">
			<!--   <h2>Basic Table</h2>
  <p>The table class adds basic styling (light padding and only horizontal dividers) to a table:</p> -->
			<tr>
				<td>Country:</td>
				<td><select class="form-control" id="country" name="country">
						<option selected disabled>Country</option>
						<option value="Philippines">Philippines</option>
						<option value="USA">USA</option>
						<option value="UK">UK</option>
						<option value="India">India</option>
						<option value="Vietnam">Vietnam</option>
						<option value="Romania">Romania</option>
						<option value="Egypt">Egypt</option>
						<option value="UAE">UAE</option>
						<option value="Pakistan">Pakistan</option>
						<option value="Bangladesh">Bangladesh</option>
						<option value="Nepal">Nepal</option>
						<option value="Saudi_Arabia">Saudi Arabia</option>
						<option value="Nigeria">Nigeria</option>
						<option value="Malaysia">Malaysia</option>
						<option value="">Other</option>
				</select></td>
				<td>TimeZone:</td>
				<td>From</td>
				<td><input type="text" name="timezonefrom" id="timezonefrom"
					placeholder="0 GMT" class="form-control"></td>
				<td>To</td>
				<td><input type="text" name="timezoneto" id="timezoneto"
					placeholder="0 GMT" class="form-control"></td>
			</tr>
			<tr>
				<td>Gender:</td>
				<td><select class="form-control" id="gender" name="gender">
						<option selected disabled>Gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="">All</option>
				</select></td>
				<td>Date:</td>
				<td>From</td>
				<td><input type="text" name="datefrom" id="datepickerfrom"
					placeholder="yyyy/mm/dd" class="form-control"></td>
				<td>To</td>
				<td><input type="text" name="dateto" id="datepickerto"
					placeholder="yyyy/mm/dd" class="form-control"></td>
			</tr>
			<tr>
				<td>Exclude:</td>
				<td><select class="form-control" id="exclude" name="exclude">
						<option selected disabled>Exclude</option>
						<option value="">0 Hrs</option>
						<option value="-1">24 Hrs</option>
						<option value="-7">7 days</option>
						<option value="-30">30 days</option>
						<option value="-60">60 days</option>
				</select></td>
				<td>Chat Count:</td>
				<td>From</td>
				<td><input type="text" name="chatcountfrom" id="chatcountfrom"
					placeholder="123" class="form-control"></td>
				<td>To</td>
				<td><input type="text" name="chatcountto" id="chatcountto"
					placeholder="123" class="form-control"></td>
			</tr>
			<tr>
				<td>Channel Type:</td>
				<td><select class="form-control" id="channeltype" name="channeltype">
						<option selected disabled>Channel Type</option>
						<option value="">All</option>
						<option value="fb">FB</option>
						<option value="kik">Kik</option>
						<option value="viber">Viber</option>
						<option value="app">App</option>
						<!-- <option value="telegram">Telegram</option>
						<option value="web">Web</option>
						<option value="line">Line</option> -->
				</select></td>
				<td colspan="5"></td>
			</tr>
			<tr>
				<td>Age-Range:</td>
				<td><select class="form-control" id="agerange" name="agerange">
						<option selected disabled>Age-Range</option>
						<option value="">All</option>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="9">9</option>
				</select></td>
				<td>Total:</td>
				<td id="total"></td>
				<td colspan="3"></td>
			</tr>
			<tr>
				<td colspan="7" class="tdbutton">
					<button type="button" class="btn btn-danger"
						onclick="dataFunction()">Submit</button>
				</td>
			</tr>
		</table>
	</div>

	<div class="container">
		<table class="table">
			<tr>
				<td style="width: 10%;">Notification</td>
				<td style="width: 50%;"><textarea name="notitext" id="notitext"
						class="form-control input-sm" rows="3" cols="15"
						placeholder="Type your message here..."></textarea></td>
			</tr>
			<tr>
				<td>Image</td>
				<td><input type="text" class="form-control" name="imgurl"
					id="imgurl" /></td>
			</tr>
			<tr>
				<td class="tdbutton"><button class="form-control senbut"
						id="me">me</button>
					<span id="passme"></span></td>
				<td class="tdbutton"><button class="form-control senbut"
						id="notiFunction">Send</button>
					<span id="passsend"></span></td>

			</tr>
		</table>
	</div>

	<script>
		$(function () {
			$("#datepickerfrom, #datepickerto").datepicker({
				autoclose : true,
				changeYear : true,
				yearRange : '2015:2050',
				maxDate : '0d',
				dateFormat : 'yy/mm/dd',
			});
		});
		/* $("document").ready(function(){
			function readURL(input) {
			    if (input.files && input.files[0]) {
			        var reader = new FileReader();
			        reader.onload = function (e) {
			            $('#notiimgsrc').attr('src', e.target.result);
			        }
			        reader.readAsDataURL(input.files[0]);
			    }
			}
			
			$("#notiImage").change(function(){
				readURL(this);
			});
		}); */
		var jsonch = "";
		function dataFunction() {
			$body = $("body");
			var country = $('#country').val();
			var timezonefrom = $('input[name="timezonefrom"]').val();
			var timezoneto = $('input[name="timezoneto"]').val();
			var gender = $('#gender').val();
			var datefrom = $('input[name="datefrom"]').val();
			var dateto = $('input[name="dateto"]').val();
			var exclude = $('#exclude').val();
			var chatcountfrom = $('input[name="chatcountfrom"]').val();
			var chatcountto = $('input[name="chatcountto"]').val();
			var channeltype = $('#channeltype').val();
			var agerange = $('#agerange').val();
			if (timezonefrom != "" ^ timezoneto != "") {
				alert("fill time-zone from and to");
			} else if (datefrom != "" ^ dateto != "") {
				alert("fill date from and to");
			} else if (chatcountfrom != "" ^ chatcountto != "") {
				alert("fill chat count from and to");
			} else {
				var obj = {
					"country" : country,
					"timezonefrom" : timezonefrom,
					"timezoneto" : timezoneto,
					"gender" : gender,
					"datefrom" : datefrom,
					"dateto" : dateto,
					"exclude" : exclude,
					"chatcountfrom" : chatcountfrom,
					"chatcountto" : chatcountto,
					"channeltype" : channeltype,
					"agerange" : agerange
				};
				$body.addClass("loading");
				$.ajax({
					type : 'POST',
					url : 'sendNotificationWeb2',
					dataType : 'json',
					data : JSON.stringify(obj),
					cache : false,
					contentType : 'application/json',
					mimeType : 'application/json',
					success : function(data) {
						$body.removeClass("loading");
						if (data) {
							jsonch = obj;
							$('#total').html(data.total);
							console.log(jsonch);
						} else {

						}
					}
				});
			}
		}

		$('#notiFunction').click(function() {
			$body = $("body");
			var notitext = $('#notitext').val();
			var imgurl = $('#imgurl').val();
			$body.addClass("loading");
			$.ajax({
				type : 'POST',
				url : 'sendNotificationWeb2',
				dataType : 'json',
				data : JSON.stringify({
					testid : "1",
					notitext : notitext,
					imgurl : imgurl,
					jsonch : JSON.stringify(jsonch)
				}),
				cache : false,
				contentType : 'application/json',
				mimeType : 'application/json',
				success : function(data) {
					$body.removeClass("loading");
					if (data) {
						console.log(data);
						/* alert("done"); */
					} else {
					}
				}
			});
		});

		$('#me').click(function() {
			$body = $("body");
			var notitext = $('#notitext').val();
			var imgurl = $('#imgurl').val();
			$body.addClass("loading");
			$.ajax({
				type : 'POST',
				url : 'sendNotificationWeb2',
				dataType : 'json',
				data : JSON.stringify({
					testid : "1",
					notitext : notitext,
					imgurl : imgurl
				}),
				cache : false,
				contentType : 'application/json',
				mimeType : 'application/json',
				success : function(data) {
					$body.removeClass("loading");
					if (data) {
						console.log(data);
						/* alert("done"); */
					} else {
					}
				}
			});
		});
	</script>
</body>
</html>