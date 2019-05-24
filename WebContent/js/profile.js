var snackbarContainer = document.querySelector('#toast-message');
console.log("profile 111--111 ---")

function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL.split('&'), sParameterName, i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
}

function webviewClose() {
	MessengerExtensions.requestCloseBrowser(function success() {

	}, function error(err) {

	});
	setTimeout(window.close(), 2000);
}

var img = 1;
function imgsrc(gen, page, input) {
	var size = '430x400';
	var id = 'avatar_profile_' + gen;
	var pixelate = '6';
	var oth=1;
	if (page == 'edit') {
		size = '60x60';
		id = $(input).attr('id');
		pixelate = '3';
		oth=$(input).attr('id').split('-')[1];
		if(oth===undefined){
			size = '120x120';
		}
	} else {
		size = '430x400';
		id = 'avatar_profile_' + gen;
		pixelate = '6';
		oth=1;
	}
	if (img == 1 && oth==1) {
		img++;
		if (favs !== undefined || blurimage != 0) {
			$('#' + id).attr("src", "https://img.neargroup.in/project/" + size + "/forcesize/profile_" + channelid);
		} else {
			$('#' + id).attr("src", "https://img.neargroup.in/project/" + size + "/forcesize/pixelate_" + pixelate + "/profile_" + channelid);
		}
	} else {
		$('#' + id ).attr("src", "https://img.neargroup.in/project/" + size + "/forcesize/demo_"+gen);
		if (page == 'edit') {
			$('#img-'+$(input).attr('id').split('-')[1]).removeClass('uploadcancel').html('add_box');
		}
	}
}
/*******************************************************************************/
/*****************************My Profile****************************************/
/*******************************************************************************/

$("#btn_editprofile").click(function () {
	window.location.href = 'editprofile.html?channelid=' + encodeURIComponent(getUrlParameter("channelid"));
});

function goFullscreen() {
	console.log("in go fullscreen-- ");
	document.webkitRequestFullscreen()	;
//	let elem = document.getElementById("maincontainer")
//	if(elem.requestFullscreen) {
//		elem.requestFullscreen()
//	} else {
//console.log("elem.requestFullscreen() denied");
//	}
	
};

function removeTopicFunction(rev_top_no, id, tname, title_text, t_text) {
	OpenModal(title_text, t_text);
	$('#btnok').click(function () {
		CloseModal();
		$body.addClass("loading");
		if(id!=''){
		$.ajax({
			type: "POST",
			url: "userProfile",
			//crossDomain: true,
			dataType: 'json',
			data: JSON.stringify({
				"tid": "3",
				"id": id,
				"tname": tname
			}),
			cache: false,
			contentType: 'application/json',
			mimeType: 'application/json',
			success: function (data) {
				$body.removeClass("loading");
				if (data.Grant_Access) {
					$('#rev_top' + rev_top_no).html("").addClass('hidden');
					if (tname == 'testimonial') {
						var data1 = {
								message: 'Your review has been deleted',
								timeout: 3000
						};
						showsnackbar(data1.message);
					} else {
						var data1 = {
								message: 'Your post has been deleted',
								timeout: 3000
						};
						showsnackbar(data1.message);
					}
				} else {
					console.log("error");
				}
			}
		});
		}
	});
	$('#btncancel').click(function () {
		count = "";
		id = "";
		tname = "";
		title_text = "";
		t_text = "";
		CloseModal();
	});
}

function editTopicFunction(top, id, tname) {
	var adv_text = $('#advices_text' + top).html();
	if (adv_text === undefined) { adv_text = ""; }
	var txt1 = "<textarea name='topictext' class='mdl-textfield__input' id='topictext" + top + "' rows='7'>" + adv_text.replace(/<br>/g, "\n") + "</textarea>";
	var txt2 = '<button class="mdl-button mdl-js-button mdl-button--icon delete" onclick=\'saveTopicFunction(' + top + ', "' + id + '", "' + tname + '")\'><i class="material-icons">save</i></button>';
	var txt3 = '<div id="bt_save" style="text-align: center; float: none;"><button class="btn-outline save" onclick=\'saveTopicFunction(' + top + ', "' + id + '", "' + tname + '")\'>save</button></div>';
	$('#advices_text' + top).html("");
	$('#advices_text' + top).html(txt1);
	$('#advices_text' + top).append(txt3);
	$('#del_rev_top' + top).addClass('hidden');
	$('#topictext' + top).focus();
	/*window.location.hash = '#topictext'+top;*/
	$('#but-editprof').addClass('hidden');
}

function saveTopicFunction(top, id, tname) {
	var advtext = $('#topictext' + top).val();
	var adtext = advtext;
	var text = $('input[name="youtube' + top + '"]').val();
	var wctext = $('input[name="writingcontest' + top + '"]').val();
	if (text != '') {
		advtext += text;
	}
	var txt1 = '<button class="mdl-button mdl-js-button mdl-button--icon edit" onclick=\'editTopicFunction('
		+ top
		+ ', "'
		+ id
		+ '", "'
		+ tname
		+ '")\'><i class="material-icons">border_color</i></button><button class="mdl-button mdl-js-button mdl-button--icon delete" onclick=\'removeTopicFunction('
		+ top
		+ ', "'
		+ id
		+ '", "'
		+ tname
		+ '", "Remove post", "Do you want to remove this post?")\'><i class="material-icons">delete_forever</i></button>';
	var advtext_split = advtext.split('');
	var advtextlength = advtext_split.length;
	var lw_limit=19;
	var hg_limit=601;

	if(wctext!==undefined && wctext!=''){
		lw_limit=249;
		hg_limit=1251;
	}
	if (advtextlength > lw_limit & advtextlength < hg_limit) {
		$('#advices_text' + top).html("");
		$('#advices_text' + top).html(adtext.replace(/\n/g, "<br>"));
		$('#del_rev_top' + top).html(txt1);
		$('#but-editprof').removeClass('hidden');
		$('#del_rev_top' + top).removeClass('hidden');
		$.ajax({
			type: "POST",
			url: "userProfile",
			dataType: 'json',
			data: JSON.stringify({
				"tid": "2",
				"id": id,
				"tname": tname,
				"advices_txt": advtext
			}),
			cache: false,
			contentType: 'application/json',
			mimeType: 'application/json',
			success: function (data) {
				$body.removeClass("loading");
				if (data.Grant_Access===true) {
					var data1 = {
							message: 'Bingo!!! Your post has been edited',
							timeout: 3000
					};
					showsnackbar(data1.message);
				}else if (data.Grant_Access===false && data.isAbuse===true) {
					var data1 = {
							message: 'Apologies, your post didn\'t go through,<br>as it may contain inappropriate words.',
							timeout: 3000
					};
					showsnackbar(data1.message);
					editTopicFunction(top, id, tname);
				}else if (data.Grant_Access===false && data.isLink===true) {
					var data1 = {
							message: 'Apologies! you can\'t use external links.',
							timeout: 3000
					};
					showsnackbar(data1.message);
					editTopicFunction(top, id, tname);
				}else{
					var data1 = {
							message: 'Apologies, your post couldn\'t be updated,<br>Due to some internal errors',
							timeout: 3000
					};
					showsnackbar(data1.message);
				}
			}
		});
	} else {
		$('#topictext' + top).focus();
		$('#topictext' + top).addClass("red");
		setTimeout(function () {
			$('#topictext' + top).removeClass("red");
		}, 5000);
		lw_limit=lw_limit+1;
		var data1 = {
				message: 'Please, enter minimum '+ lw_limit +' characters',
				timeout: 3000
		};
		showsnackbar(data1.message);
	}
}

$("#follow_user").click(function () {
	$.ajax({
		type: "POST",
		url: "userProfile",
		dataType: 'json',
		data: JSON.stringify({
			"tid": "1",
			"channelid": getUrlParameter("channelid"),
			"hYFyh": getUrlParameter("hYFyh"),
			"channelid2": getUrlParameter("channelid2"),
			"kJhuW": getUrlParameter("kJhuW"),
			"abhinay": getUrlParameter("abhinay")
		}),
		cache: false,
		contentType: 'application/json',
		mimeType: 'application/json',
		success: function (data) {
			if (data.Grant_Access === true) {
				if (data.follow == "follow") {
					if ($("#social_icons").hasClass("hidden")) {
						$('#social_icons').removeClass('hidden');
						if ($("#follow-sec").hasClass("hidden")) {
							$('#follow-sec').removeClass();
							$('#follow-sec').html('<i class="material-icons">rss_feed</i> <span id="follow">0</span>');
						} else {
							$('#social-icons').html('<div id="follow-sec"><i class="material-icons">rss_feed</i> <span id="follow">0</span></div>');
						}
					} else {
						if ($("#follow-sec").hasClass("hidden")) {
							$('#follow-sec').removeClass('hidden').html('<i class="material-icons">rss_feed</i> <span id="follow">0</span>');
						}
					}
					var follow = parseInt($('#follow').html());
					follow += 1;
					$('#follow').html(follow);
					if ($('#follow_user').hasClass('followbutton-colorchange')) {
						$('#follow_user').html('Following').addClass('followingbutton-colorchange');
					} else {
						$('#follow_user').html('Following').addClass('followingbutton');
					}
					var data1 = {
							message: 'Now, you are following this user',
							timeout: 3000
					};
					showsnackbar(data1.message);
				} else {
					var unfollow = parseInt($('#follow').html());
					unfollow -= 1;
					if (unfollow <= 0) {
						$('#follow-sec').addClass('hidden');
						if ($("#wow-sec").hasClass("hidden") && $("#view-sec").hasClass("hidden")) {
							$('#social_icons').addClass('hidden');
						}
					}
					$('#follow').html(unfollow);
					if ($('#follow_user').hasClass('followbutton-colorchange')) {
						$('#follow_user').html('Follow').removeClass('followingbutton-colorchange');
					} else {
						$('#follow_user').html('Follow').removeClass('followingbutton');
					}
					var data1 = {
							message: 'User has been unfollowed',
							timeout: 3000
					};
					showsnackbar(data1.message);
				}
			}
		}
	});
});

$('#contact_user').click(function () {
	var contactmess = $('#contacttextarea').val();
	var len = contactmess.split('').length;
	if (len > 19 && len < 601) {
		CloseContactModal();
		$.ajax({
			type: "POST",
			url: "userProfile",
			dataType: 'json',
			data: JSON.stringify({
				"tid": "5",
				"channelid": getUrlParameter("channelid"),
				"hYFyh": getUrlParameter("hYFyh"),
				"channelid2": getUrlParameter("channelid2"),
				"kJhuW": getUrlParameter("kJhuW"),
				"abhinay": getUrlParameter("abhinay"),
				"contactmess": contactmess
			}),
			cache: false,
			contentType: 'application/json',
			mimeType: 'application/json',
			success: function (data) {
				if (data.Grant_Access === true) {
					var data1 = {
							message: 'Your message has been sent to this person.',
							timeout: 3000
					};
					showsnackbar(data1.message);
				} else if (data.Grant_Access === false) {
					if (data.isAbuse === true) {
						var data1 = {
								message: 'Apologies, your request didn\'t go through,<br>as it may contain inappropriate words.',
								timeout: 2000
						};
						showsnackbar(data1.message);
					}else if (data.isBlocked === true) {
						var data1 = {
								message: 'User is busy in chatting with someone else, please try again later',
								timeout: 2000
						};
						showsnackbar(data1.message);
					} else {
						var data1 = {
								message: 'Apologies! you can only send one contact request in 24 hours.<br>Please try after ' + data.mess + ' hour(s).',
								timeout: 2000
						};
						showsnackbar(data1.message);
					}
				}
				$('#contacttextarea').val('');
				setTimeout(function () { webviewClose(); }, 3000);
			}
		});
	} else {
		$('#contacttextarea').addClass('error').focus();
		$('#errormess').removeClass('hidden').html('Please, provide more than 20 characters.');
		setTimeout(function () {
			$('#contacttextarea').removeClass('error');
			$('#errormess').addClass('hidden');
		}, 5000);
	}
});


$('input[name="notitime"]').click(function(e) {
	var channelId = $("#notitime_sec").data('getFCMPermission_channelId');
	console.log("notitime selected!!!!! ", 'https://web.neargroup.me/FCM/#/?channelId=' + channelId, $('#' + e.target.id).data('getFCMPermission'));
	
	if($('#' + e.target.id).data('getFCMPermission')) {
		console.log('ask permission yaa ', navigator.appVersion);
		//window.open('https://web.neargroup.me/onlyFCM/#/?channelId=' + channelId + "#Intent;scheme=https;package=com.android.chrome;end");
		console.log("chrome url= " + 'googlechrome://navigate?url=' + 'https://web.neargroup.me/onlyFCM/#/?channelId=' + channelId)
		window.location = 'googlechrome://navigate?url='+'https://web.neargroup.me/onlyFCM/#/?channelId=' + channelId ;
		
	}
	
})

function webviewClose() {
		MessengerExtensions.requestCloseBrowser(function success() {

		}, function error(err) {

		});
		setTimeout(window.close, 500);
	}

/*******************************************************************************/
/**************************Edit Profile*****************************************/
/*******************************************************************************/
var latlng = "null";
var locality = "null";
var countr = "null";
var postal_code = "null";
var country="null";
$("#btn_save").click(function () {
	var d = new Date();
	var succeedUsername = $('input[name="succeedUsername"]').val();
	var succeedmobile =  $('input[name="succeedMobile"]').val();
		if ($('#radioMale, #radioFemale').length > 0 && $('input[name="gender"]:checked').length <= 0) {
			$('input[name="gender"]').focus();
			$('#gender_sec').addClass('error');
			setTimeout(function () {
				$('#gender_sec').removeClass('error');
			}, 5000);
			var data1 = {
					message: 'Please, complete all of your preferences',
					timeout: 3000
			};
			showsnackbar(data1.message);
		} else if ($('#dob').length > 0 && $('#dob').val() == 0) {
			$('#dob').focus();
			$('#dob_sec').addClass('error');
			setTimeout(function () {
				$('#dob_sec').removeClass('error');
			}, 5000);
			var data1 = {
					message: 'Please, complete all of your preferences',
					timeout: 3000
			};
			showsnackbar(data1.message);
		} else if ($('input[name="distance"]').val() == 0) {
			$('input[name="distance"]').focus();
			$('#distance_sec').addClass('error');
			setTimeout(function () {
				$('#distance_sec').removeClass('error');
			}, 5000);
		var data1 = {
				message: 'Please, complete all of your preferences',
				timeout: 3000
		};
		showsnackbar(data1.message);
//		(country == "null" || country != "null") &&
	}
//	else if ( $('#country_text').html() === "" &&
//			($('input[name="country"]').val()=='' || $('input[name="country"]').val()!='') && $('#country_change_but').hasClass('hidden')) {
//		$('input[name="country"]').focus();
//		$('#country_sec').addClass('error');
//		setTimeout(function () {
//			$('#country_sec').removeClass('error');
//		}, 5000);
//		var data1 = {
//				message: 'Please, select your locality and country',
//				timeout: 3000
//		};
//		showsnackbar(data1.message);
//	}

		else if ( $('#country').val() === "" ) {
			console.log('empty country= ', country);
			$('#country').focus();
			$('#country_sec').addClass('error');
			setTimeout(function () {
				$('#country_sec').removeClass('error');
			}, 5000);
			var data1 = {
					message: 'Please, select your locality and country',
					timeout: 3000
			};
			showsnackbar(data1.message);
		}
		else if($('#bio_input').val().trim() != "" && ($('#bio_input').val().trim().length <= 10 || $('#bio_input').val().toString().length >= 300) ) {
			bio = $('#bio_input').val().trim();
			console.log("HELLO got bio= ", bio, " - " + bio.length);
			$('#bio_sec').addClass('error');
			setTimeout(function () {
				$('#bio_sec').removeClass('error');
			}, 5000);
			var data1 = {
					message: 'Apologies! About me section must have 10 to 300 characters',
					timeout: 3000
			};
			showsnackbar(data1.message);
		}

	else {
		$body.addClass("loading");
		var gender = 'null';
		if ($('#radioMale, #radioFemale').length > 0){
			gender = $('input[name="gender"]:checked').val();
		}
		var matchgender = $('input[name="matchgender"]:checked').val();
		var dob = 'null';
		if ($('#dob').length > 0 ){
			dob = $('#dob').val();
			console.log('NEW dob= ', dob)
		}
		var bio = "null"
        var bio = $('#bio_input').val(); 			
		

		// country = $('#country').val();
		var cty=$('input[name="country"]').val();
	country = $('input[name="country"]').val() + "$#$" + locality + "$#$" + countr + "$#$" + postal_code + "$#$" + latlng;
		console.log('NEW got country= ', country);

		var ms = $('input[name="ms"]:checked').val();
		var wantNG = $('input[name="want-ng"]:checked').val();
		var notitime = $('input[name="notitime"]:checked').val();
		var languages = $('input[name="languages"]:checked').val();
		
		console.log("save languge: " + languages);
		
		var goverment = $('input[name="goverment"]:checked').val();
		var socialprof = 'no';
		var socialprof_login='0';
		
		console.log("notitime on save -- ", notitime);
		
		if ($('input[name="follow"]:checked').val() != 'no') {
			socialprof = 'yes';
			if($("#removefb").length > 0) {
				  //it doesn't exist
				socialprof_login='1';
				}
			if($("#removetwitter").length > 0) {
				  //it doesn't exist
				socialprof_login='1';
				}
		}

		var proud = 'blank';
		var txt = $('input:checkbox[name="proud"]:checked').map(function () {
			return this.value;
		}).get();
		var len = txt.length;
		if (len > 0) {
			proud = txt[0];
			var i;
			for (i = 1; i < len; i++) {
				proud += " , ";
				proud = proud + txt[i];
			}
		}

		var chatmate = 'blank';
		var txt = $('input:checkbox[name="chatmate"]:checked').map(function () {
			return this.value;
		}).get();
		var len = txt.length;
		if (len > 0) {
			chatmate = txt[0];
			var i;
			for (i = 1; i < len; i++) {
				chatmate += " , ";
				chatmate = chatmate + txt[i];
			}
		}

		var passions = 'blank';
		var txt = $('input:checkbox[name="passions"]:checked').map(function () {
			return this.value;
		}).get();
		var len = txt.length;
		if (len > 0) {
			passions = txt[0];
			var i;
			for (i = 1; i < len; i++) {
				passions += ", ";
				passions = passions + txt[i];
			}
		}

		var txt = $('input:checkbox[name="interest"]:checked').map(function () {
			return this.value;
		}).get();
		var interest = {'data':txt};
		var obj = {};
		obj["testid"] = "0";
		obj["channelid"] = channelid;
		obj["gender"] = gender;
		obj["matchgender"] = matchgender;
		obj["dob"] = dob;
		obj["country"] = country;
		obj["bio"] = bio;
		obj["ms"] = ms;
		obj["wantNG"] = wantNG;
		obj["passions"] = passions;
		obj["proud"] = proud;
		obj["chatmate"] = chatmate;
		obj["languages"] = languages;
		obj["socialprof"] = socialprof;
		obj["socialprof_login"] = socialprof_login;
		obj["goverment"] = goverment;
		obj["interest"] = interest;
		obj["notitime"] = notitime;
		console.log(JSON.stringify(obj));
		$.ajax({
			type: "POST",
			url: "userPreferences",
			dataType: 'json',
			data: JSON.stringify(obj),
			cache: false,
			contentType: 'application/json',
			mimeType: 'application/json',
			success: function (data) {
				$body.removeClass("loading");
				$("#location-change-alert").addClass("hidden");
				$("#gender-change-alert").addClass("hidden");
				$("#dob-change-alert").addClass("hidden");
				if (data) {
					console.log("data= ", data, data.BIO_PHONE);
					if ("save" in data) {
						var data1 = {
								message: 'Changes saved',
								timeout: 2000
						};
						showsnackbar(data1.message);
						var close = getUrlParameter('close');
						if (close === undefined) {
							window.location.replace("myprofile.html?channelid=" + encodeURIComponent(getUrlParameter("channelid")));
						} else if (close == "123") {
							webviewClose();
						}
					}else if ("not_save" in data) {
						if("BIO_VULGAR" in data && data.BIO_VULGAR) {
							console.log('in bio_vulgar ', data.BIO_VULGAR);
							$('#bio_sec').addClass('error');
							setTimeout(function () {
								$('#bio_sec').removeClass('error');
							}, 5000);
							var data1 = {
									message: 'Apologies! Your settings not updated. No explicit words allowed. Please edit your About Me section. ',
									timeout: 3000
							};
							showsnackbar(data1.message);
						}
						else if("BIO_LINKS" in data && data.BIO_LINKS) {
							console.log('in bio_LINKS ', data.BIO_LINKS);
							$('#bio_sec').addClass('error');
							setTimeout(function () {
								$('#bio_sec').removeClass('error');
							}, 5000);
							var data1 = {
									message: 'Apologies! Links are not supported. Please change your bio.',
									timeout: 3000
							}; 
							showsnackbar(data1.message);
						}
						else if("BIO_PHONE" in data && data.BIO_PHONE) {
							console.log('in bio_phhone ', data.BIO_PHONE);
							$('#bio_sec').addClass('error');
							setTimeout(function () {
								$('#bio_sec').removeClass('error');
							}, 5000);
							var data1 = {
									message: 'Apologies! Phone numbers are not supported. Please change your bio.',
									timeout: 3000
							};
							showsnackbar(data1.message);
						}
						else if("BIO_USERNAME" in data && data.BIO_USERNAME) {
							console.log('in BIO_USERNAME ', data.BIO_USERNAME);
							$('#bio_sec').addClass('error');
							setTimeout(function () {
								$('#bio_sec').removeClass('error');
							}, 5000);
							var data1 = {
									message: 'Apologies! Profile names are not allowed. Please change your bio.',
									timeout: 3000
							};
							showsnackbar(data1.message);
						}
						
						else {
							var data1 = {
									message: 'Apologies! Your settings not updated',
									timeout: 2000
							};
							showsnackbar(data1.message);
						}
						
					}
				}
			}
		});
	}
});

$('#radioMale').click(function () {
	radioMale();
	changeOnce('gender');
	$('#gender-change-alert').removeClass('hidden');
});
function radioMale(){
	backcolor = '#1B9AF3';
	gender = 'male';
	$('.s').addClass('s-colorchange');
	$('.checkbox').addClass('is-checked-colorchange');
	$('#range' + $('input[name="distance"]').val()).click();
	$('.followbutton').addClass('followbutton-colorchange');
	$('.rdoControl-Circle').addClass('rdoControl-Circle-colorchange');
	$('.rdoControl').addClass('rdoControl-colorchange');
	$('.btn-outline').addClass('btn-outline-colorchange');
	$('meta[name=theme-color]').attr("content", "#1B9AF3");
}

$('#radioFemale').click(function () {
	radioFemale();
	changeOnce('gender');
	$('#gender-change-alert').removeClass('hidden');
});

function radioFemale(){
	gender = 'female';
	backcolor = '#fa5194';
	$('.s').removeClass('s-colorchange');
	$('.followbutton').removeClass('followbutton-colorchange');
	$('.checkbox').removeClass('is-checked-colorchange').addClass('is-checked');
	$('#range' + $('input[name="distance"]').val()).click();
	$('#rangec').removeClass('range-colorchange');
	$('.rdoControl-Circle').removeClass('rdoControl-Circle-colorchange');
	$('.rdoControl').removeClass('rdoControl-colorchange');
	$('.btn-outline').removeClass('btn-outline-colorchange');
	$('meta[name=theme-color]').attr("content", "#ff3d8e");
}
//$('#dob').click(function(){
function changeDob() {
	console.log("change DOB");
	$('#dob-change-alert').removeClass("hidden");
//	changeOnce('dob');
};

function changeOnce(ques){
	//change once
	var obj = {};
	obj["testid"]=9;
	if(ques=='gender'){obj["type"]=1;}
	if(ques=='dob'){obj["type"]=2;}
	obj["channelid"]=channelid;
	$.ajax({
		type: "POST",
		url: "userPreferences",
		dataType: 'json',
		data: JSON.stringify(obj),
		cache: false,
		contentType: 'application/json',
		mimeType: 'application/json',
		success: function (data) {

		}
	});
}
$("#country_change_but").click(function () {
	$('#location-change-alert').removeClass("hidden");
	var obj = {};
	obj["testid"]=5;
	obj["tableid"]=1;
	obj["channelid"]=channelid;
	$.ajax({
		type: "POST",
		url: "userPreferences",
		dataType: 'json',
		data: JSON.stringify(obj),
		cache: false,
		contentType: 'application/json',
		mimeType: 'application/json',
		success: function (data) {
			if(data.Grant_Access===true){
				$('#btn_save').addClass('hidden');
				$('#country_change_but').addClass('hidden');
				$('#country_save_but').removeClass('hidden');
				$('#country_text').addClass('hidden');
				$('#country').removeClass('hidden').prop('disabled', false).focus().click();
			}else{
				if(data.mess !== undefined){
					var data1 = {
							message: 'Sorry, you can only use this once a week..<br>Please try after ' + data.mess + '.',
							timeout: 2000
					};
					showsnackbar(data1.message);
				}else{
					var data1 = {
							message: 'Sorry, you can only use this once a week.',
							timeout: 2000
					};
					showsnackbar(data1.message);
				}
			}
		}
	});
});

$("#bio_change_but").click(function() {
	console.log("bio change click");
	$('#bio_text').addClass('hidden');
	$('#bio_input').removeClass('hidden');
});

$("#bio_save_but").click(function () {
	bio = $('#bio_input"]').val();
	if (bio === undefined || bio === "" || bio == "null") {
		$('#bio_input').focus();
		$('#bio_sec').addClass('error');
		setTimeout(function () {
			$('#bio_sec').removeClass('error');
		}, 5000);
		var data1 = {
				message: 'Please, share your bio',
				timeout: 3000
		};
		showsnackbar(data1.message);
	} else{
		// var bio=$('input[name="bio"]').val();
  	// bio = $('input[name="bio"]').val()
    //+ "$#$" + locality + "$#$" + countr + "$#$" + postal_code + "$#$" + latlng;
  	var obj = {};
  	obj["testid"]=10;
  	obj["bio"]=bio;
  	obj["channelid"]=channelid;
  	$.ajax({
  		type: "POST",
  		url: "userPreferences",
  		dataType: 'json',
  		data: JSON.stringify(obj),
  		cache: false,
  		contentType: 'application/json',
  		mimeType: 'application/json',
  		success: function (data) {
  			if(data.Grant_Access===true){
  				$('#bio_change_but').removeClass('hidden');
  				$('#bio_save_but').addClass('hidden');
  				$('#bio_text').removeClass('hidden').html(bio);
  				$('#btn_save').removeClass('hidden');
  				// $('#bio').addClass('hidden').prop('disabled', false).focus().click();
  				var data1 = {
  						message: 'Your location has been updated',
  						timeout: 2000
  				};
  				showsnackbar(data1.message);
  			}else{
  				var data1 = {
  						message: 'Apologies! Your bio couldn\'t be updated at the moment.</br>Please try again later',
  						timeout: 2000
  				};
  				showsnackbar(data1.message);
  			}
  		}
  	});
	}
});


$("#dob_change_but").click(function () {
	$('#dob-change-alert').removeClass("hidden");
	console.log("dob_change_but click ")
	var obj = {};
	obj["testid"]=5;
	obj["tableid"]=2;
	obj["channelid"]=channelid;
	$.ajax({
		type: "POST",
		url: "userPreferences",
		dataType: 'json',
		data: JSON.stringify(obj),
		cache: false,
		contentType: 'application/json',
		mimeType: 'application/json',
		success: function (data) {
			console.log("change dob data= ", data)
			if(data.Grant_Access===true){
				console.log("change dob---")
				$('#btn_save').addClass('hidden');
				$('#dob_change_but').addClass('hidden');
				$('#dob_save_but').removeClass('hidden');
				$('#dob_text').addClass('hidden');
				$('#dob').removeClass('hidden').prop('disabled', false)
//				.focus().click();
			}else{
				console.log("show apologies msg---")
				if(data.mess !== undefined){
					var data1 = {
							message: 'Apologies! you can only change year setting one in 7 Days.<br>Please try after ' + data.mess + '.',
							timeout: 2000
					};
					showsnackbar(data1.message);
				}else{
					var data1 = {
							message: 'Apologies! you can only change year setting one in 7 Days',
							timeout: 2000
					};
					showsnackbar(data1.message);
				}
			}
		}
	});
});


$("#dob_change_but").click(function () {
	$('#dob-change-alert').removeClass("hidden");
	console.log("dob_change_but click ")
	var obj = {};
	obj["testid"]=5;
	obj["tableid"]=2;
	obj["channelid"]=channelid;
	$.ajax({
		type: "POST",
		url: "userPreferences",
		dataType: 'json',
		data: JSON.stringify(obj),
		cache: false,
		contentType: 'application/json',
		mimeType: 'application/json',
		success: function (data) {
			console.log("change dob data= ", data)
			if(data.Grant_Access===true){
				console.log("change dob---")
				$('#btn_save').addClass('hidden');
				$('#dob_change_but').addClass('hidden');
				$('#dob_save_but').removeClass('hidden');
				$('#dob_text').addClass('hidden');
				$('#dob').removeClass('hidden').prop('disabled', false)
//				.focus().click();
			}else{
				console.log("show apologies msg---")
				if(data.mess !== undefined){
					var data1 = {
							message: 'Apologies! you can only change year setting one in 7 Days.<br>Please try after ' + data.mess + '.',
							timeout: 2000
					};
					showsnackbar(data1.message);
				}else{
					var data1 = {
							message: 'Apologies! you can only change year setting one in 7 Days',
							timeout: 2000
					};
					showsnackbar(data1.message);
				}
			}
		}
	});
});

$("#country_save_but").click(function () {
	country = $('input[name="country"]').val();
	if (country === undefined || country === "" || country == "null") {
		$('input[name="country"]').focus();
		$('#country_sec').addClass('error');
		setTimeout(function () {
			$('#country_sec').removeClass('error');
		}, 5000);
		var data1 = {
				message: 'Please, select your locality and country',
				timeout: 3000
		};
		showsnackbar(data1.message);
	} else{
		var cty=$('input[name="country"]').val();
	country = $('input[name="country"]').val() + "$#$" + locality + "$#$" + countr + "$#$" + postal_code + "$#$" + latlng;
	var obj = {};
	obj["testid"]=7;
	obj["country"]=country;
	obj["channelid"]=channelid;
	$.ajax({
		type: "POST",
		url: "userPreferences",
		dataType: 'json',
		data: JSON.stringify(obj),
		cache: false,
		contentType: 'application/json',
		mimeType: 'application/json',
		success: function (data) {
			if(data.Grant_Access===true){
				$('#country_change_but').removeClass('hidden');
				$('#country_save_but').addClass('hidden');
				$('#country_text').removeClass('hidden').html(cty);
				$('#btn_save').removeClass('hidden');
				$('#country').addClass('hidden').prop('disabled', false).focus().click();
				var data1 = {
						message: 'Your location has been updated',
						timeout: 2000
				};
				showsnackbar(data1.message);
			}else{
				var data1 = {
						message: 'Apologies! Your country couldn\'t be updated at the moment.</br>Please try again later',
						timeout: 2000
				};
				showsnackbar(data1.message);
			}
		}
	});
	}
});

$("#dob_save_but").click(function () {
	var d = new Date();
	var dob = $('#dob').val();
	if(dob != 0 && dob > 1947 && dob < d.getFullYear()-10){
	var obj = {};
	obj["testid"]=6;
	obj["dob"]=dob;
	obj["channelid"]=channelid;
	$.ajax({
		type: "POST",
		url: "userPreferences",
		dataType: 'json',
		data: JSON.stringify(obj),
		cache: false,
		contentType: 'application/json',
		mimeType: 'application/json',
		success: function (data) {
			if(data.Grant_Access===true){
				$('#dob_change_but').removeClass('hidden');
				$('#dob_save_but').addClass('hidden');
				$('#dob_text').removeClass('hidden').html(dob);
				$('#btn_save').removeClass('hidden');
				$('#dob').addClass('hidden').prop('disabled', false).focus().click();

				var data1 = {
						message: 'Bingo!!! your birth year has been updated.',
						timeout: 2000
				};
				showsnackbar(data1.message);
			}else{
				var data1 = {
						message: 'Apologies! Your birth year couldn\'t be updated at the moment.</br>Please try again later',
						timeout: 2000
				};
				showsnackbar(data1.message);
			}
		}
	});
	}else{
		var data1 = {
				message: 'Apologies! Your birth year isn\'t be correct.</br>Please try again',
				timeout: 2000
		};
		showsnackbar(data1.message);
	}
});

//$('#country').click(function () {
function changeLocation() {
	console.log("change DOB");
	$('#location-change-alert').removeClass("hidden");
	$('input[name="country"]').val('').focus();
} ;


var input = document.getElementById('country');
var autocomplete = new google.maps.places.Autocomplete(input);
google.maps.event.addListener(autocomplete, 'place_changed', function () {
	var place = autocomplete.getPlace();
	latlng = place.geometry.location.lat() + "," + place.geometry.location.lng();
	var add = place.address_components;
	for (x in add) {
		if (add[x].types[0] == "locality" && add[x].types[1] == "political") {
			locality = add[x].long_name;
		}
		if (add[x].types[0] == "country" && add[x].types[1] == "political") {
			countr = add[x].long_name;
		}
		if (add[x].types[0] == "postal_code") {
			postal_code = add[x].long_name;
		}
	}
})

$('#radioFNHide').click(function () {
	$('#user_name').removeClass('hidden');
	$('#username').focus();
});

$('#radioFNFull, #radioFNFirst').click(function () {
	$('#user_name').addClass('hidden');
	$('input[name="succeedUsername"], input[name="username"]').val('');
	$('input[name="username"]').removeClass("red").removeClass('green');
	$("#ImageUsername").addClass('hidden');
	$('#LoadingImageUsername').attr('src', '');
});

$('#followyes').click(function () {
	$('#shareprof').removeClass('hidden');
	$('#social-prof').focus();
});

$('#followno').click(function () {
	$('#shareprof').addClass('hidden');
});

function onErrorfunction(g) {
	if (g != "female") {
		$('#imgprofile').attr("src", "https://s3-us-west-2.amazonaws.com/ng-utilities-images/demo_boy.png"); //  https://img.neargroup.in/120x120/forcesize/demo_boy
	} else {
		$('#imgprofile').attr("src", "https://s3-us-west-2.amazonaws.com/ng-utilities-images/demo_girl.png");
	}

}

/*function readURL(input) {
	alert('aaaaa');
	if (input.files && input.files[0]) {
		alert('bbbbbb');
		var reader = new FileReader();
		alert('iiiiiiii');
		$('#uploadimg').attr("src", "images/ezgif.gif");
		$("#pic_sec, #btn_save").addClass('pointerdisabled');
		$('#btn_save').html('wait...');
		alert('ppppppp');
		reader.onload = function (e) {
			alert('ccccccc');
			$('#imgprofile').attr('src', e.target.result);
			var imgtobase64 = e.target.result.split(',')[1];
			$.ajax({
				"async": true,
				"crossDomain": true,
				"url": "https://vision.googleapis.com/v1/images:annotate?alt=json&key=AIzaSyDX2g336vJpmvGwGERnPsjOh5gvG9sPCJg",
				"method": "POST",
				"headers": {
					"content-type": "application/json; charset=UTF-8",
					"cache-control": "no-cache",
				},
				"data": "{\"requests\":[{\"image\":{\"content\":\"" + imgtobase64 + "\"},\"features\":[{\"type\":\"SAFE_SEARCH_DETECTION\",\"maxResults\":1}]}]}",
			}).done(function (response) {
				alert('eeeeee');
				var res = response.responses[0];
				if (res.safeSearchAnnotation.adult != 'POSSIBLE' && res.safeSearchAnnotation.adult != 'LIKELY' && res.safeSearchAnnotation.adult != 'VERY_LIKELY'
					&& res.safeSearchAnnotation.violence != 'POSSIBLE' && res.safeSearchAnnotation.violence != 'LIKELY' && res.safeSearchAnnotation.violence != 'VERY_LIKELY') {
					reader.readAsDataURL(input.files[0]);
					var date = new Date();
					var profile = "profile_";
					var name = channelid.toLowerCase() + "_" + date.getTime();
					var postimage = $('#browseimage')[0].files[0];
					var form1 = new FormData();
					form1.append('postimage', postimage);
					form1.append('name', profile + name);
					$.ajax({
						url: "https://img.neargroup.in/backend.php",
						type: "POST",
						"async": true,
						"crossDomain": true,
						cache: false,
						contentType: false,
						processData: false,
						data: form1,
						success: function (data) {
							if (data.status == "OK") {
								var obj = {
										"testid": "1",
										"channelid": channelid,
										"image_name": name
								};
								$.ajax({
									type: "POST",
									url: "userPreferences",
									dataType: 'json',
									"async": true,
									"crossDomain": true,
									data: JSON.stringify(obj),
									cache: false,
									contentType: 'application/json',
									mimeType: 'application/json',
									success: function (data) {
										if ("image_save" in data) {
											if (blurimage == 2) {
												$("#imgprofile").attr("src", "https://img.neargroup.in/project/60x60/forcesize/profile_" + name);
											} else {
												$("#imgprofile").attr("src", "https://img.neargroup.in/project/60x60/forcesize/pixelate_3/profile_" + name);
											}
											var data1 = {
													message: 'Your profile image has been uploaded',
													timeout: 2000
											};
											showsnackbar(data1.message);
										}
									}
								});
							}
						}
					});
				} else {
					var data1 = {
							message: 'Sorry!!! You can\'t upload sexual/explicit image<br>Try uploading again',
							timeout: 2000
					};
					showsnackbar(data1.message);
				}
				$("#pic_sec, #btn_save").removeClass('pointerdisabled');
				$('#btn_save').html('Save');
				$('#uploadimg').attr("src", "");
			});
		};
	}
}*/
$('#imgprofile-1, #imgprofile-2, #imgprofile-3, #imgprofile-4').click(function(){
	$("#imgprofile").attr("src",($(this).attr('src')).replace('60x60', '120x120'));
});
$('#img-0, #img-1, #img-2, #img-3, #img-4').click(function(){
	console.log("upload clickeddd!!s")
	if($('#'+$(this).attr('id')).hasClass('uploadcancel')){
		if (gender != "female") {
			$('#imgprofile-'+$(this).attr('id').split('-')[1]).attr('src','https://s3-us-west-2.amazonaws.com/ng-utilities-images/demo_boy.png'); // https://img.neargroup.in/120x120/forcesize/demo_boy
        } else {
        	$('#imgprofile-'+$(this).attr('id').split('-')[1]).attr('src','https://s3-us-west-2.amazonaws.com/ng-utilities-images/demo_girl.png'); //https://img.neargroup.in/60x60/forcesize/demo_girl
        }
		$('#'+$(this).attr('id')).removeClass('uploadcancel').html('add_box');
		if(blurimage==2){
			$("#imgprofile").attr("src","https://img.neargroup.in/project/120x120/forcesize/profile_" + channelid);
		}else{
			$("#imgprofile").attr("src","https://img.neargroup.in/project/120x120/forcesize/pixelate_6/profile_" + channelid);
		}
		var obj = {
				"testid": "8",
				"channelid": channelid,
				"image_no" : $(this).attr('id').split('-')[1]
		};
		$.ajax({
			type: "POST",
			url: "userPreferences",
			dataType: 'json',
			"async": true,
			"crossDomain": true,
			data: JSON.stringify(obj),
			cache: false,
			contentType: 'application/json',
			mimeType: 'application/json',
			success: function(data) {

			}
		});
	}else{
		$('#browseimage-'+$(this).attr('id').split('-')[1]).click();
	}
});

//new upload image to s3
var IdentityPoolId = 'us-west-2:abe76bd2-6112-4382-9501-1bc0e850ab90';

AWS.config.update({
    region: 'us-west-2',
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});

var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {
        Bucket: 'ng-image'
    }
});

////

function uploadToS3(file, key, callback) {
	console.log("uploadPhoto s3 files= ", file)
//	if(face_check == false) {
//		var key = 'profile_'+channelId
//	} else {
//		var key = channelId
//	}

  console.log("s3 obj= " ,{
    Key: key,
    Body: file,
    ContentType: file.type,
    ACL: 'public-read'
  })
  
    s3.putObject({
        Key: key,
        Body: file,
        ContentType: file.type,
        ACL: 'public-read'
    }, function(err, data) {
        if (err) {
        	console.log("s3 upload error= ", err)
            return  callback(true);     //alert('There was an error uploading your photo: ', err.message);
        }
        console.log("success data= ", data);
    //Notify the api with new image
        //alert('Successfully uploaded photo. ', data);
        
       return callback(false, key)
        
        
    });
}

function uploadFinalToS3(imageFile, key, callback) {
	console.log("in uploadFinalToS3 ", key)
	var final_key = 'profile_' + key
	console.log("imageFile= ", imageFile);
//	var imageFile = $('#'+$(input).attr('id'))[0].files[0];
	/* The following example copies an object from one bucket to another. */

//	 var params = {
//	  Bucket: "ng-image", 
//	  CopySource: "ng-image/"+key, 
//	  Key: final_key
//	 };
	
	var params = {
			
	}
//	s3.copyObject
	s3.putObject({
        Key: final_key,
        Body: imageFile,
        ContentType: imageFile.type,
        ACL: 'public-read'
    }, function(err, data) {
	   if (err) {
		callback(true, null)
	   console.log("copyObject error" ,err, err.stack); // an error occurred
	   }
	   else {
		   callback(false, true)
		   console.log("copyObject -- " , data);           // successful response
	   }  
	   
	   
	   /*
	   data = {
	    CopyObjectResult: {
	     ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
	     LastModified: <Date Representation>
	    }
	   }
	   */
	 });
}

function readURL(input) {
	console.log("read image input= " , input, input.files)
	if (input.files && input.files[0]) {
		var reader = new FileReader();
//		$('#img-'+$(input).attr('id').split('-')[1]).addClass('hidden');
		$('#uploadimg-'+$(input).attr('id').split('-')[1]).removeClass('hidden').attr("src","images/ezgif.gif");
		$("#pic_sec, #btn_save").addClass('pointerdisabled');
		$('#btn_save').html('wait...');
		reader.onload = function(e) {
//			$('#imgprofile').attr('src', e.target.result);
			$("#imgprofile-"+$(input).attr('id').split('-')[1]).attr('src', e.target.result);
			
			var imgtobase64=e.target.result.split(',')[1];
			$.ajax({
				"async": true,
				"crossDomain": true,
				"url": "https://vision.googleapis.com/v1/images:annotate?alt=json&key=AIzaSyDX2g336vJpmvGwGERnPsjOh5gvG9sPCJg",
				"method": "POST",
				"headers": {
					"content-type": "application/json; charset=UTF-8",
					"cache-control": "no-cache",
				},
				"data": "{\"requests\":[{\"image\":{\"content\":\""+imgtobase64+"\"},\"features\":[{\"type\":\"SAFE_SEARCH_DETECTION\",\"maxResults\":1}]}]}",
			}).done(function (response) {
				console.log("1 done");
				var res=response.responses[0];

				if(res.safeSearchAnnotation.adult!='POSSIBLE' && res.safeSearchAnnotation.adult!='LIKELY' && res.safeSearchAnnotation.adult!='VERY_LIKELY'
					&& res.safeSearchAnnotation.violence!='POSSIBLE' && res.safeSearchAnnotation.violence!='LIKELY' && res.safeSearchAnnotation.violence!='VERY_LIKELY'){

					console.log("pic_upload safe vision")
					var date= new Date();
					var profile="profile_";
					var name = channelid.toLowerCase()+"_"+date.getTime();
					var postimage = $('#'+$(input).attr('id'))[0].files[0];
					console.log("form data = ", postimage);
					var form1 = new FormData();
					form1.append('postimage', postimage);
					form1.append('name', profile + name);
					console.log("form1 = ", profile + name);
//					"async": true,
//					"crossDomain": true,
//					cache: false,

//					processData: false,

//				try {
					
				
					uploadToS3(postimage, name, function(err, faceCheckName) {
					  if(err) {
							//$("#image-upload-fail").removeClass("hidden");
							var data1 = {
									message: 'Sorry, something went wrong. Please try again later.',
									timeout: 2000
							};
							showsnackbar(data1.message);
					  }
					  else {
						
						  console.log("faceCheckName ---- ", faceCheckName)
							var faceCheckUrl = "https://ng-image.s3.us-west-2.amazonaws.com/"+faceCheckName
							
							$.ajax({
							url: "https://face.neargroup.me",
							type: "POST",
	
							contentType: "application/json",
							processData: false,
							data: JSON.stringify({"url": faceCheckUrl}),
							success: function (resp) {
								console.log("face check response ", resp)
								if(resp.faces && resp.faces.length > 0) {
									console.log("found faces !!!")
									
									uploadFinalToS3(postimage, name, function(err, faceCheckName){
										console.log("final image upload to s3 --")
										if(err) {
											var data_1 = {
													message: 'Sorry!!! Something went wrong.',
													timeout: 3000
												};
												showsnackbar(data_1.message)
												$('#uploadimg-'+$(input).attr('id').split('-')[1]).addClass('hidden').attr("src","");
										} else {
											// update image in db
											console.log("update image to db")
											
											//$("#image-upload-fail").addClass("hidden");
											var obj = {
													"testid": "1",
													"channelid": channelid,
													"image_name": name,
													"image_no" : 1,  //$(input).attr('id').split('-')[1]
											};
											$.ajax({
												type: "POST",
												url: "userPreferences",
												dataType: 'json',
												"async": true,
												"crossDomain": true,
												data: JSON.stringify(obj),
												cache: false,
												contentType: 'application/json',
												mimeType: 'application/json',
												success: function(data) {
													console.log("upload done url-- " + "https://s3-us-west-2.amazonaws.com/ng-image/" );
													$('#uploadimg-'+$(input).attr('id').split('-')[1]).addClass('hidden').attr("src","");
													if ("image_save" in data) {
//														if(blurimage==2){
//															console.log("setting image 2 ")
//															$("#imgprofile").attr("src","https://s3-us-west-2.amazonaws.com/ng-image/" + picName); //https://img.neargroup.in/project/120x120/forcesize/profile_
//															$("#imgprofile-"+$(input).attr('id').split('-')[1]).attr("src", "https://s3-us-west-2.amazonaws.com/ng-image/" + picName);  //https://img.neargroup.in/project/60x60/forcesize/profile_
//														}else{
//															console.log("setting image 1 ")
//															$("#imgprofile").attr("src","https://s3-us-west-2.amazonaws.com/ng-image/" + picName);  //https://img.neargroup.in/project/120x120/forcesize/pixelate_6/profile_
//															$("#imgprofile-"+$(input).attr('id').split('-')[1]).attr("src", "https://s3-us-west-2.amazonaws.com/ng-image/" + picName); //https://img.neargroup.in/project/60x60/forcesize/pixelate_3/profile_
//														}
														var data1 = {
																message: 'Your profile image has been uploaded',
																timeout: 2000
														};
														showsnackbar(data1.message);
//														$('#img-'+$(input).attr('id').split('-')[1]).addClass('uploadcancel').removeClass('hidden').html('clear');
														
														$("#pic_sec, #btn_save").removeClass('pointerdisabled');
														$('#btn_save').html('Save');
													}
												}
											});
										}
										// delete temp image from s3
										  var params = {
												  Bucket: "ng-image", 
												  Key: name
												 };
										  s3.deleteObject(params, function(err, data) {
												   if (err) {
													   console.log("s3 delete temp image err= ", err, err.stack); // an error occurred   
												   }
												   else {
													   console.log("s3 delete temp image success-- ", data);           // successful response
												   }    
												   
										  });
									})
									
								} else {
									console.log("No faces !!")
									var data_1 = {
										message: 'Sorry!!! You image does not have a face<br>Try uploading again',
										timeout: 3000
									};
									showsnackbar(data_1.message)
									$('#uploadimg-'+$(input).attr('id').split('-')[1]).addClass('hidden').attr("src","");
									$("#pic_sec").removeClass('pointerdisabled');
									
									// delete temp image from s3
									  var params = {
											  Bucket: "ng-image", 
											  Key: name
											 };
									  s3.deleteObject(params, function(err, data) {
											   if (err) {
												   console.log("s3 delete temp image err= ", err, err.stack); // an error occurred   
											   }
											   else {
												   console.log("s3 delete temp image success-- ", data);           // successful response
											   }    
											   
									  });
								}
								
							},
							error: function(jqXHR, exception) {
								console.log("face NOT found..  ")
								$("#pic_sec, #btn_save").removeClass('pointerdisabled');
							}
							})
						  
//						  console.log("update image to db")
//						
//						//$("#image-upload-fail").addClass("hidden");
//						var obj = {
//								"testid": "1",
//								"channelid": channelid,
//								"image_name": name,
//								"image_no" : 1,  //$(input).attr('id').split('-')[1]
//						};
//						$.ajax({
//							type: "POST",
//							url: "userPreferences",
//							dataType: 'json',
//							"async": true,
//							"crossDomain": true,
//							data: JSON.stringify(obj),
//							cache: false,
//							contentType: 'application/json',
//							mimeType: 'application/json',
//							success: function(data) {
//								console.log("upload done url-- " + "https://s3-us-west-2.amazonaws.com/ng-image/" + picName);
//								if ("image_save" in data) {
////									if(blurimage==2){
////										console.log("setting image 2 ")
////										$("#imgprofile").attr("src","https://s3-us-west-2.amazonaws.com/ng-image/" + picName); //https://img.neargroup.in/project/120x120/forcesize/profile_
////										$("#imgprofile-"+$(input).attr('id').split('-')[1]).attr("src", "https://s3-us-west-2.amazonaws.com/ng-image/" + picName);  //https://img.neargroup.in/project/60x60/forcesize/profile_
////									}else{
////										console.log("setting image 1 ")
////										$("#imgprofile").attr("src","https://s3-us-west-2.amazonaws.com/ng-image/" + picName);  //https://img.neargroup.in/project/120x120/forcesize/pixelate_6/profile_
////										$("#imgprofile-"+$(input).attr('id').split('-')[1]).attr("src", "https://s3-us-west-2.amazonaws.com/ng-image/" + picName); //https://img.neargroup.in/project/60x60/forcesize/pixelate_3/profile_
////									}
//									var data1 = {
//											message: 'Your profile image has been uploaded',
//											timeout: 2000
//									};
//									showsnackbar(data1.message);
////									$('#img-'+$(input).attr('id').split('-')[1]).addClass('uploadcancel').removeClass('hidden').html('clear');
//									$('#uploadimg-'+$(input).attr('id').split('-')[1]).addClass('hidden').attr("src","");
//									$("#pic_sec, #btn_save").removeClass('pointerdisabled');
//									$('#btn_save').html('Save');
//								}
//							}
//						});
							
							
//						} else  {
//							console.log("faceCheckName ---- ", faceCheckName)
//							var faceCheckUrl = "https://ng-image.s3.us-west-2.amazonaws.com/"+faceCheckName
//							
//							$.ajax({
//							url: "https://face.neargroup.me",
//							type: "POST",
//	
//							contentType: "application/json",
//							processData: false,
//							data: JSON.stringify({"url": faceCheckUrl}),
//							success: function (resp) {
//								console.log("face check response ", resp)
//								if(resp.faces && resp.faces.length > 0) {
//									console.log("found faces !!!")
//								} else {
//									console.log("No faces !!")
//									
//									
//								}
//							}
//							})
								
								
						}
					  
					  
					  
					});
//				} catch(e){
//				 console.log('catch error- ', e)	
//				}	
					
					
					
//					$.ajax({
//						url: "https://img.neargroup.in/backend.php",
//						type: "POST",
//
//						contentType: "application/x-www-form-urlencoded",
//						processData: false,
//						data: form1,
//						success: function (data) {
//							console.log("2 done");
//
//							console.log("upload response = ", data)
//
//							if (data.status=="OK") {
//								var obj = {
//										"testid": "1",
//										"channelid": channelid,
//										"image_name": name,
//										"image_no" : $(input).attr('id').split('-')[1]
//								};
//								$.ajax({
//									type: "POST",
//									url: "userPreferences",
//									dataType: 'json',
//									"async": true,
//									"crossDomain": true,
//									data: JSON.stringify(obj),
//									cache: false,
//									contentType: 'application/json',
//									mimeType: 'application/json',
//									success: function(data) {
//										console.log("3 done");
//										if ("image_save" in data) {
//											if(blurimage==2){
//												$("#imgprofile").attr("src","https://img.neargroup.in/project/120x120/forcesize/profile_" + name);
//												$("#imgprofile-"+$(input).attr('id').split('-')[1]).attr("src", "https://img.neargroup.in/project/60x60/forcesize/profile_"+name);
//											}else{
//												$("#imgprofile").attr("src","https://img.neargroup.in/project/120x120/forcesize/pixelate_6/profile_" + name);
//												$("#imgprofile-"+$(input).attr('id').split('-')[1]).attr("src", "https://img.neargroup.in/project/60x60/forcesize/pixelate_3/profile_"+name);
//											}
//											var data1 = {
//													message: 'Your profile image has been uploaded',
//													timeout: 2000
//											};
//											showsnackbar(data1.message);
//											$('#img-'+$(input).attr('id').split('-')[1]).addClass('uploadcancel').removeClass('hidden').html('clear');
//											$('#uploadimg-'+$(input).attr('id').split('-')[1]).addClass('hidden').attr("src","");
//											$("#pic_sec, #btn_save").removeClass('pointerdisabled');
//											$('#btn_save').html('Save');
//										}
//									}
//								});
//							}
//						}
//					});

				}else{
					var data1 = {
							message: 'Sorry!!! You can\'t upload sexual/explicit image<br>Try uploading again',
							timeout: 2000
					};
					showsnackbar(data1.message)
					$('#uploadimg-'+$(input).attr('id').split('-')[1]).addClass('hidden').attr("src","");
					$("#pic_sec").removeClass('pointerdisabled');
				}

			});
		};
		reader.readAsDataURL(input.files[0]);
	}
}

//$("#btndeactivate").click(function () {
function deactivate() {
	console.log("deactivate")
	var obj = {
			"testid": "2",
			"channelid": channelid
	};
	OpenModal("Deactivate", "Are you sure, you want to deactivate account from NEARGROUP?");
	$('#btnok').click(function () {
		CloseModal();
		$.ajax({
			type: "POST",
			url: "userPreferences",
			dataType: 'json',
			data: JSON.stringify(obj),
			cache: false,
			contentType: 'application/json',
			mimeType: 'application/json',
			success: function (data) {
				$body.removeClass("loading");
				if (data) {
					if ("deactivate" in data) {
						var data1 = {
								message: 'Deactivated Successfully!',
								timeout: 2000
						};
						showsnackbar(data1.message);
						window.location.replace("myprofile.html?channelid=" + encodeURIComponent(getUrlParameter("channelid")));
					}
				}
			}
		});
	});
	
	$('#btncancel').click(function () {
		CloseModal();
	});

};

//$("#btnactivate").on('click',function () {

	function activateAccount() {
	var obj = {
			"testid": "3",
			"channelid": getUrlParameter("channelid")
	};
	$.ajax({
		type: "POST",
		url: "userPreferences",
		dataType: 'json',
		data: JSON.stringify(obj),
		cache: false,
		contentType: 'application/json',
		mimeType: 'application/json',
		success: function (data) {
			$body.removeClass("loading");
			if (data) {
				if ("activate" in data) {
					var data1 = {
							message: 'Activate Successfully!',
							timeout: 2000
					};
					showsnackbar(data1.message);
					window.location.replace("editprofile.html?channelid=" + encodeURIComponent(getUrlParameter("channelid")) + "&callback=YesProceed&close=123");
				}
			}
		}
	});
}
//});


function showsnackbar(message) {
	var x = document.getElementById("toast-message")
	x.innerHTML = message;
	x.className = "show";
	setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function OpenModal(title, content) {
	$("#overlayContact").show();
	$("#myModal").find("#model_title_text").html(title);
	$("#myModal").find("#model_t_text").html(content);
	$("#myModal").css({ "top": "-200px", "display": "block" });
	$("#myModal").animate({ "top": "35px" }, "100");
}
function CloseModal() {
	$("#overlayContact").hide();
	$("#myModal").hide();
}

function socialDeactivate(tbname){
	OpenModal("Remove", "Do you want to remove your social account?");
	$('#btnok').click(function () {
		CloseModal();
		if(tbname!=''){
		$.ajax({
			type: "POST",
			url: "userPreferences",
			dataType: 'json',
			data: JSON.stringify({"channelid": channelid, "testid": "4", "tbname": tbname}),
			cache: false,
			contentType: 'application/json',
			mimeType: 'application/json',
			success: function (data) {
				if (data) {
					if ("deactivate" in data) {
						var data1 = {
								message: 'Social Account Deactivated Successfully!',
								timeout: 2000
						};
						showsnackbar(data1.message);
						window.location.replace("editprofile.html?channelid=" + encodeURIComponent(getUrlParameter("channelid")));
					}
				}
			}
		});
		}
	});
	$('#btncancel').click(function () {
		CloseModal();
	});
}

function showBioEdit(){
	$("#bio_test_input").addClass('hidden');
	$("#bio_input").removeClass('hidden');
}


/*|| ($('input[name="blurimage"]:checked').length <= 0)
 * || ($('input[name="ms"]:checked').length <= 0)
			|| ($('input[name="firstname"]:checked').length <= 0)
			|| ($('input[name="want-ng"]:checked').length <= 0)
			|| ($('input[name="Notification"]:checked').length <= 0)
			|| ($('input:checkbox[name="advices"]:checked').map(function () { return this.value; }).get().length <= 0)
			|| ($('input:checkbox[name="languages"]:checked').map(function () { return this.value; }).get().length <= 0)
 *
 *
 *
 *  else if ($('input[name="matchgender"]:checked').length <= 0) {
			$('input[name="matchgender"]').focus();
			$('#matchgender_sec').addClass('error');
			setTimeout(function () {
				$('#matchgender_sec').removeClass('error');
			}, 5000);
		} else if ($('input[name="ms"]:checked').length <= 0) {
			$('input[name="ms"]').focus();
			$('#ms_sec').addClass('error');
			setTimeout(function () {
				$('#ms_sec').removeClass('error');
			}, 5000);
		} else if ($('input[name="want-ng"]:checked').length <= 0) {
			$('input[name="want-ng"]').focus();
			$('#wantNG_sec').addClass('error');
			setTimeout(function () {
				$('#wantNG_sec').removeClass('error');
			}, 5000);
		} else if ($('input[name="Notification"]:checked').length <= 0) {
			$('input[name="Notification"]').focus();
			$('#notification_sec').addClass('error');
			setTimeout(function () {
				$('#notification_sec').removeClass('error');
			}, 5000);
		} else if ($('input[name="blurimage"]:checked').length <= 0) {
				$('input[name="blurimage"]').focus();
				$('#blurimage_sec').addClass('error');
				setTimeout(function () {
					$('#blurimage_sec').removeClass('error');
				}, 5000);
			}else if ($('input:checkbox[name="advices"]:checked').map(function () { return this.value; }).get().length <= 0) {
			$('#advices_sec').focus().addClass('error');
			setTimeout(function () {
				$('#advices_sec').removeClass('error');
			}, 5000);
		} else if ($('input:checkbox[name="languages"]:checked').map(function () { return this.value; }).get().length <= 0) {
			$('#languages_sec').focus().addClass('error');
			setTimeout(function () {
				$('#languages_sec').removeClass('error');
			}, 5000);
		} else if ($('input[name="firstname"]:checked').length <= 0) {
			$('input[name="firstname"]').focus();
			$('#firstname_sec').addClass('error');
			setTimeout(function () {
				$('#firstname_sec').removeClass('error');
			}, 5000);
		}
		var blurimage = $('input[name="blurimage"]:checked').val();
 * obj["blurimage"] = blurimage;
 * var succeed = $('input[name="succeed"]').val();
	var country = $('input[name="country"]').val();
 * else if (country === undefined || country === "") {
		$('input[name="country"]').focus();
		$('#country_sec').addClass('error');
		setTimeout(function () {
			$('#country_sec').removeClass('error');
		}, 5000);
		var data1 = {
				message: 'Please, select your locality and country',
				timeout: 3000
		};
		showsnackbar(data1.message);
	} else if (succeed === 'failed' || (($('input[name="follow"]:checked').val() == 'yes') && ($('input[name="social-prof"]').val() == '')) || ($('input[name="follow"]:checked').length <= 0)) {
		$('input[name="social-prof"]').focus();
		$('#follow_sec').addClass('error');
		setTimeout(function () {
			$('#follow_sec').removeClass('error');
		}, 5000);
		var data1 = {
				message: 'This link is invalid. Please, provide a valid one',
				timeout: 3000
		};
		showsnackbar(data1.message);
	}
 * country = $('input[name="country"]').val() + "$#$" + locality + "$#$" + countr + "$#$" + postal_code + "$#$" + latlng;
 * var shareLink = $('input[name="shareLink"]:checked').val();
 * obj["shareLink"] = shareLink;
 * /*else if (succeedmobile === 'failed' ){
		$('input[name="mobile"]').focus();
		$('#mobile_sec').addClass('error');
		$("#error-msg").removeClass("hidden");
		setTimeout(function () {
			$('#mobile_sec').removeClass('error');
			$("#error-msg").addClass("hidden");
		}, 5000);
		var data1 = {
				message: 'This contanct number is invalid. Please, provide a valid one',
				timeout: 3000
		};
		showsnackbar(data1.message);
	}
	else if($('#feet').val()<3 && $('#feet').val()>7 || $('#inch').val()<0 && $('#inch').val()>11){
		var data1 = {
				message: 'This height is invalid. Please, provide a valid one',
				timeout: 3000
		};
		showsnackbar(data1.message);
	}
	else if (succeedUsername === 'failed' || (($('input[name="firstname"]:checked').val() == '2') && ($('input[name="username"]').val() == '')) || ($('input[name="firstname"]:checked').length <= 0)) {
		$('#firstname_sec').focus();
		$('#firstname_sec').addClass('error');
		setTimeout(function () {
			$('#firstname_sec').removeClass('error');
		}, 5000);
		var data1 = {
				message: 'Please provide Username',
				timeout: 3000
		};
		showsnackbar(data1.message);
	}
	var distance = $('input[name="distance"]').val();
		var besttrait = $('input[name="best-trait"]:checked').val();
		var traitchatmate = $('input[name="trait-chatmate"]:checked').val();
		var notification = $('input[name="Notification"]:checked').val();
		var mobile = $("#mobile").intlTelInput("getNumber");
		var ps = $('input[name="ps"]:checked').val();
		var bodytype = $('input[name="bodytype"]:checked').val();
		var feet=$('#feet').val()*30.48;
		var inch=$('#inch').val()*2.54;
		var height =feet+inch;
		var firstname=$('input[name="firstname"]:checked').val();
		var username="";
		if ($('input[name="firstname"]:checked').val() == '2') {
			username = $('input[name="username"]').val();
		}
		var advices_hashtag = '';
		var txt = $('input:checkbox[name="advices"]:checked').map(function () {
			return this.value;
		}).get();
		var len = txt.length;
		if (len > 0) {
			advices_hashtag = txt[0];
			var i;
			for (i = 1; i < len; i++) {
				advices_hashtag += ", ";
				advices_hashtag = advices_hashtag + txt[i];
			}
		}
		var languages = '';
		var txt = $('input:checkbox[name="languages"]:checked').map(function () {
			return this.value;
		}).get();
		var len = txt.length;
		if (len > 0) {
			languages = txt[0];
			var i;
			for (i = 1; i < len; i++) {
				languages += ", ";
				languages = languages + txt[i];
			}
		}
		obj["distance"] = distance;
		obj["besttrait"] = besttrait;
		obj["traitchatmate"] = traitchatmate;
		obj["notification"] = notification;
		obj["mobile"] = mobile;
		obj["advices_hashtag"] = advices_hashtag;
		obj["username"] = username;
		obj["firstname"] = firstname;
		obj["ps"] = ps;
		obj["bodytype"] = bodytype;
		obj["height"] = height;


 */
