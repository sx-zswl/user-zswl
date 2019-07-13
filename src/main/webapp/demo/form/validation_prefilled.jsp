<%--
 * @author Roy
 * @date: 7/31/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Form Validation for Prefilled Demo"/>
<%@ include file="../../header.jsp"%>

<body>

<div class="header_bar"><span id="nav_path"></span></div>

<form id="frm1" class="validate prefilled" action="">
<table width="600" border="0" class="content center" style="margin-top: 10px;">
<tr>
	<td width="360" class="label">必填：</td>
	<td><input type="text" name="item1" rule="blank" value="23" /></td>
</tr>
<tr>
	<td class="label">正则表达式（^\w{1,2}$）：</td>
	<td><input type="text" name="item3" rule="custom|^\w{1,2}$" value="23" /></td>
</tr>
<tr>
	<td class="label">数字限制（rule="number"）：</td>
	<td><input type="text" name="item7" rule="number" value="23" /></td>
</tr>
<tr>
	<td class="label">Select：</td>
	<td>
	<select rule="select">
		<option value="-1">--请选择--</option>
		<option value="2" selected>选择1</option>
		<option value="3">选择2</option>
		<option value="4">选择3</option>
	</select>
	</td>
</tr>
<tr>
	<td class="label">数字长度限制（只限制最小长度，rule="numberl|2"）：</td>
	<td><input type="text" name="item7" rule="numberl|2" value="23" /></td>
</tr>
<tr>
	<td colspan="2" align="center">
		<input type="submit" class="btn_gentle" value="提&nbsp;&nbsp;交" />
		<input type="reset" class="btn_gentle" value="重&nbsp;&nbsp;置" />
	</td>
</tr>
</table>

</form>

<form id="frm2" action=""></form>

</body>
</html>

<script type="text/javascript">
function doSubmit() {
	commonValidateForm($("#frm"));
}
</script>
