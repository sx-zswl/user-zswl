<%--
 * @author Roy on 8/2/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../../init.jsp"%>
<c:set var="pageTitle" value="Loading������ʾ"/>
<%@ include file="../../../header.jsp"%>

<body>

<div class="header_bar"><span id="nav_path"></span></div>

<h3>����Loading��ʾ</h3>
<div id="content" style="height: 1100px; border:1px solid #ccc;">�����Ǳ���������</div>

<div id="button_bar" class="button_bar">
	<ul>
		<li><a href="javascript:void(0)" id="btnLoad" class="btn_gentle">���ҿ�ʼ����</a></li>
	</ul>
</div>

</body>
</html>

<script type="text/javascript">
$().ready(function() {
	var $btnLoad = $("#btnLoad");
	$btnLoad.on("click", function() {
		var $content = $("#content");
//		alert(HT.browser + ", HT.isChrome=" + HT.isChrome + ", HT.isIE=" + HT.isIE);
//		alert("html=" + $("html").scrollTop() + ", body=" + $("body").scrollTop());
		$content.ajaxLoading({url:"data.jsp", style:"full"});
		$content.load("data.jsp", function(response, status, xhr) {
		});
	});
});
</script>