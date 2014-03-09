/** 
 * is.js - v0.2.1
 * Check your data against regular expressions or known keywords.
 * http://github.com/rthor/isjs
 *
 * Licensed under the MIT license.
 * Copyright (c) 2013 Ragnar Þór Valgeirsson (rthor)
 * http://rthor.is
 */
window.is = function ( value, expression ) {
	if (typeof expression === undefined) return false;

	// Declare and initiate variables
	var deep = false,
		check;

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
	check = {
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
			'bg': /^\d{4}$/,
			'br': /^\d{5}[\-]?\d{3}$/,
			'ca': /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
			'cy': /^\d{4}$/,
			'cz': /^\d{3} \d{2}$/,
			'dk': /^\d{3,4}$/,
			'de': /^\d{5}$/,
			'ee': /^\d{5}$/,
			'es': /^((0[1-9]|5[0-2])|[1-4]\d)\d{3}$/,
			'fi': /^\d{5}$/,
			'fr': /^\d{5}$/,
			'gb': /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? \d[ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$/,
			'gr': /^\d{3} \d{2}$/,
			'hu': /^\d{4}$/,
			'hr': /^\d{5}$/,
			'is': /^\d{3}$/,
			'it': /^\d{5}$/,
			'jp': /^\d{3}-\d{4}$/,
			'lt': /^(LT-)?\d{5}$/,
			'lu': /^(L\s*(-|—|–))\s*?[\d]{4}$/,
			'lv': /^LV-\d{4}$/,
			'mt': /^[A-Za-z]{3} \d{4}/,
			'nl': /^[1-9]\d{3}\s?[a-zA-Z]{2}$/,
			'no': /^\d{4}$/,
			'pl': /^\d{2}\-\d{3}$/,
			'pt': /^\d{4}$/,
			'ro': /^\d{6}$/,
			'se': /^\d{3}\s?\d{2}$/,
			'si': /^\d{4}$/,
			'sk': /^(SK-)?\d{3} \d{2}$/,
			'tr': /^\d{5}$/,
			'ua': /^\d{5}$/,
			'us': /^(\d{5}([\-]\d{4})?)$/
		}
	};

	// Function object
	check.fn = {
		even: function ( num ) {
			if ( isNaN( num ) ) num = num.parseInt( num, 10 );
			return isNaN( num ) ? false : num === 0 || ( num % 2 ) === 0;
		},
		function: function ( val ) {
			return typeof val === 'function';
		},
		luhn: function ( num ) {
			// Stringify the num
			// Create an array and reverse it
			num = (num + '').split('').reverse();

			// Define variables for later use
			var sum = 0, i, digit;

			for( i = 0; i < num.length; i++) {
				// Assign number to digit and multiply by 2 every odd num
				digit = parseInt(num[ i ], 10) * ((i + 1) % 2 ? 1 : 2);

				// Add to the sum but reduce by 9 if digit > 9
				sum += digit > 9 ? digit - 9 : digit;
			}

			// Return boolean
			return (sum % 10) === 0;
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
 	return check.fn.regexp(expression) ?
				check.fn.ok(value, expression) :
			check.hasOwnProperty(expression) ?
				check.fn.ok(value, deep ? check[expression][deep] : check[expression]) :
			check.fn.hasOwnProperty( expression ) ?
				( check.fn[ expression ]( value ) ? true : false ) :
			check.fn.function( expression ) ?
				( expression( value ) ? true : false ) :
			false;

};