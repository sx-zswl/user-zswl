<%--
 * Demo
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Accordion Menu Demo"/>
<%@ include file="../../header.jsp"%>

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
			<div class="accordion_header">
				<h2><span>Folder</span>Accordion 1</h2>
			</div>
			<div class="accordion_content">
				<ul class="tree tree_folder close">
					<li><a>常用组件</a>
						<ul>
							<li><a href="#" target="container">按钮</a></li>
							<li><a href="#" target="container">按钮栏</a></li>
							<li><a href="#" target="container">超链接</a></li>
						</ul>
					</li>
					<li><a>表格</a>
						<ul>
							<li><a href="#" target="container">普通表格(Normal Table)</a></li>
							<li><a href="#" target="container">多行标题表格(Multititle Table)</a></li>
							<li><a href="#" target="container">内容表格(Content Table)</a></li>
							<li><a href="#" target="container">Grid表格(Grid Table)</a></li>
							<li><a href="#" target="container">导航表格(Nav Table)</a></li>
						</ul>
					</li>
					<li class="expand"><a>表单</a>
						<ul>
							<li><a href="#" target="container">基本元素</a></li>
							<li><a href="#" target="container">下拉框联动</a></li>
							<li><a href="#" target="container">表单校验-普通情况</a></li>
							<li><a href="#" target="container">表单校验-预填值</a></li>
							<li><a href="#" target="container">表单校验-自定义校验</a></li>
						</ul>
					</li>
					<li class="expand"><a>菜单</a>
						<ul>
							<li><a href="#" target="container">Checkbox树形菜单</a></li>
							<li><a href="#" target="container">滑动菜单</a></li>
						</ul>
					</li>
					<li class="expand"><a>界面布局</a>
						<ul>
							<li><a href="#" target="container">左右frame</a></li>
							<li><a href="#" target="container">上下frame</a></li>
							<li><a href="#" target="container">间距控制</a></li>
						</ul>
					</li>
				</ul>
			</div>

			<div class="accordion_header">
				<h2><span>Folder</span>Accordion 2</h2>
			</div>
			<div class="accordion_content">
				<ul class="tree tree_folder close">
					<li><a>常用组件</a>
						<ul>
							<li><a href="#" target="container">按钮</a></li>
							<li><a href="#" target="container">按钮栏</a></li>
							<li><a href="#" target="container">超链接</a></li>
						</ul>
					</li>
					
				</ul>
			</div>
		</div>

	</div>
</div>


<div id="split_bar"></div>
<div id="split_bar_proxy"></div>


<c:set var="sysName" scope="session" value="Demo系统"/>
<iframe id="container" name="container" width="100%" height="100%" frameborder="0" scrolling="auto" src="../../welcome.jsp"></iframe>
<!-- 覆盖层，用来拖动时在iframe之上获取焦点 -->
<div id="mask"></div>

</body>
</html>
