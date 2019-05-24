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

	function showDetails(redirect) {
		$body = $("body");
		$body.addClass("loading");
		var fbid="";
		FB.api('/me', {fields: fields}, function(details) {
			var myJson=JSON.stringify(details);
			var myObj=JSON.parse(myJson);
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
					var json={"channelid":getUrlParameter("channelid"), "fb_id":fbid, "max_age":ageRangeMax, "min_age":ageRangeMin, "picture_url":picture,
							"email":email, "work":work, "education":education, "current_location":location, "relationship_status":relationStatus,
							"hometown":hometown, "birthday":birthday, "likes":myLiJson, "total_fb_friends":fcount, "mutual_friends":myFrJson, "profile_name":name,
							"timeZone":timezone,  "gender":gender};
					var mJson=JSON.stringify(json);
					var obj=JSON.parse(mJson);
					$.ajax({
						type : "POST",
						url : "fbloginjs",
						dataType : 'json',
						data : JSON.stringify(json),
						cache : false,
						contentType : 'application/json',
						mimeType : 'application/json',
						success : function(data) {
							if(data){
								$body.removeClass("loading");
								if(data.Grant_Access==true){
									if(redirect=='1'){
										window.location.replace("editprofile.html?channelid="+encodeURIComponent(getUrlParameter("channelid")));
									}else{
										window.location.replace("myprofile.html?channelid="+encodeURIComponent(getUrlParameter("channelid")));
									}
								}else if(data.Grant_Access==false){
									alert("errorf");
								}
							}else {
								alert("error");
							}
						}
					});
				}); 
			});	
		});
	}

	$('#fb_login').click(function(){
		//initiate OAuth Login
		FB.login(function(response) { 
			// if login was successful, execute the following code
			if(response.authResponse) {
				showDetails();
			}
		}, {scope: permissions});
	});
	
	$('#fb_login1').click(function(){
		//initiate OAuth Login
		FB.login(function(response) { 
			// if login was successful, execute the following code
			if(response.authResponse) {
					showDetails('1');
			}
		}, {scope: permissions});
	});
	
}; 

function removefb() {
    OpenModal("Remove", "Do you want to remove your FB account?");
    $('#btnok').click(function () {
        CloseModal();
        $.ajax({
            type: "POST",
            url: "fbloginjs",
            dataType: 'json',
            data: JSON.stringify({ "tid": "0", "channelid": getUrlParameter("channelid") }),
            cache: false,
            contentType: 'application/json',
            mimeType: 'application/json',
            success: function (data) {
                if (data) {
                    if (data.Grant_Access == true) {
                        window.location.replace("myprofile.html?channelid=" + encodeURIComponent(getUrlParameter("channelid")));
                    } else if (data.Grant_Access == false) {
                        alert("error");
                    }
                } else {
                    alert("error");
                }
            }
        });
    });
    $('#btncancel').click(function () {
        CloseModal();
    });
}