<%--
 * @author Roy
 * @date: 4/6/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Form Validation Demo"/>
<%@ include file="../../header.jsp"%>

<body>

<div class="header_bar"><span id="nav_path"></span></div>

<form id="frm1" class="validate" action="">
<table width="100%" border="0" class="content" style="margin-top: 20px;">
<tr>
	<td width="360" class="label">必填：</td>
	<td><input type="text" name="item1" rule="blank"/></td>
	<td width="360" class="label">自定义提示：</td>
	<td><input type="text" name="item1" rule="blank"  msg="姓名" /></td>
</tr>
<tr>
	<td class="label">正则表达式（^\w{1,2}$）：</td>
	<td><input type="text" name="item3" rule="custom|^\w{1,2}$"></td>
	<td class="label">正则表达式，但允许为空：</td>
	<td><input type="text" name="item4" rule="custom|^\w{1,2}$|opt"/></td>
</tr>
<tr>
	<td class="label">Email：</td>
	<td><input type="text" name="item5" rule="email"></td>
	<td class="label">Email，但允许为空：</td>
	<td><input type="text" name="item6" rule="email|opt"/></td>
</tr>
<tr>
	<td class="label">货币（全数字，2位小数）：</td>
	<td><input type="text" name="item7" rule="money" float="editRmb"></td>
	<td class="label">长度限制（最小、最大都限制，rule="lengthlr|2|5"）：</td>
	<td><input type="text" name="item8" rule="lengthlr|2|5"/></td>
</tr>
<tr>
	<td class="label">长度限制（只限制最小长度，rule="lengthl|2"）：</td>
	<td><input type="text" name="item7" rule="lengthl|2"></td>
	<td class="label">长度限制（只限制最大长度，rule="lengthr|3"）：</td>
	<td><input type="text" name="item8" rule="lengthr|3"/></td>
</tr>
<tr>
	<td class="label">数字限制（rule="number"）：</td>
	<td><input type="text" name="item7" rule="number"></td>
	<td class="label">数字长度限制（最小、最大长度都限制，rule="numberlr|2|5"）：</td>
	<td><input type="text" name="item8" rule="numberlr|2|5"/></td>
</tr>
<tr>
	<td class="label">数字长度限制（只限制最小长度，rule="numberl|2"）：</td>
	<td><input type="text" name="item7" rule="numberl|2"></td>
	<td class="label">数字长度限制（只限制最大长度，rule="numberr|5"）：</td>
	<td><input type="text" name="item8" rule="numberr|5"/></td>
</tr>
<tr>
	<td class="label">小数（整数部分2位，小数部分3位，rule="decimal|2|3"）：</td>
	<td><input type="text" name="item7" rule="decimal|2|3"></td>
	<td class="label">小数（整数部分不限，小数部分2位，rule="decimal|*|2"）：</td>
	<td><input type="text" name="item8" rule="decimal|*|2"/></td>
</tr>
<tr>
	<td class="label">Select框：</td>
	<td><select rule="select">
		<option value="-1">--请选择--</option>
		<option value="2">选择1</option>
		<option value="3">选择2</option>
		<option value="4">选择3</option>
	</select></td>
	<td class="label">日期（默认pattern：yyyy-MM-dd）：</td>
	<td><input name="date" type="text" rule="date" value="2010-02-02"></td>
</tr>
<tr>
	<td class="label">日期（指定格式，增加pattern="yyyy/MM/dd"）：</td>
	<td><input name="date" type="text" rule="date" value="" pattern="yyyy/MM/dd"></td>
	<td class="label">日期可为空：</td>
	<td><input name="date" type="text" rule="date|opt" value=""></td>
</tr>
<tr>
	<td class="label">时间（精确到分，默认格式 hh:mm）：</td>
	<td><input name="date" type="text" rule="time"></td>
	<td class="label">时间可为空：</td>
	<td><input name="date" type="text" rule="time|opt" value=""></td>
</tr>
<tr>
	<td class="label">数字大小限制（number|2|59）：</td>
	<td><input name="date" type="text" rule="number|2|59"></td>
	<td class="label">数字最小限制（number|2|*）：</td>
	<td><input name="date" type="text" rule="number|2|*"></td>
</tr>
<tr>
	<td class="label">数字最大限制（number|*|59）：</td>
	<td><input name="date" type="text" rule="number|*|59"></td>
	<td class="label">必填：</td>
	<td>
		<textarea name="remark" id="remark" cols="20" rows="6" rule="blank" class="thin"></textarea>
	</td>
</tr>
<tr>
	<td colspan="4" align="center">
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
