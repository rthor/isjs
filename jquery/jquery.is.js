/** 
 * is.js
 * Version: 0.0.5
 * Created by: Ragnar Þór Valgeirsson (rthor)
 * URL: http://github.com/rthor/isjs
 * License: MIT
 */
(function($) {
	// What does the is plugin do?
	$.is = $.fn.is = function() {
		// If nothing is there - then return that.
		if ( this.length === 0 ) return this;

		// Declare variables
		var value, expression, regex;

		// If plugin is run on the root jQuery object
		// Set up appropriate variables
		if (arguments.length === 2) {
			value = arguments[0];
			expression = arguments[1];

		// Else if the plugin is run on an DOM element
		// Set up the correct expression and value based on
		// node type.
		} else {
			var nodeName = this[0].nodeName.toLowerCase();
			expression = arguments[0];

			value = nodeName === 'input' ?
				this.val() :
				nodeName === 'p' || nodeName === 'h1' || nodeName === 'h2' || nodeName === 'h3' || nodeName === 'h4' || nodeName === 'h5' || nodeName === 'h6' || nodeName === 'a' || nodeName === 'li' || nodeName === 'blockquote' || nodeName === 'pre' ||  nodeName === 'code' || nodeName === 'b' ||  nodeName === 'strong' ||  nodeName === 'em' || nodeName === 'i' || nodeName === 'div' || nodeName === 'button' || nodeName === 'textarea' || nodeName === 'span' ?
				this.html() :
				this.selector;
		}

		// All regexes that can be tested against.
		regex = {
			cc: /^[0-9]{16}$/,
			datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
			email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			isbn: /^(?:(?=.{17}$)97[89][ -](?:[0-9]+[ -]){2}[0-9]+[ -][0-9]|97[89][0-9]{10}|(?=.{13}$)(?:[0-9]+[ -]){2}[0-9]+[ -][0-9Xx]|[0-9]{9}[0-9Xx])$/,
			latlng: /-?\d{1,3}\.\d+/,
			phone: /^(?:\+\d{3}\s?)?\d{3}[ ]?[-]?[ ]?\d{4}$/
		};

		/**
		* Tests a regular expression against a string
		* @param  {string} value
		* @param  {regexp} expression
		* @return {boolean}
		*/
		function test( value, expression ) {
			return expression.test( value.trim() );
		}

		// If the expression is in the regex object
		if (regex.hasOwnProperty(expression)) {
			return test(value, regex[expression]);
		}

		// If the expression is a true regular expression
		if (typeof expression === 'object') {
			return test(value, expression);
		}

		// Return false if everything fails.
		return false;
	};

})(jQuery);