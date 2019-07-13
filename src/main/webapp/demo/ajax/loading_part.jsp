<%--
 * @author Roy on 8/2/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../../init.jsp"%>
<c:set var="pageTitle" value="Loading局部显示"/>
<%@ include file="../../../header.jsp"%>

<body>

<div class="header_bar"><span id="nav_path"></span></div>

<h3>局部Loading显示（默认样式：居中，上边距6px）</h3>
<p><button id="btnLoad" class="btn_gentle">点我开始加载</button></p>
<div id="content" style="height: 120px; border:1px solid #ccc;">这里是被加载区域</div>


<h3>局部Loading显示（自定义样式）</h3>
<p><button id="btnLoad2" class="btn_gentle">点我开始加载</button></p>
<div id="content2" style="height: 120px; border:1px solid #ccc;">这里是被加载区域</div>

</body>
</html>

<script type="text/javascript">
$().ready(function() {
	$("#btnLoad").on("click", function() {
		var $content = $("#content");
		$content.ajaxLoading({url:"data.jsp", style:"part"});
		$content.load("data.jsp", function(response, status, xhr) {
		});
	});

	$("#btnLoad2").on("click", function() {
		var $content2 = $("#content2");
		$content2.ajaxLoading({url:"data.jsp?ajaxId=1", style:"part"});
		$content2.load("data.jsp?ajaxId=1", function(response, status, xhr) {
		});
	});
});
</script>