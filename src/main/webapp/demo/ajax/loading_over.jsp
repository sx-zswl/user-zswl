<%--
 * @author Roy on 8/2/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../../init.jsp"%>
<c:set var="pageTitle" value="Loading覆盖显示"/>
<%@ include file="../../../header.jsp"%>

<body>

<div class="header_bar"><span id="nav_path"></span></div>

<h3>覆盖Loading显示</h3>
<p><button id="btnLoad5th" class="btn_gentle">点我开始加载第五区</button></p>
<div id="content5th" style="height: 120px; border:1px solid #ccc;">这里是被加载第五区</div>


<p><button id="btnLoad9th" class="btn_gentle orange">点我开始加载第九区</button></p>
<div id="content9th" style="height: 220px; border:1px solid #ccc;">这里是被加载第九区</div>
</body>
</html>

<script type="text/javascript">
$().ready(function() {
	$("#btnLoad5th").on("click", function() {
		var $content = $("#content5th");
		$content.ajaxLoading({style:"over"});
		$content.load("data.jsp", function(response, status, xhr) {
		});
	});

	$("#btnLoad9th").on("click", function() {
		var $content = $("#content9th");
		$content.ajaxLoading({style:"over"});
		$content.load("data.jsp", function(response, status, xhr) {
		});
	});
});
</script>