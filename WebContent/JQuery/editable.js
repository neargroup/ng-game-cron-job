/****************field Edit allTopicsView************** */
function editFunction(count, id, tname) {
	var topic = $('#topic' + count).html();
	var hashtag = $('#hashtag' + count).html();
//	var txt1 = "<input type='text' id='input_topic" + count + "' name='topic'/>";
//	var txt2 = "<input type='text' id='input_hashtag" + count + "' name='hashtag'/>";
//	var txt3 = "<button type='submit" + count + "' onclick='saveFunction(" + id + "," + count + ",\"" + tname + "\")'>Save</button>";
	$('#topic' + count).hide();
	$('#hashtag' + count).hide();
	$('#edit' + count).hide();
	$('#tagtopic' + count).show();
	$('#taghash' + count).show();
	$('#save' + count).show();
//	$('#tagtopic' + count).append(txt1);
//	$('#taghash' + count).append(txt2);
//	$('#save' + count).append(txt3);
	$('#input_topic' + count).attr("value", topic);
	$('#input_hashtag' + count).attr("value", hashtag);
}
/** ***********Update Data send to Database allTopicsView*********** */
function saveFunction(id, count, tname) {
	var topic = $('#input_topic' + count).val();
	var hashtag = $('#input_hashtag' + count).val();
	var url = "allTopicsView?AFtgD=OihGFUpd&id="+id+"&topic="+encodeURIComponent(topic)+"&hashtag="+encodeURIComponent(hashtag)+"&tname="+tname;
	$.ajax({
		type : "GET",
		url : url,
		cache : false,
		success : function(data) {
			var res = data.charAt(0);
			if(res=='a'){
				alert("Bingo!!! The Topic has been updated.");
				$('#tagtopic' + count).hide();
				$('#topic' + count).html(topic);
				$('#topic' + count).show();
				$('#taghash' + count).hide();
				$('#hashtag' + count).html(hashtag);
				$('#hashtag' + count).show();
				$('#save' + count).hide();
				$('#edit' + count).show();
				//location.reload();
			} else {
				alert("error");}
		}
	});
}
/********************column deactivate allTopicsView**********************/
function deactivateFunction(AFtgD, id, tname, count){
	//location.href="allTopicsView?id="+id+"&AFtgD="+AFtgD+"&tname="+tname;
	var url="allTopicsView?id="+id+"&AFtgD="+AFtgD+"&tname="+tname;
	$.ajax({
		type : "GET",
		url : url,
		cache : false,
		success : function(data) {
			var res = data.charAt(0);
			if(res=='b'){
				alert("Congrats!!! The Topic has been removed.");
				$('#trhide' + count).hide();
			} else {
				alert("error");}
		}
	});
}
/******************url parameter get******************************/
function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	sURLVariables = sPageURL.split('&'),
	sParameterName,
	i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
}
/*************************loading image show in all page************************************/
$body = $("body");
/***********************All page disabled right click & ctrl key*******************************************/
$(document).ready(function(){
	document.oncontextmenu = document.body.oncontextmenu = function() {
		return false;
	}
});
/**********************Checkbox max(6) tick userPreference*****************************/
/*********page loading time***************/
var countPassion=0;
var countArray=[];
$('#checkbox-loading').ready(function(){
	var passionStart=parseInt($('input[name="passionStart"]').val());
	var passionEnd=parseInt($('input[name="passionEnd"]').val());
	var passionTotal=passionEnd-passionStart;
	countPassion=$('input:checkbox[name="passion"]:checked').length;
	$("input:checkbox").each(function(){
		var $this = $(this);
		if($this.is(":checked")){
			countArray.push(parseInt($this.attr("id").replace("gamora", "")));
		}
	});
	if(countPassion==6){
		var l,k;
		for(l=0;l<passionTotal;l++){
			var position=passionStart+l;
			document.getElementById("gamora"+position).disabled = true;
		}
		for(k=0;k<countArray.length;k++){
			document.getElementById("gamora"+countArray[k]).disabled = false;
		}
	}else if(countPassion>0 && countPassion<6){
		var l;
		for(l=0;l<passionTotal;l++){
			var position=passionStart+l;
			document.getElementById("gamora"+position).disabled = false;
		}
	}
});
/************onclick***************/
function gamora(passion,count,passionStart,passionEnd) {
	var passionTotal=passionEnd-passionStart;
	var index = countArray.indexOf(count);
	if(passion.checked){
		countArray.push(count);
		countPassion++;
	}else{
		if(countPassion>0){
			countArray.splice(index,1);
			countPassion--;
		}else{
			countPassion=0
		}
	}
	if(countPassion==6){
		var l,k;
		for(l=0;l<passionTotal;l++){
			var position=passionStart+l;
			document.getElementById("gamora"+position).disabled = true;
		}
		for(k=0;k<countArray.length;k++){
			document.getElementById("gamora"+countArray[k]).disabled = false;
		}
	}else if(countPassion>0 && countPassion<6){
		var l;
		for(l=0;l<passionTotal;l++){
			var position=passionStart+l;
			document.getElementById("gamora"+position).disabled = false;
		}
	}
}
/*******************webview close in android and ios************************/
function webviewClose() {
	MessengerExtensions.requestCloseBrowser(function success() {

	}, function error(err) {

	});
	setTimeout(window.close, 2000);
}
/***************Update Data send to Database userPreference************/
function updateUPFunction() {

	var channelid;
	try {
		channelid = $('input[name="channelid"]').val();
		var succeed=$('input[name="succeed"]').val();
		/*if(($('input[name="gender"]:checked').length<=0) || ($('input[name="age-range"]:checked').length<=0))  // || ($('input[name="language"]:checked').length<=0)
		{
			alert("Top 3 fields are mandatory to be filled!");
			if($('input[name="gender"]:checked').length<=0)
				$('#gamora0').focus();
			else if($('input[name="age-range"]:checked').length<=0)
				$('#gamora2').focus();
			else if($('input[name="language"]:checked').length<=0)
				$('#gamora6').focus();
		}else */
		var dob=$('input[name="date"]').val();
		var resdob = dob.split("/");
		if(succeed==='failed'){
			$('input[name="neargroup"]').focus();
		}else if((resdob[0]<=12 && resdob[0].length==2 && resdob[1]<=31 && resdob[1].length==2 && resdob[2].length==4) || resdob==''){
			var buttontext = $('input[name="buttontext"]').val();
			var testId = $('input[name="testid"]').val();

			var neargroup=$('input[name="neargroup"]').val();
			var ugender = $('input[name="ugender"]:checked').val();
			var gender = $('input[name="gender"]:checked').val();
			var ageRange = $('input[name="age-range"]:checked').val();
			var language = $('input[name="language"]:checked').val();
			var horror = $('input[name="horror"]:checked').val();
			var spendTime = $('input[name="spend-time"]:checked').val();
			var bestTrait = $('input[name="best-trait"]:checked').val();
			var traitDate = $('input[name="trait-date"]:checked').val();
			var wantNG = $('input[name="want-ng"]:checked').val();

			var passion;
			var txt = $('input:checkbox[name="passion"]:checked').map(function() {
				return this.value;
			}).get();
			if(txt!==undefined){
				passion = txt[0];
				var i;
				for (i = 1; i < txt.length; i++) {
					passion += ", ";
					passion = passion + txt[i];
				}
			}
			var country = $('input[name="country"]:checked').val();
			/*var chat = $('input[name="chat"]:checked').val();*/
			var arr=[horror,spendTime,bestTrait,traitDate,wantNG,passion,country];
			for(var j=0;j<arr.length;j++){
				if(arr[j]===undefined){
					arr[j]="Skip";
				}
			}
			var url = "userPreferences?callback="+buttontext+"&testid="+testId+"&channelid="+encodeURIComponent(channelid)+"&ugender="+ugender+"&gender="+gender+"&ageRange="+encodeURIComponent(ageRange)+"&language="+encodeURIComponent(language)+"&horror="+arr[0]+"&spendTime="+arr[1]+"&bestTrait="+arr[2]+"&traitDate="+arr[3]+"&wantNG="+arr[4]+"&passion="+arr[5]+"&country="+arr[6]+"&unameng="+neargroup+"&dob="+encodeURIComponent(dob);
			$.ajax({
				type : "GET",
				url : url,
				cache : false,
				success : function(data) {
					var res = data.charAt(0);
					if(res=='a'){

						//alert("Preferences have been edited.");
						/*$.ajax({
						url : "userRateReviewProfile?channelid="+channelid,
						cache : false,
						success : function(data) {
							//alert("yes");
						}
					});*/
						var close = getUrlParameter('close');
						if(close===undefined){
							var encryID=getUrlParameter('channelid');
							$("#buttonmodel").click();
							$("#modeldone").click(function(){
								window.location.replace("userProfile?channelid="+encryID+"#preferences");
							});
							$("#modelcancel").click(function(){
								
							});
						} else if(close=="123") {
							$("#buttonmodel").click();
							//alert("Information saved", "NearGroup");
							$("#modeldone").click(function(){
								webviewClose();
							});
							$("#modelcancel").click(function(){
								
							});
//							MessengerExtensions.requestCloseBrowser(function success() {

//							}, function error(err) {

//							});
//							setTimeout(window.close, 2000);
						}
						//window.top.close();
						//window.location.replace("userPreferences?channelid="+channelid);
						//location.reload();
					} else {

						alert("error");}
				}
			});
		}else{
			$('input[name="date"]').focus();
		}
	}
	catch(err) {
		var url = "errorInJSToSaveDB?channelid="+encodeURIComponent(channelid)+"&funName=updateUPFunction&message=Preferences Update Data send to Database userPreference  -  "+err+"&err="+err;
		$.ajax({
			type : "GET",
			url : url,
			cache : false,
			success : function(data) {
				var res = data.charAt(0);
				if(res=='a'){
					alert("may be NG is updating..");
				} else {
					alert("may be NG server is updating..");}
			}
		});
	}
}
/*************************tabs userProfile*******************/
function openCity(evt, cityName) {
	var i, x, tablinks;
	x = document.getElementsByClassName("city");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.firstElementChild.className += " w3-border-red";
}
/******************** aboutme save userprofile**************************/
function editAbout(id) {
	var aboutme = $('#aboutme').html();
	if(aboutme==undefined){aboutme="";}
	var txt1 = "<textarea name='aboutme' class='aboutmetext' id='aboutmetext' maxlength='250' placeholder='Describe yourself here...'>"+aboutme+"</textarea>";
	var txt3 = "<button type='button' class='btn btn-warning' type='submit' onclick='saveAbout(" + id + ")' id='savearea'>Save</button>";
	$('#aboutme').html("");
	$('#aboutmedys').hide();
	$('#editbut').hide();
	$('#aboutmedy').hide();
	$('#aboutmearea').append(txt1);
	$('#editbutarea').append(txt3);
	$('#aboutmetext').attr("value", aboutme);
}
function saveAbout() {
	var channelid;
	try {
		channelid = $('input[name="channelid"]').val();
		var aboutmetext = $('#aboutmetext').val();
		var testId = $('input[name="testid"]').val();

		var url = "userProfile?testid="+testId+"&channelid="+encodeURIComponent(channelid)+"&about="+aboutmetext;
		$.ajax({
			type : "GET",
			url : url,
			cache : false,
			success : function(data) {
				var res = data.charAt(0);
				if(res=='a'){
					$('#aboutmearea').html("");
					$('#aboutmedys').show();
					if(aboutmetext==""){$('#aboutmedy').show();$('#aboutmedy').html("Describe Yourself..");}
					else{$('#aboutme').html(aboutmetext);}
					$('#editbutarea').html("");
					$('#editbut').show();
					//location.reload();
				} else {
					alert("error");}
			}
		});
	}
	catch(err) {
		var url = "errorInJSToSaveDB?channelid="+encodeURIComponent(channelid)+"&funName=saveAbout&message=aboutme save userprofile  -  "+err+"&err="+err;
		$.ajax({
			type : "GET",
			url : url,
			cache : false,
			success : function(data) {
				var res = data.charAt(0);
				if(res=='a'){
					alert("may be NG is updating..");
				} else {
					alert("may be NG server is updating..");}
			}
		});
	}
}
/*********************fb login Approach 1**************/
//Load the Facebook JS SDK
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Init the SDK upon load
window.fbAsyncInit = function() {
	FB.init({
		appId      : '132103753883015', //229742460841411
		cookie     : true,  // enable cookies to allow the server to access 
		// the session
		xfbml      : true,  // parse social plugins on this page
		version    : 'v3.1' // use graph api version 2.8
	});

//	Specify the extended permissions needed to view user data
//	The user will be asked to grant these permissions to the app (so only pick those that are needed)
	var permissions = [
	                   'email',
	                   'user_likes',
//	                   'friends_likes',
	                   'user_about_me',
//	                   'friends_about_me',
	                   'user_birthday',
//	                   'friends_birthday',
	                   'user_education_history',
//	                   'friends_education_history',
	                   'user_hometown',
//	                   'friends_hometown',
	                   'user_relationships',
//	                   'friends_relationships',
//	                   'user_relationship_details',
//	                   'friends_relationship_details',
	                   'user_location',
//	                   'friends_location',
//	                   'user_religion_politics',
//	                   'friends_religion_politics',
//	                   'user_website',
//	                   'friends_website',
	                   'user_work_history',
//	                   'friends_work_history',
	                   'user_friends'
	                   ].join(',');

//	Specify the user fields to query the OpenGraph for.
//	Some values are dependent on the user granting certain permissions
	var fields = [
	              'id',
//	              'name',
//	              'first_name',
//	              'middle_name',
//	              'last_name',
//	              'gender',
//	              'locale',
//	              'languages',
//	              'link',
//	              'username', 
//	              'third_party_id',
//	              'installed',
//	              'timezone',
//	              'updated_time',
//	              'verified',
	              'age_range',
//	              'bio',
	              'birthday',
//	              'cover',
//	              'currency',
//	              'devices',
	              'education',
	              'email',
	              'hometown',
//	              'interested_in',
	              'location',
//	              'political',
//	              'payment_pricepoints',
//	              'favorite_athletes',
//	              'favorite_teams',
	              'picture',
//	              'quotes',
	              'relationship_status',
//	              'religion',
//	              'significant_other',
//	              'video_upload_limits',
//	              'website',
	              'work'
	              ].join(',');

	function showDetails(channelid, pref) {
		$body = $("body");
		$body.addClass("loading");
		var fbid="";
		try {
			FB.api('/me', {fields: fields}, function(details) {
				// output the response
//				var mysJson=JSON.stringify(details, null, '\t');
//				console.log(mysJson);
				var myJson=JSON.stringify(details);
				var myObj=JSON.parse(myJson);

//				var testid=2; 
				fbid=myObj.id;
//				var name=myObj.name;
//				var firstname=myObj.first_name;
//				var middlename=myObj.middle_name;
//				var lastname=myObj.last_name;
//				var gender=myObj.gender;
//				var locale=myObj.locale;
//				var lang=myObj.languages;
//				var link=myObj.link;
//				var username=myObj.username;
//				var thirdparty=myObj.third_party_id;
//				var installed=myObj.installed;
//				var timezone=myObj.timezone;
//				var update=myObj.updated_time;
//				var verified=myObj.verified;
				var ageRangeMin="";
				if(myObj.age_range.min!=null){
					ageRangeMin=myObj.age_range.min;
				}
				var ageRangeMax="";
				if(myObj.age_range.max!=null){
					ageRangeMax=myObj.age_range.max;
				}
				var birthday="";
				if(myObj.birthday!=null){
					birthday=myObj.birthday;
				}
//				var cover=myObj.cover.source;
//				var currency=myObj.currency;
//				var devices=myObj.devices;
				var education="";
				if(myObj.education!=null){
					education=myObj.education[0].school.name;
				}
				var email=myObj.email;
				if(typeof(email)==='undefined' ){
					email="";
				}
				var hometown="";
				if(myObj.hometown!=null){
					hometown=myObj.hometown.name;
				}
//				var interest=myObj.interested_in;
				var location="";
				if(myObj.location!=null){
					location=myObj.location.name;
				}
//				var political=myObj.political;
//				var payPrice=myObj.payment_pricepoints;
//				var favoriteAthletes=myObj.favorite_athletes;
//				var favoriteTeam=myObj.favorite_teams;
				var picture="";
				if(myObj.picture!=null){
					picture=myObj.picture.data.url;
				}
//				var quotes=myObj.quotes;
				var relationship_status="";
				if(myObj.relationship_status!=null || myObj.relationship_status!="" || myObj.relationship_status!="undefined"){
					relationStatus=myObj.relationship_status;
				}
				if(typeof(relationStatus)==='undefined' ){
					relationStatus="";
				}
//				var religion=myObj.religion;
//				var sign=myObj.significant_other;
//				var videoUpLimit=myObj.video_upload_limits;
//				var website=myObj.website;
				var work="";
				if(myObj.work!=null){
					work=myObj.work[0].employer.name;
				}
//				channelId	email	pictureUrl	age_range	userLikes	userWork	userEducation	userCurrentLocatoin	
//				userRelationshipStatus	hometown	fcount	googleCollegeId	aboutme	fb_id
				var url="userProfile?testid=2&channelid="+encodeURIComponent(channelid)+"&fbid="+encodeURIComponent(fbid)+"&aRMin="+encodeURIComponent(ageRangeMin)+"&aRMax="+encodeURIComponent(ageRangeMax)+
				"&pic="+picture+"&email="+email+"&work="+encodeURIComponent(work)+"&edu="+encodeURIComponent(education)+"&cloc="+encodeURIComponent(location)+"&rs="+encodeURIComponent(relationStatus)+
				"&ht="+encodeURIComponent(hometown)+"&bd="+birthday;
				$.ajax({
					type : "GET",
					url : url,
					cache : false,
					success : function(data) {
						var res = data.charAt(0);
						if(res=='a'){
//							location.reload();
							FB.api( "/"+fbid+"/likes?limit=5000&offset=0", {permissions: permissions}, function(detailes) {
//								var myJsone=JSON.stringify(detailes, null, '\t');
								var myLiJson=JSON.stringify(detailes);
								var myLiObj=JSON.parse(myLiJson);
//								alert(myObje+"      yyyyyyyy");
//								alert(myObje.data);
//								var x;
//								var i=0;
//								for (x in myObje.data) {
//								console.log(myObje.data[x]);
//								i++;
//								}
								FB.api( "/"+fbid+"/friends", {permissions: permissions}, function(detailes) {
//									var myJsone=JSON.stringify(detailes, null, '\t');
									var myFrJson=JSON.stringify(detailes);
									var myFrObj=JSON.parse(myFrJson);
									var fcount="";
									if(myFrObj.summary!=null){
										fcount=myFrObj.summary.total_count;}
									$.ajax({
										type : "POST",
										url : "userProfile",
										data: {channelid:channelid, myLiJson:myLiJson, myFrJson:myFrJson, fcount:fcount},
										cache : false,
										success : function(data) {
											$body.removeClass("loading");
											var res = data.charAt(0);
											if(res=='a'){
												var encryID=getUrlParameter('channelid');
												if(pref==""){
													window.location = "userProfile?channelid="+encryID;
												}
												if(pref=="pref"){
													var callback=getUrlParameter('callback');
													var close="123";
													window.location = "userPreferences?channelid="+encryID+"&callback="+callback+"&close="+close;
												}
//												location.reload();
											} else {
												alert("error");
											}
										}
									});
								});	
							});
						} else {
							alert("error");
						}
					}
				});
//				$('#userdata').html(myObje.data[0]);//myObj.name myJson
//				$('#fb-login').attr('style', 'display:none;');	
			});
		}
		catch(err) {
			var url = "errorInJSToSaveDB?channelid="+encodeURIComponent(channelid)+"&funName=showDetails&message=save users fb all details in db"+fbid+"  -  "+err+"&err="+err;
			$.ajax({
				type : "GET",
				url : url,
				cache : false,
				success : function(data) {
					var res = data.charAt(0);
					if(res=='a'){
						alert("may be NG is updating..");
					} else {
						alert("may be NG server is updating..");}
				}
			});
		}

	}

//	function fbLoginFunction(channelid) {
	$('#fb-login, #fb-login2').click(function(){
		//initiate OAuth Login
		var channelid= $('input[name="channelid"]').val();

		FB.login(function(response) { 
			// if login was successful, execute the following code
			if(response.authResponse) {
				showDetails(channelid,"");
			}
		}, {scope: permissions});
	});
	$('#fb-login-pref').click(function(){
		//initiate OAuth Login
		var channelid= $('input[name="channelid"]').val();

		FB.login(function(response) { 
			// if login was successful, execute the following code
			if(response.authResponse) {
				showDetails(channelid, "pref");
			}
		}, {scope: permissions});
	});
//	}
}; 

/*************************fb login Approach 2************************/ 
/*  // This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
console.log('statusChangeCallback');
console.log(response);
// The response object is returned with a status field that lets the
// app know the current login status of the person.
// Full docs on the response object can be found in the documentation
// for FB.getLoginStatus().
if (response.status === 'connected') {
  // Logged into your app and Facebook.
	 testAPI();
} else {
  // The person is not logged into your app or we are unable to tell.
  document.getElementById('status').innerHTML = 'Please log ' +
    'into this app.';
}
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});
}

window.fbAsyncInit = function() {
FB.init({
appId      : '229742460841411',
cookie     : true,  // enable cookies to allow the server to access 
                    // the session
xfbml      : true,  // parse social plugins on this page
version    : 'v3.1' // use graph api version 2.8
});


// Now that we've initialized the JavaScript SDK, we call 
// FB.getLoginStatus().  This function gets the state of the
// person visiting this page and can return one of three states to
// the callback you provide.  They can be:
//
// 1. Logged into your app ('connected')
// 2. Logged into Facebook, but not your app ('not_authorized')
// 3. Not logged into Facebook and can't tell if they are logged into
//    your app or not.
//
// These three cases are handled in the callback function.

FB.getLoginStatus(function(response) {
statusChangeCallback(response);
});

};

// Load the SDK asynchronously
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_US/sdk.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
console.log('Welcome!  Fetching your information.... ');
FB.api('/me', function(response) {
  console.log('Successful login for: ' + response.name);
  document.getElementById('status').innerHTML =
    'Thanks for logging in, ' + response.name + '!';
});
}    */
/**************************remove fav frnds in MyFavourite***********************************/
function removeFrndFunction(count, channelid1, channelid2) {
	$("#buttonmodel").click();
	$("#modeldone").click(function(){
		var url = "myFavourite?testid=0&channelid1="+encodeURIComponent(channelid1)+"&channelid2="+encodeURIComponent(channelid2);
		$.ajax({
			type : "GET",
			url : url,
			cache : false,
			success : function(data) {
				$body.removeClass("loading");
				console.log(data);
				var res = data.charAt(0);
				if(res=='a'){
					$('#tablerow' + count).html("");
				} else {
					alert("error");
				}
			}
		});
	});
	$("#modelcancel").click(function(){
		count="";
		channelid1="";
		channelid2="";
	});
}
/**************************remove fav frnds in MyFavourite***********************************/
function favFrndRequestFunction(channelid1, channelid2, channeltype) {
		var url = "myFavourite?testid=1&channelid1="+encodeURIComponent(channelid1)+"&channelid2="+encodeURIComponent(channelid2)+"&channeltype="+encodeURIComponent(channeltype);
		$.ajax({
			type : "GET",
			url : url,
			cache : false,
			success : function(data) {
				$body.removeClass("loading");
				console.log(data);
				var res = data.charAt(0);
				if(res=='a'){
					webviewClose();
				} else {
					alert("error");
				}
			}
		});
}
/**************************remove FB Account in UserProfile**********************************/
function removeFBAcc(channelid,title_text,t_text) {
	$('#model_title').html(title_text);
	$('#model_t_text').html(t_text);
	$("#buttonmodel").click();
	$("#modeldone").click(function(){
		var url = "userProfile?testid=10&channelid="+encodeURIComponent(channelid);
		$.ajax({
			type : "GET",
			url : url,
			cache : false,
			success : function(data) {
				var res = data.charAt(0);
				if(res=='a'){
					location.reload();
				} else {
					alert("error");
				}
			}
		});
	});
	$("#modelcancel").click(function(){
		channelid="";
		title_text="";
		t_text="";
	});
}
/**************************remove live topics in UserProfile***********************************/
function removeTopicFunction(count, id, tname, title_text, t_text) {
	$body.addClass("loading");
	$('#model_title').html(title_text);
	$('#model_t_text').html(t_text);
	$("#buttonmodel").click();
	$("#modeldone").click(function(){
		var url = "userProfile?testid=3&id="+id+"&tname="+tname;
		$.ajax({
			type : "GET",
			url : url,
			cache : false,
			success : function(data) {
				$body.removeClass("loading");
				var res = data.charAt(0);
				if(res=='a'){
					$('#doni' + count).html("");
				} else {
					alert("error");
				}
			}
		});
	});
	$("#modelcancel").click(function(){
		count="";
		id="";
		tname="";
		title_text="";
		t_text="";
	});
}
/*******************ng user name**************************/
$('#nguname').keyup(function(){
	var nguser = $('input[name="neargroup"]').val();
//	var usernameRegex = new RegExp("[a-zA-Z0-9._-]");
	var user=nguser.split('');
	var flagcount=0;
	var userlength=user.length;
	if(nguser!=""){
		for(var i=0;i<userlength;i++){
			var code=nguser[i].charCodeAt(0);
			console.log(code);
			console.log("code==="+code);
			if ((code>=65 && code<=90) || (code>=97 && code<=122) || (code>=48 && code<=57) || code==45 || code==46 || code==95 ) {//usernameRegex.test(user[i])
				console.log("1");
				flagcount++;
			}else{
				console.log("2");
			}
		}
		console.log(userlength + "     "+flagcount);
		if(userlength==flagcount){
			$("#Image").show();
			$("#LoadingImage").attr("src","images/FhHRx.gif");
			var urli = "userNameNG?uname="+nguser;
			$.ajax({
				type : "GET",
				url : urli,
				cache : false,
				success : function(data) {
					var res = data.charAt(0);
					if(res=='a'){
						console.log(userlength + "     "+flagcount);
						if(userlength==flagcount){
							console.log("7");
							$("#LoadingImage").attr("src","images/FhHRx.gif");
							$("#LoadingImage").attr("src","images/green_tick.png");
							$('input[name="neargroup"]').removeClass("red");
							$('input[name="neargroup"]').addClass("green");
							$('input[name="succeed"]').val("success");
						}else{
							console.log("6");
							$("#LoadingImage").attr("src","images/FhHRx.gif");
							$("#LoadingImage").attr("src","images/red_cross.png");
							$('input[name="neargroup"]').removeClass("green");
							$('input[name="neargroup"]').addClass("red");
							$('input[name="succeed"]').val("failed");
						}
					} else if(res=='b'){
						console.log("5");
						$("#LoadingImage").attr("src","images/FhHRx.gif");
						$("#LoadingImage").attr("src","images/red_cross.png");
						$('input[name="neargroup"]').removeClass("green");
						$('input[name="neargroup"]').addClass("red");
						$('input[name="succeed"]').val("failed");
					} else{
						console.log("4");
						$("#Image").hide();
						$('input[name="neargroup"]').removeClass("green");
						$('input[name="neargroup"]').removeClass("red");
						$("#LoadingImage").attr("src","images/red_cross.png");
						$('input[name="succeed"]').val("failed");
					}
				}
			});
		}else{
			console.log("3");
			$('input[name="neargroup"]').removeClass("green");
			$('input[name="neargroup"]').addClass("red");
			$("#LoadingImage").attr("src","images/red_cross.png");
			$('input[name="succeed"]').val("failed");
		}
	}else{
		console.log("2");
		$("#Image").hide();
		$('input[name="neargroup"]').removeClass("green");
		$('input[name="neargroup"]').removeClass("red");
		$("#LoadingImage").attr("src","images/red_cross.png");
		$('input[name="succeed"]').val("blank");
	}
});
/***************lat lon get country name*************************/
function locat(channelid) {
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
//	var nudge = document.getElementById("nudge");

//	var showNudgeBanner = function() {
//	nudge.style.display = "block";
//	};

//	var hideNudgeBanner = function() {
//	nudge.style.display = "none";
//	};

//	var nudgeTimeoutId = setTimeout(showNudgeBanner, 5000);

	var geoSuccess = function(position) {
//		hideNudgeBanner();
//		We have the location, don't display banner
//		clearTimeout(nudgeTimeoutId);

		// Do magic with location

		startPos = position;
		var lat=startPos.coords.latitude;
		var lng=startPos.coords.longitude;

		var latlng = new google.maps.LatLng(lat, lng);
		var geocoder = geocoder = new google.maps.Geocoder();
		geocoder.geocode({ 'latLng': latlng }, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[0]) {

					var address=results[0].formatted_address;
					console.log(address);
//					for(var i=0;i<data.results.length;i++) {
//					address = data.results[i].formatted_address;
//					console.log(address);
//					}
					var urli = "userPreferences?testi=2&channelid="+encodeURIComponent(channelid)+"&lat="+lat+"&lon="+lng+"&add="+encodeURIComponent(address);
					$.ajax({
						type : "GET",
						url : urli,
						cache : false,
						success : function(data) {
							var res = data.split("-");
							if(res[0]=='a'){
								$("#coun").html("  "+res[1]);
							}else{

							}
						}
					});
				}
			}
		});
//		document.getElementById('startLat').innerHTML = startPos.coords.latitude;
//		document.getElementById('startLon').innerHTML = startPos.coords.longitude;
	};
	var geoError = function(error) {
		switch(error.code) {
		case error.TIMEOUT:
			// The user didn't accept the callout
//			showNudgeBanner();
			break;
		}
	};

	navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
}
/*******************Block Group Member************************/
function blockGroupUser(trcount1, username, id1, id2, groupid){
	
	var clickcount=0;
	if($('#blockbox'+trcount1).hasClass( "blockfagreen" )){
		$("#buttonmodel1").click();
	}
	$("#modeldone1").click(function(){
//		console.log(trcount1+", "+id1+", "+id2+", "+groupid);
		if(trcount1!="@"){
		$('#blockbox'+trcount1).removeClass("blockfagreen");
		$('#blockbox'+trcount1).addClass("blockfared");
		var url = "groupMember?testid=0&username="+username+"&id1="+id1+"&id2="+id2+"&groupid="+groupid;
		$.ajax({
			type : "GET",
			url : url,
			cache : false,
			success : function(data) {
				var res = data.charAt(0);
				if(res=='a'){
//					$('#tablerow' + trcount1).html("");
				} else {
					alert("error");
				}
			}
		});
		trcount1="@";
		id1="@";
		id2="@";
		groupid="@";
		}
	});
	$("#modelcancel1").click(function(){
//		console.log(trcount1+", "+id1+", "+id2+", "+groupid);
		trcount1="@";
		id1="@";
		id2="@";
		groupid="@";
	});
}
/*******************Share profile Group Member************************/
function shareProfileGroup(trcount2, channelGender, channelUserName, username, id1, id2){
	
	$("#buttonmodel2").click();
	
	$("#modeldone2").click(function(){
		console.log(trcount2+", "+id1+", "+id2);
		if(trcount2!="@"){
	var url = "groupMember?testid=1&id1="+id1+"&id2="+id2+"&username="+username+"&channelGender="+channelGender+"&channelUserName="+channelUserName;
	$.ajax({
		type : "GET",
		url : url,
		cache : false,
		success : function(data) {
			var res = data.charAt(0);
			if(res=='a'){
//				$('#tablerow' + trcount2).html("");
			} else {
				alert("error");
			}
		}
	});
	trcount2="@";
	channelGender="@";
	channelUserName="@";
	username="@";
	id1="@";
	id2="@";
		}
	});
	$("#modelcancel2").click(function(){
//		console.log(trcount2+", "+id1+", "+id2+", "+groupid);
		trcount2="@";
		channelGender="@";
		channelUserName="@";
		username="@";
		id1="@";
		id2="@";
	});
}
/*******************************************/
