(self.webpackChunkvisda=self.webpackChunkvisda||[]).push([[436],{7228:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.default=t.exports,t.exports.__esModule=!0},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.default=t.exports,t.exports.__esModule=!0},3884:function(t){t.exports=function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(u){s=!0,i=u}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}},t.exports.default=t.exports,t.exports.__esModule=!0},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.default=t.exports,t.exports.__esModule=!0},3038:function(t,e,n){var r=n(2858),i=n(3884),o=n(379),a=n(521);t.exports=function(t,e){return r(t)||i(t,e)||o(t,e)||a()},t.exports.default=t.exports,t.exports.__esModule=!0},379:function(t,e,n){var r=n(7228);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.default=t.exports,t.exports.__esModule=!0},8992:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return v}});var r=n(7462),i=n(885),o=n(5987),a=n(7294),s=n(1423),u=n(381),c=n(9355),l=n(9701),f=n(1291),d={entering:{opacity:1},entered:{opacity:1}},p={enter:u.x9.enteringScreen,exit:u.x9.leavingScreen},v=a.forwardRef((function(t,e){var n=t.children,u=t.disableStrictModeCompat,v=void 0!==u&&u,h=t.in,m=t.onEnter,y=t.onEntered,g=t.onEntering,x=t.onExit,E=t.onExited,b=t.onExiting,w=t.style,S=t.TransitionComponent,k=void 0===S?s.ZP:S,P=t.timeout,N=void 0===P?p:P,T=(0,o.Z)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),C=(0,c.Z)(),O=C.unstable_strictMode&&!v,I=a.useRef(null),A=(0,f.Z)(n.ref,e),Z=(0,f.Z)(O?I:void 0,A),M=function(t){return function(e,n){if(t){var r=O?[I.current,e]:[e,n],o=(0,i.Z)(r,2),a=o[0],s=o[1];void 0===s?t(a):t(a,s)}}},_=M(g),B=M((function(t,e){(0,l.n)(t);var n=(0,l.C)({style:w,timeout:N},{mode:"enter"});t.style.webkitTransition=C.transitions.create("opacity",n),t.style.transition=C.transitions.create("opacity",n),m&&m(t,e)})),D=M(y),R=M(b),j=M((function(t){var e=(0,l.C)({style:w,timeout:N},{mode:"exit"});t.style.webkitTransition=C.transitions.create("opacity",e),t.style.transition=C.transitions.create("opacity",e),x&&x(t)})),U=M(E);return a.createElement(k,(0,r.Z)({appear:!0,in:h,nodeRef:O?I:void 0,onEnter:B,onEntered:D,onEntering:_,onExit:j,onExited:U,onExiting:R,timeout:N},T),(function(t,e){return a.cloneElement(n,(0,r.Z)({style:(0,r.Z)({opacity:0,visibility:"exited"!==t||h?void 0:"hidden"},d[t],w,n.props.style),ref:Z},e))}))}))},2184:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r.Z}});var r=n(3729)},4604:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(7462),i=n(5987),o=n(7294),a=n(3935),s=n(1510),u=n(1423),c=n(1291),l=n(9355),f=n(381),d=n(9701);function p(t,e){var n=function(t,e){var n,r=e.getBoundingClientRect();if(e.fakeTransform)n=e.fakeTransform;else{var i=window.getComputedStyle(e);n=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}var o=0,a=0;if(n&&"none"!==n&&"string"==typeof n){var s=n.split("(")[1].split(")")[0].split(",");o=parseInt(s[4],10),a=parseInt(s[5],10)}return"left"===t?"translateX(".concat(window.innerWidth,"px) translateX(").concat(o-r.left,"px)"):"right"===t?"translateX(-".concat(r.left+r.width-o,"px)"):"up"===t?"translateY(".concat(window.innerHeight,"px) translateY(").concat(a-r.top,"px)"):"translateY(-".concat(r.top+r.height-a,"px)")}(t,e);n&&(e.style.webkitTransform=n,e.style.transform=n)}var v={enter:f.x9.enteringScreen,exit:f.x9.leavingScreen},h=o.forwardRef((function(t,e){var n=t.children,f=t.direction,h=void 0===f?"down":f,m=t.in,y=t.onEnter,g=t.onEntered,x=t.onEntering,E=t.onExit,b=t.onExited,w=t.onExiting,S=t.style,k=t.timeout,P=void 0===k?v:k,N=t.TransitionComponent,T=void 0===N?u.ZP:N,C=(0,i.Z)(t,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),O=(0,l.Z)(),I=o.useRef(null),A=o.useCallback((function(t){I.current=a.findDOMNode(t)}),[]),Z=(0,c.Z)(n.ref,A),M=(0,c.Z)(Z,e),_=function(t){return function(e){t&&(void 0===e?t(I.current):t(I.current,e))}},B=_((function(t,e){p(h,t),(0,d.n)(t),y&&y(t,e)})),D=_((function(t,e){var n=(0,d.C)({timeout:P,style:S},{mode:"enter"});t.style.webkitTransition=O.transitions.create("-webkit-transform",(0,r.Z)({},n,{easing:O.transitions.easing.easeOut})),t.style.transition=O.transitions.create("transform",(0,r.Z)({},n,{easing:O.transitions.easing.easeOut})),t.style.webkitTransform="none",t.style.transform="none",x&&x(t,e)})),R=_(g),j=_(w),U=_((function(t){var e=(0,d.C)({timeout:P,style:S},{mode:"exit"});t.style.webkitTransition=O.transitions.create("-webkit-transform",(0,r.Z)({},e,{easing:O.transitions.easing.sharp})),t.style.transition=O.transitions.create("transform",(0,r.Z)({},e,{easing:O.transitions.easing.sharp})),p(h,t),E&&E(t)})),H=_((function(t){t.style.webkitTransition="",t.style.transition="",b&&b(t)})),F=o.useCallback((function(){I.current&&p(h,I.current)}),[h]);return o.useEffect((function(){if(!m&&"down"!==h&&"right"!==h){var t=(0,s.Z)((function(){I.current&&p(h,I.current)}));return window.addEventListener("resize",t),function(){t.clear(),window.removeEventListener("resize",t)}}}),[h,m]),o.useEffect((function(){m||F()}),[m,F]),o.createElement(T,(0,r.Z)({nodeRef:I,onEnter:B,onEntered:R,onEntering:D,onExit:U,onExited:H,onExiting:j,appear:!0,in:m,timeout:P},C),(function(t,e){return o.cloneElement(n,(0,r.Z)({ref:M,style:(0,r.Z)({visibility:"exited"!==t||m?void 0:"hidden"},S,n.props.style)},e))}))}))},8707:function(t,e,n){"use strict";n.r(e),n.d(e,{MuiThemeProvider:function(){return Z.Z},ServerStyleSheets:function(){return I.Z},StylesProvider:function(){return A.ZP},ThemeProvider:function(){return Z.Z},alpha:function(){return r.Fq},createGenerateClassName:function(){return C.Z},createMuiTheme:function(){return i.A},createStyles:function(){return u},createTheme:function(){return i.Z},darken:function(){return r._j},decomposeColor:function(){return r.tB},duration:function(){return k.x9},easing:function(){return k.Ui},emphasize:function(){return r._4},fade:function(){return r.U1},getContrastRatio:function(){return r.mi},getLuminance:function(){return r.H3},hexToRgb:function(){return r.oo},hslToRgb:function(){return r.ve},jssPreset:function(){return O.Z},lighten:function(){return r.$n},makeStyles:function(){return d},recomposeColor:function(){return r.wy},responsiveFontSizes:function(){return b},rgbToHex:function(){return r.vq},styled:function(){return S},unstable_createMuiStrictModeTheme:function(){return a},useTheme:function(){return P.Z},withStyles:function(){return N.Z},withTheme:function(){return T}});var r=n(7595),i=n(4897),o=n(7643);function a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return i.Z.apply(void 0,[(0,o.Z)({unstable_strictMode:!0},t)].concat(n))}var s=n(7511);function u(t){return(0,s.Z)(t)}var c=n(7462),l=n(7627),f=n(4982);var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,l.Z)(t,(0,c.Z)({defaultTheme:f.Z},e))},p=n(2192),v=n(4942);function h(t){return String(parseFloat(t)).length===String(t).length}function m(t){return parseFloat(t)}function y(t){return function(e,n){var r=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===n)return e;var i=m(e);if("px"!==r)if("em"===r)i=m(e)*m(t);else if("rem"===r)return i=m(e)*m(t),e;var o=i;if("px"!==n)if("em"===n)o=i/m(t);else{if("rem"!==n)return e;o=i/m(t)}return parseFloat(o.toFixed(5))+n}}function g(t){var e=t.size,n=t.grid,r=e-e%n,i=r+n;return e-r<i-e?r:i}function x(t){var e=t.lineHeight;return t.pixels/(e*t.htmlFontSize)}function E(t){var e=t.cssProperty,n=t.min,r=t.max,i=t.unit,o=void 0===i?"rem":i,a=t.breakpoints,s=void 0===a?[600,960,1280]:a,u=t.transform,c=void 0===u?null:u,l=(0,v.Z)({},e,"".concat(n).concat(o)),f=(r-n)/s[s.length-1];return s.forEach((function(t){var r=n+f*t;null!==c&&(r=c(r)),l["@media (min-width:".concat(t,"px)")]=(0,v.Z)({},e,"".concat(Math.round(1e4*r)/1e4).concat(o))})),l}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.breakpoints,r=void 0===n?["sm","md","lg"]:n,i=e.disableAlign,o=void 0!==i&&i,a=e.factor,s=void 0===a?2:a,u=e.variants,l=void 0===u?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:u,f=(0,c.Z)({},t);f.typography=(0,c.Z)({},f.typography);var d=f.typography,v=y(d.htmlFontSize),m=r.map((function(t){return f.breakpoints.values[t]}));return l.forEach((function(t){var e=d[t],n=parseFloat(v(e.fontSize,"rem"));if(!(n<=1)){var r=n,i=1+(r-1)/s,a=e.lineHeight;if(!h(a)&&!o)throw new Error((0,p.Z)(6));h(a)||(a=parseFloat(v(a,"rem"))/parseFloat(n));var u=null;o||(u=function(t){return g({size:t,grid:x({pixels:4,lineHeight:a,htmlFontSize:d.htmlFontSize})})}),d[t]=(0,c.Z)({},e,E({cssProperty:"fontSize",min:i,max:r,unit:"rem",breakpoints:m,transform:u}))}})),f}var w=n(2112),S=function(t){var e=(0,w.Z)(t);return function(t,n){return e(t,(0,c.Z)({defaultTheme:f.Z},n))}},k=n(381),P=n(9355),N=n(4621),T=(0,n(640).r)({defaultTheme:f.Z}),C=n(3334),O=n(5997),I=n(5690),A=n(8226),Z=n(7761)},9355:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(4427),i=(n(7294),n(4982));function o(){return(0,r.Z)()||i.Z}},9701:function(t,e,n){"use strict";n.d(e,{n:function(){return r},C:function(){return i}});var r=function(t){return t.scrollTop};function i(t,e){var n=t.timeout,r=t.style,i=void 0===r?{}:r;return{duration:i.transitionDuration||"number"==typeof n?n:n[e.mode]||0,delay:i.transitionDelay}}},5067:function(t,e,n){"use strict";var r=n(5318),i=n(862);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(7294)),a=(0,r(n(8786)).default)(o.createElement("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord");e.default=a},3102:function(t,e,n){"use strict";var r=n(5318),i=n(862);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(7294)),a=(0,r(n(8786)).default)(o.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");e.default=a},4343:function(t,e,n){"use strict";var r=n(5318),i=n(862);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(7294)),a=(0,r(n(8786)).default)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");e.default=a},9110:function(t,e,n){"use strict";var r=n(3038);function i(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){u=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw a}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t,e){e=Object.assign({},e);var n,o=function(t){var n=function(e){return"string"==typeof e?t===e:e.test(t)};return e.include?e.include.some(n):!e.exclude||!e.exclude.some(n)},a=i(function(t){var e=new Set;do{var n,r=i(Reflect.ownKeys(t));try{for(r.s();!(n=r.n()).done;){var o=n.value;e.add([t,o])}}catch(a){r.e(a)}finally{r.f()}}while((t=Reflect.getPrototypeOf(t))&&t!==Object.prototype);return e}(t.constructor.prototype));try{for(a.s();!(n=a.n()).done;){var s=r(n.value,2),u=s[0],c=s[1];if("constructor"!==c&&o(c)){var l=Reflect.getOwnPropertyDescriptor(u,c);l&&"function"==typeof l.value&&(t[c]=t[c].bind(t))}}}catch(f){a.e(f)}finally{a.f()}return t};var a=["componentWillMount","UNSAFE_componentWillMount","render","getSnapshotBeforeUpdate","componentDidMount","componentWillReceiveProps","UNSAFE_componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","UNSAFE_componentWillUpdate","componentDidUpdate","componentWillUnmount","componentDidCatch","setState","forceUpdate"];t.exports.react=function(e,n){return(n=Object.assign({},n)).exclude=(n.exclude||[]).concat(a),t.exports(e,n)}},7245:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n(7294),a=m(o),s=m(n(8992)),u=m(n(4604)),c=m(n(2184)),l=n(8707),f=m(n(9110)),d=m(n(5067)),p=m(n(3102)),v=m(n(4343)),h=n(9970);function m(t){return t&&t.__esModule?t:{default:t}}function y(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}var g=function(t){var e=t||{},n=(e.className,e.style,y(e,["className","style"]));return i(void 0!==t?{style:void 0!==t.style?t.style:{},className:void 0!==t.className?t.className:""}:{style:{},className:""},n)},x=function(t){var e=void 0!==t.animation?t.animation:"fade",n=void 0!==t.timeout?t.timeout:"fade"===e?500:200;return{className:void 0!==t.className?t.className:"",children:t.children?t.children:[],index:void 0!==t.index?t.index:0,strictIndexing:void 0===t.strictIndexing||t.strictIndexing,autoPlay:void 0===t.autoPlay||t.autoPlay,stopAutoPlayOnHover:void 0===t.stopAutoPlayOnHover||t.stopAutoPlayOnHover,interval:void 0!==t.interval?t.interval:4e3,animation:e,reverseEdgeAnimationDirection:void 0===t.reverseEdgeAnimationDirection||t.reverseEdgeAnimationDirection,timeout:n,swipe:void 0===t.swipe||t.swipe,navButtonsAlwaysInvisible:void 0!==t.navButtonsAlwaysInvisible&&t.navButtonsAlwaysInvisible,navButtonsAlwaysVisible:void 0!==t.navButtonsAlwaysVisible&&t.navButtonsAlwaysVisible,cycleNavigation:void 0===t.cycleNavigation||t.cycleNavigation,fullHeightHover:void 0===t.fullHeightHover||t.fullHeightHover,navButtonsWrapperProps:g(t.navButtonsWrapperProps),navButtonsProps:g(t.navButtonsProps),NavButton:t.NavButton,NextIcon:void 0!==t.NextIcon?t.NextIcon:a.default.createElement(v.default,null),PrevIcon:void 0!==t.PrevIcon?t.PrevIcon:a.default.createElement(p.default,null),indicators:void 0===t.indicators||t.indicators,indicatorContainerProps:g(t.indicatorContainerProps),indicatorIconButtonProps:g(t.indicatorIconButtonProps),activeIndicatorIconButtonProps:g(t.activeIndicatorIconButtonProps),IndicatorIcon:t.IndicatorIcon,onChange:void 0!==t.onChange?t.onChange:function(){},changeOnFirstRender:void 0!==t.changeOnFirstRender&&t.changeOnFirstRender,next:void 0!==t.next?t.next:function(){},prev:void 0!==t.prev?t.prev:function(){}}},E=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return(0,f.default)(n),n.state={active:0,prevActive:0,displayed:0},n.timer=null,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){var t=x(this.props),e=t.index,n=t.changeOnFirstRender;this.setActive(e,void 0,n),this.start()}},{key:"componentWillUnmount",value:function(){this.stop()}},{key:"componentDidUpdate",value:function(t,e){t=x(t);var n=x(this.props),r=n.autoPlay,i=n.interval,o=n.children,a=n.index;r===t.autoPlay&&i===t.interval||this.reset(),o.length!==t.children.length&&this.setActive(a),t.index!==a&&this.setActive(a)}},{key:"stop",value:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},{key:"start",value:function(){var t=x(this.props),e=t.autoPlay,n=t.interval;e&&(this.timer=setInterval(this.next,n))}},{key:"reset",value:function(){var t=x(this.props).autoPlay;this.stop(),t&&this.start()}},{key:"setActive",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=x(this.props),o=i.onChange,a=i.timeout,s=i.children,u=i.strictIndexing;Array.isArray(s)?(u&&t>s.length-1&&(t=s.length-1),u&&t<0&&(t=0)):t=0;var c=this.state.active;this.setState({active:t,prevActive:c,displayed:c},this.reset),setTimeout((function(){e.setState({displayed:t},(function(){r&&(n(t,c),o(t,c))}))}),a.exit?a.exit:a)}},{key:"next",value:function(t){var e=x(this.props),n=e.children,r=e.next,i=e.cycleNavigation,o=this.state.active+1>n.length-1?i?0:this.state.active:this.state.active+1;this.setActive(o,r),t&&t.stopPropagation()}},{key:"prev",value:function(t){var e=x(this.props),n=e.children,r=e.prev,i=e.cycleNavigation,o=this.state.active-1<0?i?n.length-1:this.state.active:this.state.active-1;this.setActive(o,r),t&&t.stopPropagation()}},{key:"render",value:function(){var t=this,e=x(this.props),n=e.children,r=e.className,o=e.stopAutoPlayOnHover,s=e.animation,u=e.reverseEdgeAnimationDirection,l=e.timeout,f=e.swipe,d=e.navButtonsAlwaysInvisible,p=e.navButtonsAlwaysVisible,v=e.cycleNavigation,h=e.fullHeightHover,m=e.navButtonsProps,g=e.navButtonsWrapperProps,E=e.NavButton,S=e.NextIcon,k=e.PrevIcon,P=e.indicators,N=e.indicatorContainerProps,T=e.indicatorIconButtonProps,C=e.activeIndicatorIconButtonProps,O=e.IndicatorIcon,I=this.props.classes,A=m.className,Z=m.style,M=y(m,["className","style"]),_=g.className,B=g.style,D=y(g,["className","style"]),R=""+(p?I.buttonVisible:I.buttonHidden),j=I.button+" "+R+" "+(h?I.fullHeightHoverButton:"")+" "+A,U=I.buttonWrapper+" "+(h?I.fullHeightHoverWrapper:"")+" "+_,H=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!!v||!(e&&t.state.active+1>n.length-1)&&!(!e&&t.state.active-1<0)};return a.default.createElement("div",{className:I.root+" "+(r||""),onMouseOver:function(){o&&t.stop()},onMouseOut:function(){o&&t.reset()}},Array.isArray(n)?n.map((function(e,r){return a.default.createElement(b,{key:"carousel-item"+r,display:r===t.state.displayed,active:r===t.state.active,isNext:0===t.state.active&&t.state.prevActive===n.length-1||t.state.active===n.length-1&&0===t.state.prevActive?u:t.state.active>t.state.prevActive,child:e,animation:s,timeout:l,swipe:f,next:t.next,prev:t.prev})})):a.default.createElement(b,{key:"carousel-item0",display:!0,active:!0,child:n,animation:s,timeout:l}),!d&&H(!0)&&a.default.createElement("div",i({className:U+" "+I.next,style:B},D),void 0!==E?E(i({onClick:this.next,className:j,style:Z,next:!0,prev:!1},M)):a.default.createElement(c.default,i({className:""+j,onClick:this.next,"aria-label":"Next",style:Z},M),S)),!d&&H(!1)&&a.default.createElement("div",i({className:U+" "+I.prev,style:B},D),void 0!==E?E.apply(void 0,[{onClick:this.prev,className:j,style:m.style,next:!1,prev:!0}].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(M))):a.default.createElement(c.default,i({className:""+j,onClick:this.prev,"aria-label":"Previous",style:m.style},M),k)),P?a.default.createElement(w,{classes:I,length:n.length,active:this.state.active,press:this.setActive,indicatorContainerProps:N,indicatorIconButtonProps:T,activeIndicatorIconButtonProps:C,IndicatorIcon:O}):null)}}]),e}(o.Component);function b(t){var e=(0,h.useSwipeable)({onSwipedLeft:function(){return t.next()},onSwipedRight:function(){return t.prev()}});return e=t.swipe?e:{},t.display?a.default.createElement("div",i({},e,{className:"CarouselItem"}),"slide"===t.animation?a.default.createElement(u.default,{direction:t.active?t.isNext?"left":"right":t.isNext?"right":"left",in:t.active,timeout:t.timeout},a.default.createElement("div",null,t.child)):a.default.createElement(s.default,{in:t.active,timeout:t.timeout},a.default.createElement("div",null,t.child))):null}function w(t){for(var e=t.classes,n=void 0!==t.IndicatorIcon?t.IndicatorIcon:a.default.createElement(d.default,{size:"small",className:e.indicatorIcon}),r=t.indicatorIconButtonProps,o=r.className,s=r.style,u=y(r,["className","style"]),l=t.activeIndicatorIconButtonProps,f=l.className,p=l.style,v=y(l,["className","style"]),h=[],m=function(r){var l=r===t.active?e.indicator+" "+o+" "+e.active+" "+f:e.indicator+" "+o,d=r===t.active?Object.assign({},s,p):s,m=r===t.active?Object.assign({},u,v):u;void 0===m["aria-label"]&&(m["aria-label"]="carousel indicator");var y=a.default.createElement(c.default,i({key:r,className:l,style:d,onClick:function(){t.press(r)},size:"small"},m,{"aria-label":m["aria-label"]+" "+(r+1)}),n);h.push(y)},g=0;g<t.length;g++)m(g);var x=t.indicatorContainerProps,E=x.className,b=x.style,w=y(x,["className","style"]);return a.default.createElement("div",i({className:e.indicators+" "+E,style:b},w),h)}e.default=(0,l.withStyles)({root:{position:"relative",overflow:"hidden"},indicators:{width:"100%",marginTop:"10px",textAlign:"center"},indicator:{cursor:"pointer",transition:"200ms",padding:0,color:"#afafaf","&:hover":{color:"#1f1f1f"},"&:active":{color:"#1f1f1f"}},indicatorIcon:{fontSize:"15px"},active:{color:"#494949"},buttonWrapper:{position:"absolute",height:"100px",backgroundColor:"transparent",top:"calc(50% - 70px)","&:hover":{"& $button":{backgroundColor:"black",filter:"brightness(120%)",opacity:"0.4"}}},fullHeightHoverWrapper:{height:"100%",top:"0"},fullHeightHoverButton:{},buttonVisible:{opacity:"1"},buttonHidden:{opacity:"0"},button:{margin:"0 10px",position:"relative",backgroundColor:"#494949",top:"calc(50% - 20px) !important",color:"white",fontSize:"30px",transition:"200ms",cursor:"pointer","&:hover":{opacity:"0.6 !important"}},next:{right:0},prev:{left:0}})(E)},3405:function(t,e,n){"use strict";var r,i=n(7245);((r=i)&&r.__esModule?r:{default:r}).default},9970:function(t,e,n){!function(t,e){function n(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}})),e.default=t,e}var r=n(e);function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}var o="Left",a="Right",s="Up",u="Down",c={delta:10,preventDefaultTouchmoveEvent:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0},l={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},f="mousemove",d="mouseup",p="touchend",v="touchmove",h="touchstart";function m(t,e,n,r){return t>e?n>0?a:o:r>0?u:s}function y(t,e){if(0===e)return t;var n=Math.PI/180*e;return[t[0]*Math.cos(n)+t[1]*Math.sin(n),t[1]*Math.cos(n)-t[0]*Math.sin(n)]}function g(t,e){var n=function(e){e&&"touches"in e&&e.touches.length>1||t((function(t,n){n.trackMouse&&(document.addEventListener(f,r),document.addEventListener(d,s));var o="touches"in e?e.touches[0]:e,a=y([o.clientX,o.clientY],n.rotationAngle);return i({},t,l,{initial:[].concat(a),xy:a,start:e.timeStamp||0})}))},r=function(e){t((function(t,n){if("touches"in e&&e.touches.length>1)return t;var r="touches"in e?e.touches[0]:e,o=y([r.clientX,r.clientY],n.rotationAngle),a=o[0],s=o[1],u=a-t.xy[0],l=s-t.xy[1],f=Math.abs(u),d=Math.abs(l),p=(e.timeStamp||0)-t.start,v=Math.sqrt(f*f+d*d)/(p||1),h=[u/(p||1),l/(p||1)],g=m(f,d,u,l),x="number"==typeof n.delta?n.delta:n.delta[g.toLowerCase()]||c.delta;if(f<x&&d<x&&!t.swiping)return t;var E={absX:f,absY:d,deltaX:u,deltaY:l,dir:g,event:e,first:t.first,initial:t.initial,velocity:v,vxvy:h};E.first&&n.onSwipeStart&&n.onSwipeStart(E),n.onSwiping&&n.onSwiping(E);var b=!1;return(n.onSwiping||n.onSwiped||"onSwiped"+g in n)&&(b=!0),b&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&e.cancelable&&e.preventDefault(),i({},t,{first:!1,eventData:E,swiping:!0})}))},o=function(e){t((function(t,n){var r;if(t.swiping&&t.eventData){r=i({},t.eventData,{event:e}),n.onSwiped&&n.onSwiped(r);var o=n["onSwiped"+r.dir];o&&o(r)}else n.onTap&&n.onTap({event:e});return i({},t,l,{eventData:r})}))},a=function(){document.removeEventListener(f,r),document.removeEventListener(d,s)},s=function(t){a(),o(t)},u=function(t,e){var i=function(){};if(t&&t.addEventListener){var a=[[h,n],[v,r],[p,o]];a.forEach((function(n){var r=n[0],i=n[1];return t.addEventListener(r,i,{passive:e})})),i=function(){return a.forEach((function(e){var n=e[0],r=e[1];return t.removeEventListener(n,r)}))}}return i},g={ref:function(e){null!==e&&t((function(t,n){if(t.el===e)return t;var r={};return t.el&&t.el!==e&&t.cleanUpTouch&&(t.cleanUpTouch(),r.cleanUpTouch=void 0),n.trackTouch&&e&&(r.cleanUpTouch=u(e,!n.preventDefaultTouchmoveEvent)),i({},t,{el:e},r)}))}};return e.trackMouse&&(g.onMouseDown=n),[g,u]}function x(t,e,n){var r={};return!e.trackTouch&&t.cleanUpTouch?(t.cleanUpTouch(),r.cleanUpTouch=void 0):e.trackTouch&&!t.cleanUpTouch&&t.el&&(r.cleanUpTouch=n(t.el,!e.preventDefaultTouchmoveEvent)),i({},t,r)}function E(t){var e=t.trackMouse,n=r.useRef(i({},l)),o=r.useRef(i({},c));o.current=i({},c,t);var a=r.useMemo((function(){return g((function(t){return n.current=t(n.current,o.current)}),{trackMouse:e})}),[e]),s=a[0],u=a[1];return n.current=x(n.current,o.current,u),s}t.DOWN=u,t.LEFT=o,t.RIGHT=a,t.UP=s,t.useSwipeable=E}(e,n(7294))},1423:function(t,e,n){"use strict";n.d(e,{ZP:function(){return m}});var r=n(5245),i=n(1721),o=n(7294),a=n(3935),s=!1,u=n(1278),c="unmounted",l="exited",f="entering",d="entered",p="exiting",v=function(t){function e(e,n){var r;r=t.call(this,e,n)||this;var i,o=n&&!n.isMounting?e.enter:e.appear;return r.appearStatus=null,e.in?o?(i=l,r.appearStatus=f):i=d:i=e.unmountOnExit||e.mountOnEnter?c:l,r.state={status:i},r.nextCallback=null,r}(0,i.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===c?{status:l}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==d&&(e=f):n!==f&&n!==d||(e=p)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,r=this.props.timeout;return t=e=n=r,null!=r&&"number"!=typeof r&&(t=r.exit,e=r.enter,n=void 0!==r.appear?r.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===f?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===l&&this.setState({status:c})},n.performEnter=function(t){var e=this,n=this.props.enter,r=this.context?this.context.isMounting:t,i=this.props.nodeRef?[r]:[a.findDOMNode(this),r],o=i[0],u=i[1],c=this.getTimeouts(),l=r?c.appear:c.enter;!t&&!n||s?this.safeSetState({status:d},(function(){e.props.onEntered(o)})):(this.props.onEnter(o,u),this.safeSetState({status:f},(function(){e.props.onEntering(o,u),e.onTransitionEnd(l,(function(){e.safeSetState({status:d},(function(){e.props.onEntered(o,u)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:a.findDOMNode(this);e&&!s?(this.props.onExit(r),this.safeSetState({status:p},(function(){t.props.onExiting(r),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:l},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:l},(function(){t.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,e.nextCallback=null,t(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],s=i[1];this.props.addEndListener(o,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===c)return null;var e=this.props,n=e.children,i=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,r.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(u.Z.Provider,{value:null},"function"==typeof n?n(t,i):o.cloneElement(o.Children.only(n),i))},e}(o.Component);function h(){}v.contextType=u.Z,v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},v.UNMOUNTED=c,v.EXITED=l,v.ENTERING=f,v.ENTERED=d,v.EXITING=p;var m=v},1988:function(t,e,n){"use strict";n(7294),n(3405),(0,n(7627).Z)({helloThereStyle:{color:"#BBBBBB"},edgeDetector:{border:"red",borderStyle:"solid"},gridStyles:{}})}}]);
//# sourceMappingURL=6770004b4a7d16d9e65e6deb2a55c0db94c51b48-f3b25a59b96bb730cd00.js.map