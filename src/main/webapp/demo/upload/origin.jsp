<%--
 * @author Roy
 * @date: 8/4/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Origin Upload Demo"/>
<%@ include file="../../header.jsp"%>
<%@ include file="../../header_upload.jsp"%>

<body>
<div class="header_bar"><span id="nav_path"></span></div>

<form method="post" action="">
	<div id="uploader" class="space"></div>
</form>

</body>
</html>

<script type="text/javascript">
$().ready(function() {
	$("#uploader").originUpload({
		height: 120,
		moduleId: 'module_id_xx',
		bizId: 'biz_id_xx',
		callback: function(item, status) {
			alert("item.dbId=" + item.dbId + ", item.originalName=" + item.originalName + "\nstatus.code=" + status.code + ", status.message=" + status.message);
		}
	});
});
</script>