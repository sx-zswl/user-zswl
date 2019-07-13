<%--
 * @author Roy on 9/27/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="init.jsp"%>
<c:set var="pageTitle" value="重复登录"/>
<%@ include file="header.jsp"%>

<body class="theme noscroll">

<table class="info">
	<tr class="header"><td>重复登录：</td></tr>
	<tr class="body"><td><span class="font ui">对不起，在同一浏览器下不允许同时登录2个用户，请重新登录。<br/><br/><p>之前登录用户为：<%=sessionInfo.getUsernameHistory()%></p><p>当前登录用户为：<%=sessionInfo.getUsername()%></p></span></td></tr>
	<tr class="footer">
		<td><button class="btn_gentle" onclick="relogin()">重新登录</button></td>
	</tr>
</table>
<%
session.invalidate();
%>
</body>
</html>
<script type="text/javascript">
function relogin() {
	var curParent = window;
	while(curParent != curParent.parent) {
		curParent = curParent.parent;
	}

//	alert(curParent.document.body.innerHTML);
	curParent.location.href=ROOT+"/index.jsp";
}
</script>