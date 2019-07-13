<%--
 * @author Roy
 * @date: 6/14/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Date Picker Demo"/>
<%@ include file="../../header.jsp"%>

<style type="text/css">
body { padding: 0; }
</style>

<body>

<div class="header_bar"><span id="nav_path"></span></div>

<p>
常规调用：<input id="d11" type="text" onClick="WdatePicker()"/>
</p>
<p>
图标触发：<input id="d12" type="text"/><img onclick="WdatePicker({el:'d12'})" src="${ROOT}/images/icon_date.png" />
</p>
<p>
显示日期和时间：<input id="d13" type="text" onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})"/>
</p>
<p>
支持周显示：<input id="d14" type="text"/><img onclick="WdatePicker({el:'d14', isShowWeek:true})" src="${ROOT}/images/icon_date.png" />
</p>
<p>
onpicked事件：<input id="d15" type="text" onClick="WdatePicker({isShowWeek:true, onpicked:function() { doPicked(); }})"/>   您选择了第<input type="text" id="week" size="2" />周
</p>
<p>
日期选择联动：<input id="start" type="text" onClick="WdatePicker({onpicked:function() { $('#end').focus() }, maxDate:'#F{$dp.$D(\'end\')}'})"/>至<input id="end" type="text" onFocus="WdatePicker({minDate:'#F{$dp.$D(\'start\')}'})"/>
</p>
<p>
日期选择限制-只能选择今天以前的日期(包括今天)：<input id="d16" type="text" onClick="WdatePicker({maxDate:'%y-%M-%d'})"/>
</p>
<p>
日期选择限制-只能选择今天以后的日期(不包括今天)：<input id="d17" type="text" onClick="WdatePicker({minDate:'%y-%M-{%d+1}'})"/>
</p>
<p>
日期选择限制-只能选择本月的日期1号至本月最后一天：<input id="d18" type="text" onClick="WdatePicker({minDate:'%y-%M-01',maxDate:'%y-%M-%ld'})"/>
</p>
<p>
日期选择限制-只启用 每个月份的 5日 15日 25日：<input id="d19" type="text" onClick="WdatePicker({opposite:true,disabledDates:['5$']})"/>
</p>
<p>
日期选择限制-配合min/maxDate使用,可以把可选择的日期分隔成多段(本月可用日期分隔成五段 分别是: 1-3 8-10 16-24 26,27 29-月末)：<input id="d20" type="text" onClick="WdatePicker({minDate:'%y-%M-01',maxDate:'%y-%M-%ld',disabledDates:['0[4-7]$','1[1-5]$','2[58]$']})"/>
</p>
<p>
日期选择限制-禁用 周六 周日 所对应的日期：<input id="d20" type="text" onClick="WdatePicker({disabledDays:[0,6]})"/>
</p>


</body>
</html>

<script type="text/javascript">
function doPicked() {
	$('#week').val($dp.cal.getP('W','W'));
}

</script>
