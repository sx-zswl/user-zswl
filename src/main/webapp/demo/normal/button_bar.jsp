<%--
 * @author Roy
 * @date: 4/6/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Button Demo"/>
<%@ include file="../../header.jsp"%>

<style type="text/css">
body {
	padding: 0 10px 0 10px;
}
</style>

<body>
<br/>

<div class="button_bar not_bottom no_top_border">
	<ul>
		<li><a href="#" class="btn_gentle">返回1</a></li>
		<li><a href="#" class="btn_gentle">提交1</a></li>
		<li><a href="#" class="btn_gentle">关闭1</a></li>
	</ul>
</div>

<br/>

<div id="button_bar1" class="button_bar not_bottom">
	<ul>
		<li><a href="#" class="btn_gentle">返回2</a></li>
		<li><a href="#" class="btn_gentle">提交2</a></li>
		<li><a href="#" class="btn_gentle">关闭2</a></li>
	</ul>
</div>

<br/>

<div class="button_bar not_bottom">
	<ul>
		<li><a href="#" class="btn_gentle">返回2</a></li>
		<li><a href="#" class="btn_gentle">提交2</a></li>
		<li><a href="#" class="btn_gentle">关闭2</a></li>
	</ul>
</div>

<br/>

<div class="button_bar not_bottom center">
	<ul>
		<li><a href="#" class="btn_gentle">返回3</a></li>
		<li><a href="#" class="btn_gentle">提交3</a></li>
		<li><a href="#" class="btn_gentle">关闭3</a></li>
	</ul>
</div>

<br/>


<div id="button_bar" class="button_bar">
	<ul>
		<li><a href="#" class="btn_gentle">返回4</a></li>
		<li><a href="#" class="btn_gentle">提交4</a></li>
		<li><a href="#" class="btn_gentle">关闭4</a></li>
	</ul>
</div>

</body>
</html>

