<%--
 * @author Roy
 * @date: 8/7/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Image Upload Demo"/>
<%@ include file="../../header.jsp"%>
<%@ include file="../../header_upload.jsp"%>

<body>
<div class="header_bar"><span id="nav_path"></span></div>

<table width="800" class="content center space top">
	<tr>
		<td width="200" class="label">预览显示在右边（默认）：</td>
		<td>
			<table width="100%" class="clear">
				<tr>
					<td width="100" valign="top"><button type="button" id="select_photo" class="btn_gentle">选择图片</button><button type="button" id="upload_photo" class="btn_gentle orange" style="margin-top:4px">开始上传</button></td>
					<td><div id="preview1"></div></td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td class="label">预览显示在下边：</td>
		<td>
			<table width="100%" class="clear">
				<tr><td><button type="button" id="select_photo_below" class="btn_gentle" style="display:inline-block">选择图片</button><button type="button" id="upload_photo_below" class="btn_gentle orange">开始上传</button></td></tr>
				<tr height="2"><td></td></tr>
				<tr><td><div id="preview2"></div></td></tr>
			</table>
		</td>
	</tr>
	<tr>
		<td width="200" class="label">限制一张图片上传：</td>
		<td>
			<table width="100%" class="clear">
				<tr>
					<td width="100" valign="top"><button type="button" id="select_photo_single" class="btn_gentle">选择图片</button><button type="button" id="upload_photo_single" class="btn_gentle orange" style="margin-top:4px">开始上传</button></td>
					<td><div id="preview3"></div></td>
				</tr>
			</table>
		</td>
	</tr>
</table>

</body>
</html>

<script type="text/javascript">
$().ready(function() {

	$("#select_photo").imageUpload({
		single: true,
		preview_div: 'preview1',
		upload_btn: 'upload_photo',
		moduleId: 'module_id_xx',
		bizId: 'biz_id_xx',
		callback: function(item, status) {
			if(status.code == "0") {
				alert("item.dbId=" + item.dbId + ", item.originalName=" + item.originalName + "\nitem.filePath=" + item.filePath + "\nstatus.code=" + status.code + ", status.message=" + status.message);
			
			} else {
				alert("status.code=" + status.code + ", status.message=" + status.message);
			}
		}
	});

	$("#select_photo_below").imageUpload({
		preview_div: 'preview2',
		upload_btn: 'upload_photo_below',
		moduleId: 'module_id_xx',
		bizId: 'biz_id_xx',
		callback: function(item, status) {
			if(status.code == "0") {
				alert("item.dbId=" + item.dbId + ", item.originalName=" + item.originalName + "\nitem.filePath=" + item.filePath + "\nstatus.code=" + status.code + ", status.message=" + status.message);
			
			} else {
				alert("status.code=" + status.code + ", status.message=" + status.message);
			}
		}
	});

	$("#select_photo_single").imageUpload({
		single: true,
		preview_div: 'preview3',
		upload_btn: 'upload_photo_single',
		moduleId: 'module_id_xx',
		bizId: 'biz_id_xx',
		multi_selection: false,
		callback: function(item, status) {
			if(status.code == "0") {
				alert("item.dbId=" + item.dbId + ", item.originalName=" + item.originalName + "\nitem.filePath=" + item.filePath + "\nstatus.code=" + status.code + ", status.message=" + status.message);
			
			} else {
				alert("status.code=" + status.code + ", status.message=" + status.message);
			}
		}
	});

});
</script>