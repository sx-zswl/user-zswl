<%--
 * @author Roy Suen
 * @date: 5/14/2014
--%>
<%@ page contentType="text/html; charset=GBK" %>
<script type="text/javascript" src="${ROOT}/js/LodopFuncs.js"></script>
<object  id="LODOP_OB" classid="clsid:2105C259-1E0C-4534-8141-A753534CB4CA" width="0" height="0"> 
	<embed id="LODOP_EM" type="application/x-print-lodop" width="0" height="0"></embed>
	<param name="Caption" value="我是打印控件lodop"/>
	<param name="Color" value="#cccccc"/>
	<param name="Border" value="0"/>
</object>

<script language="javascript"> 
var CSS = "<link href='${ROOT}/css/ht_print.css' type='text/css' rel='stylesheet'/>";

function getHtLodop() {
	return getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));;
}

function setCenter(html) {
	var reportHtml = "<table width='100%' border='0'>";
	reportHtml += "<tr><td align='center'>";
	reportHtml += html;
	reportHtml += "</td></tr>";
	reportHtml += "</table>";
	return reportHtml;
}
</script>
