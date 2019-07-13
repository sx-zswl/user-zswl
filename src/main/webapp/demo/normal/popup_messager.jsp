<%--
 * @author Roy
 * @date: 4/19/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle">Button Demo</c:set>
<%@ include file="../../header.jsp"%>

<body>
<div class="header_bar"><span id="nav_path"></span></div>

<p><button class="btn_metro" id="showMessager300x200">显示一个300x200的消息</button></p>
<p><button class="btn_metro" id="showMessagerFadeIn">显示一个fadeIn动画消息</button></p>
<p><button class="btn_metro" id="showMessagerShow">显示一个show动画消息</button></p>
<p><button class="btn_metro" id="showMessagerajax">显示一个show动画消息，不含html</button></p>
<p><button class="btn_metro" id="showMessagerDim">显示定义内容和标题消息</button></p>
<p><button class="btn_metro" id="showMessagerSec">一秒钟关闭消息</button></p>
<p><button class="btn_metro" id="showMessagerNoClose">不自动关闭消息</button></p>

</body>
</html>

<script>
$(document).ready(function(){
	$.messager.show(0,'送你一个Jquery Messager消息弹出插件！');
	$("#showMessager300x200").click(function(){
		$.messager.lays(300, 200);
		$.messager.show(0, '300x200的消息<br>源码爱好者（CoreFans.net）提供各类编程源码、书籍教程、JavaScript/CSS特效代码以及常用软件下载等，做有质量的学习型源码下载站。');
	});
	$("#showMessagerFadeIn").click(function(){
		$.messager.anim('fade', 2000);
		$.messager.show(0, 'fadeIn动画消息');
	});
	$("#showMessagerShow").click(function(){
		$.messager.anim('show', 1000);
		$.messager.show(0, 'show动画消息');
	});
	$("#showMessagerajax").click(function(){
		$.messager.anim('show', 1000);
		$.messager.show('源码爱好者', '使用“源码爱好者”作标题');
	});
	$("#showMessagerDim").click(function(){
		$.messager.show('<font color=red>自定义标题</font>', '<font color=green style="font-size:14px;font-weight:bold;">自定义内容</font>');
	});
	$("#showMessagerSec").click(function(){
		$.messager.show(0, '一秒钟关闭消息', 1000);
	});
	$("#showMessagerNoClose").click(function(){
		$.messager.show('不会关闭的消息', '要鼠标移出后或自己点关闭才可以哦！', 0);
	});
});
</script>
