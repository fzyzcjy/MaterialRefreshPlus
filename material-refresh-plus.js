
/*********************** material-refresh original code **************************/

(function() {
	"use strict"; !
	function(e) {
		function n(n) {
			if (n = n || {},
			g = n.scrollEl ? n.scrollEl: Q ? g: document, y = e(g), U = n.onBegin, H = n.onEnd, M = n.maxTime || M, O = n.nav || O, 0 === e("#muirefresh").length && o(), m = e("#muiRefresh"), p = e(".mui-spinner-wrapper", m), h = e(".mui-arrow-wrapper", m), v = e(".mui-arrow-main", m), !d()) {
				m.addClass("mui-refresh-nav"),
				S = e(O).height() + 20,
				e(O).offset() && (A = e(O).offset().top, "fixed" !== e(O).css("position") && (S += A), m.css("top", A + "px"));
				var t = e(O).css("z-index");
				m.css("z-index", t - 1)
			}
			n.index && m.css("z-index", ~~n.index),
			n.top && m.css("top", n.top),
			m.addClass(n.theme ? n.theme: T),
			m.addClass(b),
			n.freeze || f()
			//XXX EDIT BY ME
			__material_refresh_plus_init(n);
		}
		function o() {
			document.body.insertAdjacentHTML("beforeend", Z)
		}
		function t(e) {
			F.top = Q && g == document.body ? window.scrollY: g != document ? document.querySelector(g).scrollTop: (document.documentElement || document.body.parentNode || document.body).scrollTop,
			F.top > 0 || E || (w = S + z, m.show(), e = e.originalEvent || e, e.touches[0] && (F.x1 = e.touches[0].pageX, j = F.y1 = e.touches[0].pageY))
		}
		function i(e) {
			var n, o, t = (new Date).getTime();
			if (e = e.originalEvent || e, !(F.top > 0 || E) && e.touches && 1 === e.touches.length) {
				if (n = e.touches[0], F.x2 = n.pageX, F.y2 = n.pageY, o = F.y2 - F.y1, F.y2 - j + B > 0) {
					if (e.preventDefault(), 90 > t - P) return;
					if (! (S - A + Y > w)) return void u();
					w += o,
					r(w)
				}
				F.y1 = n.pageY,
				P = t
			}
		}
		function s(e) {
			F.top > 0 || E || (e.preventDefault(), w > S - A + R ? u() : c())
		}
		function c() {
			/*
			XXX edit by me
			var e = S + z;
			d() ? (m.css("top", e + "px"), m.css("-webkit-transform", "scale(0)")) : m.css("top", A + "px"),
			setTimeout(function() {
				E || (m.css("opacity", 0), m.hide())
			},
			300)*/
		}
		function r(e) {
			var n = 40,
			o = e / n > 1 ? 1 : 0 > e / n ? 0 : e / n,
			t = S + z + e;
			d() && m.css("-webkit-transform", "scale(" + o + ")"),
			m.css("opacity", o),
			m.css("top", t + "px"),
			v.css("-webkit-transform", "rotate(" + -(3 * e) + "deg)")
		}
		function u() {
			if (E = !0, k && "function" == typeof q ? q() : "function" == typeof U && U(), m.css("opacity", 1), k) m.addClass(b),
			m.css("-webkit-transform", "scale(1)");
			else {
				var e = S + D - 20;
				d() || (e += X),
				m.css("top", e + "px")
			}
			h.hide(),
			p.show(),
			N = setTimeout(a, M)
		}
		function a() {
			C = !0,
			m.addClass(x),
			p.hide(),
			setTimeout(function() {
				m.removeClass(x),
				m.hide(),
				c(),
				h.show(),
				E = !1,
				C = !1,
				k && "function" == typeof L ? L() : "function" == typeof H && H(),
				k = !1
			},
			500)
		}
		function d() {
			return 0 === e(O).length
		}
		function f() {
			y.on("touchstart", t),
			y.on("touchmove", i),
			y.on("touchend", s)
		}
		function l() {
			y.off("touchstart", t),
			y.off("touchmove", i),
			y.off("touchend", s)
		}
		var m, p, h, v, w, y = e(document.body),
		g = document.body,
		x = "mui-refresh-noshow",
		b = "mui-refresh-main-animat",
		T = "mui-blue-theme",
		E = !1,
		C = !1,
		k = !1,
		z = -85,
		D = 0,
		Y = 65,
		R = -25,
		X = 20,
		j = 0,
		A = 0,
		B = 2,
		M = 6e3,
		S = 60,
		U = null,
		q = null,
		H = null,
		L = null,
		N = null,
		O = "",
		P = (new Date).getTime(),
		Q = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
		Z = '<div id="muiRefresh" class="mui-refresh-main">            <div class="mui-refresh-wrapper ">                <div class="mui-arrow-wrapper">                    <div class="mui-arrow-main"></div>                </div>                <div class="mui-spinner-wrapper" style="display:none;">                    <div class="mui-spinner-main" >                        <div class="mui-spinner-left">                            <div class="mui-half-circle"></div>                        </div>                        <div class="mui-spinner-right">                            <div class="mui-half-circle"></div>                        </div>                    </div>                </div>            </div>        </div>',
		F = {
			top: 0,
			x1: 0,
			x2: 0,
			y1: 0,
			y2: 0
		};
		n.resolve = function() { ! C && N && (clearTimeout(N), N = null, a())
		},
		n.destroy = function() {
			l(),
			m.remove()
		},
		n.refresh = function(e) {
			if (!E) {
				var n = S + D - 20;
				E = !0,
				k = !0,
				e = e || {},
				q = e.onBegin,
				L = e.onEnd,
				d() || (n += X),
				m.show(),
				m.removeClass(b),
				/*XXX EDIT BY ME m.css("top", n + "px"),*/
				m.css("-webkit-transform", "scale(0.01)"),
				setTimeout(u, 60)
			}
		},
		n.unbindEvents = function() {
			l()
		},
		n.bindEvents = function() {
			f()
		},
		window.mRefresh = n
	} (window.Zepto || window.jQuery)
}).call(this);

/*********************** my additional code **************************/


// http://stackoverflow.com/questions/27078285/simple-throttle-in-js
// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function __throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
	previous = options.leading === false ? 0 : Date.now();
	timeout = null;
	result = func.apply(context, args);
	if (!timeout) context = args = null;
  };
  return function() {
	var now = Date.now();
	if (!previous && options.leading === false) previous = now;
	var remaining = wait - (now - previous);
	context = this;
	args = arguments;
	if (remaining <= 0 || remaining > wait) {
	  if (timeout) {
		clearTimeout(timeout);
		timeout = null;
	  }
	  previous = now;
	  result = func.apply(context, args);
	  if (!timeout) context = args = null;
	} else if (!timeout && options.trailing !== false) {
	  timeout = setTimeout(later, remaining);
	}
	return result;
  };
};

// http://stackoverflow.com/questions/2655925/how-to-apply-important-using-css
(function($) {    
  if ($.fn.style) {
	return;
  }

  // Escape regex chars with \
  var escape = function(text) {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  };

  // For those who need them (< IE 9), add support for CSS functions
  var isStyleFuncSupported = !!CSSStyleDeclaration.prototype.getPropertyValue;
  if (!isStyleFuncSupported) {
	CSSStyleDeclaration.prototype.getPropertyValue = function(a) {
	  return this.getAttribute(a);
	};
	CSSStyleDeclaration.prototype.setProperty = function(styleName, value, priority) {
	  this.setAttribute(styleName, value);
	  var priority = typeof priority != 'undefined' ? priority : '';
	  if (priority != '') {
		// Add priority manually
		var rule = new RegExp(escape(styleName) + '\\s*:\\s*' + escape(value) +
			'(\\s*;)?', 'gmi');
		this.cssText =
			this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
	  }
	};
	CSSStyleDeclaration.prototype.removeProperty = function(a) {
	  return this.removeAttribute(a);
	};
	CSSStyleDeclaration.prototype.getPropertyPriority = function(styleName) {
	  var rule = new RegExp(escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?',
		  'gmi');
	  return rule.test(this.cssText) ? 'important' : '';
	}
  }

  // The style function
  $.fn.style = function(styleName, value, priority) {
	// DOM node
	var node = this.get(0);
	// Ensure we have a DOM node
	if (typeof node == 'undefined') {
	  return this;
	}
	// CSSStyleDeclaration
	var style = this.get(0).style;
	// Getter/Setter
	if (typeof styleName != 'undefined') {
	  if (typeof value != 'undefined') {
		// Set style property
		priority = typeof priority != 'undefined' ? priority : '';
		style.setProperty(styleName, value, priority);
		return this;
	  } else {
		// Get style property
		return style.getPropertyValue(styleName);
	  }
	} else {
	  // Get CSSStyleDeclaration
	  return style;
	}
  };
})(jQuery);

//https://www.html5rocks.com/en/mobile/workingoffthegrid/#toc-appcache
var fireEvent = function(name, data) {
	if(data.callback==undefined)data.callback=function(){};
	var e = document.createEvent("Event");
	e.initEvent(name, true, true);
	e.data = data;
	window.dispatchEvent(e);
};

function __material_refresh_plus_init(ctx){
	console.log("__material_refresh_plus_init");

	mRefresh._refresh = mRefresh.refresh;
	mRefresh._resolve = mRefresh.resolve;

	var MIN_SHOW_LOADING_TIME = 500;

	var activeRefreshingCnt = 0;
	var startTime = -1;
	var disableRefresh = false;

	mRefresh.disableRefresh = function(dis){
		disableRefresh = dis;
	}
	mRefresh.refresh = function(){
		if(disableRefresh) return;
		//console.log('refresh', activeRefreshingCnt, activeRefreshingCnt+1);
		if(activeRefreshingCnt<=0){
			mRefresh._refresh();
			startTime = +new Date();
		}
		++activeRefreshingCnt;
	}
	mRefresh.resolve = function(){
		if(disableRefresh) return;
		//console.log('resolve', activeRefreshingCnt, activeRefreshingCnt-1);
		if(activeRefreshingCnt==1){
			deltaTime = +new Date() - startTime;
			startTime = -1;
			var resolve = function(){
				mRefresh._resolve();
			}
			if(deltaTime<MIN_SHOW_LOADING_TIME){
				window.setTimeout(resolve, MIN_SHOW_LOADING_TIME - deltaTime);
			}else{
				resolve();
			}
		}
		--activeRefreshingCnt;
	}
	mRefresh.activeCnt = function(){
		return activeRefreshingCnt;
	}



	var TRIGGER_REFRESH_MIN = 100;
	var TOUCH_SLOP = 30;
	var DRAG_DIST = 150;

	var active = false;
	var isDragging = false;
	var startPos = -1;
	var lastPos = -1;
	var lastTransY = -1;

	var $muiRefresh = $("#muiRefresh");

	var calSpinnerPos = function(overscrollTop){
		var mTotalDragDistance = DRAG_DIST/2;
		var mSpinnerFinalOffset = DRAG_DIST/2;

		if(overscrollTop<0) overscrollTop=0;
		var originalDragPercent = overscrollTop / mTotalDragDistance;
		var dragPercent = Math.min(1.0, Math.abs(originalDragPercent));
		var adjustedPercent = Math.max(dragPercent - .4, 0) * 5 / 3;
		var extraOS = Math.abs(overscrollTop) - mTotalDragDistance;
		var slingshotDist = mSpinnerFinalOffset;
		var tensionSlingshotPercent = Math.max(0, Math.min(extraOS, slingshotDist * 2)
				/ slingshotDist);
		var tensionPercent = ((tensionSlingshotPercent / 4) - Math.pow(
				(tensionSlingshotPercent / 4), 2)) * 2.0;
		var extraMove = (slingshotDist) * tensionPercent * 2;

		//TODO
		//计算spinner将要（target）被移动到的位置对应的Y坐标,当targetY为0时，小圆圈刚好全部露出来
		var targetY = ((slingshotDist * dragPercent) + extraMove);

		return targetY;
	}

	var panStart = function(e){
		//console.log("panStart");
		if(active) return;
		if(mRefresh.activeCnt() > 0){
			active = false;
		}else{
			active = true;
			startPos = e.targetTouches[0].clientY;
			//console.log("startpos", startPos);
			$muiRefresh
				.css('opacity', 1)
				.css('top', '0px')
				.css('transition', 'none')
				.show();
		}
	};

	var panMove = (function(){
		var core = __throttle(function(e){
			if(!active) return;
			var targetTouch = e.targetTouches[0];

			if(
				isDragging==false && 
				$("body").scrollTop()==0 && 
				(targetTouch.clientY - startPos)>TOUCH_SLOP 
			){
				//console.log("startdrag");
				startPos = targetTouch.clientY;
				isDragging = true;

				$muiRefresh.show();
			}

			if(isDragging){
				//http://stackoverflow.com/questions/9114591/
				lastPos = targetTouch.clientY;
				var dist = targetTouch.clientY - startPos;
				lastTransY = calSpinnerPos(dist);
				$muiRefresh
					.style('transform', 'translateY('+lastTransY+'px)', 'important')
					.show();
				//console.log(lastTransY);

				$(".mui-arrow-main")
					.css('transform', 'rotate('+lastTransY*2+'deg)')
					.css('opacity', 0.1+0.9*lastTransY/150);
			}

			//console.log($muiRefresh.style());

		}, 5);
		return function(e){
			//console.log("panMove");
			if(isDragging){
				e.preventDefault();
			}
			core(e);
		}
	})();

	var panEnd = function(e){
		//console.log("panEnd");
		if(!active)return;
		var deltaY = lastPos - startPos;
		//console.log('end', deltaY);
		active = false;
		isDragging = false;
		$muiRefresh
			.css('transform', 'translateY('+0+'px)')
			.css('top', lastTransY+'px')
		window.setTimeout(function(){
			$(".mui-arrow-main").css('opacity', '1');
			if(deltaY>=TRIGGER_REFRESH_MIN){
				$muiRefresh
					.css('transition', 'top 0.25s ease-out')
					.css('top', '80px');
				fireEvent('refreshclick', {});
			}else{
				$muiRefresh
					.css('transition', 'top 0.25s ease-out')
					.css('top', '0px');
				window.setTimeout(function(){
					$muiRefresh
						.hide()
						.css('top', '');
				}, 250);
			}
		}, 10);
	};

	if(ctx.scrollEl!=undefined){
		//console.log(ctx.scrollEl, $(ctx.scrollEl));
		$(ctx.scrollEl)[0].addEventListener("touchstart", panStart);
		$(ctx.scrollEl)[0].addEventListener("touchmove", panMove);
		$(ctx.scrollEl)[0].addEventListener("touchend", panEnd);
	}

}