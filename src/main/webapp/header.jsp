<%--
 * @author Roy Suen
 * @date: 4/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" >
<html>
<head>
<title>${pageTitle}</title>
<meta http-equiv="X-UA-Compatible" content="IE=9">
<meta http-equiv="Content-Type" content="text/html; charset=GBK" />
<link href="favicon.ico" type="image/x-icon" rel=icon>
<link href="favicon.ico" type="image/x-icon" rel="shortcut icon">
<link type="text/css" rel="stylesheet" href="${ROOT}/css/jquery.ui.core.css" />
<link type="text/css" rel="stylesheet" href="${ROOT}/css/jquery.ui.dialog.css" />
<link type="text/css" rel="stylesheet" href="${ROOT}/css/jquery.ui.tooltip.css" />
<link type="text/css" rel="stylesheet" href="${ROOT}/css/jquery.ui.resizable.css" />
<link type="text/css" rel="stylesheet" href="${ROOT}/css/jquery.ui.tabs.css" />
<link type="text/css" rel="stylesheet" href="${ROOT}/css/ht_main.css" />
<link type="text/css" rel="stylesheet" href="${ROOT}/css/ht_btn.css" />
<link type="text/css" rel="stylesheet" href="${ROOT}/css/themes/default/main.css" />
<link type="text/css" rel="stylesheet" href="${ROOT}/css/themes/default/jquery.ui.theme.css" />
<link type="text/css" rel="stylesheet" href="${ROOT}/css/ht_tree.css" />
<link type="text/css" rel="stylesheet" href="${ROOT}/css/ht_order.css" />
<script type="text/javascript" src="${ROOT}/js/jquery-1.9.1.js" ></script>
<script type="text/javascript" src="${ROOT}/js/jquery-ui-1.10.0.js" ></script>
<script type="text/javascript" src="${ROOT}/js/jquery.cookie.js" ></script>
<script type="text/javascript" src="${ROOT}/js/jquery.messager.js"></script>
<script type="text/javascript" src="${ROOT}/js/jquery.chained.js"></script>
<script type="text/javascript" src="${ROOT}/js/jquery.elastic.js"></script>
<script type="text/javascript" src="${ROOT}/js/json2.js"></script>
<script type="text/javascript" src="${ROOT}/js/log4javascript.js" ></script>
<script type="text/javascript" src="${ROOT}/js/ht_main.js" ></script>
<script type="text/javascript" src="${ROOT}/js/jquery.overlay.js"></script>
<script type="text/javascript" src="${ROOT}/js/ht_ui.js" ></script>
<!-- <script type="text/javascript" src="${ROOT}/js/ht_dialog.js" ></script> -->
<script type="text/javascript" src="${ROOT}/js/ht_theme.js" ></script>
<script type="text/javascript" src="${ROOT}/js/ht_tree.js" ></script>
<script type="text/javascript" src="${ROOT}/js/ht_drag.js" ></script>
<script type="text/javascript" src="${ROOT}/js/ht_accordion.js" ></script>
<script type="text/javascript" src="${ROOT}/js/ht_float.js" ></script>
<script type="text/javascript" src="${ROOT}/js/ht_order.js" ></script>
<script type="text/javascript" src="${ROOT}/js/ht_pager.js" ></script>
<script type="text/javascript" src="${ROOT}/js/ht_table.js" ></script>
<script type="text/javascript" src="${ROOT}/js/ht_stopwatch.js" ></script>
<script type="text/javascript" src="${ROOT}/js/ht_form.js" ></script>
<script type="text/javascript" src="${ROOT}/js/ht_validate.js" ></script>

<!-- 日历控件 -->
<script type="text/javascript" src="${ROOT}/js/date-picker/WdatePicker.js"></script>
<script type="text/javascript">
//立即执行，不等待dom加载完毕
HT.initImmediately({
	root: "${ROOT}",
	self: "${SELF}"
});

//等待dom加载完毕执行
$().ready(function() {
	HT.init();
});
</script>
</head>
