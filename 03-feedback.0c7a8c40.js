!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,p=Math.min,v=function(){return s.Date.now()};function g(e,t,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function h(e){return l=e,f=setTimeout(x,t),s?S(e):u}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function x(){var e=v();if(j(e))return O(e);f=setTimeout(x,function(e){var n=t-(e-c);return d?p(n,a-(e-l)):n}(e))}function O(e){return f=void 0,g&&r?S(e):(r=i=void 0,u)}function w(){var e=v(),n=j(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return h(c);if(d)return f=setTimeout(x,t),S(c)}return void 0===f&&(f=setTimeout(x,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(b(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?u:O(v())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const S={form:document.querySelector(".feedback-form"),btn:document.querySelector("button"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};S.form.addEventListener("input",e(t)((function(e){e.preventDefault(),h[e.target.name]=e.target.value,localStorage.setItem(x,JSON.stringify(h))}),500)),S.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(x))),e.target.reset(),localStorage.removeItem(x)}));let h={},j={};const x="feedback-form-state";!function(){try{j=JSON.parse(localStorage.getItem(x))}catch(e){console.log(e.name),console.log(e.message)}j?(S.input.value=j.email,S.textarea.value=j.message):(S.input.value="",S.textarea.value="")}()}();
//# sourceMappingURL=03-feedback.0c7a8c40.js.map
