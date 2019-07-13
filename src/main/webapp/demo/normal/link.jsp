<%--
 * @author Roy
 * @date: 6/14/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Link Demo"/>
<%@ include file="../../header.jsp"%>

<style type="text/css">
body { padding: 10px; }
</style>

<body>

<div class="header_bar"><span id="nav_path"></span></div>

<p><a href="#">超链接一（默认）</a></p>
<p><a href="#" class="static">超链接二（static）</a></p>
<p><a href="#" class="underline">超链接三（underline）</a></p>
<p><a href="#" class="block">超链接四（block）</a></p>
<p><a href="#" class="highlight">超链接五</a></p>

</body>
</html>
