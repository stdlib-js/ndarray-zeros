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

'use strict';

// MODULES //

var isPlainObject = require( '@stdlib/assert-is-plain-object' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isArrayLike = require( '@stdlib/assert-is-array-like' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
var buffer = require( '@stdlib/ndarray-base-buffer' );
var numel = require( '@stdlib/ndarray-base-numel' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// VARIABLES //

var DTYPE = 'float64';
var ORDER = 'row-major';


// MAIN //

/**
* Creates a zero-filled ndarray having a specified shape and data type.
*
* @param {(NonNegativeIntegerArray|NonNegativeInteger)} shape - array shape
* @param {Options} [options] - options
* @param {string} [options.dtype='float64'] - data type
* @param {string} [options.order='row-major'] - array order
* @throws {TypeError} first argument must be either a nonnegative integer or an array of nonnegative integers
* @throws {TypeError} options argument must be an object
* @throws {TypeError} `dtype` option must be a recognized data type
* @throws {TypeError} `order` option must be a recognized array order
* @returns {ndarray} ndarray
*
* @example
* var arr = zeros( [ 2, 2 ] );
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'float64'
*/
function zeros( shape ) {
	var options;
	var ndims;
	var opts;
	var buf;
	var len;
	var st;
	var sh;

	opts = {};
	if ( arguments.length > 1 ) {
		options = arguments[ 1 ];
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( '0N42h', options ) );
		}
		if ( hasOwnProp( options, 'dtype' ) ) {
			opts.dtype = options.dtype;
		} else {
			opts.dtype = DTYPE;
		}
		if ( hasOwnProp( options, 'order' ) ) {
			opts.order = options.order;
		} else {
			opts.order = ORDER;
		}
	} else {
		opts.dtype = DTYPE;
		opts.order = ORDER;
	}
	if ( typeof shape === 'number' ) {
		sh = [ shape ];
	} else if ( isArrayLike( shape ) ) {
		sh = shape;
	} else {
		throw new TypeError( format( '0N466', shape ) );
	}
	ndims = sh.length;
	if ( ndims > 0 ) {
		len = numel( sh );
		if ( len !== len || len < 0 ) {
			// We should only get here if we've been provided an invalid shape (e.g., an array containing negative integers, etc)...
			throw new TypeError( format( '0N466', shape ) );
		}
		st = shape2strides( sh, opts.order );
	} else {
		// For 0-dimensional arrays, the buffer should contain a single element...
		len = 1;
		st = [ 0 ];
	}
	buf = buffer( opts.dtype, len );
	if ( buf === null ) {
		throw new TypeError( format( '0N45O', 'dtype', opts.dtype ) );
	}
	return new ndarray( opts.dtype, buf, sh, st, strides2offset( sh, st ), opts.order ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = zeros;
