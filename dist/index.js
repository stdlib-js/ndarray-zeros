"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=q(function(I,y){"use strict";var c=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,b=require("@stdlib/assert-is-plain-object"),o=require("@stdlib/assert-has-own-property"),w=require("@stdlib/assert-is-nonnegative-integer-array").primitives,E=require("@stdlib/assert-is-empty-collection"),T=require("@stdlib/array-base-assert-contains").factory,D=require("@stdlib/ndarray-base-shape2strides"),h=require("@stdlib/ndarray-base-buffer"),O=require("@stdlib/ndarray-base-numel"),P=require("@stdlib/ndarray-ctor"),f=require("@stdlib/ndarray-defaults"),N=require("@stdlib/ndarray-dtypes"),_=require("@stdlib/array-base-join"),v=require("@stdlib/string-format"),l=f.get("dtypes.default"),m=f.get("order"),g=N("numeric_and_generic"),j=T(g);function A(r){var e,i,a,d,n,s,u,t;if(n={},arguments.length>1){if(e=arguments[1],!b(e))throw new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",e));if(o(e,"dtype")){if(i=e.dtype,!j(i))throw new TypeError(v('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"dtype",_(g,'", "'),i))}else i=l;o(e,"order")?a=e.order:a=m,o(e,"mode")&&(n.mode=e.mode),o(e,"submode")&&(n.submode=e.submode),o(e,"readonly")&&(n.readonly=e.readonly)}else i=l,a=m;if(c(r))t=[r];else if(w(r)||E(r))t=r;else throw new TypeError(v("invalid argument. First argument must be either a nonnegative integer or an array of nonnegative integers. Value: `%s`.",r));return d=t.length,d>0?(s=O(t),u=D(t,a)):(s=1,u=[0]),new P(i,h(i,s),t,u,0,a,n)}y.exports=A});var F=p();module.exports=F;
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
