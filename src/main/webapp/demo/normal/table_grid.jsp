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
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		������<input type="text"/><br/>
		���䣺<input type="text"/>
		<button class="btn query">��ѯ</button>
	</div>
</div>

<div class="toolbar">
	<ul>
		<li class="add"><a href="#"><span>���</span></a></li>
		<li class="delete"><a href="#"><span>ɾ��</span></a></li>
		<li class="edit"><a href="#"><span>�޸�</span></a></li>
		<li class="line"></li>
		<li class="export"><a href="#"><span>����Excel</span></a></li>
	</ul>
</div>

<div class="grid">
<table>
<thead>
<tr>
	<th width="30">���</th>
	<th width="70" orderBy="code">Ա�����</th>
	<th width="50">����</th>
	<th width="30">�Ա�</th>
	<th width="50">����</th>
	<th width="120">����</th>
	<th width="500">���˽���</th>
</tr>
</thead>
<tbody>
<tr>
	<td>1</td>
	<td>88445501</td>
	<td>����</td>
	<td>Ů</td>
	<td>����</td>
	<td>�Ƽ���Ϣ��</td>
	<td>�������ز������漮ɽ�����ݣ�ȫ����ЭίԱ��ȫ��������ί���л�������������¡�����Ϊ����֪�࣬ĸ��Ϊ���塣�����й���½Ů���֣������ͳ�����</td>
</tr>
<tr>
	<td>1</td>
	<td>88445501</td>
	<td>����</td>
	<td>Ů</td>
	<td>����</td>
	<td>�Ƽ���Ϣ��</td>
	<td>�������ز������漮ɽ�����ݣ�ȫ����ЭίԱ��ȫ��������ί���л�������������¡�����Ϊ����֪�࣬ĸ��Ϊ���塣�����й���½Ů���֣������ͳ�����</td>
</tr>
<tr>
	<td>2</td>
	<td>88445501</td>
	<td>����ϼ</td>
	<td>Ů</td>
	<td>����</td>
	<td>�Ƽ���Ϣ��</td>
	<td>(1954��11��3�գ�)��̨���Ӱ��Ա������Ӱ̳��ߴ���ɫ�ʵĶ������ǣ�����ӰƬ��ٲ�����Ӱ�����ݹ�70��90�������������պ�������Ůװ���������ܶ����ɧ������Ϊ"�����ǵ�һ��Ů"��</td>
</tr>
<tr>
	<td>3</td>
	<td>88445501</td>
	<td>��ѧ��</td>
	<td>��</td>
	<td>����</td>
	<td>�����������ҵ��</td>
	<td>1961��7��10��������ۣ���һλ�����޵�������������������Ӱ������ʵ�������־��Ǻ�������Ӱ��Ա�������̳���Ĵ�������֮һ���ڻ���������С����񡱵ĳ�����</td>
</tr>
</tbody>
</table>
</div>


<div id="pager_bar">
	<c:set var="targetForm" value="$('form')"/>
	<%@ include file="../../ht_pager.jsp"%>
	<%@ include file="../../ht_order.jsp"%>

	<ul class="button">
		<li><a href="#" id="btn_next" class="btn">��һ��</a></li>
		<li><button class="btn">����</button></li>
	</ul>

</div>

<div id="next_content" class="ht_div">
	<p><a href="#" class="btn">���</a></p>
	<p><a href="#" class="btn">���</a></p>
	<p><a href="#" class="btn">���</a></p>
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
				"���": function() {
					$( this ).dialog( "close" );
				},
				"�ر�": function() {
					$( this ).dialog( "close" );
				}}
		});
	});
});
</script>
