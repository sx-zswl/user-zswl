<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../init.jsp"%>
<c:set var="pageTitle" value="Main Container"/>
<%@ include file="../header.jsp"%>

<body class="theme lazy">

<div id="left">
	<div id="sidebar_s">
		<div class="collapse">
			<div class="toggle_collapse"><div></div></div>
		</div>
	</div>
	<div id="sidebar">
		<div class="toggle_collapse"><h2>主菜单</h2><div>收缩</div></div>

		<div class="accordion" fillSpace="sidebar">
			<ul class="tree tree_folder">
					<li><a>业务操作</a>
						<ul>
							<li class="selected"><a href="todo.jsp" target="container">待办任务</a></li>
						</ul>
					</li>
					<li class="expand"><a>个人信息</a>
						<ul>
							<li><a href="../comming_soon.jsp" target="container">修改密码</a></li>
						</ul>
					</li>
				</ul>
		</div>

	</div>
</div>


<div id="split_bar"></div>
<div id="split_bar_proxy"></div>


<c:set var="sysName" scope="session" value="Demo系统"/>
<iframe id="container" name="container" width="100%" height="100%" frameborder="0" scrolling="auto" src="todo.jsp"></iframe>
<!-- 覆盖层，用来拖动时在iframe之上获取焦点 -->
<div id="mask"></div>

</body>
</html>
