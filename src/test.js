
	/**
	* Tests a regular expression against a string
	* @param  {string} value
	* @param  {regexp} expression
	* @return {boolean}
	*/
	function test( value, expression ) {
		return expression.test( value.trim() );
	}
