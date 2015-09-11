'use strict';

var cwd = require( 'utils-cwd' )(),
	paths = require( './../lib' );

var len = paths.length,
	str,
	i;

for ( i = 0; i < len; i++ ) {
	str = cwd.substring( 0, paths[ i ].length );
	if ( str === paths[ i ] ) {
		console.log( 'Process running from a global Node path: %s.', paths[ i ] );
		return;
	}
}
console.log( 'Process is not running from a global Node path.' );
