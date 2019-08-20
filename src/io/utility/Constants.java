package io.utility;

import java.util.HashMap;
import java.util.Map;

import javax.xml.bind.DatatypeConverter;

public class Constants {

	  public static class DBAUTH
	    {

	        public static final String DB_URL = "jdbc:mysql://m1.c40vtcybbb0p.us-west-2.rds.amazonaws.com:1893/ng"; //NEW
	        public static final String USER ="iuwesas";
	        public static final String PASS ="jnsk(bnji&ji^frbn";

//	        public static final String REDIS_IP_CHAT_NOW = "redis://ec2-54-71-99-52.us-west-2.compute.amazonaws.com";  //testing chat now
//	        public static final String DEFAULT_PORT_CHAT_NOW = "6379";  //testing chat now
	    public static final String REDIS_IP_CHAT_NOW="redis://ng-pro.e2ytak.0001.usw2.cache.amazonaws.com"; //live chat now
	        public static final String DEFAULT_PORT_CHAT_NOW = "3306"; //live chat now

//	       public static final String REDIS_CRON_IP="redis://ng-cron.e2ytak.0001.usw2.cache.amazonaws.com"; //live cron
//	       public static final String REDIS_CRON_PORT="6379"; //live cron

	        public static final String REDIS_CRON_IP = "redis://ec2-54-71-99-52.us-west-2.compute.amazonaws.com"; //local cron
//	        public static final String REDIS_CRON_IP = "redis://127.0.0.1"; //local cron
	        public static final String REDIS_CRON_PORT = "6379"; //local cron

//			public static final String REDIS_GET_STORY_IP = "redis://ec2-54-71-99-52.us-west-2.compute.amazonaws.com"; //local story
//	        public static final String REDIS_GET_STORY_IP2 = "ec2-54-71-99-52.us-west-2.compute.amazonaws.com"; //local story
//			public static final String REDIS_GET_STORY_PORT = "6379"; //local story
//	        public static final int REDIS_GET_STORY_PORT2 = 6379;


//	        public static final String REDIS_GET_STORY_IP = "redis://ng-stories.e2ytak.clustercfg.usw2.cache.amazonaws.com"; //live story
//	        public static final String REDIS_GET_STORY_IP2 = "ng-stories.e2ytak.clustercfg.usw2.cache.amazonaws.com"; //local story//		public static final int REDIS_GET_STORY_PORT2 = 6379;
//	        public static final String REDIS_GET_STORY_PORT = "6379"; //live story
//	        public static final int REDIS_GET_STORY_PORT2 = 6379;

//			public static final String REDIS_BUCKET_STORY_IP = "redis://ec2-54-71-99-52.us-west-2.compute.amazonaws.com"; //local story
//			public static final String REDIS_BUCKET_STORY_PORT = "6379"; //local story


//	        public static final String REDIS_BUCKET_STORY_IP = "redis://ngcore-redis.e2ytak.0001.usw2.cache.amazonaws.com"; //live story
//	        public static final String REDIS_BUCKET_STORY_PORT = "6379"; //live story

	        public static boolean isLocal = false;
	        public static boolean isLog = true;
	        public static boolean isCluster = true;



	    }

	    public static class APIKEY
	    {
	        //		public static final String upgradeMyAccountUrl = "https://redirect.neargroup.me/subscription?channelId="; //live

	        public static final String upgradeMyAccountUrl = "https://testredirect.neargroup.me/subscription?channelId="; //tesing
	        public static final String deleteMyAccountURL = "https://test.neargroup.me/ng4/deleteMyAccount"; //tesing

	        public static final String credentialFileAppFirebase = "/opt/tomcat9/webapps/firebase-app.json"; //testing

	        //        public static final String credentialFileWebBot = "/opt/tomcat9/webapps/firebase-app.json"; //testing
	        public static final String credentialFileWebBot = "/opt/tomcat9/webapps/web-bot.json"; //live
	        public static final String credentiallsFileUrl = "/opt/tomcat9/webapps/rcs-cred.json"; //live
	        //        public static final String credentiallsFileUrl = "E:\\rcs-cred.json"; //testing
	        public static String countryCodePath = "{\r\n\"Afghanistan\":\"+93\",\r\n\"Albania\":\"+355\",\r\n\"Algeria\":\"+213\",\r\n\"AmericanSamoa\":\"+1 684\",\r\n\"Andorra\":\"+376\",\r\n\"Angola\":\"+244\",\r\n\"Anguilla\":\"+1 264\",\r\n\"Antigua and Barbuda\":\"+1268\",\r\n\"Argentina\":\"+54\",\r\n\"Armenia\":\"+374\",\r\n\"Aruba\":\"+297\",\r\n\"Australia\":\"+61\",\r\n\"Austria\":\"+43\",\r\n\"Azerbaijan\":\"+994\",\r\n\"Bahamas\":\"+1 242\",\r\n\"Bahrain\":\"+973\",\r\n\"Bangladesh\":\"+880\",\r\n\"Barbados\":\"+1 246\",\r\n\"Belarus\":\"+375\",\r\n\"Belgium\":\"+32\",\r\n\"Belize\":\"+501\",\r\n\"Benin\":\"+229\",\r\n\"Bermuda\":\"+1 441\",\r\n\"Bhutan\":\"+975\",\r\n\"Bosnia and Herzegovina\":\"+387\",\r\n\"Botswana\":\"+267\",\r\n\"Brazil\":\"+55\",\r\n\"British Indian Ocean Territory\":\"+246\",\r\n\"Bulgaria\":\"+359\",\r\n\"Burkina Faso\":\"+226\",\r\n\"Burundi\":\"+257\",\r\n\"Cambodia\":\"+855\",\r\n\"Cameroon\":\"+237\",\r\n\"Canada\":\"+1\",\r\n\"Cape Verde\":\"+238\",\r\n\"Cayman Islands\":\"+ 345\",\r\n\"Central African Republic\":\"+236\",\r\n\"Chad\":\"+235\",\r\n\"Chile\":\"+56\",\r\n\"China\":\"+86\",\r\n\"Christmas Island\":\"+61\",\r\n\"Colombia\":\"+57\",\r\n\"Comoros\":\"+269\",\r\n\"Congo\":\"+242\",\r\n\"Cook Islands\":\"+682\",\r\n\"Costa Rica\":\"+506\",\r\n\"Croatia\":\"+385\",\r\n\"Cuba\":\"+53\",\r\n\"Cyprus\":\"+537\",\r\n\"Czech Republic\":\"+420\",\r\n\"Denmark\":\"+45\",\r\n\"Djibouti\":\"+253\",\r\n\"Dominica\":\"+1 767\",\r\n\"Dominican Republic\":\"+1 849\",\r\n\"Ecuador\":\"+593\",\r\n\"Egypt\":\"+20\",\r\n\"El Salvador\":\"+503\",\r\n\"Equatorial Guinea\":\"+240\",\r\n\"Eritrea\":\"+291\",\r\n\"Estonia\":\"+372\",\r\n\"Ethiopia\":\"+251\",\r\n\"Faroe Islands\":\"+298\",\r\n\"Fiji\":\"+679\",\r\n\"Finland\":\"+358\",\r\n\"France\":\"+33\",\r\n\"French Guiana\":\"+594\",\r\n\"French Polynesia\":\"+689\",\r\n\"Gabon\":\"+241\",\r\n\"Gambia\":\"+220\",\r\n\"Georgia\":\"+995\",\r\n\"Germany\":\"+49\",\r\n\"Ghana\":\"+233\",\r\n\"Gibraltar\":\"+350\",\r\n\"Greece\":\"+30\",\r\n\"Greenland\":\"+299\",\r\n\"Grenada\":\"+1 473\",\r\n\"Guadeloupe\":\"+590\",\r\n\"Guam\":\"+1 671\",\r\n\"Guatemala\":\"+502\",\r\n\"Guinea\":\"+224\",\r\n\"Guinea-Bissau\":\"+245\",\r\n\"Guyana\":\"+595\",\r\n\"Haiti\":\"+509\",\r\n\"Honduras\":\"+504\",\r\n\"Hungary\":\"+36\",\r\n\"Iceland\":\"+354\",\r\n\"India\":\"+91\",\r\n\"Indonesia\":\"+62\",\r\n\"Iraq\":\"+964\",\r\n\"Ireland\":\"+353\",\r\n\"Israel\":\"+972\",\r\n\"Italy\":\"+39\",\r\n\"Jamaica\":\"+1 876\",\r\n\"Japan\":\"+81\",\r\n\"Jordan\":\"+962\",\r\n\"Kazakhstan\":\"+7 7\",\r\n\"Kenya\":\"+254\",\r\n\"Kiribati\":\"+686\",\r\n\"Kuwait\":\"+965\",\r\n\"Kyrgyzstan\":\"+996\",\r\n\"Latvia\":\"+371\",\r\n\"Lebanon\":\"+961\",\r\n\"Lesotho\":\"+266\",\r\n\"Liberia\":\"+231\",\r\n\"Liechtenstein\":\"+423\",\r\n\"Lithuania\":\"+370\",\r\n\"Luxembourg\":\"+352\",\r\n\"Madagascar\":\"+261\",\r\n\"Malawi\":\"+265\",\r\n\"Malaysia\":\"+60\",\r\n\"Maldives\":\"+960\",\r\n\"Mali\":\"+223\",\r\n\"Malta\":\"+356\",\r\n\"Marshall Islands\":\"+692\",\r\n\"Martinique\":\"+596\",\r\n\"Mauritania\":\"+222\",\r\n\"Mauritius\":\"+230\",\r\n\"Mayotte\":\"+262\",\r\n\"Mexico\":\"+52\",\r\n\"Monaco\":\"+377\",\r\n\"Mongolia\":\"+976\",\r\n\"Montenegro\":\"+382\",\r\n\"Montserrat\":\"+1664\",\r\n\"Morocco\":\"+212\",\r\n\"Myanmar\":\"+95\",\r\n\"Namibia\":\"+264\",\r\n\"Nauru\":\"+674\",\r\n\"Nepal\":\"+977\",\r\n\"Netherlands\":\"+31\",\r\n\"Netherlands Antilles\":\"+599\",\r\n\"New Caledonia\":\"+687\",\r\n\"New Zealand\":\"+64\",\r\n\"Nicaragua\":\"+505\",\r\n\"Niger\":\"+227\",\r\n\"Nigeria\":\"+234\",\r\n\"Niue\":\"+683\",\r\n\"Norfolk Island\":\"+672\",\r\n\"Northern Mariana Islands\":\"+1 670\",\r\n\"Norway\":\"+47\",\r\n\"Oman\":\"+968\",\r\n\"Pakistan\":\"+92\",\r\n\"Palau\":\"+680\",\r\n\"Panama\":\"+507\",\r\n\"Papua New Guinea\":\"+675\",\r\n\"Paraguay\":\"+595\",\r\n\"Peru\":\"+51\",\r\n\"Philippines\":\"+63\",\r\n\"Poland\":\"+48\",\r\n\"Portugal\":\"+351\",\r\n\"Puerto Rico\":\"+1 939\",\r\n\"Qatar\":\"+974\",\r\n\"Romania\":\"+40\",\r\n\"Rwanda\":\"+250\",\r\n\"Samoa\":\"+685\",\r\n\"San Marino\":\"+378\",\r\n\"Saudi Arabia\":\"+966\",\r\n\"Senegal\":\"+221\",\r\n\"Serbia\":\"+381\",\r\n\"Seychelles\":\"+248\",\r\n\"Sierra Leone\":\"+232\",\r\n\"Singapore\":\"+65\",\r\n\"Slovakia\":\"+421\",\r\n\"Slovenia\":\"+386\",\r\n\"Solomon Islands\":\"+677\",\r\n\"South Africa\":\"+27\",\r\n\"South Georgia and the South Sandwich Islands\":\"+500\",\r\n\"Spain\":\"+34\",\r\n\"Sri Lanka\":\"+94\",\r\n\"Sudan\":\"+249\",\r\n\"Suriname\":\"+597\",\r\n\"Swaziland\":\"+268\",\r\n\"Sweden\":\"+46\",\r\n\"Switzerland\":\"+41\",\r\n\"Tajikistan\":\"+992\",\r\n\"Thailand\":\"+66\",\r\n\"Togo\":\"+228\",\r\n\"Tokelau\":\"+690\",\r\n\"Tonga\":\"+676\",\r\n\"Trinidad and Tobago\":\"+1 868\",\r\n\"Tunisia\":\"+216\",\r\n\"Turkey\":\"+90\",\r\n\"Turkmenistan\":\"+993\",\r\n\"Turks and Caicos Islands\":\"+1 649\",\r\n\"Tuvalu\":\"+688\",\r\n\"Uganda\":\"+256\",\r\n\"Ukraine\":\"+380\",\r\n\"United Arab Emirates\":\"+971\",\r\n\"United Kingdom\":\"+44\",\r\n\"United States\":\"+1\",\r\n\"Uruguay\":\"+598\",\r\n\"Uzbekistan\":\"+998\",\r\n\"Vanuatu\":\"+678\",\r\n\"Wallis and Futuna\":\"+681\",\r\n\"Yemen\":\"+967\",\r\n\"Zambia\":\"+260\",\r\n\"Zimbabwe\":\"+263\",\r\n\"land Islands\":\"\",\r\n\"Antarctica\":\"null\",\r\n\"Bolivia, Plurinational State of\":\"+591\",\r\n\"Brunei Darussalam\":\"+673\",\r\n\"Cocos (Keeling) Islands\":\"+61\",\r\n\"Congo, The Democratic Republic of the\":\"+243\",\r\n\"Cote d'Ivoire\":\"+225\",\r\n\"Falkland Islands (Malvinas)\":\"+500\",\r\n\"Guernsey\":\"+44\",\r\n\"Holy See (Vatican City State)\":\"+379\",\r\n\"Hong Kong\":\"+852\",\r\n\"Iran, Islamic Republic of\":\"+98\",\r\n\"Isle of Man\":\"+44\",\r\n\"Jersey\":\"+44\",\r\n\"Korea, Democratic People's Republic of\":\"+850\",\r\n\"Korea, Republic of\":\"+82\",\r\n\"Lao People's Democratic Republic\":\"+856\",\r\n\"Libyan Arab Jamahiriya\":\"+218\",\r\n\"Macao\":\"+853\",\r\n\"Macedonia, The Former Yugoslav Republic of\":\"+389\",\r\n\"Micronesia, Federated States of\":\"+691\",\r\n\"Moldova, Republic of\":\"+373\",\r\n\"Mozambique\":\"+258\",\r\n\"Palestinian Territory, Occupied\":\"+970\",\r\n\"Pitcairn\":\"+872\",\r\n\"R\u00E9union\":\"+262\",\r\n\"Russia\":\"+7\",\r\n\"Saint Barth\u00E9lemy\":\"+590\",\r\n\"Saint Helena, Ascension and Tristan Da Cunha\":\"+290\",\r\n\"Saint Kitts and Nevis\":\"+1 869\",\r\n\"Saint Lucia\":\"+1 758\",\r\n\"Saint Martin\":\"+590\",\r\n\"Saint Pierre and Miquelon\":\"+508\",\r\n\"Saint Vincent and the Grenadines\":\"+1 784\",\r\n\"Sao Tome and Principe\":\"+239\",\r\n\"Somalia\":\"+252\",\r\n\"Svalbard and Jan Mayen\":\"+47\",\r\n\"Syrian Arab Republic\":\"+963\",\r\n\"Taiwan, Province of China\":\"+886\",\r\n\"Tanzania, United Republic of\":\"+255\",\r\n\"Timor-Leste\":\"+670\",\r\n\"Venezuela, Bolivarian Republic of\":\"+58\",\r\n\"Viet Nam\":\"+84\",\r\n\"Virgin Islands, British\":\"+1 284\",\r\n\"Virgin Islands, U.S.\":\"+1 340\"\r\n}";
	        				public static final String CONSUMERKEY = "Mmrpft6MN8KuaphR1Q8taUYgZ"; //Testing
	        			    public static final String CONSUMERSECRET = "WS4p6h9B1aYPT6OW5GHZOhqM9FcbmNUc7Sio5aeitF7gjk4OVq"; //Testing
	        			    public static final String TOKEN = "3019655372-jWuTwQJybyHLgkgI8Hsj2waFqEvIYr17ktSbzbq"; //Testing
	        			    public static final String TOKENSECRET = "BLAthTTjdEEdFKxJH2UDcesoNsfncAIj21sSehPQult85"; //Testing


//	        public static final String  CONSUMERKEY = "cGo4ISKNJNoJBMG4j467Pj7YW";//live
//	        public static final String CONSUMERSECRET = "O8wGdHLFGKEgW13H0BvjBYbSTAL5bZr8FV6PYap80BERbAjHAX";//live
//	        public static final String TOKEN = "1003563137772032000-hiXNJO1fdzzkDwpaTPi7HUVjiR5w1S";//live
//	        public static final String TOKENSECRET = "mCX3Yzbip0If7NQZ2l9Sazj6EZKpTR702nmeVHMtJlMEt";//live

	       	        public static final String IMAGEBUCKET = "ng-image"; //live
	        public static final String IMAGEREDISQUEUE = "image_upload_s3"; //live
	        //						public static String viberApiKey = "4614f30b69f4162b-044d6416c59a62e1-097afa221ec5d254";
	        public static String viberApiKey = "458111187db59b1a-c446eb712d2f84a9-ce848584ff7aaedc"; //live
	        public static String accessToken2 = "EAAB4Jc1S3YcBAFCAENCfEXA3dzd3UASI84etJML50VBa2iAXxDmBrPjrugzTGoDDZCxsJywkg1wurHoQtrEMAKIVlw83aRlAAd0uUyNdQLlwHcM9KUZAtWm0vhjFqWk9fTbgnLCrtDL6YMMpZBGbM2BbJohj9EbEMqQVUbD5qPATFusvZBmO";//live
	        public static String accessToken =  "EAAB4Jc1S3YcBAFCAENCfEXA3dzd3UASI84etJML50VBa2iAXxDmBrPjrugzTGoDDZCxsJywkg1wurHoQtrEMAKIVlw83aRlAAd0uUyNdQLlwHcM9KUZAtWm0vhjFqWk9fTbgnLCrtDL6YMMpZBGbM2BbJohj9EbEMqQVUbD5qPATFusvZBmO";//live
	        //		public static String kikConfiguration = "appdemo:0b790372-bff4-48aa-8839-933912a95dcc";
	        public static String kikConfiguration = "near_group:7f3d600a-47fd-40d2-9fcb-7ba5949a2355"; //live
	        public static String encodedConf = DatatypeConverter.printBase64Binary(kikConfiguration.getBytes());
	        public static String kikAuthorization = "Basic : "+encodedConf;
	        public static Map<String, String> pageIdMap = new HashMap<String, String>();
	        public static String lineAuthorization = "Bearer {XdwyFj5aePMbOqY4Q4NCJwsS5GG9QoHxhJha+uiXb9/2r7si/rsg0IV2j02DOf6ptcBxSIj3cLGnLwacD96oWX5wnLehyfF52IaSjuVWMcu02/cxsWYB6Dq1Ez1wknsn6m1f3CbVZvTf4QAx8COn8wdB04t89/1O/w1cDnyilFU=}"; //live
	        public static String telegramToken = "466327201:AAG4q2WfZW_dfLqlqMoPCApBc9zzNB1Jexg"; //live
	        public static String api_keyOTP = "de1341b170a5327bdda276fcf02775bdfc28821b"; //live
	        public static String app_keyOTP = "3ibahe2usi5inu6ykeri"; //live
	        public static final String CHATREMONDERQUEUE = "ng_match"; //live
	        public static final String PIXELATED7URL = "https://hz2wl09cnk.execute-api.us-west-2.amazonaws.com/dev/pix/7?channelId="; //live

	        static
	        {
	            pageIdMap.put("265133530963064", "EAAB4Jc1S3YcBAB3RV8hudrBMkQlY7QyI2zqxNpcMEoSZAgDmaiEAOcO0iFlZAjQixIHL9UWnwbDv8w477zvnVp2ZBxd96KjgAY8VfYU13ZAQvyfR0ACyZCgX6pJ8kIRb5GtmbosApybjy9VXoz8ZBcvTjHpHIpAE7CIGKqH0zfDQZDZD");
	            pageIdMap.put("514682258948702", "EAAB4Jc1S3YcBALgDdhYlEoCHAZCNNzQx3zJstIUB5MULu7CGLmtxnphqhgiYO5pyUgCOoZBpuzOd0prnoJax05EYZCAX4azfnBB2RsG2ix5DjkK0tGDHwj6cZAjhVBawFKZAZCPbKpZAhBqkVKMbKNFoxFsFSDt41ZBGWyEJzr8XGgZDZD");
	            pageIdMap.put("654550628224436", "EAAB4Jc1S3YcBANBMsqEqHru9GSLjKogniABzvL6U7JfCKbw3bKzS91V6OeOjXKM8cZBgyCsc80Vvg4zIw9RZBm1eZBVi4jvtYBhmKWUnQhPR5LdUzZAtwrvAvA8ACROUZC33FezSSujJZAKbJcTnXYZBfGfSK6DaruswxoKbrvDYwZDZD");
	            pageIdMap.put("293795001045046", "EAABZBv0WD1GIBAM5ZAZBwWkG1sZAcQViztxEjzDzqB8tyNNisioSo833C26cxShDy1BZCcPHZAlPwqdusGgm7zj65jtNHeKP8ykcomO6QEOJyHgXawVhilExjY6i7fOcjIhZAdkuwGZCBiGim3uUSNlyWivFtRtHfBW2ZABnlpAPA7seZB5cyEc6IF");
	            pageIdMap.put("322287134931229","EAAVFRt8CsZCMBAIK798DEVpQRBqIpgBZBzfjUDBfGtYwAwUbGZAJkWHdr40e6O0vxuGtTwzqJk7oO744fW5z6XhFzQN6Ynd0Vn9ycDcKz80DiBDjGvPXoCZBTXaw61ZA7qttmFn9qXgGPBziRuxxfcGM9Gz3pEJw0hlQQ0wlmggZDZD");
	            pageIdMap.put("422127521464640", "EAAaTOZBhpap8BAKpUahoEVIcifZAdGGIGEVfz10ZBePeeOvBrCZBesRLuZCOe9yLiS6YCwjtlUZAZA3gdzOMspxwtjbXxiCrLPyYZBMjVX12bMj6OrBpYTIV06T9LfqzjZC7KMD6T59tUpJlB7Eq6vFOlHZBvCqAjFmLV1YmPZAVAmzqwZDZD"); //AppDemo
	            pageIdMap.put("1576333205977417", "EAAB4Jc1S3YcBAFCAENCfEXA3dzd3UASI84etJML50VBa2iAXxDmBrPjrugzTGoDDZCxsJywkg1wurHoQtrEMAKIVlw83aRlAAd0uUyNdQLlwHcM9KUZAtWm0vhjFqWk9fTbgnLCrtDL6YMMpZBGbM2BbJohj9EbEMqQVUbD5qPATFusvZBmO");
	            pageIdMap.put("1384800534940606", "EAAB4Jc1S3YcBAFoflBT9wChvmWrADV2ZC7irjIakc87nwaUKysd3walVYZBrzZCmqDu8ZCt3F5ZCV5GgngJfVDXTYBMPTA9zS0X58bbtRnInZB06Xhgh6IV9umBwGp1fLOGO1KaZAHlZBT0a25SHGHd9EpL7V55Y7HF6Pw0eyARE7KFe2q44XOL1");
	            pageIdMap.put("141475139924026", "EAAB0ameqHWABAMfPSmUsz2QllDZAkPrS3t9YRENjdJvynmYEgYkGzeeevJwj1BEfqZBinw5d3VlT33Y8mbmqZAs4d8LhWAOObjGl4Hb8CjP9Yg2a48mAP9NaDwY4vrhJOMM94mBTRSjZA6UwmHD9sUy7fqpjvSZAyuMTZCiaYQfAZDZD");
	            pageIdMap.put("293795001045046", "EAABZBv0WD1GIBAM9M9NzdNrT6KCDUfhrSKel9iiJBbVzt0eo60Aampi325Ql8WiD8AIfPsXpkMY8f93LKpgIDPlZA3E7UWmxkIy5ZBsbzT40ZBdFnIdH6vZCQbaCsWSTZCiNJs0sMTEJZC8g7NzkNDAZAtNT1w0IRCh84gedFbW39royWRnzDnPd");
	            pageIdMap.put("123569288248822", "EAAB4Jc1S3YcBAOVbKg2MbheTZBNgaVbF0FjlCxEGPorthMt5Ao5tYhkksZCqMSzPoAjuVrKILVTlyRzmTGeYee9AzPYEZAs99KMBogQbi02eGTr1XB6pcjYKOkM4wDsaILFlh1ZBlKMZC01ZArQu8P9WIVZCvNGXtryaObXEhVUfQZDZD");
	            pageIdMap.put("167847620456042", "EAAB4Jc1S3YcBACLuJwcZB7xksgBULDTwPzVXRi31ODbqaPy58AtQo2PmEWyUgxYekX54I3HVgbkTOT2qbEsMWaJYo0DEbZAZB92PO4OOmehDGYlGWOSmfLoLO9f3d3Rb60NhxBcUaRHg77P1gFjJgfZBTOzeLQJ2UA60461npQZDZD");
	            pageIdMap.put("623141348073526", "EAAB4Jc1S3YcBADzaZAdy8FeDAZB64Ct6iJpYAW8BCLXie1YTxqfEvF7wi0wnY2h7yZChykcLA6ogTsLLa7YNX2xFG2JoNZAgDoZC9FKbnipGtZCZCQlaMMOOZATZB9uNSZC3hj01zA3ZBdumeHkR5k0bAKzwiafd8UTDYY5J8GEvAYbrgZDZD");
	            pageIdMap.put("128339594466336", "EAAB4Jc1S3YcBAOFrCaFZBfJa72wanqaJtO9GRd1ZBMHZCMe2lfEcAygNo9QgAaj6EFoGdIvrRS7TaDqJXbgMwtYIzqKlmwZCP7mZA2fybxfBBWSdyXMrn1zg0bZBL93uWwmwO8nNNCfaHcgbku5Jom6hWPZASj63rbyiNuMnKHIqwZDZD");
	            pageIdMap.put("476915999351407", "EAAB4Jc1S3YcBAH2ZAl9WpTQd75YicmYaKzFmBhoP8J5ldctYSEQkgawrqYdk11xxZBZANTjf4soRkwM1mJSo32nPQ9d8361tnUGT0r3lS4coOGAsVnQqfrZAq278zIwmZCJtMvXjJAWyc1xkiEeCgkyROKbKNJZBwwJ0RsZA468zQZDZD");
	            pageIdMap.put("1532070333524291", "EAAB4Jc1S3YcBAIv7ZCk9XaY2tZAVZCBdwNeanWov1yzZBX4ZA9VMq7vCZC9FQTkUvPDzxqZAsb5zFtAWp7JzZCYdZAiMBnjWmKjZC5gZAv0IydXKMYrqrhF4gVXkHNmwRPESBWXUNnCCFZBLrOlPDTCO1KyaHwBcTnxZA868BtpCunc8RUAZDZD");
	            pageIdMap.put("275758459520125", "EAAQDSb2C01ABANNH2bfXx1c3mm7j6grqorq0BPGnd1ZAHJDCcnI5bpj9HK7c151EJdD2JjJ6GvM8BHGkULBCLfZCyW1dh6ZAdvm2XVIcm1A3bctLZBF7wCSvWZBFZBfSEKZAIFcUTLNiRHRQwpZBng6II0KYWqc3HhZCKA1wdb2W8MY2bEe2NOgsZA");
	            pageIdMap.put("1156653614453520", "EAAfZAc6ZB1GnUBADV4IJg7w2NB7EkEP5f5tXZCejeiZBcy0FyD18CE5HAYiBG6LFeDWBsNk73gkqZB3W9Mz9Q3CfVSASfZC6VJvODgsCEZCnYvY2t22X2r4GX1o8TicDBAJTW2eRlbOW2mZCuLZBBWGuKl32bT0SwLIgGbXqPxZCyJWQZDZD");
	            pageIdMap.put("112891266019552", "EAAcacacSrfUBAGpN5HCvT4MrTvxOU1IoiK3d2fGVjKTPyH1DivRrPFB1ZBFytFUp6TlMpyrMeh9wVxMCdyEeOu53wFrsAiu6ZBYBdD3ZBSaIuqLHcaKdsXw3ekmTnubj8RInfeCskYiYHvyiS0MRA48mkAPuK5pSRmXeeZBRTQZDZD");
	            pageIdMap.put("241803809966901", "EAAC59TSRZCOIBAAnrCqfGdwGCHwlrwYAq1qwWCAjH5ZBSQajnhetVmC6pAZCbaHHQIEsV5xqmN3mzHSsOz7dhQTs6iWTnCaxANobtHt9ZBJSoH6Kj5mJgCleHxc9ZAZAot5424UvB5wOaHo5RfTZA4t9GOEAFg9Cvd0baKiOQR6FQZDZD");
	            pageIdMap.put("630381094012649", "EAAQDSb2C01ABANFa4AvBOwTDzbfBrdrQhix8m5sYVlxHZBRqbAwMZCeBEA6h2ma7VcyqksL6wFooKdmZBMhD3RvCKBKd16gjOpnVGOwjMKl9dVUiiyeuIzJWKwNIGSEyAQeQ5Ng2mM8AECLTFucIOrrPWo6vx61cF2vUWAJsbZBhc05XJZC5I");
	            pageIdMap.put("2118469535072145", "EAAB4Jc1S3YcBAKyVjZAjv6XYqcL3IhUYT8rqpaSoZCAJ3HkFlrx10oF98roKrb6TgrNemH41EZAuuHHS0hb3m1MMxhqT0QHX9FlepKZCRMYFZARxAZBiZBMXYEMKPz0yNDZBh4J3MchZBSheVSVclaKSGOaWDgEMATyHZC9IB9XdF99hcukeCjLcPy");
	            /*profoundly*/	pageIdMap.put("594421287616265", "EAAEqJFZBYFHcBACnEDwYGzGaSlAZA9G7e2oCXfSsGIUsn2hEph6hJSTTCPEdHGuddwLSUazOWNQQ0LsZA4o1XHJSsIEb6dX8FtGgdKXNpaPkZAYyEQfJnQkH5YCF4EJXECCH9ZCWZCrRC8XY6ryd2xvEbeNoZA69zy1P1Sa7ZCJs6QZDZD");
	            pageIdMap.put("242554896406054", "EAADUZCJXWgNsBAKEemNQr0MuCheyAbZBAZCDfM9MZAOLdk1ZCzSNqcdidoayd8EZB1dulW7mP3MXixDpaG7bZCna1ZCe1ogZBfnROOdQ9Rak5b8o9be8mK9JgHwIsZBeZA3gkkR0iQq36zKWqV07raW5BCwo51sq5vRvdowIWv46GYboKJxRCwFMrNg");
	            pageIdMap.put("296092264556339","EAACcjbFiZClQBAAIpZBhBZAXnijc2wZAqTtp2pvSa5MVg8Cr7J5bOLucj13GoNg78lLrtWkA7sNdCblIIEKoXd8sjWQymSY7fyjLM4al2gPY1NLWtUeg7DJZBZCFH20ps0qHrLHdARuDljWYDCZCWXoYMsprLyn4AHzv2FXCZBmRtQZDZD");
	            pageIdMap.put("197999094471043","EAAEYSD372fEBAIYCYnupwGtT2sEwZCVCS2QtHDr7y2ZC5ZBn89F9IVdE1ZCbFmvuuEBZBCMqsynVHvr9ZBOCAREIS7vKPKZAK6Vfiy6Ym7S5T0Ut5KhmIIVuhwAWZAfff5HCs6u6NItBAZCGffHK6OQLtK61w5BZAC88QeZCudk6tVEamtiNMZCUGYaZB");
	        }
	        public static String sValidationToken="abc";
	        //public static String accessToken = "EAAaTOZBhpap8BAJ1yh5libhbnkMo6ZC71hUxUy90tqH5vfqKE0yFXK0WfjfYHqsn9utiFZCuJMF3rxQy78S75xBDSkjJE4eLrzrUBXp5BcRMTLrgU9ZCz6ZCWNHvzf5LhBHhd5ZAyZAiFWbQ2wo6lxGvE5863DoXfTdcYoZBcZBBsKwZDZD";
	        //public static String viberDashBotUrl = "https://tracker.dashbot.io/track?platform=viber&v=0.8.2-rest&type=outgoing&apiKey=S6pKjwyLiJukn04dOx1WUdB5QyDBJBYGafUDVUb2";
	        public static String viberDashBotUrl = "https://tracker.dashbot.io/track?platform=viber&v=0.8.2-rest&type=outgoing&apiKey=4TLDbH7p9ooa4XQGjolqToHNtE64y5XbEnx69q7T";
	        public static String APP_URL="http://ejb.neargroup.me:8080/XmppServices/xmppservice";
	        public static boolean isSlave = true;
	        public static boolean isDeclutter = true;
	        public static boolean isDBSlave = true;
	        public static boolean isReadStatusConnection = false;
	        public static boolean isDistance = true;
	        public static boolean isAPILOG = false;  //To be started again
	        public static boolean isLocationIndex = false;
	        public static boolean isUpgradingServer = false;
	        public static boolean isRedisON = true;
	        public static String defaultTime = "2017/11/14 12:01:01";
	        public static boolean MOLPAYMENT_DEBUG = true;
	        public static boolean checkCountry = true;
	        public static boolean CHATNOWCOINCHECK = true;
	        public static boolean DYNAMODBLANG = true;
	        public static int TIMEZONEADDHOURS = 8;

	    }


}
