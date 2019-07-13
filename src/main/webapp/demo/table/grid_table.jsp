<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">

<form class="validate">
<div class="panel first collapse" maxH="300">
	<div class="header">
		<span id="nav_path"></span>
	</div>
	<div class="content">
		<table width="100%">
		<tr>
			<td width="300">姓名：<input type="text"/></td>
			<td width="300">年龄：<input type="text"/></td>
			<td></td>
		</tr>
		<tr>
			<td>姓名：<input type="text"/></td>
			<td>年龄：<input type="text"/></td>
			<td align="right"><button type="button" class="btn_gentle">查询</button></td>
		</tr>
		</table>
	</div>
</div>

<div class="toolbar">
	<ul>
		<li class="detail"><a href="#"><span>查看</span></a></li>
		<li class="add"><a href="#"><span>添加</span></a></li>
		<li class="delete"><a href="#"><span>删除</span></a></li>
		<li class="edit"><a href="#"><span>修改</span></a></li>
		<li class="refresh"><a href="#"><span>刷新</span></a></li>
		<li class="done"><a href="#"><span>完成</span></a></li>
		<li class="up"><a href="#"><span>上移</span></a></li>
		<li class="down"><a href="#"><span>下移</span></a></li>
		<li class="search"><a href="#"><span>查询</span></a></li>
		<li class="return"><a href="#"><span>退回</span></a></li>
		<li class="forward"><a href="#"><span>转发</span></a></li>
		<li class="dispatch"><a href="#"><span>分发</span></a></li>
		<li class="forbidden"><a href="#"><span>禁用</span></a></li>
		<li class="line"></li>
		<li class="import"><a href="#"><span>导入Excel</span></a></li>
		<li class="export"><a href="#"><span>导出Excel</span></a></li>
	</ul>
</div>

<div class="grid">
<table>
<thead>
<tr>
	<th width="30">序号</th>
	<th width="60" orderBy="code">员工编号</th>
	<th width="60">姓名</th>
	<th width="60">性别</th>
	<th width="60" orderBy="nation">民族</th>
	<th width="120">部门</th>
	<th width="500">个人介绍</th>
</tr>
</thead>
<tbody>
<tr>
	<td align="center">1</td>
	<td align="center"><a href="#" onclick="editInviteNotice('1000000044','1000000042');">发  布</a></td>
	<td align="center"><a href="#" id="abc">韩红</a></td>
	<td align="center">女</td>
	<td align="center">汉族</td>
	<td align="center">科技信息部</td>
	<td float="overflow" >生于西藏昌都，祖籍山东德州，全国政协委员、全国青联常委、中华海外联谊会理事。父亲为汉族知青，母亲为藏族。她是中国大陆女歌手，创作型唱将。</td>
</tr>
<tr>
	<td align="center">1</td>
	<td align="center">88445501</td>
	<td align="center">
		<select name="" id="">
			<option value="11">11</option>
			<option value="22">22</option>
			<option value="33">33</option>
		</select>
	</td>
	<td align="center">女</td>
	<td align="center">汉族</td>
	<td align="center"><input type="text" rule="number"/></td>
	<td float="overflow">生于西藏昌都，祖籍山东德州，全国政协委员、全国青联常委、中华海外联谊会理事。父亲为汉族知青，母亲为藏族。她是中国大陆女歌手，创作型唱将。</td>
</tr>
<tr>
	<td align="center">2</td>
	<td align="center" alt="eeee" title="(1954年11月3日－)，台湾电影演员，华语影坛最具传奇色彩的顶级巨星，主演影片达百部，从影生涯纵贯70至90年代、风格横跨文艺和武侠、女装及反串皆能独领风骚，被誉为东南亚第一美女。">88445501</td>
	<td align="center" float="overflow">林青霞林青霞林青霞林青霞林青霞</td>
	<td align="center">女</td>
	<td align="center">汉族</td>
	<td align="center">科技信息部</td>
	<td float="overflow">(1954年11月3日－)，台湾电影演员，华语影坛最具传奇色彩的顶级巨星，主演影片达百部，从影生涯纵贯70至90年代、风格横跨文艺和武侠、女装及反串皆能独领风骚，被誉为"东南亚第一美女"。</td>
</tr>
<tr>
	<td align="center">3</td>
	<td align="center">88445501</td>
	<td align="center">张学友</td>
	<td align="center">男</td>
	<td align="center">汉族</td>
	<td align="center">宝丽金歌神事业部</td>
	<td float="overflow">1961年7月10日生于香港，是一位在亚洲地区和整个华人社会具有影响力的实力派音乐巨星和著名电影演员，香港乐坛“四大天王”之一，在华语地区享有“歌神”的称誉。</td>
</tr>
<%
for(int i = 4; i <105; i++) {
%>
<tr>
	<td align="center"><%=i%></td>
	<td align="center">88445501</td>
	<td align="center">张学友</td>
	<td align="center">男</td>
	<td align="center">汉族</td>
	<td align="center">宝丽金歌神事业部</td>
	<td float="overflow">1961年7月10日生于香港，是一位在亚洲地区和整个华人社会具有影响力的实力派音乐巨星和著名电影演员，香港乐坛“四大天王”之一，在华语地区享有“歌神”的称誉。</td>
</tr>
<%
}
%>
</tbody>
</table>
</div>


<div id="pager_bar">
	<c:set var="targetForm" value="$('form')"/>
	<%@ include file="../../ht_pager.jsp"%>
	<%@ include file="../../ht_order.jsp"%>

	<ul class="button">
		<li><a href="#" id="btn_submit" class="btn_gentle submit">表单提交</a></li>
		<li><a href="#" id="btn_next" class="btn_gentle">下一步</a></li>
		<li><button type="button" class="btn_gentle">返回</button></li>
	</ul>

</div>

<div id="next_content" class="ht_div">
	<p><a href="#" class="btn_gentle">你好</a></p>
	<p><a href="#" class="btn_gentle">你好</a></p>
	<p><a href="#" class="btn_gentle">你好</a></p>
	</ul>
</div>

</form>
</body>

</html>

<script type="text/javascript">
$().ready(function() {
	$(".grid").htGrid({
		targetForm: $("form"),
		tableClass: "wrap",
		singleItemCallback:	function($tr) {
//						alert("$tr.html(): " + $tr.html());
					},
		dblClickCallback: function($tr) {
			alert("$tr.html(): " + $tr.html());
		}
	});

	$("#btn_next").click(function() {
		$("#next_content").openDiv({
			buttons: {
				"你好": function() {
					$( this ).dialog( "close" );
				},
				"关闭": function() {
					$( this ).dialog( "close" );
				}}
		});
	});


//	$("#abc").on("click.sssss", function() {
//		alert(5);
//	});
});
</script>
