<%--
 * @author Roy
 * @date: 4/6/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Button Demo"/>
<%@ include file="../../header.jsp"%>

<style type="text/css">
</style>

<body>

<div class="header_bar"><span id="nav_path"></span></div>
<!-- 
<div style="width: 100%; margin: 10px">
<span>普通按钮 (btn)：</span>
<span><button class="btn">button按钮</button></span>
<span><a href="#" class="btn">超链接按钮</a></span>
</div>
 -->
<div style="width: 100%; margin: 10px">
<form action="ss.html">
<p>Gentle按钮 (btn_gentle)：</p>
<p><a href="#" class="btn_gentle">Gentle超链接按钮</a>  <a href="javascript:alert(3)" disabled="true" class="btn_gentle">Gentle超链接按钮(disabled)</a></p>
<p><button type="button" class="btn_gentle">Gentle button按钮</button>  <button disabled="true" class="btn_gentle">Gentle button按钮(disabled)</button></p>
<p><input type="submit" class="btn_gentle" value="Gentle表单Submit按钮" />  <input type="submit" disabled="true" class="btn_gentle" value="Gentle表单Submit按钮(disabled)" /></p>
<p><a href="#" class="btn_gentle orange big">Gentle大按钮</a>  <a href="#" class="btn_gentle orange">桔黄色Gentle按钮</a>  <a href="#" class="btn_gentle orange small">Gentle小按钮</a></p>
<p><a href="#" class="btn_gentle red">红色Gentle按钮</a></p>
<p><a href="#" class="btn_gentle green">绿色Gentle按钮</a></p>
</form>
</div>

<div style="width: 100%; margin: 10px">
<span>Metro按钮 (btn_metro)：</p>
<span><a href="#" class="btn_metro">Metro按钮</a></span>
<span><a href="#" class="btn_metro disabled">Metro按钮(disabled)</a></span>
<span><a href="#" class="btn_metro blue">Metro按钮</a></span>
<span><a href="#" class="btn_metro green">Metro按钮</a></span>
<span><a href="#" class="btn_metro yellow">Metro按钮</a></span>
<span><button class="btn_metro orange">Metro按钮</button></span>
<span><button class="btn_metro red">Metro按钮</button></span>
</div>

<div style="width: 100%; margin: 10px">
<span>Metro按钮 (供应商系统专用)：</p>
<table>
<tr>
	<td>
		<span><a href="#" class="btn_metro red_gys" style="width:120px; height:100px; white-space: normal; line-height:100px">年审申请</a></span>
	</td>
	<td>
		<span><a href="#" class="btn_metro blue_gys" style="width:120px; height:90px; white-space: normal; padding-top:10px">新增准入申请</a></span>
	</td>
	<td>
		<span><a href="#" class="btn_metro green_gys" style="width:120px; height:90px; white-space: normal; padding-top:10px">专项准入申请</a></span>
	</td>
</tr>
</table>
</div>

</body>
</html>
