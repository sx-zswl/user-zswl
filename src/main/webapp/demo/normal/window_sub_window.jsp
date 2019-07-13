<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Demo"/>
<%@ include file="../../header.jsp"%>

<base target = "_self">
<body class="lazy">

<p>此乃窗口式的子窗口</p>

<a href="http://www.baidu.com" class="btn_gentle">点我打开百度</a>
<a href="#" class="btn_gentle" onclick='HT.openWin("http://www.baidu.com");'>点我打开新窗口</a>

<br/>

<form action="http://www.baidu.com">
<input type="submit" value="表单提交" class="btn_gentle"/>
</form>

<div class="button_bar">
	<ul>
		<li class="add"><a href="#" class="btn_gentle">返回</a></li>
		<li class="delete"><a href="#" class="btn_gentle">提交</a></li>
		<li class="edit"><a href="${ROOT}/close.html" class="btn_gentle" >关闭</a></li>
	</ul>
</div>


</body>

</html>
