<%@ page language='java' contentType='text/html; charset=utf-8'
    pageEncoding='utf-8'%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<title>Earn Coin</title>
<link rel="shortcut icon" type="image/png" href="images/icon.png"/>
<!-- Latest compiled and minified CSS -->
<link rel='stylesheet'
	href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
<!-- jQuery library -->
<script
	src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
<!-- Latest compiled JavaScript -->
<script
	src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
<link rel='stylesheet'
	href='//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css'>
<script src='//code.jquery.com/jquery-1.12.4.js'></script>
<script src='//code.jquery.com/ui/1.12.1/jquery-ui.js'></script>
<link rel='stylesheet'
	href='//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css'>
<script
	src='//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js'></script>
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
	background: rgba(255, 255, 255, .8) url("images/FhHRx.gif") 50% 50%
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
	width: 100%;
	margin: 2% auto;
}

.sepration {
	display: inline-flex;
}

.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th,
	.table>thead>tr>td, .table>thead>tr>th {
	padding: 5px;
	vertical-align: middle;
	border-top: 0px solid #fff;
}

.tabledata>tbody>tr>td, .tabledata>tbody>tr>th, .tabledata>tfoot>tr>td,
	.tabledata>tfoot>tr>th, .tabledata>thead>tr>td, .tabledata>thead>tr>th
	{
	padding: 12px;
	vertical-align: middle;
	border-top: 1px solid #ddd;
}

.tdbutton {
	text-align: center;
}
.tdsm{
	dispaly: inline;
}
@media screen and (max-width: 768px) {
}
</style>
<body>
<div class='modal'>
		<!-- Place at bottom of page -->
	</div>
	<div class='container'>
		<div class='sepration'>
		<table id='tabledata' class='tabledata'>
		</table>
		</div>
	</div>
	<script>
	$(document).ready(function(){
		$body = $('body');
		$body.addClass('loading');
		$.ajax({
			type : 'POST',
			url : 'earnCoinNumber',
			dataType : "json",
			data : JSON.stringify({'earnCoinNumber':'earnCoinNumber'}),
			cache : false,
			contentType : "application/json",
			mimeType : "application/json",
			success : function(data) {
				$body.removeClass('loading');
				if (data) {
					if ('earn_coin' in data) {
						$('#tabledata').html('');
						var thdata = '<thead><tr><th colspan="13">User Earn Coin Number</th></tr>'
						+'<tr><th>Id</th><th>Channelid</th>'
						+'<th>Number</th>'
						+'<th>Time</th>'
						+'<th>Y/N(1/0)</th>'
						+'<th>Submit</th>'
						+'<th>Total FRND</th>'
						+'<th>Zero Chat</th>'
						+'<th>Avg Chat</th>'
						+'<th>Feedback(1)</th>'
						+'<th>Feedback(2)</th>'
						+'<th>Feedback(3)</th></tr></thead>';
						/* +'<th>Image Count</th>' */
						var trdata = '';
						var earn_coin = data.earn_coin;
						for (i in earn_coin) {
							if(earn_coin[i].data.sendMoney==1 || earn_coin[i].data.sendMoney==5){
								trdata += '<tr><th>'
									+ earn_coin[i].data.id
									+ '</th><td>'
									+ earn_coin[i].data.channelid
									+ '</td><td>'
									+ earn_coin[i].data.number
									+ '</td><td>'
									+ earn_coin[i].data.time
									+ '</td><td><label id="tdsm'
									+ earn_coin[i].data.id
									+ '">'
									+ earn_coin[i].data.sendMoney
									+ '</label></td><td>'
									+ '</td><td><span id="total_frnd'
									+ earn_coin[i].data.id
									+ '"><button class="form-control" id="count_but'
									+ earn_coin[i].data.id
									+ '" onclick="countFunction(\''
									+ earn_coin[i].data.channelid
									+ '\', \''
									+ earn_coin[i].data.invitecode
									+ '\')">count</button></span></td><td><span id="zero_chat'
									+ earn_coin[i].data.id
									+ '"></span></td><td><span id="avg_chat'
									+ earn_coin[i].data.id
									+ '"></span></td><td><span id="feed1'
									+ earn_coin[i].data.id
									+ '"><button class="form-control" id="feed_but'
									+ earn_coin[i].data.id
									+ '" onclick="feedbackFunction(\''
									+ earn_coin[i].data.channelid
									+ '\', \''
									+ earn_coin[i].data.id
									+ '\')">Feedback</button></span></td><td><span id="feed2'
									+ earn_coin[i].data.id
									+ '"></span></td><td><span id="feed3'
									+ earn_coin[i].data.id
									+ '"></span></td></tr>';
									/* <td><span id="img_count'
								+ earn_coin[i].data.id
								+ '"></span></td> */
							}else{
							trdata += '<tr><th>'
									+ earn_coin[i].data.id
									+ '</th><td>'
									+ earn_coin[i].data.channelid
									+ '</td><td>'
									+ earn_coin[i].data.number
									+ '</td><td>'
									+ earn_coin[i].data.time
									+ '</td><td><label id="tdsm'
									+ earn_coin[i].data.id
									+ '">'
									+ earn_coin[i].data.sendMoney
									+ '</label><input type="text" name="sendMoney_in" class="form-control" id="sendMoney_in'
									+ earn_coin[i].data.id
									+ '"/></td><td>'
									+ '<button class="form-control" onclick="sendMoneyFunction(\''
									+ earn_coin[i].data.id
									+ '\')">submit</button></td><td><span id="total_frnd'
									+ earn_coin[i].data.id
									+ '"><button class="form-control" id="count_but'
									+ earn_coin[i].data.id
									+ '" onclick="countFunction(\''
									+ earn_coin[i].data.channelid
									+ '\', \''
									+ earn_coin[i].data.invitecode
									+ '\', \''
									+ earn_coin[i].data.id
									+ '\')">count</button></span></td><td><span id="zero_chat'
									+ earn_coin[i].data.id
									+ '"></span></td><td><span id="avg_chat'
									+ earn_coin[i].data.id
									+ '"></span></td><td><span id="feed1'
									+ earn_coin[i].data.id
									+ '"><button class="form-control" id="feed_but'
									+ earn_coin[i].data.id
									+ '" onclick="feedbackFunction(\''
									+ earn_coin[i].data.channelid
									+ '\', \''
									+ earn_coin[i].data.id
									+ '\')">Feedback</button></span></td><td><span id="feed2'
									+ earn_coin[i].data.id
									+ '"></span></td><td><span id="feed3'
									+ earn_coin[i].data.id
									+ '"></span></td></tr>';
									/* <td><span id="img_count'
							+ earn_coin[i].data.id
							+ '"></span></td> */
							}
						}
						trdata+='<tr><th>Total</th><td>'
							+ data.total
							'</td></tr>';
						$('#tabledata').append(thdata);
						$('#tabledata').append(trdata);
					}
				} else{
					
				}
			}
		});
	});
	
	function sendMoneyFunction(id){
		var sendMoney_val = $("#sendMoney_in" + id).val();
		if( sendMoney_val==0 || sendMoney_val==1 || sendMoney_val==5  ){
			$.ajax({
				type : 'POST',
				url : 'earnCoinNumber',
				dataType : "json",
				data : JSON.stringify({
					'sdmy' : 'sdmy',
					'id' : id,
					'value' : sendMoney_val
				}),
				cache : false,
				contentType : "application/json",
				mimeType : "application/json",
				success : function(data) {
					if (data) {
					$("#tdsm"+id).html(sendMoney_val);
				}else{
					alert('error');
				}
			}
		});
		}else{
			$("#sendMoney_in"+id).focus();
		}
	}
	
	function feedbackFunction(channelid, id){
		$.ajax({
			type : 'POST',
			url : 'earnCoinNumber',
			dataType : "json",
			data : JSON.stringify({
				'fdbk' : 'fdbk',
				'id' : id,
				'channelid' : channelid
			}),
			cache : false,
			contentType : "application/json",
			mimeType : "application/json",
			success : function(data) {
				if (data) {
					$('#feed1'+id).html('');
					console.log(data);
					if ('fd' in data) {
						var fd = data.fd;
						$('#feed1'+id).html(fd[0].data.review);
						$('#feed2'+id).html(fd[1].data.review);
						$('#feed3'+id).html(fd[2].data.review);
					}
				}else{
					alert('error');
				}
			}
		});
	}
	function countFunction(channelid, invitecode, id){
		$.ajax({
			type : 'POST',
			url : 'earnCoinNumber',
			dataType : "json",
			data : JSON.stringify({
				'count' : 'count',
				'id' : id,
				'channelid' : channelid,
				'invitecode' : invitecode,
			}),
			cache : false,
			contentType : "application/json",
			mimeType : "application/json",
			success : function(data) {
				if (data) {
					$('#total_frnd'+id).html("");
					$('#total_frnd'+id).html(data.noFrnd);
					$('#zero_chat'+id).html(data.count.zerochat);
					$('#avg_chat'+id).html(data.count.avgchat);
					/* $('#img_count'+id).html(data.count.profileimage); */
				}else{
					alert('error');
				}
			}
		});
	}
	</script>
</body>
</html>