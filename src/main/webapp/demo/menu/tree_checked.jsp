<%--
 * @author Roy on 4/12/2013
--%>
<%@ page contentType="text/html; charset=GBK" %>
<%@ include file="../../init.jsp"%>
<c:set var="pageTitle" value="Checked Tree Demo"/>
<%@ include file="../../header.jsp"%>

<body class="lazy">

<div class="header_bar"><span id="nav_path"></span></div>

<h3>����ȡѡ��ֵDemo</h3>

<ul id="tree" class='tree_folder tree_check close' oncheck="doTreeCheck">

<li><a href='#' onclick="return false" node='001'>������</a>
			<ul>
				<li><a href='#' onclick="return false" node='001001'>������</a></li>
				<li><a href='#' onclick="return false" node='001002' checked="true">������</a></li>
			</ul>
		</li>
		<li><a href='#' onclick="return false" node='002'>���Բ�</a>
			<ul>
				<li><a href='#' onclick="return false" node='002001'>�δ���</a></li>
				<li><a href='#' onclick="return false" node='002002' checked="true">�ζ���</a></li>
				<li><a href='#' onclick="return false" node='002003'>���ⲿ</a>
					<ul>
						<li><a href='#' onclick="return false" node='002003001'>�Ŵ��</a></li>
						<li><a href='#' onclick="return false" node='002003002'>�Ŷ���</a></li>
					</ul>
				</li>
			</ul>
		</li>

</ul>

<br/>

<button type="button" id="ok_with_folder" class="btn_gentle">ѡ���ˣ���folder��</button>
<button type="button" id="ok_without_folder" class="btn_gentle">ѡ���ˣ�����folder��</button>

</body>

</html>

<script>

function loadTree() {
	var $tree = $("#tree");
	$tree.addClass("tree");
	//չ��Ĭ��ѡ��
	$("ul.open", $tree).removeClass("open");
	var $node = $tree.find("a[checked]");
	$node.each(function() {
		$(this).parents("ul").addClass("open");
	});
	initTree($(document));
}

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
//	alert("Parent Node: " + parentStr + "\n\nSub Items: " + str);
}

$().ready(function() {
	loadTree();
//	$("#arguments").text(dialogArguments);
	$("#ok_with_folder").on("click", function() {
		var checkedResult = $("#tree").getCheckedResult({isContainsFolder:true});

		var names = [];
		var ids = [];
		for(var i in checkedResult) {
			names.push(checkedResult[i].name);
			ids.push(checkedResult[i].id);
		}
		alert("names: " + names.join(",") + "\nids: " + ids.join(","));
	});

	$("#ok_without_folder").on("click", function() {
		var checkedResult = $("#tree").getCheckedResult();

		var names = [];
		var ids = [];
		for(var i in checkedResult) {
			names.push(checkedResult[i].name);
			ids.push(checkedResult[i].id);
		}
		alert("names: " + names.join(",") + "\nids: " + ids.join(","));
	});

});

</script>
