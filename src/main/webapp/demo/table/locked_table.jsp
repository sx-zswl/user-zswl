<%--
 * @author Roy on 6/26/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="锁定表格"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">
<div class="header_bar"><span id="nav_path"></span></div>

<div class='lock'>

<div class='thead_div'>
<table width="100%" class="normal" style="margin: 0px;">
<caption>行和列锁定表格</caption>
<thead>
<tr>
	<th width="30">序号</th>
	<th width="30">投标方</th>
	<th width="60">已上传资料</th>
	<th width="60">状态</th>
	<th width="60">人数</th>
	<th width="60">成立年份</th>
	<th width="60">董事长</th>
	<th width="60">是否上市</th>
	<th width="60">城市</th>
	<th width="60">城市</th>
	<th width="60">城市</th>
	<th width="60">城市</th>
	<th width="60">城市</th>
	<th width="60">城市</th>
	<th width="60">城市</th>
	<th width="60">城市</th>
	<th width="60">城市</th>
	<th width="60">城市</th>
	<th width="60">城市</th>
	<th width="60">城市</th>
	<th width="60">城市</th>
</tr>
</thead>
</table>
</div>

<div class='tbody_div'>
<table width="100%" class="normal" style="margin: 0px;">
<tbody>
<c:forEach begin="1" end="100" var="seq">
<tr>
	<td align="center">${seq}</td>
	<td float='overflow'>中国核工业集团${seq}</td>
	<td align="center" class="font warn">否</td>
	<td align="center">等待中</td>
	<td align="center">168</td>
	<td align="center">2014</td>
	<td align="center">张三${seq}</td>
	<td align="center">是</td>
	<td align="center">香港${seq}-1</td>
	<td align="center">香港${seq}-2</td>
	<td align="center">香港${seq}-3</td>
	<td align="center">香港${seq}-4</td>
	<td align="center">香港${seq}-5</td>
	<td align="center">香港${seq}-6</td>
	<td align="center">香港${seq}-7</td>
	<td align="center">香港${seq}-8</td>
	<td align="center">香港${seq}-9</td>
	<td align="center">香港${seq}-10</td>
	<td align="center">香港${seq}-11</td>
	<td align="center">香港${seq}-12</td>
	<td align="center">香港${seq}-13</td>
</tr>
</c:forEach>
</tbody>
</table>
</div>

</div>

<div style="height:30px;" class="placeholder">
我是下方的领地占有者，需要使用class="placeholder"标识。（我叫placeholder，我为自己代言。）
</div>

</body>

</html>
