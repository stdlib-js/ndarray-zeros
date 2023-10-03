// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-defaults@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";var p=m.get("dtypes.default"),a=m.get("order");function j(m){var j,f,h,v,b,y,g,c;if(v={},arguments.length>1){if(!e(j=arguments[1]))throw new TypeError(l("0kJ2V,FD",j));f=s(j,"dtype")?j.dtype:p,h=s(j,"order")?j.order:a,s(j,"mode")&&(v.mode=j.mode),s(j,"submode")&&(v.submode=j.submode),s(j,"readonly")&&(v.readonly=j.readonly)}else f=p,h=a;if("number"==typeof m)c=[m];else{if(!r(m))throw new TypeError(l("0kJ5s,Kf",m));c=m}if(c.length>0){if((y=n(c))!=y||y<0)throw new TypeError(l("0kJ5s,Kf",m));g=t(c,h)}else y=1,g=[0];if(null===(b=i(f,y)))throw new TypeError(l("0kJ5A,Bf,Kc","dtype",f));return new o(f,b,c,g,d(c,g),h,v)}export{j as default};
//# sourceMappingURL=index.mjs.map
