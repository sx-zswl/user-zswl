<%--
 * @author Roy on 6/26/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="�������"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">
<div class="header_bar"><span id="nav_path"></span></div>

<div class='lock'>

<div class='thead_div'>
<table width="100%" class="normal" style="margin: 0px;">
<caption>�к����������</caption>
<thead>
<tr>
	<th width="30">���</th>
	<th width="30">Ͷ�귽</th>
	<th width="60">���ϴ�����</th>
	<th width="60">״̬</th>
	<th width="60">����</th>
	<th width="60">�������</th>
	<th width="60">���³�</th>
	<th width="60">�Ƿ�����</th>
	<th width="60">����</th>
	<th width="60">����</th>
	<th width="60">����</th>
	<th width="60">����</th>
	<th width="60">����</th>
	<th width="60">����</th>
	<th width="60">����</th>
	<th width="60">����</th>
	<th width="60">����</th>
	<th width="60">����</th>
	<th width="60">����</th>
	<th width="60">����</th>
	<th width="60">����</th>
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
	<td float='overflow'>�й��˹�ҵ����${seq}</td>
	<td align="center" class="font warn">��</td>
	<td align="center">�ȴ���</td>
	<td align="center">168</td>
	<td align="center">2014</td>
	<td align="center">����${seq}</td>
	<td align="center">��</td>
	<td align="center">���${seq}-1</td>
	<td align="center">���${seq}-2</td>
	<td align="center">���${seq}-3</td>
	<td align="center">���${seq}-4</td>
	<td align="center">���${seq}-5</td>
	<td align="center">���${seq}-6</td>
	<td align="center">���${seq}-7</td>
	<td align="center">���${seq}-8</td>
	<td align="center">���${seq}-9</td>
	<td align="center">���${seq}-10</td>
	<td align="center">���${seq}-11</td>
	<td align="center">���${seq}-12</td>
	<td align="center">���${seq}-13</td>
</tr>
</c:forEach>
</tbody>
</table>
</div>

</div>

<div style="height:30px;" class="placeholder">
�����·������ռ���ߣ���Ҫʹ��class="placeholder"��ʶ�����ҽ�placeholder����Ϊ�Լ����ԡ���
</div>

</body>

</html>
