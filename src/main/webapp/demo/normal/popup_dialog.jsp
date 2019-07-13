<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Popup Dialog Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy" style="padding: 10px">

<div class="header_bar"><span id="nav_path"></span></div>

<p><button class="btn_gentle" id="open_dialog">��ģʽ�Ի���(Ĭ������)</button>  HT.openDialog("dialog_sub_window.jsp");</p>
<p><button class="btn_gentle" id="open_dialog_arguments">��ģʽ�Ի���(Ĭ�����ԣ����ݽ���)</button>  HT.openDialog("dialog_sub_window.jsp", {name1:"vlaue1", name2:"vlaue2"});</p>
<p><button class="btn_gentle" id="open_dialog_property">��ģʽ�Ի���(�������ԣ����Ϊpx)</button>  HT.openDialog("dialog_sub_window.jsp", null, {width: 500, height: 200, scrollbars: "no", resizable: "no"});</p>
<p><button class="btn_gentle" id="open_dialog_property_percent">��ģʽ�Ի���(�������ԣ����Ϊ%)</button>  HT.openDialog("dialog_sub_window.jsp", $("#open_dialog_property_percent"), {width: "80%", height: "20%", scrollbars: "yes", resizable: "no"});</p>

<hr class="double"/>

<p><button class="btn_gentle" id="open_modeless_dialog">�򿪷�ģʽ�Ի���(Ĭ������)</button>  HT.openModelessDialog("dialog_sub_window.jsp");</p>
<p><button class="btn_gentle" id="open_modeless_dialog_property">�򿪷�ģʽ�Ի���(�������ԣ����Ϊpx)</button>  HT.openModelessDialog("dialog_sub_window.jsp", null, {width: 500, height: 200, scrollbars: "no", resizable: "no"});</p>

</body>

</html>

<script type="text/javascript">
$().ready(function() {
	$("#open_dialog").on("click", function() {
		HT.openDialog("dialog_sub_window.jsp");
	});

	$("#open_dialog_arguments").on("click", function() {
		HT.openDialog("dialog_sub_window.jsp", {name1:"vlaue1", name2:"vlaue2"});
	});

	$("#open_dialog_property").on("click", function() {
		HT.openDialog("dialog_sub_window.jsp", null, {width: 500, height: 200, scrollbars: "no", resizable: "no"});
	});

	$("#open_dialog_property_percent").on("click", function() {
		HT.openDialog("dialog_sub_window.jsp", $("#open_dialog_property_percent"), {width: "80%", height: "20%", scrollbars: "yes", resizable: "no"});
	});

	$("#open_modeless_dialog").on("click", function() {
		HT.openModelessDialog("dialog_sub_window.jsp");
	});

	$("#open_modeless_dialog_property").on("click", function() {
		HT.openModelessDialog("dialog_sub_window.jsp", null, {width: 500, height: 200, scrollbars: "no", resizable: "no"});
	});

});
</script>
