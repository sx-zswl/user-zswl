/**
 * @author Roy
 * @date 4/2/2013
 */
(function($){
	$.fn.extend({
		/**
		 * 针对所有页面的theme处理
		 */
		theme: function() {
			var themePath =  ROOT + "/css/themes/#theme#/main.css";

			var setTheme = function(themeName){
				//本页面
				$("head").find("link[href*='themes'][href*='main.css']").attr("href", themePath.replace("#theme#", themeName));
			}

			if ($.isFunction($.cookie)){
				var themeName = $.cookie("ht_theme");
				if (themeName) {
					setTheme(themeName);
				}
			}
		},

		/**
		 * 针对top进行theme处理
		 */
		themeTop: function() {
			var themePath = ROOT + "/css/themes/#theme#/main.css";

			var htThemeLi = $("#theme_list > li[theme]");

			var setTheme = function(themeName){
				//本页面
				$("head").find("link[href*='themes'][href*='main.css']").attr("href", themePath.replace("#theme#", themeName));

				//子iframe
				var sonFrame = document.getElementById("main_container");
				if(sonFrame) {
					$("head", sonFrame.contentWindow.document).find("link[href*='themes'][href*='main.css']").attr("href", themePath.replace("#theme#", themeName));
					//孙iframe
					var gransonFrame = sonFrame.contentWindow.document.getElementById("container");
					if(gransonFrame) {
						var gransonHead = $("head", gransonFrame.contentWindow.document).find("link[href*='themes'][href*='main.css']").attr("href", themePath.replace("#theme#", themeName));
					}
				}

				setThemeBtn(themeName);

				if ($.isFunction($.cookie)) {
					//Cookie永不过期
					$.cookie("ht_theme", themeName, {expires: 10000, path: '/'});
				}
			};

			var setThemeBtn = function(themeName) {
				htThemeLi.find(">div").removeClass("selected");
				htThemeLi.filter("[theme="+themeName+"]").find(">div").addClass("selected");
			}

			htThemeLi.each(function(index){
				var $this = $(this);
				var themeName = $this.attr("theme");
				$this.addClass(themeName).click(function(){
					setTheme(themeName);
				});
			});

			if ($.isFunction($.cookie)){
				var themeName = $.cookie("ht_theme");
				if (themeName) {
					setThemeBtn(themeName);
				}
			}
		}
	});
})(jQuery);
