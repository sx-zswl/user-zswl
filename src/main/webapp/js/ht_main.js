/**
 * @author Roy
 * @date 3/18/2013
 */
//ȫ�ֱ���
var ROOT;
var SELF;
var log;
var resizeTimer = null; 


//HT����
var HT = {
	browser: "ie",
	
	isIE: false,

	isChrome: false,

	/**
	 * ������ʼ�������ȴ�dom������ɣ�������ready��
	 */
	initImmediately: function(options) {
		var op = $.extend({root: ""}, options);
		ROOT = op.root;
		SELF = op.self;

		log = log4javascript.getLogger("LOG");
		log4javascript.setEnabled(false);
		log.setLevel(log4javascript.Level.TRACE);
		//var appender = new log4javascript.InPageAppender();
		var appender = new log4javascript.PopUpAppender();
		log.addAppender(appender);
		
		initUIImmediately();
	},

	/**
	 * ready�еĳ�ʼ��
	 */
	init: function() {
		var startTime =new Date().getTime(); 
		initUI();
	    var endTime = new Date().getTime();
//	    alert("[" + SELF + "]Cost time: " + (endTime - startTime) + "ms");
	},

	ui:{ isLoaded:false, sbar:true},

	eventType: {
		resizeGrid:"resizeGrid",	// ���ڴ��ڻ�dialog��С����
		resizeLock:"resizeLock"	// ���ڴ��ڻ�dialog��С����
	},
	
	/**
	 * �Զ���window resize����ʱִ�У�������ö������
	 */
	winResize: function(callback) {
		$(window).resize(function() { 
			if (resizeTimer) {
				clearTimeout(resizeTimer);
			}
			resizeTimer = setTimeout(callback, 30);
		});
	},

	/**
	 * ��ȡ��ǰʱ��ĺ�����
	 */
	getTime: function() {
		return new Date().getTime();
	},

	/**
	 * �ȴ�HTҳ���ܻ�����ʼ�����
	 */
	waitingLoad: function(callback) {
		setTimeout(function() {
			if(!HT.ui.isLoaded) {
				HT.waitingLoad(callback);
			} else {
				callback();
			}
		}, 10);
	},

	/**
	 * ���ύ
	 */
	doSubmit: function (obj) {
		$(obj).closest("form")[0].submit();
		return true;
	},

	/**
	 * ������
	 */
	doReset: function (obj) {
		$(obj).closest("form")[0].reset();
		return false;
	},

	/**
	 * �ж��ַ����Ƿ�Ϊ��
	 */
	isBlank: function(obj) {
		var type = $.type(obj);
		if(type == "null" || type == "undefined") {
			return true;
		}
		if(type == "string" && obj.trim() == "") {
			return true;
		}
		if(type == "object" && $(obj).length < 1) {
			return true;
		}
		return false;
	},

	/**
	 * �ж϶����Ƿ�Ϊstring
	 */
	isString: function(obj) {
		return $.type(obj) == "string";
	},

	/**
	 * �ж϶����Ƿ�Ϊnumber
	 */
	isNumber: function(obj) {
		return $.type(obj) == "number";
	},

	/**
	 * fix�ַ��������Ϊ�ջ�δ�����򷵻�""��������������Ҳ����""
	 */
	fixString: function(obj, defaultStr) {
		var result = obj;
		var type = $.type(obj);
		if(type != "string") {
			if(this.isBlank(defaultStr)) {
				result = "";
			} else {
				result = defaultStr;
			}
		}
		return result;
	},

	/**
	 * fix���Σ����Ϊ�ջ�δ�����򷵻�0������������Ҳ����0
	 */
	fixInt: function(obj, defaultValue) {
		var result = obj;
		var type = $.type(obj);
		if(type != "number") {
			if(this.isBlank(defaultValue)) {
				result = 0;
			} else {
				result = defaultValue;
			}
		}
		return result;
	},

	/**
	 * ��һ�����ڣ�����options���ô�������
	 * @url ����
	 * @winName �������ƣ�������ã���ͬ������ֻ�ܴ�һ���������ÿ��ظ��򿪶������
	 * @options �������ԣ���ѡ
	 * @return �´򿪵�window����
	 */
	openWin: function(url, winName, options) {
		//�ͻ����Զ��ƵĲ���
		var customOp = {
			width: "70%",
			height: "70%",
			scrollbars: "yes",
			resizable: "yes"
		};
		//�ͻ����ɶ��ƵĲ���
		var fixedOp = {
			location: "no",
			toolbar: "no",
			status: "no"
		};

		if(this.isBlank(url)) return "url is null";
		if($.type(url) != "string") return "url is not a string";

		if($.type(winName) == "object") {
			//(url, options)
			return this.openWin(url, null, winName);
		}

		//���titleΪ�ջ���󣬽�ת��Ϊ""
		winName = this.fixString(winName);

		//����options
		var opStr = "";
		var op = customOp;
		if($.type(options) == "object") {
			op = $.extend(customOp, options);
		}

		//����ٷֱ�
		var widthValue = op["width"];
		var heightValue = op["height"];
		if(this.isString(widthValue) && widthValue.endsWith("%")) {
			op["width"] = screen.width * (widthValue.cutTail("%").toInt()/100);
		}
		if(this.isString(heightValue) && heightValue.endsWith("%")) {
			op["height"] = screen.height * (heightValue.cutTail("%").toInt()/100);
		}

		var opItems = [];
		//����custom����
		for(opName in customOp) {
			var opValue = op[opName];
			opItems.push(opName + "=" + opValue);
		}
		//����̶�����
		for(opName in fixedOp) {
			var opValue = fixedOp[opName];
			opItems.push(opName + "=" + opValue);
		}
		//����left��top
		opItems.push("left=" + (screen.width-op["width"])/2);
		opItems.push("top=" + ((screen.height-op["height"])/2 - 30));

		opStr = opItems.join(",");

		var win = window.open(url, winName, opStr);
		return win;
	},

	/**
	 * ��һ��ģʽ�Ի��򣬸���options���öԻ�������
	 * @url ����
	 * @dialogArguments JSon���������ڸ�������ģʽ���ڼ䴫���ݣ���ѡ
	 * @options ��ѡ
	 * @return �Ի���ͨ��"window.returnValue"���ص�ֵ
	 */
	openDialog: function(url, dialogArguments, options) {
		return this.openDialogWithType(url, dialogArguments, options);
	},

	/**
	 * ��һ����ģʽ�Ի��򣬸���options���öԻ�������
	 * @url ����
	 * @dialogArguments JSon���������ڸ�������ģʽ���ڼ䴫���ݣ���ѡ
	 * @options ��ѡ
	 * @return �Ի���ͨ��"window.returnValue"���ص�ֵ
	 */
	openModelessDialog: function(url, dialogArguments, options) {
		return this.openDialogWithType(url, dialogArguments, options, 1);
	},

	/**
	 * ��һ��ģʽ���ģʽ�Ի��򣬸���options���öԻ�������
	 * @url ����
	 * @dialogArguments JSon���������ڸ�������ģʽ���ڼ䴫���ݣ���ѡ
	 * @options ��ѡ
	 * @dialogType ���ͣ�0:ģʽ����, 1:��ģʽ����
	 * @return �Ի���ͨ��"window.returnValue"���ص�ֵ
	 */
	openDialogWithType: function(url, dialogArguments, options, dialogType) {
		//�ͻ����Զ��ƵĲ���
		var customOp = {
			width: "70%",
			height: "70%",
			scrollbars: "yes",
			resizable: "yes"
		};
		//�ͻ����ɶ��ƵĲ���
		var fixedOp = {
			center: "yes",
			edge: "sunken",
			status: "no"
		};

		if(this.isBlank(url)) return "url is null";
		if($.type(url) != "string") return "url is not a string";

		//����options
		var opStr = "";
		var op = customOp;
		if($.type(options) == "object") {
			op = $.extend(customOp, options);
		}

		//����ٷֱ�
		var widthValue = op["width"];
		var heightValue = op["height"];
		
		if(this.isString(widthValue) && widthValue.endsWith("%")) {
			op["width"] = screen.width * (widthValue.cutTail("%").toInt()/100);
		}
		if(this.isString(heightValue) && heightValue.endsWith("%")) {
			op["height"] = screen.height * (heightValue.cutTail("%").toInt()/100);
		}

		//ת��Ϊpx
		op["width"] += "px";
		op["height"] += "px";

		var opItems = [];
		//����custom����
		for(opName in customOp) {
			var opValue = op[opName];
			if(opName == "width") opName = "dialogWidth";
			if(opName == "height") opName = "dialogHeight";
			if(opName == "scrollbars") opName = "scroll";
			opItems.push(opName + "=" + opValue);
		}
		//����̶�����
		for(opName in fixedOp) {
			var opValue = fixedOp[opName];
			opItems.push(opName + ":" + opValue);
		}

		opStr = opItems.join(";");

		var dialogType = this.fixInt(dialogType);
		var returnValue;
		if(dialogType == 0) {
			returnValue = window.showModalDialog(url, dialogArguments, opStr);
		} else {
			returnValue = window.showModelessDialog(url, dialogArguments, opStr);
		}
		return returnValue;
	},

	/**
	 * ���ֽ�����Ϊ�ɶ��ַ���
	 */
	getReadableSize: function(size) {
		var result = "";
		if (size >= 0 && size < 1024) {
			result = size + "B";
		} else if (size >= 1024 && size < (1024 * 1024)) {
			result = Math.round(size/1024) + "K";
		} else if (size >= (1024 * 1024) && size < (1024 * 1024 * 1024)) {
			result = Math.round(size/(1024*1024)) + "M";
		} else if (size >= (1024 * 1024 * 1024)) {
			result = Math.round(size/(1024*1024*1024)) + "G";
		}
		return result;
	},

	/** 
	 * You can use this map like this:
	 * var myMap = new Map();
	 * myMap.put("key","value");
	 * var key = myMap.get("key");
	 * myMap.remove("key");
	 */
	Map: function() {

		this.elements = new Array();
		
		this.size = function(){
			return this.elements.length;
		}
		
		this.isEmpty = function(){
			return (this.elements.length < 1);
		}
		
		this.clear = function(){
			this.elements = new Array();
		}
		
		this.put = function(_key, _value){
			this.remove(_key);
			this.elements.push({key: _key, value: _value});
		}
		
		this.remove = function(_key){
			try {
				for (i = 0; i < this.elements.length; i++) {
					if (this.elements[i].key == _key) {
						this.elements.splice(i, 1);
						return true;
					}
				}
			} catch (e) {
				return false;
			}
			return false;
		}
		
		this.get = function(_key){
			try {
				for (i = 0; i < this.elements.length; i++) {
					if (this.elements[i].key == _key) { return this.elements[i].value; }
				}
			} catch (e) {
				return null;
			}
		}
		
		this.element = function(_index){
			if (_index < 0 || _index >= this.elements.length) { return null; }
			return this.elements[_index];
		}
		
		this.containsKey = function(_key){
			try {
				for (i = 0; i < this.elements.length; i++) {
					if (this.elements[i].key == _key) {
						return true;
					}
				}
			} catch (e) {
				return false;
			}
			return false;
		}
		
		this.values = function(){
			var arr = new Array();
			for (i = 0; i < this.elements.length; i++) {
				arr.push(this.elements[i].value);
			}
			return arr;
		}
		
		this.keys = function(){
			var arr = new Array();
			for (i = 0; i < this.elements.length; i++) {
				arr.push(this.elements[i].key);
			}
			return arr;
		}
	}
};

var ua=navigator.userAgent.toLowerCase();  
var is=(ua.match(/\b(chrome|opera|safari|msie|firefox)\b/) || ['','mozilla'])[1];  
var r='(?:'+is+'|version)[\\/: ]([\\d.]+)';  
var v=(ua.match(new RegExp(r)) ||[])[1];  
HT.browser = is;

if("msie" == is) HT.isIE = true;
if("chrome" == is) HT.isChrome = true;


var hasAjaxPartStarted = false;
var hasAjaxFullStarted = false;
var ajaxStartObj = null;
var ajaxLoadingDialog = null;

var ajaxLoadingMap = new HT.Map();
var ajaxLoadingIdMap = new HT.Map();
var ajaxLoadingId = null;




(function($){
$win = $(window);

/* -------------------------------------------- JQuery��չ���� ------------------------------------------- */
var uuid = 0;
$.fn.extend({
	/**
	 * ��ȡUUID
	 */
	htUniqueId: function() {
		var result = this.each(function() {
			var temp = "Function: before=" + this.htId;
			if ( !this.htId ) {
				this.htId = "ht-id-" + (++uuid);
			}
			temp += ", after=" + this.htId + "\n html=" + this;
//			alert(temp);
		});
		return result;
	},

	/**
	 * ��һ��ģʽ��Ի���
	 * @options ����
	 */
	openDiv: function(options) {
		$(this).openDivWithType(options, true);
	},

	/**
	 * ��һ����ģʽ��Ի���
	 * @options ����
	 */
	openModelessDiv: function(options) {
		$(this).openDivWithType(options, false);
	},

	/**
	 * ��һ����Ի��򣬴���ģʽ���ģʽЧ��
	 * @options ����
	 */
	openDivWithType: function(options, modalValue) {
		//�ͻ����Զ��ƵĲ���
		var customOp = {
			width: "50%",
			height: "50%",
			// callbacks
			buttons: {},
			beforeClose: null,
			close: null,
			focus: null,
			open: null
		};
		//�ͻ����ɶ��ƵĲ���
		var fixedOp = {
			closeText: "�ر�"
		};

		$div = $(this);

		var op = $.extend(customOp, options);

		//����ٷֱ�
		var widthValue = op["width"];
		var heightValue = op["height"];
		if(HT.isString(widthValue) && widthValue.endsWith("%")) {
			op["width"] = screen.width * (widthValue.cutTail("%").toInt()/100);
		}
		if(HT.isString(heightValue) && heightValue.endsWith("%")) {
			op["height"] = screen.height * (heightValue.cutTail("%").toInt()/100);
		}

		$div.dialog({
			closeText: fixedOp.closeText,
			width: op["width"],
			height: op["height"],
			modal: modalValue,
			buttons: op.buttons,
			beforeClose: op.beforeClose,
			close: op.close,
			focus: op.focus,
			open: op.open
		});
	},

	/**
	 * ������ɫ
	 * Usage:	$("#mainTable").htIntervalColor({
					skipTitle: true
	 * 			});
	 */
	htIntervalColor: function(options) {
		var op = {
			skipTitle: true
		};

		$.extend(op, options || {});

		$(this).each(function() {
			var $table = $(this);

			if(op.skipTitle) {
				//�迼�Ƕ��б���
				var titleLen = $("thead>tr", $table).length;
				if(titleLen % 2 == 0) {
					$table.find("tr:odd:gt(" + (titleLen - 2) + ")").addClass("bg light");
				} else {
					$table.find("tr:even:gt(" + (titleLen - 1) + ")").addClass("bg light");
				}
			} else {
				$table.find("tr:odd").addClass("bg light");
			}
		});
	},

	/**
	 * ��꾭������
	 * Usage:	$("#mainTable").htMouseLight({
					skipTitle: true
	 * 			});
	 */
	htMouseLight: function(options) {
		var op = {
			skipTitle: false
		};

		$.extend(op, options || {});

		var $table = $(this);

		var selector = "tr";
		if(op.skipTitle) {
			selector = "tr:gt(0)";
		}
		$table.on({
			mouseenter: function() {
				$tr = $(this);
				$tr.addClass("bg mouse_light");
			},
			mouseleave: function() {
				$tr = $(this);
				$tr.removeClass("mouse_light");
			}
		}, selector);
	},

	/**
	 * Nav Menuѡ������
	 * Usage:	$("#nav_menu").selectNavMenu();
	 */
	selectNavMenu: function() {
		var ulObj = $(this).children("ul");
		$(this).on("click", "li:has(a[target='main_container'])", function() {
			ulObj.find(">li").removeClass("selected");
			$(this).addClass("selected");
		});
	},

	/**
	 * ȫѡcheckbox
	 */
	checkAll: function($checks) {
		var $checkAll = $(this);
		$checkAll.on("click", function() {
			if($(this).is(":checked")) {
				$checks.each(function() {
					var $check = $(this);
					$check.prop("checked", true);
				});
			} else {
				$checks.each(function() {
					var $check = $(this);
					$check.prop("checked", false);
				});
			}
		});

		$checks.on("click", function(event) {
			var $check = $(this);
			if(!$check.is(":checked")) {
				$checkAll.prop("checked", false);
			} else {
				var isAllChecked = true;
				$checks.each(function() {
					if(!$(this).is(":checked")) {
						isAllChecked = false;
						return false;
					}
				});
				if(isAllChecked) {
					$checkAll.prop("checked", true);
				}
			}
			event.stopPropagation();
		});
	},

	/**
	 * ��ѡcheckbox��ͬʱ���ݵ�ѡ״̬����ȫѡ��checkbox
	 * @param $checkAll ȫѡcheckbox jQuery����
	 * @param $checks ��ȫѡ��checkbox��
	 * @param options: {
	 *					checked: true, //�Ƿ�ѡ��
	 *					multiple: true  //�Ƿ��ѡ�������������ȡ��ѡ��
	 *					}
	 */
	checkSingle: function($checkAll, $checks, options) {
		var op = $.extend({
				checked: true,
				multiple: true
			}, options);

		var $check = $(this);
		if(!op.multiple) {
			$checkAll.prop("checked", false);
			$checks.each(function() {
				$(this).prop("checked", false);
			});
			$check.prop("checked", op.checked);
		} else {
			$check.prop("checked", op.checked);
			if(!op.checked) {
				$checkAll.prop("checked", false);
			} else {
				var isAllChecked = true;
				$checks.each(function() {
					if(!$(this).is(":checked")) {
						isAllChecked = false;
						return false;
					}
				});
				if(isAllChecked) {
					$checkAll.prop("checked", true);
				}
			}
		}
	},

	/**
	 * ʵʱ�༭TD
	 */
	realEdit: function(options) {
		var op = $.extend({
			callback: function() {}
		}, options);
		var $items = $("td[edit]", $(this));

		$items.each(function() {
			var $item = $(this);

			$item.attr("onselectstart", "return false");

			$item.on("dblclick", function(event) {
				var $input = $('<input type="text" class="full" value="' + $item.text() + '" />');
				$item.empty();
				$input.appendTo($item);
				$input.fixInputWidth();
				$input.focus();	
				$input.on("dblclick", function(event) {
					event.stopPropagation();
				});

				$input.on("click", function(event) {
					event.stopPropagation();
				});

				$input.on("blur", function(event) {
					var $input = $(this);
					var value = $input.val();
					$input.replaceWith(value);
					
					op.callback($item.attr("bizId"), $item.attr("edit"), value, $item);
				});

			});

		});
	},

	/**
	 * ��Ԫ��ת��Ϊreadonly��ʽ
	 * Usage:	$("#mainTable").toReadonly();
	 */
	toReadonly: function() {
		$(this).find(":text").replaceWith(function() {
			$(this).parent().addClass("border underline");
			return $(this).val();
		});

		$(this).find("select").replaceWith(function() {
			$(this).parent().addClass("border underline");
			return $(this).children("option:selected").text();
		});

		$(this).find("textarea").parent().css("text-align", "left").end().replaceWith(function() {
			var text = HT.fixString($(this).text());
			text = text == "" ? "��":text;
			return $("<span></span>").addClass("border").wrapInner(text);
		});
	},

	/**
	 * Json DOM����תΪJson�ַ���
	 */
	toJsonString: function(o) {
                if (o == undefined) {
                    return "";
                }
                var r = [];
                if (typeof o == "string") return "\"" + o.replace(/([\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
                if (typeof o == "object") {
                    if (!o.sort) {
                        for (var i in o)
                            r.push("\"" + i + "\":" + fn.Obj2str(o[i]));
                        if (!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
                            r.push("toString:" + o.toString.toString());
                        }
                        r = "{" + r.join() + "}"
                    } else {
                        for (var i = 0; i < o.length; i++)
                            r.push(fn.Obj2str(o[i]))
                        r = "[" + r.join() + "]";
                    }
                    return r;
                }
                return o.toString().replace(/\"\:/g, '":""');
            },
	
	/**
	 * ����loadingͼƬ
	 * Usage:	Ĭ�ϣ� $("#objId").ajaxLoading();
	 *          ȫ���� $("#objId").ajaxLoading({style: "full"});
	 */
	ajaxLoading: function(options) {
		var op = $.extend({
				style: "part",
				image: 'loading_default.gif',
				css: {
					textAlign:'center',
					marginTop:'0px'
				},
				errorCallback: function() {}
			}, $.fn.overlay.defaults, options);
		var $obj = $(this);
		$obj.htUniqueId();
		var htId = $obj[0].htId;
		ajaxLoadingIdMap.put("default", htId);
		if(op.url) {
			ajaxLoadingIdMap.put(op.url, htId);
		}

		if(!ajaxLoadingMap.get(htId)) {
			if("part".equals(op.style)) {
				var valueObj = new Object();
				valueObj.obj = $obj;
				valueObj.style = op.style;
				ajaxLoadingMap.put(htId, valueObj);

				if(!hasAjaxPartStarted) {
					$(document).ajaxSend(function(event, jqxhr, settings) {
						var url = settings.url;
						var id = ajaxLoadingIdMap.get(url);
						if(!id) {
							id = ajaxLoadingIdMap.get("default");
						}

						if("part".equals(ajaxLoadingMap.get(id).style)) {
							ajaxLoadingMap.get(id).obj.html($("<div style='border:0px solid'><img src='" + ROOT + "/images/" + op.image + "' /></div>").css(op.css));
						}
					});

					$(document).ajaxError(function(event, request, settings) {
						op.errorCallback(event, request, settings);
					});

//					$(document).ajaxComplete(function(event, xhr, settings) {
//						setTimeout(function(){
//							var url = settings.url;
//							var id = ajaxLoadingIdMap.get(url);
//							if(!id) {
//								id = ajaxLoadingIdMap.get("default");
//							}
//
//							if("part".equals(ajaxLoadingMap.get(id).style)) {
//								ajaxLoadingMap.get(id).obj.html("");
//							}
//						}, 300);
//
//					});

					hasAjaxPartStarted = true;
				}
			} else if ("full".equals(op.style)) {
				var $loading = $("<div><img src='" + ROOT + "/images/loading_bar_2.gif' />&nbsp;&nbsp;���ڴ������Ժ�......</div>")
					.addClass("loading dialog")
					.css({
						opacity: 1,
						position: 'absolute',
						zIndex: 2000
					});

				var valueObj = new Object();
				valueObj.obj = $obj;
				valueObj.loading = $loading;
				valueObj.style = op.style;
				ajaxLoadingMap.put(htId, valueObj);

				if(!hasAjaxFullStarted) {
					$(document).ajaxSend(function(event, jqxhr, settings) {
						var url = settings.url;
						var id = ajaxLoadingIdMap.get(url);
//						if(!id) {
//							id = ajaxLoadingIdMap.get("default");
//						}
//						log.info("ajaxSend: url=", url, ", id=", id);

						if(!id) {
							return;
						}

						var valueObj = ajaxLoadingMap.get(id);
						var overlay = valueObj.overlay;
						var loading = valueObj.loading;
						var obj = valueObj.obj;

						if("full".equals(valueObj.style)) {
							var $overlay = obj.overlay({
								closeOnClick: false,
								effect: 'fade',
								opacity: 0.3,
								onShow: function($overlay) {
									var $overlayBg = $("div.overlay", $overlay);
									$overlay.append(loading);
									var container = 'body';
									if(HT.isIE) container = 'html';
									var scrollTop = $(container).scrollTop();
									loading.css( {
										top: ($overlayBg.height() - loading.outerHeight()) / 2 + scrollTop,
										left: ($overlayBg.width() - loading.outerWidth()) / 2
									});

									$overlay.show();
									loading.show();

									valueObj.overlay = $overlay;
									valueObj.url = url;
									ajaxLoadingMap.put(id, valueObj);
								}
							});
						}
					});

					$(document).ajaxError(function(event, request, settings) {
						op.errorCallback(event, request, settings);
					});

					$(document).ajaxComplete(function(event, xhr, settings) {
						setTimeout(function(){
							var url = settings.url;
							var id = ajaxLoadingIdMap.get(url);
	//						if(!id) {
	//							id = ajaxLoadingIdMap.get("default");
	//						}

							if(!id) {
								return;
							}

							var valueObj = ajaxLoadingMap.get(id);
							var storedUrl = valueObj.url;
//							log.info("ajaxComplete: url=", url, ", id=", id, ", stored url=", storedUrl);
							var obj = valueObj.obj;
							var overlay = valueObj.overlay;
							var loading = valueObj.loading;

							if("full".equals(valueObj.style)) {
								obj.overlayClose(overlay, {
										effect: 'fade',
										onHide: function() {
											loading.remove();
										}
								})
							}
						}, 300);

					});

					hasAjaxFullStarted = true;
				}
			}
		}
	},

	
	/* 
	 * ����ָ���������Լ�sql��ѯ�����ݵ�Excel
	 * ʹ�÷�������form�н�Ҫ���������ݶ���ΪexcelField������������"||"���ŷָ�����һ�п�������ΪField label��<br>
	 * ���磺
	 * <input type="hidden" name="excelField" value="name||sex||age" />
	 * <input type="hidden" name="excelField" value="roy||male||26" /> 
	 * �ļ���: <input type="hidden" name="fileName" value="test" />
	 * SQL: <input type="hidden" name="excelSql" value="select depart_entity_id, depart_entity_name, parent_id from sys_depart_entity" />
	 */
	exportExcelSql: function() {
		var $frm = $(this);
		var oldAction = $frm.attr("action");
		if(HT.isBlank(oldAction)) {
			oldAction = "";
		}
		var action = ROOT + '/export-excel-sql';
		$frm.attr("action", action);
		$frm.attr("method", "post");
		$frm.submit();
		$frm.attr("action", oldAction);
	},

	/* 
	 * ����ָ�������ݵ�Excel
	 * ʹ�÷�������form�н�Ҫ���������ݶ���ΪexcelField������������"||"���ŷָ�����һ�п�������ΪField label��<br>
	 * ���磺
	 * <input type="hidden" name="excelField" value="name||sex||age" />
	 * <input type="hidden" name="excelField" value="roy||male||26" /> 
	 * �ļ�����<input type="hidden" name="fileName" value="test" />
	 */
	exportExcel: function() {
		var $frm = $(this);
		var oldAction = $frm.attr("action");
		if(HT.isBlank(oldAction)) {
			oldAction = "";
		}
		var action = ROOT + '/export-excel';
		$frm.attr("action", action);
		$frm.attr("method", "post");
		$frm.submit();
		$frm.attr("action", oldAction);
	},

	initUploadBtn: function(postfix) {
		var $info = $(this);
		var spanId = $info.attr("id");
	
		var html = '<input type="file" id="' + spanId + '_file" name="file" style="filter:alpha(opacity=0);position:absolute;opacity:0;width:68px;height:26px;margin-left:-4px;margin-top:-1px" hidefocus onchange="javascript: var fileName=$(\'#' + spanId + '_file\').val().getFileName(); var isLegal = fileName.isLegalPostfix(\'' + postfix + '\'); if(!isLegal) {alert(\'�ļ�ֻ����: ' + postfix + '\'); return false;}' + spanId + '.value=fileName;var $frm = $(this.form); var $item = $(\'#' + spanId + '\');var result = doValidate($frm, $item);checkResult(result.isValid, $frm, result.item, result.errorMsg);"/><button type="button" id="' + spanId + '_btn" class="btn_gentle" onclick="' + spanId + '_file.click()">���</button>&nbsp;&nbsp;';
		$info.before(html);
	}

});


/* -------------------------------------------- JQuery String��չ���� ------------------------------------------- */
$.extend(String.prototype, {
	/**
	 * Json�ַ���תΪJson DOM����
	 */
	toJsonObj: function() {
		var data = this;
		try{
			if ($.type(data) == 'string')
				return eval('(' + data + ')');
			else return data;
		} catch (e){
			return {};
		}
	},
	
	/**
	 * �ж��ַ����Ƿ����
	 */
	equals: function(dest) {
		if(this == dest) {
			return true;   
		}
		return false;   
	},

	/**
	 * �ж��ַ����Ƿ���ȣ����Դ�Сд
	 */
	equalsIgnoreCase: function(dest) {
		if(this.toUpperCase() == this.fixString(dest).toUpperCase()) {
			return true;
		}
		return false;
	},

	/**
	 * ȥ�����ҿհ�
	 */
	trim: function() {
		var result = "";
		if(this != null) {
			result = this.replace(/(^\s+)|(\s+$)/g, "");
		}
		return result;
	},

	/**
	 * �ж��Ƿ���pattern��ͷ
	 */
	startsWith: function(pattern) {
		return this.indexOf(pattern) === 0;
	},

	/**
	 * �ж��Ƿ���pattern��β
	 */
	endsWith: function(pattern) {
		var d = this.length - pattern.length;
		return d >= 0 && this.lastIndexOf(pattern) === d;
	},

	/**
	 * ��ȡ��׺
	 */
	cutSuffix: function() {
		var arr = this.split(".");
		var suffix = "." + arr[arr.length-1];
		return this.substring(0, this.indexOf(suffix));
	},

	/**
	 * ��ȡβ��
	 */
	cutTail: function(suffix) {
		return this.substring(0, this.indexOf(suffix));
	},

	/**
	 * ��·����ȡ�ļ���
	 */
	getFileName: function() {
		var arr = this.split("\\");
		return arr[arr.length-1];
	},
	
	/**
	 * ��ȡ�ļ�����׺
	 */
	getFilePostfix: function() {
		var arr = this.split(".");
		return arr[arr.length-1];
	},

	/**
	 * �ж��ļ����Ƿ���Ϻ�׺
	 */
	isLegalPostfix: function(postfix) {
		var isLegal = false;
		var $fileName = $(this);
		var filePostfix = this.getFilePostfix();

		var postfixes = postfix.split(",");
		for (var i = 0; i < postfixes.length; i++) {
			if(postfixes[i] == filePostfix) {
				isLegal = true;
				break;
			}
		}
		return isLegal;
	},

	/**
	 * �Ƿ�����
	 */
	isPositiveInt: function() {
		return (new RegExp(/^[1-9]\d*$/).test(this));
	},

	/**
	 * �Ƿ�����
	 */
	isInt: function() {
		return (new RegExp(/^\d+$/).test(this));
	},

	/**
	 * �Ƿ�����
	 */
	isNumber: function() {
		return (new RegExp(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/).test(this));
	},

	/**
	 * �ж��ַ����Ƿ�������
	 */
	isChinese: function() {   
	  var str = this.replace(/(^\s*)|(\s*$)/g,'');   
	  if (!(/^[\u4E00-\uFA29]*$/.test(str) && (!/^[\uE7C7-\uE7F3]*$/.test(str)))) {   
		  return false;   
	  }   
	  return true;   
	},

	/**
	 * ת��Ϊint�����Ϸ��ַ���תΪ0
	 */
	toInt: function() {
		if(this.isInt()) {
			return parseInt(this);
		}
		return 0;
	},

	/**
	 * ������Ҫ���ַ�����ȡ�ַ���
	 */
	getCharOfFixedLength: function(charLength) {   
		var tmp = 0;  
		var len = 0;  
		var okLen = 0  
		for(var i=0;i<charLength;i++) {  
			if(this.charCodeAt(i)>255)  
				tmp += 2  
			else  
				len += 1  
			okLen += 1  
			if(tmp + len == charLength) {  
				return (this.substring(0,okLen));  
			}  
			if(tmp + len > charLength) {  
				return (this.substring(0,okLen - 1) + " ");   
			}
		}  
	},

	/**
	 * �õ��ַ�����ͨ��ȫ������ռ2���ַ�
	 */
	getCharLength: function(){  
		var len = 0;  
		for(var i=0;;i++) {  
			if(!this.charCodeAt(i))  
				break;  
			if(this.charCodeAt(i)>255)  
			len += 2;  
			else  
				len +=1;  
		}  
		return len;  
	},

	/**
	 * ת������Ҵ�д
	 */
	toRmbCnUpper: function () {
		// Constants:
		var MAXIMUM_NUMBER = 99999999999.99;
		// Predefine the radix characters and currency symbols for output:
		var CN_ZERO = "��";
		var CN_ONE = "Ҽ";
		var CN_TWO = "��";
		var CN_THREE = "��";
		var CN_FOUR = "��";
		var CN_FIVE = "��";
		var CN_SIX = "½";
		var CN_SEVEN = "��";
		var CN_EIGHT = "��";
		var CN_NINE = "��";
		var CN_TEN = "ʰ";
		var CN_HUNDRED = "��";
		var CN_THOUSAND = "Ǫ";
		var CN_TEN_THOUSAND = "��";
		var CN_HUNDRED_MILLION = "��";
		var CN_SYMBOL = "";
		var CN_DOLLAR = "Ԫ";
		var CN_TEN_CENT = "��";
		var CN_CENT = "��";
		var CN_INTEGER = "��";

		// Variables:
		var integral; // Represent integral part of digit number.
		var decimal; // Represent decimal part of digit number.
		var outputCharacters; // The output result.
		var parts;
		var digits, radices, bigRadices, decimals;
		var zeroCount;
		var i, p, d;
		var quotient, modulus;

		// Validate input string:
		var currencyDigits = this;
		currencyDigits = currencyDigits.toString();
		if (currencyDigits == "") {
			return "";
		}
		if (currencyDigits.match(/[^,\.\d]/) != null) {
			return "���Ҵ���";
		}
		if ((currencyDigits).match(/^((\d{1,3}(,\d{3})*(\.((\d{3},)*\d{1,3}))?)|(\d+(\.\d+)?))$/) == null) {
			return "���Ҵ���";
		}

		// Normalize the format of input digits:
		currencyDigits = currencyDigits.replace(/,/g, ""); // Remove comma delimiters.
		currencyDigits = currencyDigits.replace(/^0+/, ""); // Trim zeros at the beginning.
		// Assert the number is not greater than the maximum number.
		if (Number(currencyDigits) > MAXIMUM_NUMBER) {
			return "�����";
		}

		// Process the coversion from currency digits to characters:
		// Separate integral and decimal parts before processing coversion:
		parts = currencyDigits.split(".");
		if (parts.length > 1) {
			integral = parts[0];
			decimal = parts[1];
			// Cut down redundant decimal digits that are after the second.
			decimal = decimal.substr(0, 2);
		}
		else {
			integral = parts[0];
			decimal = "";
		}
		// Prepare the characters corresponding to the digits:
		digits = new Array(CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE, CN_SIX, CN_SEVEN, CN_EIGHT, CN_NINE);
		radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
		bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
		decimals = new Array(CN_TEN_CENT, CN_CENT);
		// Start processing:
		outputCharacters = "";
		// Process integral part if it is larger than 0:
		if (Number(integral) > 0) {
			zeroCount = 0;
			for (i = 0; i < integral.length; i++) {
				p = integral.length - i - 1;
				d = integral.substr(i, 1);
				quotient = p / 4;
				modulus = p % 4;
				if (d == "0") {
					zeroCount++;
				} else {
					if (zeroCount > 0) {
						outputCharacters += digits[0];
					}
					zeroCount = 0;
					outputCharacters += digits[Number(d)] + radices[modulus];
				}
				if (modulus == 0 && zeroCount < 4) {
					outputCharacters += bigRadices[quotient];
				}
			}
			outputCharacters += CN_DOLLAR;
		}
		// Process decimal part if there is:
		if (decimal != "") {
			for (i = 0; i < decimal.length; i++) {
				d = decimal.substr(i, 1);
				if (d != "0") {
				outputCharacters += digits[Number(d)] + decimals[i];
			}
		}
		}
		// Confirm and return the final output string:
		if (outputCharacters == "") {
			outputCharacters = CN_ZERO + CN_DOLLAR;
		}
		if (decimal == "") {
			outputCharacters += CN_INTEGER;
		}
		outputCharacters = CN_SYMBOL + outputCharacters;
		return outputCharacters;
	}
	
});

})(jQuery);

/*
 * js MD5 ����
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }

/*
 * Perform a simple self-test to see if the VM is working
 */
function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

/*
 * Convert an array of little-endian words to a string
 */
function binl2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
  return str;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}
