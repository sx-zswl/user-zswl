/**
 * @author Roy
 * @date 7/20/2013
 */
(function($) {

/**
 * ≥ı ºªØ
 */
$.fn.initForm = function() {
	var $p = $(this);
	$("form [readonly]").addClass("readonly");
	$("form [disabled]").addClass("disabled");

	$("form .readonly").not("[readonly]").removeClass("readonly");
	$("form .disabled").not("[disabled]").removeClass("disabled");

	var $textarea = $("form textarea.auto");
	$textarea.elastic();
	$textarea.trigger('update');
}

})(jQuery);
