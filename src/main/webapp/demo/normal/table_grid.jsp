<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">

<form>
<div class="panel first collapse close" maxH="300">
	<div class="header">
		<span id="nav_path"></span>
	</div>
	<div class="content">
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		姓名：<input type="text"/><br/>
		年龄：<input type="text"/>
		<button class="btn query">查询</button>
	</div>
</div>

<div class="toolbar">
	<ul>
		<li class="add"><a href="#"><span>添加</span></a></li>
		<li class="delete"><a href="#"><span>删除</span></a></li>
		<li class="edit"><a href="#"><span>修改</span></a></li>
		<li class="line"></li>
		<li class="export"><a href="#"><span>导出Excel</span></a></li>
	</ul>
</div>

<div class="grid">
<table>
<thead>
<tr>
	<th width="30">序号</th>
	<th width="70" orderBy="code">员工编号</th>
	<th width="50">姓名</th>
	<th width="30">性别</th>
	<th width="50">民族</th>
	<th width="120">部门</th>
	<th width="500">个人介绍</th>
</tr>
</thead>
<tbody>
<tr>
	<td>1</td>
	<td>88445501</td>
	<td>韩红</td>
	<td>女</td>
	<td>汉族</td>
	<td>科技信息部</td>
	<td>生于西藏昌都，祖籍山东德州，全国政协委员、全国青联常委、中华海外联谊会理事。父亲为汉族知青，母亲为藏族。她是中国大陆女歌手，创作型唱将。</td>
</tr>
<tr>
	<td>1</td>
	<td>88445501</td>
	<td>韩红</td>
	<td>女</td>
	<td>汉族</td>
	<td>科技信息部</td>
	<td>生于西藏昌都，祖籍山东德州，全国政协委员、全国青联常委、中华海外联谊会理事。父亲为汉族知青，母亲为藏族。她是中国大陆女歌手，创作型唱将。</td>
</tr>
<tr>
	<td>2</td>
	<td>88445501</td>
	<td>林青霞</td>
	<td>女</td>
	<td>汉族</td>
	<td>科技信息部</td>
	<td>(1954年11月3日－)，台湾电影演员，华语影坛最具传奇色彩的顶级巨星，主演影片达百部，从影生涯纵贯70至90年代、风格横跨文艺和武侠、女装及反串皆能独领风骚，被誉为"东南亚第一美女"。</td>
</tr>
<tr>
	<td>3</td>
	<td>88445501</td>
	<td>张学友</td>
	<td>男</td>
	<td>汉族</td>
	<td>宝丽金歌神事业部</td>
	<td>1961年7月10日生于香港，是一位在亚洲地区和整个华人社会具有影响力的实力派音乐巨星和著名电影演员，香港乐坛“四大天王”之一，在华语地区享有“歌神”的称誉。</td>
</tr>
</tbody>
</table>
</div>


<div id="pager_bar">
	<c:set var="targetForm" value="$('form')"/>
	<%@ include file="../../ht_pager.jsp"%>
	<%@ include file="../../ht_order.jsp"%>

	<ul class="button">
		<li><a href="#" id="btn_next" class="btn">下一步</a></li>
		<li><button class="btn">返回</button></li>
	</ul>

</div>

<div id="next_content" class="ht_div">
	<p><a href="#" class="btn">你好</a></p>
	<p><a href="#" class="btn">你好</a></p>
	<p><a href="#" class="btn">你好</a></p>
	</ul>
</div>

</form>
</body>

</html>

<script type="text/javascript">
$().ready(function() {
	$(".grid").htGrid({
		targetForm: $("form"),
		singleItemCallback:	function($tr) {
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
});
</script>
