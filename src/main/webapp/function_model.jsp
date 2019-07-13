<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="init.jsp"%>
<c:set var="pageTitle" value="选择角色"/>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=9">
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<title>选择子系统</title>

<script type="text/javascript">
 
  
	function doSubmit(modleId){
		form1.modleId.value=modleId;
		form1.action="select_role.jsp";
		form1.submit();
	}
 </script>
<style>
  /*页面文字链接颜色控制*/
.span_btn { display:block; }
.span_btn.label { display:block; margin-top: 8px; font-weight:bold; }

.span_btn.img { width: 128px; height: 128px; background-repeat: no-repeat; }
.span_btn.img.hand { cursor:pointer; }

.span_btn.img.mat_2nd { background-image: url(${ROOT}/images_biz/grid_menu/mat_2nd.png); }
.span_btn.img.mat_2nd:hover { background-image: url(${ROOT}/images_biz/grid_menu/mat_2nd_hover.png); }
.span_btn.img.mat_2nd.disabled { background-image: url(${ROOT}/images_biz/grid_menu/mat_2nd_disabled.png); }

.span_btn.img.mat { background-image: url(${ROOT}/images_biz/grid_menu/mat.png); }
.span_btn.img.mat:hover { background-image: url(${ROOT}/images_biz/grid_menu/mat_hover.png); }
.span_btn.img.mat.disabled { background-image: url(${ROOT}/images_biz/grid_menu/mat_disabled.png); }

.span_btn.img.bidding { background-image: url(${ROOT}/images_biz/grid_menu/bidding.png); }
.span_btn.img.bidding:hover { background-image: url(${ROOT}/images_biz/grid_menu/bidding_hover.png); }
.span_btn.img.bidding.disabled { background-image: url(${ROOT}/images_biz/grid_menu/bidding_disabled.png); }

.span_btn.img.provider { background-image: url(${ROOT}/images_biz/grid_menu/provider.png); }
.span_btn.img.provider:hover { background-image: url(${ROOT}/images_biz/grid_menu/provider_hover.png); }
.span_btn.img.provider.disabled { background-image: url(${ROOT}/images_biz/grid_menu/provider_disabled.png); }

.span_btn.img.system { background-image: url(${ROOT}/images_biz/grid_menu/system.png); }
.span_btn.img.system:hover { background-image: url(${ROOT}/images_biz/grid_menu/system_hover.png); }
.span_btn.img.system.disabled { background-image: url(${ROOT}/images_biz/grid_menu/system_disabled.png); }

.span_btn.img.quality { background-image: url(${ROOT}/images_biz/grid_menu/quality.png); }
.span_btn.img.quality:hover { background-image: url(${ROOT}/images_biz/grid_menu/quality_hover.png); }
.span_btn.img.quality.disabled { background-image: url(${ROOT}/images_biz/grid_menu/quality_disabled.png); }

.span_btn.img.contract { background-image: url(${ROOT}/images_biz/grid_menu/contract.png); }
.span_btn.img.contract:hover { background-image: url(${ROOT}/images_biz/grid_menu/contract_hover.png); }
.span_btn.img.contract.disabled { background-image: url(${ROOT}/images_biz/grid_menu/contract_disabled.png); }

.span_btn.img.site { background-image: url(${ROOT}/images_biz/grid_menu/site.png); }
.span_btn.img.site:hover { background-image: url(${ROOT}/images_biz/grid_menu/site_hover.png); }
.span_btn.img.site.disabled { background-image: url(${ROOT}/images_biz/grid_menu/site_disabled.png); }

.span_btn.img.hw { background-image: url(${ROOT}/images_biz/grid_menu/mat_2nd.png); }
.span_btn.img.hw:hover { background-image: url(${ROOT}/images_biz/grid_menu/mat_2nd_hover.png); }
.span_btn.img.hw.disabled { background-image: url(${ROOT}/images_biz/grid_menu/mat_disabled.png); }

.span_btn.img.ie { background-image: url(${ROOT}/images_biz/grid_menu/provider.png); }
.span_btn.img.ie:hover { background-image: url(${ROOT}/images_biz/grid_menu/provider_hover.png); }
.span_btn.img.ie.disabled { background-image: url(${ROOT}/images_biz/grid_menu/provider_disabled.png); }


.span_btn.img.jc { background-image: url(${ROOT}/images_biz/grid_menu/quality.png); }
.span_btn.img.jc:hover { background-image: url(${ROOT}/images_biz/grid_menu/quality_hover.png); }
.span_btn.img.jc.disabled { background-image: url(${ROOT}/images_biz/grid_menu/quality_disabled.png); }

</style>
</head>
<body background="images/bg_01.jpg" style="overflow-y:auto">
	<form method="post"  name="form1">
		<input type="hidden" name="modleId" >
	</form>

<div id="blogin"><a href="index.jsp"><img src="images/icon_back.png" border="0" alt="返回" /></a></div>

<table width="750" border="0" cellspacing="0" cellpadding="0" style="margin:auto;margin-top:60px;">
<tr height="15">
	<td width="17" background="images_biz/grid_menu/border/border_01.png"></td>
	<td background="images_biz/grid_menu/border/border_02.png"></td>
	<td width="17" background="images_biz/grid_menu/border/border_03.png"></td>
</tr>
<tr>
	<td background="images_biz/grid_menu/border/border_04.png"></td>
	<td>
		<table width="800" border="0" style="margin:auto">
		<tr height="180">
			<td align="center">
				<span class="span_btn img mat hand" onclick="doSubmit('101')"></span>
				<span class="span_btn label">物流(进出口)管理</span>
			</td>
			<td align="center">
				<span class="span_btn img bidding hand" onclick="doSubmit('103')"></span>
				<span class="span_btn label">招投标管理</span>
			</td>	
			<td align="center">
				<span class="span_btn img ie hand" onclick="doSubmit('104')"></span>
				<span class="span_btn label">进出口信息管理</span>
			</td>
			
		</tr>
		<tr  height="180">
			<td align="center">
				<span class="span_btn img hw disabled" onclick="doSubmit('204')"></span>
				<span class="span_btn label">海外物资库</span>
			</td>
			<td align="center">
				<span class="span_btn img jc disabled" onclick="doSubmit('205')"></span>
				<span class="span_btn label">基层计划管理</span>
			</td>
			<td align="center">
				<span class="span_btn img site disabled" onclick="doSubmit('105')"></span>
				<span class="span_btn label">招投标信息网管理</span>
			</td>
		</tr>
		<tr>
			<td align="center">
				<span class="span_btn img system disabled" onclick="doSubmit('001')"></span>
				<span class="span_btn label">系统管理</span>
			</td>
		</tr>
		</table>
	</td>
	<td background="images_biz/grid_menu/border/border_06.png"></td>
</tr>
<tr height="18">
	<td><img src="images_biz/grid_menu/border/border_07.png" /></td>
	<td background="images_biz/grid_menu/border/border_08.png"></td>
	<td><img src="images_biz/grid_menu/border/border_09.png" /></td>
</tr>
</table>


</body>
</html>
