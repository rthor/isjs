/** 
 * is.js
 * Version: 0.1.0
 * Created by: Ragnar Þór Valgeirsson (rthor)
 * URL: http://github.com/rthor/isjs
 * License: MIT
 */
module.exports = function ( elem, expression ) {

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
	 * Trims leading and trailing whitespace of a string
	 * @return {string}
	 */
	function trim() {
		return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
	}

	/**
	* Tests a regular expression against a string
	* @param  {string} value
	* @param  {regexp} expression
	* @return {boolean}
	*/
	function test( value, expression ) {
		return expression.test( value.trim() );
	}

    if (typeof expression === undefined) return false;

    if (regex.hasOwnProperty(expression)) {
        return test(elem, regex[expression]);
    }

    if (typeof expression === 'object') {
        return test(elem, expression);
    }

    return false;
};