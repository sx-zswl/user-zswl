<%--
 * @author Roy
 * @date: 9/2/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="init.jsp"%>
<c:set var="pageTitle" value="西探物流管理平台登录"/>
<%@ include file="header.jsp"%>

<style type="text/css">
img { margin: 0 }
</style>

<body class="noscroll">

<form id="frm" action="function_model.jsp" method="post">
<table width="1030" height="60" border="0" style="margin:30px auto 0px auto;" cellspacing="0" cellpadding="0">
	<tr>
		<td width="70"></td>
		<td valign="bottom"><img src="images/logo.png"/><img src="images_biz/logo_title.png"/></td>
		<td></td>
		<td width="450" align="center"><img src="images_biz/logo_name.png"/></td>
	</tr>
</table>

<table width="900" height="392" border="0" style="margin:0 auto;" cellspacing="0" cellpadding="0">
	<tr>
		<td width="550"><img src="images_biz/login_01.jpg" /></td>
		<td width="9"><img src="images_biz/login_02.png" /></td>
		<td valign="top" style="background: url(images_biz/login_03.png) repeat-x">
			<table width="320" border="0" style="margin-left:-2px">
				<tr height="80">
					<td colspan="2" align="center"><img src="images_biz/login_label.png" /></td>
				</tr>
				<tr height="22">
					<td width="88" align="right" class="font bold">帐号：</td>
					<td><input type="text" name="username" style="width: 160px"/></td>
				</tr>
				<tr height="26">
					<td align="right" class="font bold">密码：</td>
					<td><input type="password" name="password" style="width: 160px"/></td>
				</tr>
				<tr height="50">
					<td colspan="2" align="center">
						<button type="button" onclick="HT.doSubmit(this)"><span>登录</span></button>
						<button type="button" onclick="HT.doReset(this)"><span>重置</span></button>
					</td>
				</tr>
				<tr height="40">
					<td colspan="2" align="center" valign="bottom"><img src="images_biz/login_line.png" /></td>
				</tr>
				<tr>
					<td colspan="2" align="center"><img src="images_biz/login_notice.png" /></td>
				</tr>
				<tr height="100">
					<td colspan="2">
						<div style="width:296px; height:100px; margin:auto; overflow:auto; border:0px solid">
								<ul class="disc font ui" style="padding-left: 20px; margin:0">
									<li><a href="#">网上办公平台用户操作手册-人力资源及考勤管理.doc</a></li>
									<li><a href="#">浏览器Internet Explorer IE 8安装包.exe</a></li>
								</ul>
						</div>
					</td>
				</tr>
				<tr height="20">
					<td colspan="2" align="center"><img src="images_biz/login_line.png" /></td>
				</tr>
			</table>
		</td>
		<td width="21"><img src="images_biz/login_05.png" /></td>
	</tr>
</table>

<table width="900" border="0" style="margin:6px auto;" cellspacing="0" cellpadding="0">
	<tr>
		<td align="center">支持热线：0991-7890620/0991-7890700&nbsp;&nbsp;|&nbsp;&nbsp;技术支持：安徽省宏图信息技术有限公司</td>
	</tr>
</table>
</form>

</body>
</html>

<script type="text/javascript">
$().ready(function() {
	//登录框聚焦
	$("#frm").find(":text:eq(0)").focus();
});
</script>
