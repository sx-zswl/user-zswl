<%--
 * @author Roy on 4/17/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">
<div class="header_bar"><span id="nav_path"></span></div>

<table width="800" class="normal" style="margin: 20px;">
<caption>不换行表格</caption>
<thead>
<tr>
	<th>投标方</th>
	<th width="90">已上传资料</th>
	<th width="60">状态</th>
	<th width="60">动作</th>
</tr>
</thead>
<tbody>
<tr>
	<td>新疆哈密市石油基地吐哈油田分公司招投标管理中心招标大厅新疆哈密市石油基地吐哈油田分公司招投标管理中心招标大厅</td>
	<td align="center" class="font warn">否</td>
	<td align="center">等待中</td>
	<td align="center"><a href="#" class="underline" onclick="showoff(this)">唱标</a></td>
</tr>
<tr>
	<td>新疆哈密市石油基地吐哈油田分公司招投标管理中心招标大厅</td>
	<td align="center" class="font warn">
		<select name="" id="">
			<option value="">111</option>
			<option value="">222</option>
			<option value="">333</option>
		</select>
	</td>
	<td align="center">等待中</td>
	<td align="center"><a href="#" class="underline" onclick="showoff(this)">唱标</a></td>
</tr>
</tbody>
</table>

<table width="800" class="normal wrap" style="margin: 20px;">
<caption>换行表格</caption>
<thead>
<tr>
	<th>投标方</th>
	<th width="90">已上传资料</th>
	<th width="60">状态</th>
	<th width="60">动作</th>
</tr>
</thead>
<tbody>
<tr>
	<td>新疆哈密市石油基地吐哈油田分公司招投标管理中心招标大厅新疆哈密市石油基地吐哈油田分公司招投标管理中心招标大厅</td>
	<td align="center" class="font warn">否</td>
	<td align="center">等待中</td>
	<td align="center"><a href="#" class="underline" onclick="showoff(this)">唱标</a></td>
</tr>
<tr>
	<td>新疆哈密市石油基地吐哈油田分公司招投标管理中心招标大厅</td>
	<td align="center" class="font warn">否</td>
	<td align="center">等待中</td>
	<td align="center"><a href="#" class="underline" onclick="showoff(this)">唱标</a></td>
</tr>
</tbody>
</table>

<table width="800" class="normal clear" style="margin: 20px;">
<caption>无隔行着色、无鼠标经过高亮</caption>
<thead>
<tr>
	<th>投标方</th>
	<th width="90">已上传资料</th>
	<th width="60">状态</th>
	<th width="60">动作</th>
</tr>
</thead>
<tbody>
<tr>
	<td>新疆哈密市石油基地吐哈油田分公司招投标管理中心招标大厅</td>
	<td align="center" class="font warn">否</td>
	<td align="center">等待中</td>
	<td align="center"><a href="#" class="underline" onclick="showoff(this)">唱标</a></td>
</tr>
<tr>
	<td>新疆哈密市石油基地吐哈油田分公司招投标管理中心招标大厅</td>
	<td align="center" class="font warn">否</td>
	<td align="center">等待中</td>
	<td align="center"><a href="#" class="underline" onclick="showoff(this)">唱标</a></td>
</tr>
</tbody>
</table>

<table width="800" border="0" class="normal" style="margin: 20px;">
<caption>多行标题表格</caption>
<thead>
<tr>
	<th rowspan="2">投标方</th>
	<th rowspan="2">投票报价（元）</th>
	<th rowspan="2">交货期（月）</th>
	<th colspan="4">评标结果</th>
</tr>
<tr>
	<th>商务</th>
	<th>技术</th>
	<th>总分</th>
	<th>名次</th>
</tr>
</thead>
<tbody>
<tr>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
</tr>
<tr>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
</tr>
</tbody>
</table>

<table width="800" border="0" class="normal black clear" style="margin: 20px;">
<caption>黑色边框表格</caption>
<thead>
<tr>
	<th rowspan="2">投标方</th>
	<th rowspan="2">投票报价（元）</th>
	<th rowspan="2">交货期（月）</th>
	<th colspan="4">评标结果</th>
</tr>
<tr>
	<th>商务</th>
	<th>技术</th>
	<th>总分</th>
	<th>名次</th>
</tr>
</thead>
<tbody>
<tr>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
</tr>
<tr>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
	<td>内容</td>
</tr>
</tbody>
</table>

</body>

</html>
