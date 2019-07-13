<%--
 * @author Roy on 4/17/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">
<div class="header_bar"><span id="nav_path"></span></div>

<div class="stopwatch" style="margin: 20px;"></div>

</body>

</html>

<script type="text/javascript">
$().ready(function() {
	//√Î±Ì
	$(".stopwatch").stopwatch();
});
</script>
