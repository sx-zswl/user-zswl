<%--
 * @author FPX
 * @date 2010-11-01
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="init.jsp"%>
<c:set var="pageTitle" value="选择角色"/>
<%@ include file="header.jsp"%>
<%
final String username = StringUtil.fixString(request.getParameter("username"));
final String modleId		= StringUtil.fixString(request.getParameter("modleId"));
%>
<style type="text/css">
.list_style {
	font-size: 18px;
	color: #8DA6D8;
	margin-left: 30px;
}
</style>

<body>
<form id="form1" action="select_role_wait.jsp" method="post">
	<input type="hidden" name="userId" value="">
	<input type="hidden" name="username" value="">
	<input type="hidden" name="trueName" value="">
	<input type="hidden" name="roleId" value="">
	<input type="hidden" name="userType" value="">
	<input type="hidden" name="unitId" value="">
	<input type="hidden" name="unitName" value="">
	<input type="hidden" name="departId" value="">
	<input type="hidden" name="departName" value="">
	<input type="hidden" name="ip" value="">
	<input type="hidden" name="modleId" id="modleId" value="${param.modleId}">
</form>
<div id="blogin" style="margin-top: 10px;margin-left: 10px;"><a href="function_model.jsp"><img src="images/icon_back.png" border="0" alt="返回" /></a></div>
<table border="0" align="center" cellspacing="0" style="margin-top: 18%">
	<!-- 标题 -->
	<tr>
		<td colspan="4" align="center"><img src="${ROOT}/images/title_select_role.gif" width="720" height="40"></td>
	</tr>
	<tr height="30">
		<td colspan="4"></td>
	</tr>
	<!-- 正常情况的角色选择 -->
	<tr  onclick="loginByRole()">
		<td><div align="right" class="list_style">○&nbsp;</div></td>
		<!-- 角色名称 -->
		<td width="500">物资供应处(部门考勤员)</td>
		<td width="110" align="center">
			<img width="60" height="30" border="0" src="${ROOT}/images/btn_login.gif" style="cursor: hand">
		</td>
		<td width="110" align="center">
			<img width="60" height="30" border="0" src="${ROOT}/images/btn_delegate.gif" style="cursor: hand">
		</td>
  </tr>
</table>
</body>

<script>
function loginByRole() {
	//Mock
	$("input[name='userId']").val("001");
	$("input[name='username']").val("<%=username %>");
	$("input[name='trueName']").val("孙毅");
	$("input[name='roleId']").val("001");
	$("input[name='userType']").val("1");
	$("input[name='unitId']").val("001001");
	$("input[name='unitName']").val("信息处");
	$("input[name='departId']").val("001");
	$("input[name='departName']").val("吐哈油田公司");
	$("input[name='ip']").val("127.0.0.1");

	$("#form1").submit();
}
</script>
