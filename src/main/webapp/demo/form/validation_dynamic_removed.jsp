<%--
 * @author Roy
 * @date: 8/22/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Form Validation for Dynamically Removed Demo"/>
<%@ include file="../../header.jsp"%>

<body>

<div class="header_bar"><span id="nav_path"></span></div>

<form id="frm1" class="validate prefilled" action="">
<table width="600" border="0" class="content center" style="margin-top: 10px;">
<tr>
	<td class="label">数字限制（rule="number"）：</td>
	<td id="item7td"><input type="text" name="item7" id="item7" rule="number" value="23" /></td>
</tr>
<tr>
	<td class="label">数字长度限制（只限制最小长度，rule="numberl|2"）：</td>
	<td id="item8td"><input type="text" name="item8" id="item8" rule="numberl|2" value="23" /></td>
</tr>
<tr>
	<td colspan="2" align="center">
		<input type="submit" class="btn_gentle" value="提&nbsp;&nbsp;交" />
		<input type="reset" class="btn_gentle" value="重&nbsp;&nbsp;置" />
	</td>
</tr>
<tr>
	<td colspan="2" align="center">
		<button type="button" class="btn_gentle orange" id="btn_do">移&nbsp;&nbsp;除</button>
		<button type="button" class="btn_gentle" id="btn_cancel">恢&nbsp;&nbsp;复</button>
	</td>
</tr>
</table>

</form>


</body>
</html>

<script type="text/javascript">
$().ready(function() {
	var $frm = $("#frm1");

	$("#btn_do").on("click", function() {
		$("#item7td, #item8td").clearValidate($frm);	
		$("#item7, #item8").remove();	
	});

	$("#btn_cancel").on("click", function() {
		$("#item7td").html('<input type="text" name="item7" id="item7" rule="number" value="23" />');	
		$("#item8td").html('<input type="text" name="item8" id="item8" rule="numberl|2" value="23" />');

		$("#item7td, #item8td").setupValidate($frm);
	});

});
</script>
