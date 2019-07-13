<%--
 * @author Roy on 4/12/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Checkbox Tree Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">

<div class="header_bar"><span id="nav_path"></span></div>

	<ul class="tree tree_folder tree_check close" oncheck="doTreeCheck">
		<li><a tname="id" tvalue="0" checked="true">������</a>
			<ul>
				<li><a tname="id" tvalue="1">������</a></li>
				<li><a tname="id" tvalue="2">������</a></li>
				<li><a tname="id" tvalue="3">������</a></li>
				<li><a tname="id" tvalue="4">������</a></li>
				<li><a tname="id" tvalue="5">������</a></li>
			</ul>
		</li>
		<li><a>���Բ�</a>
			<ul>
				<li><a tname="id" tvalue="6">�δ���</a></li>
				<li><a tname="id" tvalue="7">�ζ���</a></li>
				<li><a>������</a>
					<ul>
						<li><a tname="id" tvalue="6">�Ŵ���</a></li>
						<li><a tname="id" tvalue="7">�Ŷ���</a></li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>

</body>

</html>

<script>

/**
 * @op: ��ʽΪ{parent:{name:"xx", value:"xx", text:"xx"}, checked: true|false, items: [{name:"xx", value:"xx", text:"xx"}, {name:"xx", value:"xx", text:"xx"}]|{name:"xx", value:"xx", text:"xx"}}
 */
function doTreeCheck(op) {
	if(op.items.length) {
		//���ȴ��ڣ�˵���Ǹ����
		var itemsStr = [];
		for(var i = 0; i < op.items.length; i++) {
			var item = op.items[i];
			itemsStr.push("{name:" + item.name + ", value:" + item.value + ", text:" + item.text + "}");
		}
		str = "checked=" + op.checked + ", checked length=" + op.items.length + ", items=" + itemsStr.join(", ");
	} else {
		str = "checked=" + op.checked + ", {name:" + op.items.name + ", value:" + op.items.value + ", text:" + op.items.text + "}";
	}

	var parentStr = "{name:" + op.parent.name + ", value:" + op.parent.value + ", text:" + op.parent.text + "}"
	alert("Parent Node: " + parentStr + "\n\nSub Items: " + str);
}

</script>
