<%--
 * @author Roy on 5/15/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="打印 - 分体式"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">
<div class="header_bar"><span id="nav_path"></span></div>
<%@ include file="../../header_print.jsp"%>

<p>分体式表示页面展现时表头部分是一个table，表格内容又是一个table，这时表头需要用LODOP.ADD_PRINT_HTM来打印，同时设定为页眉页脚模式：LODOP.SET_PRINT_STYLEA(0,"ItemType",1)，表格内容需要用LODOP.ADD_PRINT_TABLE打印。</p>
<p>说明：thead和tfoot在分页时每页时都会显示，注意按标准使用。</p>

现在测试一下：<a href="javascript:checkIsInstall()">查看本机是否安装控件</a>

<div align="center">

<table width="850" id="report_header" class="print">
<caption>供应商签到表</caption>
<thead>
<tr>
	<td align="left">招标编号：<a href="#">201405-0022</a></td>
	<td align="right">招标项目名称：<a href="#">微单的采购方案</a></td>
</tr>
</thead>
</table>

<table id="report_body" class="normal print">
<thead>
<tr>
	<th width="30">序号</th>
	<th width="40" class="noprint"><input type="checkbox" name="providerNums" /></th>
	<th width="60" class="noprint">状态</th>
	<th width="60">抽签顺序</th>
	<th width="150">供应商名称</th>
	<th width="80">签到人</th>
	<th width="100">职务/职称</th>
	<th width="100">联系方式</th>
	<th width="100">工作地点</th>
	<th width="150">备注</th>
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
	<td colspan="10" align="right"><span tdata="pageNO" format="#">第#页/<span tdata="pageCount" format="#">共#页</span></td>
</tr>
</tfoot>
</table>

</div>

<div class="button_bar">
	<ul>
		<li>
			<a href="javascript:doPrint()" class="btn_gentle">Lodop打印</a>
		</li>
	</ul>
</div>

</body>

</html>

<script type="text/javascript">
function doPrint() {
	var LODOP = getHtLodop();
	LODOP.PRINT_INIT("供应商签到表");  //每个报表都要定义自己的名称
	LODOP.SET_PRINT_PAGESIZE(2, 0, 0, "A4");  //1---纵(正)向打印，固定纸张；2---横向打印，固定纸张；0(或其它)----打印方向由操作者自行选择或按打印机缺省设置；

	//标题
	var reportHtml = setCenter($("#report_header")[0].outerHTML);  //居中处理，Lodop使用stylea居中处理存在bug
	LODOP.ADD_PRINT_HTM(0, 0, "100%", "100%", CSS + reportHtml);
	LODOP.SET_PRINT_STYLEA(0,"ItemType",1); //1表示页眉页脚，每页都打印, 0表示普通

	//内容
	LODOP.ADD_PRINT_TABLE(60, 0, "100%", "100%", CSS + $("#report_body")[0].outerHTML);

	//页脚页数（一般通过表格内定义，不采用此方法，除非特殊情况，可根据A4页面尺寸精确定位，A4尺寸是：297mm X 210mm）
//	LODOP.ADD_PRINT_TEXT(190, 230, "RightMargin:10mm", "BottomMargin:10mm", "第#页/共&页");
//	LODOP.SET_PRINT_STYLEA(0,"ItemType",2);
//	LODOP.SET_PRINT_STYLEA(0,"Horient",0);
//	LODOP.SET_PRINT_STYLEA(0,"Vorient",0);

	
	//画线
//	LODOP. ADD_PRINT_LINE(60,10,60,1000,0,1);

	LODOP.PREVIEW();
}

function checkIsInstall() {	 
	try{ 
		 var LODOP=getHtLodop();
		if ((LODOP!=null)&&(typeof(LODOP.VERSION)!="undefined")) alert("本机已成功安装过Lodop控件!\n  版本号:"+LODOP.VERSION); 
	 }catch(err){ 
		//alert("Error:本机未安装或需要升级!"); 
	 } 
}; 

</script>
