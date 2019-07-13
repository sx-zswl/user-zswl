/*
* jQuery pager plugin
* Version 1.0 (12/22/2008)
* @requires jQuery v1.2.6 or later
*
* Example at: http://jonpauldavies.github.com/JQuery/Pager/PagerDemo.html
*
* Copyright (c) 2008-2009 Jon Paul Davies
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
* 
* Read the related blog post and contact the author at http://www.j-dee.com/2008/12/22/jquery-pager-plugin/
*
* This version is far from perfect and doesn't manage it's own state, therefore contributions are more than welcome!
*
* Usage: .pager({ pagenumber: 1, pagecount: 15, buttonClickCallback: PagerClickTest });
*
* Where pagenumber is the visible page number
*       pagecount is the total number of pages to display
*       buttonClickCallback is the method to fire when a pager button is clicked.
*
* buttonClickCallback signiture is PagerClickTest = function(pageclickednumber) 
* Where pageclickednumber is the number of the page clicked in the control.
*
* The included Pager.CSS file is a dependancy but can obviously tweaked to your wishes
* Tested in IE6 IE7 Firefox & Safari. Any browser strangeness, please report.
*/
/*
 * Big change by Roy on Mar. 2013
 */
(function($) {

	$.fn.pager = function(options) {
        var opts = $.extend({}, $.fn.pager.defaults, options);

//		alert("pagenumber=" + opts.pagenumber + ", totalcount=" + opts.totalcount + ", pageSize=" + opts.pageSize);

		$(window).resize(function(){
			$("#pager_bar").stayBottom();
		});

		$("#pager_bar").stayBottom();
        return this.each(function() {
			// empty out the destination element and then render out the pager with the supplied options
            $(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.totalcount),  parseInt(options.pagesize), options.pagesizecandidate, options.buttonClickCallback));
        });
    };

    // render and return the pager with the supplied options
    function renderpager(pagenumber, totalcount, pagesize, pagesizecandidate, buttonClickCallback) {
		var pagecount = calPageCount(totalcount, pagesize);

		if(pagenumber > pagecount) {
			pagenumber = pagecount;
		}
		pagenumber = pagenumber == 0 ? 1:pagenumber;

        // setup $pager to hold render
        var $pager = $('<ul class="pages"></ul>');

        // add in the previous and next buttons
        $pager.append(renderButton('上一页', pagenumber, pagecount, buttonClickCallback));
        	
        // pager currently only handles 10 viewable pages ( could be easily parameterized, maybe in next version ) so handle edge cases
		var intervalLen = 2;

		//Start show front interval
		var frontIntervalLen = pagecount >= intervalLen ? intervalLen : pagecount;
		for (var page = 1; page <= frontIntervalLen; page++) {
			var currentButton = $('<li class="page-number">' + (page) + '</li>');

			page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function() { buttonClickCallback(this.firstChild.data, pagecount); });
			currentButton.appendTo($pager);
		}

        var startPoint = 1 + intervalLen;
        var endPoint = 5 + intervalLen;

		var middlePoint = 3;

		if (pagenumber > (middlePoint + intervalLen)) {
            startPoint = pagenumber - middlePoint + 1;
            endPoint = pagenumber + middlePoint - 1;
        }

        if (endPoint > (pagecount - intervalLen)) {
            startPoint = startPoint - (endPoint - (pagecount - intervalLen));
            endPoint = (pagecount - intervalLen);
        }

        if (startPoint < 1 + intervalLen) {
            startPoint = 1 + intervalLen;
        }

		if(startPoint > 1 + intervalLen) {
			$('<li class="interval">...</li>').appendTo($pager);
		}

        // loop thru visible pages and render buttons
        for (var page = startPoint; page <= endPoint; page++) {
            var currentButton = $('<li class="page-number">' + (page) + '</li>');

            page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function() { buttonClickCallback(this.firstChild.data, pagecount); });
            currentButton.appendTo($pager);
        }

		if(endPoint < (pagecount - intervalLen)) {
			$('<li class="interval">...</li>').appendTo($pager);
		}

		//Start show back interval
		var backIntervalLen = (pagecount - frontIntervalLen) >= intervalLen ? intervalLen : pagecount - frontIntervalLen;
		for (var page = pagecount - backIntervalLen + 1; page <= pagecount; page++) {
			var currentButton = $('<li class="page-number">' + (page) + '</li>');

			page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function() { buttonClickCallback(this.firstChild.data, pagecount); });
			currentButton.appendTo($pager);
		}

        // render in the next and last buttons before returning the whole rendered control back.
        $pager.append(renderButton('下一页', pagenumber, pagecount, buttonClickCallback));
		
		var pageRangeStart = ((pagenumber-1)*pagesize+1);
		var pageRangeEnd = pagenumber*pagesize;
		var pageRangeLabel = "";

		pageRangeEnd = pageRangeEnd > totalcount ? totalcount : pageRangeEnd; 
		if(totalcount == 0) {
			pageRangeLabel = "";
		} else if(pageRangeEnd == pageRangeStart) {
			pageRangeLabel = "第" + pageRangeEnd + "条/";
		} else {
			pageRangeLabel = "第" + pageRangeStart + "-" + pageRangeEnd + "条/";
		}
		$pager.append($("<li class='interval' style='margin-left:20px'>" + pageRangeLabel + "共" + totalcount + "条</li>"));

		$pager.append($("<input class='pagerInput' id='goPage' maxlength='4' style='margin-left:20px'/>").keydown(function(event) {
			if(event.keyCode == 13) {
				buttonClickCallback($("#goPage").val(), pagecount);
			}
		}).val(pagenumber));
		$pager.append($("<li class='interval'><button type='button' class='btn thin'><span>GO</span></button></li>").click(function(){ buttonClickCallback($("#goPage").val(), pagecount); }));

		var $pageSizeObj = $("<li class='interval'>每页显示: <select name='pageSize'></select></li>");
		var $pageSizeSlt = $("select", $pageSizeObj);
		$pageSizeSlt.on("change", function() { buttonClickCallback(1, pagecount); });

		$.each(pagesizecandidate,function(n,value) {
			if(pagesize == value) {
				$pageSizeSlt.append("<option value='" + value + "' selected>" + value + "</option>");
			} else {
				$pageSizeSlt.append("<option value='" + value + "'>" + value + "</option>");
			}
		});

		$pager.append($pageSizeObj);

        return $pager;
    }

    // renders and returns a 'specialized' button, ie 'next', 'previous' etc. rather than a page number button
    function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {

        var $Button = $('<li class="pgNext">' + buttonLabel + '</li>');

        var destPage = 1;

        // work out destination page for required button type
        switch (buttonLabel) {
            case "首页":
                destPage = 1;
                break;
            case "上一页":
                destPage = pagenumber - 1;
                break;
            case "下一页":
                destPage = pagenumber + 1;
                break;
            case "末页":
                destPage = pagecount;
                break;
        }

        // disable and 'grey' out buttons if not needed.
        if (buttonLabel == "首页" || buttonLabel == "上一页") {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage, pagecount); });
        }
        else if(buttonLabel == '共'+pagecount+'页') {
            $Button.addClass('pgEmpty');
        }
        else {
        	pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function() { buttonClickCallback(destPage, pagecount); });
        }

        return $Button;
    }

	function calPageCount(totalcount, pagesize) {
		var pagecount = parseInt(totalcount / pagesize);
		if (totalcount % pagesize > 0) {
			pagecount++;
		}
		pagecount = pagecount == 0 ? 1:pagecount;
		return pagecount;
	}

    // pager defaults. hardly worth bothering with in this case but used as placeholder for expansion in the next version
    $.fn.pager.defaults = {
        pagenumber: 1,
        pagecount: 1
    };

})(jQuery);





