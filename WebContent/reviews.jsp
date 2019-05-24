<%@ page import="org.apache.commons.lang.StringEscapeUtils"%>

<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>


<!DOCTYPE html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Rating/Review View</title>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
<style>
body {
	background-color: #5599A8;
	color: #ffffff;
}

#res {
	margin: 10px;
	padding: 10px;
	text-align: center;
	position: relative;
	top: 0;
	left: 0;
}

#rat {
	font-family: sans-serif;
	font-size: 20px;
	margin: 5px;
	text-shadow: 4px 3px rgba(0, 0, 0, 0.19);
}

#f {
	border-radius: 50%;
	position: absolute;
	top: 27.8%;
	left: 52.2%;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0
		rgba(0, 0, 0, 0.19);
	height: 25px;
}

img#profile-image {
	border-radius: 50%;
	position: relative;
	top: 0;
	left: 0;
	height: 108px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0
		rgba(0, 0, 0, 0.19);
}

img.star {
	width: 50%;
	margin: 0px 25%;
}

#rate {
	font-size: 20px;
	font-family: inherit;
}

#groot, #kala {
	padding-top: 1px;
	background-color: #fff;
	text-align: center;
	border-radius: 15px 15px 0 0;
	color: #656565;
	width: 95%;
	margin: -20px auto;
	font-family: sans-serif;
}

div#groot div {
	font-size: 15px;
	margin: 5px 0;
}

table {
	font-family: arial, sans-serif;
	border: none;
	width: 90%;
	font-size: initial;
	background-color: #FBFBFB;
	margin: 0 auto;
}

#kala {
	background-color: #FBFBFB;
	font-size: 25px;
	font-family: sans-serif;
	font-weight: normal;
	padding: 15px;
}

td {
	text-align: left;
	padding: 10px;
	font-size: 12px;
}

#sr {
	text-align: center;
	width: 10%;
	font-size: large;
	font-weight: 700;
}

/* tr:nth-child(odd) {
	background-color: #f2f2f2;
}

tr:nth-child(even) {
	background-color: #dddddd;
} */
@media screen and (max-width: 768px) {
	/* img#profile-image {
		width: 30%;
	} */
	img.star {
		width: 50%;
		margin: 0;
	}
	#f {
		top: 43%;
		left: 58%;
	}
}
</style>
</head>
<body>
	<c:set var="dataList1" value='${requestScope["dataList1"]}' />
	<%
		java.util.List<String[]> adviceList2 = (java.util.List<String[]>) request.getAttribute("dataList2");
	%>
	<c:set var="dataList3" value='${requestScope["dataList3"]}' />
	<c:set var="dataList4" value='${requestScope["dataList4"]}' />
	<div id="res">
		<c:choose>
			<c:when test="${dataList4[0][0]=='female' || dataList4[0][0]=='FEMALE'}">
				<img src="images/prof-girl.png" id="profile-image" />
			</c:when>
			<c:otherwise>
				<img src="images/prof-boy.png" id="profile-image" />
			</c:otherwise>
		</c:choose>
		<img src="images/f.png" id="f" />
		<div id="rat">Rating</div>
		<div>
			<c:set var="count" value="${dataList1[0][0]/dataList1[0][1] }" />
			<c:choose>
				<c:when test="${count<=0 }">
					<img src='images/Star-4.png' class="star" />
				</c:when>
				<c:when test="${count>0 && count<=0.5 }">
					<img src='images/Star-05.png' class="star" />
				</c:when>
				<c:when test="${count>0.5 && count<=1 }">
					<img src='images/Star-1.png' class="star" />
				</c:when>
				<c:when test="${count>1 && count<=1.5 }">
					<img src='images/Star-15.png' class="star" />
				</c:when>
				<c:when test="${count>1.5 && count<=2 }">
					<img src='images/Star-2.png' class="star" />
				</c:when>
				<c:when test="${count>2 && count<=2.5 }">
					<img src='images/Star-25.png' class="star" />
				</c:when>
				<c:when test="${count>2.5 && count<=3 }">
					<img src='images/Star-3.png' class="star" />
				</c:when>
				<c:when test="${count>3 && count<=3.5 }">
					<img src='images/Star-35.png' class="star" />
				</c:when>
				<c:when test="${count>4 && count<=4.5 }">
					<img src='images/Star-45.png' class="star" />
				</c:when>
				<c:when test="${count>4.5 && count<=5 }">
					<img src='images/Star-5.png' class="star" />
				</c:when>
				<c:otherwise>
					<img src='images/Star-4.png' class="star" />
				</c:otherwise>
			</c:choose>
		</div>
		<%-- <div id="rate">
			<c:choose>
				<c:when test="${dataList1[0][1]%dataList1[0][2]==0 }">
					<fmt:parseNumber var="i" integerOnly="true" type="number"
						value="${count}" />
					<c:out value="${i }" />/5
				</c:when>
				<c:otherwise>
					<fmt:formatNumber type="number" maxFractionDigits="1"
						value="${count}" />/5
				</c:otherwise>
			</c:choose>
		</div> --%>
	</div>
	<div>
		<div id="groot">
			<div style="font-size: 20px; margin-top: 15px;">${dataList3[0][0] }</div>
			<div>REVIEWS</div>
			<table>
				<tr>
					<th id="kala">Top Reviews</th>
				</tr>
				<%
					for (String[] strings : adviceList2) {
						for (int i = 0; i < strings.length; i++) {
				%>
				<tr>
					<td id="tp">- <%=StringEscapeUtils.unescapeJava(strings[i])%></td>
				</tr>
				<%
					}
					}
				%>
			</table>
			
		</div>
	</div>
</body>

</html>