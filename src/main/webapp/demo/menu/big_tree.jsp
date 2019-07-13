<%--
 * @author Roy on 4/12/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Big Data Tree Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">

<div class="header_bar"><span id="nav_path"></span></div>

<h3>大数据量，延迟加载（示例默认有100000个树节点，模拟加载时后台处理时间长为1秒）</h3>
<p>说明：
	<ol class="number">
		<li>延迟加载：通过在ul节点中设置lazy="true"标明</li>
		<li>传参：请注意tree_data.jsp文件，用来提供初始加载数据，通过在ul节点下构造param属性，值为json字符串</li>
		<li>如果对数据不熟悉，可直接访问demo/menu/tree_data.jsp和demo/menu/tree_data_lazy.jsp，通过源码可看到构造出的数据</li>
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
