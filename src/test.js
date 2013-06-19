
	/**
	* Tests a regular expression against a string
	* @param  {string} value
	* @param  {regexp} expression
	* @return {boolean}
	*/
	function test( value, expression ) {

		if (expression instanceof RegExp) {
			return expression.test( value.trim() );
		};
 
		if (expression instanceof Function) {
			return expression(value);
		};
		
		
	}
