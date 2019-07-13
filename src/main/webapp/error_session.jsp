<%--
 * @author Roy on 8/26/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="init.jsp"%>
<c:set var="pageTitle" value="登录过期"/>
<%@ include file="header.jsp"%>

<body class="theme noscroll">

<table class="info">
	<tr class="header"><td>登录过期：</td></tr>
	<tr class="body"><td><span class="font ui">您的个人登录信息已过期，请重新登录。</span></td></tr>
	<tr class="footer">
		<td><button class="btn_gentle" onclick="relogin()">重新登录</button></td>
	</tr>
</table>

</body>
</html>

<script type="text/javascript">
function relogin() {
	var curParent = window;
	while(curParent != curParent.parent) {
		curParent = curParent.parent;
	}

//	alert(curParent.document.body.innerHTML);
	curParent.location.href= ROOT+"/index.jsp";
}
</script>