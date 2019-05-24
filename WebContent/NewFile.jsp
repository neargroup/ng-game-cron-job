<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<style type="text/css">
body{
	text-align: center;
}
/* unvisited link */
a:link {
    color: red;
}

/* visited link */
a:visited {
    color: green;
}

/* mouse over link */
a:hover {
    color: hotpink;
}

/* selected link */
a:active {
    color: blue;
}
</style>
</head>
<body>
<c:set var="count" value="0" scope="page" />
<c:forEach var="a" begin="0" end="160">
<a href="https://web.neargroup.me/ng/mytask3?l1=${count }&l2=10000" >${count }</a><br><br><br>
<c:set var="count" value="${count+10000 }" scope="page" />
</c:forEach>
<input type="text" name="complete">
<button onclick="myFunction()">Complete</button>
<div id="comp"></div>
<script type="text/javascript">
function myFunction() {
	 var para =document.createElement("P");
	var complete = $('input[name="complete"]').val();
	  var t = document.createTextNode(complete+", ");
	  para.appendChild(t);
	document.getElementById('comp').appendChild(para);
}
</script>
</body>
</html>