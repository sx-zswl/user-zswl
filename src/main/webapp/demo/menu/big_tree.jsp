<%--
 * @author Roy on 4/12/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Big Data Tree Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">

<div class="header_bar"><span id="nav_path"></span></div>

<h3>�����������ӳټ��أ�ʾ��Ĭ����100000�����ڵ㣬ģ�����ʱ��̨����ʱ�䳤Ϊ1�룩</h3>
<p>˵����
	<ol class="number">
		<li>�ӳټ��أ�ͨ����ul�ڵ�������lazy="true"����</li>
		<li>���Σ���ע��tree_data.jsp�ļ��������ṩ��ʼ�������ݣ�ͨ����ul�ڵ��¹���param���ԣ�ֵΪjson�ַ���</li>
		<li>��������ݲ���Ϥ����ֱ�ӷ���demo/menu/tree_data.jsp��demo/menu/tree_data_lazy.jsp��ͨ��Դ��ɿ��������������</li>
	</ol>
</p>
<ul id="tree_root" class="tree tree_folder close">
	
</ul>

</body>

</html>

<script type="text/javascript">
$().ready(function() {
	var $tree = $("#tree_root");
	$tree.load("tree_data.jsp", function() {
		$tree.htTree({
			lazyUrl: 'tree_data_lazy.jsp',
			lazyCallback: function($node) {
			}
		});
	});
});
</script>
