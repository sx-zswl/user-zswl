<script type="text/javascript">
$().ready( function() {
	var $form = ${targetForm};
	var $pagerSpan = $("#pager");
	var $pageNumber = $("#pageNumber", $form);

	$form.on("submit", function() {
		var $isPager = $("#isPager", $form);
		if($isPager.text() != "1") {
			$pageNumber.val(1);
		}
	});

	setTimeout(function(){
	$pagerSpan.pager({
		pagenumber: ${empty pageNumber ? 0 : pageNumber},
		totalcount: ${empty totalCount ? 0 : totalCount},
		pagesize: ${empty pageSize ? 1 : pageSize},
			pagesizecandidate: [10,50,100,500,1000],
		buttonClickCallback: function(destPage, pagecount) {
								if(destPage < 1) {
									destPage = 1;
								} else if(destPage > pagecount) {
									destPage = pagecount;
								}

								$pagerSpan.before("<span id='isPager' style='display:none'>1</span>");
								$pageNumber.val(destPage);
								$form.submit();
							}
	});
	}, 0);

})
</script>
<div id="pager"></div>
<input type="hidden" name="pageNumber" id="pageNumber" value="${pageNumber}" />
<script type="text/javascript">
//alert(${pageSize});
</script>
