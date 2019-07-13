<%--
 * @author Roy
 * @date: 8/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Select Chained Demo"/>
<%
String markRemoteId = StringUtil.fixString(request.getParameter("mark-remote"));
String seriesRemoteId = StringUtil.fixString(request.getParameter("series-remote"));

Map<String, String> jsonMap = new HashMap<String, String>();
if(!StringUtil.isBlank(markRemoteId)) {
	if("bmw".equals(markRemoteId)) {
		jsonMap.put("series-1", "1 series");
		jsonMap.put("series-3", "3 series");
		jsonMap.put("selected", "series-3");
	} else if("audi".equals(markRemoteId)) {
		jsonMap.put("a1", "A1");
		jsonMap.put("a3", "A3");
	}
	
} else if(!StringUtil.isBlank(seriesRemoteId)) {
	if("series-1".equals(seriesRemoteId)) {
		jsonMap.put("3-doors", "3 doors");
		jsonMap.put("coupe", "Coupe");
		jsonMap.put("cabrio", "Cabrio");
	} else if("series-3".equals(seriesRemoteId)) {
		jsonMap.put("sedan", "Sedan");
		jsonMap.put("gran-tourismo", "Gran Tourismo");
	} else if("a1".equals(seriesRemoteId)) {
		jsonMap.put("sedan", "Sedan");
	} else if("a3".equals(seriesRemoteId)) {
		jsonMap.put("sportback", "Sportback");
		jsonMap.put("cabriolet", "Cabriolet");
	}
} else {
	jsonMap.put("-1", "--");
}

out.print(new JSONObject(jsonMap));
%>