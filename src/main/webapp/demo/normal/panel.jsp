<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Demo"/>
<%@ include file="../../header.jsp"%>

<body style="padding: 5px" class="lazy">

<div class="panel first" minH="30" maxH="400">
	<div class="header bold">
		<span>不可折叠面板(first，无上边框，标题加粗)</span>
	</div>
	<div class="content">
		<p>内容</p>
		<p>内容</p>
		<p>内容</p>
	</div>
</div>

<br/>

<div class="panel close collapse">
	<div class="header">
		<span>可折叠默认关闭面板(默认，无左右边框)</span>
	</div>
	<div class="content">
		<p>内容</p>
		<p>内容</p>
		<p>内容</p>
	</div>
</div>

<br/>

<div class="panel collapse border">
	<div class="header">
		<span>可折叠默认打开面板(包含四周边框)</span>
	</div>
	<div class="content">
		<p>内容</p>
		<p>内容</p>
		<p>内容</p>
	</div>
</div>

</body>

</html>
