<%--
 * @author Roy on 5/15/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="��ӡ - ����ʽ"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">
<div class="header_bar"><span id="nav_path"></span></div>
<%@ include file="../../header_print.jsp"%>

<p>����ʽ��ʾҳ��չ��ʱ��ͷ������һ��table�������������һ��table����ʱ��ͷ��Ҫ��LODOP.ADD_PRINT_HTM����ӡ��ͬʱ�趨Ϊҳüҳ��ģʽ��LODOP.SET_PRINT_STYLEA(0,"ItemType",1)�����������Ҫ��LODOP.ADD_PRINT_TABLE��ӡ��</p>
<p>˵����thead��tfoot�ڷ�ҳʱÿҳʱ������ʾ��ע�ⰴ��׼ʹ�á�</p>

���ڲ���һ�£�<a href="javascript:checkIsInstall()">�鿴�����Ƿ�װ�ؼ�</a>

<div align="center">

<table width="850" id="report_header" class="print">
<caption>��Ӧ��ǩ����</caption>
<thead>
<tr>
	<td align="left">�б��ţ�<a href="#">201405-0022</a></td>
	<td align="right">�б���Ŀ���ƣ�<a href="#">΢���Ĳɹ�����</a></td>
</tr>
</thead>
</table>

<table id="report_body" class="normal print">
<thead>
<tr>
	<th width="30">���</th>
	<th width="40" class="noprint"><input type="checkbox" name="providerNums" /></th>
	<th width="60" class="noprint">״̬</th>
	<th width="60">��ǩ˳��</th>
	<th width="150">��Ӧ������</th>
	<th width="80">ǩ����</th>
	<th width="100">ְ��/ְ��</th>
	<th width="100">��ϵ��ʽ</th>
	<th width="100">�����ص�</th>
	<th width="150">��ע</th>
</tr>
</thead>
<tbody id="tb" class="tr_1" align="center">
<c:forEach begin="${rowNumber+1}" end="10">
<tr>
	<td align="center">${rowNumber+1}</td>
	<td class="noprint"></td>
	<td class="noprint"></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>
<c:set var="rowNumber" value="${rowNumber+1}"/>
</c:forEach>
</tbody>
<tfoot class="print_only">
<tr>
	<td colspan="10" align="right"><span tdata="pageNO" format="#">��#ҳ/<span tdata="pageCount" format="#">��#ҳ</span></td>
</tr>
</tfoot>
</table>

</div>

<div class="button_bar">
	<ul>
		<li>
			<a href="javascript:doPrint()" class="btn_gentle">Lodop��ӡ</a>
		</li>
	</ul>
</div>

</body>

</html>

<script type="text/javascript">
function doPrint() {
	var LODOP = getHtLodop();
	LODOP.PRINT_INIT("��Ӧ��ǩ����");  //ÿ������Ҫ�����Լ�������
	LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");  //1---��(��)���ӡ���̶�ֽ�ţ�2---�����ӡ���̶�ֽ�ţ�0(������)----��ӡ�����ɲ���������ѡ��򰴴�ӡ��ȱʡ���ã�

	//����
	var reportHtml = setCenter($("#report_header")[0].outerHTML);  //���д���Lodopʹ��stylea���д������bug
	LODOP.ADD_PRINT_HTM(0, 0, "100%", "100%", CSS + reportHtml);
	LODOP.SET_PRINT_STYLEA(0,"ItemType",1); //1��ʾҳüҳ�ţ�ÿҳ����ӡ, 0��ʾ��ͨ

	//����
	LODOP.ADD_PRINT_TABLE(60, 0, "100%", "100%", CSS + $("#report_body")[0].outerHTML);

	//ҳ��ҳ����һ��ͨ������ڶ��壬�����ô˷�������������������ɸ���A4ҳ��ߴ羫ȷ��λ��A4�ߴ��ǣ�297mm X 210mm��
//	LODOP.ADD_PRINT_TEXT(190, 230, "RightMargin:10mm", "BottomMargin:10mm", "��#ҳ/��&ҳ");
//	LODOP.SET_PRINT_STYLEA(0,"ItemType",2);
//	LODOP.SET_PRINT_STYLEA(0,"Horient",0);
//	LODOP.SET_PRINT_STYLEA(0,"Vorient",0);

	
	//����
//	LODOP. ADD_PRINT_LINE(60,10,60,1000,0,1);

	LODOP.PREVIEW();
}

function checkIsInstall() {	 
	try{ 
		 var LODOP=getHtLodop();
		if ((LODOP!=null)&&(typeof(LODOP.VERSION)!="undefined")) alert("�����ѳɹ���װ��Lodop�ؼ�!\n  �汾��:"+LODOP.VERSION); 
	 }catch(err){ 
		//alert("Error:����δ��װ����Ҫ����!"); 
	 } 
}; 

</script>
