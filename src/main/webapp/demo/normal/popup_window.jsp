<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy" style="padding: 10px">

<div class="header_bar"><span id="nav_path"></span></div>

<p><button class="btn_gentle" id="open_window">打开窗口(默认属性)</button>  HT.openWin("window_sub_window.jsp");</p>
<p><button class="btn_gentle" id="open_window_name">打开窗口(默认属性，传入window name)</button>  HT.openWin("window_sub_window.jsp", "htWindow");</p>
<p><button class="btn_gentle" id="open_window_property">打开窗口(设置属性，宽高为px)</button>  HT.openWin("window_sub_window.jsp", {width: 500, height: 200, scrollbars: "no", resizable: "no"});</p>
<p><button class="btn_gentle" id="open_window_property_percent">打开窗口(设置属性，宽高为%)</button>  HT.openWin("window_sub_window.jsp", {width: "80%", height: "20%", scrollbars: "yes", resizable: "no"});</p>
<p><button class="btn_gentle" id="open_window_name_property">打开窗口(传入window name，并且设置属性)</button>  HT.openWin("window_sub_window.jsp", "htWindow", {width: 500, height: 200, scrollbars: "no", resizable: "no"});</p>

</body>

</html>

<script type="text/javascript">

$().ready(function() {

	$("#open_window").on("click", function() {
		HT.openWin("window_sub_window.jsp");
	});

	$("#open_window_name").on("click", function() {
		HT.openWin("window_sub_window.jsp", "htWindow");
	});

	$("#open_window_property").on("click", function() {
		HT.openWin("window_sub_window.jsp", {width: 500, height: 200, scrollbars: "no", resizable: "no"});
	});

	$("#open_window_property_percent").on("click", function() {
		HT.openWin("window_sub_window.jsp", {width: "80%", height: "20%", scrollbars: "yes", resizable: "no"});
	});

	$("#open_window_name_property").on("click", function() {
		HT.openWin("window_sub_window.jsp", "htWindow", {width: 500, height: 200, scrollbars: "no", resizable: "no"});
	});

});

</script>
