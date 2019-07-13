<%--
 * @author Roy on 7/25/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="¹¦ÄÜÄ£¿é"/>
<%@ include file="../../header.jsp"%>

<body class="noscroll lazy">
<div class="header_bar"><span id="nav_path"></span></div>

<div id="ht_frame_vertical">
	<div id="frame_side" style="height:180px">
		<iframe name="frame_side" width="100%" height="100%" frameborder="0" scrolling="auto" src="bottom.jsp"></iframe>
	</div>	
	
	<div id="frame_container">
		<iframe name="frame_container" width="100%" height="100%" frameborder="0" scrolling="auto" src="bottom.jsp"></iframe>
	</div>
</div>

</body>
</html>
