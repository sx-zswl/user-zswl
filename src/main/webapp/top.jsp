<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="init.jsp"%>
<c:set var="pageTitle" value="原型框架系统"/>
<%@ include file="header.jsp"%>

<body class="theme" style="overflow: hidden">
<div id="top">
	<div class="top_nav">
		<div class="logo">
			<img src="images/logo.png"/>
			<img src="images/logo_title.png"/>
		</div>
		<div class="logo_name"><img src="images/logo_name.png"/></div>
		
		<ul class="nav">
			<li><a href="http://www.thyt.petrochina" target="_blank">油田公司</a></li>
			<li><a href="http://www.cnpc.com.cn" target="_blank">集团公司</a></li>
		</ul>
		<ul class="theme_list" id="theme_list">
			<li theme="default"><div class="selected">天蓝</div></li>
			<li theme="green"><div>绿色</div></li>
			<li theme="silver"><div>银色</div></li>
		</ul>
	</div>

	<div id="nav_menu">
		<ul>
			<li class="selected"><a href="user_desktop/main_container.jsp" target="main_container"><span><img src="images/icon_desktop.png"/>个人工作台</span></a><div id="num_tip" class="num_tip"><div class="left"></div><div class="content">36</div></div></li>
			<li><a href="budget/main_container.jsp" target="main_container"><span><img src="images/icon_platform.png"/>预算系统</span></a></li>
			<li><a href="demo/main_container.jsp" target="main_container"><span><img src="images/icon_platform.png"/>Demo</span></a></li>
			<li><a href="select_role.jsp"><span><img src="images/icon_refresh.png"/>切换角色</span></a></li>
			<li><a href="sidebar_1.html" target="_blank"><span><img src="images/icon_user.png"/>个人信息</span></a></li>
			<li><a href="index.jsp"><span><img src="images/icon_exit.png"/>退出系统</span></a></li>
			<li><a href="sidebar_1.html" target="_blank"><span><img src="images/icon_help.png"/>帮助</span></a></li>
			<li><span>当前用户：王五【物资供应处】</span></li>
		</ul>
	</div>
</div>

<script type="text/javascript">
$().ready(function() {
	//Nav Menu选择高亮
	$("#nav_menu").selectNavMenu();
});
</script>
