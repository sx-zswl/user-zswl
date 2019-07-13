<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy" style="padding: 10px">

<div class="header_bar"><span id="nav_path"></span></div>

<p><button class="btn_gentle" id="open_div">打开模式层(默认属性)</button> $("#opened_div").openDiv();</p>
<p><button class="btn_gentle" id="open_div_property">打开模式层(设置属性，宽高为px)</button>  $("#opened_div").openDiv({width: 500, height: 200});</p>
<p><button class="btn_gentle" id="open_div_property_percent">打开模式层(设置宽高为%，同时增加按钮)</button>  HT.openDialog("dialog_sub_window.jsp", $("#opened_div").openDiv({width: "80%", height: "20%", buttons: {"关闭":function() {$(this).dialog("close"); }} });</p>

<hr class="double"/>

<p><button class="btn_gentle" id="open_modeless_div">打开非模式层(默认属性)</button>  $("#opened_div").openModelessDiv();</p>
<p><button class="btn_gentle" id="open_modeless_div_property">打开非模式层(设置属性，宽高为px)</button>  $("#opened_div").openModelessDiv({width: 500, height: 200});</p>

<div id="opened_div" style="display: none">
这是弹出层的内容
</div>

</body>

</html>

<script type="text/javascript">
$().ready(function() {
	$("#open_div").on("click", function() {
		$("#opened_div").openDiv();
	});

	$("#open_div_property").on("click", function() {
		$("#opened_div").openDiv({width: 500, height: 200});
	});

	$("#open_div_property_percent").on("click", function() {
		$("#opened_div").openDiv({width: "80%", height: "20%", buttons: {"关闭":function() {$(this).dialog("close"); }} });
	});

	$("#open_modeless_div").on("click", function() {
		$("#opened_div").openModelessDiv();
	});

	$("#open_modeless_div_property").on("click", function() {
		$("#opened_div").openModelessDiv({width: 500, height: 200});
	});

});
</script>
