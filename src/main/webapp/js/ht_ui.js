/**
 * @author Roy
 * @date 4/3/2013
 */
function initUIImmediately() {
	//皮肤选择功能初始化
	$("head").theme();
}

function initUI(box) {
	var $p = $(box || document);

	clearLayout();
	
	initLayoutBefore($p);
	initWidgetBefore($p);

	setTimeout(function(){
		setupLayout($p);
		initLayoutAfter($p);

		//初始化fieldset
		initFieldset($p);
	
		HT.ui.isLoaded = true;
	}, 0);

	$(window).resize(function(){
		initLayoutBefore();
		initLayoutAfter($p);
	});
	
	$(window).load(function() {
		window.status='完成';
    });
}

function clearLayout($p){
	$("iframe", $p).each(function() {
		var $iframe = $(this);
		var src = $iframe.attr("src");
		if(src) {
			$iframe.attr("scrHolder", src);
			$iframe.attr("src", "");
		}
	});
}

function setupLayout($p){
	$(".lazy", $p).css("display", "block");
	$("iframe", $p).each(function() {
		var $iframe = $(this);
		var src = $iframe.attr("scrHolder");
		if(src) {
			$iframe.attr("src", src);
		}
	});
}

function initLayoutBefore($p) {
	//动态调整
	var winHeight = $(window).height();
	var winWidth = $(window).width();

	var topHight =  $("#top").height();
	var bottomHight =  $("#bottom").height();
	var middleHeight = winHeight - topHight - bottomHight;
	$("#main_container, #sidebar, #split_bar").height(middleHeight);
	$("#sidebar_s .collapse, #split_bar_proxy").height(middleHeight - 2);
	$(".accordion").height(middleHeight - $(".toggle_collapse").height() - 3);

	var contentWidth = $(window).width() - (HT.ui.sbar ? $("#sidebar").width() + 10 : 34) - 5;
	$("#container").width(contentWidth);
	$("#container").height(middleHeight - 2);

	$("#mask").width(contentWidth);
	$("#mask").height(middleHeight - 2);

	$("#bottom").width(winWidth - 10);

	//防止backspace键退回上一页面
	$(document).keydown(function (e) {
		var doPrevent;
		if (e.keyCode == 8) {
			var d = e.srcElement || e.target;
			if (d.tagName.toUpperCase() == 'INPUT' || d.tagName.toUpperCase() == 'TEXTAREA') {
				doPrevent = d.readOnly || d.disabled;
			}
			else
				doPrevent = true;
		}
		else
			doPrevent = false;

		if (doPrevent)
			e.preventDefault();
	});
}

function initWidgetBefore($p) {
	//主菜单树
	initTree($p);
	//手风琴效果
	$('div.accordion', $p).each(function() {
		var $this = $(this);
		$this.accordion({fillSpace:$this.attr("fillSpace"),alwaysOpen:true,active:0});
	});
	//Nav Path (导航路径)
	$("#nav_path", $p).htNavPath();
	//Left拖动
	$("#left").htBar({minW:200, maxW:500});
	//Top皮肤选择功能初始化
	$("head").themeTop();

	//Toolbar
	$(".toolbar").htToolbar();

	//初始化button
//	initBtn($p);

	//初始化normal table
	$p.initTable();

	//初始化content table
	$p.initContentTable();

	//初始化nav table
	$p.initNavTable();

	//初始化表单
	$p.initForm();

	//初始化表单校验
	$("form.validate", $p).initValidation();
}

/**
 * 初始化HT Frame
 */
function initFrame($p) {
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	
	$("#ht_frame", $p).each(function() {
		var $htFrame = $(this);
		var $frameSide = $("#frame_side", $htFrame);
		
		$("#frame_split, #frame_split_proxy, #mask_side, #mask_container").remove();
		$frameSide.after('<div id="frame_split"></div><div id="frame_split_proxy"></div>');
		$frameSide.after('<div id="mask_side"></div><div id="mask_container"></div>');
		
		var pos = $htFrame.offset();
		var frameTop = pos.top;
		var frameHeight = winHeight - frameTop - 0;
		$htFrame.height(frameHeight);
		$frameSide.height(frameHeight);
		
		var $frameSplit = $("#frame_split", $htFrame).height(frameHeight);
		var splitLeft = pos.left + $frameSide.outerWidth();
		$frameSplit.css("left", splitLeft);
		var $frameSplitProxy = $("#frame_split_proxy", $htFrame).height(frameHeight);
		$frameSplitProxy.css("left", splitLeft);
	
		var containerLeft = splitLeft + $frameSplit.outerWidth();
		var $frameContainer = $("#frame_container", $htFrame);
		$frameContainer.width(winWidth - $frameSide.outerWidth() - $frameSplit.outerWidth() - 0);
		$frameContainer.height(frameHeight);
		$frameContainer.css("left", containerLeft);
		
		var $maskSide = $("#mask_side", $htFrame)
		$maskSide.width($frameSide.outerWidth());
		$maskSide.height(frameHeight);
		$maskSide.css("left", pos.left);
//		$maskSide.css("background-color", "red");

		var $maskContainer = $("#mask_container", $htFrame)
		$maskContainer.width($frameContainer.outerWidth());
		$maskContainer.height(frameHeight);
		$maskContainer.css("left", containerLeft);
//		$maskContainer.css("background-color", "yellow");
//		alert("winHeight=" + winHeight + ", winWidth=" + winWidth + ", $frameSide.width()=" + $frameSide.width() + ", frameTop="  +frameTop);
		
		var direction = "horizontal";
		handleSplit($htFrame, {minW:30, maxW:winWidth - 30, adjust: false, move: direction, container:"#frame_container", maskSide:"#mask_side", mask:"#mask_container", sideBar:"#frame_side", splitBar:"#frame_split", splitBarProxy:"#frame_split_proxy"});
	});
	
	$("#ht_frame_vertical", $p).each(function() {
		var $htFrame = $(this);
		var $frameSide = $("#frame_side", $htFrame);
		
		$("#frame_split, #frame_split_proxy, #mask_side, #mask_container").remove();
		$frameSide.after('<div id="frame_split"></div><div id="frame_split_proxy"></div>');
		$frameSide.after('<div id="mask_side"></div><div id="mask_container"></div>');
		
		var pos = $htFrame.offset();
		var frameTop = pos.top;

		var navHeight = 0;
		$(".header_bar", $p).each(function() {
			navHeight += $(this).height();
		});

		var frameHeight = winHeight - frameTop - 0;
		$htFrame.height(frameHeight);
		
		var $frameSplit = $("#frame_split", $htFrame).css("width", "100%");
		var $frameSplitProxy = $("#frame_split_proxy", $htFrame).css("width", "100%");
		var splitTop = pos.top + $frameSide.outerHeight();
		$frameSplit.css("top", splitTop);
		$frameSplitProxy.css("top", splitTop);
	
		var containerTop = splitTop + $frameSplit.outerHeight();
		var $frameContainer = $("#frame_container", $htFrame);
		$frameContainer.css("width", "100%");
		$frameContainer.height(winHeight - $frameSide.outerHeight() - $frameSplit.outerHeight() - navHeight - 1);
		$frameContainer.css("top", containerTop);
		
		var $maskSide = $("#mask_side", $htFrame)
		$maskSide.css("width", "100%");
		$maskSide.height($frameSide.outerHeight());
		$maskSide.css("top", frameTop);
//		$maskSide.css("background-color", "red");

		var $maskContainer = $("#mask_container", $htFrame)
		$maskContainer.css("width", "100%");
		$maskContainer.height($frameContainer.outerHeight());
		$maskContainer.css("top", containerTop);
//		$maskContainer.css("background-color", "yellow");
//		alert("winHeight=" + winHeight + ", winWidth=" + winWidth + ", $frameSide.width()=" + $frameSide.width() + ", frameTop="  +frameTop);
		
		var direction = "vertical";
		handleSplitVertical($htFrame, {minH:30, maxH:winHeight - 30, adjust: false, move: direction, container:"#frame_container", maskSide:"#mask_side", mask:"#mask_container", sideBar:"#frame_side", splitBar:"#frame_split", splitBarProxy:"#frame_split_proxy"});
	});
	
}

/**
 * 初始化tree
 */
function initTree($p) {
	$("ul.tree", $p).htTree();
//	$("ul.tree", $p).css("display", "block");
}

/**
 * 初始化tree，指定元素
 */
function initTreeSingle($item) {
	$item.htTree();
}

/**
 * 初始化button
 */
function initBtn($p) {
	$("button.btn, button.btn_metro", $p).attr("type", "button");
	var $btns = $(".btn, .btn_metro", $p);

	$btns.each(function() {
		var $btn = $(this);
		if(HT.isBlank($btn.has("span"))) {
			$btn.wrapInner("<span></span>");
		}
	});
}

/**
 * 初始化button bar
 */
function initBtnBar($p) {
	$(".button_bar", $p).not(".not_bottom").stayBottom();
}

/**
 * 在元素display为hide时，同时又没有指定高度的情况下，无法取得内容高度，所以此方法
 * 用来当元素显示后计算高度
 */
function initLayoutAfter($p) {
	//Panel面板
	$("div.panel", $p).htPanel();

	//HT frame
	initFrame($p);
	
	//处理input 100%宽度
	$(":text.full, :password.full, textarea.full").fixInputWidth();
	$("select.full").parent().css("padding-right", "2px");

	//初始化button bar
	initBtnBar($p);
}

/**
 * 初始化fieldset
 */
function initFieldset($p) {
	var $fieldset = $(".fieldset", $p);

	$fieldset.each(function() {
		var $header = $(".header", $(this));
		$header.wrap($("<div></div>").addClass("header_div")).after($("<div></div>").addClass("mask"));
	});
}

function handleSplit($frame, options) {
	var op = $.extend({ }, options);
	var bar = $(op.sideBar, $frame);
	
	$(op.splitBar).mousedown(function(event){
		$(op.splitBarProxy).each(function(){
			var spbar2 = $(this);
			setTimeout(function(){spbar2.show();}, 100);
			spbar2.css({visibility: "visible",left: $(op.splitBar).offset().left});
			spbar2.htDrag($.extend(options, {obj:$(op.sideBar), maskSide:$(op.maskSide), mask:$(op.mask), move:op.move, event:event,stop: function(){
				$(this).css("visibility", "hidden");
				var move = $(this).cssv("left") - $(op.splitBar).cssv("left");
				var sbarwidth = bar.outerWidth() + move;
				var cleft = $(op.container).cssv("left") + move;
				var cwidth = $(op.container).outerWidth() - move;
				if(op.adjust) cwidth -= 2;
				bar.css("width", sbarwidth);
				$(op.splitBar).css("left", $(this).css("left"));
				$(op.container).css({left: cleft,width: cwidth});
				$(op.maskSide).css({width: sbarwidth});
				$(op.mask).css({left: cleft,width: cwidth});

			}}));
			return false;					
		});
	});
}

function handleSplitVertical($frame, options) {
	var op = $.extend({ }, options);
	var bar = $(op.sideBar, $frame);
	
	$(op.splitBar).mousedown(function(event){
		$(op.splitBarProxy).each(function(){
			var spbar2 = $(this);
			setTimeout(function(){spbar2.show();}, 100);
			spbar2.css({visibility: "visible",top: $(op.splitBar).offset().top});
			spbar2.htDrag($.extend(options, {obj:$(op.sideBar), maskSide:$(op.maskSide), mask:$(op.mask), move:op.move, event:event,stop: function(){
				$(this).css("visibility", "hidden");
				var move = $(this).cssv("top") - $(op.splitBar).cssv("top");
				var sbarHeight = bar.outerHeight() + move;
				var cTop = $(op.container).cssv("top") + move;
				var cHeight = $(op.container).outerHeight() - move;
				bar.css("height", sbarHeight);
				$(op.splitBar).css("top", $(this).css("top"));
				$(op.container).css({top: cTop, height: cHeight});
				$(op.maskSide).css({height: sbarHeight});
				$(op.mask).css({top: cTop, height: cHeight});

			}}));
			return false;					
		});
	});
}

(function($){

	$.fn.cssv = function(pre){
		var cssPre = $(this).css(pre);
		var value = 0;
		if(cssPre) {
			value = cssPre.substring(0, cssPre.indexOf("px")) * 1;
		}
		return value;
	};

	$.fn.fixInputWidth = function() {
		//处理input 100%宽度
		$(this).each(function() {
//			$(this).parent().css("padding-right", "8px");
			$(this).width($(this).parent().width() - 6);
		});
	}

	/**
	 * 导航路径
	 */
	$.fn.htNavPath = function(options){
		var $this = $(this);
		var $parent = $(parent.document);
		if(!HT.isBlank($parent)) {
			var $currentNode = $("#left .selected", $parent);
			var $upA = $currentNode.closest("ul").closest("li").find("a:first");
			var upPath = $upA.text();
			var currentPath = $currentNode.text();
			var currentUrl = $("a", $currentNode).attr("href");
			var navPath = currentPath + " ";
			if(!HT.isBlank(upPath)) {
				navPath = upPath + " > <a href='" + currentUrl + "' class='highlight underline'>" + navPath + "</a>";
			}
			$this.addClass("font highlight").prepend(navPath).before("<span><img src='" + ROOT + "/images/icon_nav.png'/>&nbsp;当前位置：</span>");
		}
//		alert($("#left .selected", $parent).closest("ul").closest("li").find("a:first").text());
	};

	/**
	 * Panel面板
	 */
	$.fn.htPanel = function(options){
		var op = $.extend({header:"panel_header", content:"panel_content", coll:"collapsable", exp:"expandable"}, options);
		return this.each(function(){
			var $panel = $(this);
			var close = $panel.hasClass("close");
			var collapse = $panel.hasClass("collapse");
			var first = $panel.hasClass("first");  //第一个无上边框
			var border = $panel.hasClass("border");  //是否包含四周边框，默认只有上下边框

			if(collapse) {
				var title = $(".header span",$panel);
				$("<a name='btn_collapse' href='#'></a>").addClass(close?op.exp:op.coll).insertAfter(title);
			}

			var header = $(">div:first", $panel);

			var minH = $panel.attr("minH") ? $panel.attr("minH") : 0;
			var maxH = $panel.attr("maxH") ? $panel.attr("maxH") : 0;

			var $header = $(".header", $panel);
			var $content = $(".content", $panel);
			var inH = $content.innerHeight() - 6;
			if (close)
				$content.css({
					display: "none"
				});
			else {
				if(minH > 0 && minH < inH) {
					$content.height(minH + "px");
				} else if(maxH > 0 && maxH < inH) {
					$content.height(maxH + "px");
				}
			}
			if(!collapse) return;

			var $pucker = $("a[name='btn_collapse']", header);
			$pucker.click(function(){
				if($pucker.hasClass(op.exp)){
					$content.show(100, function() {
						$pucker.removeClass(op.exp).addClass(op.coll);

						if(minH > 0 && minH < inH) {
							$content.height(minH+"px");
						} else if(maxH > 0 && maxH < inH) {
							$content.height(maxH + "px");
						}
						$(window).trigger(HT.eventType.resizeGrid);
					});
				} else { 
					$content.hide(100, function() {
						$pucker.removeClass(op.coll).addClass(op.exp);
						$(window).trigger(HT.eventType.resizeGrid);
					});
				}
				return false;
			});
		});
	};

	/**
	 * 工具栏
	 */
	$.fn.htToolbar = function(options){
		var op = $.extend({}, options);

		$("ul>li", this).each(function() {
			var $item = $(this);

			$("a", $item).on("click", function(event){
				var $a = $(this);
				if (this.disabled) {
					event.preventDefault();
					event.stopImmediatePropagation();

					$a.addClass("disabled");
				} else {
					// make your AJAX call or whatever else you want
				}
			});

			if($item.hasClass("detail")) { //查看
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_detail.png'/>");
			} else if($item.hasClass("remove")) { //移除
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_remove.png'/>");
			} else if($item.hasClass("add")) { //添加
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_add.png'/>");
			} else if($item.hasClass("insert")) { //加入
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_insert.png'/>");
			} else if($item.hasClass("delete")) { //删除
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_delete.png'/>");
			} else if($item.hasClass("edit")) { //修改
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_edit.png'/>");
			} else if($item.hasClass("search")) { //查询
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_search.png'/>");
			} else if($item.hasClass("refresh")) { //刷新
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_refresh_2.png'/>");
			} else if($item.hasClass("done")) { //完成
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_done.png'/>");
			} else if($item.hasClass("return")) { //退回
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_return.png'/>");
			} else if($item.hasClass("forward")) { //转发
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_forward.png'/>");
			} else if($item.hasClass("dispatch")) { //分发
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_dispatch.png'/>");
			} else if($item.hasClass("forbidden")) { //禁用
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_forbidden.png'/>");
			} else if($item.hasClass("up")) { //向上箭头
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_up.png'/>");
			} else if($item.hasClass("down")) { //向下箭头
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_down.png'/>");
			} else if($item.hasClass("import")) { //导入Excel
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_import.png'/>");
			} else if($item.hasClass("export")) { //导出Excel
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_export.png'/>");
			} else if($item.hasClass("print")) { //导出Excel
				$item.find("span").prepend("<img src='" + ROOT + "/images/icon_printer.png'/>");
			}
		});
	}

	/**
	 * 左边菜单
	 */
	$.fn.htBar = function(options){
		var op = $.extend({adjust: true, move: "horizontal", container:"#container", mask:"#mask", collapse:".collapse", toggleBut:".toggle_collapse div", sideBar:"#sidebar", sideBar2:"#sidebar_s", splitBar:"#split_bar", splitBarProxy:"#split_bar_proxy"}, options);
		return this.each(function(){
			var htBar = this;
			var sbar = $(op.sideBar2, htBar);
			var bar = $(op.sideBar, htBar);

			$(op.toggleBut, bar).click(function(){
				HT.ui.sbar = false;
				$(op.splitBar).hide();
				var sbarwidth = sbar.cssv("left") + sbar.outerWidth();
				var barleft = sbarwidth - bar.outerWidth();
				var cleft = $(op.container).cssv("left") - (bar.outerWidth() - sbar.outerWidth());
				var cwidth = bar.outerWidth() - sbar.outerWidth() + $(op.container).outerWidth() - 2;
				$(op.container).css({left: cleft,width: cwidth});
				$(op.mask).animate({left: cleft,width: cwidth},100,function(){
					bar.animate({left: barleft}, 300, function(){
						bar.hide();
						sbar.show().css("left", -50).animate({left: 5}, 200);
//						$(window).trigger(HT.eventType.resizeGrid);
					});
				});
				$(op.collapse,sbar).click(function(){
					var sbarwidth = sbar.cssv("left") + sbar.outerWidth();
					if(bar.is(":hidden")) {
						$(op.toggleBut, bar).hide();
						bar.show().animate({left: sbarwidth}, 300);
//						$(op.container).click(_hideBar);  //container是iframe时不需要，由mask div代理
						$(op.mask).click(_hideBar);
						$(op.mask).css("display", "block");
					} else {
						$(op.mask).css("display", "none");
						bar.animate({left: barleft}, 300, function(){
							bar.hide();
						});
					}
					function _hideBar() {
						$(op.container).off("click", _hideBar);
						$(op.mask).off("click", _hideBar);
						if (!HT.ui.sbar) {
							$(op.mask).css("display", "none");
							bar.animate({left: barleft}, 300, function(){
								bar.hide();
							});
						}
					}
					return false;
				});
				return false;
			});

			$(op.toggleBut, sbar).click(function(){
				HT.ui.sbar = true;
				sbar.animate({left: -25}, 300, function(){				
					bar.show();
				});
				bar.animate({left: 5}, 500, function(){
					$(op.splitBar).show();
					$(op.toggleBut, bar).show();
					var cleft = 5 + bar.outerWidth() + $(op.splitBar).outerWidth();
					var cwidth = $(op.container).outerWidth() - (cleft - $(op.container).cssv("left")) -  2;
					$(op.container).css({left: cleft,width: cwidth});
					$(op.mask).css({left: cleft,width: cwidth});
					$(op.collapse, sbar).off('click');
					$(window).trigger(HT.eventType.resizeGrid);
				});
				return false;
			});
			
			handleSplit(htBar, op);
		});
	};
	
})(jQuery);
