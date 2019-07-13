<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="top.jsp"%>
<%
final String modleId		= StringUtil.fixString(request.getParameter("modleId"));
%>
<iframe id="main_container" name="main_container" width="100%" height="0" frameborder="0" scrolling="auto" src="main_container.jsp?modleId=${param.modleId}"></iframe>
<%@ include file="bottom.jsp"%>


