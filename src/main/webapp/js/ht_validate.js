/**
 * form表单需要添加class: validate
 * 默认有submit class的按钮是disabled状态，但如果是预填写了值的表单，需要添加class: prefilled
 * 
 * @author Roy
 * @date 7/18/2013
 */

/**
 * 配置信息
 */
var VC = {

	/****************************************************
	 *	Globals.  Modify these to suit your setup
	 ****************************************************/
	//	Attribute used for the Validator codes
	code: 'rule',

	//	Attribute used for the field display name
	msg: 'msg',

	//	Attribute used for pattern with custom validator type
	pattern: 'pattern',

	//	Flag used for indicate this item is optional, it is put at the end of code or pattern
	opt: 'opt'
}

var defaultDatePattern = "yyyy-MM-dd";
var defaultTimePattern = "hh:mm";

//  Error message
var blankErrorMsg = "请您输入必填项";
var blankErrorMsgPrefix = "请您输入";
var blankErrorMsgSuffix = "";
var dateErrorMsg = "日期不合法";
var timeErrorMsg = "时间不合法";
var invalidMsg = "不合法";
var formatMsg = "格式是";
var emailErrorMsg = "Email不合法，多个请用分号分隔";
var customErrorMsg = "输入格式不合法";
var numberErrorMsg = "请您输入数字";
var numberMinErrorMsg = "数字不得小于";
var numberMaxErrorMsg = "数字不得大于";
var numberErrorMsgPostfix = "不合法，要求输入数字";
var lengthErrorMsg = "输入长度不合法";
var lengthErrorLMsg = "最小长度是";
var lengthErrorRMsg = "最大长度是";
var numberLenErrorMsg = "不合法，要求输入数字，且";
var numberLenErrorMsgPostfix = "不合法，要求输入数字，且";
var numberBoundErrorMsg = "数字大小不合法";
var numberBoundErrorMsgPostfix = "的数字大小不合法";
var decimalErrorMsg = "输入格式不合法，要求小数，且";
var decimalErrorMsgPostfix = "格式不合法，要求小数，且";
var decimalError1Msg = "整数位数是";
var decimalError2Msg = "小数位数是";
var moneyErrorMsg = "货币格式不合法";
var checkboxErrorMsg = "请您至少选择1项";
var selectMErrorMsg = "请您选择";

var errorFrms = new HT.Map();


/**
 * 初始化
 */
$.fn.initValidation = function() {
	$(this).each(function() {
		var $frm = $(this);

		var frmKey = $frm.htUniqueId()[0].htId;  //生成HT ID
		
		var isPreFilled = $frm.hasClass("prefilled"); //是否prefilled
		var isLazy = $frm.hasClass("lazy"); //是否prefilled
		
		if(isLazy) {
			return;
		}

		errorFrms.put(frmKey, new HT.Map());

		var codeSelect = "[" + VC.code + "]";
		var $items = $(codeSelect, $frm);
		$items.htUniqueId();  //生成HT ID

		//Store all items in errorFrms map
		var errorItems = errorFrms.get(frmKey);
		$items.each(function() {
			var $item = $(this);
			setupItem($frm, $item);
		});

		checkSubmitStatus($frm);

		$frm.on("blur.plupload change.plupload keyup.plupload", codeSelect, function(){
			var $item = $(this);
			var result = doValidate($frm, $item);
			checkResult(result.isValid, $frm, result.item, result.errorMsg);
		});

		$frm.on("focus.plupload", codeSelect, function(){
			var $item = $(this);
			hideValidateTip($item);
		});

		$frm.on('keydown.plupload', codeSelect, function (event) {
            var key = event.which;

			//回车
            if (key == 13) { 
//                event.preventDefault();
                var $item = $(this);
				var result = doValidate($frm, $item);
				checkResult(result.isValid, $frm, result.item, result.errorMsg);
            }

        });

		$frm.on('mousedown.plupload', ".submit, :submit", function() {
			var waittingItems = errorItems.values();
			for (i = 0; i < waittingItems.length; i++) {
//				var $item = waittingItems[i];
//				var result = doValidate($frm, $item);
//				checkResult(result.isValid, $frm, result.item, result.errorMsg);
			}
		});

	});
}

/**
 * 将一个区域校验对象进行清理，即停止校验
 * @param $frm 表单jQuery对象
 */
$.fn.clearValidate = function($frm) {
	var $this = $(this);
	var $items;
	if($this.is("[" + VC.code + "]")) {
		$items = $this;
	} else {
		$items = $("[" + VC.code + "]", $this);
	}

	var frmKey = $frm[0].htId;
	var errorItems = errorFrms.get(frmKey);

	$items.each(function() {
		var $item = $(this);
		errorItems.remove($item[0].htId);

		var codeValue = $item.attr(VC.code);
		$item.removeAttr(VC.code);
		$item.attr(VC.code + "_temp", codeValue);

		$item.off("blur.plupload change.plupload keyup.plupload focus.plupload keydown.plupload");
		hideValidateTip($item);
		$item.removeClass("mandatory");
	});

	checkSubmitStatus($frm);
}

/**
 * 恢复一个区域内禁止的校验
 * @param $frm 表单jQuery对象
 */
$.fn.resumeValidate = function($frm) {
	var $this = $(this);
	var $items = $("[" + VC.code + "_temp]", $this);

	$items.each(function() {
		var $item = $(this);

		var codeValue = $item.attr(VC.code + "_temp");
		$item.removeAttr(VC.code + "_temp");
		$item.attr(VC.code, codeValue);
	});

	$this.setupValidate($frm);
}

/**
 * 将一个区域重新初始化校验
 * @param $frm 表单jQuery对象
 */
$.fn.setupValidate = function($frm) {
	var $this = $(this);
	var $items;
	if($this.is("[" + VC.code + "]")) {
		$items = $this;
	} else {
		$items = $("[" + VC.code + "]", $this);
	}
	$items.htUniqueId();  //生成HT ID

	$items.each(function() {
		var $item = $(this);
		setupItem($frm, $item);
	});

	checkSubmitStatus($frm);

	$items.on("blur.plupload change.plupload keyup.plupload", function(){
		var $item = $(this);
		var result = doValidate($frm, $item);
		checkResult(result.isValid, $frm, result.item, result.errorMsg);
	});
	
	$items.on("focus.plupload", function(){
		var $item = $(this);
		hideValidateTip($item);
	});

	$items.on('keydown.plupload', function (event) {
		var key = event.which;

		//回车
		if (key == 13) { 
//                event.preventDefault();
			var $item = $(this);
			var result = doValidate($frm, $item);
			checkResult(result.isValid, $frm, result.item, result.errorMsg);
		}

	});

}

/**
 * 将被校验对象添加到框架管理
 * @param $frm 表单jQuery对象
 * @param errorMsg 错误提示消息
 * @param callback 回调函数，此函数必须返回true或false
 */
$.fn.addValidate = function($frm, options, callback) {
	var op = $.extend({ isMandatory: false, errorMsg: customErrorMsg }, options);
	var $item = $(this);
	$item.htUniqueId();  //生成HT ID
	
	var isPreFilled = $frm.hasClass("prefilled"); //是否prefilled
	var isLazy = $frm.hasClass("lazy"); //是否prefilled

	if(op.isMandatory) {
		addError($frm, $item);
		$item.addClass("mandatory");
		
		if(isPreFilled && !callback()) {
			addError($frm, $item);
			$item.addClass("error");
		}
	} else {
		if(!HT.isBlank($item.val()) && !callback()) {
			addError($frm, $item);
			$item.addClass("error");
		}
	}

	$item.on("blur.plupload change.plupload keyup.plupload", function(){
		var isValid = (!op.isMandatory && HT.isBlank($item.val())) ? true : callback();
		checkResult(isValid, $frm, $item, op.errorMsg);
	});
	
	$item.on("focus.plupload", function(){
		var $item = $(this);
		hideValidateTip($item);
	});

	$item.on('keydown.plupload', function (event) {
            var key = event.which;

			//回车
            if (key == 13) { 
                var isValid = (!op.isMandatory && HT.isBlank($item.val())) ? true : callback();
				checkResult(isValid, $frm, $item, op.errorMsg);
            }
        });
}

function setupItem($frm, $item) {
	//set * for mandatory item
	var code = $item.attr(VC.code);
	var params = code.split("|");
	//Optional
	var isOptional = false;
	if (params[params.length-1] == VC.opt) {
		isOptional = true;
	}

	if((params[0] == 'blank') || (params[0] != 'blank' && !isOptional)) {
		var key = $item[0].htId;
		
		var frmKey = $frm[0].htId;
		var errorItems = errorFrms.get(frmKey);

		//prefilled
		var isPreFilled = $frm.hasClass("prefilled"); //是否prefilled
		if(isPreFilled) {
			var result = doValidate($frm, $item);
			if(!result.isValid) {
				errorItems.put(key, $item);
				$item.addClass("error");
			}
		} else {
			errorItems.put(key, $item);
		}
		
//		$item.after("<span class='font warn bold'>*</span>")
		$item.addClass("mandatory");
	}
}

/**
 * 校验处理
 */
function doValidate($frm, $item) {
	var frmKey = $frm[0].htId;
	var code = $item.attr(VC.code);
	var msg = $item.attr(VC.msg);
	var value = $item.val();

	var isOptional = false;

	var idForDate;
	var idForTime;
	var dateTime = new Array();
	var time = new Array();
	var sequence = -1;

	//code属性以|分隔
	var params = code.split("|");
	//Optional
	if (params[params.length-1] == VC.opt) {
		isOptional = true;
		params.pop();
	}

	var result = {isValid:false};
	switch (params[0]) {
		case 'lengthlr' : result = validateLengthLR($item, params[1], params[2], {frmKey: frmKey, opt: isOptional}); break;
		case 'lengthl'  : result = validateLengthL($item, params[1], {frmKey: frmKey, opt: isOptional}); break;
		case 'lengthr'  : result = validateLengthR($item, params[1], {frmKey: frmKey, opt: isOptional}); break;
		case 'number'   : 
			if(params.length == 1) {
				result = validateNumber($item, {frmKey: frmKey, opt: isOptional}); 
			} else if(params.length == 3) {
				result = validateNumberMinMax($item, params[1], params[2], {frmKey: frmKey, opt: isOptional});
			} else {
				alert("编程错误：" + code + "定义格式不正确");
				return false;
			}
			break;
		case 'numberlr' : result = validateNumberLR($item, params[1], params[2], {frmKey: frmKey, opt: isOptional}); break;
		case 'numberl'  : result = validateNumberL($item, params[1], {frmKey: frmKey, opt: isOptional}); break;
		case 'numberr'  : result = validateNumberR($item, params[1], {frmKey: frmKey, opt: isOptional}); break;
		case 'decimal'  : result = validateDecimal($item, params[1], params[2], {frmKey: frmKey, opt: isOptional}); break;
		case 'money'    : result = validateMoney($item, {frmKey: frmKey, opt: isOptional}); break;
		case 'email'    : result = validateEmail($item, {frmKey: frmKey, opt: isOptional}); break;
		case 'select'   : result = validateSelect($item, {frmKey: frmKey, opt: isOptional}); break;
		case 'blank'    : result = validateBlank($item, {frmKey: frmKey}); break;
		case 'date':
			var datePattern = defaultDatePattern;
			if(!HT.isBlank($item.attr("pattern"))) {
				datePattern = $item.attr("pattern");
			}
			var dateArr = parseDate($item.val(), datePattern);

			if(dateArr) {
				sequence++;
				dateTime[sequence] = new Object();
				dateTime[sequence][VC.msg] = $item.attr(VC.msg);
				dateTime[sequence].day = dateArr['day']; 
				dateTime[sequence].month = dateArr['month']; 
				dateTime[sequence].year = dateArr['year']; 
				dateTime[sequence].dayName = $item;
				dateTime[sequence].monthName = $item;
				dateTime[sequence].yearName = $item;
			}

			result = validateDate($item, dateTime[sequence], {frmKey: frmKey, opt: isOptional});
			break;
		case 'time':
			var timePattern = defaultTimePattern;
			if(!HT.isBlank($item.attr("pattern"))) {
				timePattern = $item.attr("pattern");
			}
			var timeArr = parseTime($item.val(), timePattern);

			if(timeArr) {
				sequence++;
				time[sequence] = new Object();
				time[sequence][VC.msg] = $item.attr(VC.msg);
				time[sequence].hour = timeArr['hour']; 
				time[sequence].minute = timeArr['minute']; 
				time[sequence].hourName = $item;
				time[sequence].minuteName = $item;
			}

			result = validateTime($item, time[sequence], {frmKey: frmKey, opt: isOptional});
			break;
		case 'custom':
			var refLen = params.length - 1;
			var pattern = params[1];
			if(isOptional) {
				refLen--;
			}
			if(refLen > 1) {
				for (var k = 1; k < refLen; k++) {
					pattern += "|" + params[k + 1];
				}
			}
			result = validateCustom($item, {frmKey: frmKey, opt: isOptional, pattern: pattern});
			break;
	}
	
	return result;
}


//****************** The method is used for checking the blank. **************************//   
function validateBlank($item, options) {
	var op = $.extend({ opt: false }, options);
	var value = $item.val();
	var regex = new RegExp(/\S/);

	if(regex.test(value)) {
		return {isValid:true, item:$item};
	}

	var msg = $item.attr(VC.msg);
	var errorMsg = blankErrorMsg;
	if(!HT.isBlank(msg)) {
		errorMsg = blankErrorMsgPrefix + msg + blankErrorMsgSuffix;
	}

	return {isValid:false, item:$item, errorMsg:errorMsg};
}

// ****************** The method is used for checking the Date format. **************************//
function validateDate($item, dateTime, options) {
	var op = $.extend({ opt: false }, options);

	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

    var year = trim(dateTime.year);
    var month = trim(dateTime.month);
    var day = trim(dateTime.day);
    var hour = trim(dateTime.hour);
    var minute = trim(dateTime.minute);
    //var message = dateTime.message;
    //var message = "The format of " + dateTime.displayName + " is invalid!";

	var datePattern = defaultDatePattern;
	if(!HT.isBlank($item.attr("pattern"))) {
		datePattern = $item.attr("pattern");
	}
    var errorMsg = dateErrorMsg + "，" + formatMsg + datePattern;
    if(dateTime[VC.msg]) {
		errorMsg = dateTime[VC.msg] + invalidMsg + "，" + formatMsg + datePattern;
    }

//	var errorItems = errorFrms.get(op.frmKey);
//	errorItems.put(dateTime.yearName.htId, dateTime.yearName);
//	errorItems.put(dateTime.monthName.htId, dateTime.monthName);
//	errorItems.put(dateTime.dayName.htId, dateTime.dayName);
//
//    if(hour!=null && minute !=null) {
//		errorItems.put(dateTime.hourName.htId, dateTime.hourName);
//		errorItems.put(dateTime.minuteName.htId, dateTime.minuteName);
//    }

    var regex = new RegExp(/\S/);    
    if(regex.test(day)|| regex.test(month) || regex.test(year)|| ((hour!=null && minute !=null) && (regex.test(hour)||regex.test(minute))) ) {
        if(hour!=null && minute !=null) 
            if(!commonValidateNumberR(hour,0,23) || ! commonValidateNumberR(minute,0,59)) {
				return {isValid:false, item:$item, errorMsg:errorMsg};
			}
        var yearField = year;

        var monthField;
        if(month.charAt(0)=='0')
            monthField = month.charAt(1);
        else
            monthField = month;

		var dayField;
        if(day.charAt(0)=='0')
            dayField = day.charAt(1);
        else
            dayField = day;
 
         var regExp = new RegExp(/^\-?[0-9]+$/);
         if(!regExp.test(dayField)|| !regExp.test(monthField) || !regExp.test(yearField)) {
			return {isValid:false, item:$item, errorMsg:errorMsg};
		 }

         var tempDateValue = yearField + "/" + monthField + "/" + dayField;
         if(tempDateValue.length<6||tempDateValue.length>10) { //validate the length. The method is rarely used.
			return {isValid:false, item:$item, errorMsg:errorMsg};
		 }

        var tempDate = new Date(tempDateValue);
        if (isNaN(tempDate)) { //validate the scope. When user input over scope data such as 99/99/2000,this error message will be promoted.
			return {isValid:false, item:$item, errorMsg:errorMsg};
		 }
         
         if (parseInt(month) <10 && month.charAt(0)!='0') {
             month = "0"+month;
         }
         if (parseInt(day) <10 && day.charAt(0)!='0') {
             day = "0"+day;
         }
        if (parseInt(year+month+day) >= 19000101 && parseInt(year+month+day) <= 99991231 &&
            ((tempDate.getFullYear()).toString()==yearField) && 
            (tempDate.getMonth()==parseInt(monthField)-1) && 
            (tempDate.getDate()==parseInt(dayField)))
            return {isValid:true, item:$item};
        else{
			return {isValid:false, item:$item, errorMsg:errorMsg};
		}
	}
    
    return {isValid:true, item:$item};
}

function validateTime($item, time, options) {
	var op = $.extend({ opt: false }, options);

	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

    var hour = trim(time.hour);
    var minute = trim(time.minute);

	var timePattern = defaultTimePattern;
    var errorMsg = timeErrorMsg + "，" + formatMsg + timePattern;
    if(time[VC.msg]) {
		errorMsg = time[VC.msg] + invalidMsg + "，" + formatMsg + timePattern;
    }

	if(!commonValidateNumberR(hour,0,23) || ! commonValidateNumberR(minute,0,59)) {
		return {isValid:false, item:$item, errorMsg:errorMsg};
	} 
	
	return {isValid:true, item:$item};
}

// ****************** The method is used for checking the specific length. ********************//
function validateLengthLR($item, lb, ub, options) {
	var op = $.extend({ opt: false }, options);

	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

	if(!lb.isInt()) {
		alert("编程错误：" + lb + "不是整数");
		return {isValid:false};
	}

	if(!ub.isInt()) {
		alert("编程错误：" + ub + "不是整数");
		return {isValid:false};
	}

    if (($item.val().getCharLength() < parseInt(lb)) || ($item.val().getCharLength() > parseInt(ub))) {
		var msg = $item.attr(VC.msg);
		var errorMsg = lengthErrorMsg + ", " + lengthErrorLMsg + lb + "，" + lengthErrorRMsg + ub;
        if(!HT.isBlank(msg)) {
			errorMsg = msg + lengthErrorMsg;
		}
		return {isValid:false, item:$item, errorMsg:errorMsg};
    }
    return {isValid:true, item:$item};
}

// ********************* The method is  used for checking the specific length. ******************//
 function validateLengthL($item, len, options) {
	var op = $.extend({ opt: false }, options);

	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

	if(!len.isInt()) {
		alert("编程错误：" + len + "不是整数");
		return {isValid:false};
	}

    if (($item.val().getCharLength() < parseInt(len))) {
		var msg = $item.attr(VC.msg);
		var errorMsg = lengthErrorMsg + ", " + lengthErrorLMsg + len;
		if(!HT.isBlank(msg)) {
			errorMsg = msg + lengthErrorMsg;
		}
		return {isValid:false, item:$item, errorMsg:errorMsg};
    }
    return {isValid:true, item:$item};
}

// ************************ The method is  used for checking the specific length.******************//
function validateLengthR($item, len, options) {
	var op = $.extend({ opt: false }, options);

	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

	if(!len.isInt()) {
		alert("编程错误：" + len + "不是整数");
		return {isValid:false};
	}

    if (($item.val().getCharLength() > parseInt(len))) {
		var msg = $item.attr(VC.msg);
		var errorMsg = lengthErrorMsg + ", " + lengthErrorRMsg + len;;
		if(!HT.isBlank(msg)) {
			errorMsg = msg + lengthErrorMsg;
		}
		return {isValid:false, item:$item, errorMsg:errorMsg};
	}
    return {isValid:true, item:$item};
}

// ********************* The method is used for checking the number. *************************** //
function validateNumber($item, options) {
	var op = $.extend({ opt: false }, options);
	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

    var numReg = "^-?[0-9]+$";
    var regex = new RegExp(numReg);
    if (!regex.test($item.val())) {
		var msg = $item.attr(VC.msg);
		var errorMsg = numberErrorMsg;
		if(!HT.isBlank(msg)) {
			errorMsg = msg + numberErrorMsgPostfix;
		}
		return {isValid:false, item:$item, errorMsg:errorMsg};
    }
    return {isValid:true, item:$item};
}

function validateNumberMinMax($item, lb, ub, options) {
	var op = $.extend({ opt: false }, options);
	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

	var msg = $item.attr(VC.msg);
	var errorMsg = numberErrorMsg;
	if(!HT.isBlank(msg)) {
		errorMsg = msg + numberErrorMsgPostfix;
	}
	
	var numReg = "^-?[0-9]+$";
    var regex = new RegExp(numReg);
	if (regex.test($item.val())) {
		var num = parseInt($item.val());

		if(lb == "*") {
			if(num <= ub) {
				return {isValid:true, item:$item};
			} else {
				errorMsg = numberMaxErrorMsg + ub;
			}
		} else if(ub == "*") {
			if(num >= lb) {
				return {isValid:true, item:$item};
			} else {
				errorMsg = numberMinErrorMsg + lb;
			}
		} else {
			if(num >= lb && num <= ub) {
				return {isValid:true, item:$item};
			} else {
				errorMsg = numberMinErrorMsg + lb + "，" + numberMaxErrorMsg + ub;
			}
		}
	}

	return {isValid:false, item:$item, errorMsg:errorMsg};
}

// ******************** The methos is used for checking the specific length number. ************************** //
function validateNumberLR($item, lb, ub, options) {
	var op = $.extend({ opt: false }, options);

	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

	if(!lb.isInt()) {
		alert("编程错误：" + lb + "不是整数");
		return {isValid:false};
	}

	if(!ub.isInt()) {
		alert("编程错误：" + ub + "不是整数");
		return {isValid:false};
	}

    numReg = "^[0-9]{" + parseInt(lb) + "," + parseInt(ub) + "}$";
    var regex = new RegExp(numReg);
    if (!regex.test($item.val())) {
		var msg = $item.attr(VC.msg);
		var errorMsg = numberLenErrorMsg + lengthErrorLMsg + lb + "，" + lengthErrorRMsg + ub;
		if(!HT.isBlank(msg)) {
			errorMsg = msg + numberLenErrorMsgPostfix + lengthErrorLMsg + lb + "，" + lengthErrorRMsg + ub;
		}
		return {isValid:false, item:$item, errorMsg:errorMsg};
    }
    return {isValid:true, item:$item};
}

// ******************** The methos is used for checking the specific length number. ************************** //
function validateNumberL($item, len, options) {
	var op = $.extend({ opt: false }, options);

	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

	if(!len.isInt()) {
		alert("编程错误：" + len + "不是整数");
		return {isValid:false};
	}

    numReg = "^[0-9]{"+parseInt(len)+",}$";
    var regex = new RegExp(numReg);
    if (!regex.test($item.val())) {
		var msg = $item.attr(VC.msg);
		var errorMsg = numberLenErrorMsg + lengthErrorLMsg + len;
		if(!HT.isBlank(msg)) {
			errorMsg = msg + numberLenErrorMsgPostfix + lengthErrorLMsg + len;
		}
		return {isValid:false, item:$item, errorMsg:errorMsg};
    }
    return {isValid:true, item:$item};
}

// *********************** The method is used for checking the specific scope number. *************************************************** //
function validateNumberR($item, len, options) {
	var op = $.extend({ opt: false }, options);

	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

	if(!len.isInt()) {
		alert("编程错误：" + len + "不是整数");
		return {isValid:false};
	}

    numReg = "^[0-9]{1,"+parseInt(len) + "}$";
    var regex = new RegExp(numReg);
    if (!regex.test($item.val())) {
		var msg = $item.attr(VC.msg);
		var errorMsg = numberLenErrorMsg + lengthErrorRMsg + len;
		if(!HT.isBlank(msg)) {
			errorMsg = msg + numberLenErrorMsgPostfix + lengthErrorRMsg + len;
		}
		return {isValid:false, item:$item, errorMsg:errorMsg};
    }
    return {isValid:true, item:$item};
}

//******************** The method is used to check the decimal. ************************************************//
function validateDecimal($item, lval, rval, options) {
	var op = $.extend({ opt: false }, options);

	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

	(lval == '*')? lval = '*': lval = parseInt(lval);
	(rval == '*')? rval = '*': rval = parseInt(rval);
	var msgDetail;
	var decReg = "";
	if (lval == 0) {
		decReg = "^\\.[0-9]{"+rval+"}$";
	}
    else if (lval == '*') {
		decReg = "^[0-9]"+lval+"\\.[0-9]{"+rval+"}$";
	}
    else if (rval == '*') {
		decReg = "^[0-9]{"+lval+"}\\.[0-9]"+rval+"$";
	}
    else {
		decReg = "^[0-9]{"+lval+"}\\.[0-9]{"+rval+"}$";
	}
    var regex = new RegExp(decReg);
    if (!regex.test($item.val())) {
		var msg = $item.attr(VC.msg);
		var errorMsg = decimalErrorMsg + decimalError1Msg + lval + "，" + decimalError2Msg + rval;
		if(!HT.isBlank(msg)) {
            errorMsg = msg + decimalErrorMsgPostfix + decimalError1Msg + lval + "，" + decimalError2Msg + rval;
		}
		return {isValid:false, item:$item, errorMsg:errorMsg};
    }
    return {isValid:true, item:$item};
}

// ********************* The method is used for checking money  *************************** //
function validateMoney($item, options) {
	var op = $.extend({ opt: false }, options);

	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

    var  decReg = "^[0-9]+\\.[0-9]{0,2}$"
    var regex = new RegExp(decReg);
    var formValue = $item.val();
    if (formValue.indexOf(".") == -1) {
         formValue = formValue + ".";
     }
     if (!regex.test(formValue)) {
		var msg = $item.attr(VC.msg);
        var errorMsg = moneyErrorMsg;
        if(!HT.isBlank(msg)) {
			errorMsg = msg + moneyErrorMsg;
		}
		return {isValid:false, item:$item, errorMsg:errorMsg};
    }
    return {isValid:true, item:$item};
}

// ************************* The method is used for checking Email pattern. ******************************* //
function validateEmail($item, options) {
	var op = $.extend({ opt: false }, options);

	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

	var emailStr = $item.val();
	var emailReg1 = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/; // not valid
	var emailReg2 = /^[^;]+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,6}|[0-9]{1,3})(\]?)(;[^;]+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,6}|[0-9]{1,3})(\]?))*;?$/; // valid

    if (!emailReg2.test(emailStr)) {// if syntax is valid
		var msg = $item.attr(VC.msg);
		var errorMsg = emailErrorMsg;
		if(!HT.isBlank(msg)) {
			errorMsg = emailErrorMsg;
		}
		return {isValid:false, item:$item, errorMsg:errorMsg};
    }
    return {isValid:true, item:$item};
}

// ********************* The method is used for checking self-defined pattern. *************************** //  
function validateCustom($item, options) {
	var op = $.extend({ opt: false }, options);

	if (op.opt && HT.isBlank($item.val())) { 
		return {isValid:true, item:$item};
	}

	var blankResult = validateBlank($item, options);
	if(!blankResult.isValid) {
		return blankResult;
	}

	var regex = new RegExp(op.pattern);
	if(regex.test($item.val())) {
		return {isValid:true, item:$item};
	}

	var msg = $item.attr(VC.msg);
	var errorMsg = customErrorMsg;
	if(!HT.isBlank(msg)) {
		errorMsg = msg + customErrorMsg;
	}
	return {isValid:false, item:$item, errorMsg:errorMsg};
}

// ********************* The method is used for checking the select. *************************** //
function validateSelect($item, options) {
	var op = $.extend({ opt: false }, options);

	var msg = $item.attr(VC.msg);
	var errorMsg = selectMErrorMsg;
	if(!HT.isBlank(msg)) {
		errorMsg = selectMErrorMsg + msg;
	}

	if ($item.val() == -1) {
		return {isValid:false, item:$item, errorMsg:errorMsg};
	}
	return {isValid:true, item:$item};
}

function parseDate(dateStr, pattern) {
	//date string is empty
	var emptyRegExp = new RegExp("^\\s*$");
	if(dateStr == null || emptyRegExp.test(dateStr)) {
		return false;
	}

	pattern = pattern.toLowerCase();

	//date pattern is not correct format
	if(pattern.indexOf("yyyy") == -1 || pattern.indexOf("mm") == -1 || pattern.indexOf("dd") == -1) {
		return virtualErrorDate();
	}
  
	var dateArr = new Array();

	var regPattern = pattern.replace("yyyy", "(\\d{4})");
	regPattern = regPattern.replace("mm", "\\d{1,2}");
	regPattern = regPattern.replace("dd", "\\d{1,2}");
	regPattern = "^" + regPattern + "$";
	var regExp = new RegExp(regPattern);
	if(!regExp.test(dateStr)) {
		return virtualErrorDate();
	}

	regExp.exec(dateStr);
	dateArr['year'] = RegExp.$1;

	regPattern = pattern.replace("yyyy", "\\d{4}");
	regPattern = regPattern.replace("mm", "(\\d{1,2})");
	regPattern = regPattern.replace("dd", "\\d{1,2}");
	regPattern = "^" + regPattern + "$";
	regExp = new RegExp(regPattern);
	regExp.exec(dateStr);
	dateArr['month'] = RegExp.$1;

	regPattern = pattern.replace("yyyy", "\\d{4}");
	regPattern = regPattern.replace("mm", "\\d{1,2}");
	regPattern = regPattern.replace("dd", "(\\d{1,2})");
	regPattern = "^" + regPattern + "$";
	regExp = new RegExp(regPattern);
	regExp.exec(dateStr);
	dateArr['day'] = RegExp.$1;

	return dateArr;
}

function parseTime(timeStr, pattern) {
	//date string is empty
	var emptyRegExp = new RegExp("^\\s*$");
	if(timeStr == null || emptyRegExp.test(timeStr)) {
		return false;
	}

	pattern = pattern.toLowerCase();

	//date pattern is not correct format
	if(pattern.indexOf("hh") == -1 || pattern.indexOf("mm") == -1) {
		return virtualErrorTime();
	}

	var timeArr = new Array();

	var regPattern = pattern.replace("hh", "(\\d{1,2})");
	regPattern = regPattern.replace("mm", "\\d{1,2}");
	regPattern = "^" + regPattern + "$";

	var regExp = new RegExp(regPattern);
	if(!regExp.test(timeStr)) {
		return virtualErrorTime();
	}

	regExp.exec(timeStr);
	timeArr['hour'] = RegExp.$1;

	regPattern = pattern.replace("hh", "\\d{1,2}");
	regPattern = regPattern.replace("mm", "(\\d{1,2})");
	regPattern = "^" + regPattern + "$";
	regExp = new RegExp(regPattern);
	regExp.exec(timeStr);
	timeArr['minute'] = RegExp.$1;

	return timeArr;
}

function virtualErrorDate() {
	var dateArr = new Array();
	dateArr['year'] = "0000";
	dateArr['month'] = "00";
	dateArr['day'] = "00";
	return dateArr;
}

function virtualErrorTime() {
	var timeArr = new Array();
	timeArr['hour'] = "24";
	timeArr['minute'] = "60";
	return timeArr;
}

function virtualEmptyDate() {
	var dateArr = new Array();
	dateArr['year'] = "";
	dateArr['month'] = "";
	dateArr['day'] = "";
	return dateArr;
}

function commonValidateNumberR(field,lb,ub) {
	var numReg = "^\-?[0-9]+$"
	var regex = new RegExp(numReg);
	if (regex.test(field)) {
		var num = parseInt(field);
		if(num >= lb && num <= ub) {
			return true;
		}
	}
	return false;
}

function trim(str){
    if (str == null){return null;}
    for(var i=0;str.charAt(i)==" ";i++);
    var str = str.substring(i,str.length);

    for(var i=str.length-1;str.charAt(i)==" ";i--);
    return str.substring(0,i+1);
}

/*
 * 自定义校验时也可使用
 * @param $frm 表单jQuery对象
 * @param $item 被校验jQuery对象
 */
function addError($frm, $item) {
	var frmKey = $frm[0].htId;
	var errorItems = errorFrms.get(frmKey);
	var key = $item[0].htId;
	errorItems.put(key, $item);
}

/*
 * 自定义校验时也可使用
 * @param isValid true或false, 校验结果
 * @param $frm 表单jQuery对象
 * @param $item 被校验jQuery对象
 * @param errorMsg 错误提示消息
 */
function checkResult(isValid, $frm, $item, errorMsg) {
	if(isValid) {
		processSuccess($frm, $item);
	} else {
		processError($frm, $item, errorMsg);
	}

	checkSubmitStatus($frm);
}

function processError($frm, $item, errorMsg) {
	var frmKey = $frm[0].htId;
	if(HT.isBlank($item)) {
		return;
	}
	
	//highlight item
	$item.addClass("error");

	var itemH = $item.outerHeight();
	var itemW = $item.outerWidth();
	var pos = $item.offset();
	var itemL = pos.left;
	var itemT = pos.top;
	
	var errorItems = errorFrms.get(frmKey);
	var key = $item[0].htId;
//	alert(errorItems.keys().join() + ", removed key: " + key + ", uniqueId: " + $item[0].htId + ", html: " + $item.get(0).outerHTML);

//	itemL += itemW;
	itemT += itemH + 1;

	var centerL;

	//创建container，每一个item一个container，根据name区分，务必保证name唯一
	var $tip = $("#valid_tip");
	if(HT.isBlank($tip)) {
		$('<div id="valid_tip" class="float_toast_box font bold"></div>').appendTo($("body"));
		$tip = $("#valid_tip");
	}

	$tip.empty().append(errorMsg);
	centerL = ($(window).width() - $tip.outerWidth()) / 2;
	var container = 'body';
	if(HT.isIE) container = 'html';
	var scrollTop = $(container).scrollTop();
	$tip.css({
		position: "absolute",
		left: centerL,
		zIndex: 999
	}).stop().stop().stop().animate({opacity: 1.0, bottom: (36-scrollTop)}, 0, function() {$tip.show()}).animate({opacity: 1.0}, 3000).animate({opacity: 0}, 1000, function() {$tip.hide();});

	var errorItems = errorFrms.get(frmKey);
	var key = $item[0].htId;
	if(!errorItems.containsKey(key)) {
		errorItems.put(key, $item);
	}
}

function processSuccess($frm, $item) {
	var frmKey = $frm[0].htId;
	if(HT.isBlank($item)) {
		return;
	}

	hideValidateTip($item);
	
	var errorItems = errorFrms.get(frmKey);
	var key = $item[0].htId;
//	alert(errorItems.keys().join() + ", removed key: " + key + ", uniqueId:" + $item[0].htId + ", html: " + $item.get(0).outerHTML);
	errorItems.remove(key);
}

function hideValidateTip($item) {
	$item.removeClass("error");

	var $tip = $("#valid_tip");
//	$tip.hide();
}

function checkSubmitStatus($frm) {
	var frmKey = $frm[0].htId;
	var errorItems = errorFrms.get(frmKey);
	if(HT.isBlank(errorItems)) {
		alert("编程错误：找不到表单uniqueID: " + frmKey);
		return false;
	}
	if(errorItems.size() > 0) {
		//Disable submit button
		$(".submit, :submit", $frm).attr("disabled", "true");
	} else {
		//Enable submit button
		$(".submit, :submit", $frm).removeAttr("disabled");
	}
}


