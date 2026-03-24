"use strict";var b=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=b(function(x,y){"use strict";var q=require("@stdlib/assert-is-number").isPrimitive,w=require("@stdlib/assert-is-plain-object"),s=require("@stdlib/assert-has-own-property"),c=require("@stdlib/assert-is-array-like"),h=require("@stdlib/ndarray-base-shape2strides"),E=require("@stdlib/ndarray-base-buffer"),O=require("@stdlib/ndarray-base-numel"),T=require("@stdlib/ndarray-ctor"),g=require("@stdlib/ndarray-defaults"),u=require("@stdlib/string-format"),m=g.get("dtypes.default"),f=g.get("order");function P(r){var e,i,n,l,o,v,a,d,t;if(o={},arguments.length>1){if(e=arguments[1],!w(e))throw new TypeError(u("invalid argument. Options argument must be an object. Value: `%s`.",e));s(e,"dtype")?i=e.dtype:i=m,s(e,"order")?n=e.order:n=f,s(e,"mode")&&(o.mode=e.mode),s(e,"submode")&&(o.submode=e.submode),s(e,"readonly")&&(o.readonly=e.readonly)}else i=m,n=f;if(q(r))t=[r];else if(c(r))t=r;else throw new TypeError(u("invalid argument. First argument must be either a nonnegative integer or an array of nonnegative integers. Value: `%s`.",r));if(l=t.length,l>0){if(a=O(t),a!==a||a<0)throw new TypeError(u("invalid argument. First argument must be either a nonnegative integer or an array of nonnegative integers. Value: `%s`.",r));d=h(t,n)}else a=1,d=[0];if(v=E(i,a),v===null)throw new TypeError(u("invalid option. `%s` option must be a recognized data type. Option: `%s`.","dtype",i));return new T(i,v,t,d,0,n,o)}y.exports=P});var V=p();module.exports=V;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
