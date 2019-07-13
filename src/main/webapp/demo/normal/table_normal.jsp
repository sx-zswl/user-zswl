<%--
 * @author Roy on 4/17/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">
<div class="header_bar"><span id="nav_path"></span></div>

<table width="500" class="normal" style="margin: 20px;">
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

<table width="500" class="normal wrap" style="margin: 20px;">
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

<table width="500" class="normal clear" style="margin: 20px;">
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

</body>

</html>
