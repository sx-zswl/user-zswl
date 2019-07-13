/**
 * @author Roger Wu
 * @version 1.0
 * added extend property oncheck
 * @author Roy on April 2013 and August 2013 for big change
 */
 (function($){
 	$.extend($.fn, {

		/**
		 * 构造树
		 * Usage:	默认： $("#treeUlId").htTree({lazyUrl:'http://xxx.com/', lazyCallback:function() {xxx}});
		 */
		htTree:function(options) {
			var profileStart = HT.getTime();
			var op = $.extend({
					checkFn:null, 
					selected:"selected", 
					exp:"expandable",
					coll:"collapsable", 
					firstExp:"first_expandable", 
					firstColl:"first_collapsable", 
					lastExp:"last_expandable", 
					lastColl:"last_collapsable", 
					folderExp:"folder_expandable", 
					folderColl:"folder_collapsable", 
					endExp:"end_expandable", 
					endColl:"end_collapsable",
					file:"file",
					ck:"checked", 
					unck:"unchecked",
					isFolderClickable:true,  //folder是否可点击，可点击时用来展来收起，不可点击时可打开超链接
					lazyUrl:null,
					lazyCallback:function($node){}  //对于大数据量树，延迟加载的回调函数，参数传入此节点
				}, options);

			this.each(function(){
				var $this = $(this);
				var cnum = $this.children().length;
				//Added by Roy on 4/12/2013 to support close class
				var isClose = $this.hasClass("close");
				var checkFn;
				if($this.hasClass("tree_check")){
					checkFn = eval($this.attr("oncheck"));
				}

				$(">li", $this).each(function(){
					var $li = $(this);
					
					var first = $li.prev()[0]?false:true;
					var last = $li.next()[0]?false:true; 

					$li.genTree({
						icon:$this.hasClass("tree_folder"),
						ckbox:$this.hasClass("tree_check"),
						root: $this,
						options: op,
						isFolderClickable:op.isFolderClickable,
						checkFn: checkFn,
						level: 0,
						exp:(cnum>1?(first?op.firstExp:(last?op.lastExp:op.exp)):op.endExp),
						coll:(cnum>1?(first?op.firstColl:(last?op.lastColl:op.coll)):op.endColl),
						showSub:(!$this.hasClass("collapse") && ($this.hasClass("expand") || (isClose ? false : (cnum>1?(first?true:false):true)))),
						isLast:(cnum>1?(last?true:false):true)
					});
				});

				//Commented by Roy on 4/12/2013 for fixing bugs
//				setTimeout(function(){
//					
//				},1);
			});

			var profileEnd = HT.getTime();
			//打印树加载时间，平时请注释掉
//			if(SELF.endsWith("main_container.jsp") || SELF.endsWith("big_tree.jsp")) {
//				alert("self: " + SELF + ", tree cost time: " + (profileEnd - profileStart));
//			}
			return;
		},

		subTree:function(op, level) {
			return this.each(function(){
				$(">li", this).each(function(){
					var $this = $(this);

					var isLast = ($this.next()[0]?false:true);
					$this.genTree({
						icon:op.icon,
						ckbox:op.ckbox,
						exp:isLast?op.options.lastExp:op.options.exp,
						coll:isLast?op.options.lastColl:op.options.coll,
						options:op.options,
						isFolderClickable:op.isFolderClickable,
						checkFn: op.checkFn,
						level:level,
						space:isLast?null:op.space,
						showSub:op.showSub,
						isLast:isLast
					});
					
				});
			});
		},

		genTree:function(options) {
			var op = $.extend({icon:options.icon,ckbox:options.ckbox,exp:"", coll:"", showSub:false, level:0, options:null, isLast:false}, options);

			return this.each(function(){
				var node = $(this);
				var tree = $(">ul", node);
				var parent = node.parent().prev();
				var checked = 'unchecked';
				if(op.ckbox) {
					if($(">.checked",parent).size() > 0) checked = 'checked';
				}

				if (tree.size()>0) {
					node.children(":first").wrap("<div></div>");

					//Added by Roy on 10/11/2013
					tree.each(function() {
						var $ulSub = $(this);
						var isOpen = $ulSub.hasClass("open");
//						alert("isOpen=" + isOpen + ", $ulSub=" + $ulSub[0].outerHTML);
						if(!isOpen) {
							isOpen = op.showSub;
						}
//						alert(isOpen + "+++++++ " + $ulSub.children("li").first().contents().eq(0).text());
						isOpen ? tree.show() : tree.hide();
					});

					var $ulSub = $("ul:first", node);
					var isOpen = $ulSub.hasClass("open");
					if(!isOpen) {
						isOpen = op.showSub;
					}
					$(">div", node).prepend("<div class='" + (isOpen ? op.coll : op.exp) + "'></div>"+(op.ckbox ?"<div class='ckbox " + checked + "'></div>":"")+(op.icon?"<div class='"+ (op.showSub ? op.options.folderColl : op.options.folderExp) +"'></div>":""));
//					op.showSub ? tree.show() : tree.hide();

					$(">div>div:first, >div>a", node).click(function(event){
						var $fnode = $(">li:first",tree);
						if($fnode.children(":first").is('a')) {
							tree.subTree(op, op.level + 1);
						}
						var $this = $(this);
						var isA = $this.is('a');

						if($(this).attr("target")) {
							op.isFolderClickable = false;
						}

						var $this = isA?$(">div>div", node).eq(op.level):$this;
						if (!isA || op.isFolderClickable) {
							$this.toggleClass(op.exp).toggleClass(op.coll);
							if (op.icon) {
								$(">div>div:last", node).toggleClass(op.options.folderExp).toggleClass(op.options.folderColl);
							}
						}
//						alert("isA:" + isA + ", op.isFolderClickable:" + op.isFolderClickable);

//						(isA && !op.isFolderClickable) ? "" : tree.is(":hidden") ? tree.slideDown("fast") : tree.slideUp("fast");
						(isA && !op.isFolderClickable) ? "" : showOrHideSub(tree, op);
						
						if(!op.isFolderClickable) {
							$("div." + op.options.selected + ", li." + op.options.selected, op.root).removeClass(op.options.selected);
							var parent = $this.parent().addClass(op.options.selected);
							var $li = $this.parents("li:first"), sTarget = $li.attr("target");
							
							if (sTarget) {
								if ($("#"+sTarget, $this).size() == 0) {
									$this.prepend('<input id="'+sTarget+'" type="hidden" />');
								}
								$("#"+sTarget, $this).val($li.attr("rel"));
							}
	//						alert(parent.html());
							$(".ckbox",parent).trigger("click");
							event.stopPropagation();
							$(document).trigger("click");
							if (!$(this).attr("target")) {
								return false;
							}

						} else {
							return false;
						}
						
					});

					$(">li", node).setupAClick(op);

					addSpace(op.level, node);
					//Added by Roy on 10/11/2013
					tree.each(function() {
						var $ulSub = $(this);
						var isOpen = $ulSub.hasClass("open");
						if(!isOpen) {
							isOpen = op.showSub;
						}
//						alert(isOpen + "+++++++ " + $ulSub[0].outerHTML);
						if(isOpen) {
							$ulSub.subTree(op, op.level + 1);
						}
					});
//					if(op.showSub) tree.subTree(op, op.level + 1);
				} else {
					node.children().wrap("<div></div>");			
					$(">div", node).prepend("<div class='node'></div>"+(op.ckbox?"<div class='ckbox "+checked+"'></div>":"")+(op.icon?"<div class='file'></div>":""));

					node.setupAClick(op);

					addSpace(op.level, node);
					if(op.isLast)$(node).addClass("last");
				}
				if (op.ckbox) node._check(op);

				node.setupCkboxClick(op);

				$(">div",node).mouseover(function(){
					$(this).addClass("hover");
				}).mouseout(function(){
					$(this).removeClass("hover");
				});
//				if(!$.support.leadingWhitespace)
//					$(">div",node).click(function(){
//						$("a", this).trigger("click");
//						return false;
//					});
			});

			function showOrHideSub(tree, options) {
				var op = $.extend({}, options);

				if(tree.is(":hidden")) {
					tree.show();

					var isLazy = tree.attr("lazy");
					if(isLazy) {
						tree.htUniqueId();
						var hasChild = $("li", tree).size() > 0 ? true : false;
						if(hasChild) return;

						var $parent = tree.parent();
						var left = 0;
						if($parent) {
							left = $(".folder_collapsable", $parent).offset().left + 5;
						}
						tree.ajaxLoading({
							image: 'loading_circle_2.gif',
							css:{marginTop:'0',marginLeft: left + 'px'}
						});

						var param = tree.attr("param");
						if(param) {
							param = eval('(' + param + ')');
						}
						tree.load(op.options.lazyUrl, param, function(response, status, xhr) {
							tree.subTree(op, op.level + 1);
						});
						
						var lazyCallback = op.options.lazyCallback;
						if(lazyCallback && $.isFunction(lazyCallback)) {
							lazyCallback(tree);
						}
					}
				} else {
					tree.hide();
				}
			}

			function addSpace(level,node) {
				if (level > 0) {					
					var parent = node.parent().parent();
					var space = !parent.next()[0]?"indent":"line";
					var plist = "<div class='" + space + "'></div>";
					if (level > 1) {
						var next = $(">div>div", parent).filter(":first");
						var prev = "";
						while(level > 1){
							prev = prev + "<div class='" + next.attr("class") + "'></div>";
							next = next.next();
							level--;
						}
						plist = prev + plist;
					}
					$(">div", node).prepend(plist);
				}
			}
		},

		/*
		 * Added by Roy on 4/12/2013
		 */
		setupCkboxClick: function(op) {
			var $liNode = $(this);
			var checkFn = op.checkFn;
			if(checkFn && $.isFunction(checkFn)) {
				$("div.ckbox", $liNode).each(function(){
					var ckbox = $(this);
					
					ckbox.click(function(){
						var checked = $(ckbox).hasClass("checked");
						var items = [];
						if(checked){
							var tnode = $(ckbox).parent().parent();
							var boxes = $("input", tnode);
							if(boxes.size() > 1) {
								$(boxes).each(function(){
									items[items.length] = {name:$(this).attr("name"), value:$(this).val(), text:$(this).attr("text")};
								});
							} else {
								items = {name:boxes.attr("name"), value:boxes.val(), text:boxes.attr("text")};
							}		
						}

						//check点击后回调函数
						//参数的形式为:{parent:{name:"xx", value:"xx", text:"xx"}, checked: true|false, items: [{name:"xx", value:"xx", text:"xx"}, {name:"xx", value:"xx", text:"xx"}]|{name:"xx", value:"xx", text:"xx"}}
						var $parent = $("a", $liNode);
						checkFn({parent: {name:$parent.attr("tname"), value:$parent.attr("tvalue"), text:$parent.html()}, checked:checked, items:items});														
					});
				});
			}

//			alert($liNode.html());
		},

		/*
		 * Added by Roy on 4/12/2013
		 */
		setupAClick: function(op) {
			var $liNode = $(this);
			
			$("a", $liNode).click(function(event){
				var $a = $(this);
				$("div." + op.options.selected + ", li." + op.options.selected, op.root).removeClass(op.options.selected);
				var parent = $a.parent().addClass(op.options.selected);
				var $li = $a.parents("li:first"), sTarget = $li.attr("target");
				
				if (sTarget) {
					if ($("#"+sTarget, $a).size() == 0) {
						$a.prepend('<input id="'+sTarget+'" type="hidden" />');
					}
					$("#"+sTarget, $a).val($li.attr("rel"));
				}
//				alert(parent.html());
				$(".ckbox",parent).trigger("click");
				event.stopPropagation();
				$(document).trigger("click");
				
				if (!$(this).attr("target")) {
					return false;
				}
			});
		},

		/*
		 * 取得checked的结果，结果类型为json数组，形式为：[{id:xx,name:xx},{id:xx,name:xx}]
		 *
		 * Added by Roy on 9/25/2013
		 */
		getCheckedResult: function(options) {
			var op =  $.extend({
				isContainsFolder: false  //是否包含父节点
			}, options);
			var $tree = $(this);
			var result = [];

			if(op.isContainsFolder) {
				var $indeterminateLi = $("li:has('div.indeterminate')", $tree);
				var parentsNames = $indeterminateLi.each(function() {
					var $indeterminateA = $("a", $(this));
					result.push({id:$indeterminateA.attr("node"), name:$indeterminateA.contents().eq(0).text()});
				});
			}

			var $checks = $(".ckbox.checked", $tree);
			$checks.each(function() {
				var $li = $(this).closest("li");
				var $ul = $(">ul", $li);

				if($ul.size() > 0) {
					var $subLi = $(">li:first", $ul.first());
					var hasExpanded = $subLi.children().first().is("div") ? true : false;
					if(hasExpanded) {
						if(op.isContainsFolder) {
							$closedLis = $("li", $ul);

							var $a = $("a", $li);
							var id = $a.attr("node");
							var name = $a.contents().eq(0).text();
							result.push({id:id, name:name});
						}

						return true;
					}

					var $closedLis = null;
					if(op.isContainsFolder) {
						$closedLis = $("li", $ul);

						var $a = $("a", $li);
						var id = $a.attr("node");
						var name = $a.contents().eq(0).text();
						result.push({id:id, name:name});
					} else {
						$closedLis = $("li:not(:has(ul))", $ul);
					}
					$closedLis.each(function() {
						var $a = $("a", $(this));
						var id = $a.attr("node");
						var name = $a.contents().eq(0).text();
						result.push({id:id, name:name});
					});
				} else {
					var $a = $("a", $li);
					var id = $a.attr("node");
					var name = $a.contents().eq(0).text();
					result.push({id:id, name:name});
				}

			});

			return result;
		},

		_check:function(op) {
			var node = $(this);
			var ckbox = $(">div>.ckbox", node);
			var $input = node.find("a");
			var tname = $input.attr("tname"), tvalue = $input.attr("tvalue");
//			var attrs = "text='"+$input.text()+"' ";
			var attrs = "";
			if (tname) attrs += "name='"+tname+"' ";
			if (tvalue) attrs += "value='"+tvalue+"' ";

			ckbox.append("<input type='checkbox' style='display:none;' " + attrs + "/>").click(function(){
				var cked = ckbox.hasClass("checked");
				var aClass = cked?"unchecked":"checked";
				var rClass = cked?"checked":"unchecked";
				ckbox.removeClass(rClass).removeClass(!cked?"indeterminate":"").addClass(aClass);
				$("input", ckbox).prop("checked", !cked);
				$(">ul", node).find("li").each(function(){
					var box = $("div.ckbox", this);
					box.removeClass(rClass).removeClass(!cked?"indeterminate":"").addClass(aClass)
					   .find("input").prop("checked", !cked);
				});
				$(node)._checkParent();
				return false;
			});

			var cAttr = $input.attr("checked") ? true : false;
			if (cAttr) {
				ckbox.find("input").prop("checked", true);
				ckbox.removeClass("unchecked").addClass("checked");
				$(node)._checkParent();
			}
		},

		_checkParent:function(){
			if($(this).parent().hasClass("tree")) return;
			var parent = $(this).parent().parent();
			var stree = $(">ul", parent);
			var ckbox = stree.find(">li>a").size()+stree.find("div.ckbox").size();
			var ckboxed = stree.find("div.checked").size();
			var aClass = (ckboxed==ckbox?"checked":(ckboxed!=0?"indeterminate":"unchecked"));
			var rClass = (ckboxed==ckbox?"indeterminate":(ckboxed!=0?"checked":"indeterminate"));
			$(">div>.ckbox", parent).removeClass("unchecked").removeClass("checked").removeClass(rClass).addClass(aClass);
			
			var $checkbox = $(":checkbox", parent);
			if (aClass == "checked") $checkbox.prop("checked",true);
			else $checkbox.prop("checked", false);
			
			parent._checkParent();
		}
	});
})(jQuery);