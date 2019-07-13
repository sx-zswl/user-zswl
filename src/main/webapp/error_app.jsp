<%--
 * @author Roy on 7/26/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="init.jsp"%>
<c:set var="pageTitle" value="App异常"/>
<%@ include file="header.jsp"%>

<body class="theme noscroll">

<table class="info">
	<tr class="header"><td>错误：</td></tr>
	<tr class="body"><td><span class="font warn">异常提示：${errorMsg}</span></td></tr>
	<tr class="footer">
		<td><button class="btn_gentle" onclick="history.go(-1)">返回上一步</button></td>
	</tr>
</table>

</body>
</html>
