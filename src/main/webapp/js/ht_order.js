//--------------------------------------
// Last modified: Roy
// Version:       1.0
// Original date: 3/13/2013
//--------------------------------------
(function($) {

/**
 * Grid表格排序
 * Usage:	$("#tableId").htOrder( {
						targetForm: $("form")
					  } );
 */
$.fn.htOrder = function(options) {
	var op = $.extend({ targetForm: null }, options);

	var $table = $(this);
	$form = op.targetForm;

	var $orderByObj = $("#orderBy", $form);
	var $orderTypeObj = $("#orderType", $form);
	var $sortCol = $("th[orderBy]", $table);

	$sortCol.each(function() {
		$th = $(this);
		$th.append("<img src='" + ROOT + "/images/sort.png' style='margin-top:2px;'/>");

		var orderImg = "";
		if($orderTypeObj.val() == "desc") {
			orderImg = "sort_down.png";
		} else {
			orderImg = "sort_up.png";
		}

		var orderBy = $th.attr("orderBy");
		if($orderByObj.val() == orderBy) {
			$("img", $th).replaceWith("<img src='" + ROOT + "/images/" + orderImg + "'/>");
		}
		
		$th.addClass("order").click(function() { doOrder($form, orderBy, $orderByObj, $orderTypeObj); });
	});
};

})(jQuery)


function doOrder($form, orderBy, $orderByObj, $orderTypeObj) {
	$orderByObj.val(orderBy);

	var orderType = $orderTypeObj.val();
	orderType = (orderType == "" || orderType == "desc") ? "asc" : "desc";
	$orderTypeObj.val(orderType);

	//Reset pager
	$("#pageNumber", $form).val(1);

	if($form != null)
		$form.submit();
}
