<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<title>NearGroup Pay</title>
<meta charset="utf-8" />
<meta name="theme-color" content="#ff3d8e" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
<link rel="shortcut icon" type="image/png" href="images/icon.png" />
<link rel="stylesheet"
	href="//fonts.googleapis.com/icon?family=Material+Icons" />
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
<link rel="stylesheet" href="css/intlTelInput.css">
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/range.min.css">
</head>
<body>

<div class="container maincontainer">
	<div class="controls">
		<div class="questions">
			<div class="question">
				<label class="head">check ur plan</label>
				<div id="checkplan">
				<input type="radio" name="checkplan" id="checkplan1" value="Oac627ab1ccbdb62ec96e702f07f6425bTk="> <span>99</span><br>
  				<input type="radio" name="checkplan" id="checkplan2" value="M352fe25daf686bdb4edca223c921aceazk5"> <span>399</span><br>
  				</div>
			</div>
		</div>
	</div>
</div>

<div class="container pay_container hidden">
	<div class="controls">
		<div class="questions">
			<div class="question">
				<label class="head">&nbsp;</label>
				<label class="head">
					<h1>Please wait! Now you are redirect on MOL Money Online.</h1>
				</label>
				<label class="head">
					<h4>MOL is the faster, safer way to send money, make an
						online payment, receive money or set up a merchant account.</h4>
				</label>
				<label class="head">
					<img src="images/mol_loader.gif" />
					<label class="head">
						<h2>NearGroup (neargroup.me)</h2>
					</label>
				 </label>
				<label class="head">&nbsp;</label>
			</div>
		</div>
	</div>
</div>
	
</body>
</html>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDX2g336vJpmvGwGERnPsjOh5gvG9sPCJg&libraries=places&language=en"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="//connect.facebook.com/en_US/messenger.Extensions.js"></script>
<script src="js/intlTelInput.js"></script>
<script src="js/profile.js"></script>
<script src="js/fblogin.min.js"></script>
<script type="text/javascript">

$("#checkplan").find("input[name=checkplan]").click(function() {
	var id=$("input[name=checkplan]:checked").attr('id');
	var val=$("input[name=checkplan]:checked").val();
	var ht=$("#checkplan").children('span').html();
	
	console.log(id + val + ht);
	if(id=="checkplan1" && val=="Oac627ab1ccbdb62ec96e702f07f6425bTk=" && ht =="99"){
		console.log(id + val + ht);
	} else if(id=="checkplan2" && val=="M352fe25daf686bdb4edca223c921aceazk5" && ht =="399"){
		console.log(id + val + ht);
	} else{
		var data = {
				message : 'You ssssssssss',
				timeout : 2000
			};
			showsnackbar(data.message);
	}
});
function paymol(id, val, ht) {
		$('.maincontainer').addClass('hidden');
		$('.pay_container').removeClass('hidden');
		/* $('body').css('background-color', '#FFF'); */
		$.ajax({
			type : "POST",
			url : "molPaymentSend",
			//crossDomain: true,
			dataType : 'json',
			data : JSON.stringify({
				"chauth" : getUrlParameter("channelid"),
				"chid" : channelid,
				"val" : val,
				"ht" : ht
			}),
			cache : false,
			contentType : 'application/json',
			mimeType : 'application/json',
			success : function(data) {
				if (data.Grant_Access === true) {
					window.location.replace(data.url);
				} else {

				}
			}
		});
	}
</script>