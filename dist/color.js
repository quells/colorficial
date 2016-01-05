!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var i in r)("object"==typeof exports?exports:e)[i]=r[i]}}(this,function(){return function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=function(){function e(t){r(this,e);var i,n,s;if("[object String]"===toString.call(t)&&t.length>=6){var a="#"===t.substr(0,1)?t.substr(1):t;i="0x"+a.substr(0,2),n="0x"+a.substr(2,2),s="0x"+a.substr(4,2)}else if(Array.isArray(t)&&3===t.length)i=t[0],n=t[1],s=t[2];else if(3===arguments.length)i=arguments[0],n=arguments[1],s=arguments[2];else if(t.r)i=t.r,n=t.g,s=t.b;else{if(!t.red)throw new TypeError("Invalid Initialization Options");i=t.red,n=t.green,s=t.blue}if(this.red=parseInt(i),this.green=parseInt(n),this.blue=parseInt(s),this.red>255||this.green>255||this.blue>255)throw new TypeError("Invalid Colorspace")}return i(e,[{key:"name",value:function(){var e=this.getColorMap(),t=this.getMatchedColors();if(1===t.length)return t[0];if(t.length>1){var r=this,i=t.map(function(t){return{name:t,distance:r.distance(e[t].reference)}});return i.sort(function(e,t){return e.distance>t.distance?1:e.distance<t.distance?-1:0}),i[0].name}return null}},{key:"names",value:function(){return this.getMatchedColors()}},{key:"getMatchedColors",value:function(){var e=this.getColorMap(),t=[];for(var r in e)this.is(r)&&t.push(r);return t}},{key:"css",value:function(e){var t=this.toArray(),r="rgb(";return e&&(r="rgba(",t.push(e)),r+t.join(", ")+")"}},{key:"cssHSL",value:function(){var e="hsl(",t=[this.hue,this.saturation,this.lightness];return e+t.join(", ")+")"}},{key:"cssHSV",value:function(){var e="hsv(",t=[this.hue,this.saturation,this.value];return e+t.join(", ")+")"}},{key:"distance",value:function(e){var t=this.rgb_to_xyz(this.red,this.green,this.blue),r=this.rgb_to_xyz.apply(this,e),i=this.xyz_to_lab.apply(this,t),n=this.xyz_to_lab.apply(this,r),s=this.de_1994(i,n);return s}},{key:"rgb_to_xyz",value:function(e,t,r){var i,n,s,a=e/255,u=t/255,h=r/255;return a>.04045?(a=(a+.055)/1.055,a=Math.pow(a,2.4)):a/=12.92,u>.04045?(u=(u+.055)/1.055,u=Math.pow(u,2.4)):u/=12.92,h>.04045?(h=(h+.055)/1.055,h=Math.pow(h,2.4)):h/=12.92,a*=100,u*=100,h*=100,i=.4124*a+.3576*u+.1805*h,n=.2126*a+.7152*u+.0722*h,s=.0193*a+.1192*u+.9505*h,[i,n,s]}},{key:"xyz_to_lab",value:function(e,t,r){var i,n,s,a=e/95.047,u=t/100,h=r/108.883;return a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,u=u>.008856?Math.pow(u,1/3):7.787*u+16/116,h=h>.008856?Math.pow(h,1/3):7.787*h+16/116,i=116*u-16,n=500*(a-u),s=200*(u-h),[i,n,s]}},{key:"de_1994",value:function(e,t){var r=Math.sqrt(e[1]*e[1]+e[2]*e[2]),i=Math.sqrt(t[1]*t[1]+t[2]*t[2]),n=r-i,s=e[0]-t[0],a=e[1]-t[1],u=e[2]-t[2],h=Math.sqrt(a*a+u*u-n*n),o=s,l=n/(1+.045*r),c=h/(1+.015*r);return Math.sqrt(o*o+l*l+c*c)}},{key:"toString",value:function(){return this.css()}},{key:"isLight",value:function(){var e=arguments.length<=0||void 0===arguments[0]?200:arguments[0];return this.brightness>=e}},{key:"isDark",value:function(){var e=arguments.length<=0||void 0===arguments[0]?50:arguments[0];return this.brightness<=e}},{key:"isSkinTone",value:function(){var e=arguments.length<=0||void 0===arguments[0]?[139,69,19]:arguments[0];return this.saturation<60&&this.mostlyRed()&&this.distance(e)<35?!0:!1}},{key:"isRed",value:function(e){var t=this.getColorMap(),r=!0;return r=this.hue<=t.red.maxHue||this.hue>t.pink.maxHue,delete t.red.maxHue,r&&this._matchesCriterion(t.red)}},{key:"isGray",value:function(){var e=arguments.length<=0||void 0===arguments[0]?30:arguments[0],t=this.getColorMap(),r=!0;return r=Math.abs(this.red-this.blue)<e&&Math.abs(this.red-this.green)<e&&Math.abs(this.blue-this.green)<e,r&&this._matchesCriterion(t.gray)}},{key:"getColorMap",value:function(){return{red:{reference:[255,0,0],maxHue:10,minSaturation:10},brown:{reference:[112,42,11],minHue:5,maxHue:50},orange:{reference:[253,82,13],minHue:10,maxHue:39,minSaturation:71,minBrightness:40},yellow:{reference:[255,255,0],minHue:40,maxHue:68},green:{reference:[0,255,0],minHue:58.5,maxHue:170,minBrightness:7},blue:{reference:[0,0,255],minHue:167,maxHue:250},indigo:{reference:[0,0,255],minHue:220,maxHue:250,minSaturation:60,maxBrightness:35},violet:{reference:[164,100,223],minHue:220,maxHue:323,minSaturation:13},pink:{reference:[250,50,150],minHue:295,maxHue:334},white:{reference:[255,255,255],maxSaturation:5,minBrightness:95},black:{reference:[0,0,0],maxSaturation:5,maxBrightness:5},gray:{reference:[204,204,204],minBrightness:10,maxBrightness:98}}}},{key:"is",value:function(e){var t=this.getColorMap();if("gray"===e)return this.isGray();if("red"===e)return this.isRed();if(t[e]){var r=t[e];return this._matchesCriterion(r)}return!1}},{key:"_matchesCriterion",value:function(e){var t=!0;return e.minHue&&(t=t&&this.hue>=e.minHue),e.maxHue&&(t=t&&this.hue<=e.maxHue),e.maxValue&&(t=t&&this.value<e.maxValue),e.minValue&&(t=t&&this.value>=e.minValue),e.maxBrightness&&(t=t&&this.brightness<=e.maxBrightness),e.minBrightness&&(t=t&&this.brightness>=e.minBrightness),e.maxSaturation&&(t=t&&this.saturation<=e.maxSaturation),e.minSaturation&&(t=t&&this.saturation>=e.minSaturation),t}},{key:"initializeHSLV",value:function(){var e,t,r=this.red/255,i=this.green/255,n=this.blue/255,s=Math.max(r,i,n),a=Math.min(r,i,n),u=(s+a)/2,h=s;if(s==a)e=t=0;else{var o=s-a;switch(t=u>.5?o/(2-s-a):o/(s+a),s){case r:e=(i-n)/o+(n>i?6:0);break;case i:e=(n-r)/o+2;break;case n:e=(r-i)/o+4}e/=6,e*=3.6}this._hue=parseFloat((100*e).toFixed(2)),this._saturation=parseFloat((100*t).toFixed(2)),this._lightness=parseFloat((100*u).toFixed(2)),this._brightness=parseFloat((299*this.red+587*this.green+114*this.blue)/1e3),this._value=parseFloat(h)}},{key:"toJSON",value:function(){return{red:this.red,green:this.green,blue:this.blue}}},{key:"toArray",value:function(){return[this.red,this.green,this.blue]}},{key:"toString",value:function(){return"["+[this.red,this.green,this.blue].join(", ")+"]"}},{key:"hue",get:function(){return this._hue||this.initializeHSLV(),this._hue}},{key:"saturation",get:function(){return this._saturation||this.initializeHSLV(),this._saturation}},{key:"lightness",get:function(){return this._lightness||this.initializeHSLV(),this._lightness}},{key:"brightness",get:function(){return this.lightness}},{key:"value",get:function(){return this._value||this.initializeHSLV(),this._value}}]),e}();e.exports=n,window.Color=n}])});
//# sourceMappingURL=is-color-color.map?_v=af08a424c0ded423103c