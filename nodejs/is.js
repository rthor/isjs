/** 
 * is.js - v0.1.3
 * Check your data against regular expressions or known keywords.
 * http://github.com/rthor/isjs
 *
 * Licensed under the MIT license.
 * Copyright (c) 2013 Ragnar Þór Valgeirsson (rthor)
 * http://rthor.is
 */
module.exports = function ( value, expression ) {

	// Declare and initiate variables
	var deep = false,
		regex;

	// If expression is deep
	if (
		typeof expression === 'string' &&
		expression.indexOf(':') !== -1
	) {
		// Set approriate variables
		expression = expression.match( /(\w+)(?:\:)(\w+)/ );
		deep = expression[2];
		expression = expression[1];
	}

	// All regexes that can be tested against.
	regex = {
		cc: {
			'any': /^[0-9]{15,16}$/,
			'AmericanExpress': /^(34)|(37)\d{14}$/,
			'Discover': /^6011\d{12}$/,
			'MasterCard': /^5[1-5]\d{14}$/,
			'Visa': /^4\d{15}$/
		},
		datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
		email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		isbn: /^(?:(?=.{17}$)97[89][ -](?:[0-9]+[ -]){2}[0-9]+[ -][0-9]|97[89][0-9]{10}|(?=.{13}$)(?:[0-9]+[ -]){2}[0-9]+[ -][0-9Xx]|[0-9]{9}[0-9Xx])$/,
		latlng: /-?\d{1,3}\.\d+/,
		phone: {
			'ar': /^(?:\+|[0]{2})?(54)?(:?[\s-])*\d{4}(:?[\s-])*\d{4}$/,
			'au': /^(?:\+|0)?(?:61)?\s?[2-478](?:[ -]?[0-9]){8}$/,
			'fr': /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$/,
			'is': /^(?:\+|[0]{2})?(354)?(:?[\s-])*\d{3}(:?[\s-])*\d{4}$/,
			'uk': /^(?:\+|044)?(?:\s+)?\(?(\d{1,5}|\d{4}\s*\d{1,2})\)?\s+|-(\d{1,4}(\s+|-)?\d{1,4}|(\d{6}))\d{6}$/,
			'us': /^(\d{3})(:?[\s\-])*(\d{3})(:?[\s\-])*(\d{4})$/
		},
		zip: {
			'ar': /^\d{4}$/,
			'au': /^\d{4}$/,
			'at': /^\d{4}$/,
			'be': /^\d{4}$/,
			'br': /^\d{5}[\-]?\d{3}$/,
			'ca': /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
			'dk': /^\d{3,4}$/,
			'de': /^\d{5}$/,
			'es': /^((0[1-9]|5[0-2])|[1-4]\d)\d{3}$/,
			'gb': /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? \d[ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$/,
			'hu': /^\d{4}$/,
			'is': /^\d{3}$/,
			'it': /^\d{5}$/,
			'jp': /^\d{3}-\d{4}$/,
			'lu': /^(L\s*(-|—|–))\s*?[\d]{4}$/,
			'nl': /^[1-9]\d{3}\s?[a-zA-Z]{2}$/,
			'pl': /^\d{2}\-\d{3}$/,
			'se': /^\d{3}\s?\d{2}$/,
			'us': /^(\d{5}([\-]\d{4})?)$/
		}
	};

	// Function object
	regex.fn = {
		even: function ( num ) {
			if ( isNaN( num ) ) num = num.parseInt( num, 10 );
			return isNaN( num ) ? false : num === 0 || ( num % 2 ) === 0;
		},
		function: function ( val ) {
			return typeof val === 'function';
		},
		odd: function ( num ) {
			return !this.even( num );
		},
		ok: function ( val, expression ) {
			if ( typeof val === 'string' ) {
				return expression.test( val.trim() );
			} else {
				return !!val;
			}
		},
		regexp: function ( val ) {
			return val ? (typeof val === 'object' && toString.call(val) === '[object RegExp]') : false;
		}
	};

	// Trims leading and trailing whitespace of a string
	function trim() {
		return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
	}

	// Return boolean based on expression type
 	return regex.fn.regexp(expression) ?
				regex.fn.ok(value, expression) :
			regex.hasOwnProperty(expression) ?
				regex.fn.ok(value, deep ? regex[expression][deep] : regex[expression]) :
			regex.fn.hasOwnProperty( expression ) ?
				( regex.fn[ expression ]( value ) ? true : false ) :
			regex.fn.function( expression ) ?
				( expression( value ) ? true : false ) :
			false;

};