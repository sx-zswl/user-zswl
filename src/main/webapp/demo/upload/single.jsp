<%--
 * @author Roy
 * @date: 8/4/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Single Upload Demo"/>
<%@ include file="../../header.jsp"%>
<%@ include file="../../header_upload.jsp"%>

<body>
<div class="header_bar"><span id="nav_path"></span></div>

<table width="800" class="content center space top">
	<tr>
		<td width="400" class="label">�ļ���ʾ���ұߣ�Ĭ�ϣ���ͬʱ����ֻ��ѡExcel�ļ���xls,xlsx����</td>
		<td><button type="button" id="upload_excel" class="btn_gentle">ѡ���ļ�</button></td>
	</tr>
	<tr>
		<td class="label">����ֻ��ѡWord�ļ���doc,docx����</td>
		<td><button type="button" id="upload_word" class="btn_gentle">ѡ���ļ�</button></td>
	</tr>
	<tr>
		<td class="label">����ֻ��ѡPDF�ļ���pdf����</td>
		<td><button type="button" id="upload_pdf" class="btn_gentle">ѡ���ļ�</button></td>
	</tr>
	<tr>
		<td class="label">����ֻ��ѡ���ð칫�ļ���doc,docx,xls,xlsx,pdf����</td>
		<td><button type="button" id="upload_office" class="btn_gentle">ѡ���ļ�</button></td>
	</tr>
	<tr>
		<td class="label">����ֻ��ѡZip�ļ���zip,rar����</td>
		<td><button type="button" id="upload_zip" class="btn_gentle">ѡ���ļ�</button></td>
	</tr>
	<tr>
		<td class="label">����ֻ��ѡ����֧���ļ���doc,docx,xls,xlsx,pdf,jpg,jpeg,gif,png,bmp,zip,rar����</td>
		<td><button type="button" id="upload_all" class="btn_gentle">ѡ���ļ�</button></td>
	</tr>
	<tr>
		<td class="label">�ļ���ʾ���±ߣ���ʾ�ϴ�����ļ���Ϣ����</td>
		<td><button type="button" id="upload_all_below" class="btn_gentle">ѡ���ļ�</button></td>
	</tr>
</table>

</body>
</html>

<script type="text/javascript">
$().ready(function() {

	$("#upload_excel").singleUpload({
		filters: UP.filters_excel
	});

	$("#upload_word").singleUpload({
		filters: UP.filters_word
	});

	$("#upload_pdf").singleUpload({
		filters: UP.filters_pdf
	});

	$("#upload_office").singleUpload({
		filters: UP.filters_office
	});

	$("#upload_zip").singleUpload({
		filters: UP.filters_zip
	});

	$("#upload_all").singleUpload({
	});


	$("#upload_all_below").singleUpload({
		below:true,
		moduleId: 'module_id_xx',
		bizId: 'biz_id_xx',
		callback: function(item, status) {
			alert("item.dbId=" + item.dbId + ", item.originalName=" + item.originalName + "\nstatus.code=" + status.code + ", status.message=" + status.message);
		}
	});

});
</script>