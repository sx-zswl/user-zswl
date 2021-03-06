﻿<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="init.jsp"%>
<c:set var="pageTitle" value="Main Container"/>
<%@ include file="header.jsp"%>

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
				<h2><span>Folder</span>界面组件</h2>
			</div>
			<div class="accordion_content">
				<ul class="tree tree_folder">
					<li><a href="tabsPage.html" target="navTab">主框架面板</a>
						<ul>
							<li><a href="main.html" target="container" rel="main">我的主页</a></li>
							<li><span>页面一(外部页面)</span></li>
							<li><a href="demo_page2.html" target="navTab" rel="external" external="true">iframe navTab页面</a></li>
							<li><a href="demo_page1.html" target="navTab" rel="page1" fresh="false">替换页面一</a></li>
							<li><a href="demo_page2.html" target="navTab" rel="page2">页面二</a></li>
							<li><a href="demo_page4.html" target="navTab" rel="page3" title="页面三（自定义标签名）">页面三</a></li>
							<li><a href="demo_page4.html" target="navTab" rel="page4" fresh="false">测试页面（fresh="false"）</a></li>
							<li><a href="w_editor.html" target="navTab">表单提交会话超时</a></li>
							<li><a href="demo/common/ajaxTimeout.html" target="navTab">navTab会话超时</a></li>
							<li><a href="demo/common/ajaxTimeout.html" target="dialog">dialog会话超时</a></li>
						</ul>
					</li>
					
					<li><a>常用组件</a>
						<ul>
							<li><a href="w_panel.html" target="navTab" rel="w_panel">面板</a></li>
							<li><a href="w_tabs.html" target="navTab" rel="w_tabs">选项卡面板</a></li>
							<li><a href="w_dialog.html" target="navTab" rel="w_dialog">弹出窗口</a></li>
							<li><a href="w_alert.html" target="navTab" rel="w_alert">提示窗口</a></li>
							<li><a href="w_list.html" target="navTab" rel="w_list">CSS表格容器</a></li>
							<li><a href="demo_page1.html" target="navTab" rel="w_table">表格容器</a></li>
							<li><a href="w_removeSelected.html" target="navTab" rel="w_table">表格数据库排序+批量删除</a></li>
							<li><a href="w_tree.html" target="navTab" rel="w_tree">树形菜单</a></li>
							<li><a href="w_accordion.html" target="navTab" rel="w_accordion">滑动菜单</a></li>
							<li><a href="w_editor.html" target="navTab" rel="w_editor">编辑器</a></li>
							<li><a href="w_datepicker.html" target="navTab" rel="w_datepicker">日期控件</a></li>
							<li><a href="demo/database/db_widget.html" target="navTab" rel="db">suggest+lookup+主从结构</a></li>
							<li><a href="demo/sortDrag/1.html" target="navTab" rel="sortDrag">单个sortDrag示例</a></li>
							<li><a href="demo/sortDrag/2.html" target="navTab" rel="sortDrag">多个sortDrag示例</a></li>
						</ul>
					</li>
							
					<li><a>表单组件</a>
						<ul>
							<li><a href="w_validation.html" target="navTab" rel="w_validation">表单验证</a></li>
							<li><a href="w_button.html" target="navTab" rel="w_button">按钮</a></li>
							<li><a href="w_textInput.html" target="navTab" rel="w_textInput">文本框/文本域</a></li>
							<li><a href="w_combox.html" target="navTab" rel="w_combox">下拉菜单</a></li>
							<li><a href="w_checkbox.html" target="navTab" rel="w_checkbox">多选框/单选框</a></li>
							<li><a href="demo_upload.html" target="navTab" rel="demo_upload">iframeCallback表单提交</a></li>
							<li><a href="w_uploadify.html" target="navTab" rel="w_uploadify">uploadify多文件上传</a></li>
						</ul>
					</li>
					<li><a>组合应用</a>
						<ul>
							<li><a href="demo/pagination/layout1.html" target="navTab" rel="pagination1">局部刷新分页1</a></li>
							<li><a href="demo/pagination/layout2.html" target="navTab" rel="pagination2">局部刷新分页2</a></li>
						</ul>
					</li>
					<li><a href="dwz.frag.xml" target="navTab" external="true">dwz.frag.xml</a></li>
				</ul>
			</div>
			<div class="accordion_header">
				<h2><span>Folder</span>典型页面</h2>
			</div>
			<div class="accordion_content">
				<ul class="tree tree_folder tree_check">
					<li><a href="demo_page1.html" target="navTab" rel="demo_page1">查询我的客户</a></li>
					<li><a href="demo_page1.html" target="navTab" rel="demo_page2">表单查询页面</a></li>
					<li><a href="demo_page4.html" target="navTab" rel="demo_page4">表单录入页面</a></li>
					<li><a href="demo_page5.html" target="navTab" rel="demo_page5">有文本输入的表单</a></li>
					<li><a href="javascript:;">有提示的表单输入页面</a>
						<ul>
							<li><a href="javascript:;">页面一</a></li>
							<li><a href="javascript:;">页面二</a></li>
						</ul>
					</li>
					<li><a href="javascript:;">选项卡和图形的页面</a>
						<ul>
							<li><a href="javascript:;">页面一</a></li>
							<li><a href="javascript:;">页面二</a></li>
						</ul>
					</li>
					<li><a href="javascript:;">选项卡和图形切换的页面</a></li>
					<li><a href="javascript:;">左右两个互动的页面</a></li>
					<li><a href="javascript:;">列表输入的页面</a></li>
					<li><a href="javascript:;">双层栏目列表的页面</a></li>
				</ul>
			</div>
			<div class="accordion_header">
				<h2><span>Folder</span>流程演示</h2>
			</div>
			<div class="accordion_content">
				<ul class="tree">
					<li><a href="newPage1.html" target="dialog" rel="dlg_page">列表</a></li>
					<li><a href="newPage1.html" target="dialog" rel="dlg_page">列表</a></li>
					<li><a href="newPage1.html" target="dialog" rel="dlg_page2">列表</a></li>
					<li><a href="newPage1.html" target="dialog" rel="dlg_page2">列表</a></li>
					<li><a href="newPage1.html" target="dialog" rel="dlg_page2">列表</a></li>
				</ul>
			</div>
		</div>

	</div>
</div>


<div id="split_bar"></div>
<div id="split_bar_proxy"></div>


<c:set var="sysName" scope="session" value="物资供应处网上办公平台"/>
<iframe id="container" name="container" width="100%" height="100%" frameborder="no" scrolling="no" src="welcome.jsp" style="overflow:auto"></iframe>
<!-- 覆盖层，用来拖动时在iframe之上获取焦点 -->
<div id="mask"></div>

</body>
</html>