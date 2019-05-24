
/**************************xmapp connect sending recieving********************************/
//var channelid=$('input[name="channelid"]').val();
//$(document).ready(function(){
//$.ajax({
//type : "POST",
//url : "webMsgDB",
//data: {testid:"0", channelid:channelid},
//cache : false,
//success : function(data) {
//if(data){
//console.log(data);

//}else {
//console.log("else error")
//}
//}
//});
//});
var count=0;
var fastMessage="";
var licount=0
var jsonObj = {};
var jsonObjArray = [];
var jsonlength=0;
$(document).ready(function(){
	console.log("1");
//	$("#connectBut").click(function(){
	console.log("2");
	var server_name = "@ng";
	var jid = $('input[name="channelid"]').val() + server_name;//"WEB10210863375352905";
	console.log(jid);
	var password = $('input[name="channelid"]').val();
//	var contactList = $("#contacts");
	console.log("3");
	//An example of bosh server. This site is working but it can change or go down.
	//If you are going to have a production site, you must install your own BOSH server
	var url ='https://ejb.neargroup.me/http-bind/';
//	var url ='http://54.169.162.209:5280/http-bind/';
//	var url ='http://103.25.131.216:5280/http-bind/';
//	var url ='https://192.168.2.226:7443/http-bind/?<body rid="1"/>';
	$.xmpp.connect({url:url, jid: jid, password: password,
		onConnect: function(){
			console.log("4");
			$('.glyphicon').addClass('glyphicon-connect');
			$.xmpp.setPresence(null);
		},
//		onPresence: function(presence){
//		console.log(presence);
//		console.log("5");
//		var curId = "abhi";//presence.from.split('@')[0];
//		console.log("curId======"+curId);
//		$("#contacts li").each(function() {
//		console.log("6");
//		if ($(this).data('username') == curId) {
//		console.log("7");
//		$(this).remove()
//		return false;
//		}
//		});
//		console.log("8");

//		var contact = $("<li data-username='" + curId + "'>");
//		contact.append("<a href='javascript:void(0)'>Get Started</a>");
////		$('#fb-login').click(function(){
//		contact.find("a").click(function(){
//		console.log("9");
//		var id = MD5.hexdigest(presence.from);
//		console.log(presence.from+"     ---      "+id);
//		var conversation = $("#"+id);
//		if(conversation.length == 0){
//		console.log("10");
//		console.log({to:presence.from});
//		$('#roster').addClass('hide');
//		$('.butsend').removeClass('hide');
//		openChat({to:presence.from});
//		}
//		});
//		contactList.append(contact);
//		},
		onDisconnect: function(){
			console.log("11");
		},
		onMessage: function(message){	//receive message
			var res = (message.body).charAt(0);
			if(res!='{'){
				fastMessage=(message.body).replace(/\n/gi, "<br>");
			}
			console.log("12");
			console.log(message);
			var jid = message.from.split("/");
			var id = MD5.hexdigest(message.from);
			var conversation = $("#chatbox-body");
			if(conversation.length == 0){
				console.log("13");
				openChat({to:message.from});
			}
			conversation = $("#"+id);

			if (message.body == null) {
				console.log("14");
				return;
			}
			console.log("100");
			console.log(message.body);
			/**************Json receive*****************/
			$("#quick_replies").empty();
			if(res=='{'){
				console.log("a");
				var userRecMess=JSON.parse(message.body);
				console.log("b");
			}

			if(fastMessage!==""){
				console.log("c");
				$("#chatbox-body").append('<li class="left clearfix" id="countli'+licount+'"><span class="chat-img pull-left"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-left" /> </span>'
						+'<div class="chat-body clearfix wrapword">'
						+'<p> '+fastMessage+' </p>'
						+'<span id="payButton'+count+'"><span>'
						+'</div>'
						+'</li>');
				scrollToBottom(licount++);
				createJSON("1", fastMessage);
				fastMessage="";
				count++;
				console.log("d");
			}

			var recId="";
			if("recipient" in userRecMess){
				recId=userRecMess.recipient.id;
			}
			if("message" in userRecMess){
				console.log("e");
				var messAttPayText=userRecMess.message.attachment.payload.text.replace(/\n/gi, "<br>");
				$("#chatbox-body").append(' <li class="left clearfix" id="countli'+licount+'"><span class="chat-img pull-left"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-left" /> </span>'
						+'<div class="chat-body clearfix wrapword">'
						+'<p> '+messAttPayText+' </p>'
						+'<span id="payButton'+count+'"><span>'
						+'</div>'
						+'</li>');
				
				createJSON("1", messAttPayText);
				if(userRecMess.message.attachment.payload.template_type=="button"){
					console.log("f");
					var messAttPayButton=userRecMess.message.attachment.payload.buttons;
					for(i in messAttPayButton){
						var buttons=userRecMess.message.attachment.payload.buttons[i];
						if(buttons.type=="web_url"){
							var title=buttons.title;
							var url=buttons.url;
							var href='<a href="'+url+'" class="btn btn-warning btnquick" target="_blank">'+title+'</a>';
							$("#payButton"+count).append(href);
						} else if(buttons.type=="postback"){
							var title=buttons.title;
							var payload=JSON.parse(buttons.payload);
							var payloadRef=payload.refmsgid;
							var payloadText=payload.text;
							var button='<button class="btn btn-warning btnquick" onclick="payloadButChat(\''+encodeURIComponent(payloadRef)+'\',\''+encodeURIComponent(payloadText)+'\')">'+title+'</button>';
							$("#payButton"+count).append(button);
						} else{

						}
					}
					console.log("g");
				}
				var messQuickRep=userRecMess.message.quick_replies
				for(i in messQuickRep){
					var title=userRecMess.message.quick_replies[i].title;
					var image_url=userRecMess.message.quick_replies[i].image_url;
					var button='<button class="btn btn-warning btnquick" onclick="quickReplyChat(\'' + encodeURIComponent(title) + '\')"><img src="'+image_url+'" onerror="onErrorfunction('+i+')" class="quickimage" id="quickimage'+i+'"/>'+title+'</button>';
					$("#quick_replies").append(button);
				}
				count++;
				console.log("h");
				scrollToBottom(licount++);
			}

			if("type" in userRecMess){
				console.log("i");
				if(userRecMess.type=="survey") {
					console.log("j");
					var question=userRecMess.question.replace(/\n/gi, "<br>");
					var msgid=userRecMess.msgid;
					$("#chatbox-body").append(' <li class="left clearfix" id="countli'+licount+'"><span class="chat-img pull-left"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-left" /> </span>'
							+'<div class="chat-body clearfix wrapword">'
							+'<p> '+question+' </p>'
							+'<span id="payButton'+count+'"><span>'
							+'</div>'
							+'</li>');
					
					createJSON("1", question);
					var options=userRecMess.options;
					for(i in options){
						console.log("!");
						var option=options[i];
						console.log(options[i]+"   "+option);
						console.log("&");
						var op=JSON.stringify(option);
						var rese = op.charAt(0);
						console.log(rese);
						console.log("#");
						if(rese=='{'){
							console.log("~");
							if(userRecMess.options[i].type=="url"){
								var title=option.title;
								var url=option.url;
								var href='<a href="'+url+'" class="btn btn-warning btnquick" target="_blank">'+title+'</a>';
								$("#payButton"+count).append(href);
							}
						} else {
							console.log("@");
							var button='<button class="btn btn-warning btnquick" onclick="payloadButChat(\'' + encodeURIComponent(msgid) + '\',\'' + encodeURIComponent(option) + '\' )">'+option+'</button>';
							$("#payButton"+count).append(button);
						}
					}
					count++;
					console.log("k");
					scrollToBottom(licount++);
				}else if(userRecMess.type=="quick_reply"){
					console.log("l");
					var msgid=userRecMess.msgid;
					var context=userRecMess.content.text.replace(/\n/gi, "<br>");
					$("#chatbox-body").append(' <li class="left clearfix" id="countli'+licount+'"><span class="chat-img pull-left"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-left" /> </span>'
							+'<div class="chat-body clearfix wrapword">'
							+'<p> '+context+' </p>'
							+'<span id="payButton'+count+'"><span>'
							+'</div>'
							+'</li>');
					
					createJSON("1", context);
					var options=userRecMess.options;
					for(i in options){
						var optionsi=userRecMess.options[i];
						if("iconurl" in  optionsi){
							var title=optionsi.title;
							var iconurl=optionsi.iconurl;
							if(msgid!="qr_212"){var qk='payloadButChat(\''+encodeURIComponent(msgid)+'\',\''+encodeURIComponent(title)+'\')';}
							else{var qk='quickReplyChat(\'' + encodeURIComponent(title) + '\')';}
							var button='<button class="btn btn-warning btnquick" onclick="'+qk+'"><img src="'+iconurl+'" onerror="onErrorfunction('+i+')" class="quickimage" id="quickimage'+i+'"/>'+title+'</button>';
							$("#quick_replies").append(button);
						}else{
							if("title" in  optionsi){
								var title=optionsi.title;
								if(msgid!="qr_212"){var qk='payloadButChat(\''+encodeURIComponent(msgid)+'\',\''+encodeURIComponent(title)+'\')';}
								else{var qk='quickReplyChat(\'' + encodeURIComponent(title) + '\')';}
								var button='<button class="btn btn-warning btnquick" onclick="'+qk+'">'+title+'</button>';
								$("#quick_replies").append(button);
							}else{
								var type=optionsi.type;
								var button='<button class="btn btn-warning btnquick" onclick="locat()">'+type+'</button>';
								$("#quick_replies").append(button);
							}
						}
					}
					count++;
					console.log("m");
					scrollToBottom(licount++);
				} else if(userRecMess.type=="catalogue") {
					console.log("n");
					var msgid=userRecMess.msgid;
					var items=userRecMess.items;
					for(i in items){
						var imgurl=userRecMess.items[i].imgurl;
						var title=userRecMess.items[i].title.replace(/\n/gi, "<br>");
						var subtitle=userRecMess.items[i].subtitle;
						if(msgid!="CreateLiveTopic"){
							if(imgurl){
								$("#chatbox-body").append(' <li class="left clearfix" id=""><span class="chat-img pull-left"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-left" /> </span>'
										+'<div class="chat-body clearfix wrapword">'
										+'<p><img src= "'+imgurl+'" class="showingChat"/></p>'
										+'<p> '+title+' </p>'
										+'<p> '+subtitle+' </p>'
										+'<span id="payButton'+count+'"><span>'
										+'</div>'
										+'</li>');
								
							} else{
								$("#chatbox-body").append(' <li class="left clearfix" id="countli'+licount+'"><span class="chat-img pull-left"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-left" /> </span>'
										+'<div class="chat-body clearfix wrapword">'
										+'<p> '+title+' </p>'
										+'<p> '+subtitle+' </p>'
										+'<span id="payButton'+count+'"><span>'
										+'</div>'
										+'</li>');
							}
							createJSON("1", title+"<br>"+subtitle);
							scrollToBottom(licount++);
						}
						var options=userRecMess.items[i].options;
						for(j in options){
							var option=userRecMess.items[i].options[j];
							if(option.type=="url"){
								var title=option.title;
								var url=option.url;
								var href='<a href="'+url+'" class="btn btn-warning btnquick" target="_blank">'+title+'</a>';
								$("#payButton"+count).append(href);
							} else if(option.type=="text"){
								var title=option.title;
								if(msgid){
									var button='<button class="btn btn-warning btnquick" onclick="payloadButChat(\''+encodeURIComponent(msgid)+'\',\''+encodeURIComponent(title)+'\')">'+title+'</button>';
								}else{
									var button='<button class="btn btn-warning btnquick" onclick="quickReplyChat(\'' + encodeURIComponent(title) + '\')">'+title+'</button>';
								}
								if(msgid=="CreateLiveTopic"){
									$("#quick_replies").append(button);
								}else{
									$("#payButton"+count).append(button);
								}
							} else{

							}
						}
						count++;
						console.log("o");
					}
				}else if(userRecMess.type=="image") {
					console.log("p");
					var orginalUrl=userRecMess.originalUrl;
					$("#chatbox-body").append(' <li class="left clearfix" id="countli'+licount+'"><span class="chat-img pull-left"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-left" /> </span>'
							+'<div class="chat-body clearfix wrapword">'
							+'<p><img src= "'+orginalUrl+'" class="showingChat"/></p>'
							+'</div>'
							+'</li>');
					scrollToBottom(licount++);
					console.log("q");
				}
			}
			count++;
			console.log("15");
			console.log("r");
//			alert(error.error);
		}
	});		
//	});
	$("#disconnectBut").click(function(){
		console.log("16");
		$.xmpp.disconnect();
	});

});
function getstarted(){
	var channelid=$('input[name="channelid"]').val();
	$('#btn-chat-getstarted').addClass('hide');
	$('#btn-chat').removeClass('hide');
	$('#imagebutton').removeClass('hide');
	$('#chattext').removeClass('hide');
	var botname="";
	var messageObj= {"referralParam":"{\"reply\":\"startchattingevent\",\"type\":\"event\"}","text":"startchattingevent","type":"event"};
	var senderObj= {"display":"","channeltype":"web","pageId":"","channelid":channelid,"subdisplay":""};
	var contextObj= {"botname":"","contexttype":"p2p","channeltype":"web","contextid":channelid,"pageId":""};
	var messageJson=JSON.stringify(messageObj);
	var senderJson=JSON.stringify(senderObj);
	var contextJson=JSON.stringify(contextObj);
	$("#chatbox-body").append(' <li class="right clearfix" id="countli'+licount+'"><span class="chat-img pull-right"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-right" /> </span>'
			+'<div class="chat-body clearfix wrapword">'
			+'<p> Get Started </p>'
			+'</div>'
			+'</li>');
	scrollToBottom(licount++);
	var urli="rht?botname="+botname+"&messageobj="+encodeURIComponent(messageJson)+"&senderobj="+encodeURIComponent(senderJson)+"&contextobj="+encodeURIComponent(contextJson);
	$.ajax({
		type : "GET",
		url : urli,
		cache : false,
		success : function(data) {
			console.log("data=="+data);
			if(data){
				console.log(data);
				console.log("data error");
			}else {
				console.log("else error")
//				alert("error");
			}
		}
	});
}

function openChat(){//options
	console.log("17");
//	var id = MD5.hexdigest(options.to);
	console.log("18");

//	$("#btn-chat").click(function(){
	var chattext=$('#chattext').val();
	var channelid=$('input[name="channelid"]').val();
	var msgid=$('input[name="butPayRefmsgid"]').val();
	var paytext=$('input[name="butPayText"]').val();

	console.log("chattext========="+chattext + channelid);
	var botname= "";
	if(($('input[name="butPayText"]').val()).length<=0 || "menu"==chattext.toLowerCase()){
		var messageObj= {"referralParam":"","text":chattext,"type":"msg"};
		var senderObj= {"display":"","channeltype":"web","pageId":"","channelid":channelid,"subdisplay":""};
		var contextObj={"botname":"","contexttype":"p2p","channeltype":"web","contextid":channelid};
	}if(($('input[name="butPayText"]').val()).length>0){
		var messageObj= {"refmsgid":msgid,"text":paytext,"type":"msg"};
		var senderObj= {"display":"","channeltype":"web","pageId":"","channelid":channelid,"subdisplay":""};
		var contextObj={"botname":"","contexttype":"p2p","channeltype":"web","contextid":channelid};
		$('input[name="butPayRefmsgid"]').val("");
		$('input[name="butPayText"]').val("");
	}
	var messageJson=JSON.stringify(messageObj);
//	var obj1=JSON.parse(messageJson);
	var senderJson=JSON.stringify(senderObj);
//	var obj2=JSON.parse(senderJson);
	var contextJson=JSON.stringify(contextObj);
//	var obj3=JSON.parse(contextJson);
	$("#chatbox-body").append(' <li class="right clearfix" id="countli'+licount+'"><span class="chat-img pull-right"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-right" /> </span>'
			+'<div class="chat-body clearfix wrapword">'
			+'<p> '+decodeURIComponent(chattext)+' </p>'
			+'</div>'
			+'</li>');
	scrollToBottom(licount++);
	createJSON("0", decodeURIComponent(chattext));
	$('#chattext').val("");

	var urli="rht?botname="+botname+"&messageobj="+encodeURIComponent(messageJson)+"&senderobj="+encodeURIComponent(senderJson)+"&contextobj="+encodeURIComponent(contextJson);
	$.ajax({
		type : "GET",
		url : urli,
		cache : false,
		success : function(data) {
			console.log("data=="+data);
			if(data){
				console.log(data);
				console.log("data error");
			}else {
				console.log("else error")
//				alert("error");
			}
		}
	});


//	$.xmpp.sendMessage({to:options.to, body: chattext});		//send message
//	console.log($.xmpp.jid.split('@')[0]);
//	console.log(chattext);
//	$("#chatbox-body").append(' <li class="right clearfix" id="countli'+licount+'"><span class="chat-img pull-right"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-right" /> </span>'
//	+'<div class="chat-body clearfix">'
//	+'<p> '+chattext+' </p>'
//	+'</div>'
//	+'</li>');
//	scrollToBottom(licount++);
//	$('#chattext').val("");
//	$('#chattext').focus();
//	});
}

function quickReplyChat(butText){
	var butTexten=decodeURIComponent(butText);
	if(encodeURIComponent(butText)=="%F0%9F%91%8D"){
		butTexten=encodeURIComponent(butText).replace("%F0%9F%91%8D","like");
	}else if(encodeURIComponent(butText)=="%E2%8F%A9"){
		butTexten=encodeURIComponent(butText).replace("%E2%8F%A9","next");
	}else if(encodeURIComponent(butText)=="%E2%9D%A4%EF%B8%8F"){
		butTexten=encodeURIComponent(butText).replace("%E2%9D%A4%EF%B8%8F","wow");
	}else if(encodeURIComponent(butText)=="%F0%9F%98%82"){
		butTexten=encodeURIComponent(butText).replace("%F0%9F%98%82","funny");
	}else if(encodeURIComponent(butText)=="%F0%9F%9A%AB"){
		butTexten=encodeURIComponent(butText).replace("%F0%9F%9A%AB","dislike");
	}
	console.log(butTexten);
	var channelid=$('input[name="channelid"]').val();
	var botname= "";
	var messageObj= {"referralParam":"","text":butTexten,"type":"msg"};
	var senderObj= {"display":"","channeltype":"web","pageId":"","channelid":channelid,"subdisplay":""};
	var contextObj={"botname":"","contexttype":"p2p","channeltype":"web","contextid":channelid};
	var messageJson=JSON.stringify(messageObj);
	var senderJson=JSON.stringify(senderObj);
	var contextJson=JSON.stringify(contextObj);
	$("#chatbox-body").append(' <li class="right clearfix" id="countli'+licount+'"><span class="chat-img pull-right"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-right" /> </span>'
			+'<div class="chat-body clearfix wrapword">'
			+'<p> '+decodeURIComponent(butText)+' </p>'
			+'</div>'
			+'</li>');
	scrollToBottom(licount++);
	createJSON("0", decodeURIComponent(butText));
	$('#chattext').val("");
	console.log(messageJson);
	console.log(encodeURIComponent(messageJson));
	var urli="rht?botname="+botname+"&messageobj="+encodeURIComponent(messageJson)+"&senderobj="+encodeURIComponent(senderJson)+"&contextobj="+encodeURIComponent(contextJson);
	$.ajax({
		type : "GET",
		url : urli,
		cache : false,
		success : function(data) {
			console.log("data=="+data);
			if(data){
				console.log(data);
				console.log("data error");
			}else {
				console.log("else error")
			}
		}
	});
}

function payloadButChat(butPayRefmsgid, butPayText ){
	$('input[name="butPayRefmsgid"]').val(butPayRefmsgid);
	$('input[name="butPayText"]').val(butPayText);
	var channelid=$('input[name="channelid"]').val();
	var botname= "";
	var messageObj= {"refmsgid":butPayRefmsgid,"text":decodeURIComponent(butPayText),"type":"msg"};
	var senderObj= {"display":"","channeltype":"web","pageId":"","channelid":channelid,"subdisplay":""};
	var contextObj={"botname":"","contexttype":"p2p","channeltype":"web","contextid":channelid};
	var messageJson=JSON.stringify(messageObj);
	var senderJson=JSON.stringify(senderObj);
	var contextJson=JSON.stringify(contextObj);
	$("#chatbox-body").append(' <li class="right clearfix" id="countli'+licount+'"><span class="chat-img pull-right"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-right" /> </span>'
			+'<div class="chat-body clearfix wrapword">'
			+'<p> '+decodeURIComponent(butPayText)+' </p>'
			+'</div>'
			+'</li>');
	scrollToBottom(licount++);
	if(butPayText.search("Star")>=0){
		$('input[name="butPayRefmsgid"]').val("");
		$('input[name="butPayText"]').val("");
	}
	createJSON("0", decodeURIComponent(butPayText));
	$('#chattext').val("");
	console.log(messageJson);
	console.log(encodeURIComponent(messageJson));
	var urli="rht?botname="+botname+"&messageobj="+encodeURIComponent(messageJson)+"&senderobj="+encodeURIComponent(senderJson)+"&contextobj="+encodeURIComponent(contextJson);
	$.ajax({
		type : "GET",
		url : urli,
		cache : false,
		success : function(data) {
			console.log("data=="+data);
			if(data){
				console.log(data);
				console.log("data error");
			}else {
				console.log("else error")
			}
		}
	});
}

function createJSON(sendrec, msgdata) {
	item = {}
	item ["row"] = jsonlength;
	item ["sendrec"] = sendrec;
	item ["msg"] = msgdata;

	jsonObjArray.push(item);
	jsonObj["data"]=jsonObjArray;
	jsonlength++;
	if(jsonlength>20){
		jsonObjArray.shift();
		jsonObj["data"]=jsonObjArray;
		var myJSON1 = JSON.stringify(jsonObj);
		console.log("myJson1==="+myJSON1);
	}
}

//$(".myCurMsg").on('keyup', function(event){
//console.log("29");
//if(event.keyCode == 13){
//console.log("30");
//$(".chatBox_curmsg .btn_sendMsg").click();
//}
//});

function handle(e){
	if(e.keyCode === 13){
		e.preventDefault(); // Ensure it is only this code that rusn
		openChat();//$("#btn-chat").click();
	}
}

function scrollToBottom(count) {
	document.getElementById("countli"+count).scrollIntoView();
//	var height = 0;
//	$('ul li').each(function(i, value){
//		height += parseInt($(this).height());
//	});
//	height += '';
//	$('#panel-body').animate({scrollTop: height},100);
}

function locat() {
	var channelid=$('input[name="channelid"]').val();
	// check for Geolocation support
	if (navigator.geolocation) {
		console.log('Geolocation is supported!');
	}
	else {
		console.log('Geolocation is not supported for this Browser/OS.');
	}
	var startPos;
	var geoOptions = {
			maximumAge: 5 * 60 * 1000,
	}
	var geoSuccess = function(position) {
		startPos = position;
		var lat=startPos.coords.latitude;
		var lng=startPos.coords.longitude;
		var botname= "";
		var messageObj= {"referralParam":"","type":"location","latitude":""+lat+"","longitude":""+lng+"","text":"https://www.google.com/maps/?q="+lat+","+lng};
		var senderObj= {"display":"","channeltype":"web","pageId":"","channelid":""+channelid+"","subdisplay":""};
		var contextObj={"botname":"","contexttype":"p2p","channeltype":"web","contextid":""+channelid+""};
		var messageJson=JSON.stringify(messageObj);
		var senderJson=JSON.stringify(senderObj);
		var contextJson=JSON.stringify(contextObj);
		$("#chatbox-body").append(' <li class="right clearfix" id="countli'+licount+'"><span class="chat-img pull-right"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-right" /> </span>'
				+'<div class="chat-body clearfix wrapword">'
				/*+'<p><img src= "https://www.google.com/maps/?q='+lat+','+lng+'" class="showingChat"/></p>'*/
				+'<p> Location </p>'
				+'</div>'
				+'</li>');
		scrollToBottom(licount++);
		$('#chattext').val("");
		var urli="rht?botname="+botname+"&messageobj="+encodeURIComponent(messageJson)+"&senderobj="+encodeURIComponent(senderJson)+"&contextobj="+encodeURIComponent(contextJson);
		$.ajax({
			type : "GET",
			url : urli,
			cache : false,
			success : function(data) {
				console.log("data=="+data);
				if(data){
					console.log(data);
					console.log("data error");
				}else {
					console.log("else error")
				}
			}
		});
	};
	var geoError = function(error) {
		switch(error.code) {
		case error.TIMEOUT:
			break;
		}
	};

	navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
}

function openFile() {
	$('#prodImage').click();
}

$("document").ready(function(){
	$("#prodImage").change(function(){
		var channelid=$('input[name="channelid"]').val();
		var form1 = new FormData();
		var fileName = "gggggggggggg";
		var file = $('#prodImage')[0].files[0];
		form1.append(fileName,file);
		console.log(file);
		console.log(form1);
		if(form1){
			console.log("aaaaaaaaaaa");
			$.ajax({
				url : "https://image.neargroup.me/ng/imageSave",
				type: "POST",
				cache: false,
				contentType: false,
				processData: false,
				data : form1,
				success: function(data){
					if(data){
						console.log("iiiiiiiiiiii"+data);
						var jdata=JSON.parse(data);
//						{"Grant Access":true,"url":"delhi-metro-2021-map1499771834411.gif"}
						var botname= "";
						var messageObj= {"referralParam":"","text":"https://image.neargroup.me/project/app/"+jdata.url,"type":"image"}
						var senderObj= {"display":"","channeltype":"web","pageId":"","channelid":""+channelid+"","subdisplay":""};
						var contextObj={"botname":"","contexttype":"p2p","channeltype":"web","contextid":""+channelid+""};
						var messageJson=JSON.stringify(messageObj);
						var senderJson=JSON.stringify(senderObj);
						var contextJson=JSON.stringify(contextObj);
						$("#chatbox-body").append(' <li class="right clearfix" id="countli'+licount+'"><span class="chat-img pull-right"> <img src="images/ng1_1.png" alt="User Avatar" class="img-circle chat-right" /> </span>'
								+'<div class="chat-body clearfix wrapword">'
								+'<p><img src= "https://image.neargroup.me/project/app/'+jdata.url+'" class="showingChat"/></p>'
								+'</div>'
								+'</li>');
						scrollToBottom(licount++);
						$('#chattext').val("");
						var urli="rht?botname="+botname+"&messageobj="+encodeURIComponent(messageJson)+"&senderobj="+encodeURIComponent(senderJson)+"&contextobj="+encodeURIComponent(contextJson);
						$.ajax({
							type : "GET",
							url : urli,
							cache : false,
							success : function(data) {
								console.log("data=="+data);
								if(data){
									console.log(data);
									console.log("data error");
								}else {
									console.log("else error")
								}
							}
						});
					}
					else{
						alert('Error in Uploading Files. ');
					}
				}
			});
		}
	});
});

function onErrorfunction(p){
	$('#quickimage'+p).attr('src','https://image.neargroup.me/project/icon/blank.png');
	$('#quickimage'+p).removeClass("quickimage");
}


//600000
//setInterval(function(){ sendToServer() }, 60000);

//function sendToServer(){
//var jsonmsg = JSON.stringify(jsonObj);
//console.log(jsonmsg);
//$.ajax({
//type : "POST",
//url : "webMsgDB",
//data: {channelid:channelid, json:jsonmsg},
//cache : false,
//success : function(data) {
//console.log("data=="+data);
//if(data){
//console.log(data);
//}else {
//console.log("else error")
//}
//}
//});
//}