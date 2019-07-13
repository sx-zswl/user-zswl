<%--
 * @author Roy
 * @date: 4/11/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="init.jsp"%>
<c:set var="pageTitle" value="JS Unit Test"/>
<%@ include file="header.jsp"%>

<body>

<table id="table">
<tr>
	<td></td>
</tr>
</table>

</body>
</html>

<script type="text/javascript">
$().ready(function() {
	var result;

	if($("table")[0]) result = true;
	else result = false;
	alert(result);

});
</script>
