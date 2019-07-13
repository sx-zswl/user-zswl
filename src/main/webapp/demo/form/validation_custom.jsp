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

<form id="frm1" class="validate" action="">
<table width="600" border="0" class="content center" style="margin-top: 10px;">
<tr>
	<td width="360" class="label">自定义校验：</td>
	<td><input type="text" id="item1" name="item1" /></td>
</tr>
<tr>
	<td class="label">正则表达式（^\w{1,2}$）：</td>
	<td><input type="text" id="item11" rule="custom|^\w{1,2}$" /></td>
</tr>
<tr>
	<td colspan="2" align="center">
		<input type="submit" class="btn_gentle" value="提&nbsp;&nbsp;交" />
		<input type="reset" class="btn_gentle" value="重&nbsp;&nbsp;置" />
	</td>
</tr>
</table>

</form>

<form id="frm2" class="validate prefilled" action="">
<table width="600" border="0" class="content center" style="margin-top: 10px;">
<tr>
	<td width="360" class="label">预填值自定义校验：</td>
	<td><input type="text" id="item2" name="item2" /></td>
</tr>
<tr>
	<td class="label">正则表达式（^\w{1,2}$）：</td>
	<td><input type="text" rule="custom|^\w{1,2}$" /></td>
</tr>
<tr>
	<td colspan="2" align="center">
		<input type="submit" class="btn_gentle" value="提&nbsp;&nbsp;交" />
		<input type="reset" class="btn_gentle" value="重&nbsp;&nbsp;置" />
	</td>
</tr>
</table>

</form>

</body>
</html>

<script type="text/javascript">
$().ready(function() {
	var $frm1 = $("#frm1");
	var $item1 = $("#item1", $frm1);

	$item1.addValidate($frm1, {isMandatory:true, errorMsg:"错误提示消息"}, function(){
		var isValid = false;

		//逻辑判断
		if($item1.val() > 3) {
			isValid = true;
		} else {
			isValid = false;
		}

		//必须返回true或false
		return isValid;
	});

	var $frm2 = $("#frm2");
	var $item2 = $("#item2", $frm2);

	$item2.addValidate($frm2, {isMandatory:true, errorMsg:"错误提示消息"}, function(){
		var isValid = false;

		//逻辑判断
		if($item2.val() > 3) {
			isValid = true;
		} else {
			isValid = false;
		}

		//必须返回true或false
		return isValid;
	});

});
</script>
