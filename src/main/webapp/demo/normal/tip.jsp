<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">

<div id="layout">
	<p>�������<input type="text" float="editRmb"/></p>
	<p>��<span float="rmb">1888.88</span></p>
	<p style="width: 600px; border: 1px solid blue; padding: 8px;" float="overflow">ʷ�ٷ��ǲ�˹��1955-2011���������ҡ���ҵ�ҡ�����ƻ����˾���ϴ����ˡ�ǰ�����ܲá�1976���ǲ�˹�����ѳ���ƻ�����Թ�˾���������ƻ����˾��ʮ��������븴�ˣ��Ⱥ��쵼���Ƴ���������������iMac��iPod��iPhone�ȷ���ȫ�������˵ĵ��Ӳ�Ʒ����̵ظı����ִ�ͨѶ��������������ķ�ʽ��2011��10��5����������������56�ꡣ�ǲ�˹�Ǹı��������ţ���ƾ����Ĵ����͹��˵��ǻۣ����ڱ����ϴ��£�����ȫ����Ѷ�Ƽ��͵��Ӳ�Ʒ�ĳ������ѵ��Ժ͵��Ӳ�Ʒ��ü�Լ����ƽ�񻯣��������ǰ���ϡ���ĵ��Ӳ�Ʒ��Ϊ�ִ��������һ���֡�</p>
</div>

</body>

</html>

<script type="text/javascript">
$().ready(function() {
	$("#layout").overflowTip();
	$("#layout").rmbTip();
	$("#layout").editRmbTip();
});
</script>
