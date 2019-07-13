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
			<td width="300">������<input type="text"/></td>
			<td width="300">���䣺<input type="text"/></td>
			<td></td>
		</tr>
		<tr>
			<td>������<input type="text"/></td>
			<td>���䣺<input type="text"/></td>
			<td align="right"><button type="button" class="btn_gentle">��ѯ</button></td>
		</tr>
		</table>
	</div>
</div>

<div class="toolbar">
	<ul>
		<li class="detail"><a href="#"><span>�鿴</span></a></li>
		<li class="add"><a href="#"><span>���</span></a></li>
		<li class="delete"><a href="#"><span>ɾ��</span></a></li>
		<li class="edit"><a href="#"><span>�޸�</span></a></li>
		<li class="refresh"><a href="#"><span>ˢ��</span></a></li>
		<li class="done"><a href="#"><span>���</span></a></li>
		<li class="up"><a href="#"><span>����</span></a></li>
		<li class="down"><a href="#"><span>����</span></a></li>
		<li class="search"><a href="#"><span>��ѯ</span></a></li>
		<li class="return"><a href="#"><span>�˻�</span></a></li>
		<li class="forward"><a href="#"><span>ת��</span></a></li>
		<li class="dispatch"><a href="#"><span>�ַ�</span></a></li>
		<li class="forbidden"><a href="#"><span>����</span></a></li>
		<li class="line"></li>
		<li class="import"><a href="#"><span>����Excel</span></a></li>
		<li class="export"><a href="#"><span>����Excel</span></a></li>
	</ul>
</div>

<div class="grid">
<table>
<thead>
<tr>
	<th width="30">���</th>
	<th width="60" orderBy="code">Ա�����</th>
	<th width="60">����</th>
	<th width="60">�Ա�</th>
	<th width="60" orderBy="nation">����</th>
	<th width="120">����</th>
	<th width="500">���˽���</th>
</tr>
</thead>
<tbody>
<tr>
	<td align="center">1</td>
	<td align="center"><a href="#" onclick="editInviteNotice('1000000044','1000000042');">��  ��</a></td>
	<td align="center"><a href="#" id="abc">����</a></td>
	<td align="center">Ů</td>
	<td align="center">����</td>
	<td align="center">�Ƽ���Ϣ��</td>
	<td float="overflow" >�������ز������漮ɽ�����ݣ�ȫ����ЭίԱ��ȫ��������ί���л�������������¡�����Ϊ����֪�࣬ĸ��Ϊ���塣�����й���½Ů���֣������ͳ�����</td>
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
	<td align="center">Ů</td>
	<td align="center">����</td>
	<td align="center"><input type="text" rule="number"/></td>
	<td float="overflow">�������ز������漮ɽ�����ݣ�ȫ����ЭίԱ��ȫ��������ί���л�������������¡�����Ϊ����֪�࣬ĸ��Ϊ���塣�����й���½Ů���֣������ͳ�����</td>
</tr>
<tr>
	<td align="center">2</td>
	<td align="center" alt="eeee" title="(1954��11��3�գ�)��̨���Ӱ��Ա������Ӱ̳��ߴ���ɫ�ʵĶ������ǣ�����ӰƬ��ٲ�����Ӱ�����ݹ�70��90�������������պ�������Ůװ���������ܶ����ɧ������Ϊ�����ǵ�һ��Ů��">88445501</td>
	<td align="center" float="overflow">����ϼ����ϼ����ϼ����ϼ����ϼ</td>
	<td align="center">Ů</td>
	<td align="center">����</td>
	<td align="center">�Ƽ���Ϣ��</td>
	<td float="overflow">(1954��11��3�գ�)��̨���Ӱ��Ա������Ӱ̳��ߴ���ɫ�ʵĶ������ǣ�����ӰƬ��ٲ�����Ӱ�����ݹ�70��90�������������պ�������Ůװ���������ܶ����ɧ������Ϊ"�����ǵ�һ��Ů"��</td>
</tr>
<tr>
	<td align="center">3</td>
	<td align="center">88445501</td>
	<td align="center">��ѧ��</td>
	<td align="center">��</td>
	<td align="center">����</td>
	<td align="center">�����������ҵ��</td>
	<td float="overflow">1961��7��10��������ۣ���һλ�����޵�������������������Ӱ������ʵ�������־��Ǻ�������Ӱ��Ա�������̳���Ĵ�������֮һ���ڻ���������С����񡱵ĳ�����</td>
</tr>
<%
for(int i = 4; i <105; i++) {
%>
<tr>
	<td align="center"><%=i%></td>
	<td align="center">88445501</td>
	<td align="center">��ѧ��</td>
	<td align="center">��</td>
	<td align="center">����</td>
	<td align="center">�����������ҵ��</td>
	<td float="overflow">1961��7��10��������ۣ���һλ�����޵�������������������Ӱ������ʵ�������־��Ǻ�������Ӱ��Ա�������̳���Ĵ�������֮һ���ڻ���������С����񡱵ĳ�����</td>
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
		<li><a href="#" id="btn_submit" class="btn_gentle submit">���ύ</a></li>
		<li><a href="#" id="btn_next" class="btn_gentle">��һ��</a></li>
		<li><button type="button" class="btn_gentle">����</button></li>
	</ul>

</div>

<div id="next_content" class="ht_div">
	<p><a href="#" class="btn_gentle">���</a></p>
	<p><a href="#" class="btn_gentle">���</a></p>
	<p><a href="#" class="btn_gentle">���</a></p>
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
				"���": function() {
					$( this ).dialog( "close" );
				},
				"�ر�": function() {
					$( this ).dialog( "close" );
				}}
		});
	});


//	$("#abc").on("click.sssss", function() {
//		alert(5);
//	});
});
</script>
