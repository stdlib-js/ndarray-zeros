// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var m=e,p=r,l=t,j=s,f=n,h=i,g=d,y=o,b=a,u="row-major";var v=function(e){var r,t,s,n,i,d;if(t={},arguments.length>1){if(!m(r=arguments[1]))throw new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",r));p(r,"dtype")?t.dtype=r.dtype:t.dtype="float64",p(r,"order")?t.order=r.order:t.order=u}else t.dtype="float64",t.order=u;if("number"==typeof e)d=[e];else{if(!l(e))throw new TypeError(b("invalid argument. First argument must be either a nonnegative integer or an array of nonnegative integers. Value: `%s`.",e));d=e}if(d.length>0){if((n=g(d))!=n||n<0)throw new TypeError(b("invalid argument. First argument must be either a nonnegative integer or an array of nonnegative integers. Value: `%s`.",e));i=j(d,t.order)}else n=1,i=[0];if(null===(s=h(t.dtype,n)))throw new TypeError(b("invalid option. `%s` option must be a recognized data type. Option: `%s`.","dtype",t.dtype));return new y(t.dtype,s,d,i,f(d,i),t.order)};export{v as default};
//# sourceMappingURL=index.mjs.map
