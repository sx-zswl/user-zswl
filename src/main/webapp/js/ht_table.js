/**
 * @author Roy
 * @date 4/10/2013
 */
(function($){

/**
 * Grid Table
 * Usage:	$(".grid").htGrid( {
						targetForm: $("form"),
						singleItemCallback: function($tr) {},
						dblClickCallback: function($tr) {}
					  } );
 */
$.fn.htGrid = function(options){
	var op = $.extend({ targetForm: null, singleItemCallback: function() {}, dblClickCallback: function() {}}, options);
	var $grid = $(this);

	HT.waitingLoad(function() {initGrid($grid, op);});
}

/**
 * 初始化normal table
 */
$.fn.initTable = function() {
	var $p = $(this);
	var $tables = $("table", $p);
//	$("caption:not(.sub)", $tables).addClass("font title");
//	$("caption.sub", $tables).addClass("font big bold");

	//锁定表头和列
	$(".lock", $p).each(function() {
		var $lockDiv = $(this);
		$lockDiv.lock();
	});

	var $nowrapTables = $("table.normal:not(.wrap)", $p);
	var $normalTables = $("table.normal:not(.clear)", $p);
	//鼠标经过时对过长字符截取显示，同时浮动层显示完整内容
	HT.waitingLoad(function() {
//		$("td", $nowrapTables).attr("float", "overflow");
		$nowrapTables.overflowTip4Table();
	});
	
	$tables.rmbTip();
	$tables.editRmbTip();
	//隔行着色
	$normalTables.htIntervalColor();
	//鼠标经过高亮
//	$normalTables.htMouseLight();
}

/**
 * 初始化content table
 */
$.fn.initContentTable = function() {
	var $p = $(this);
	var $tables = $("table.content", $p);
	var $mandatoryTds = $("td.mandatory", $tables);

	$tables.overflowTip();

	$mandatoryTds.each(function() {
		$td = $(this);
		$td.append("<span class='font warn bold' style='font-family: Verdana, Tahoma, Arial; padding:2px 0 0 0;'>*</span> ");
	});
}

/**
 * 初始化nav table
 */
$.fn.initNavTable = function() {
	var $p = $(this);
	var $navTables = $(".nav_table", $p);
	var $tbody = $("tbody", $navTables);
	var $tds = $navTables.wrap("<td></td>").parent();

	var $wrap = $("<table><tr></tr></table>").addClass("layout")
		.wrap($("<div></div>").addClass("nav_table_div")).closest("div");
	$tds.wrapAll($wrap);

	$tbody.htMouseLight();

	$("td:contains('[')", $tbody).each(function() {
		var $td = $(this);
		var text = $td.html();
		var re = /(\s*\[\d+\]\s*)/g;
		var reResult = re.exec(text);
		if(!HT.isBlank(reResult)) { 
			var value = reResult[0].trim();
			value = value.replace("[", "(").replace("]", ")");;
			var text = text.replace(re, "<span class='font warn'> " + value + " </span>");
			$td.html(text);
		}
	});
}

/**
 * 锁定表头和左边列
 */
$.fn.lock = function() {
	var $lockDiv = $(this);
//	var $caption = $("caption", $table);
//	var $thead = $("thead", $table);
//	var $tbody = $("tbody", $table);
//	var tableWidth = $table.attr("width");
//	$table.data("tablePresetWidth", tableWidth);

//	$table.wrap("<div class='lock_div' style='overflow:hidden'></div>");
//	var $dupTable = $table.clone().empty();
//	$thead.unwrap();

//	var tableCode = $dupTable[0].outerHTML;
	//使thead处于单独一个table
//	$thead.wrap("<div class='thead_div' style='position:relative'>" + tableCode + "</div>");
	//使tbody处于单独一个table
//	$tbody.wrap("<div class='tbody_div'>" + tableCode + "</div>");

	var $theadDiv = $(".thead_div", $lockDiv);
	var $tbodyDiv = $(".tbody_div", $lockDiv);
	var $theadTable = $("table", $theadDiv);
	var $tbodyTable = $("table", $tbodyDiv);

//	$theadTable.prepend($caption);
	$tbodyDiv.css("overflow-y", "auto");

	//标题行跟随tbody横向滚动
	$tbodyDiv.scroll(function(event){
		scrollThead($theadDiv, $tbodyDiv);
	});

	//设置tbody列宽
	initGridColWidth($theadTable, $tbodyTable);

	//计算tbodyDiv高度
	initLockHeight($tbodyDiv);

	function resizeLock() {
		//设置列宽
		initGridColWidth($theadTable, $tbodyTable);
		//计算tbodyDiv高度
		initLockHeight($tbodyDiv);
		scrollThead($theadDiv, $tbodyDiv);
	}

	HT.winResize(function(){
		resizeLock();
	});

	$(window).off(HT.eventType.resizeLock).on("resizeLock", resizeLock);
}

/**
 * 计算tbodyDiv高度for lock
 */
function initLockHeight($tbodyDiv) {
	HT.waitingLoad(function() {
		var $win = $(window);
		var winHeight = $win.height();
		var top = $tbodyDiv.offset().top;
		var tbodyHeight = winHeight - top;
//		alert("win height=" + winHeight + ", top=" + top + ", tbodyHeight=" + tbodyHeight);

		$tbodyDiv.parent().nextAll(".placeholder").each(function() {
			tbodyHeight -= $(this).height();
		});

		$tbodyDiv.height(tbodyHeight);
	});
}

/**
 * 初始化grid table
 */
function initGrid($grid, op) {
	var $win = $(window);
	var $doc = $(document);
	
	//一个grid div只包含一个table，多余的不作处理
	var $table = $("table:first", $grid);
	var $thead = $("thead", $table);
	var $tbody = $("tbody", $table);
	var tableWidth = $table.attr("width");
	$grid.data("tablePresetWidth", tableWidth);

	$thead.unwrap();
	
	var tableCode = "<table></table>";
	if(op.tableClass != undefined) {
		tableCode = "<table class='" + op.tableClass + "'></table>";
	}
	//使thead处于单独一个table
	$thead.wrap("<div class='thead_div' style='position:relative'>" + tableCode + "</div>");
	//使tbody处于单独一个table
	$tbody.wrap("<div class='tbody_div'>" + tableCode + "</div>");

//	$grid.html($table.html());

	var $theadDiv = $(".thead_div", $grid);
	var $tbodyDiv = $(".tbody_div", $grid);
	var $theadTable = $("table", $theadDiv);
	var $tbodyTable = $("table", $tbodyDiv);

	//标题行跟随tbody横向滚动
	$tbodyDiv.scroll(function(event){
		scrollThead($theadDiv, $tbodyDiv);
	});

	$grid.css("display", "block");
	//初始化Grid Table高度
	initGridHeight($grid);
	//设置thead最小宽度
	$("th", $theadTable).each(function() {
		$th = $(this);
		$th.css("min-width", $th.attr("width") + "px");
		//log.debug("th width: " + $th.attr("width"));
	});
	//设置列宽
	initGridColWidth($theadTable, $tbodyTable);
	
	if(op.tableClass == undefined || op.tableClass.indexOf("wrap") < 0) {
		//鼠标经过时对过长字符截取显示，同时浮动层显示完整内容
		setupOverflowTip($grid);
	}

	var $ths = $("th", $theadTable);
	var $tds = $("tr:first td", $tbodyTable);

	$ths.each(function(index) {
		var $th = $(this);
		var $td = $($tds[index]);
		
		var thWidth = $th.cssv("width");
//		log.debug("thWidth css=" + $th.width() + ", tdWidth=" + $td.width());
	});

	//隔行着色
	$tbodyTable.htIntervalColor({skipTitle: false});
	//鼠标经过高亮
//	$tbodyTable.htMouseLight();
	//行选中
	var $lastTr;
	$tbodyTable.on("click.ht", "tr", function(event) {
		if($lastTr)
			$lastTr.removeClass("highlight");
		$tr = $(this);
		$tr.addClass("bg highlight");
		$lastTr = $tr;
		//单击回调
		if(op.singleItemCallback)
			op.singleItemCallback($tr);

	});

	$tbodyTable.on("dblclick.ht", "tr", function(event) {
		//双击回调
		if(op.dblClickCallback)
			op.dblClickCallback($tr);
	});

//	$doc.on("click", ".toolbar, .panel", function() {
//		if($lastTr)
//			$lastTr.removeClass("highlight");
//	});
	//排序
	$form = op.targetForm;
	$theadTable.htOrder({targetForm: $form});

	//加载完毕后，用户自定义的回调
	if(op.callback)
		op.callback();

	function resizeGrid() {
		initGridHeight($grid);
		//设置列宽
		initGridColWidth($theadTable, $tbodyTable);
		//鼠标经过时对过长字符截取显示，同时浮动层显示完整内容
		setupOverflowTip($grid);
		scrollThead($theadDiv, $tbodyDiv);
	}

	HT.winResize(function(){
		resizeGrid();
//		log.debug("********");
	});

	$(window).off(HT.eventType.resizeGrid).on("resizeGrid", resizeGrid);
}

/**
 * 初始化Grid Table高度
 */
function initGridHeight($grid) {
	var $win = $(window);
	var winHeight = $win.height();
	var adjust = 4;
	var $pagerBar = $("#pager_bar");
	if(HT.isBlank($pagerBar)) {
		adjust -= 1;
	}

	var defH = $grid.attr("defH") ? $grid.attr("defH") : 0;
	if(defH > 0) {
		$grid.height(defH);
	} else {
		var preHeight = 0;
		var nextHeight = 0;
		$grid.prevAll().each(function() {
			preHeight += $(this).height();
		});

		$grid.nextAll(".placeholder").each(function() {
			nextHeight += $(this).height();
		});
		$grid.height(winHeight - preHeight - nextHeight - $pagerBar.height() - adjust);
	}

	//thead与tbody宽度
	var $theadDiv = $(".thead_div", $grid);
	var $tbodyDiv = $(".tbody_div", $grid);

	var $theadTable = $("table", $theadDiv);
	var $tbodyTable = $("table", $tbodyDiv);
//
//		var theadWidth = $theadTable.outerWidth();
//		var tbodyWidth = $tbodyTable.outerWidth();
//		var maxWidth = theadWidth > tbodyWidth ? theadWidth : tbodyWidth;
//$theadTable.width($tbodyTable.width());

	//宽度，设置表格宽度为屏幕100%，需要计算，不能直接设置100%，会引起表头错位
	var tableWidth = $grid.data("tablePresetWidth");
	if(typeof tableWidth == "undefined") {
		tableWidth = $win.width()-1;
	}
	tableWidth=  tableWidth;
	
	$theadTable.css({"width": tableWidth + "px", "min-width": tableWidth + "px"});
	$tbodyTable.css({"width": tableWidth + "px", "min-width": tableWidth + "px"});

	//tbody高度
	$tbodyDiv.height($grid.height() - $theadDiv.height());
}

/**
 * 设置列宽
 */
function initGridColWidth($theadTable, $tbodyTable) {
	//重置thead与tbody列宽
	var $ths = $("th", $theadTable);
	var $tds = $("tr:first td", $tbodyTable); //只需第一行

	var winWidth = $(window).width();
	$theadTable.width(winWidth);
	$tbodyTable.width(winWidth);

	var theadTableWidth = $theadTable.innerWidth();
	var tbodyTableWidth = $tbodyTable.cssv("width");

	var totalPresetWidth = 0;
	var totalOriWidth = 0;
	var thPresetWidths = new Array();
	var thOriWidths = new Array();
	$ths.each(function(index) {
		var $th = $(this);
		var presetWidth = parseInt($th.attr("width"));
		thPresetWidths.push(presetWidth);
		totalPresetWidth += presetWidth;

		var oriWidth = $th.width();
		thOriWidths.push(oriWidth);
		totalOriWidth += oriWidth;

//		log.debug("---- presetWidth=" + presetWidth + ", oriWidth=" + oriWidth);
	});

//	log.debug("-----------------------------------------------------------");
	var passedWidth = 0;
	$ths.each(function(index) {
		var $th = $(this);
		var $td = $($tds[index]);

		var tdOriWidth = $td.width();

		var thPresetWidth = thPresetWidths[index];
//		log.debug("++++ thPresetWidth=" + thPresetWidth);

		var thActualWidth = 0;

		if(HT.isChrome) {
			var baseWith = totalPresetWidth > theadTableWidth ? totalPresetWidth : theadTableWidth;
			var calculatedValue = Math.ceil((thPresetWidth/totalPresetWidth)*baseWith);
			if(index == $ths.length - 1) {
				thActualWidth = baseWith - passedWidth;
			} else {
				passedWidth += calculatedValue;
				thActualWidth = calculatedValue;
			}
		} else {
			if(totalPresetWidth <= totalOriWidth) {
				thActualWidth = thOriWidths[index];
			} else {
				var calculatedValue = Math.ceil((thPresetWidth/totalPresetWidth)*totalOriWidth);
				if(index == $ths.length - 1) {
					thActualWidth = totalOriWidth - passedWidth;
				} else {
					passedWidth += calculatedValue;
					thActualWidth = calculatedValue;
				}
			}
		}

//		log.debug("tdOriWidth=" + tdOriWidth + ", thPresetWidth=" + thPresetWidth + ", totalPresetWidth=" + totalPresetWidth + ", thOriWidth=" + thOriWidths[index] + ", totalOriWidth=" + totalOriWidth + ", theadTableWidth=" + theadTableWidth + ", $win.width()=" + $win.width() + ", thActualWidth=" + thActualWidth);
		$th.css( {"width": (thActualWidth) + "px", "min-width": (thActualWidth) + "px"} );

		var hasThWidth = typeof $th.attr("width") == "undefined" ? false : true;
		if(hasThWidth) {
			$td.css( {"width": (thActualWidth) + "px", "min-width": (thActualWidth) + "px"} );
		} else {
//				$th.width(tdWidth + 3);
		}
//		log.debug("theadTableWidth=" + $theadTable.cssv("width") + ",tbodyTableWidth="  + $tbodyTable.cssv("width") + ",thPresetWidth css=" + thPresetWidth + ", tdWidth=" + $td.width() + ", tdOriWidth="  + tdOriWidth + ", hasThWidth=" + hasThWidth + "=====" + $th.width() + "=====" + $td.width());
	});
}

/**
 * 鼠标经过时对过长字符截取显示，同时浮动层显示完整内容
 */
function setupOverflowTip($grid) {
	var $theadDiv = $(".thead_div", $grid);
	var $theadTable = $("table", $theadDiv);
	var $tbodyDiv = $(".tbody_div", $grid);
	var $tbodyTable = $("table", $tbodyDiv);

	//根据thead列宽计算
	var $ths = $("th", $theadTable);
	var thNum = $ths.length;
	var thsWidth = $ths.map(function() {
		$th = $(this);
		return $th.cssv("width");
	});

	var $tds = $("td[float='overflow']", $tbodyTable);
	$tds.each(function(index) {
		var $td = $(this);

		//处理表单元素
		var hasFormObj = $("select,a,img,input,button,textarea,ul,li,div,table", $td).size() > 0 ? true : false;
		if(hasFormObj) {
			return true;
		}

		if($td.attr("float") == "rmb") {
			return false;
		}
		var cellWidth = thsWidth[$td.index()];
		var charNum = cellWidth/6 - 3;
		//浮动tip
		var msg = $td.attr("title");
		if(HT.isBlank(msg)) {
			msg = $td.text();
		}
		var textWidth = msg.trim().getCharLength() * 6;
//		log.debug("cellWidth=" + cellWidth + ", textWidth=" + textWidth + ", html=" + $td[0].outerHTML);
//		log.debug("cellWidth", cellWidth, "textWidth", textWidth, "charNum", charNum + ", index % $tds.length=" + (index % thNum));

		if(cellWidth > 0 && textWidth > cellWidth) {
//			$td.attr("title", msg).tooltip({
//				track: true
//			});
			$td.attr("title", msg);
			msg = msg.getCharOfFixedLength(charNum) + "...";
			$td.text(msg);
		}
	});

	$tbodyTable.rmbTip();
}

/**
 * 标题行跟随tbody横向滚动
 */
function scrollThead($theadDiv, $tbodyDiv){
	if($tbodyDiv.scrollLeft() > 0){
		var scroll = $tbodyDiv.scrollLeft();
		$theadDiv.css("left", $tbodyDiv.cssv("left") - scroll);
	}
	if($tbodyDiv.scrollLeft() == 0) {
		$theadDiv.css("left", "0px");
	}
	return false;
}


})(jQuery);
