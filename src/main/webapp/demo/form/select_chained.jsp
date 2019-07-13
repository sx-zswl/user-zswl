<%--
 * @author Roy
 * @date: 8/1/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Select Chained Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">

<div class="header_bar"><span id="nav_path"></span></div>

<div id='local' class="space">
	<h3>本地数据下拉框联动（注意子元素的option使用class指明父id）</h3>
	<form>
		<select id="mark">
			<option value="">--</option>
			<option value="bmw">BMW</option>
			<option value="audi">Audi</option>
		</select>
		
		<select id="series">
			<option value="">--</option>
			<option value="series-1" class="bmw">1 series</option>
			<option value="series-3" class="bmw">3 series</option>
			<option value="series-5" class="bmw">5 series</option>
			<option value="series-6" class="bmw">6 series</option>
			<option value="series-7" class="bmw">7 series</option>

			<option value="a1" class="audi">A1</option>
			<option value="a3" class="audi">A3</option>
			<option value="s3" class="audi">S3</option>
			<option value="a4" class="audi">A4</option>
			<option value="s4" class="audi">S4</option>
			<option value="a5" class="audi">A5</option>
			<option value="s5" class="audi">S5</option>
			<option value="a6" class="audi">A6</option>
			<option value="s6" class="audi">S6</option>
			<option value="rs6" class="audi">RS6</option>
			<option value="a8" class="audi">A8</option>
		</select>
		
		<select id="model">
			<option value="">--</option>
			<option value="3-doors" class="series-1">3 doors</option>
			<option value="5-doors" class="series-1">5 doors</option>
			<option value="coupe" class="series-1 series-3 series-6">Coupe</option>
			<option value="cabrio" class="series-1 series-3 series-6">Cabrio</option>
			<option value="sedan" class="series-3 series-5 series-7">Sedan</option>
			<option value="touring" class="series-3 series-5">Touring</option>
			<option value="gran-tourismo" class="series-5">Gran Tourismo</option>

			<option value="sedan" class="a1 a3 s3 a4 s4 a6 s6 rs6">Sedan</option>
			<option value="sportback" class="a3 s3 a5 s5">Sportback</option>
			<option value="cabriolet" class="a3 a5 s5">Cabriolet</option>
			<option value="avant" class="a4 s4 a6 s6 rs6">Avant</option>
			<option value="allroad" class="a4 a6">Allroad</option>
			<option value="coupe" class="a5 s5">Coupe</option>
		</select>
		
		<select id="engine">
			<option value="">--</option>
			<option value="25-petrol" class="series-3 a3 a4">2.5 petrol</option>
			<option value="30-petrol" class="series-3 series-5 series-6 a3 a4 a5">3.0 petrol</option>
			<option value="30-diesel" class="series-3\sedan series-5\sedan a5">3.0 diesel</option>
		</select>
	</form>
</div>

<div id='remote' class="space">
	<h3>远程数据下拉框联动（注意查看远程数据文件格式）</h3>
	<form>
		<select id="mark-remote">
			<option value="">--</option>
			<option value="bmw">BMW</option>
			<option value="audi">Audi</option>
		</select>
		
		<select id="series-remote">
			<option value="">--</option>
		</select>
		
		<select id="model-remote">
			<option value="">--</option>
		</select>
	</form>

</div>

<p>点此链接可以查看远程数据结构，为JSON格式，需要带和select id一致的参数：<a href="json.jsp?mark-remote=bmw">json.jsp?mark-remote=bmw</a></p>

</body>
</html>

<script type="text/javascript">
$().ready(function() {
	/* For local */
	$("#series").chained("#mark");
	$("#model").chained("#series");
	$("#engine").chained("#series, #model");
	
	/* For remote */    
    $("#series-remote").remoteChained("#mark-remote", "json.jsp");
    $("#model-remote").remoteChained("#series-remote", "json.jsp");
});
</script>
