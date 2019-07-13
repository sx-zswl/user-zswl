<%--
 * @author Roy Suen
 * @date: 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ page trimDirectiveWhitespaces="true" %>
<%@ page import="java.util.*"%>
<%@ page import="net.minidev.json.JSONObject"%>
<%@ page import="org.rs.framework.util.StringUtil"%>
<%@ page import="org.rs.framework.util.DateUtil"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<c:set var="ROOT" scope="application"><%= request.getContextPath() %></c:set>
<c:set var="SELF" scope="request"><%=request.getRequestURI()%></c:set>
<c:set var="TODAY" scope="application"><%=DateUtil.getCurrentDateString("yyyy-MM-dd")%></c:set>
<% request.setCharacterEncoding("GBK");%>
<%
String ROOT = request.getContextPath();
%>