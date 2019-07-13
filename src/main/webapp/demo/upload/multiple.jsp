<%--
 * @author Roy
 * @date: 8/4/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Embeded Multiple Upload Demo"/>
<%@ include file="../../header.jsp"%>
<%@ include file="../../header_upload.jsp"%>

<body>
<div class="header_bar"><span id="nav_path"></span></div>

<table width="800" class="content center space top">
	<tr>
		<td width="220" class="label">名称：</td>
		<td><input type="text" class="medium underline" /></td>
	</tr>
	<tr>
		<td class="label">附件上传：</td>
		<td><div id="uploader"></div></td>
	</tr>
</table>

</body>
</html>

<script type="text/javascript">
$().ready(function() {
	$("#uploader").originUpload({
		hideHeader:true,
		moduleId: 'module_id_xx',
		bizId: 'biz_id_xx',
		callback: function(item, status) {
			alert("item.dbId=" + item.dbId + ", item.originalName=" + item.originalName + "\nstatus.code=" + status.code + ", status.message=" + status.message);
		}
	});
});
</script>