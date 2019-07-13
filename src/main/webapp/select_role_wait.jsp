<%--
 * @author FPX
 * @date 2010-11-01
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="init.jsp"%>
<c:set var="pageTitle" value="正在进入系统..."/>
<%@ include file="header.jsp"%>
<%
final String modleId		= StringUtil.fixString(request.getParameter("modleId"));

%>
<body>
<form id="form1" action="main.jsp" method="post">
	<input type="hidden" name="userId" value="">		 
	<input type="hidden" name="roleId" value="">		 
	<input type="hidden" name="loginName" value="">
	<input type="hidden" name="userName" value="">
	<input type="hidden" name="userPassword" value="">
	<input type="hidden" name="unitEntityId" value="">
	<input type="hidden" name="userType" value="">
	<input type="hidden" name="bentrustTrueName" value="">
	<input type="hidden" name="bentrustUserName" value="">
	<input type="hidden" name="sType" value="">
	<input type="hidden" name="modleId" id="modleId" value="${param.modleId}">
</form>
<table width="699">
	<td width="691" height="300"></td>
</table>
<div align = "center">
	<div id = "sb" style = "border-right: #ffffff 1px solid; border-top: #ffffff 1px solid; background: #dcdcdc; width: 400px; border-bottom: #cccccc 1px solid; height: 16px; text-align: left">
		<div id = "sbChild1" style="filter: alpha(Opacity = 0, FinishOpacity = 100, Style = 1, StartX = 0, StartY = 0, FinishX = 100, FinishY = 0); overflow: hidden; width: 100%; position: absolute; height: 18px">
			<div style = "background: #000000; width: 100%" hidden overflow:height:16px;></div>
		</div>
		<div style = "font-size: 10px; width: 400px; color: white; font-family: arial; position: absolute; height: 16px; text-align: center"></div>
	</div>
	<p></p>
	<div id = "infor" style = "font-size: 11px; width: 100%; color: #999999; font-family: arial; position: relative; height: 16px; text-align: center"></div>
</div>
</body>
</html>


<!--JS 进度条加载-->
<script type="text/javascript">
<!--
var ie5 = (document.all && document.getElementsByTagName);
var step = 0;

function setSB(v, el, inforEl, message) {
	if (ie5 || document.readyState == "complete") {
		filterEl = el.children[0];
		valueEl = el.children[1];
		if (filterEl.style.pixelWidth > 0) {
			var filterBackup = filterEl.style.filter;
			filterEl.style.filter = "";
			filterEl.style.filter = filterBackup;
		}
		filterEl.style.width = v + "%";
		valueEl.innerText = v + "%";
		inforEl.innerText = message;
	}
}// end function

function setSBByStep(v, el, inforEl, message) {
	if (ie5 || document.readyState == "complete") {
		step = step + v;
		filterEl = el.children[0];
		valueEl = el.children[1];

		if (filterEl.style.pixelWidth > 0) {
			var filterBackup = filterEl.style.filter;
			filterEl.style.filter = "";
			filterEl.style.filter = filterBackup;
		}

		filterEl.style.width = step + "%";
		valueEl.innerText = step + "%"
		inforEl.innerText = message;
	}
}// end function

function fakeProgress(v, el) {
	if (v >= 101) {
		
	}
	else {
		setSB(v, el, infor, "正在努力进入系统,请稍候……");
		window.setTimeout("fakeProgress(" + (v + 1) + ", document.all['" + el.id + "'])", 20);
	}
}

window.onload = function() {
	fakeProgress(0,sb);
	$("#form1").submit();
};

//-->
</script>