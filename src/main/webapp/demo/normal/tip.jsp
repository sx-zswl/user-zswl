<%--
 * @author Roy on 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">

<div id="layout">
	<p>请输入金额：<input type="text" float="editRmb"/></p>
	<p>金额：<span float="rmb">1888.88</span></p>
	<p style="width: 600px; border: 1px solid blue; padding: 8px;" float="overflow">史蒂夫·乔布斯（1955-2011），发明家、企业家、美国苹果公司联合创办人、前行政总裁。1976年乔布斯和朋友成立苹果电脑公司，他陪伴了苹果公司数十年的起落与复兴，先后领导和推出了麦金塔计算机、iMac、iPod、iPhone等风靡全球亿万人的电子产品，深刻地改变了现代通讯、娱乐乃至生活的方式。2011年10月5日他因病逝世，享年56岁。乔布斯是改变世界的天才，他凭敏锐的触觉和过人的智慧，勇于变革，不断创新，引领全球资讯科技和电子产品的潮流，把电脑和电子产品变得简约化、平民化，让曾经是昂贵稀罕的电子产品变为现代人生活的一部分。</p>
</div>

</body>

</html>

<script type="text/javascript">
$().ready(function() {
	$("#layout").overflowTip();
	$("#layout").rmbTip();
	$("#layout").editRmbTip();
});
</script>
