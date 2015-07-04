/*
 Copyright (c) 2015 William Do

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

/*jslint         browser : true, continue : true,
 devel  : true, indent  : 2,    maxerr   : 50,
 newcap : true, nomen   : true, plusplus : true,
 regexp : true, sloppy  : true, vars     : false,
 white  : true
 */
/*global $ */

var go = (function() {

	var prefixes = ['0', 'Moz', 'Webkit'], to, set,
		translations = {},
		cb = 'cubic-bezier',
		ei = 'ease-in', o ='-out', eo = 'ease-out', eio='ease-in-out',
		eases = {}, qd = 'quad-', cu = 'cubic-', qt = 'quart-',
		qn = 'quint-', si = 'sine-', ex = 'expo-', ci = 'circ-',
		bk= 'back-';

		eases['linear'] = 'linear';
		eases[ei] = ei;
		eases[eo] = eo;
		eases[eio] = eio;

		eases[qd + ei] = cb + '(0.550, 0.085, 0.680, 0.530)';
		eases[cu + ei] = cb + '(0.550, 0.055, 0.675, 0.190)';
		eases[qt + ei] = cb + '(0.895, 0.030, 0.685, 0.220)';
		eases[qn + ei] = cb + '(0.755, 0.050, 0.855, 0.060)';
		eases[si + ei] = cb + '(0.470, 0, 0.745, 0.715)';
		eases[ex + ei] = cb + '(0.950, 0.050, 0.795, 0.035)';
		eases[ci + ei] = cb + '(0.600, 0.040, 0.980, 0.335)';
		eases[bk + ei] = cb + '(0.600, -0.280, 0.735, 0.045)';

		eases[qd + eo] = cb + '(0.250, 0.460, 0.450, 0.940)';
		eases[cu + eo] = cb + '(0.215, 0.610, 0.355, 1)';
		eases[qt + eo] = cb + '(0.165, 0.840, 0.440, 1)';
		eases[qn + eo] = cb + '(0.230, 1, 0.320, 1)';
		eases[si + eo] = cb + '(0.390, 0.575, 0.565, 1)';
		eases[ex + eo] = cb + '(0.190, 1, 0.220, 1)';
		eases[ci + eo] = cb + '(0.075, 0.820, 0.165, 1)';
		eases[bk + eo] = cb + '(0.175, 0.885, 0.320, 1.275)';

		eases[qd + eio] = cb + '(0.455, 0.030, 0.515, 0.955)';
		eases[cu + eio] = cb + '(0.645, 0.045, 0.355, 1)';
		eases[qt + eio] = cb + '(0.770, 0, 0.175, 1)';
		eases[qn + eio] = cb + '(0.860, 0, 0.070, 1)';
		eases[si + eio] = cb + '(0.445, 0.050, 0.550, 0.950)';
		eases[ex + eio] = cb + '(1, 0, 0, 1)';
		eases[ci + eio] = cb + '(0.785, 0.135, 0.150, 0.860)';
		eases[bk + eio] = cb + '(0.680, -0.550, 0.265, 1.550)';

	to = function(target, duration, obj) {
		var i = prefixes.length,
			delay = obj.delay || 0,
			ease = obj.ease || "linear",
			settings = duration ? 'all ' + duration + 's ' + eases[ease] + ' ' + delay + 's': 'none',
			complete, getEase;

		complete = function() {
			target.removeEventListener('webkitTransitionEnd', complete);
			target.removeEventListener('transitionend', complete);
			setTimeout(function() {
				obj.onComplete.apply(obj.scope, obj.onCompleteParams);
			},0);
		};
		target.removeEventListener('webkitTransitionEnd', complete);
		target.removeEventListener('transitionend', complete);
		if(obj.onComplete) {
			target.addEventListener('webkitTransitionEnd', complete);
			target.addEventListener('transitionend', complete);
		}
		while(i--) {
			target.style[prefixes[i] + 'Transition'] = settings;
		}
		target.style.transition = settings;
		set(target, obj);
	};

	set = function(target, obj) {
		var j, transform, translate = '', rotate = '', scale = '';
		for(j in obj) {
			if(!/delay|ease|onComplete|onCompleteParams|scope/.test(j)) {
				if(/left|width|top|height|margin|padding/.test(j)) {
					target.style[j] = obj[j] + 'px';
				} else if (/^x|^y|rotate|scaleX|scaleY/.test(j)) {
					transform = true;
					if(!translations[target]) {
						translations[target] = {
							x:0,
							y:0,
							rotate:0,
							scaleX:1,
							scaleY:1,
							xOffset:target.offsetLeft,
							yOffset:target.offsetTop,
							rotateOffset:0,
							scaleXOffset:0,
							scaleYOffset:0
						};
					}
					translations[target][j] = obj[j] - translations[target][j + "Offset"];
				} else {
					target.style[j] = obj[j];
				}
			}
		}
		//translate, scale, rotate
		if(transform) {
			translate = ' translate(' + translations[target].x + 'px, ' + translations[target].y + 'px)';
			scale = ' scale(' + translations[target].scaleX + ', ' + translations[target].scaleY + ')';
			rotate = ' rotate(' + translations[target].rotate + 'deg)';
			target.style.WebkitTransform = target.style.transform = translate + scale + rotate;
		}
	};

	return {
		to:to,
		set:set
	};

}());