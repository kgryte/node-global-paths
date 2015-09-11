Global Paths
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Returns [Node.js](http://nodejs.org) global paths.


## Installation

``` bash
$ npm install node-global-paths
```


## Usage

``` javascript
var paths = require( 'node-global-paths' );
```

#### paths

Returns a list of Node global paths.

``` javascript
console.log( paths );
/*
	e.g.,
		[
			'/Users/<user>/.node_modules',
			'/Users/<user>/.node_libraries',
			'/usr/local/<dir>/node/0.12.7/lib/node'
		]
*/
```


## Examples

``` javascript
var cwd = require( 'utils-cwd' )(),
	paths = require( 'node-global-paths' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/node-global-paths.svg
[npm-url]: https://npmjs.org/package/node-global-paths

[travis-image]: http://img.shields.io/travis/kgryte/node-global-paths/master.svg
[travis-url]: https://travis-ci.org/kgryte/node-global-paths

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/node-global-paths/master.svg
[codecov-url]: https://codecov.io/github/kgryte/node-global-paths?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/node-global-paths.svg
[dependencies-url]: https://david-dm.org/kgryte/node-global-paths

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/node-global-paths.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/node-global-paths

[github-issues-image]: http://img.shields.io/github/issues/kgryte/node-global-paths.svg
[github-issues-url]: https://github.com/kgryte/node-global-paths/issues
