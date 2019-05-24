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
		appId      : '132103753883015', //229742460841411 132103753883015
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
	              'name',
//	              'first_name',
//	              'middle_name',
//	              'last_name',
	              'gender',
//	              'locale',
//	              'languages',
//	              'link',
//	              'username', 
//	              'third_party_id',
//	              'installed',
	              'timezone',
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

	function showDetails() {
		$body = $("body");
		$body.addClass("loading");
		var fbid="";
		try {
			FB.api('/me', {fields: fields}, function(details) {
//				console.log(details);
				var myJson=JSON.stringify(details);
//				console.log(myJson);
				var myObj=JSON.parse(myJson);
//				console.log(myObj);
				fbid=myObj.id;
				var name="";
				if(myObj.name!=null){
					name=myObj.name;
				}
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
				var education="";
				if(myObj.education!=null){
					education=myObj.education[0].school.name;
				}
				var email=myObj.email;
				if(typeof(email)==='undefined' ){
					email="";
				}
				var gender="";
				if(myObj.gender!=null){
					gender=myObj.gender;
				}
				var timezone="";
				if(myObj.timezone!=null){
					timezone=myObj.timezone;
				}
				var hometown="";
				if(myObj.hometown!=null){
					hometown=myObj.hometown.name;
				}
				var location="";
				if(myObj.location!=null){
					location=myObj.location.name;
				}
				var picture="";
				if(myObj.picture!=null){
					picture=myObj.picture.data.url;
				}
				var relationship_status="";
				if(myObj.relationship_status!=null || myObj.relationship_status!="" || myObj.relationship_status!="undefined"){
					relationStatus=myObj.relationship_status;
				}
				if(typeof(relationStatus)==='undefined' ){
					console.log(relationStatus);
					relationStatus="";
					console.log(relationStatus);
				}
				var work="";
				if(myObj.work!=null){
					work=myObj.work[0].employer.name;
				}
				FB.api( "/"+fbid+"/likes?limit=5000&offset=0", {permissions: permissions}, function(detailes) {
					var myLiJson=JSON.stringify(detailes);
					var myLiObj=JSON.parse(myLiJson);
					FB.api( "/"+fbid+"/friends", {permissions: permissions}, function(detailes) {
						var myFrJson=JSON.stringify(detailes);
						var myFrObj=JSON.parse(myFrJson);
						var fcount="";
						if(myFrObj.summary!=null){
							fcount=myFrObj.summary.total_count;}
						var json={"birthday":birthday, "channel_type":"web", "picture_url":picture, "college_name":education, "current_location":location, "email":email, "fb_id":fbid, "gender":gender, "hometown":hometown, "likes":myLiJson, "max_age":ageRangeMax, "min_age":ageRangeMin, "mutual_friends":myFrJson, "profile_name":name, "relationship_status":relationStatus, "timeZone":timezone, "total_fb_friends":fcount, "work":work};
						var mJson=JSON.stringify(json);
						var obj=JSON.parse(mJson);
						$.ajax({
							type : "POST",
							url : "login",
							data: mJson,
							cache : false,
							success : function(data) {
								var res=JSON.stringify(data);
								var resObject=JSON.parse(res);
								var grantAccess=JSON.stringify(resObject.Grant_Access);
								if(grantAccess.toLowerCase().search("true")>=0){
									$body.removeClass("loading");
									window.location.replace("home.jsp");
//									$('.fbprofbutton').addClass('hide');
//									$('.container').removeClass('hide');
//									console.log(resObject.channelId);
//									$('input[name="channelid"]').val(resObject.channelId);
									
//									$("#connectBut").click();
								} else if(grantAccess.toLowerCase().search("false")>=0){
									console.log(resObject.Reason);
								}else {
									alert("error");
								}
							}
						});
					}); 
				});	
			});
		} catch(err) {
			var url = "errorInJSToSaveDB?channelid="+channelid+"&funName=showDetails&message=save users fb all details in db"+fbid+"  -  "+err+"&err="+err;
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

	$('#fb-login').click(function(){
		//initiate OAuth Login
		FB.login(function(response) { 
			// if login was successful, execute the following code
			if(response.authResponse) {
				showDetails();
			}
		}, {scope: permissions});
	});
}; 


