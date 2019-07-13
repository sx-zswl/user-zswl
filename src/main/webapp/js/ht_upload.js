/**
 * @author Roy
 * @date 8/4/2013
 */
//全局变量
var UP = {
	height: 87,
	runtimes : 'html5,flash',
	url : ROOT + '/upload',
	max_file_size : '20mb',
	chunk_size : '2mb',
	hideHeader: false,
	unique_names : true,
	multi_selection: true,
	multiple_queues: true,
	savedToDB: true,

	filters_excel : [
		{title : "Excel files", extensions : "xls,xlsx"}
	],

	filters_word : [
		{title : "Word files", extensions : "doc,docx"}
	],

	filters_pdf : [
		{title : "PDF files", extensions : "pdf"}
	],

	filters_office : [
		{title : "Office files", extensions : "doc,docx,xls,xlsx,pdf"}
	],

	filters_image : [
		{title : "Image files", extensions : "jpg,jpeg,gif,png,bmp"}
	],

	filters_zip : [
		{title : "Zip files", extensions : "zip,rar,7z"}
	],

	filters_all : [
		{title : "Supported files", extensions : "doc,docx,xls,xlsx,pdf,jpg,jpeg,gif,png,bmp,zip,rar"}
	],

	// Preview images configuration
	preview : {width : 80, height : 80, quality : 0.9},

	nonsupportMsg: '你的浏览器不支持Flash或HTML5',

	flash_swf_url : ROOT + '/js/plupload/plupload.flash.swf'
};

(function($){
$win = $(window);

/* -------------------------------------------- JQuery扩展函数 ------------------------------------------- */
$.fn.extend({
	/**
	 * Origin upload
	 * Usage:	$("#uploader").originUpload({
	 *				hideHeader:true,
	 *				callback: function(item, status) {
	 *					alert("item.dbId=" + item.dbId + "\nstatus.code=" + status.code + ", status.message=" + status.message);
	 *				},
	 *			    moduleId: op.moduleId,
	 *				bizId: op.bizId
	 *			});
	 */
	originUpload: function(options) {
		var op = $.extend({
				height: UP.height,
				url: UP.url,
				max_file_size: UP.max_file_size,
				chunk_size: UP.chunk_size,
				hideHeader: UP.hideHeader,
				unique_names: UP.unique_names,
				multi_selection: UP.multi_selection,
				multiple_queues: UP.multiple_queues,
				savedToDB: UP.savedToDB,
				filters: UP.filters_all,
//				resize: UP.resize,
				flash_swf_url: UP.flash_swf_url,
				callback: function() {}
			}, options);

		var $uploader = $(this);
		$uploader.empty().text(UP.nonsupportMsg);

		if(op.hideHeader) {
		$("body").prepend('<style type="text/css">.plupload_header {display:none}</style>');
		}

		$("body").prepend('<style type="text/css">.plupload_scroll .plupload_filelist {height:' + op.height + 'px; } li.plupload_droptext {line-height:' + (op.height - 6) + 'px;}</style>');

		if(op.width) {
			$uploader.css({
				width: op.width	
			});
		}

		$uploader.pluploadQueue({
			runtimes : UP.runtimes,
			url : op.url,
			max_file_size : op.max_file_size,
			chunk_size : op.chunk_size,
			unique_names : op.unique_names,
			multi_selection: op.multi_selection,
			multiple_queues: op.multiple_queues,
			filters : op.filters,
//			resize : op.resize,
			flash_swf_url: op.flash_swf_url,
			multipart_params: {
				savedToDB: op.savedToDB,
				moduleId: op.moduleId,
				bizId: op.bizId
			},
			init : {
				FileUploaded: function(up, file, response) {
					response = $.parseJSON( response.response );

					var status = {
						code:null,
						message:null
					};

					var item = response.item;
					item.originalName = file.name;

					if(response.error.code) {
						status.code = response.error.code;
						status.message = response.error.message;
					} else {
						status.code = 0;
						status.message = "success";
					}

					if(op.callback && $.isFunction(op.callback)) {
						op.callback(item, status);
					}
				}
			}
		});
//		$(".plupload_scroll .plupload_filelist", $uploader).css({
//			height: op.height
//		});
	},

	/**
	 * Single upload
	 * Usage:	$("#uploader").singleUpload({
	 *				below: true,
	 *				callback: function(item, status) {
	 *					alert("item.dbId=" + item.dbId + "\nstatus.code=" + status.code + ", status.message=" + status.message);
	 *				},
	 *			    moduleId: 'xx',
	 *				bizId: 'xx'
	 *          });
	 */
	singleUpload: function(options) {
		var op = $.extend({
				below: false,
				url: UP.url,
				max_file_size: UP.max_file_size,
				chunk_size: UP.chunk_size,
				unique_names: UP.unique_names,
				multi_selection: false,
				multiple_queues: false,
				savedToDB: UP.savedToDB,
				filters: UP.filters_all,
				flash_swf_url: UP.flash_swf_url,
				single: false,  //Backend hook, could be used to determin if support multiple attachments or only single
				callback: function() {}
			}, options);

		var $browseBtn = $(this);
		if(!$browseBtn.attr("id")) alert("请定义browse_button的id属性");

		$browseBtn.htUniqueId();
		var htId = $browseBtn[0].htId;

		var floatStr = "left";
		if(op.below) {
			floatStr = "none";
		}
		var $uploadContainer = $browseBtn.css({float:floatStr}).add('<div id="file_list_' + htId + '" style="float:' + floatStr + '; padding:1px 2px 0 2px;margin-left:5px;border:0px solid blue"></div>')
			.wrapAll('<div id="upload_container_' + htId + '"></div>')
			.parent();

		var uploader = new plupload.Uploader({
			runtimes : UP.runtimes,
			browse_button : $browseBtn.attr("id"),
			container: 'upload_container_' + htId,
			url : op.url,
			max_file_size : op.max_file_size,
			chunk_size : op.chunk_size,
			unique_names : op.unique_names,
			multi_selection: op.multi_selection,
			multiple_queues: op.multiple_queues,
			filters : op.filters,
			flash_swf_url: op.flash_swf_url
		});

		uploader.init();

		uploader.bind('FilesAdded', function(up, files) {
			for (var i in files) {
				$('#file_list_' + htId).html(
						  '<div id="' + files[i].id + '" class="font ui">' 
						+   files[i].name + '&nbsp;&nbsp;(' + plupload.formatSize(files[i].size) + ')&nbsp;&nbsp;'
						+   '<div style="display:inline-block;height:13px;margin-bottom:-1px;">'
						+     '<div style="position:relative;left:0;top:2px;width:100px;height:10px;border:1px solid #FF6600"></div>'
						+     '<div id="progress_' + files[i].id + '" style="position:relative;left:1px;top:-9px;width:0;height:10px;margin-bottom:-3px;background-color:#FFAA00"></div>'
						+   '</div>'
						+ '&nbsp;&nbsp;<span id="status_' + files[i].id + '">等待</span>'
						+ '</div>');
			}
			var $status = $("#status_" + files[i].id);
			$status.html($('<a href="#" class="btn_gentle orange small">上传</a>').on("click", function() {uploader.start();}));
		});

		uploader.bind('QueueChanged', function(up, file) {
			if(uploader.files.length > 1) {
				uploader.splice(0, uploader.files.length - 1);
			}
		});
		
		uploader.bind('BeforeUpload', function(up, file) {
			var fileName = file.name.cutSuffix();
			up.settings.multipart_params = $.extend(up.settings.multipart_params, {
				runtime:up.runtime,
				savedToDB:op.savedToDB,
				originalName: fileName,
				moduleId: op.moduleId,
				bizId: op.bizId
			});
		});

		uploader.bind('UploadFile', function(up, file) {
			var $file = $("#" + file.id);
//			$("#status_" + file.id, $file).html($('<a href="#" class="underline">取消</a>').on("click", function() {uploader.stop();}));
		});

		uploader.bind('UploadProgress', function(up, file) {
			var $file = $("#" + file.id);
			$("#progress_" + file.id).css({width:file.percent + 'px'});
//			$("#status_" + file.id, $file).html(file.percent + "%");
		});

		uploader.bind('FileUploaded', function(up, file, response) {
			response = $.parseJSON( response.response );
			var $file = $("#" + file.id);

			var status = {
				code:null,
				message:null
			};

			var item = response.item;
			item.originalName = file.name;

			if(response.error.code) {
				status.code = response.error.code;
				status.message = response.error.message;
				$("#status_" + file.id, $file).html('<span class="font warn">' + response.error.message + '</span>');
			} else {
				status.code = 0;
				status.message = "success";
				$("#status_" + file.id, $file).html('完成');
			}

			if(op.callback && $.isFunction(op.callback)) {
				op.callback(item, status);
			}
		});

		uploader.bind('StateChanged', function(up) {
//			alert(up.state);
		});

		uploader.bind('Error', function(up, error) {
			if(error.file.id) {
				$('#file_list_' + htId).html('<div class="font warn">' + error.message + '</div>');
			} else {
				var $file = $("#" + error.file.id);
				$("#status_" + file.id, $file).html('<span class="font warn">' + error.message + '</span>');
			}
		});

	},

	/**
	 * Image upload
	 * Usage:	$("#uploader").imageUpload({
	 *				single: false,
	 *				preview_div: 'div_id',
	 *				upload_btn: 'upload_photo',
	 *				callback: function(item, status) {
	 *					alert("item.dbId=" + item.dbId + "\nstatus.code=" + status.code + ", status.message=" + status.message);
	 *				},
	 *			    moduleId: 'xx',
	 *				bizId: 'xx',
	 *              resize : {width : 320, height : 240, quality : 90}
	 *          });
	 */
	imageUpload: function(options) {
		var op = $.extend({
				below: false,
				url: UP.url,
				max_file_size: UP.max_file_size,
				chunk_size: UP.chunk_size,
				unique_names: UP.unique_names,
				multi_selection: UP.multi_selection,
				multiple_queues: UP.multiple_queues,
				savedToDB: UP.savedToDB,
				filters: UP.filters_image,
				flash_swf_url: UP.flash_swf_url,
				single: false,  //Backend hook, could be used to determin if support multiple attachments or only single
				callback: function() {}
			}, options);

		var $browseBtn = $(this);
		if(!$browseBtn.attr("id")) { alert("请定义browse_button的id属性"); return false; }
		if(!op.preview_div) { alert("请指定preview_div"); return false; }
		if(!op.upload_btn) { alert("请指定upload_btn"); return false; }

		$browseBtn.htUniqueId();
		var htId = $browseBtn[0].htId;

		var $uploadBtn = $("#" + op.upload_btn);

		var floatStr = "left";
		if(op.below) {
			floatStr = "none";
		}
		var $uploadContainer = $browseBtn
			.wrapAll('<div id="upload_container_' + htId + '" style="display:inline-block"></div>')
			.parent();

		//set the width
		var $fileList = $("#" + op.preview_div);
//		$fileList.width($fileList.parent().width() - $browseBtn.outerWidth() - 11);

		var param = {
			runtimes : UP.runtimes,
			browse_button : $browseBtn.attr("id"),
			container: 'upload_container_' + htId,
			url : op.url,
			max_file_size : op.max_file_size,
			chunk_size : op.chunk_size,
			unique_names : op.unique_names,
			multi_selection: op.multi_selection,
			filters : op.filters,
			flash_swf_url: op.flash_swf_url
		};
		if(op.resize) {
			param = $.extend(param, {resize: op.resize});
		}
		var uploader = new plupload.Uploader(param);

		uploader.init();
		setUploadBtnStatus(uploader, $uploadBtn);
		$uploadBtn.on("click", function() {
			uploader.start();
		});

		uploader.bind('FilesAdded', function(up, files) {
			for (var i in files) {
				var imgContent = '<div id="' + files[i].id + '" class="font ui" style="float:left;width:82px;margin-left:2px;border:0px solid">' 
						+ '  <div id="preview_' + files[i].id + '" style="width:82px;height:82px;display:table-cell;vertical-align:middle;text-align:center;border:1px solid #c0c0c0;">'
						+ '    <div style="display:inline-block;height:13px;margin-top:8px;">'
						+ '      <div style="position:relative;left:0;top:2px;width:72px;height:10px;border:1px solid #FF6600"></div>'
						+ '      <div id="progress_' + files[i].id + '" style="position:relative;left:1px;top:-9px;width:0;height:10px;margin-bottom:-3px;background-color:#FFAA00"></div>'
						+ '    </div>'
						+ '    <div>(' + plupload.formatSize(files[i].size) + ')</div>'
						+ '  </div>'
						+ '  <div id="label_' + files[i].id + '"><span float="overflow" style="display:block;;text-align:center;background-color:#ccc">' + files[i].name + '</span></div>'
						+ '  <div id="status_' + files[i].id + '" style="text-align:center">等待</div>'
						+ '</div>';
				if(op.multi_selection) {
					$fileList.append(imgContent);
				} else {
					$fileList.html(imgContent);
				}
				
				$("#label_" + files[i].id).overflowTip();
				var $file = $("#" + files[i].id);
				$("#status_" + files[i].id, $file).html($('<a href="#" class="underline"><img src="' + ROOT + '/images/icon_remove.png" style="margin-top:2px;margin-left:-3px"/>移除</a>').on("click", {file:files[i]}, function(event) {uploader.removeFile(event.data.file); $("#" + event.data.file.id).remove();setUploadBtnStatus(uploader, $uploadBtn);}));
			}

			setUploadBtnStatus(uploader, $uploadBtn);
		});

		uploader.bind('QueueChanged', function(up, file) {
			if(op.multi_selection) {
			} else {
				if(uploader.files.length > 1) {
					uploader.splice(0, uploader.files.length - 1);
				}
			}
		});

		uploader.bind('BeforeUpload', function(up, file) {
			var fileName = file.name.cutSuffix();
			up.settings.multipart_params = $.extend(up.settings.multipart_params, {
				runtime:up.runtime,
				previewWidth: UP.preview.width,
				previewHeight: UP.preview.height,
				quality: UP.preview.quality,
				savedToDB: op.savedToDB,
				originalName: fileName,
				single: op.single,
				thumb: true,
				moduleId: op.moduleId,
				bizId: op.bizId
			});
		});

		uploader.bind('UploadFile', function(up, file) {
			var $file = $("#" + file.id);
			$("#status_" + file.id, $file).html('上传中...');
		});

		uploader.bind('UploadProgress', function(up, file) {
			var $file = $("#" + file.id);
			$("#progress_" + file.id).css({width:file.percent*(72/100) + 'px'});
//			$("span", $file).html(file.percent + "%");
		});

		uploader.bind('FileUploaded', function(up, file, response) {
			response = $.parseJSON( response.response );
			var $file = $("#" + file.id);
			var $status = $("#status_" + file.id, $file);

			var status = {
				code:null,
				message:null
			};

			var item = response.item;
			if(!HT.isBlank(item)) {
				item.originalName = file.name;
			}

			if(response.error.code) {
				status.code = response.error.code;
				status.message = response.error.message;
				var $file = $("#" + file.id);
				$status.html('<span class="font warn">' + response.error.message + '</span>');
			} else {
				status.code = 0;
				status.message = "success";
				$status.html('<img src="' + ROOT + '/images/icon_done.png" style="margin-top:2px;margin-left:-3px"/>完成');
			}

			if(response.item) {
				$("#preview_" + file.id, $file).html($('<img src="' + ROOT + "/download?disposition=inline&filePath=" + response.item.previewFilePath + '" style="margin:0;"></img>').on("click", function() {
//					var $img = $(this);
//					
//					$("body", parent.document).overlay({
//						closeOnClick: true,
//						effect: 'fade',
//						opacity: 0.3,
//						container: 'body',
//						onShow: function($overlay) {
//							
//						}
//					});
				}));
			}

			setUploadBtnStatus(uploader, $uploadBtn);

			if(op.callback && $.isFunction(op.callback)) {
				op.callback(item, status);
			}
		});

		uploader.bind('StateChanged', function(up) {
//			alert(up.state);
		});

		uploader.bind('Error', function(up, error) {
			var $file = $("#" + error.file.id);
			$("#status_" + error.file.id, $file).html('<span class="font warn">' + error.message + '</span>');
		});

	}

});

function setUploadBtnStatus(uploader, $uploadBtn) {
	$uploadBtn.attr("disabled", "true");
	for(var i in uploader.files) {
		if(uploader.files[i].status != plupload.DONE) {
			$uploadBtn.removeAttr("disabled");
			return;
		}
	}
}

})(jQuery);
