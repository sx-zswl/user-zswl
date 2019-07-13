/**
 * @author Roy
 * @date 4/3/2013
 */
(function($) {

$.fn.extend({
	
	stopwatch: function() {
		var $stopwatch = $(this);

		$stopwatch
			.append("<span class='disp'></span>")
			.append("<button class='btn_metro start'>开始</button>")
			.append("<button class='btn_metro green reset'>清除</button>");

		initBtn($stopwatch);

		var $start = $(".start", $stopwatch);
		var $reset = $(".reset", $stopwatch);
		var $disp = $(".disp", $stopwatch);
		var $split = $(".split", $stopwatch);

		$start.on("click", function() {
			stopstart();
		});
		$reset.on("click", function() {
			reset_it();
		});

		var t = [0, 0, 0, 0, 0, 0, 0, 1];
		var firstsplitflag = 0;
		var splittime;

		load();

		function stopstart() {
			t[t[2]] = (new Date()).valueOf();
			t[2] = 1 - t[2];
			if (0 == t[2]) {
				clearInterval(t[4]);
				t[3] += t[1] - t[0];
				$("span", $start).text("开始");
				t[4] = t[1] = t[0] = 0;
				disp();
				firstsplitflag = 0
			} else {
				$("span", $start).text("停止");
				t[4] = setInterval(disp, 43)
			}
		}

		function dosplit() {
			if (0 !== t[2]) {
				$split.html( $split.html() + (t[7]++) + " 分割: " + format(t[1] - t[0]) + "<br />");
			}
		}

		function reset_it() {
			if (t[2]) {
				stopstart()
			}
			t[4] = t[3] = t[2] = t[1] = t[0] = 0;
			disp();
			t[7] = 1
		}

		function disp() {
			if (t[2]) {
				t[1] = (new Date()).valueOf()
			}
			t[6].html(format(t[3] + t[1] - t[0]));
		}

		function format(b) {
			var c = new Date(b + t[5]).toString().replace(/.*([0-9][0-9]:[0-9][0-9]:[0-9][0-9]).*/, "$1");
			var a = String(b % 1000);
			while (a.length < 3) {
				a = "0" + a
			}
			c += "." + a;
			return c
		}

		function load() {
			t[5] = new Date(1970, 1, 1, 0, 0, 0, 0).valueOf();
			t[6] = $disp;
			disp();
		}
	}

});

})(jQuery)
