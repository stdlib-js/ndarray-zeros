<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zeros

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a zero-filled [ndarray][@stdlib/ndarray/ctor] having a specified shape and [data type][@stdlib/ndarray/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-zeros
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var zeros = require( '@stdlib/ndarray-zeros' );
```

#### zeros( shape\[, options] )

Creates a zero-filled [ndarray][@stdlib/ndarray/ctor] having a specified shape and [data type][@stdlib/ndarray/dtypes].

```javascript
var arr = zeros( [ 2, 2 ] );
// returns <ndarray>

var sh = arr.shape;
// returns [ 2, 2 ]

var dt = arr.dtype;
// returns 'float64'
```

The specified output [ndarray][@stdlib/ndarray/ctor] `shape` may be either an array-like object or an integer value.

```javascript
var arr = zeros( 2 );
// returns <ndarray>

var sh = arr.shape;
// returns [ 2 ]

var dt = arr.dtype;
// returns 'float64'
```

The function accepts the following `options`:

-   **dtype**: underlying [data type][@stdlib/ndarray/dtypes]. Default: `'float64'`.
-   **order**: specifies whether an [ndarray][@stdlib/ndarray/ctor] is `'row-major'` (C-style) or `'column-major'` (Fortran-style). Default: `'row-major'`.
-   **mode**: specifies how to handle indices which exceed array dimensions (see [`ndarray`][@stdlib/ndarray/ctor]). Default: `'throw'`.
-   **submode**: a mode array which specifies for each dimension how to handle subscripts which exceed array dimensions  (see [`ndarray`][@stdlib/ndarray/ctor]). If provided fewer modes than dimensions, the constructor recycles modes using modulo arithmetic. Default: `[ options.mode ]`.
-   **readonly**: `boolean` indicating whether an array should be **read-only**. Default: `false`.

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having a [`float64`][@stdlib/ndarray/dtypes] data type. To specify an alternative [data type][@stdlib/ndarray/dtypes], provide a `dtype` option.

```javascript
var arr = zeros( [ 2, 2 ], {
    'dtype': 'float32'
});
// returns <ndarray>

var sh = arr.shape;
// returns [ 2, 2 ]

var dt = arr.dtype;
// returns 'float32'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/ndarray-dtypes' );
var zeros = require( '@stdlib/ndarray-zeros' );

// Get a list of data types:
var dt = dtypes();

// Generate zero-filled arrays...
var arr;
var i;
for ( i = 0; i < dt.length; i++ ) {
    arr = zeros( [ 2, 2 ], {
        'dtype': dt[ i ]
    });
    console.log( arr.data );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-zeros.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-zeros

[test-image]: https://github.com/stdlib-js/ndarray-zeros/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/ndarray-zeros/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-zeros/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-zeros?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-zeros.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-zeros/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-zeros/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-zeros/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-zeros/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-zeros/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-zeros/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/stdlib

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
