<%--
 * Demo
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
			<div class="accordion_header">
				<h2><span>Folder</span>界面组件</h2>
			</div>
			<div class="accordion_content">
				<ul class="tree tree_folder close">
					<li><a>常用组件</a>
						<ul>
							<li><a href="${ROOT}/demo/normal/button.jsp" target="container">按钮</a></li>
							<li><a href="${ROOT}/demo/normal/button_bar.jsp" target="container">按钮栏</a></li>
							<li><a href="${ROOT}/demo/normal/link.jsp" target="container">超链接</a></li>
							<li><a href="${ROOT}/demo/normal/font.jsp" target="container">文字</a></li>
							<li><a href="${ROOT}/demo/normal/hr.jsp" target="container">分隔线</a></li>
							<li><a href="${ROOT}/demo/normal/nav_path.jsp" target="container">纯导航路径(不带panel)</a></li>
							<li><a href="${ROOT}/demo/normal/panel.jsp" target="container">Panel面板</a></li>
							<li><a href="${ROOT}/demo/normal/fieldset.jsp" target="container">Fieldset面板</a></li>
							<li><a href="${ROOT}/demo/normal/popup_window.jsp" target="container">弹出窗口</a></li>
							<li><a href="${ROOT}/demo/normal/popup_dialog.jsp" target="container">弹出对话框</a></li>
							<li><a href="${ROOT}/demo/normal/popup_div.jsp" target="container">弹出层</a></li>
							<li><a href="${ROOT}/demo/normal/popup_messager.jsp" target="container">弹出消息框</a></li>
							<li><a href="${ROOT}/demo/normal/tip.jsp" target="container">浮动Tip</a></li>
							<li><a href="${ROOT}/demo/normal/date_picker.jsp" target="container">日历控件</a></li>
							<li><a href="${ROOT}/demo/normal/stopwatch.jsp" target="container">秒表计时</a></li>
						</ul>
					</li>
					<li><a>表格</a>
						<ul>
							<li><a href="${ROOT}/demo/table/normal_table.jsp" target="container">普通表格(Normal Table)</a></li>
							<li><a href="${ROOT}/demo/table/multititle_table.jsp" target="container">多行标题表格(Multititle Table)</a></li>
							<li><a href="${ROOT}/demo/table/content_table.jsp" target="container">内容表格(Content Table)</a></li>
							<li><a href="${ROOT}/demo/table/grid_table.jsp" target="container">Grid表格(Grid Table)</a></li>
							<li><a href="${ROOT}/demo/table/nav_table.jsp" target="container">导航表格(Nav Table)</a></li>
							<li><a href="${ROOT}/demo/table/locked_table.jsp" target="container">锁定表格(Locked Table)</a></li>
						</ul>
					</li>
					<li class="expand"><a>表单</a>
						<ul>
							<li><a href="${ROOT}/demo/form/normal.jsp" target="container">基本元素</a></li>
							<li><a href="${ROOT}/demo/form/select_chained.jsp" target="container">下拉框联动</a></li>
							<li><a href="${ROOT}/demo/form/validation.jsp" target="container">表单校验-普通情况</a></li>
							<li><a href="${ROOT}/demo/form/validation_prefilled.jsp" target="container">表单校验-预填值</a></li>
							<li><a href="${ROOT}/demo/form/validation_custom.jsp" target="container">表单校验-自定义校验</a></li>
							<li><a href="${ROOT}/demo/form/validation_dynamic_removed.jsp" target="container">表单校验-动态移除</a></li>
							<li><a href="${ROOT}/demo/form/validation_dynamic_disabled.jsp" target="container">表单校验-动态关闭</a></li>
							<li><a href="${ROOT}/demo/form/history.jsp" target="container">退回后表单值保留</a></li>
						</ul>
					</li>
					<li class="expand"><a>菜单</a>
						<ul>
							<li><a href="${ROOT}/demo/menu/accordion.jsp" target="container">滑动菜单</a></li>
							<li><a href="${ROOT}/demo/menu/tree.jsp" target="container">Checkbox树形菜单</a></li>
							<li><a href="${ROOT}/demo/menu/tree_checked.jsp" target="container">树形菜单获取选中值</a></li>
							<li><a href="${ROOT}/demo/menu/big_tree.jsp" target="container">大数据量树形菜单</a></li>
						</ul>
					</li>
					<li class="expand"><a>界面布局</a>
						<ul>
							<li><a href="${ROOT}/demo/layout/horizontal.jsp" target="container">左右frame</a></li>
							<li><a href="${ROOT}/demo/layout/vertical.jsp" target="container">上下frame</a></li>
							<li><a href="${ROOT}/demo/layout/space.jsp" target="container">间距控制</a></li>
						</ul>
					</li>
					<li class="expand"><a>文件上传</a>
						<ul>
							<li><a href="${ROOT}/demo/upload/origin.jsp" target="container">原始窗口上传</a></li>
							<li><a href="${ROOT}/demo/upload/multiple.jsp" target="container">嵌入式多文件上传</a></li>
							<li><a href="${ROOT}/demo/upload/single.jsp" target="container">表单内单文件上传</a></li>
							<li><a href="${ROOT}/demo/upload/image.jsp" target="container">图片上传</a></li>
						</ul>
					</li>
					<li class="expand"><a>Ajax</a>
						<ul>
							<li><a href="${ROOT}/demo/ajax/loading_part.jsp" target="container">Loading局部显示</a></li>
							<li><a href="${ROOT}/demo/ajax/loading_full.jsp" target="container">Loading满屏显示</a></li>
						</ul>
					</li>
					<li class="expand"><a>打印</a>
						<ul>
							<li><a href="#" target="container">普通打印</a></li>
						</ul>
					</li>
					<li class="expand"><a>统计图</a>
						<ul>
							<li><a href="${ROOT}/demo/chart/bar.jsp" target="container">柱状图</a></li>
							<li><a href="${ROOT}/demo/chart/hbar.jsp" target="container">水平柱状图</a></li>
							<li><a href="${ROOT}/demo/chart/line.jsp" target="container">折线图</a></li>
							<li><a href="${ROOT}/demo/chart/curve.jsp" target="container">曲线图</a></li>
							<li><a href="${ROOT}/demo/chart/pie.jsp" target="container">饼状图</a></li>
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
<iframe id="container" name="container" width="100%" height="100%" frameborder="0" scrolling="auto" src="../welcome.jsp"></iframe>
<!-- 覆盖层，用来拖动时在iframe之上获取焦点 -->
<div id="mask"></div>

</body>
</html>
