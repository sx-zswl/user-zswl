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
		<td width="160" class="label">˵����</td>
		<td>�޼��</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space">
	<tr>
		<td width="160" class="label">˵����</td>
		<td>����Ĭ�ϼ��</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space small">
	<tr>
		<td width="160" class="label">˵����</td>
		<td>����С���</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space big">
	<tr>
		<td width="160" class="label">˵����</td>
		<td>���ܴ���</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space left">
	<tr>
		<td width="160" class="label">˵����</td>
		<td>���Ĭ�ϼ��</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space small left">
	<tr>
		<td width="160" class="label">˵����</td>
		<td>���С���</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space top">
	<tr>
		<td width="160" class="label">˵����</td>
		<td>�ϱ�Ĭ�ϼ��</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px">
<table width="500" class="content space small top">
	<tr>
		<td width="160" class="label">˵����</td>
		<td>�ϱ�С���</td>
	</tr>
</table>
</div>

<div style="border:1px solid; margin-top:8px" class="space bottom">
<table width="500" class="content space bottom">
	<tr>
		<td width="160" class="label">˵����</td>
		<td>�±�Ĭ�ϼ��</td>
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
