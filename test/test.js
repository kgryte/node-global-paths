/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	isStringArray = require( 'validate.io-string-array' ),
	paths = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'node-global-paths', function tests() {

	it( 'export an array', function test() {
		expect( paths ).to.be.an( 'array' );
	});

	it( 'should return an array of strings', function test() {
		assert.isTrue( isStringArray( paths ) );
	});

});
