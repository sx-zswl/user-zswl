<%--
 * @author Roy
 * @date: 8/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Select Chained Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">

<div class="header_bar"><span id="nav_path"></span></div>

<div style="border:1px solid">
<table width="500" class="content">
	<tr>
		<td width="160" class="label">说明：</td>
		<td>无间距</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space">
	<tr>
		<td width="160" class="label">说明：</td>
		<td>四周默认间距</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space small">
	<tr>
		<td width="160" class="label">说明：</td>
		<td>四周小间距</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space big">
	<tr>
		<td width="160" class="label">说明：</td>
		<td>四周大间距</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space left">
	<tr>
		<td width="160" class="label">说明：</td>
		<td>左边默认间距</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space small left">
	<tr>
		<td width="160" class="label">说明：</td>
		<td>左边小间距</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space top">
	<tr>
		<td width="160" class="label">说明：</td>
		<td>上边默认间距</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space small top">
	<tr>
		<td width="160" class="label">说明：</td>
		<td>上边小间距</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px" class="space bottom">
<table width="500" class="content space bottom">
	<tr>
		<td width="160" class="label">说明：</td>
		<td>下边默认间距</td>
	</tr>
</table>
</div>

</body>
</html>

<script type="text/javascript">
$().ready(function() {
	$("#series").chained("#mark");
    $("#model").chained("#series");
    $("#engine").chained("#series, #model");
});
</script>
