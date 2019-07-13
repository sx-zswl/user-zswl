<%--
 * @author Roy on 4/18/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../../init.jsp"%>
<c:set var="pageTitle" value="Content Table"/>
<%@ include file="../../../header.jsp"%>

<body class="lazy noscroll">
<div class="header_bar"><span id="nav_path"></span></div>

<table width="90%" border="0" class="content center" style="margin-top: 10px;">
<caption>有边框居中</caption>
<tr>
	<td width="130" class="label">招标公告编号：</td>
	<td>10001-01</td>
	<td width="130" class="label">项目名称：</td>
	<td>油水分离器配件（进口）</td>
</tr>
<tr>
	<td class="label">预置金额（元）：</td>
	<td float="rmb">180080</td>
	<td class="label">招标方式：</td>
	<td><input value="公开招标"></td>
</tr>
<tr>
	<td class="label">申请单位：</td>
	<td>物资供应处</td>
	<td class="label">用户单位：</td>
	<td>石化厂</td>
</tr>
<tr>
	<td class="label">开标地点：</td>
	<td colspan="3">招标大厅</td>
</tr>
<tr>
	<td class="label">评委：</td>
	<td colspan="3"><textarea rows="4">张三, 李四, 王五, 赵六</textarea></td>
</tr>
</table>


<table width="90%" border="0" class="content noborder center" style="margin-top: 10px;">
<caption>无边框居中</caption>
<tr>
	<td width="130" class="label">招标公告编号：</td>
	<td>10001-01</td>
	<td width="130" class="label">项目名称：</td>
	<td>油水分离器配件（进口）</td>
</tr>
<tr>
	<td class="label">预置金额（元）：</td>
	<td float="rmb">180080</td>
	<td class="label">招标方式：</td>
	<td><input value="公开招标"></td>
</tr>
<tr>
	<td class="label">申请单位：</td>
	<td>物资供应处</td>
	<td class="label">用户单位：</td>
	<td>石化厂</td>
</tr>
<tr>
	<td class="label">开标地点：</td>
	<td colspan="3">招标大厅</td>
</tr>
<tr>
	<td class="label">评委：</td>
	<td colspan="3"><textarea rows="4">张三, 李四, 王五, 赵六</textarea></td>
</tr>
</table>

</body>

</html>

<script type="text/javascript">
$().ready(function() {
});

</script>
