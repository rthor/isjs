(function($) {
	// What does the is plugin do?
	$.fn.is = function( expression ) {
		var nodeName = this[0].nodeName.toLowerCase(), value, regex;
		console.log( this );

		value = nodeName === 'input' ?
			this.val() :
			nodeName === 'p' || nodeName === 'h1' || nodeName === 'h2' || nodeName === 'h3' || nodeName === 'h4' || nodeName === 'h5' || nodeName === 'h6' || nodeName === 'a' || nodeName === 'li' || nodeName === 'blockquote' || nodeName === 'pre' || nodeName === 'b' || nodeName === 'i' || nodeName === 'div' || nodeName === 'button' || nodeName === 'textarea' || nodeName === 'span' ?
			this.html() :
			this.selector;

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

		if (regex.hasOwnProperty(expression)) {
			return test(value, regex[expression]);
		}

		if (typeof expression === 'object') {
			return test(value, expression);
		}
	};

})(jQuery);
