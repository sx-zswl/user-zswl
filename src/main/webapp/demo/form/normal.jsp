<%--
 * @author Roy
 * @date: 4/6/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Text Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">

<div class="header_bar"><span id="nav_path"></span></div>

<form id="frm1" action="">
<table width="90%" border="0" class="content center" style="margin-top: 10px;">
<tr>
	<td width="180" name="username" class="label">普通text：</td>
	<td><input type="text" name="realname" /></td>
</tr>
<tr>
	<td width="130" name="age" class="label">只读text：</td>
	<td><input type="text" name="age" readonly="true" /></td>
</tr>
<tr>
	<td width="130" name="age" class="label">禁用text：</td>
	<td><input type="text" name="age" disabled="true" /></td>
</tr>
<tr>
	<td width="130" name="age" class="label">下划线text：</td>
	<td><input type="text" name="age" class="underline" /></td>
</tr>
<tr>
	<td width="130" name="username" class="label">宽度为100%的text：</td>
	<td><input type="text" name="realname" class="full" /></td>
</tr>
<tr>
	<td width="130" name="username" class="label">宽度为100%的password：</td>
	<td><input type="password" name="realname" class="full" /></td>
</tr>
<tr>
	<td width="130" name="username" class="label">普通textarea：</td>
	<td><textarea name="name1" cols="60" rows="3"></textarea></td>
</tr>
<tr>
	<td width="130" name="username" class="label">自增长高度textarea：</td>
	<td><textarea name="name1" cols="60" rows="3" class="auto"></textarea></td>
</tr>
<tr>
	<td width="130" name="age" class="label">只读textarea：</td>
	<td><textarea name="name1" cols="60" rows="3" readonly="true"></textarea></td>
</tr>
<tr>
	<td width="130" name="age" class="label">禁用textarea：</td>
	<td><textarea name="name1" cols="60" rows="3" disabled="true"></textarea></td>
</tr>
<tr>
	<td width="130" name="username" class="label">宽度为100%的textarea：</td>
	<td><textarea name="name1" cols="60" rows="3" class="full"></textarea></td>
</tr>
<tr>
	<td width="130" name="username" class="label">下拉框：</td>
	<td>
		<select name="sel1">
			<option value="0" selected>--请选择--</option>
			<option value="1">选择1</option>
			<option value="2">选择2</option>
			<option value="3">选择3</option>
		</select>
	</td>
</tr>
<tr>
	<td width="130" name="username" class="label">Radio：</td>
	<td><input type="radio" name="radio1" checked="true">选择1 <input type="radio" name="radio1">选择2</td>
</tr>
<tr>
	<td width="130" name="age" class="label">Checkbox：</td>
	<td>
		<input type="checkbox" name="ckb1">选择1
		<input type="checkbox" name="ckb1">选择2
		<input type="checkbox" name="ckb1">选择3
		<input type="checkbox" name="ckb1">选择4
		<input type="checkbox" name="ckb1">选择5
		<input type="checkbox" name="ckb1">选择6
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
