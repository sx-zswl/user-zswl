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
<p><button id="btnLoad5th" class="btn_gentle">���ҿ�ʼ���ص�����</button></p>
<div id="content5th" style="height: 120px; border:1px solid #ccc;">�����Ǳ����ص�����</div>


<p><button id="btnLoad9th" class="btn_gentle orange">���ҿ�ʼ���صھ���</button></p>
<div id="content9th" style="height: 220px; border:1px solid #ccc;">�����Ǳ����صھ���</div>
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